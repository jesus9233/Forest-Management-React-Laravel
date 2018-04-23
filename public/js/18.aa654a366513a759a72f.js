webpackJsonp([18],{IFrJ:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setPath()}return n(e,[{key:"setPath",value:function(){this.path=window.location.pathname,"/"!==this.path&&this.path.replace(/\/$/g,"")}},{key:"isActive",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is-active";return this.setPath(),t&&this.path===e?a:!t&&this.path.indexOf(e)>=0?a:null}},{key:"parseUrl",value:function(e){var t={};return(e=e.substr(1)).split("&").forEach(function(e){if(e){var a=(e=e.split("+").join(" ")).indexOf("="),n=a>-1?e.substr(0,a):e,r=a>-1?decodeURIComponent(e.substr(a+1)):"",i=n.indexOf("[");if(-1===i)t[decodeURIComponent(n)]=r;else{var o=n.indexOf("]",i),s=decodeURIComponent(n.substring(i+1,o));n=decodeURIComponent(n.substring(0,i)),t[n]||(t[n]=[]),s?t[n][s]=r:t[n].push(r)}}}),t}}]),e}();t.a=new r},"OE/d":function(e,t,a){"use strict";var n=a("t4LX"),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t&&(t=JSON.parse(JSON.stringify(window.TreeSnap))),this._role=null!==t.role?t.role.toLowerCase():null,this._isLoggedIn=t.loggedIn,this._isAdmin="admin"===this._role,this._isScientist="scientist"===this._role,this._user=t.user,this._groups=[],this._abilities={member:[],owner:[],admin:[]},this._role&&(this._role=this._role.toLowerCase()),this.initAbilities(),this.loadGroups(),n.a.listen("user.groups.updated",this.loadGroups.bind(this))}return i(e,[{key:"initAbilities",value:function(){this._abilities.user=["create notes","create collections","flag observations"],this._abilities.scientist=["contact users","confirm species","access admin pages","view accurate location"].concat(this._abilities.user),this._abilities.admin=["manage users","delete observations","manage events"].concat(this._abilities.scientist)}},{key:"loadGroups",value:function(){var e=this;this.authenticated()&&axios.get("/web/groups?with_users=1").then(function(t){e._groups=t.data.data.map(function(e){return{id:e.id,users:e.users.map(function(e){return e.id})}})}).catch(function(e){console.log(e)})}},{key:"can",value:function(e){return!(!this.authenticated()||null===this._role)&&this._abilities[this._role].indexOf(e)>-1}},{key:"owns",value:function(e,t){return void 0===t&&(t="user_id"),"object"===(void 0===e?"undefined":r(e))?Array.isArray(e)?e.every(this.owns.bind(this)):void 0!==e[t]&&e[t]===this._user.id:"number"==typeof e&&this._user.id===e}},{key:"inGroupWith",value:function(e){for(var t in this._groups)if(this._groups[t].users.indexOf(e)>-1)return!0;return!1}},{key:"inGroup",value:function(e){for(var t in this._groups)if(this._groups[t].id===e)return!0;return!1}},{key:"authenticated",value:function(){return this._isLoggedIn}},{key:"admin",value:function(){return this._isAdmin}},{key:"scientist",value:function(){return this._isScientist}},{key:"role",value:function(){return this._role}},{key:"user",value:function(){return this._user}}]),e}();t.a=new o},TIMf:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),i(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"mb-1"},"Copyright © ",(new Date).getFullYear()," University of Tennessee Knoxville and University of Kentucky."),r.a.createElement("p",null,r.a.createElement("a",{href:"/privacy-policy"},"Privacy Policy and Terms of Use")),r.a.createElement("div",{className:"columns logos"},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.utk.edu/"},r.a.createElement("img",{src:"/images/ut3.png",alt:"University of Tennessee Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://uky.edu"},r.a.createElement("img",{src:"/images/uky3.png",alt:"University of Kentucky Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.nsf.gov/"},r.a.createElement("img",{src:"/images/nsf1.png",alt:"NSF Logo"}))))))}}]),t}();t.a=o},cabM:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),i=a("KSGD"),o=a.n(i),s=a("IFrJ"),l=a("F8kA"),c=a("OE/d"),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={isActive:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),u(t,[{key:"toggle",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"+(this.props.home?" home-nav":"")},r.a.createElement("div",{className:this.props.container?"container is-fluid":"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.c,{to:"/",className:"navbar-item"},r.a.createElement("img",{src:"/logo/ts-logo-"+(this.props.home?"48":"32")+".png",alt:"Logo",className:"logo-img"}),r.a.createElement("span",{className:"logo-text"},r.a.createElement("b",null,"Tree"),r.a.createElement("span",{style:{fontWeight:300}},"Snap"))),r.a.createElement("div",{className:"navbar-burger",onClick:this.toggle.bind(this)},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"+(this.state.isActive?" is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{href:"https://www.facebook.com/treesnapapp/",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("a",{href:"https://twitter.com/Treesnapapp",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-twitter"})))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement(l.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"is-active"},"Home"),r.a.createElement(l.c,{to:"/map",className:"navbar-item",activeClassName:"is-active"},"Map"),r.a.createElement(l.c,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About"),c.a.authenticated()?r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(l.c,{to:"/account",className:"navbar-link",activeClassName:"is-active"},"Account"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(l.c,{to:"/account/observations",className:"navbar-item",activeClassName:"is-active"},"My Observations"),r.a.createElement(l.c,{to:"/account/groups",className:"navbar-item",activeClassName:"is-active"},"Groups"),r.a.createElement(l.c,{to:"/account/collections",className:"navbar-item",activeClassName:"is-active"},"Collections"),r.a.createElement(l.c,{to:"/account/filters",className:"navbar-item",activeClassName:"is-active"},"Filters"),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement(l.c,{to:"/account",className:"navbar-item",activeClassName:"is-active"},"Settings"),r.a.createElement("a",{href:"/logout",className:"navbar-item"},"Logout"))):null,c.a.authenticated()?null:r.a.createElement("a",{href:"/login",className:"navbar-item "+s.a.isActive("/login")},"Login"),c.a.authenticated()?null:r.a.createElement("a",{href:"/register",className:"navbar-item "+s.a.isActive("/register")},"Register"),c.a.can("access admin pages")?r.a.createElement("a",{href:"/admin",className:"navbar-item "+s.a.isActive("/admin",!1)},"Admin"):null))))}}]),t}();t.a=m,m.PropTypes={container:o.a.bool,home:o.a.bool},m.defaultProps={container:!1,home:!1}},fv2h:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("U7vG"),r=a.n(n),i=a("cabM"),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),o(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"is-small mt-3 has-text-centered-mobile"},r.a.createElement("a",{href:"https://itunes.apple.com/us/app/treesnap/id1226499160?mt=8"},r.a.createElement("img",{src:"/images/Download_on_the_App_Store_Badge_US-UK_135x40.svg",alt:"apple",className:"apple-badge-img"})),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.treesource"},r.a.createElement("img",{src:"/images/google-play-badge.png",alt:"google play badge",className:"google-badge-img"})))}}]),t}(),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),l(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"home-inner"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"home-text"},r.a.createElement("h3",{className:"title is-4 mb-none"},"AVAILABLE NOW"),r.a.createElement("h1",{className:"title is-1"},"Help Our Nation’s Trees!"),r.a.createElement("p",null,"Invasive diseases and pests threaten the health of America’s forests. Scientists are working to understand what allows some individual trees to survive, but they need to find healthy, resilient trees in the forest to study. That’s where concerned foresters, landowners, and citizens (you!) can help. Tag trees you find in your community, on your property, or out in the wild using TreeSnap! Scientists will use the data you collect to locate trees for research projects like studying the genetic diversity of tree species and building better tree breeding programs.")),r.a.createElement(s,null)),r.a.createElement("div",{className:"column is-3 has-text-right mock-container is-hidden-mobile"},r.a.createElement("img",{src:"/images/mock-min.png",alt:"Mock Device",className:"mockup-img"})))))}}]),t}(),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),u(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title is-3 featured-title"},"Application Features"),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("div",{className:"tile is-child box feature-tile"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("img",{src:"/images/flat-icons/earth-globe.png",alt:"Man Icon",className:"feature-icon"})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title"},"Availability"),r.a.createElement("p",{className:"feature-text"},"TreeSnap is available for iOS and Android smart phones, and is",r.a.createElement("b",null," completely free"),". The app will be available on the Apple AppStore and Google Play."))))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("div",{className:"tile is-child box feature-tile"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("img",{src:"/images/flat-icons/folder.png",alt:"Man Icon",className:"feature-icon"})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title"},"It's a Snap"),r.a.createElement("p",{className:"feature-text"},"Come across an ash, hemlock, chestnut, or white oak in the woods? Record it with TreeSnap and its geolocation will be shared with scientists to study it.")))))),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("div",{className:"tile is-child box feature-tile"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("img",{src:"/images/flat-icons/archives.png",alt:"Man Icon",className:"feature-icon"})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title"},"Data Collection"),r.a.createElement("p",{className:"feature-text"},"TreeSnap is easy to use. Snap a photo, answer a few questions and be done in a couple of taps."))))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("div",{className:"tile is-child box feature-tile"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("img",{src:"/images/flat-icons/transfer.png",alt:"Man Icon",className:"feature-icon"})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title"},"Sync"),r.a.createElement("p",{className:"feature-text"},"Create an account and sync your observations with the TreeSnap server wirelessly.")))))),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("div",{className:"tile is-child box feature-tile"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("img",{src:"/images/flat-icons/padlock.png",alt:"Man Icon",className:"feature-icon"})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title"},"Privacy"),r.a.createElement("p",{className:"feature-text"},"The GPS location of your trees is protected, and not revealed to outside parties. Our map will only display the approximate location of each tree, or you can opt out of adding your data to the map entirely. Only TreeSnap related research programs will have access to this information."))))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("div",{className:"tile is-child box feature-tile"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("img",{src:"/images/flat-icons/teamwork-3.png",alt:"Man Icon",className:"feature-icon"})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title"},"Contribute"),r.a.createElement("p",{className:"feature-text"},"Information reported in TreeSnap is used by real scientists. That ash you've found might be the start of a completely new breeding program."))))))))}}]),t}(),f=a("TIMf"),p=a("KSGD"),d=a.n(p),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={leaders:[],loading:!0},a.loadLeaders(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),h(t,[{key:"loadLeaders",value:function(){var e=this;axios.get("/web/leaderboard/"+this.props.limit).then(function(t){e.setState({leaders:t.data.data,loading:!1})}).catch(function(t){e.setSTate({loading:!1}),console.log(t)})}},{key:"getOrdinalUnit",value:function(e){return 1===e?"st":2===e?"nd":3===e?"rd":"th"}},{key:"getColorClass",value:function(e){switch(e){case 1:return"is-success";case 2:return"is-warning";case 3:return"is-danger";case 4:return"is-info";default:return"is-dark"}}},{key:"renderLeader",value:function(e,t){var a=t+1;return r.a.createElement("div",{key:t,className:"item-box elevation-1 is-lighter-dark is-flex flex-space-between flex-v-center"},r.a.createElement("div",{className:"is-flex flex-v-center"},e.thumbnail.src.length>0?r.a.createElement("div",{className:"item mr-1"},r.a.createElement("img",{src:e.thumbnail.src,alt:e.thumbnail.alt,className:"item-thumbnail img-circle elevation-1",style:{marginTop:8}})):null,r.a.createElement("div",{className:"item"},r.a.createElement("strong",null,e.name),r.a.createElement("div",{className:"text-dark-muted"},"Submitted ",e.observations_count," observations"))),r.a.createElement("div",{className:"hexagon "+this.getColorClass(a)},r.a.createElement("span",{className:"is-block has-text-centered"},r.a.createElement("b",null,a),r.a.createElement("small",null,this.getOrdinalUnit(a)))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?r.a.createElement("p",{className:"has-text-centered"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"})):null,this.state.leaders.map(this.renderLeader.bind(this)))}}]),t}(),b=v;v.propTypes={limit:d.a.number},v.defaultProps={limit:5};var y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),y(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){window.twttr&&(window.twttr.widgets.load(),clearInterval(e.interval))},15)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{className:"twitter-timeline","data-height":"487","data-width":"432","data-link-color":"#2A9D8F",href:"https://twitter.com/Treesnapapp?ref_src=twsrc%5Etfw"},"Tweets by Treesnapapp"))}}]),t}(),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var N=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={events:[],loading:!0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),g(t,[{key:"componentDidMount",value:function(){this.loadEvents()}},{key:"loadEvents",value:function(){var e=this;axios.get("/web/events/"+this.props.limit).then(function(t){e.setState({events:t.data.data,loading:!1})}).catch(function(t){console.log(t),e.setState({loading:!1})})}},{key:"renderEvent",value:function(e,t){var a=e.formatted_start_date,n=e.formatted_end_date,i=e.location;return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"is-flex"},r.a.createElement("div",{className:"item has-text-centered font-weight-light bg-warning text-small elevation-2",style:{flexBasis:65,minWidth:65,maxWidth:65,height:65,borderRadius:"50%"}},r.a.createElement("p",{style:{marginTop:13}},r.a.createElement("strong",null,a.day," ",a.month)),r.a.createElement("p",null,a.year)),r.a.createElement("div",{className:"item-box elevation-1 is-lighter-dark is-flex ml-1 text-dark-muted"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,r.a.createElement("strong",null,e.title)),r.a.createElement("p",null,e.description),i?r.a.createElement("div",{className:"text-dark-muted mb-1"},r.a.createElement("strong",null,"Where?"),r.a.createElement("br",null),i.split("\n").map(function(e,t){return r.a.createElement("div",{key:t},e)})):null,r.a.createElement("div",{className:"text-dark-muted text-small"},"Event starts at ",a.month,", ",a.day," ",a.year," ",a.time),n?r.a.createElement("p",{className:"text-dark-muted text-small"},"Event ends at ",n.month,", ",n.day," ",n.year," ",n.time):null,e.link||i?r.a.createElement("div",{className:"is-flex flex-space-between"},e.link?r.a.createElement("a",{href:e.link,className:"button is-small is-info",target:"_blank"},r.a.createElement("i",{className:"fa fa-facebook mr-0"}),"View Event"):null,i?r.a.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query="+i.split("\n").join(" "),className:"button is-small is-primary",target:"_blank"},r.a.createElement("i",{className:"fa fa-map-marker mr-0"}),"Map It"):null):null))))}},{key:"render",value:function(){return r.a.createElement("div",{style:{maxHeight:487,overflowY:"auto"},className:"invisible-scrollbar"},this.state.loading?r.a.createElement("p",{className:"has-text-centered"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"})):null,this.state.events.map(this.renderEvent.bind(this)),0!==this.state.events.length||this.state.loading?null:r.a.createElement("p",{className:"text-dark-muted has-text-centered"},"There are no upcoming events at this time"))}}]),t}(),w=N;N.propTypes={limit:d.a.number},N.defaultProps={limit:3};var _=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var k=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return document.title="TreeSnap - Help Our Nation's Trees!",a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),_(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home"},r.a.createElement(i.a,{home:!0}),r.a.createElement(c,null)),r.a.createElement("div",{className:"home-section bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-1"},r.a.createElement("h3",{className:"title is-3 bg-dark has-text-centered mb-none"},"Leaderboard"),r.a.createElement("p",{className:"has-text-centered text-dark-muted mb-0"},"Top Submitters of All Time"),r.a.createElement(b,{limit:5}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-1"},r.a.createElement("h3",{className:"title is-3 bg-dark has-text-centered mb-none"},"Events"),r.a.createElement("p",{className:"has-text-centered text-dark-muted mb-0"},"Upcoming Events"),r.a.createElement(w,{limit:3}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-1"},r.a.createElement("h3",{className:"title is-3 bg-dark has-text-centered mb-none"},"Tweets"),r.a.createElement("p",{className:"has-text-centered text-dark-muted mb-0"},"Latest Tweets by @treesnapapp"),r.a.createElement(E,null)))))),r.a.createElement(m,null),r.a.createElement(f.a,null))}}]),t}();t.default=k},t4LX:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"emit",value:function(e){var t=void 0;document.createEvent?(t=new Event(e),document.dispatchEvent(t)):(t=document.createEventObject(),document.fireEvent("on"+e,t))}},{key:"listen",value:function(e,t){document.addEventListener(e,t)}},{key:"remove",value:function(e,t){document.removeEventListener(e,t)}}]),e}();t.a=new r}});