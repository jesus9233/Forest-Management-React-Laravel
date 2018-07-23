webpackJsonp([18],{"1B1h":function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),s=[{to:"/account",icon:"fa-address-card-o",label:"Settings"},{to:"/account/observations",icon:"fa-tree",label:"Observations"},{to:"/account/groups",icon:"fa-users",label:"Groups"},{to:"/account/collections",icon:"fa-th",label:"Collections"},{to:"/account/filters",icon:"fa-filter",label:"Filters"}],i=a("cabM"),o=a("TIMf"),l=a("ePhh"),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),c(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement("div",{className:"home-section short-content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow account-sidebar-container"},r.a.createElement(l.a,{links:s,title:"Members"})),r.a.createElement("div",{className:"column"},this.props.children)))),r.a.createElement(o.a,null))}}]),t}();t.a=u},"52K9":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("U7vG"),r=a.n(n),s=a("1B1h"),i=a("PJh5"),o=a.n(i),l=a("DakW"),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={name:"",units:"",email:"",is_anonymous:0,birth_year:"",errors:{name:[],email:[],is_anonymous:[],birth_year:[],units:[]},message:"",new_password:"",old_password:"",new_password_confirmation:"",password_errors:[],password_message:""},document.title="User Account",a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l["a"]),c(t,[{key:"componentDidMount",value:function(){var e=this;axios.get("/web/user").then(function(t){var a=t.data.data;e.setState({name:a.name,units:a.units,email:a.email,is_anonymous:a.is_anonymous?1:0,birth_year:a.birth_year}),window.fixHeight()}).catch(function(e){console.log(e)})}},{key:"submit",value:function(e){var t=this;e.preventDefault(),axios.put("/web/user",{name:this.state.name,email:this.state.email,is_anonymous:this.state.is_anonymous,birth_year:this.state.birth_year,units:this.state.units}).then(function(e){var a=e.data.data;t.setState({name:a.name,email:a.email,units:a.units,is_anonymous:a.is_anonymous?1:0,message:"Account updated successfully",errors:{name:[],email:[],is_anonymous:[],birth_year:[],units:[]}}),window.TreeSnap.units=a.units}).catch(function(e){if(e.response&&422===e.response.status){var a=e.response.data;t.setState({message:"",errors:{name:a.name||[],email:a.email||[],is_anonymous:a.is_anonymous||[],birth_year:a.birth_year||[]}})}})}},{key:"submitPassword",value:function(e){var t=this;e.preventDefault(),axios.patch("/web/user/password",{new_password:this.state.new_password,new_password_confirmation:this.state.new_password_confirmation,old_password:this.state.old_password}).then(function(e){t.setState({password_message:e.data.data,password_errors:[],new_password:"",new_password_confirmation:"",old_password:""})}).catch(function(e){if(e.response&&422===e.response.status){var a=e.response.data,n=[];Object.keys(a).map(function(e){a[e].map(function(e){return n.push(e)})}),t.setState({password_errors:n,password_message:""})}})}},{key:"renderPasswordErrors",value:function(){if(0!==this.state.password_errors.length)return r.a.createElement("div",{className:"alert is-danger"},this.state.password_errors.map(function(e,t){return r.a.createElement("p",{key:t},e)}))}},{key:"_generateBirthDateOptions",value:function(){for(var e=parseInt(o()().format("YYYY").toString()),t=[],a=e;a>e-101;a--)t.push(a);return t.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(s.a,null,r.a.createElement("h3",{className:"title is-3"},"Settings"),r.a.createElement("div",{className:"box"},r.a.createElement("h1",{className:"title is-4"},"Personal Information"),""!==this.state.message?r.a.createElement("div",{className:"alert is-success"},this.state.message):null,r.a.createElement("form",{action:"#",method:"post",onSubmit:this.submit.bind(this)},r.a.createElement("div",{className:"field limit-width"},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"text",className:"input"+(this.state.errors.name.length>0?" is-danger":""),value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),this.state.errors.name.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)}))),r.a.createElement("div",{className:"field limit-width"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"email",className:"input"+(this.state.errors.email.length>0?" is-danger":""),value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),this.state.errors.email.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Year of Birth"),r.a.createElement("div",{className:"select"+(this.state.errors.birth_year.length>0?" is-danger":"")},r.a.createElement("select",{type:"text",className:"input",value:this.state.birth_year,onChange:function(t){return e.setState({birth_year:t.target.value})}},this._generateBirthDateOptions())),this.state.errors.birth_year.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Anonymous"),r.a.createElement("div",{className:"control"},r.a.createElement("span",{className:"select"+(this.state.errors.is_anonymous.length>0?" is-danger":"")},r.a.createElement("select",{value:this.state.is_anonymous,onChange:function(t){return e.setState({is_anonymous:t.target.value})}},r.a.createElement("option",{value:"0"},"No"),r.a.createElement("option",{value:"1"},"Yes"))),this.state.errors.is_anonymous.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)}),r.a.createElement("p",{className:"help"},"Anonymous users have their information hidden from other users."))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Measurement Units"),r.a.createElement("div",{className:"control"},r.a.createElement("span",{className:"select"+(this.state.errors.units.length>0?" is-danger":"")},r.a.createElement("select",{value:this.state.units,onChange:function(t){return e.setState({units:t.target.value})}},r.a.createElement("option",{value:"US"},"US (Foot, Inches)"),r.a.createElement("option",{value:"metric"},"Metric (Centimeters, Meters)"))),this.state.errors.units.map(function(e,t){return r.a.createElement("p",{className:"help is-danger",key:t},e)}))),r.a.createElement("div",{className:"field mt-1"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Update"))))),r.a.createElement("div",{className:"box"},r.a.createElement("h1",{className:"title is-4"},"Change Password"),r.a.createElement("form",{action:"#",method:"post",onSubmit:this.submitPassword.bind(this)},this.renderPasswordErrors(),""!==this.state.password_message?r.a.createElement("div",{className:"alert is-success"},this.state.password_message):null,r.a.createElement("div",{className:"field limit-width"},r.a.createElement("label",{className:"label"},"Old Password"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"password",className:"input",placeholder:"Old password",value:this.state.old_password,onChange:function(t){return e.setState({old_password:t.target.value})}}))),r.a.createElement("div",{className:"field limit-width"},r.a.createElement("label",{className:"label"},"New Password"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"password",className:"input",placeholder:"New password",value:this.state.new_password,onChange:function(t){return e.setState({new_password:t.target.value})}}))),r.a.createElement("div",{className:"field limit-width"},r.a.createElement("label",{className:"label"},"Repeat Password"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"password",className:"input",placeholder:"Repeat new password",value:this.state.new_password_confirmation,onChange:function(t){return e.setState({new_password_confirmation:t.target.value})}}))),r.a.createElement("div",{className:"field mt-1"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Update Password"))))))}}]),t}();t.default=u},DakW:function(e,t,a){"use strict";var n=a("U7vG");a.n(n);var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.ga&&setTimeout(function(){return window.ga("send","pageview")},2500),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),t}();t.a=r},IFrJ:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setPath()}return n(e,[{key:"setPath",value:function(){this.path=window.location.pathname,"/"!==this.path&&this.path.replace(/\/$/g,"")}},{key:"isActive",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is-active";return this.setPath(),t&&this.path===e?a:!t&&this.path.indexOf(e)>=0?a:null}},{key:"parseUrl",value:function(e){var t={};return(e=e.substr(1)).split("&").forEach(function(e){if(e){var a=(e=e.split("+").join(" ")).indexOf("="),n=a>-1?e.substr(0,a):e,r=a>-1?decodeURIComponent(e.substr(a+1)):"",s=n.indexOf("[");if(-1===s)t[decodeURIComponent(n)]=r;else{var i=n.indexOf("]",s),o=decodeURIComponent(n.substring(s+1,i));n=decodeURIComponent(n.substring(0,s)),t[n]||(t[n]=[]),o?t[n][o]=r:t[n].push(r)}}}),t}}]),e}();t.a=new r},"OE/d":function(e,t,a){"use strict";var n=a("t4LX"),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t&&(t=JSON.parse(JSON.stringify(window.TreeSnap))),this._role=null!==t.role?t.role.toLowerCase():null,this._isLoggedIn=t.loggedIn,this._isAdmin="admin"===this._role,this._isScientist="scientist"===this._role,this._user=t.user,this._groups=[],this._abilities={member:[],owner:[],admin:[]},this._role&&(this._role=this._role.toLowerCase()),this.initAbilities(),this.loadGroups(),n.a.listen("user.groups.updated",this.loadGroups.bind(this))}return s(e,[{key:"initAbilities",value:function(){this._abilities.user=["create notes","create collections","flag observations"],this._abilities.scientist=["contact users","confirm species","access admin pages","view accurate location"].concat(this._abilities.user),this._abilities.admin=["manage users","delete observations","manage events"].concat(this._abilities.scientist)}},{key:"loadGroups",value:function(){var e=this;this.authenticated()&&axios.get("/web/groups?with_users=1").then(function(t){e._groups=t.data.data.map(function(e){return{id:e.id,users:e.users.map(function(e){return e.id})}})}).catch(function(e){console.log(e)})}},{key:"can",value:function(e){return!(!this.authenticated()||null===this._role)&&this._abilities[this._role].indexOf(e)>-1}},{key:"owns",value:function(e,t){return void 0===t&&(t="user_id"),"object"===(void 0===e?"undefined":r(e))?Array.isArray(e)?e.every(this.owns.bind(this)):void 0!==e[t]&&e[t]===this._user.id:"number"==typeof e&&this._user.id===e}},{key:"inGroupWith",value:function(e){for(var t in this._groups)if(this._groups[t].users.indexOf(e)>-1)return!0;return!1}},{key:"inGroup",value:function(e){for(var t in this._groups)if(this._groups[t].id===e)return!0;return!1}},{key:"authenticated",value:function(){return this._isLoggedIn}},{key:"admin",value:function(){return this._isAdmin}},{key:"scientist",value:function(){return this._isScientist}},{key:"role",value:function(){return this._role}},{key:"user",value:function(){return this._user}}]),e}();t.a=new i},TIMf:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),s=a("OE/d"),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),i(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns has-text-centered"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Site Map")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/map"},"Observations Map")),s.a.authenticated()?r.a.createElement("li",null,r.a.createElement("a",{href:"/account"},"Your Account")):null,s.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/register"},"Registration")),s.a.authenticated()?null:r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/developer"},"Developer")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",null,r.a.createElement("b",null,"Resources")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/partners"},"About Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"Contact US")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about"},"Scientific Partners")),r.a.createElement("li",null,r.a.createElement("a",{href:"/trees"},"The Trees of TreeSnap")),r.a.createElement("li",null,r.a.createElement("a",{href:"/faq"},"Frequently Asked Questions")))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("p",{className:"mb-1"},r.a.createElement("b",null,"Legal")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/privacy-policy"},"Privacy Policy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/terms-of-use"},"Terms of Use"))))),r.a.createElement("div",{className:"columns logos"},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.utk.edu/"},r.a.createElement("img",{src:"/images/ut3.png",alt:"University of Tennessee Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://uky.edu"},r.a.createElement("img",{src:"/images/uky3.png",alt:"University of Kentucky Logo"}))),r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("a",{href:"https://www.nsf.gov/"},r.a.createElement("img",{src:"/images/nsf1.png",alt:"NSF Logo"})))),r.a.createElement("p",{className:"has-text-centered"},"Copyright © ",(new Date).getFullYear()," University of Tennessee Knoxville and University of Kentucky.")))}}]),t}();t.a=o},cabM:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),s=a("KSGD"),i=a.n(s),o=a("IFrJ"),l=a("F8kA"),c=a("OE/d"),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={isActive:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),u(t,[{key:"toggle",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"+(this.props.home?" home-nav":"")},r.a.createElement("div",{className:this.props.container?"container is-fluid":"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.c,{to:"/",className:"navbar-item"},r.a.createElement("img",{src:"/logo/ts-logo-"+(this.props.home?"48":"32")+".png",alt:"Logo",className:"logo-img"}),r.a.createElement("span",{className:"logo-text"},r.a.createElement("b",null,"Tree"),r.a.createElement("span",{style:{fontWeight:300}},"Snap"))),r.a.createElement("div",{className:"navbar-burger",onClick:this.toggle.bind(this)},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"+(this.state.isActive?" is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{href:"https://www.facebook.com/treesnapapp/",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("a",{href:"https://twitter.com/Treesnapapp",className:"navbar-item"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-twitter"})))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement(l.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"is-active"},"Home"),r.a.createElement(l.c,{to:"/map",className:"navbar-item",activeClassName:"is-active"},"Map"),r.a.createElement(l.c,{to:"/partners",className:"navbar-item",activeClassName:"is-active"},"Scientific Partners"),r.a.createElement(l.c,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About"),c.a.authenticated()?r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(l.c,{to:"/account",className:"navbar-link",activeClassName:"is-active"},"Account"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(l.c,{to:"/account/observations",className:"navbar-item",activeClassName:"is-active"},"My Observations"),r.a.createElement(l.c,{to:"/account/groups",className:"navbar-item",activeClassName:"is-active"},"Groups"),r.a.createElement(l.c,{to:"/account/collections",className:"navbar-item",activeClassName:"is-active"},"Collections"),r.a.createElement(l.c,{to:"/account/filters",className:"navbar-item",activeClassName:"is-active"},"Filters"),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement(l.c,{to:"/account",className:"navbar-item",activeClassName:"is-active"},"Settings"),r.a.createElement("a",{href:"/logout",className:"navbar-item"},"Logout"))):null,c.a.authenticated()?null:r.a.createElement("a",{href:"/login",className:"navbar-item "+o.a.isActive("/login")},"Login"),c.a.authenticated()?null:r.a.createElement("a",{href:"/register",className:"navbar-item "+o.a.isActive("/register")},"Register"),c.a.can("access admin pages")?r.a.createElement("a",{href:"/admin",className:"navbar-item "+o.a.isActive("/admin",!1)},"Admin"):null))))}}]),t}();t.a=m,m.PropTypes={container:i.a.bool,home:i.a.bool},m.defaultProps={container:!1,home:!1}},ePhh:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),s=a("KSGD"),i=a.n(s),o=a("F8kA"),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),l(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("aside",{className:"menu admin-sidebar is-hidden-mobile",role:"navigation"},""!==this.props.title?r.a.createElement("p",{className:"menu-heading"},this.props.title):null,r.a.createElement("ul",{className:"menu-list"},this.props.links.map(function(e,t){return r.a.createElement("li",{key:"sidebar_"+t},r.a.createElement(o.c,{to:e.to,activeClassName:"is-active",exact:!0},r.a.createElement("i",{className:"fa "+e.icon})," ",e.label))}))),r.a.createElement("aside",{className:"tabs is-hidden-tablet home-tabs"},this.props.links.map(function(e,t){return r.a.createElement("li",{key:"sidebar_tab_"+t},r.a.createElement(o.c,{to:e.to,activeClassName:"is-active",exact:!0},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fa "+e.icon})),r.a.createElement("span",null,e.label)))})))}}]),t}();t.a=c,c.PropTypes={links:i.a.array.isRequired,title:i.a.string},c.defaultProps={title:""}},t4LX:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"emit",value:function(e){var t=void 0;document.createEvent?(t=new Event(e),document.dispatchEvent(t)):(t=document.createEventObject(),document.fireEvent("on"+e,t))}},{key:"listen",value:function(e,t){document.addEventListener(e,t)}},{key:"remove",value:function(e,t){document.removeEventListener(e,t)}}]),e}();t.a=new r}});