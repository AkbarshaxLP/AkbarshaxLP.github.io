(window.webpackJsonp=window.webpackJsonp||[]).push([[143,12],{468:function(t,e,l){"use strict";l.r(e);var r=l(33),c={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(r.b)(["layout"])},o=l(14),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},474:function(t,e,l){t.exports=l.p+"img/img-1.e93915a.jpg"},477:function(t,e,l){t.exports=l.p+"img/img-2.01be617.jpg"},478:function(t,e,l){t.exports=l.p+"img/img-3.6206d52.jpg"},646:function(t,e,l){t.exports=l.p+"img/img-4.7e85cdc.jpg"},649:function(t,e,l){t.exports=l.p+"img/img-5.a73524f.jpg"},843:function(t,e,l){"use strict";l.r(e);var r={head:function(){return{title:"".concat(this.title," | Minton - Nuxtjs Responsive Admin Dashboard Template")}},data:function(){return{title:"Carousel",items:[{text:"Minton",href:"/"},{text:"UI",href:"/"},{text:"Carousel",active:!0}],slide:0,slide1:0,sliding:null}},middleware:"router-auth"},c=l(14),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("Slides only")]),t._v(" "),t._m(0),t._v(" "),e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade"}},[e("b-carousel-slide",{attrs:{"img-src":l(474)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(477)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(478)}})],1)],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("With controls")]),t._v(" "),e("p",{staticClass:"sub-header"},[t._v("Adding in the previous and next controls:")]),t._v(" "),e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{controls:""}},[e("b-carousel-slide",{attrs:{"img-src":l(646)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(649)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(474)}})],1)],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("With indicators")]),t._v(" "),e("p",{staticClass:"sub-header"},[t._v("\r\n                        You can also add the indicators to the\r\n                        carousel, alongside the controls, too.\r\n                    ")]),t._v(" "),e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{controls:"",indicators:""}},[e("b-carousel-slide",{attrs:{"img-src":l(478)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(477)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(474)}})],1)],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("With captions")]),t._v(" "),t._m(1),t._v(" "),e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[e("b-carousel-slide",{attrs:{"img-src":l(649)}},[e("h3",{staticClass:"text-white"},[t._v("First slide label")]),t._v(" "),e("p",[t._v("Nulla vitae elit libero, a pharetra augue mollis interdum.")])]),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(478)}},[e("h3",{staticClass:"text-white"},[t._v("Second slide label")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])]),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(477)}},[e("h3",{staticClass:"text-white"},[t._v("Third slide label")]),t._v(" "),e("p",[t._v("Praesent commodo cursus magna, vel scelerisque nisl consectetur.")])])],1)],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("Crossfade")]),t._v(" "),t._m(2),t._v(" "),e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{controls:"",fade:""}},[e("b-carousel-slide",{attrs:{"img-src":l(474)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(477)}}),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":l(478)}})],1)],1)])])])],1)}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"sub-header"},[t._v("\r\n                        Here’s a carousel with slides only.\r\n                        Note the presence of the\r\n                        "),e("code",[t._v(".d-block")]),t._v("\r\n                        and\r\n                        "),e("code",[t._v(".img-fluid")]),t._v(" on carousel images\r\n                        to prevent browser default image alignment.\r\n                    ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"sub-header"},[t._v("\r\n                        Add captions to your slides easily with the\r\n                        "),e("code",[t._v(".carousel-caption")]),t._v(" element within any\r\n                        "),e("code",[t._v(".carousel-item")]),t._v(".\r\n                    ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"sub-header"},[t._v("\r\n                        Add\r\n                        "),e("code",[t._v(".carousel-fade")]),t._v(" to your carousel to animate slides with a fade transition instead of a slide.\r\n                    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(468).default})}}]);