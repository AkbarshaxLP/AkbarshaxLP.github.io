(window.webpackJsonp=window.webpackJsonp||[]).push([[66,12,60,61,62,63,64,65],{468:function(t,e,r){"use strict";r.r(e);var n=r(33),l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(n.b)(["layout"])},o=r(14),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},648:function(t,e,r){var map={"./af":503,"./af.js":503,"./ar":504,"./ar-dz":505,"./ar-dz.js":505,"./ar-kw":506,"./ar-kw.js":506,"./ar-ly":507,"./ar-ly.js":507,"./ar-ma":508,"./ar-ma.js":508,"./ar-sa":509,"./ar-sa.js":509,"./ar-tn":510,"./ar-tn.js":510,"./ar.js":504,"./az":511,"./az.js":511,"./be":512,"./be.js":512,"./bg":513,"./bg.js":513,"./bm":514,"./bm.js":514,"./bn":515,"./bn-bd":516,"./bn-bd.js":516,"./bn.js":515,"./bo":517,"./bo.js":517,"./br":518,"./br.js":518,"./bs":519,"./bs.js":519,"./ca":520,"./ca.js":520,"./cs":521,"./cs.js":521,"./cv":522,"./cv.js":522,"./cy":523,"./cy.js":523,"./da":524,"./da.js":524,"./de":525,"./de-at":526,"./de-at.js":526,"./de-ch":527,"./de-ch.js":527,"./de.js":525,"./dv":528,"./dv.js":528,"./el":529,"./el.js":529,"./en-au":530,"./en-au.js":530,"./en-ca":531,"./en-ca.js":531,"./en-gb":532,"./en-gb.js":532,"./en-ie":533,"./en-ie.js":533,"./en-il":534,"./en-il.js":534,"./en-in":535,"./en-in.js":535,"./en-nz":536,"./en-nz.js":536,"./en-sg":537,"./en-sg.js":537,"./eo":538,"./eo.js":538,"./es":539,"./es-do":540,"./es-do.js":540,"./es-mx":541,"./es-mx.js":541,"./es-us":542,"./es-us.js":542,"./es.js":539,"./et":543,"./et.js":543,"./eu":544,"./eu.js":544,"./fa":545,"./fa.js":545,"./fi":546,"./fi.js":546,"./fil":547,"./fil.js":547,"./fo":548,"./fo.js":548,"./fr":549,"./fr-ca":550,"./fr-ca.js":550,"./fr-ch":551,"./fr-ch.js":551,"./fr.js":549,"./fy":552,"./fy.js":552,"./ga":553,"./ga.js":553,"./gd":554,"./gd.js":554,"./gl":555,"./gl.js":555,"./gom-deva":556,"./gom-deva.js":556,"./gom-latn":557,"./gom-latn.js":557,"./gu":558,"./gu.js":558,"./he":559,"./he.js":559,"./hi":560,"./hi.js":560,"./hr":561,"./hr.js":561,"./hu":562,"./hu.js":562,"./hy-am":563,"./hy-am.js":563,"./id":564,"./id.js":564,"./is":565,"./is.js":565,"./it":566,"./it-ch":567,"./it-ch.js":567,"./it.js":566,"./ja":568,"./ja.js":568,"./jv":569,"./jv.js":569,"./ka":570,"./ka.js":570,"./kk":571,"./kk.js":571,"./km":572,"./km.js":572,"./kn":573,"./kn.js":573,"./ko":574,"./ko.js":574,"./ku":575,"./ku.js":575,"./ky":576,"./ky.js":576,"./lb":577,"./lb.js":577,"./lo":578,"./lo.js":578,"./lt":579,"./lt.js":579,"./lv":580,"./lv.js":580,"./me":581,"./me.js":581,"./mi":582,"./mi.js":582,"./mk":583,"./mk.js":583,"./ml":584,"./ml.js":584,"./mn":585,"./mn.js":585,"./mr":586,"./mr.js":586,"./ms":587,"./ms-my":588,"./ms-my.js":588,"./ms.js":587,"./mt":589,"./mt.js":589,"./my":590,"./my.js":590,"./nb":591,"./nb.js":591,"./ne":592,"./ne.js":592,"./nl":593,"./nl-be":594,"./nl-be.js":594,"./nl.js":593,"./nn":595,"./nn.js":595,"./oc-lnc":596,"./oc-lnc.js":596,"./pa-in":597,"./pa-in.js":597,"./pl":598,"./pl.js":598,"./pt":599,"./pt-br":600,"./pt-br.js":600,"./pt.js":599,"./ro":601,"./ro.js":601,"./ru":602,"./ru.js":602,"./sd":603,"./sd.js":603,"./se":604,"./se.js":604,"./si":605,"./si.js":605,"./sk":606,"./sk.js":606,"./sl":607,"./sl.js":607,"./sq":608,"./sq.js":608,"./sr":609,"./sr-cyrl":610,"./sr-cyrl.js":610,"./sr.js":609,"./ss":611,"./ss.js":611,"./sv":612,"./sv.js":612,"./sw":613,"./sw.js":613,"./ta":614,"./ta.js":614,"./te":615,"./te.js":615,"./tet":616,"./tet.js":616,"./tg":617,"./tg.js":617,"./th":618,"./th.js":618,"./tk":619,"./tk.js":619,"./tl-ph":620,"./tl-ph.js":620,"./tlh":621,"./tlh.js":621,"./tr":622,"./tr.js":622,"./tzl":623,"./tzl.js":623,"./tzm":624,"./tzm-latn":625,"./tzm-latn.js":625,"./tzm.js":624,"./ug-cn":626,"./ug-cn.js":626,"./uk":627,"./uk.js":627,"./ur":628,"./ur.js":628,"./uz":629,"./uz-latn":630,"./uz-latn.js":630,"./uz.js":629,"./vi":631,"./vi.js":631,"./x-pseudo":632,"./x-pseudo.js":632,"./yo":633,"./yo.js":633,"./zh-cn":634,"./zh-cn.js":634,"./zh-hk":635,"./zh-hk.js":635,"./zh-mo":636,"./zh-mo.js":636,"./zh-tw":637,"./zh-tw.js":637};function n(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=648},697:function(t,e,r){"use strict";r.r(e);var n={extends:r(639).a,mounted:function(){this.renderChart({labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{barPercentage:.7,categoryPercentage:.5,label:"Sales Analytics",backgroundColor:"#1abc9c",borderColor:"#1abc9c",hoverBackgroundColor:"#1abc9c",hoverBorderColor:"#1abc9c",data:[65,59,80,81,56,89,40,32,65,59,80,81]},{barPercentage:.7,categoryPercentage:.5,label:"Dollar Rate",backgroundColor:"#e3eaef",borderColor:"#e3eaef",hoverBackgroundColor:"#e3eaef",hoverBorderColor:"#e3eaef",data:[89,40,32,65,59,80,81,56,89,40,65,59]}]},{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},stacked:!1,ticks:{stepSize:20}}],xAxes:[{stacked:!1,gridLines:{color:"rgba(0,0,0,0.01)"}}]}})}},l=r(14),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},698:function(t,e,r){"use strict";r.r(e);var n={extends:r(639).c,mounted:function(){this.renderChart({labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:"rgba(59, 175, 218, 0.3)",borderColor:"#3bafda",data:[32,42,42,62,52,75,62]},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:"#f672a7",borderDash:[5,5],data:[42,58,66,93,82,105,92]}]},{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1}},scales:{xAxes:[{reverse:!0,gridLines:{color:"rgba(0,0,0,0.05)"}}],yAxes:[{ticks:{stepSize:20},display:!0,borderDash:[5,5],gridLines:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}]}})}},l=r(14),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},699:function(t,e,r){"use strict";r.r(e);var n={extends:r(639).d,mounted:function(){this.renderChart({labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[300,135,48,154],backgroundColor:["#3bafda","#f7b84b","#1abc9c","#ebeff2"],borderColor:"transparent"}]},{maintainAspectRatio:!0,responsive:!0,legend:{display:!1}})}},l=r(14),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},700:function(t,e,r){"use strict";r.r(e);var n={extends:r(639).b,mounted:function(){this.renderChart({labels:["Direct","Affilliate","Sponsored"],datasets:[{data:[128,78,48],backgroundColor:["#3bafda","#1abc9c","#ebeff2"],borderColor:"transparent",borderWidth:"3"}]},{maintainAspectRatio:!0,cutoutPercentage:60,legend:{display:!1},height:200})}},l=r(14),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},701:function(t,e,r){"use strict";r.r(e);var n={extends:r(639).e,mounted:function(){this.renderChart({labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[251,135,48,154],backgroundColor:["#3bafda","#f7b84b","#1abc9c","#ebeff2"],borderColor:"transparent"}]},{maintainAspectRatio:!0,legend:{position:"top"}})}},l=r(14),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},702:function(t,e,r){"use strict";r.r(e);var n={extends:r(639).f,mounted:function(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Desktops",backgroundColor:"rgba(59, 175, 218,0.2)",borderColor:"#3bafda",pointBackgroundColor:"#3bafda",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#3bafda",data:[65,59,90,81,56,55,40]},{label:"Tablets",backgroundColor:"rgba(246, 114, 167,0.2)",borderColor:"#f672a7",pointBackgroundColor:"#f672a7",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#f672a7",data:[28,48,40,19,96,27,100]}]},{maintainAspectRatio:!0,legend:{position:"top"}})}},l=r(14),component=Object(l.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},785:function(t,e,r){"use strict";r.r(e);var n=r(697),l=r(698),o=r(699),d=r(700),c=r(701),j=r(702),f={head:function(){return{title:"".concat(this.title," | Minton - Nuxtjs Responsive Admin Dashboard Template")}},components:{BarChart:n.default,LineChart:l.default,PieChart:o.default,DonutChart:d.default,PolarChart:c.default,RadarChart:j.default},data:function(){return{title:"Chartjs",items:[{text:"Minton",href:"/"},{text:"Charts",href:"/"},{text:"Chartjs",active:!0}]}},middleware:"router-auth"},h=r(14),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title mb-4"},[t._v("Line Chart")]),t._v(" "),e("LineChart",{attrs:{height:350}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title mb-4"},[t._v("Bar Chart")]),t._v(" "),e("BarChart",{attrs:{height:350}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title mb-4"},[t._v("Pie Chart")]),t._v(" "),e("PieChart",{attrs:{height:170}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title mb-4"},[t._v("Donut Chart")]),t._v(" "),e("DonutChart",{attrs:{height:170}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title mb-4"},[t._v("Polar area Chart")]),t._v(" "),e("PolarChart",{attrs:{height:170}})],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title mb-4"},[t._v("Radar Chart")]),t._v(" "),e("RadarChart",{attrs:{height:170}})],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(468).default})}}]);