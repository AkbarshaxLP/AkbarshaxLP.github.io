(window.webpackJsonp=window.webpackJsonp||[]).push([[106,12],{468:function(t,e,l){"use strict";l.r(e);var o=l(33),r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(o.b)(["layout"])},c=l(14),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},474:function(t,e,l){t.exports=l.p+"img/img-1.e93915a.jpg"},477:function(t,e,l){t.exports=l.p+"img/img-2.01be617.jpg"},478:function(t,e,l){t.exports=l.p+"img/img-3.6206d52.jpg"},646:function(t,e,l){t.exports=l.p+"img/img-4.7e85cdc.jpg"},649:function(t,e,l){t.exports=l.p+"img/img-5.a73524f.jpg"},658:function(t,e,l){t.exports=l.p+"img/img-6.386f439.jpg"},659:function(t,e,l){t.exports=l.p+"img/img-7.c662968.jpg"},811:function(t,e,l){"use strict";l.r(e);var o={head:function(){return{title:"".concat(this.title," | Minton - Nuxtjs Responsive Admin Dashboard Template")}},data:function(){return{title:"Lightbox",items:[{text:"Minton",href:"/"},{text:"Extras",href:"/"},{text:"Lightbox",active:!0}],visible:!1,singleImage:!1,visibleCaption:!1,index:0,imgs:[l(474),l(477),l(478),l(646),l(649),l(658)],captionimgs:[{src:l(478),title:"Caption 1"},{src:l(659),title:"Caption 2"}]}},methods:{showImg:function(t){this.index=t,this.visible=!0},handleHide:function(){this.visible=!1},showCaptiomImg:function(t){this.index=t,this.visibleCaption=!0},handleCaptionHide:function(){this.visibleCaption=!1}},middleware:"router-auth"},r=l(14),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("Single image lightbox")]),t._v(" "),e("p",{staticClass:"sub-header"},[t._v("Example of image popup.")]),t._v(" "),e("div",{staticClass:"popup-gallery"},[e("img",{attrs:{src:l(474),width:"120"},on:{click:function(e){t.singleImage=!0}}}),t._v(" "),e("vue-easy-lightbox",{attrs:{visible:t.singleImage,imgs:l(474)},on:{hide:function(e){t.singleImage=!1}}})],1)])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("Lightbox gallery")]),t._v(" "),e("p",{staticClass:"sub-header"},[t._v("\r\n                        In this example lazy-loading of images is enabled for the next\r\n                        image based on move direction.\r\n                    ")]),t._v(" "),e("div",{staticClass:"popup-gallery"},[t._l(t.imgs,(function(l,o){return e("div",{key:o,staticClass:"float-left",on:{click:function(){return t.showImg(o)}}},[e("img",{attrs:{src:l,width:"120"}})])})),t._v(" "),e("vue-easy-lightbox",{attrs:{visible:t.visible,imgs:t.imgs,index:t.index},on:{hide:t.handleHide}})],2)])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"header-title"},[t._v("Caption")]),t._v(" "),e("p",{staticClass:"sub-header"},[t._v("Show caption with popup.")]),t._v(" "),e("div",{staticClass:"popup-gallery"},[t._l(t.captionimgs,(function(l,o){return e("div",{key:o,staticClass:"float-left",on:{click:function(){return t.showCaptiomImg(o)}}},[e("img",{attrs:{src:l.src,width:"275"}})])})),t._v(" "),e("vue-easy-lightbox",{attrs:{visible:t.visibleCaption,imgs:t.captionimgs,index:t.index},on:{hide:t.handleCaptionHide}})],2)])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Popup with form")]),t._v(" "),e("div",[e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"popup-form btn btn-primary",attrs:{href:"javascript: void(0);"}},[t._v("Popup form")]),t._v(" "),e("b-modal",{attrs:{id:"modal-1",title:"Form","hide-footer":"",size:"lg",centered:""}},[e("div",{staticClass:"card-body"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter Name"}})])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter Email"}})])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"password",placeholder:"Enter Password"}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"subject",rows:"3"}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\r\n                                                    Submit\r\n                                                ")])])])])])])])],1)])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(468).default})}}]);