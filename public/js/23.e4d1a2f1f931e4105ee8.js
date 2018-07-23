webpackJsonp([23],{"5zKI":function(e,t,n){"use strict";var o=n("U7vG"),r=n.n(o),i=n("O27J"),a=n.n(i),s=n("KSGD"),c=n.n(s),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:!1,hiding:!1,marginTop:window.scrollY>70?-40:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),l(t,[{key:"componentWillMount",value:function(){var e=this;this.timer=setTimeout(function(){e.hide()},5e3)}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({show:!0})},100),window.addEventListener("scroll",this.handleWindowScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleWindowScroll.bind(this))}},{key:"handleWindowScroll",value:function(){var e=window.scrollY>70?-40:0;this.setState({marginTop:e})}},{key:"hide",value:function(){this.setState({hiding:!0}),clearTimeout(this.timer)}},{key:"render",value:function(){var e="";switch(this.props.type){case"success":case"danger":case"info":case"warning":e="is-"+this.props.type;break;default:e="is-success"}e+=this.state.show?" show":"",e+=this.state.hiding?" hiding":"";var t=this.state.marginTop;return r.a.createElement("div",{className:"notification push-notification "+e,style:{marginTop:t+"px"}},r.a.createElement("button",{type:"button",className:"delete",onClick:this.hide.bind(this)}),this.props.message)}}],[{key:"_remove",value:function(){this.stack&&this.stack.length>0&&document.body.removeChild(this.stack.shift())}},{key:"push",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",o=document.createElement("div");a.a.render(r.a.createElement(t,{message:e,type:n,container:o}),o),document.body.appendChild(o),this.stack.length>0&&this._remove(),this.stack.push(o)}}]),t}();t.a=u,u.PropTypes={message:c.a.string.isRequired,type:c.a.string,container:c.a.object.isRequired},u.defaultProps={type:"success"},u.stack=[]},DakW:function(e,t,n){"use strict";var o=n("U7vG");n.n(o);var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.ga&&setTimeout(function(){return window.ga("send","pageview")},2500),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),t}();t.a=r},WibX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("U7vG"),r=n.n(o),i=n("5zKI"),a=n("saAw"),s=n("DakW"),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={users:[],topics:[],loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["a"]),c(t,[{key:"componentDidMount",value:function(){this.loadSettings()}},{key:"loadSettings",value:function(){var e=this;this.setState({loading:!0}),axios.get("/admin/web/notifications").then(function(t){var n=t.data.data,o=n.users,r=n.topics;e.setState({users:o,topics:r,loading:!1})}).catch(function(t){e.setState({loading:!1}),alert("Error occurred while loading your settings. Please refresh the page to try again."),console.error(t)})}},{key:"toggle",value:function(e,t){var n=this;this.setState({toggling:!0}),axios.post("/admin/web/notifications/toggle",{user_id:e.id,topic_id:t.id}).then(function(e){var t=e.data.data,o=t.users,r=t.topics;n.setState({users:o,topics:r,toggling:!1}),i.a.push("Subscription updated successfully","success")}).catch(function(e){n.setState({toggling:!1}),alert("An error occurred while processing your request. Refresh the page to try again. See console for errors."),console.error(e)})}},{key:"renderRow",value:function(e){var t=this;return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("p",null,r.a.createElement("strong",null,e.name)),r.a.createElement("p",null,e.email)),r.a.createElement("td",null,this.state.topics.map(function(n,o){return r.a.createElement("div",{key:o,className:"checkbox"},r.a.createElement("input",{type:"checkbox",value:!0,disabled:t.state.toggling,onChange:function(o){o.target;t.toggle(e,n)},checked:e.subscription_topics.map(function(e){return e.id}).indexOf(n.id)>-1})," ",n.description)})))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title is-3"},"Manage Admin Notifications"),r.a.createElement("div",{className:"box"},r.a.createElement("h3",{className:"title is-4 mb-0"},"Admin Users"),r.a.createElement("p",{className:"mb-0"},"Subscribe users to a topic using the checkboxes"),r.a.createElement("table",{className:"table table-fixed"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Topics"))),r.a.createElement("tbody",null,this.state.users.map(this.renderRow.bind(this))))),r.a.createElement(a.a,{visible:this.state.loading}))}}]),t}();t.default=l},saAw:function(e,t,n){"use strict";var o=n("U7vG"),r=n.n(o),i=n("KSGD"),a=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),s(t,[{key:"render",value:function(){return this.props.visible?this.props.inline?r.a.createElement("div",{className:"mt-1",style:this.props.containerStyle},r.a.createElement("i",{className:"fa fa-refresh fa-spin fa-2x"})):r.a.createElement("div",{className:"spinner-overlay",style:this.props.containerStyle},r.a.createElement("div",{className:"overlay-blur"}),r.a.createElement("span",{className:"spinner-container"},r.a.createElement("i",{className:"is-loading"}))):null}}]),t}();t.a=c,c.PropTypes={visible:a.a.bool.isRequired,containerStyle:a.a.object,inline:a.a.bool},c.defaultProps={containerStyle:{},inline:!1}}});