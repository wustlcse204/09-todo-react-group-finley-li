(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),s=n.n(r),c=n(9),l=n(2),d=n(3),i=n(5),u=n(4),p=n(6),h=n(1),v=(n(15),n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={textValue:""},n.handleTextChange=n.handleTextChange.bind(Object(h.a)(Object(h.a)(n))),n.handleDropDownChange=n.handleDropDownChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleTextChange",value:function(e){this.setState({textValue:e.target.value})}},{key:"handleDropDownChange",value:function(e){this.props.sorter(e.target.value)}},{key:"render",value:function(){var e=this;return o.a.createElement("header",null,o.a.createElement("h2",null,"My ToDo App"),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){e.props.addEventHandler(t,e.state.textValue),e.setState({textValue:""})}},o.a.createElement("input",{type:"text",id:"add-item-input",className:"add-item-input",value:this.state.textValue,onChange:this.handleTextChange,placeholder:"Add a new event",required:!0}),o.a.createElement("button",{type:"submit",className:"add-event-btn",id:"add-event-btn"},"Add"),o.a.createElement("div",{className:"drop-down"},o.a.createElement("label",{htmlFor:"sort"},"Sorted by: "),o.a.createElement("select",{id:"sort",name:"choices",value:this.props.sortOption,onChange:this.handleDropDownChange},o.a.createElement("option",{value:"created-date"},"Created Date"),o.a.createElement("option",{value:"alphabetical"},"Alphabetical"),o.a.createElement("option",{value:"completed-status"},"Completed Status"))))))}}]),t}(a.Component)),m=(n(19),function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("li",{className:this.props.todoData.completed?"checked":"unchecked",onClick:function(){e.props.toggleEventHandler(e.props.todoData.id,e.props.todoData.completed)}},this.props.todoData.text,o.a.createElement("span",{className:"close-btn",onClick:function(){e.props.deleteEventHandler(e.props.todoData.id)}}))}}]),t}(a.Component)),E=(n(21),function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"to-do-list-container",id:"to-do-list-container"},o.a.createElement("ul",{className:"to-do-list",id:"to-do-list"},this.props.todoData.map(function(t){return o.a.createElement(m,{todoData:t,key:t.id,deleteEventHandler:e.props.deleteEventHandler,toggleEventHandler:e.props.toggleEventHandler})})))}}]),t}(a.Component)),b="b2eaba-21788d-0b683e-9c3e29-524573",f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).addEvent=function(e,t){e.preventDefault(),fetch("https://cse204.work/todos",{method:"POST",headers:{"Content-Type":"application/json","X-API-KEY":b},body:JSON.stringify({text:t})}).then(function(e){if(200===e.status)return e.json();console.log("Error! Code: "+e.status)}).then(function(e){console.log(e),n.getAllEventsFromServer()})},n.updateEventFromServer=function(e,t){fetch("https://cse204.work/todos/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json","X-API-KEY":b},body:JSON.stringify({completed:!t})}).then(function(e){200===e.status?(console.log("Update successful"),n.getAllEventsFromServer()):console.log("Error! Code: "+e.status)})},n.deleteEvent=function(e){fetch("https://cse204.work/todos/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json","X-API-KEY":b}}).then(function(e){200===e.status?(console.log("Delete successful"),n.getAllEventsFromServer()):console.log("Error! Code: "+e.status)})},n.getAllEventsFromServer=function(){fetch("https://cse204.work/todos",{method:"GET",headers:{"X-API-KEY":b,"Content-Type":"application/json"}}).then(function(e){if(200===e.status)return e.json();console.log("Error! Code: "+e.status)}).then(function(e){console.log("All data from server: ",e),n.setState({todoData:Object(c.a)(e)}),n.sortEvent(n.state.sortOption)})},n.sortEvent=function(e){n.setState({sortOption:e});var t=n.state.todoData;"created-date"===e?t.sort(function(e,t){return new Date(e.created_at)>new Date(t.created_at)?1:-1}):"alphabetical"===e?t.sort(function(e,t){return e.text===t.text?0:e.text<t.text?-1:1}):t.sort(function(e,t){return e.completed&&!t.completed?1:!e.completed&&t.completed?-1:0}),n.setState({todoData:t})},n.state={todoData:[],sortOption:"created-date"},n.getAllEventsFromServer=n.getAllEventsFromServer.bind(Object(h.a)(Object(h.a)(n))),n.addEvent=n.addEvent.bind(Object(h.a)(Object(h.a)(n))),n.deleteEvent=n.deleteEvent.bind(Object(h.a)(Object(h.a)(n))),n.updateEventFromServer=n.updateEventFromServer.bind(Object(h.a)(Object(h.a)(n))),n.sortEvent=n.sortEvent.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("Component did mount"),this.getAllEventsFromServer()}},{key:"render",value:function(){return o.a.createElement("div",{id:"main-section",className:"main-section"},o.a.createElement(v,{addEventHandler:this.addEvent,sorter:this.sortEvent,sortOption:this.state.sortOption}),o.a.createElement(E,{todoData:this.state.todoData,deleteEventHandler:this.deleteEvent,toggleEventHandler:this.updateEventFromServer}))}}]),t}(a.Component);s.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.b7d2cd52.chunk.js.map