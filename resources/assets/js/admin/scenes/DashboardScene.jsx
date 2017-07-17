import React, {Component} from 'react'
import InfoBox from '../components/InfoBox'
import DoughnutChart from '../components/DoughnutChart'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import ObservationsByStateTable from '../components/ObservationsByStateTable'

export default class DashboardScene extends Component {
    constructor(props) {
        super(props)
        document.title = 'Admin Dashboard - TreeSnap'
    }

    render() {
        return (
            <div>
                <h1 className="title is-3">Dashboard</h1>

                <div className="columns">
                    <div className="column">
                        <InfoBox title="Registered Users" icon="fa-users" url="/admin/web/analytics/users/count"/>
                    </div>
                    <div className="column">
                        <InfoBox title="Recorded Observations"
                                 icon="fa-users"
                                 url="/admin/web/analytics/observations/count"/>
                    </div>
                    <div className="column">
                        <InfoBox title="Trained Users"
                                 icon="fa-users"
                                 url="/admin/web/analytics/users/trained/percentage"/>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="box is-full-height">
                            <h4 className="title is-5">Observations Distribution</h4>
                            <DoughnutChart url="/admin/web/analytics/observations/distribution"/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box is-full-height">
                            <h4 className="title is-5">Users</h4>
                            <LineChart/>
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="box is-full-height">
                            <h4 className="title is-5">Observations by Season</h4>
                            <BarChart/>
                        </div>
                    </div>

                    <div className="column">
                        <div className="box is-full-height">
                            <h4 className="title is-5">Observations by State</h4>
                            <ObservationsByStateTable/>
                            <p className="help">Sorted by number of observations and limited to top 5.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}