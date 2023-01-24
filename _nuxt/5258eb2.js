(window.webpackJsonp=window.webpackJsonp||[]).push([[116,12],{468:function(e,t,o){"use strict";o.r(t);var r=o(33),l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(r.b)(["layout"])},n=o(14),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==e.layout.layoutType&&"two-column"!==e.layout.layoutType}},[t("h4",{staticClass:"page-title"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"page-title-right"},[t("b-breadcrumb",{staticClass:"m-0",attrs:{items:e.items}})],1)])])])}),[],!1,null,null,null);t.default=component.exports},821:function(e,t,o){"use strict";o.r(t);var r={head:function(){return{title:"".concat(this.title," | Minton - Nuxtjs Responsive Admin Dashboard Template")}},data:function(){return{title:"Form Masks",items:[{text:"Minton",href:"/"},{text:"Forms",href:"/"},{text:"Masks",active:!0}],digit:"",zipcode:"",crazyzip:"",money:"",date:"",hour:"",datetime:"",ipaddress:"",cnpj:"",cpf:"",celphone:"",ustelephone:"",areacode:"",telephone:""}},middleware:"router-auth"},l=o(14),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("PageHeader",{attrs:{title:e.title,items:e.items}}),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"header-title mb-4"},[e._v("Example")]),e._v(" "),t("form",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6"},[t("div",[t("div",{staticClass:"form-group mb-4"},[t("label",{attrs:{for:"input-date1"}},[e._v("Date")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"},{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "dd/mm/yyyy"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("Hour")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"},{name:"mask",rawName:"v-mask",value:"##:##:##",expression:"'##:##:##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.hour},on:{input:function(t){t.target.composing||(e.hour=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "hh:mm:ss"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("Date & Hour")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.datetime,expression:"datetime"},{name:"mask",rawName:"v-mask",value:"##/##/#### ##:##:##",expression:"'##/##/#### ##:##:##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.datetime},on:{input:function(t){t.target.composing||(e.datetime=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "dd/mm/yyyy hh:mm:ss"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("ZIP Code")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcode,expression:"zipcode"},{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.zipcode},on:{input:function(t){t.target.composing||(e.zipcode=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "xxxxx-xxx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("Crazy Zip Code")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.crazyzip,expression:"crazyzip"},{name:"mask",rawName:"v-mask",value:"#-##-##-##",expression:"'#-##-##-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.crazyzip},on:{input:function(t){t.target.composing||(e.crazyzip=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "x-xx-xx-xx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("Money")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.money,expression:"money"},{name:"mask",rawName:"v-mask",value:"###.###.###.###.###,##",expression:"'###.###.###.###.###,##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.money},on:{input:function(t){t.target.composing||(e.money=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "Your money"')])]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",[e._v("4 digit Group")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.digit,expression:"digit"},{name:"mask",rawName:"v-mask",value:"#,####,####,####",expression:"'#,####,####,####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.digit},on:{input:function(t){t.target.composing||(e.digit=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g. "x,xxxx,xxxx,xxxx"')])])])]),e._v(" "),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("Telephone")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.telephone,expression:"telephone"},{name:"mask",rawName:"v-mask",value:"####-####",expression:"'####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.telephone},on:{input:function(t){t.target.composing||(e.telephone=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "xxxx-xxxx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("Telephone with Code Area")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.areacode,expression:"areacode"},{name:"mask",rawName:"v-mask",value:"(##) ####-####",expression:"'(##) ####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.areacode},on:{input:function(t){t.target.composing||(e.areacode=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "(xx) xxxx-xxxx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("US Telephone")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ustelephone,expression:"ustelephone"},{name:"mask",rawName:"v-mask",value:"(###) ###-####",expression:"'(###) ###-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ustelephone},on:{input:function(t){t.target.composing||(e.ustelephone=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "(xxx) xxx-xxxx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("São Paulo Celphones")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.celphone,expression:"celphone"},{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.celphone},on:{input:function(t){t.target.composing||(e.celphone=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "(xx) xxxxx-xxxx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("CPF")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.cpf,expression:"cpf"},{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.cpf},on:{input:function(t){t.target.composing||(e.cpf=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "xxx.xxx.xxxx-xx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("CNPJ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.cnpj,expression:"cnpj"},{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.cnpj},on:{input:function(t){t.target.composing||(e.cnpj=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "xx.xxx.xxx/xxxx-xx"')])]),e._v(" "),t("div",{staticClass:"form-group mb-4"},[t("label",[e._v("IP Address")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ipaddress,expression:"ipaddress"},{name:"mask",rawName:"v-mask",value:"###.###.###.###",expression:"'###.###.###.###'"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ipaddress},on:{input:function(t){t.target.composing||(e.ipaddress=t.target.value)}}}),e._v(" "),t("span",{staticClass:"text-muted"},[e._v('e.g "xxx.xxx.xxx.xxx"')])])])])])])])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeader:o(468).default})}}]);