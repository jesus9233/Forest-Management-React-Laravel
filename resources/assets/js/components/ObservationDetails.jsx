import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Map from '../UI/Map'
import Marker from '../UI/Marker'
import Modal from '../UI/Modal'
import ImageGallery from 'react-image-gallery'
import moment from 'moment'
import BoxModal from './BoxModal'
import FlagFrom from './FlagForm'
import CollectionForm from './CollectionForm'
import Labels from '../helpers/Labels'
import Utils from '../helpers/Utils'

export default class ObservationDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            markers            : [],
            center             : {
                lat: 40.354388,
                lng: -95.998237
            },
            zoom               : 4,
            showControlModal   : false,
            controlModalContent: '',
            collections        : []
        }
    }

    /**
     * Set up the observation state.
     */
    componentWillMount() {
        this._setup(this.props.observation)
    }

    /**
     * Fix height and load collections.
     */
    componentDidMount() {
        if (window.fixHeight) {
            window.fixHeight()
        }
        this.loadCollections()
    }

    /**
     * If the observation changes, reset the observation state.
     */
    componentWillReceiveProps(props) {
        this._setup(props.observation)
    }

    /**
     * Load all collections that a user has created.
     */
    loadCollections() {
        if (!this.props.showControls) {
            return
        }

        axios.get('/web/collections/mapped').then(response => {
            let collections = response.data.data
            this.setState({collections})
        }).catch(error => {
            console.log(error)
        })
    }

    /**
     * Set up the state.
     */
    _setup(observation) {
        if (typeof observation.location !== 'undefined') {
            observation.latitude        = observation.location.latitude
            observation.longitude       = observation.location.longitude
            observation.collection_date = moment(observation.date.date).format('LLL')
        }

        this.observation = observation

        this.setState(Object.assign({}, observation, {
            markers    : [{
                image   : observation.images.images ? observation.images.images[0] : '',
                position: {
                    latitude : observation.latitude,
                    longitude: observation.longitude
                }
            }],
            center     : {
                lat: observation.latitude,
                lng: observation.longitude
            },
            zoom       : 4,
            loading    : false,
            collections: this.state.collections
        }))

        setTimeout(() => {
            if (!this.map) {
                return
            }

            this.map.goTo({
                lat: observation.latitude,
                lng: observation.longitude
            }, 4)
        }, 500)
    }

    /**
     * Render each image for the image gallery.
     */
    _renderImage(item) {
        return (
            <div className='image-gallery-image'
                 style={{backgroundColor: this.observation.images.images.length > 1 ? '#222' : 'transparent'}}>
                <img
                    src={item.original}
                    alt="Plant Image"
                />
            </div>
        )
    }

    /**
     * Render the images modal
     */
    _renderImagesModal() {
        if (this.observation.images.images.length === 0)
            return null

        let images       = []
        let imagesObject = this.observation.images

        Object.keys(imagesObject).map(key => {
            imagesObject[key].map(image => {
                images.push({
                    original: image
                })
            })
        })

        return (
            <Modal ref={ref => this.modal = ref}>
                <ImageGallery
                    items={images}
                    slideInterval={2000}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    renderItem={this._renderImage.bind(this)}
                />
            </Modal>
        )
    }


    /**
     * Render the card control buttons.
     */
    _renderControls() {
        if (this.props.showControls === false) {
            return null
        }

        return (
            <div>
                <div className="flexbox observation-tools">
                    <a className="button is-outlined"
                       onClick={() => this.setState({controlModalContent: 'collection', showControlModal: true})}>
                        <span className="icon is-small">
                            <i className="fa fa-star text-success"></i>
                        </span>
                        <span>Add to Collection</span>
                    </a>
                    {/*<a className="button is-outlined">
                     <span className="icon is-small">
                     <i className="fa fa-share text-success"></i>
                     </span>
                     <span>Share Link</span>
                     </a>*/}
                    {this.observation.flags.length === 0 ?
                        <a className="button is-outlined"
                           onClick={() => this.setState({controlModalContent: 'flag', showControlModal: true})}>
                            <span className="icon is-small">
                                <i className="fa fa-flag text-danger"></i>
                            </span>
                            <span>Flag Observation</span>
                        </a>
                        : null }
                </div>

                {this._renderControlModal()}
            </div>
        )
    }

    /**
     * Render the control modal where users can add the
     * observation to a collection, flag it, etc.
     * @returns {XML}
     * @private
     */
    _renderControlModal() {
        return (
            <BoxModal
                visible={this.state.showControlModal}
                onCloseRequest={() => this.setState({showControlModal: false})}>
                {this.state.controlModalContent === 'flag' ? this._renderFlagForm() : null}
                {this.state.controlModalContent === 'collection' ? this._renderCollectionForm() : null}
            </BoxModal>
        )
    }

    /**
     * Render the flagging form.
     *
     * @returns {XML}
     * @private
     */
    _renderFlagForm() {
        return (
            <FlagFrom observationId={this.observation.observation_id}
                      onSubmit={(flag) => {
                          this.props.onFlagCreated(flag)
                          this.setState({showControlModal: false})
                      }}/>
        )
    }

    /**
     * Render the collection form.
     *
     * @returns {XML}
     * @private
     */
    _renderCollectionForm() {
        return (
            <CollectionForm observationId={this.observation.observation_id}
                            collections={this.state.collections}
                            onSubmit={(collection) => {
                                this.props.onAddedToCollection(collection)
                                this.setState({showControlModal: false})
                            }}/>
        )
    }

    /**
     * Decode meta data.
     *
     * @param label
     * @param data
     * @param key
     * @returns {XML}
     * @private
     */
    _renderMetaData(label, data, key) {
        if (Utils.isJson(data) === true) {
            data = JSON.parse(data)
        }

        return (
            <tr key={key}>
                <th>{label}</th>
                <td>
                    {data} {key === 'comment' ?
                    <p className="help">
                        <span className="icon is-small">
                            <i className="fa fa-lock"></i>
                        </span>
                        <span>Only you can see this comment</span>
                    </p>
                    : null}
                </td>
            </tr>
        )
    }

    render() {
        let data = this.observation.meta_data
        return (
            <div className="box">
                <h3 className="title is-4">{this.observation.observation_category}</h3>

                <div className="columns mb-none">
                    <div className="column is-8-desktop" style={{minHeight: '300px'}}>
                        <div className="flexbox flex-column flex-space-between" style={{minHeight: '300px'}}>
                            <table className="table is-striped">
                                <tbody>
                                <tr>
                                    <th style={{width: 150}}>Submitted By</th>
                                    <td>{this.observation.user.name}</td>
                                </tr>
                                {Object.keys(data).map(key => {
                                    const label = typeof Labels[key] !== 'undefined' ? Labels[key] : key
                                    return this._renderMetaData(label, data[key], key)
                                })}
                                <tr>
                                    <th>Date Collected</th>
                                    <td>{ this.observation.collection_date }</td>
                                </tr>
                                {this.observation.images.length === 0 ? null :
                                    <tr>
                                        <th>Photos</th>
                                        <td>
                                            <a href="javascript:;" onClick={() => this.modal.open()}>
                                                See All Photos
                                            </a>
                                        </td>
                                    </tr>
                                }
                                </tbody>
                            </table>

                            {this._renderControls()}
                        </div>
                    </div>

                    <div className="column">
                        <div style={{height: '300px', width: '100%', position: 'relative'}}>
                            <Map
                                ref={ref => this.map = ref}
                                style={{height: '300px'}}
                                center={this.state.center}
                                zoom={this.state.zoom}
                            >
                                {this.state.markers.map((marker, index) => {
                                    return (
                                        <Marker
                                            key={index}
                                            position={marker.position}
                                            show={true}
                                        >
                                            {marker.image !== '' ?
                                                <div className="callout">
                                                    <img src={marker.image} alt={marker.title} style={{
                                                        width : 'auto',
                                                        height: 100
                                                    }}/>
                                                </div>
                                                : null }
                                        </Marker>
                                    )
                                })}
                            </Map>
                        </div>
                    </div>
                </div>
                {this._renderImagesModal()}
            </div>
        )
    }
}

ObservationDetails.PropTypes = {
    observation        : PropTypes.object.isRequired,
    showControls       : PropTypes.bool,
    onAddedToCollection: PropTypes.func,
    onFlagCreated      : PropTypes.func
}

ObservationDetails.defaultProps = {
    showControls: false,
    onFlagCreated(flag) {
    },
    onAddedToCollection(collection) {
    }
}