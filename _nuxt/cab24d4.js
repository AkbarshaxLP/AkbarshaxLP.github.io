(window.webpackJsonp=window.webpackJsonp||[]).push([[87,12,81],{468:function(t,e,r){"use strict";r.r(e);var c=r(33),l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(c.b)(["layout"])},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},473:function(t,e,r){t.exports=r.p+"img/product-1.19ed708.png"},475:function(t,e,r){t.exports=r.p+"img/product-6.d8a58ef.png"},476:function(t,e,r){t.exports=r.p+"img/product-8.fd8ea3b.png"},638:function(t,e,r){t.exports=r.p+"img/product-2.fc0c279.png"},640:function(t,e,r){t.exports=r.p+"img/product-3.1f96546.png"},641:function(t,e,r){t.exports=r.p+"img/product-4.dac4be2.png"},644:function(t,e,r){t.exports=r.p+"img/product-5.f2db819.png"},645:function(t,e,r){t.exports=r.p+"img/product-7.36d03cc.png"},654:function(t,e,r){"use strict";r.r(e),r.d(e,"products",(function(){return c}));var c=[{id:1,image:r(473),name:"Blue color T-shirt",price:41},{id:2,image:r(638),name:"Half sleeve maroon T-shirt",price:37},{id:3,image:r(640),name:"Cream color T-shirt",price:38},{id:4,image:r(641),name:"Blue color T-shirt",price:37},{id:5,image:r(644),name:"Half sleeve T-shirt",price:37},{id:6,image:r(475),name:"Blue Hoodie for men",price:45},{id:7,image:r(645),name:"Vneck green T-shirt",price:38},{id:8,image:r(476),name:"Full sleeve Pink T-shirt",price:45}]},798:function(t,e,r){"use strict";r.r(e);r(24);var c=r(654),l={head:function(){return{title:"".concat(this.title," | Minton - Nuxtjs Responsive Admin Dashboard Template")}},data:function(){return{products:c.products,title:"Products Grid",items:[{text:"Minton"},{text:"eCommerce"},{text:"Products Grid",active:!0}]}},middleware:"router-auth"},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-4"},[e("nuxt-link",{staticClass:"btn btn-danger mb-2",attrs:{to:"/ecommerce/product-create"}},[e("i",{staticClass:"mdi mdi-plus-circle mr-1"}),t._v(" Add Products")])],1),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"row"},t._l(t.products,(function(r,c){return e("div",{key:c,staticClass:"col-md-6 col-xl-3"},[e("div",{staticClass:"card product-box"},[e("div",{staticClass:"product-img"},[e("div",{staticClass:"p-3"},[e("img",{staticClass:"img-fluid",attrs:{src:"".concat(r.image),alt:"product-pic"}})]),t._v(" "),t._m(1,!0)]),t._v(" "),e("div",{staticClass:"product-info border-top p-3"},[e("div",[e("h5",{staticClass:"font-16 mt-0 mb-1"},[e("nuxt-link",{staticClass:"text-dark",attrs:{to:"/ecommerce/product-detail/"+r.id}},[t._v(t._s(r.name))])],1),t._v(" "),t._m(2,!0),t._v(" "),e("h4",{staticClass:"m-0"},[e("span",{staticClass:"text-muted"},[t._v(" Price : $ "+t._s(r.price))])])])])])])})),0),t._v(" "),t._m(3)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"float-sm-right"},[e("form",{staticClass:"form-inline"},[e("div",{staticClass:"form-group mr-2"},[e("label",{staticClass:"sr-only",attrs:{for:"productssearch-input"}},[t._v("Search")]),t._v(" "),e("input",{staticClass:"form-control border-light",attrs:{type:"search",id:"productssearch-input",placeholder:"Search..."}})]),t._v(" "),e("button",{staticClass:"btn btn-success mb-2 mb-sm-0",attrs:{type:"button"}},[e("i",{staticClass:"mdi mdi-cog"})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-action"},[e("div",{staticClass:"d-flex"},[e("a",{staticClass:"btn btn-white btn-block action-btn m-2",attrs:{href:"javascript: void(0);"}},[e("i",{staticClass:"ri-edit-2-fill align-middle"}),t._v(" Edit")]),t._v(" "),e("a",{staticClass:"btn btn-white btn-block action-btn m-2",attrs:{href:"javascript: void(0);"}},[e("i",{staticClass:"ri-delete-bin-fill align-middle"}),t._v(" Delete")])])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-muted"},[e("i",{staticClass:"mdi mdi-star text-warning"}),t._v(" "),e("i",{staticClass:"mdi mdi-star text-warning"}),t._v(" "),e("i",{staticClass:"mdi mdi-star text-warning"}),t._v(" "),e("i",{staticClass:"mdi mdi-star text-warning"}),t._v(" "),e("i",{staticClass:"mdi mdi-star text-warning"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("ul",{staticClass:"pagination pagination-rounded justify-content-end mb-3"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript: void(0);","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._v(" "),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link",attrs:{href:"javascript: void(0);"}},[t._v("1")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript: void(0);"}},[t._v("2")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript: void(0);"}},[t._v("3")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript: void(0);"}},[t._v("4")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript: void(0);"}},[t._v("5")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"javascript: void(0);","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Next")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(468).default})}}]);