(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{446:function(e,t,r){"use strict";var o=r(34);r(280),r(9),r(31);t.a=function e(t){if(!t)return t;var r;if([Number,String,Boolean].forEach((function(e){t instanceof e&&(r=e(t))})),void 0===r)if("[object Array]"===Object.prototype.toString.call(t))r=[],t.forEach((function(t,o,n){r[o]=e(t)}));else if("object"==Object(o.a)(t))if(t.nodeType&&"function"==typeof t.cloneNode)r=t.cloneNode(!0);else if(t.prototype)r=t;else if(t instanceof Date)r=new Date(t);else for(var i in r={},t)r[i]=e(t[i]);else r=t;return r}},486:function(e,t,r){var content=r(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("24b6c7f9",content,!0,{sourceMap:!1})},555:function(e,t,r){"use strict";r(486)},556:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,".create-school .item[data-v-5bd286d4]{margin-bottom:1rem}.create-school .item p[data-v-5bd286d4]{margin-bottom:6px;color:rgba(0,0,0,.7)}.checkbox-list[data-v-5bd286d4]{display:flex;flex-direction:column}.checkbox-list .ch-item[data-v-5bd286d4]{margin-bottom:4px}",""]),o.locals={},e.exports=o},624:function(e,t,r){"use strict";r.r(t);r(32),r(39),r(64),r(31),r(65);var o=r(23),n=(r(9),r(46),r(81)),l=r(446);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={data:function(){return{loading:!1,form:{name_uz:"",name_ru:"",name_cyr:"",address:"",phone:"",status:"",branch_email:"",inn:"",memo:"",region:null,district:null,edu_type:[]}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)("dictionary",["dic_region","dic_district","dic_edutype"])),created:function(){this.__GET()},methods:{save:function(){var e=this;this.$refs.add_school.validate().then((function(t){if(t){e.loading=!0;var r=e.$route.query.id,o=r?"/branch/".concat(r,"/"):"/branch/",n=r?"PATCH":"POST",data=Object(l.a)(e.form);e.$axios({url:o,method:n,data:data}).then((function(t){e.$notify({title:"Saqlandi!",type:"success"}),e.$router.push("/DriverSchools/")})).catch((function(t){var r=t.response.data,o=r[Object.keys(r)[0]];e.$notify.error({message:o||"Произошла ошибка"})})).finally((function(){e.loading=!1}))}}))},__GET:function(){var e=this,t=this.$route.query.id;t&&(this.loading=!0,this.$axios.get("/branch/".concat(t,"/")).then((function(t){e.form=t.data})).finally((function(){e.loading=!1})))}}},f=d,v=(r(555),r(14)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-div"},[r("h1",{staticClass:"Title"},[e._v("Yangi avtomaktab qo’shish")]),e._v(" "),r("ValidationObserver",{ref:"add_school"},[r("div",{staticClass:"parrent-card create-school"},[r("el-row",{attrs:{gutter:30}},[r("el-col",{attrs:{md:12}},[r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Viloyat")]),e._v(" "),r("el-select",{staticClass:"w-full",class:{invalid:o[0]},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},e._l(e.dic_region,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name_uz,value:t.id}},[e._v("\n                  "+e._s(t.name_uz)+"\n                ")])})),1)]}}])})],1),e._v(" "),r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Tuman")]),e._v(" "),r("el-select",{staticClass:"w-full",class:{invalid:o[0]},attrs:{disabled:!e.form.region},model:{value:e.form.district,callback:function(t){e.$set(e.form,"district",t)},expression:"form.district"}},e._l(e.dic_district.filter((function(t){return t.region===e.form.region})),(function(t){return r("el-option",{key:t.id,attrs:{label:t.name_uz,value:t.id}},[e._v("\n                  "+e._s(t.name_uz)+"\n                ")])})),1)]}}])})],1),e._v(" "),r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Manzil")]),e._v(" "),r("el-input",{class:{invalid:o[0]},attrs:{placeholder:"Manzil"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})]}}])})],1),e._v(" "),r("div",{staticClass:"item flex"},[r("div",{staticClass:"flex-auto"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Telefon raqam")]),e._v(" "),r("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"+998 (##) ###-##-##",expression:"`+998 (##) ###-##-##`"}],class:{invalid:o[0]},attrs:{placeholder:"+998 (xx) xxx-xx-xx"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})]}}])})],1),e._v(" "),r("div",{staticClass:"ml-4 flex-auto"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Email")]),e._v(" "),r("el-input",{class:{invalid:o[0]},model:{value:e.form.branch_email,callback:function(t){e.$set(e.form,"branch_email",t)},expression:"form.branch_email"}})]}}])})],1)]),e._v(" "),r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("INN")]),e._v(" "),r("el-input",{class:{invalid:o[0]},attrs:{type:"number"},model:{value:e.form.inn,callback:function(t){e.$set(e.form,"inn",t)},expression:"form.inn"}})]}}])})],1)]),e._v(" "),r("el-col",{attrs:{md:12}},[r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Avtomaktab nomi - O’zbek tilida")]),e._v(" "),r("el-input",{class:{invalid:o[0]},attrs:{placeholder:"Manzil"},model:{value:e.form.name_uz,callback:function(t){e.$set(e.form,"name_uz",t)},expression:"form.name_uz"}})]}}])})],1),e._v(" "),r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Avtomaktab nomi - Rus tilida")]),e._v(" "),r("el-input",{class:{invalid:o[0]},attrs:{placeholder:"Manzil"},model:{value:e.form.name_ru,callback:function(t){e.$set(e.form,"name_ru",t)},expression:"form.name_ru"}})]}}])})],1),e._v(" "),r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("p",[e._v("Memo (Ariza holati haqida izoh)")]),e._v(" "),r("el-input",{class:{invalid:o[0]},attrs:{type:"textarea"},model:{value:e.form.memo,callback:function(t){e.$set(e.form,"memo",t)},expression:"form.memo"}})]}}])})],1),e._v(" "),r("div",{staticClass:"item"},[r("p",[e._v("Holati(Status)")]),e._v(" "),[r("el-radio",{attrs:{label:"new"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("Yangi")]),e._v(" "),r("el-radio",{attrs:{label:"active"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("Aktiv")]),e._v(" "),r("el-radio",{attrs:{label:"not_active"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("Aktiv emas")])]],2)])],1),e._v(" "),r("el-checkbox-group",{staticClass:"checkbox-list",model:{value:e.form.edu_type,callback:function(t){e.$set(e.form,"edu_type",t)},expression:"form.edu_type"}},e._l(e.dic_edutype,(function(t){return r("el-checkbox",{key:t.id,staticClass:"ch-item",attrs:{label:t.id}},[e._v(e._s(t.name_uz))])})),1),e._v(" "),r("button",{staticClass:"add-btn mt-8",on:{click:function(t){return e.save()}}},[e._v("Saqlash")])],1)])],1)}),[],!1,null,"5bd286d4",null);t.default=component.exports}}]);