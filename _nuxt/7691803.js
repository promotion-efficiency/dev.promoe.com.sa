(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{384:function(t,e,n){var map={"./1.png":251};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=384},389:function(t,e,n){"use strict";n.r(e);var r={props:["icon","title","description","link","image"]},c=n(17),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col service"},[r("div",{staticClass:"card h-100 overflow-hidden"},[r("div",{staticClass:"card-body p-0",staticStyle:{height:"400px"}},[t.image?r("img",{staticClass:"contained-image",attrs:{src:n(384)("./"+t.image),alt:t.title}}):t._e(),t._v(" "),r("div",{staticClass:"content p-3 d-flex flex-column justify-content-between"},[r("h5",{staticClass:"card-title fw-bolder text-uppercase my-3"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(t.description))]),t._v(" "),r("a",{staticClass:"btn btn-sm btn-outline-light ",attrs:{href:t.link}},[t._v(t._s(t.$t("readmore")))])])])])])}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n.r(e);var r={props:["services"],mounted:function(){}},c=n(17),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"services"}},[n("div",{staticClass:"container"},[n("Title",{attrs:{title:t.$t("Services"),subtitle:t.$t("thatyouwillenjoy"),divider:"divider-black"}}),t._v(" "),n("div",{staticClass:"row row-cols-1 row-cols-md-4 g-4 text-center justify-content-center"},t._l(t.services,(function(e){return n("Service",{key:t.localePath(e.path),attrs:{icon:e.icon,title:e.title,image:e.featured_image,description:e.description,link:t.localePath(e.path)}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(228).default,Service:n(389).default})}}]);