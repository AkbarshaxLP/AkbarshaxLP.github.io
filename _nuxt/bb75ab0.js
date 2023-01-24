(window.webpackJsonp=window.webpackJsonp||[]).push([[32,12,31],{468:function(t,e,n){"use strict";n.r(e);var l=n(33),r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(l.b)(["layout"])},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},673:function(t,e,n){"use strict";n.r(e),n.d(e,"categories",(function(){return l})),n.d(e,"calendarEvents",(function(){return r}));var l=[{name:"Danger",value:"bg-danger text-white"},{name:"Success",value:"bg-success text-white"},{name:"Primary",value:"bg-primary text-white"},{name:"Info",value:"bg-info text-white"},{name:"Dark",value:"bg-dark text-white"},{name:"Warning",value:"bg-warning text-white"}],r=[{id:1,title:"All Day Event",start:(new Date).setDate((new Date).getDate()+1),className:"bg-primary text-white"},{id:2,title:"Long Event",start:(new Date).setDate((new Date).getDate()-5),end:(new Date).setDate((new Date).getDate()-3),className:"bg-warning text-white"},{id:3,title:"Repeating Event",start:(new Date).setDate((new Date).getDate()-3),className:"bg-info text-white"},{id:4,title:"Meeting",start:(new Date).setDate((new Date).getDate()+4),className:"bg-success text-white"}]},763:function(t,e,n){"use strict";n.r(e);n(15),n(3),n(2),n(24);var main=n(754),l=n(672),r=n(709),o=n(712),c=n(713),d=n(716),v=n(110),m=n.n(v),h=n(673),f=n(479),w={components:{FullCalendar:main.a},head:function(){return{title:"".concat(this.title," | Minton - Nuxtjs Responsive Admin Dashboard Template")}},data:function(){return{title:"Calendar",items:[{text:"Minton"},{text:"Apps"},{text:"Calendar",active:!0}],calendarEvents:h.calendarEvents,calendarOptions:{headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},plugins:[l.b,r.a,o.a,c.a,d.a],initialView:"dayGridMonth",themeSystem:"bootstrap",initialEvents:h.calendarEvents,editable:!0,droppable:!0,eventResizableFromStart:!0,dateClick:this.dateClicked,eventClick:this.editEvent,eventsSet:this.handleEvents,weekends:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0},currentEvents:[],showModal:!1,eventModal:!1,categories:h.categories,submitted:!1,submit:!1,newEventData:{},edit:{},deleteId:{},event:{title:"",category:""},editevent:{editTitle:"",editcategory:""}}},validations:{event:{title:{required:f.required},category:{required:f.required}}},methods:{handleSubmit:function(t){if(this.submitted=!0,this.$v.$touch(),!this.$v.$invalid){var title=this.event.title,e=this.event.category,n=this.newEventData.view.calendar;this.currentEvents=n.addEvent({id:this.newEventData.length+1,title:title,start:this.newEventData.date,end:this.newEventData.date,classNames:[e]}),this.successmsg(),this.showModal=!1,this.newEventData={},this.submitted=!1,this.event={}}},hideModal:function(t){this.submitted=!1,this.showModal=!1,this.event={}},editSubmit:function(t){this.submit=!0;var e=this.editevent.editTitle,n=this.editevent.editcategory;this.edit.setProp("title",e),this.edit.setProp("classNames",n),this.successmsg(),this.eventModal=!1},deleteEvent:function(){this.edit.remove(),this.eventModal=!1},dateClicked:function(t){this.newEventData=t,this.showModal=!0},editEvent:function(t){this.edit=t.event,this.editevent.editTitle=this.edit.title,this.editevent.editcategory=this.edit.category,this.eventModal=!0},closeModal:function(){this.eventModal=!1},confirm:function(){var t=this;m.a.fire({title:"Are you sure?",text:"You won't be able to delete this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#34c38f",cancelButtonColor:"#f46a6a",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&(t.deleteEvent(),m.a.fire("Deleted!","Event has been deleted.","success"))}))},handleEvents:function(t){this.currentEvents=t},successmsg:function(){m.a.fire({position:"center",icon:"success",title:"Event has been saved",showConfirmButton:!1,timer:1e3})}},middleware:"router-auth"},y=n(14),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"app-calendar"},[e("FullCalendar",{ref:"fullCalendar",attrs:{options:t.calendarOptions}})],1)])])])]),t._v(" "),e("b-modal",{attrs:{title:"Add New Event","title-tag":"h5","body-class":"px-4 pb-4 pt-0","header-class":"text-black font-18 border-bottom-0 py-3 px-4","hide-footer":""},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Event Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.event.title,expression:"event.title"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.$v.event.title.$error},attrs:{id:"name",type:"text",placeholder:"Insert Event name"},domProps:{value:t.event.title},on:{input:function(e){e.target.composing||t.$set(t.event,"title",e.target.value)}}}),t._v(" "),t.submitted&&!t.$v.event.title.required?e("div",{staticClass:"invalid-feedback"},[t._v("\r\n                            This value is required.\r\n                        ")]):t._e()])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("Category")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.event.category,expression:"event.category"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.$v.event.category.errors},attrs:{name:"category"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.event,"category",e.target.multiple?n:n[0])}}},t._l(t.categories,(function(option){return e("option",{key:option.backgroundColor,domProps:{value:"".concat(option.value)}},[t._v(t._s(option.name))])})),0),t._v(" "),t.submitted&&!t.$v.event.category.required?e("div",{staticClass:"invalid-feedback"},[t._v("\r\n                            This value is required.\r\n                        ")]):t._e()])])]),t._v(" "),e("div",{staticClass:"text-right mt-2"},[e("b-button",{attrs:{variant:"light"},on:{click:t.hideModal}},[t._v("Close")]),t._v(" "),e("b-button",{staticClass:"ml-1",attrs:{type:"submit",variant:"success"}},[t._v("Create event")])],1)])]),t._v(" "),e("b-modal",{attrs:{title:"Edit Event","title-tag":"h5","body-class":"px-4 pb-4 pt-0","header-class":"text-black font-18 border-bottom-0 py-3 px-4","hide-footer":""},model:{value:t.eventModal,callback:function(e){t.eventModal=e},expression:"eventModal"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.editSubmit.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Event Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editevent.editTitle,expression:"editevent.editTitle"}],staticClass:"form-control",attrs:{id:"name",type:"text",placeholder:"Insert Event name"},domProps:{value:t.editevent.editTitle},on:{input:function(e){e.target.composing||t.$set(t.editevent,"editTitle",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("Category")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.editevent.editcategory,expression:"editevent.editcategory"}],staticClass:"form-control",attrs:{name:"category"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.editevent,"editcategory",e.target.multiple?n:n[0])}}},t._l(t.categories,(function(option){return e("option",{key:option.backgroundColor,domProps:{value:"".concat(option.value)}},[t._v(t._s(option.name))])})),0)])])]),t._v(" "),e("div",{staticClass:"text-right mt-2"},[e("b-button",{attrs:{variant:"light"},on:{click:t.closeModal}},[t._v("Close")]),t._v(" "),e("b-button",{staticClass:"ml-1",attrs:{variant:"danger"},on:{click:t.confirm}},[t._v("Delete")]),t._v(" "),e("b-button",{staticClass:"ml-1",attrs:{variant:"success"},on:{click:t.editSubmit}},[t._v("Save")])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(468).default})}}]);