(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{400:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=400},417:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(20),r(40),r(49),{layout:"article",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.app,e.next=3,r(c.i18n.locale,"pages",n.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{page:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.description}]}}}),o=r(17),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"pb-5 mb-5"},[n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[n("a",{attrs:{href:"/"}},[t._v(t._s(t.$t("Home")))])]),t._v(" "),n("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[n("a",{attrs:{href:"/"}},[t._v(t._s(t.$t("Pages")))])])])]),t._v(" "),n("h1",{staticClass:"pb-3 border-bottom mb-3"},[t._v(t._s(t.page.title))]),t._v(" "),n("div",{},[t.page.image?n("img",{attrs:{src:r(400)("./"+t.page.image),alt:t.title}}):t._e()]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);