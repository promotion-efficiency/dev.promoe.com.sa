(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://dev.promoe.com.sa/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var m=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("a79d");var a=s("2b0e"),i=s("ec02"),o=s.n(i),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],l={},c=l,m=s("2877"),p=Object(m["a"])(c,n,r,!1,null,null,null),u=p.exports,d=s("5f5b");s("ab8b"),s("2dd8");a["default"].use(d["a"]);s("0cdd"),s("a0d8");var g=s("0a63"),b=s.n(g),h=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Main")],1)},v=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MainTemplate"},[s("vue-headful",{attrs:{title:"Promotion Efficiency",description:"Your Hike to PEAK",keywords:"business, promo, promotion, efficiency, center, khobar",lang:"en",url:"https://www.promoe.com.sa/","twitter:url":"https://twitter.com/promoefficiency/",image:"https://www.promoe.com.sa/public/assets/imgs/favicon/OGImage.png"}}),s("Hero"),s("AboutUs"),s("Video"),s("Services"),s("Insight"),s("Work"),s("Clients"),s("GetStarted"),s("Instagram"),s("ContactUs"),s("Address"),s("Footer")],1)},_=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"p-2 py-lg-3 bg-white overflow-hidden",attrs:{id:"hero"}},[s("Navbar"),s("div",{staticClass:"layer layer_1",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_1.png)"}}),s("div",{staticClass:"layer layer_2",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_2.png)"}}),s("div",{staticClass:"layer layer_3",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_3.png)"}}),s("div",{staticClass:"layer layer_4",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_4.png)"}}),s("div",{staticClass:"layer layer_5 animate__animated animate__shakeX animate__infinite",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/hero/layer_5.png)"}}),s("h1",{staticClass:"text-center mt-5",staticStyle:{"z-index":"6",position:"relative"},domProps:{innerHTML:t._s(this.jsonData.general.slogan)}})],1)},w=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"container"},[s("b-navbar",{staticClass:"shadow text-white p-2 rounded-lg",attrs:{type:"dark"}},[s("b-navbar-brand",{attrs:{href:"/"}},[s("b-img",{attrs:{src:t.publicPath+"/assets/imgs/logo/pe_logo_primary_dark_bg.svg",fluid:"",alt:"Promo Logo",height:"55",width:"55"}})],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-variant",modifiers:{"sidebar-variant":!0}}],attrs:{variant:"transparent",right:""}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("b-sidebar",{attrs:{id:"sidebar-variant",title:"",backdrop:"",width:"100%","bg-variant":"dark","text-variant":"light",shadow:""}},[s("div",{staticClass:"overlay-content"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),s("b-link",{attrs:{href:t.publicPath+"#whyus"}},[t._v("- Why Us")]),s("b-link",{attrs:{href:t.publicPath+"#services"}},[t._v("- Services")]),s("b-link",{attrs:{href:t.publicPath+"#work"}},[t._v("- Portfolio")]),s("b-link",{attrs:{href:t.publicPath+"#contact"}},[t._v("- Contact Us")]),s("hr"),s("router-link",{attrs:{to:"/jobs"}},[t._v("Jobs Application")])],1)])],1)],1)],1)},k=[],j={data(){return{publicPath:"https://dev.promoe.com.sa/"}},mounted(){function t(){const t=document.querySelector("section#hero header"),e=document.querySelector("section#hero header nav");var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;s>100?(t.classList.add("sticky"),e.classList.remove("navbar-dark"),e.classList.add("navbar-light"),e.classList.add("text-white"),e.classList.remove("navbar-dark")):(t.classList.remove("sticky"),e.classList.add("navbar-dark"),e.classList.remove("navbar-light"),e.classList.remove("text-white"),e.classList.add("navbar-dark"))}document.addEventListener("scroll",()=>{t()}),t()},methods:{}},P=j,T=Object(m["a"])(P,x,k,!1,null,null,null),O=T.exports,E={components:{Navbar:O},data(){return{myData:this.myData,publicPath:"https://dev.promoe.com.sa/"}},mounted(){}},D=E,S=Object(m["a"])(D,C,w,!1,null,null,null),I=S.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"px-2 py-lg-5 bg-white",attrs:{id:"whyus"}},[s("b-container",[s("header",[s("h2",{staticClass:"text-center mb-5 pt-3"},[s("small",{staticClass:"text-muted"},[s("strong",{domProps:{innerHTML:t._s(this.jsonData.sections.aboutus.subtitle)}})]),s("br"),s("span",{domProps:{innerHTML:t._s(this.jsonData.sections.aboutus.title)}})])]),s("b-container",[s("b-row",{staticClass:"my-2 my-lg-5 py-2 py-lg-5"},[t._l(this.jsonData.sections.aboutus.content,(function(e){return s("b-col",{key:e.number,staticClass:"px-2 px-lg-5",attrs:{cols:"12",lg:"6"}},[s("div",{staticClass:"icon"},[s("span",{staticClass:"text-muted pr-3 d-none d-md-inline"},[t._v(t._s(e.number))]),s("b-img",{attrs:{src:t.publicPath+e.icon,fluid:"",height:"54",alt:"Responsive image"}})],1),s("h4",{staticClass:"text-muted my-4"},[s("strong",[t._v(t._s(e.title))])]),s("div",{staticClass:"p-0 pl-lg-5"},[t._v(t._s(e.text))])])})),s("div",{staticClass:"line"})],2)],1)],1)],1)},N=[],L={data(){return{publicPath:"https://dev.promoe.com.sa/"}}},M=L,R=Object(m["a"])(M,A,N,!1,null,null,null),H=R.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-2 py-xl-5",attrs:{id:"video"}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{staticClass:"p-2 p-xl-5 text-center text-xl-right",attrs:{xl:"3","offset-xl":"1"}},[s("header",[s("b-img",{staticClass:"pt-3 d-none d-lg-inline",attrs:{src:t.publicPath+"assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),s("h2",{staticClass:"insight2 text-dark mb-1 mb-lg-5 pb-2 pt-3"},[s("small",{staticClass:"text-muted mt-5"},[s("strong",[t._v(t._s(this.jsonData.sections.video.subtitle))])]),s("br"),s("span",{domProps:{innerHTML:t._s(this.jsonData.sections.video.title)}})])],1)]),s("b-col",{staticClass:"youtube-video",attrs:{xl:"8"}},[s("b-embed",{attrs:{type:"video",aspect:"16by9",controls:"",poster:t.publicPath+this.jsonData.sections.video.content.poster}},[s("source",{attrs:{src:t.publicPath+this.jsonData.sections.video.content.url,type:"video/mp4"}})])],1)],1)],1)},$=[],F={data(){return{publicPath:"https://dev.promoe.com.sa/"}}},z=F,Y=Object(m["a"])(z,U,$,!1,null,null,null),W=Y.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-1 pb-5 py-lg-5 bg-white overflow-hidden",attrs:{id:"services"}},[s("header",{staticClass:"py-2 py-lg-3 text-center bg-white pt-5"},[s("b-img",{staticClass:"pt-3 d-none d-lg-inline",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),s("h2",{staticClass:"insight2 text-dark mb-2 mb-lg-5 pb-2 pt-3"},[s("strong",{domProps:{innerHTML:t._s(this.jsonData.sections.services.title)}}),s("br"),s("small",{staticClass:"text-muted"},[s("strong",{domProps:{innerHTML:t._s(this.jsonData.sections.services.subtitle)}})])])],1),s("b-container",[s("b-row",{staticClass:"text-center"},[s("b-col",{attrs:{cols:"12"}},[s("carousel",{attrs:{loop:!0,paginationEnabled:!1,perPage:1,perPageCustom:[[600,2],[900,3],[1199,4]]}},t._l(this.jsonData.sections.services.content,(function(e){return s("slide",{key:e.title,staticClass:"p-1"},[s("b-card",{staticClass:"py-3",style:{backgroundImage:"url("+t.publicPath+e.background}},[s("b-card-text",[s("h4",{staticClass:"mb-4",domProps:{textContent:t._s(e.title)}}),s("p",{domProps:{textContent:t._s(e.breif)}})])],1)],1)})),1)],1)],1)],1)],1)},V=[],G={data(){return{publicPath:"https://dev.promoe.com.sa/"}},methods:{letterIcon:function(t){return s("7fcc")("@"+t)},imglink:function(t){return s("e30e")(".."+t)}}},K=G,B=Object(m["a"])(K,q,V,!1,null,null,null),J=B.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"pb-3 pb-lg-5 text-center",style:{backgroundImage:"url("+t.publicPath+"/assets/imgs/insight/insight_dot_map.png)"},attrs:{id:"insight"}},[s("div",{staticClass:"tt-shape tt-shape-top tt-shape-flip",attrs:{"data-negative":"false"}},[s("svg",{staticStyle:{width:"calc(100% + 1.3px)",height:"150px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none"}},[s("path",{staticClass:"tt-shape-fill",staticStyle:{fill:"#ffffff"},attrs:{opacity:"0.33",d:"M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"}}),s("path",{staticClass:"tt-shape-fill",staticStyle:{fill:"#ffffff"},attrs:{opacity:"0.66",d:"M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"}}),s("path",{staticClass:"tt-shape-fill",staticStyle:{fill:"#ffffff"},attrs:{d:"M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"}})])]),s("header",[s("b-img",{staticClass:"pt-3 d-none d-lg-inline",attrs:{src:t.publicPath+"assets/imgs/logo/whitedivider.png",alt:"",height:"90"}}),s("h2",{staticClass:"insight2 text-white mb-5 pb-2 pt-3"},[s("span",{domProps:{innerHTML:t._s(this.jsonData.sections.insight.title)}}),s("br"),s("small",{staticClass:"mt-5"},[s("strong",[t._v(t._s(this.jsonData.sections.insight.subtitle))])])])],1),s("b-container",[s("b-card-group",{staticClass:"mb-lg-5 py-3 py-lg-5",attrs:{id:"insightcard",deck:""}},t._l(this.jsonData.sections.insight.content,(function(e){return s("b-card",{key:e.title,class:e.class},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{cols:"12",lg:"4"}},[s("b-img",{attrs:{fluid:"",src:t.publicPath+e.icon,alt:"item.title"}})],1),s("b-col",{attrs:{cols:"12",lg:"8"}},[s("h4",{staticClass:"counter"},[s("ICountUp",{attrs:{delay:t.delay,endVal:e.number,options:t.options},on:{ready:t.onReady}})],1),s("small",[t._v("TOTAL CLIENTS")])])],1)],1)})),1)],1)],1)},X=[],Z=s("87f4"),tt=s.n(Z),et={components:{ICountUp:tt.a},data(){return{publicPath:"https://dev.promoe.com.sa/",delay:1e3,options:{useEasing:!0,useGrouping:!1,separator:"",decimal:".",prefix:"",suffix:""}}},methods:{onReady:function(t,e){}}},st=et,at=Object(m["a"])(st,Q,X,!1,null,null,null),it=at.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"pb-5",attrs:{id:"work"}},[s("header",{staticClass:"py-3 text-center bg-white pt-5"},[s("b-img",{staticClass:"pt-3 d-none d-lg-inline",attrs:{src:t.publicPath+"assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),s("h2",{staticClass:"insight2 text-dark mb-5 pb-2 pt-3"},[s("small",{staticClass:"text-muted mt-5"},[s("strong",[t._v(t._s(this.jsonData.sections.work.subtitle))])]),s("br"),s("span",{domProps:{innerHTML:t._s(this.jsonData.sections.work.title)}})])],1),s("b-row",{staticClass:"pt-1 pt-lg-5",attrs:{"no-gutters":""}},t._l(this.jsonData.sections.work.content,(function(e,a){return s("b-col",{key:e.title,staticClass:"px-0",class:{"d-none d-lg-block":a+1>3},attrs:{cols:"12",lg:"3"}},[s("div",{staticClass:"member-bg",style:{backgroundImage:"url("+t.publicPath+e.picture}},[s("div",{staticClass:"bio p-4"},[s("div",[s("h6",[t._v(t._s(e.project_name))]),s("p",[t._v(t._s(e.client_name))])])])])])})),1),s("b-row",{staticClass:"mb-3 d-block d-lg-none py-5 text-center",attrs:{"no-gutters":""}},[s("b-col",[s("a",{staticClass:"btn btn-primary py-3 px-4 border-0 text-dark font-weight-normal",attrs:{role:"button",href:"#"}},[t._v("SEE MORE")])])],1),s("svg",{attrs:{id:"special",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[s("polygon",{staticClass:"svg--sm",attrs:{fill:"white",points:"0,0 30,100 65,21 90,100 100,75 100,100 0,100"}}),s("polygon",{staticClass:"svg--lg",attrs:{fill:"white",points:"0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"}})])],1)},nt=[],rt={data(){return{publicPath:"https://dev.promoe.com.sa/"}}},lt=rt,ct=Object(m["a"])(lt,ot,nt,!1,null,null,null),mt=ct.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-2 py-md-5 bg-white text-center",attrs:{id:"ourclients"}},[s("header",[s("b-img",{staticClass:"d-none d-md-inline pt-3",attrs:{src:t.publicPath+"assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),s("h2",{staticClass:"pt-3"},[s("strong",[t._v(t._s(this.jsonData.sections.clients.title))]),s("br"),s("small",{staticClass:"text-muted"},[s("strong",[t._v(t._s(this.jsonData.sections.clients.subtitle))])])])],1),s("b-container",{staticClass:"py-3 py-md-5"},[s("b-row",{staticClass:"text-center justify-content-md-center",attrs:{"no-gutters":""}},t._l(this.jsonData.sections.clients.content,(function(e){return s("b-col",{key:e.client_name,attrs:{cols:"4",md:"3",lg:"2"}},[s("b-img",{attrs:{src:t.publicPath+e.logo,fluid:"",alt:e.client_name}})],1)})),1)],1)],1)},ut=[],dt={data(){return{publicPath:"https://dev.promoe.com.sa/"}}},gt=dt,bt=Object(m["a"])(gt,pt,ut,!1,null,null,null),ht=bt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-5 text-center separatorArrow bg-white overflow-hidden",style:{backgroundImage:"url("+t.publicPath+"assets/imgs/getstarted/getstarted.png)"},attrs:{id:"getstarted"}},[s("header",[s("b-img",{staticClass:"pt-3 d-none d-lg-inine",attrs:{src:t.publicPath+"/assets/imgs/logo/greendivider.png",alt:"",height:"90"}}),s("h2",{staticClass:"insight2 text-dark mb-5 pb-2 pt-3"},[s("small",{staticClass:"text-muted mt-5"},[s("span",{domProps:{innerHTML:t._s(this.jsonData.sections.getstarted.title)}})]),s("br"),s("strong",[t._v(t._s(this.jsonData.sections.getstarted.subtitle))])])],1),s("b-container",[s("b-row",[s("b-col",{staticClass:"mb-5 mb-lg-0 text-lg-right",attrs:{cols:"12",lg:"6"}},[s("a",{staticClass:"btn btn-success py-3 px-5 text-dark border-0 font-weight-normal",attrs:{role:"button",href:"#contact"}},[t._v("REQUEST CONSULTATION")])]),s("b-col",{staticClass:"text-lg-left",attrs:{cols:"12",lg:"6"}},[s("a",{staticClass:"btn btn-danger py-3 px-5 text-white border-0 font-weight-normal",attrs:{role:"button",href:t.publicPath+this.jsonData.sections.getstarted.content.profile_link}},[s("i",{staticClass:"far fa-file-pdf mr-2"}),t._v(" DOWNLOAD PROFILE")])])],1)],1),t._m(0)],1)},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-6 mb-5 mb-lg-0 text-lg-right"}),s("div",{staticClass:"col-12 col-lg-6 text-lg-left"})])])}],yt={data(){return{publicPath:"https://dev.promoe.com.sa/"}}},_t=yt,Ct=Object(m["a"])(_t,ft,vt,!1,null,null,null),wt=Ct.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"bg-white pt-5 mt-5  overflow-hidden",attrs:{id:"instagram"}},[s("b-container",[s("b-row",{staticClass:"d-flex align-items-stretch"},[s("b-col",{staticClass:"pr-0 pr-lg-5 text-center text-lg-right text",style:{backgroundImage:"url("+t.publicPath+"assets/imgs/instagram/bg.png)"},attrs:{cols:"12",lg:"6","offset-lg":"1"}},[s("header",[s("h2",{staticClass:"mb-5 pt-3"},[s("span",{domProps:{innerHTML:t._s(this.jsonData.sections.instagram.title)}}),s("br"),s("small",{staticClass:"text-muted"},[s("strong",{domProps:{textContent:t._s(this.jsonData.sections.instagram.subtitle)}})])])]),s("a",{staticClass:"btn btn-primary border-0 my-4 px-5 py-3",attrs:{href:this.jsonData.general.social_accounts[1].link,role:"button"}},[t._v("Click Here")])]),s("b-col",{staticClass:"mobile",style:{backgroundImage:"url("+t.publicPath+"assets/imgs/instagram/mobile.png)"},attrs:{cols:"12",lg:"5"}})],1)],1)],1)},kt=[],jt={data(){return{publicPath:"https://dev.promoe.com.sa/"}}},Pt=jt,Tt=Object(m["a"])(Pt,xt,kt,!1,null,null,null),Ot=Tt.exports,Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-2 py-md-5 text-white text-center overflow-hidden",attrs:{id:"contact"}},[s("b-container",{staticClass:"mt-5"},[s("header",[s("h2",{staticClass:"mb-5 pt-3"},[t._v(" Ready For Your"),s("strong",[t._v(" FUTURE?")]),s("br"),s("small",{},[t._v("Contact "),s("strong",[t._v("Us")])])])]),s("form",{staticClass:"needs-validation",attrs:{action:"https://formsubmit.co/contact@promoe.com.sa",method:"POST",id:"contact-form",novalidate:""}},[s("div",{staticClass:"form-group "},[s("input",{staticClass:"form-control",attrs:{type:"name",id:"name",placeholder:"Name",name:"name"}})]),s("div",{staticClass:"form-group form-row"},[s("div",{staticClass:"col-12 col-md-6 mb-2"},[s("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",name:"email"}})]),s("div",{staticClass:"col-12 col-md-6 mb-2"},[s("input",{staticClass:"form-control",attrs:{type:"website",id:"website",placeholder:"Website",name:"website"}})])]),s("div",{staticClass:"form-group form-row"},[s("div",{staticClass:"col-12 col-md-6 mb-2"},[s("input",{staticClass:"form-control",attrs:{type:"tel",id:"phonenumber",placeholder:"+966-5.....",name:"phonenumber"}})]),s("div",{staticClass:"col-12 col-md-6 mb-2"},[s("input",{staticClass:"form-control",attrs:{type:"text",id:"business",placeholder:"Your Business Name",name:"business"}})])]),s("div",{staticClass:"form-group form-row"},[s("div",{staticClass:"col-12 mb-2"},[s("textarea",{staticClass:"form-control",attrs:{rows:"3",type:"text",id:"message",placeholder:"A breif Message",name:"message"}})])]),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary border-0 my-4 px-5 py-3 font-weight-normal",attrs:{type:"submit"}},[t._v("GET IN TOUCH")])])])])],1)},Dt=[],St={},It=St,At=Object(m["a"])(It,Et,Dt,!1,null,null,null),Nt=At.exports,Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"bg-white overflow-hidden",attrs:{id:"ouraddress"}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{staticClass:"py-5 text-center text-lg-right px-5",attrs:{cols:"12",lg:"5",xl:"3","offset-xl":"2"}},[s("header",{staticClass:"py-2 pt-2 py-lg-3 pt-lg-5"},[s("b-img",{staticClass:"d-none d-lg-inline",attrs:{src:t.publicPath+"assets/imgs/logo/greendivider.png",height:"90",alt:""}}),s("h2",{staticClass:"mb-5 pt-3"},[s("small",{staticClass:"text-muted"},[s("strong",[t._v(t._s(this.jsonData.sections.address.subtitle))])]),s("br"),s("span",{domProps:{innerHTML:t._s(this.jsonData.sections.address.title)}})]),s("address",[s("strong",[t._v(t._s(this.jsonData.sections.address.content.city))]),s("br"),s("span",[t._v(t._s(this.jsonData.sections.address.content.address))]),s("br"),s("a",{attrs:{href:"tel:"+this.jsonData.sections.address.content.phone.link}},[t._v(t._s(this.jsonData.sections.address.content.phone.number))])])],1)]),s("b-col",{staticClass:"px-0",attrs:{cols:"12",lg:"7"}},[s("GoogleMaps")],1)],1)],1)},Mt=[],Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("gmap-map",{attrs:{center:t.center,zoom:17,options:t.options}})},Ht=[],Ut={name:"GoogleMap",data(){return{center:{lat:this.jsonData.sections.address.content.location.lat,lng:this.jsonData.sections.address.content.location.lng},markers:[],places:[],options:{clickableIcons:!1,disableDefaultUI:!0,styles:[{featureType:"administrative",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:"50"},{visibility:"simplified"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{lightness:"30"}]},{featureType:"road.local",elementType:"all",stylers:[{lightness:"40"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{lightness:-25},{saturation:-100}]}]}}}},$t=Ut,Ft=Object(m["a"])($t,Rt,Ht,!1,null,null,null),zt=Ft.exports,Yt={data(){return{publicPath:"https://dev.promoe.com.sa/"}},components:{GoogleMaps:zt}},Wt=Yt,qt=Object(m["a"])(Wt,Lt,Mt,!1,null,null,null),Vt=qt.exports,Gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"pt-5 pb-3 text-white"},[s("b-container",{staticClass:"text-center"},[s("b-row",[s("b-col",{staticClass:"text-md-center mb-md-0 mb-2",attrs:{cols:"12",md:"12"}},[s("b-img",{attrs:{src:t.publicPath+"/assets/imgs/logo/logo-footer.svg",alt:"logo"}}),s("h6",{staticClass:"mt-4"},[t._v("Your Hike to "),s("span",[t._v("PEAK!")])])],1)],1),s("div",[s("ul",{staticClass:"inline-list social mt-4 px-0 pt-3 pb-0 mb-0 text-center"},t._l(this.jsonData.general.social_accounts,(function(t){return s("li",{key:t.title,staticClass:"list-inline-item mx-2"},[s("a",{staticClass:"text-white",attrs:{href:t.link}},[s("i",{class:t.fav_icon})])])})),0),s("p",{staticClass:"copyright pt-0 text-center"},[s("a",{staticClass:"text-light",attrs:{href:this.jsonData.general.url}},[t._v(t._s(this.jsonData.general.site_name))]),t._v(" All right reserved. copyright 2020 ")])])],1)],1)},Kt=[],Bt={data(){return{publicPath:"https://dev.promoe.com.sa/"}}},Jt=Bt,Qt=Object(m["a"])(Jt,Gt,Kt,!1,null,null,null),Xt=Qt.exports,Zt={name:"Home",components:{Hero:I,AboutUs:H,Video:W,Services:J,Insight:it,Work:mt,Clients:ht,GetStarted:wt,Instagram:Ot,Address:Vt,ContactUs:Nt,Footer:Xt}},te=Zt,ee=Object(m["a"])(te,y,_,!1,null,null,null),se=ee.exports,ae={name:"Home",components:{Main:se}},ie=ae,oe=Object(m["a"])(ie,f,v,!1,null,null,null),ne=oe.exports,re=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tos"},[s("section",{staticClass:"p-2 py-lg-3 bg-white overflow-hidden h-100",attrs:{id:"hero"}},[s("Navbar")],1),s("section",{staticClass:"py-2 py-lg-5 bg-white mb-5",attrs:{id:"content"}},[s("b-container",[s("h1",[t._v("Terms & Conditions")]),s("hr"),s("p",{staticClass:"text-muted"},[t._v("Some text that will be Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, at, corrupti quo sed aut nobis doloremque odit accusantium iusto et quos provident voluptatem reprehenderit beatae quisquam consequatur dolorem perspiciatis earum.")])])],1),s("Footer")],1)},le=[],ce={name:"Home",components:{Navbar:O,Footer:Xt}},me=ce,pe=Object(m["a"])(me,re,le,!1,null,null,null),ue=pe.exports,de=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"jobs"}},[s("section",{staticClass:"p-2 py-lg-3 bg-white overflow-hidden h-100",attrs:{id:"hero"}},[s("Navbar")],1),s("section",{staticClass:"py-2 py-lg-5 bg-white mb-5",attrs:{id:"content"}},[s("b-container",[s("header",{staticClass:"mb-2 mb-lg-5"},[s("h1",[t._v("Apply to a Job")]),s("hr"),s("b-alert",{attrs:{variant:"warning",show:""}},[t._v("Openings are closing soon")]),s("p",{staticClass:"text-muted"},[t._v(" We, at Promotion Efficiency, crave for talents in the region in a multitude of fields and those set the base for our "),s("strong",[t._v("Excellence")]),t._v(" and success."),s("br"),s("br"),t._v(" If you think you have a skill or talent that can be utilized in "),s("strong",[t._v("Marketing")]),t._v(" in anyway, shape or form, use the below form to add your information and we will get back to you ASAP.")])],1),s("h4",[t._v("Fill your information now")]),s("hr"),s("div",[t.show?s("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[s("b-form-group",{attrs:{id:"input-group-3",label:"Job:","label-size":"lg","label-for":"input-3"}},[s("b-form-select",{attrs:{id:"input-3",size:"lg",options:t.jobs,required:""},model:{value:t.form.job,callback:function(e){t.$set(t.form,"job",e)},expression:"form.job"}})],1),s("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-size":"lg","label-for":"input-2"}},[s("b-form-input",{attrs:{id:"input-2",size:"lg",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-size":"lg","label-for":"input-1",description:"We'll never share your email with anyone else."}},[s("b-form-input",{attrs:{id:"input-1",size:"lg",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-form-group",{attrs:{id:"CV",label:"Your CV and Works:","label-size":"lg","label-for":"uploader_input",description:"Add your CV, Portfolio or Samples of Works"}},[s("b-form-file",{attrs:{id:"uploader_input",state:Boolean(t.form.file1),placeholder:"Choose files or drop here...","drop-placeholder":"Drop file here...",multiple:"",size:"lg",accept:".jpg, .png, .gif, .doc, .docx, .pdf"},model:{value:t.form.file1,callback:function(e){t.$set(t.form,"file1",e)},expression:"form.file1"}}),s("div",{staticClass:"mt-3 text-muted"},[s("small",[t._v("Selected file: "+t._s(t.form.file1?1===t.form.file1.length?t.form.file1[0].name:t.form.file1.length+" files selected":""))])])],1),s("b-form-group",{attrs:{id:"input-group-4",label:"Availbility:","label-size":"lg"}},[s("b-form-radio-group",{attrs:{id:"radio-group-2",name:"radio-sub-component",size:"lg"},model:{value:t.form.selected,callback:function(e){t.$set(t.form,"selected",e)},expression:"form.selected"}},[s("b-form-radio",{attrs:{value:"available"}},[t._v("Available Immediately")]),s("b-form-radio",{attrs:{value:"not_available"}},[t._v("Require a Notice Period")])],1)],1),s("b-form-group",{attrs:{id:"input-group-4",label:"Your Message:","label-size":"lg"}},[s("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6",size:"lg"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),s("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e(),s("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[s("pre",{staticClass:"m-0"},[t._v(t._s(t.form))])])],1)])],1),s("Footer")],1)},ge=[],be={name:"Home",components:{Navbar:O,Footer:Xt},data(){return{form:{email:"",name:"",job:null,selected:null,file1:[],message:null},jobs:[{text:"Select One",value:null},"Marketer","Designer","IT Analyst","Assistant","Reciptionist","Accountant","HR Analyst"],show:!0}},methods:{onSubmit(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset(t){t.preventDefault(),this.form.email="",this.form.name="",this.form.job=null,this.form.selected=null,this.form.file1=[],this.form.message="",this.show=!1,this.$nextTick(()=>{this.show=!0})}}},he=be,fe=Object(m["a"])(he,de,ge,!1,null,null,null),ve=fe.exports;a["default"].use(h["a"]);const ye=[{path:"/",name:"home",component:ne},{path:"/about",name:"about",component:ue},{path:"/jobs",name:"jobs",component:ve}],_e=new h["a"]({base:"https://dev.promoe.com.sa/",routes:ye});var Ce=_e,we=s("755e"),xe=s("b35b"),ke=s("bc3a"),je=s.n(ke);a["default"].use(we,{load:{key:"AIzaSyAsu3jD6SZw8WiJq6xOYzIkRTwKTu1S7Y0",libraries:"places"}}),a["default"].component("vue-headful",o.a),a["default"].use(b.a);const Pe="https://dev.promoe.com.sa/";a["default"].prototype.jsonData=xe,a["default"].config.productionTip=!1,new a["default"]({router:Ce,render:t=>t(u),created(){console.log(this.jsonData)},beforeMount(){this.fetchData(),console.log(this.jsonData)},methods:{async fetchData(){const{data:t}=await je.a.get(Pe+"assets/db.json");this.jsonData=t}}}).$mount("#app")},"7fcc":function(t,e){function s(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id="7fcc"},a0d8:function(t,e,s){},b35b:function(t){t.exports=JSON.parse('{"general":{"site_name":"Promotion Efficiency Est.","slogan":"Your <strong>HIKE</strong> to <strong>PEAK!</strong>","description":"business, promo, promotion, efficiency, center, khobar","email":"contact@promoe.com.sa","url":"https://www.promoe.com.sa/","social_accounts":[{"title":"twitter","link":"https://twitter.com/promoefficiency/","fav_icon":"fab fa-twitter"},{"title":"instagram","link":"https://www.instagram.com/promoefficiency","fav_icon":"fab fa-instagram"},{"title":"linkedin","link":"https://www.linkedin.com/company/promotion-efficiency","fav_icon":"fab fa-linkedin-in"}]},"sections":{"aboutus":{"title":"Choose <strong>US</strong>","subtitle":"Why People","content":[{"number":"01","icon":"assets/imgs/icons/review.svg","title":"TRUST","text":"Creativity is the driving force of our company. Creativity in technology and design has allowed us to produce incredible digital experiences that have stepped out of conventional standards and paid off in very considerable ways - every time."},{"number":"02","icon":"assets/imgs/icons/review.svg","title":"INTEGRITY","text":"Distribution is a family owned transportation and distribution company located in Houston, Texas."},{"number":"03","icon":"assets/imgs/icons/search.svg","title":"EFFICIENCY","text":"LSI Distribution is a family owned transportation and distribution company located in Houston, Texas. We provide our customers with supply chain solutions."},{"number":"04","icon":"assets/imgs/icons/watch.svg","title":"CREATIVITY","text":"Creativity is the driving force of our company. Creativity in technology and design has allowed us to produce incredible"}]},"video":{"title":"It could be <br /><strong>YOURS<strong>","subtitle":"PROMO VIDEO","content":{"url":"assets/videos/Photography.mp4","poster":"assets/imgs/youtube/youtube-video1600.png"}},"services":{"title":"SERVICES","subtitle":"THAT YOU\'LL ENJOY","content":[{"title":"Photography","background":"/assets/imgs/services/pexels-marek-339379-v.jpg","breif":"Discover beauty through our lenses"},{"title":"Content Creation","background":"assets/imgs/services/pexels-cottonbro-5095887.jpg","breif":"Scripts and write-ups to describe your goal"},{"title":"IT","background":"assets/imgs/services/pexels-ovan-57690.jpg","breif":"A bundle of creative IT consultation services"},{"title":"Branding","background":"assets/imgs/services/pexels-ovan-57690.jpg","breif":"Let your brand, speak your self"},{"title":"Content Creation 2","background":"assets/imgs/services/pexels-cottonbro-5095887.jpg","breif":"Scripts and write-ups to describe your goal"},{"title":"IT 2","background":"assets/imgs/services/pexels-ovan-57690.jpg","breif":"A bundle of creative IT consultation services, what happens if we write more and more text over here, what if we put more and more to the limit that our text becomes 8 lines?"}]},"insight":{"title":"in<strong>sight</strong>","subtitle":"FACTS ABOUT US","content":[{"class":"clients","title":"TOTAL CLIENTS","number":57,"icon":"assets/imgs/insight/clients.svg"},{"class":"employees","title":"EMPLOYEES","number":15,"icon":"assets/imgs/insight/employee.svg"},{"class":"campaigns","title":"CAMPAIGNS","number":100,"icon":"assets/imgs/insight/campaigns.svg"},{"class":"hours","title":"HOURS OF WORK","number":1545,"icon":"assets/imgs/insight/hour.svg"}]},"work":{"title":"Our <strong>WORK</strong>","subtitle":"PORTFOLIO","content":[{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/1.png","link":""},{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/2.png","link":""},{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/3.png","link":""},{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/1.png","link":""},{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/2.png","link":""},{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/3.png","link":""},{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/1.png","link":""},{"project_name":"Project Name","client_name":"Client Name","breif":"","picture":"assets/imgs/work/2.png","link":""}]},"clients":{"title":"Clients","subtitle":"WE ARE PROUD TO SERVE","content":[{"client_name":"65 Degrees","logo":"assets/imgs/clientlogos/65.svg"},{"client_name":"AQUAFINA","logo":"assets/imgs/clientlogos/aquafina.svg"},{"client_name":"Carlton alMoaibed Hotel","logo":"assets/imgs/clientlogos/carlton.svg"},{"client_name":"Civil Defense Directorate","logo":"assets/imgs/clientlogos/civil.svg"},{"client_name":"Danderah","logo":"assets/imgs/clientlogos/danderah.svg"},{"client_name":"KFUPM","logo":"assets/imgs/clientlogos/kfupm.svg"},{"client_name":"NUGTAH","logo":"assets/imgs/clientlogos/nugtah.svg"},{"client_name":"PEPSI","logo":"assets/imgs/clientlogos/pepsi.svg"},{"client_name":"Bake n Take","logo":"assets/imgs/clientlogos/bakentake.svg"},{"client_name":"Last Summer","logo":"assets/imgs/clientlogos/lastsummer.svg"},{"client_name":"Munch Bakery","logo":"assets/imgs/clientlogos/munch.svg"},{"client_name":"Dice","logo":"assets/imgs/clientlogos/dice.svg"},{"client_name":"Esad","logo":"assets/imgs/clientlogos/esad.svg"},{"client_name":"IntelCodes","logo":"assets/imgs/clientlogos/intelcodes.svg"},{"client_name":"Lipton","logo":"assets/imgs/clientlogos/lipton.svg"}]},"getstarted":{"title":"Ready to get <strong>started?</strong>","subtitle":"WE ARE READY","content":{"profile_link":"assets/files/Promotion Efficiency Profile.pdf"}},"instagram":{"title":"Visit Our <strong> Instagram </strong>","subtitle":"To see more our work!","content":{"bg_image":"assets/imgs/instagram/bg.png"}},"blog":{"title":"","subtitle":"","content":""},"news":{"title":"","subtitle":"","content":""},"address":{"title":"We are very close <strong>to you</strong>","subtitle":"OUR ADDRESS","content":{"city":"KHOBAR","address":"Office 333, Floor 3, Kornich Park, Prince Mutib Road, North Khobar, 31311","location":{"lat":26.305914,"lng":50.223589},"phone":{"number":"+966-555-555-555","link":"+966555555555"}}}}}')},e30e:function(t,e){function s(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id="e30e"}});
//# sourceMappingURL=app.7855afa3.js.map