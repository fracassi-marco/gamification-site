(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},21:function(e,a,t){e.exports=t(49)},27:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(17),l=t.n(c);t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(6),o=t(7),s=t(9),m=t(8),d=t(10),u=(t(27),t(50)),v=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"filter-by flex grow wrap"},n.a.createElement("div",{className:"time-filter flex grow"},[{code:"list",name:"Elenco",url:"/"},{code:"ranking",name:"Classifica",url:"/ranking"}].map(function(a,t){return n.a.createElement("div",{key:"page"+t,className:"row-button pointer align-center "+(a.code===e.props.selected?"row-button--active":"")},n.a.createElement(u.a,{to:a.url},a.name))})))}}]),a}(r.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"leaderboard flex column wrap"},n.a.createElement("div",{className:"leaderboard-table flex column"},n.a.createElement("div",{className:"leaderboard-header flex column grow"},n.a.createElement(v,{selected:"list"}),n.a.createElement("div",{className:"leaderboard-row flex align-center row--header"},n.a.createElement("div",{className:"row-position"},"Data"),n.a.createElement("div",{className:"row-collapse flex align-center"},n.a.createElement("div",{className:"row-user--header"},"Autore"),n.a.createElement("div",{className:"row-rank--header"},"Tipo"),n.a.createElement("div",{className:"row-team--header"},"Titolo"),n.a.createElement("div",{className:"row-team--header"},"Links")))),n.a.createElement("div",{className:"leaderboard-body flex column grow"},this.props.activities.map(function(e,a){return n.a.createElement("div",{key:"activity"+a,className:"leaderboard-row flex align-center"},n.a.createElement("div",{className:"row-position"},e.date),n.a.createElement("div",{className:"row-collapse flex align-center"},n.a.createElement("div",{className:"row-caller flex"},n.a.createElement("div",{className:"row-user"},e.author)),n.a.createElement("div",{className:"row-team"},e.type),n.a.createElement("div",{className:"row-team"},e.title),n.a.createElement("div",{className:"row-rank"},e.links.map(function(e,t){return n.a.createElement("a",{key:"link"+a+t,href:"{link.url}"},e.type)}).reduce(function(e,a){return[e,", ",a]}))))}))))}}]),a}(r.Component),w=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"leaderboard flex column wrap"},n.a.createElement("div",{className:"leaderboard-table flex column"},n.a.createElement("div",{className:"leaderboard-header flex column grow"},n.a.createElement(v,{selected:"ranking"}),n.a.createElement("div",{className:"leaderboard-row flex align-center row--header"},n.a.createElement("div",{className:"row-position"},"#"),n.a.createElement("div",{className:"row-collapse flex align-center"},n.a.createElement("div",{className:"row-user--header"},"Punteggio"),n.a.createElement("div",{className:"row-rank--header"},"Autore")))),n.a.createElement("div",{className:"leaderboard-body flex column grow"},n.a.createElement("div",null,n.a.createElement("ul",null)))))}}]),a}(n.a.Component),E=t(51),p=t(52),b=t(18),h=t.n(b),N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={activities:[]},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat("/gamification-site","/data.json")).then(function(a){var t=a.data.activities;e.setState({activities:t})})}},{key:"render",value:function(){var e=this;return n.a.createElement(E.a,null,n.a.createElement("div",{className:"router"},n.a.createElement(p.a,{exact:!0,path:"/",render:function(){return n.a.createElement(f,{activities:e.state.activities})}}),n.a.createElement(p.a,{path:"/ranking",render:function(){return n.a.createElement(w,{activities:e.state.activities})}})))}}]),a}(n.a.Component);l.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.885ec8eb.chunk.js.map