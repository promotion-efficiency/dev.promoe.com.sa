(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3],{380:function(t,e,r){var map={"./1.png":228,"./10.jpg":381,"./10.png":229,"./11.png":230,"./12.png":231,"./13.png":232,"./14.png":233,"./15.png":234,"./16.jpg":382,"./17.png":235,"./18.png":236,"./19.png":237,"./2.jpg":383,"./20.png":238,"./3.png":239,"./4.png":240,"./5.png":241,"./6.png":242,"./7.png":243,"./8.png":244,"./9.png":245};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=380},381:function(t,e,r){t.exports=r.p+"img/10.21d5e0a.jpg"},382:function(t,e,r){t.exports=r.p+"img/16.525faee.jpg"},383:function(t,e,r){t.exports=r.p+"img/2.6f8dbd4.jpg"},384:function(t,e,r){var map={"./1.png":250};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=384},392:function(t,e,r){"use strict";r.r(e);var n={props:["text","buttonText","link"]},c=r(17),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h4",{staticClass:"mb-4 fs-1 fw-light"},[t._v(t._s(t.text))]),t._v(" "),r("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:t.link}},[t._v(t._s(t.buttonText))])])}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,r){"use strict";r.r(e);var n=r(15),c=r(7);r(12),r(32),r(20),r(40),r(34),r(33),r(45),r(46),r(49);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={layout:"article",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.app,e.next=3,r(c.i18n.locale,"services",n.slug).fetch();case 3:return o=e.sent,e.next=6,r(c.i18n.locale,"works").where({service:o.title}).fetch();case 6:return l=e.sent,e.abrupt("return",{service:o,works:l});case 8:case"end":return e.stop()}}),e)})))()},components:{PackageCallout:r(392).default},head:function(){var t=this,e=[],n={},c={};this.works.length>0&&(this.works.forEach((function(element){e.push(t.publicPath+r(380)("./".concat(element.featured_image)))})),n.name="og:image",n.hid="og:image",n.content=e[0],c.name="twitter:image",c.hid="twitter:image",c.content=e[0]);var o=this;return console.log(this.service),{title:o.service.title,meta:[{hid:"description",name:"description",content:o.service.description},{hid:"og:title",name:"og:title",content:o.service.title},{hid:"og:description",name:"og:description",content:o.service.description},{hid:"og:url",name:"og:url",content:"".concat(this.publicPath)},l({},n),{hid:"twitter:title",name:"twitter:title",content:o.service.title},{hid:"twitter:description",name:"twitter:description",content:this.service.description},{hid:"twitter:url",name:"twitter:url",content:"".concat(this.publicPath)},l({},c)]}},jsonld:function(){var t=this,e=[];return this.works.length>0&&this.works.forEach((function(element){e.push(t.publicPath+r(380)("./".concat(element.featured_image)))})),{"@context":"https://schema.org","@type":"Service",serviceType:this.service.title,name:this.service.title,description:this.service.description,image:e}},data:function(){return{publicPath:"https://dev.promoe.com.sa"}}},d=r(17),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("article",{staticClass:"pb-5 mb-5"},[n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[n("a",{attrs:{href:"/"}},[t._v(t._s(t.$t("Home")))])]),t._v(" "),n("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[n("a",{attrs:{href:"/#services"}},[t._v(t._s(t.$t("Services")))])])])]),t._v(" "),n("h1",{staticClass:"pb-3 border-bottom mb-3"},[t._v(t._s(t.service.title))]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t.service.image?n("img",{attrs:{src:r(384)("./"+t.service.image),alt:t.service.title}}):t._e(),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.service.description))]),t._v(" "),n("nuxt-content",{attrs:{document:t.service}})],1),t._v(" "),t.works.length>0?n("div",{staticClass:"col col-xl-4"},[n("h4",{staticClass:"fs-5 fw-bold"},[t._v("Sample works of "+t._s(t.service.title))]),t._v(" "),n("div",{staticClass:"row row-cols-2 g-1"},t._l(t.works,(function(e){return n("div",{key:e.createdAt,staticClass:"work col bg-light"},[n("div",{staticClass:"ratio ratio-1x1"},[n("div",{staticClass:"d-flex justify-content-center align-items-center"},[n("a",{attrs:{href:t.localePath("/works/"+e.slug)}},[e.featured_image?n("img",{staticClass:"contained-image",attrs:{src:r(380)("./"+e.featured_image),alt:e.title}}):t._e()])])])])})),0)]):t._e()])])])]),t._v(" "),t.service.packages_link?n("PackageCallout",{staticClass:"rounded-3 p-5 bg-primary text-light text-center py-5",attrs:{text:t.$t("packages_information_text"),buttonText:t.$t("packages_information_button"),link:t.localePath(t.service.packages_link)}}):t._e(),t._v(" "),n("SectionsContact",{staticClass:"pt-5 mt-5",attrs:{title:t.$t("readytojoin"),subtitle:t.$t("contactussub")}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PackageCallout:r(392).default,SectionsContact:r(251).default})}}]);