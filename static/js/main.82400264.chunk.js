(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},21:function(e,a,t){e.exports=t(49)},27:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c);t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(6),i=t(7),s=t(9),m=t(8),d=t(10),u=(t(27),t(50)),v=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"filter-by flex grow wrap"},r.a.createElement("div",{className:"time-filter flex grow"},[{code:"list",name:"Elenco",url:"/"},{code:"ranking",name:"Classifica",url:"/ranking"}].map(function(a,t){return r.a.createElement("div",{key:"page"+t,className:"row-button pointer align-center "+(a.code===e.props.selected?"row-button--active":"")},r.a.createElement(u.a,{to:a.url},a.name))})))}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"leaderboard flex column wrap"},r.a.createElement("div",{className:"leaderboard-table flex column"},r.a.createElement("div",{className:"leaderboard-header flex column grow"},r.a.createElement(v,{selected:"list"}),r.a.createElement("div",{className:"leaderboard-row flex align-center row--header"},r.a.createElement("div",{className:"row-position"},"Data"),r.a.createElement("div",{className:"row-collapse flex align-center"},r.a.createElement("div",{className:"row-user--header"},"Autore"),r.a.createElement("div",{className:"row-rank--header"},"Tipo"),r.a.createElement("div",{className:"row-team--header"},"Titolo"),r.a.createElement("div",{className:"row-team--header"},"Links")))),r.a.createElement("div",{className:"leaderboard-body flex column grow"},[].map(function(e,a){return r.a.createElement("div",{key:"activity"+a,className:"leaderboard-row flex align-center"},r.a.createElement("div",{className:"row-position"},e.date),r.a.createElement("div",{className:"row-collapse flex align-center"},r.a.createElement("div",{className:"row-caller flex"},r.a.createElement("div",{className:"row-user"},e.author)),r.a.createElement("div",{className:"row-team"},e.type),r.a.createElement("div",{className:"row-team"},e.title),r.a.createElement("div",{className:"row-rank"},e.links.map(function(e,t){return r.a.createElement("a",{key:"link"+a+t,href:"{link.url}"},e.type)}).reduce(function(e,a){return[e,", ",a]}))))}))))}}]),a}(n.Component),w=(r.a.Component,t(51)),p=t(52),E=t(18),h=t.n(E),b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={activities:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat("/gamification-site","/data.json")).then(function(a){var t=a.data.activities;e.setState({activities:t})})}},{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"router a4"},r.a.createElement(p.a,{path:"/",exact:!0,component:f})))}}]),a}(r.a.Component);l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.82400264.chunk.js.map