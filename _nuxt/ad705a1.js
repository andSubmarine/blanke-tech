(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{275:function(e,t,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(48).default)("19e16aec",content,!0,{sourceMap:!1})},285:function(e,t,n){"use strict";n(275)},286:function(e,t,n){var o=n(47)(!1);o.push([e.i,"#top{background-color:#000;background-image:url(/blob/background-2.jpg),url(/blob/background-2-low-res.jpg);background-position:50%;background-repeat:no-repeat;background-size:cover}#learn-more{margin-top:75vh;display:inline-block}.b-learn-more{min-width:80vw;margin:.5rem!important;padding:.5rem!important;font-size:4vw}.b-green{background-color:#26732b}.b-green:hover{background-color:#349e3b}.b-black{background-color:#0d0d0d}.b-black:hover{background-color:#353535}@media (min-width:576px){#learn-more{margin-top:80vh;display:inline-flex}.b-learn-more{min-width:30vw;font-size:3.5vw}}@media (min-width:992px){.b-learn-more{font-size:3vw}}@media (min-width:1200px){.b-learn-more{font-size:2vw}}",""]),e.exports=o},292:function(e,t,n){"use strict";n.r(t);n(81);var o=n(12),r=n(19),c=n(33),l=n(46),d=n(24),f=n(21);n(3);function v(e){var element=document.getElementById(e);if(element){var t=element.getBoundingClientRect();return{x1:t.left,y1:t.top}}return{x1:0,y1:0}}var h=n(82);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){Object(c.a)(n,e);var t=m(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"firstCoords",get:function(){return v(this.firstId)}},{key:"secondCoords",get:function(){return v(this.secondId)}},{key:"handleClick",value:function(e){!function(e){window.scrollTo({top:e.y1,left:e.x1,behavior:"smooth"})}(e)}}]),n}(h.Vue);k([Object(h.Prop)()],y.prototype,"firstId",void 0),k([Object(h.Prop)()],y.prototype,"secondId",void 0);var w=y=k([h.Component],y),j=(n(285),n(59)),component=Object(j.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"landing-pages",attrs:{id:"top","align-v":"stretch"}},[n("b-col",[n("b-button-group",{attrs:{id:"learn-more"}},[n("b-button",{staticClass:"b-learn-more b-green",on:{click:function(t){return e.handleClick(e.firstCoords)}}},[e._v("\n        Who is this guy?\n      ")]),e._v(" "),n("b-button",{staticClass:"b-learn-more b-black",on:{click:function(t){return e.handleClick(e.secondCoords)}}},[e._v("\n        What has he done?\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);