(window.webpackJsonp=window.webpackJsonp||[]).push([[153,12],{468:function(t,e,l){"use strict";l.r(e);var n=l(33),o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(n.b)(["layout"])},c=l(14),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},853:function(t,e,l){"use strict";l.r(e);l(13);var n={head:function(){return{title:"".concat(this.title," | Minton - Nuxtjs Responsive Admin Dashboard Template")}},data:function(){return{title:"Ribbons",items:[{text:"Minton",href:"/"},{text:"UI",href:"/"},{text:"Ribbons",active:!0}],ribbonsData:[{title:"Purple Header",color:"purple",icon:"mdi mdi-access-point",textalign:"left",titlealign:"right"},{title:"Primary Header",color:"primary",icon:"mdi mdi-access-point",textalign:"left",titlealign:"right"},{title:"Success Header",color:"success",icon:"mdi mdi-access-point",textalign:"left",titlealign:"right"},{title:"Info Header",color:"info",icon:"mdi mdi-access-point",textalign:"right",titlealign:"left"},{title:"Warning Header",color:"warning",icon:"mdi mdi-access-point",textalign:"right",titlealign:"left"},{title:"Danger Header",color:"danger",icon:"mdi mdi-access-point",textalign:"right",titlealign:"left"},{title:"Pink Header",color:"pink",icon:"mdi mdi-access-point",textalign:"left",titlealign:"right",shape:!0},{title:"Secondary Header",color:"secondary",icon:"mdi mdi-access-point",textalign:"right",titlealign:"left",shape:!0},{title:"Dark Header",color:"dark",icon:"mdi mdi-access-point",textalign:"right",titlealign:"left",shape:!0}]}},middleware:"router-auth"},o=l(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row"},t._l(t.ribbonsData,(function(l){return e("div",{key:l.title,staticClass:"col-lg-4"},[e("div",{staticClass:"card ribbon-box"},[e("div",{staticClass:"card-body"},[e("div",{class:"ribbon ribbon-".concat(l.color," float-").concat(l.textalign)},[e("i",{class:"".concat(l.icon," mr-1")}),t._v("\r\n                        "+t._s(t._f("titlecase")(l.color))+"\r\n                    ")]),t._v(" "),e("h5",{class:"text-".concat(l.color," float-").concat(l.titlealign," mt-0")},[t._v(t._s(l.title))]),t._v(" "),t._m(0,!0)])])])})),0),t._v(" "),e("div",{staticClass:"row"},t._l(t.ribbonsData,(function(l){return e("div",{key:l.title,staticClass:"col-lg-4"},[e("div",{staticClass:"card ribbon-box"},[e("div",{staticClass:"card-body"},[e("div",{class:"ribbon-two ribbon-two-".concat(l.color)},[e("span",[t._v(t._s(t._f("titlecase")(l.color)))])]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\r\n                        Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at\r\n                        volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem\r\n                        ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie\r\n                        ullamcorper ornare.\r\n                    ")])])])])})),0)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"ribbon-content"},[t("p",{staticClass:"mb-0"},[this._v("\r\n                            Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at\r\n                            volutpat. In egestas\r\n                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo\r\n                            dapibus odio.\r\n                        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(468).default})}}]);