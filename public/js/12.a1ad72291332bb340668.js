webpackJsonp([12,21],{"/YxU":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),r=n.n(a),o=n("3JUS"),i=n("1B1h"),s=n("DakW"),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["a"]),c(t,[{key:"componentDidMount",value:function(){window.fixHeight()}},{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement(o.default,null))}}]),t}();t.default=l},"1B1h":function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=[{to:"/account",icon:"fa-address-card-o",label:"Settings"},{to:"/account/observations",icon:"fa-tree",label:"Observations"},{to:"/account/groups",icon:"fa-users",label:"Groups"},{to:"/account/collections",icon:"fa-th",label:"Collections"},{to:"/account/filters",icon:"fa-filter",label:"Filters"}],i=n("cabM"),s=n("TIMf"),c=n("ePhh"),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),l(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement("div",{className:"home-section short-content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow account-sidebar-container"},r.a.createElement(c.a,{links:o,title:"Members"})),r.a.createElement("div",{className:"column"},this.props.children)))),r.a.createElement(s.a,null))}}]),t}();t.a=u},"3JUS":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),r=n.n(a),o=n("saAw"),i=n("F8kA"),s=n("N7gF"),c=n("Atm/"),l=n("DakW"),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filters:[],loading:!0},n.account=-1!==window.location.pathname.toLowerCase().indexOf("account"),document.title="Saved Filters - TreeSnap",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l["a"]),u(t,[{key:"componentWillMount",value:function(){var e=this;axios.get("/web/filters").then(function(t){e.setState({loading:!1,filters:t.data.data})}).catch(function(t){e.setState({loading:!1})})}},{key:"deleteFilter",value:function(e,t){var n=this;e.preventDefault(),confirm('Are you sure you want to delete "'+t.name+'"?')&&axios.delete("/web/filter/"+t.id).then(function(e){var a=n.state.filters.filter(function(e){return t.id!==e.id});n.setState({filters:a})}).catch(function(e){console.log(e.response)})}},{key:"_renderRow",value:function(e){var t=this;return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",{className:"has-text-right"},r.a.createElement(c.a,{right:!0,trigger:r.a.createElement("button",{className:"button is-small","aria-haspopup":"true","aria-controls":"dropdown-menu"},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fa fa-download"})),r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})))},r.a.createElement("a",{href:"/services/download/filter/"+e.id+"/tsv",className:"dropdown-item"},"TSV Format"),r.a.createElement("a",{href:"/services/download/filter/"+e.id+"/csv",className:"dropdown-item"},"CSV Format")),r.a.createElement("button",{type:"button",className:"button is-small is-danger ml-1",onClick:function(n){return t.deleteFilter(n,e)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(s.a,{label:"Delete"},r.a.createElement("i",{className:"fa fa-times"}))))))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title is-3"},"Manage Advanced Filters"),r.a.createElement("div",{className:"box"},0!==this.state.filters.length?r.a.createElement("table",{className:"table is-striped mb-none"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",{className:"has-text-right"},"Action"))),r.a.createElement("tbody",null,this.state.filters.map(this._renderRow.bind(this)))):r.a.createElement("p",{className:"text-muted"},"You have not created any filters yet. You can create new filters in the ",this.account?r.a.createElement(i.b,{to:"/map"},"Map"):r.a.createElement(i.b,{to:"/observations"},"Observations")," or ",this.account?r.a.createElement(i.b,{to:"/account/observations"},"your observations"):null," page.")),r.a.createElement(o.a,{visible:this.state.loading}))}}]),t}();t.default=f},"Atm/":function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),s(t,[{key:"show",value:function(){this.setState({show:!0})}},{key:"hide",value:function(){var e=this;setTimeout(function(){e.setState({show:!1})},this.props.timeout)}},{key:"toggle",value:function(){this.state.show?this.hide():this.show()}},{key:"render",value:function(){return r.a.createElement("div",{className:"dropdown"+(this.state.show?" is-active":"")+(this.props.right?" is-right":"")+" has-text-left",style:{width:this.props.isBlock?"100%":void 0}},r.a.createElement("div",{className:"dropdown-trigger",style:{width:this.props.isBlock?"100%":void 0},onClick:this.toggle.bind(this),onBlur:this.hide.bind(this)},this.props.trigger),r.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu"},r.a.createElement("div",{className:"dropdown-content"},this.props.children)))}}]),t}();t.a=c,c.propTypes={trigger:i.a.object.isRequired,right:i.a.bool,isBlock:i.a.bool,timeout:i.a.number},c.defaultProps={right:!1,isBlock:!1,timeout:110}},DakW:function(e,t,n){"use strict";var a=n("GiK3");n.n(a);var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.ga&&setTimeout(function(){return window.ga("send","pageview")},2500),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),t}();t.a=r},IFrJ:function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setPath()}return a(e,[{key:"setPath",value:function(){this.path=window.location.pathname,"/"!==this.path&&this.path.replace(/\/$/g,"")}},{key:"isActive",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is-active";return this.setPath(),t&&this.path===e?n:!t&&this.path.indexOf(e)>=0?n:null}},{key:"parseUrl",value:function(e){var t={};return(e=e.substr(1)).split("&").forEach(function(e){if(e){var n=(e=e.split("+").join(" ")).indexOf("="),a=n>-1?e.substr(0,n):e,r=n>-1?decodeURIComponent(e.substr(n+1)):"",o=a.indexOf("[");if(-1===o)t[decodeURIComponent(a)]=r;else{var i=a.indexOf("]",o),s=decodeURIComponent(a.substring(o+1,i));a=decodeURIComponent(a.substring(0,o)),t[a]||(t[a]=[]),s?t[a][s]=r:t[a].push(r)}}}),t}}]),e}();t.a=new r},N7gF:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),c(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",s({className:"tooltip "+this.props.position,onMouseEnter:function(){return e.setState({show:!0})},onMouseLeave:function(){return e.setState({show:!1})}},_.omit(this.props,Object.keys(t.propTypes)),{onClick:function(){e.props.hideOnClick&&e.setState({show:!1})}}),this.props.children,r.a.createElement("div",{className:"tooltip-text"+(this.state.show?" show":"")},this.props.label))}}]),t}();t.a=l,l.propTypes={label:i.a.string.isRequired,position:i.a.string,hideOnClick:i.a.bool},l.defaultProps={position:"top",hideOnClick:!0}},"OE/d":function(e,t,n){"use strict";var a=n("t4LX"),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t&&(t=JSON.parse(JSON.stringify(window.TreeSnap))),this._role=null!==t.role?t.role.toLowerCase():null,this._isLoggedIn=t.loggedIn,this._isAdmin="admin"===this._role,this._isScientist="scientist"===this._role,this._user=t.user,this._groups=[],this._abilities={member:[],owner:[],admin:[]},this._role&&(this._role=this._role.toLowerCase()),this.initAbilities(),this.loadGroups(),a.a.listen("user.groups.updated",this.loadGroups.bind(this))}return o(e,[{key:"initAbilities",value:function(){this._abilities.user=["create notes","create collections","flag observations"],this._abilities.scientist=["contact users","confirm species","access admin pages","view accurate location"].concat(this._abilities.user),this._abilities.admin=["manage users","delete observations","manage events"].concat(this._abilities.scientist)}},{key:"loadGroups",value:function(){var e=this;this.authenticated()&&axios.get("/web/groups?with_users=1").then(function(t){e._groups=t.data.data.map(function(e){return{id:e.id,users:e.users.map(function(e){return e.id})}})}).catch(function(e){console.log(e)})}},{key:"can",value:function(e){return!(!this.authenticated()||null===this._role)&&this._abilities[this._role].indexOf(e)>-1}},{key:"owns",value:function(e,t){return void 0===t&&(t="user_id"),"object"===(void 0===e?"undefined":r(e))?Array.isArray(e)?e.every(this.owns.bind(this)):void 0!==e[t]&&e[t]===this._user.id:"number"==typeof e&&this._user.id===e}},{key:"inGroupWith",value:function(e){for(var t in this._groups)if(this._groups[t].users.indexOf(e)>-1)return!0;return!1}},{key:"inGroup",value:function(e){for(var t in this._groups)if(this._groups[t].id===e)return!0;return!1}},{key:"authenticated",value:function(){return this._isLoggedIn}},{key:"admin",value:function(){return this._isAdmin}},{key:"scientist",value:function(){return this._isScientist}},{key:"role",value:function(){return this._role}},{key:"user",value:function(){return this._user}}]),e}();t.a=new i},TIMf:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("OE/d"),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),i(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns has-text-centered"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Site Map")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/map"},"Observations Map")),o.a.authenticated()?r.a.createElement("li",null,r.a.createElement("a",{href:"/account"},"Your Account")):null,o.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/register"},"Registration")),o.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/developer"},"Developer")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Resources")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/partners"},"About Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"Contact US")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about"},"Scientific Partners")),r.a.createElement("li",null,r.a.createElement("a",{href:"/trees"},"The Trees of TreeSnap")),r.a.createElement("li",null,r.a.createElement("a",{href:"/faq"},"Frequently Asked Questions")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",{className:"mb-1"},r.a.createElement("b",null,"Legal")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/privacy-policy"},"Privacy Policy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/terms-of-use"},"Terms of Use"))))),r.a.createElement("div",{className:"columns logos"},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.utk.edu/"},r.a.createElement("img",{src:"/images/ut3.png",alt:"University of Tennessee Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://uky.edu"},r.a.createElement("img",{src:"/images/uky3.png",alt:"University of Kentucky Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.nsf.gov/"},r.a.createElement("img",{src:"/images/nsf1.png",alt:"NSF Logo"})))),r.a.createElement("p",{className:"has-text-centered"},"Copyright © ",(new Date).getFullYear()," University of Tennessee Knoxville and University of Kentucky.")))}}]),t}();t.a=s},cabM:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=n("IFrJ"),c=n("F8kA"),l=n("OE/d"),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isActive:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),u(t,[{key:"toggle",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"+(this.props.home?" home-nav":"")},r.a.createElement("div",{className:this.props.container?"container is-fluid":"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(c.c,{to:"/",className:"navbar-item"},r.a.createElement("img",{src:"/logo/ts-logo-"+(this.props.home?"48":"32")+".png",alt:"Logo",className:"logo-img"}),r.a.createElement("span",{className:"logo-text"},r.a.createElement("b",null,"Tree"),r.a.createElement("span",{style:{fontWeight:300}},"Snap"))),r.a.createElement("div",{className:"navbar-burger",onClick:this.toggle.bind(this)},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"+(this.state.isActive?" is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{href:"https://www.facebook.com/treesnapapp/",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("a",{href:"https://twitter.com/Treesnapapp",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-twitter"})))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement(c.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"is-active"},"Home"),r.a.createElement(c.c,{to:"/map",className:"navbar-item",activeClassName:"is-active"},"Map"),r.a.createElement(c.c,{to:"/partners",className:"navbar-item",activeClassName:"is-active"},"Scientific Partners"),r.a.createElement(c.c,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About"),l.a.authenticated()?r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(c.c,{to:"/account",className:"navbar-link",activeClassName:"is-active"},"Account"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(c.c,{to:"/account/observations",className:"navbar-item",activeClassName:"is-active"},"My Observations"),r.a.createElement(c.c,{to:"/account/groups",className:"navbar-item",activeClassName:"is-active"},"Groups"),r.a.createElement(c.c,{to:"/account/collections",className:"navbar-item",activeClassName:"is-active"},"Collections"),r.a.createElement(c.c,{to:"/account/filters",className:"navbar-item",activeClassName:"is-active"},"Filters"),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement(c.c,{to:"/account",className:"navbar-item",activeClassName:"is-active"},"Settings"),r.a.createElement("a",{href:"/logout",className:"navbar-item"},"Logout"))):null,l.a.authenticated()?null:r.a.createElement("a",{href:"/login",className:"navbar-item "+s.a.isActive("/login")},"Login"),l.a.authenticated()?null:r.a.createElement("a",{href:"/register",className:"navbar-item "+s.a.isActive("/register")},"Register"),l.a.can("access admin pages")?r.a.createElement("a",{href:"/admin",className:"navbar-item "+s.a.isActive("/admin",!1)},"Admin"):null))))}}]),t}();t.a=f,f.propTypes={container:i.a.bool,home:i.a.bool},f.defaultProps={container:!1,home:!1}},ePhh:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=n("F8kA"),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),c(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("aside",{className:"menu admin-sidebar is-hidden-mobile",role:"navigation"},""!==this.props.title?r.a.createElement("p",{className:"menu-heading"},this.props.title):null,r.a.createElement("ul",{className:"menu-list"},this.props.links.map(function(e,t){return r.a.createElement("li",{key:"sidebar_"+t},r.a.createElement(s.c,{to:e.to,activeClassName:"is-active",exact:!0},r.a.createElement("i",{className:"fa "+e.icon})," ",e.label))}))),r.a.createElement("aside",{className:"tabs is-hidden-tablet home-tabs"},this.props.links.map(function(e,t){return r.a.createElement("li",{key:"sidebar_tab_"+t},r.a.createElement(s.c,{to:e.to,activeClassName:"is-active",exact:!0},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fa "+e.icon})),r.a.createElement("span",null,e.label)))})))}}]),t}();t.a=l,l.propTypes={links:i.a.array.isRequired,title:i.a.string},l.defaultProps={title:""}},saAw:function(e,t,n){"use strict";var a=n("GiK3"),r=n.n(a),o=n("KSGD"),i=n.n(o),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),s(t,[{key:"render",value:function(){return this.props.visible?this.props.inline?r.a.createElement("div",{className:"mt-1",style:this.props.containerStyle},r.a.createElement("i",{className:"fa fa-refresh fa-spin fa-2x"})):r.a.createElement("div",{className:"spinner-overlay",style:this.props.containerStyle},r.a.createElement("div",{className:"overlay-blur"}),r.a.createElement("span",{className:"spinner-container"},r.a.createElement("i",{className:"is-loading"}))):null}}]),t}();t.a=c,c.propTypes={visible:i.a.bool.isRequired,containerStyle:i.a.object,inline:i.a.bool},c.defaultProps={containerStyle:{},inline:!1}},t4LX:function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"emit",value:function(e){var t=void 0;document.createEvent?(t=new Event(e),document.dispatchEvent(t)):(t=document.createEventObject(),document.fireEvent("on"+e,t))}},{key:"listen",value:function(e,t){document.addEventListener(e,t)}},{key:"remove",value:function(e,t){document.removeEventListener(e,t)}}]),e}();t.a=new r}});