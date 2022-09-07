(function(){"use strict";var n={6542:function(n,t,o){var e=o(6369),r=o(1970),i=function(){var n=this,t=n._self._c;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("h1",[n._v("台北市松山區口罩存量地圖")]),t("gmap-map",{staticStyle:{margin:"auto",width:"1000px",height:"600px"},attrs:{center:{lat:25.055,lng:121.56},zoom:15,"map-type-id":"terrain"}},[n._l(n.getMarkers,(function(o,e){return t("gmap-marker",{key:e,attrs:{position:o.position,clickable:!0,icon:n.iconUrl},on:{click:function(t){return n.toggleInfoWindow(o)}}})})),t("gmap-info-window",{attrs:{options:n.infoOptions,position:n.infoWindowPos,opened:n.infoWinOpen},on:{closeclick:function(t){n.infoWinOpen=!1}}}),t("gmap-polygon",{attrs:{paths:n.paths,options:n.polygonOptions}})],2)],1)},a=[],s=o(3822),p={name:"App",data(){return{infoWindowPos:null,infoWinOpen:!1,infoOptions:{content:"",pixelOffset:{width:0,height:-36}},currentMapIndex:null,polygonOptions:{strokeColor:"#FFB057",strokeOpacity:"0.5",fillColor:"#E8A14F"},iconUrl:"https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-f34648/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/firstaid.png"}},computed:{...(0,s.Se)(["getMarkers"]),paths(){return this.getMarkers.slice(9,13).map((n=>n.position))}},mounted(){this.loadMarkers()},methods:{...(0,s.nv)(["loadMarkers"]),toggleInfoWindow(n){this.infoWindowPos=n.position,this.infoOptions.content=n.infoText,this.infoWinOpen=!this.infoWinOpen}}},u=p,c=o(1001),l=(0,c.Z)(u,i,a,!1,null,null,null),f=l.exports;e.ZP.use(s.ZP);var d=new s.ZP.Store({state:{markers:[]},getters:{getMarkers:n=>n.markers},mutations:{addMarkers(n,t){n.markers=t}},actions:{loadMarkers({commit:n}){fetch("https://raw.githubusercontent.com/andyanasystem/getJSON/main/response.json").then((n=>n.json())).then((t=>{const o=[],e=t.features.map((n=>n.properties)),r=t.features.map((n=>n.geometry.coordinates));for(let n=0;n<t.features.length;n+=1){const t=e[n].available.split("、"),i=n=>t.filter((t=>t.match(n))),a=n=>i(n).map((n=>`&nbsp&nbsp${n.slice(3)}`));o[n]={position:{lat:r[n][1],lng:r[n][0]},infoText:`<h3>${e[n].name}</h3>\n                        <p>電話: ${e[n].phone}</p>\n                        <p>地區: ${e[n].county}${e[n].town}${e[n].cunli}</p>\n                        <p>地址: ${e[n].address}</p>\n                        <p>成人口罩: ${e[n].mask_adult}個</p>\n                        <p>兒童口罩: ${e[n].mask_child}個</p>\n                        <p>更新時間: ${e[n].updated}</p>\n                        <h4>看診時間:</h4>\n                        <p>星期一: ${a("星期一")}</p>\n                        <p>星期二: ${a("星期二")}</p>\n                        <p>星期三: ${a("星期三")}</p>\n                        <p>星期四: ${a("星期四")}</p>\n                        <p>星期五: ${a("星期五")}</p>\n                        <p>星期六: ${a("星期六")}</p>\n                        <p>星期日: ${a("星期日")}</p>\n                        <span>--------</span>\n                        <p>備註: ${e[n].note}, ${e[n].custom_note}</p>\n                        <p>網站: ${e[n].website}</p>`}}n("addMarkers",o.slice(0,32))}))}}});e.ZP.config.productionTip=!1,e.ZP.use(r,{load:{key:"AIzaSyAF0oFUVvBYhwxeKmh7ckTweq1npFVCxJg",libraries:"places"}}),new e.ZP({store:d,render:n=>n(f)}).$mount("#app")}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,function(){var n=[];o.O=function(t,e,r,i){if(!e){var a=1/0;for(c=0;c<n.length;c++){e=n[c][0],r=n[c][1],i=n[c][2];for(var s=!0,p=0;p<e.length;p++)(!1&i||a>=i)&&Object.keys(o.O).every((function(n){return o.O[n](e[p])}))?e.splice(p--,1):(s=!1,i<a&&(a=i));if(s){n.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[e,r,i]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,i,a=e[0],s=e[1],p=e[2],u=0;if(a.some((function(t){return 0!==n[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(p)var c=p(o)}for(t&&t(e);u<a.length;u++)i=a[u],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(c)},e=self["webpackChunkapi_github_io"]=self["webpackChunkapi_github_io"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(6542)}));e=o.O(e)})();
//# sourceMappingURL=app.3873ec73.js.map