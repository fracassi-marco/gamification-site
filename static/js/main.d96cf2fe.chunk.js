(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(49)},26:function(e,a,t){},27:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t(7),l=t(9),c=t(8),o=t(10),i=t(0),s=t.n(i),m=t(16),d=t.n(m),u=(t(26),t(27),t(50)),v=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"filter-by flex grow wrap"},s.a.createElement("div",{className:"time-filter flex grow"},[{code:"list",name:"Elenco",url:"/"},{code:"ranking",name:"Classifica",url:"/ranking"}].map(function(a,t){return s.a.createElement("div",{key:"page"+t,className:"row-button pointer align-center "+(a.code==e.props.selected?"row-button--active":"")},s.a.createElement(u.a,{to:a.url},a.name))})))}}]),a}(i.Component),f=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"leaderboard flex column wrap"},s.a.createElement("div",{className:"leaderboard-table flex column"},s.a.createElement("div",{className:"leaderboard-header flex column grow"},s.a.createElement(v,{selected:"list"}),s.a.createElement("div",{className:"leaderboard-row flex align-center row--header"},s.a.createElement("div",{className:"row-position"},"Data"),s.a.createElement("div",{className:"row-collapse flex align-center"},s.a.createElement("div",{className:"row-user--header"},"Autore"),s.a.createElement("div",{className:"row-rank--header"},"Tipo"),s.a.createElement("div",{className:"row-team--header"},"Titolo"),s.a.createElement("div",{className:"row-team--header"},"Links")))),s.a.createElement("div",{className:"leaderboard-body flex column grow"},s.a.createElement("div",null,s.a.createElement("ul",null,this.props.activities.map(function(e,a){return s.a.createElement("div",{key:"activity"+a,className:"leaderboard-row flex align-center"},s.a.createElement("div",{className:"row-position"},e.date),s.a.createElement("div",{className:"row-collapse flex align-center"},s.a.createElement("div",{className:"row-caller flex"},s.a.createElement("div",{className:"row-user"},e.author)),s.a.createElement("div",{className:"row-team"},e.type),s.a.createElement("div",{className:"row-team"},e.title),s.a.createElement("div",{className:"row-rank"},console.log(e),e.links.map(function(e,t){return s.a.createElement("a",{key:"link"+a+t,href:"{link.url}"},e.type)}).reduce(function(e,a){return[e,", ",a]}))))})))),s.a.createElement("div",{className:"leaderboard-footer flex align-center"},"Page 1 of 2 ",s.a.createElement("a",{className:"footer-btn pointer"},"Next")," 25 of 37 items"),s.a.createElement("button",{onClick:this.props.doSomeEvent},"doSomeEvent")))}}]),a}(i.Component),E=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"leaderboard flex column wrap"},s.a.createElement("div",{class:"leaderboard-table flex column"},s.a.createElement("div",{class:"leaderboard-header flex column grow"},s.a.createElement(v,{selected:"ranking"}),s.a.createElement("div",{class:"leaderboard-row flex align-center row--header"},s.a.createElement("div",{class:"row-position"},"#"),s.a.createElement("div",{class:"row-collapse flex align-center"},s.a.createElement("div",{class:"row-user--header"},"Score"),s.a.createElement("div",{class:"row-rank--header"},"Autore")))),s.a.createElement("div",{class:"leaderboard-body flex column grow"},s.a.createElement("div",null,s.a.createElement("ul",null))),s.a.createElement("div",{class:"leaderboard-footer flex align-center"},"Page 1 of 2 ",s.a.createElement("a",{class:"footer-btn pointer"},"Next")," 25 of 37 items")))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=t(51),p=t(52),w=t(17),h=t.n(w),g=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(o)))).state={activities:[]},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat("/gamification-site","/data.json")).then(function(a){var t=a.data.activities;e.setState({activities:t})})}},{key:"doSomeEvent",value:function(){console.log("event!!")}},{key:"render",value:function(){var e=this;return s.a.createElement(b.a,null,s.a.createElement("div",{className:"router"},s.a.createElement(p.a,{exact:!0,path:"/",render:function(){return s.a.createElement(f,{doSomeEvent:e.doSomeEvent.bind(e),activities:e.state.activities})}}),s.a.createElement(p.a,{path:"/ranking",render:function(){return s.a.createElement(E,{activities:e.state.activities})}})))}}]),a}(s.a.Component);d.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.d96cf2fe.chunk.js.map