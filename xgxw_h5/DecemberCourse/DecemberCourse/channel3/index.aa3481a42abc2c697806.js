webpackJsonp([9,4,5,6,7,8,10,11],{GKmE:function(e,t,n){"use strict";var o=n("rVsN"),a=n.n(o);t.a={loadScript:function(e){return new a.a(function(t,n){var o=document.createElement("script"),a=document.getElementsByTagName("body")[0];o.type="text/javascript",o.src=e,o.readyState?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(o.onreadystatechange=null,t())}:(o.onload=function(){t()},o.onerror=function(){a.removeChild(o),n()}),a.appendChild(o)})},setRem:function(){return e=document,t=window,n=e.documentElement,o="onorientationchange"in window?"onorientationchange":"resize",a=function(){var e=n.clientWidth;if(e){var t=e>=768?768:e;n.style.fontSize=t/750*100+"px"}},void(e.addEventListener&&(t.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1)));var e,t,n,o,a},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return n?decodeURIComponent(n[2]):null}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("briU"),n("VhsT"),n("rNk7");var o=n("r6k1"),a=n.n(o),r=n("elq8"),i=(n("qNfL"),n("+RKF")),c=n("3cXf"),s=n.n(c),u=n("lC5x"),d=n.n(u),l=n("J0Oq"),p=n.n(l),h=n("rpD8"),m=n.n(h),f=n("LqYc"),g=n.n(f),v=n("rO4b"),w=n.n(v),S=n("olkN"),b={data:function(){return{poster:m.a,downloadUrl:"",createQRCodeFlag:!1,active:!1,avatar:""}},computed:{userInfo:function(){return S.b.userInfo},posterShow:function(){return S.b.posterShow},scrollTop:function(){return S.b.scrollTop}},watch:{userInfo:function(e){e.nickname&&(this.convertUrlToBase64(e.avatar,"avatar"),this.createQRCode())},posterShow:function(e){var t=this;if(e&&(this.setScrollTop(document.documentElement.scrollTop||document.body.scrollTop),this.active=!0,setTimeout(function(){document.documentElement.scrollTop=document.body.scrollTop=0},150),0==this.downloadUrl.length)){this.$toast.loading({duration:0,forbidClick:!0,message:"海报生成中..."});setTimeout(function(){t.createPoster()},500)}}},methods:{setPosterShow:S.a.setPosterShow,setScrollTop:S.a.setScrollTop,closePage:function(){var e=this;this.active=!1,document.documentElement.scrollTop=document.body.scrollTop=this.scrollTop,setTimeout(function(){e.setPosterShow(!1)},300)},convertUrlToBase64:function(e,t){var n=this,o=new Image;o.setAttribute("crossOrigin","Anonymous"),o.src=e+"?time="+(new Date).valueOf(),o.onload=function(){var e=document.createElement("canvas");e.width=o.width,e.height=o.height,e.getContext("2d").drawImage(o,0,0,o.width,o.height);var a=e.toDataURL("image/png");n[t]=a}},createQRCode:function(){var e=this;if(!this.createQRCodeFlag){var t=Number(window.getComputedStyle(document.documentElement).fontSize.split("px")[0]),n=window.location.origin+window.location.pathname+"?activityShareUserId="+this.userInfo.userid;setTimeout(function(){new g.a(e.$refs.qrCodeUrl,{text:n,width:2*t,height:2*t,correctLevel:g.a.CorrectLevel.L});e.createQRCodeFlag=!0},0)}},createPoster:function(){var e=this,t=this.$refs.posterBox,n=t.offsetWidth,o=t.offsetHeight,a=window.html2canvas||w.a;setTimeout(function(){a(t,{dpi:2*window.devicePixelRatio,scale:2,allowTaint:!1,width:n,heigth:o,useCORS:!0,logging:!1,scrollY:0,scrollX:0}).then(function(t){var n=t.getContext("2d");n.mozImageSmoothingEnabled=!1,n.webkitImageSmoothingEnabled=!1,n.msImageSmoothingEnabled=!1,n.imageSmoothingEnabled=!1,e.downloadUrl=t.toDataURL("image/png"),setTimeout(function(){var t=document.querySelector(".poster-page").clientHeight,n=document.querySelector(".poster-page .section1").clientHeight;if(t>n){var o=(t-n)/4;document.querySelector(".poster-page .section1").style.top=o+"px"}else document.querySelector(".poster-page .section1").style.top="-4px";e.$toast.clear()},500)}).catch(function(){e.$toast.clear(),setTimeout(function(){e.$toast("海报生成失败，请重试"),e.active=!1,e.setPosterShow(!1)},1)})},300)}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"poster-page",class:{active:e.active}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.downloadUrl.length>0,expression:"downloadUrl.length>0"}],staticClass:"section1"},[n("van-icon",{staticClass:"close-btn",attrs:{name:"cross"},on:{click:e.closePage}}),e._v(" "),n("img",{attrs:{src:e.downloadUrl}})],1),e._v(" "),n("div",{ref:"posterBox",staticClass:"section2"},[n("img",{staticClass:"bgd",attrs:{src:e.poster}}),e._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"left-box"},[n("img",{staticClass:"avatar",attrs:{src:e.avatar}}),e._v(" "),n("div",{staticClass:"info"},[n("p",{staticClass:"user-name"},[e._v(e._s(e.userInfo.nickname))]),e._v(" "),n("p",[e._v("正在参加《菜根谭》上新福利活动")]),e._v(" "),n("p",[e._v("一起来扫码参与吧~")])])]),e._v(" "),n("div",{ref:"qrCodeUrl",staticClass:"code"})])])])},staticRenderFns:[]};var T=n("C7Lr")(b,y,!1,function(e){n("ZRMA")},"data-v-0b7aad5c",null).exports,x=n("GKmE"),C=n("rBKV"),I=n.n(C),k={data:function(){return{loadScriptFlag:!1}},computed:{posterShow:function(){return S.b.posterShow}},components:{Poster:T},created:function(){if("dev"==this.$server.env){var e=document.createElement("meta");e.content="no-referrer",e.name="referrer",document.getElementsByTagName("head")[0].appendChild(e)}document.body.addEventListener("touchstart",function(){},!1),document.addEventListener("gesturestart",function(e){e.preventDefault()}),this.loadScript(),this.loadBaiduScript();var t=I.a.page.find(function(e){return window.location.href.includes(e.name)}).channelId;this.pointPage(t)},methods:{pointPage:function(e){var t=this;return p()(d.a.mark(function n(){var o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o={channelType:e},n.next=3,t.$http.post(t.$server.pointPage,o);case 3:n.sent;case 4:case"end":return n.stop()}},n,t)}))()},pointButton:function(e){var t=this;return p()(d.a.mark(function n(){var o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o={type:e},n.next=3,t.$http.post(t.$server.pointButton,o);case 3:n.sent;case 4:case"end":return n.stop()}},n,t)}))()},loadScript:function(){var e=this;if(this.loadScriptFlag)return!1;x.a.loadScript("//res.wx.qq.com/open/js/jweixin-1.4.0.js").then(function(){e.loadScriptFlag=!0,e.share()}).catch(function(){e.loadScriptFlag=!1,setTimeout(function(){e.loadScript()},1e3)})},loadBaiduScript:function(){var e=I.a.page.find(function(e){return window.location.href.includes(e.name)}).src,t=document.createElement("script"),n=document.getElementsByTagName("body")[0];t.type="text/javascript",t.text='var _hmt = _hmt || [];\n          (function() {\n            var hm = document.createElement("script");\n            hm.src = \''+e+'\';\n            var s = document.getElementsByTagName("script")[0]; \n            s.parentNode.insertBefore(hm, s);\n          })();',n.appendChild(t)},share:function(){var e=this,t={describe:"导航栏显示分享按钮",method:"share",params:{title:"《菜根谭》上新福利周",desc:"每日咬得菜根，则百事可做。教你50招处世哲学",link:window.location.href,imgUrl:"https://xgxw-pic.oss-cn-beijing.aliyuncs.com/hd/20200222/Week%20of%20welfare.icon.png"}};if(window.pointShareButton||(window.pointShareButton=function(){e.pointButton(1)}),!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))try{window.webkit.messageHandlers.iOSAppMethodName.postMessage(t)}catch(e){}else window.android&&window.android.notify&&window.android.notify(s()(t));var n=encodeURIComponent(window.location.href.split("#")[0]);this.$http.get("/wx/getConfig?url="+n).then(function(t){if(200==t.data.status){var n=t.data.content,o="《菜根谭》上新福利周",a="每日咬得菜根，则百事可做。教你50招处世哲学",r=window.location.href,i="https://xgxw-pic.oss-cn-beijing.aliyuncs.com/hd/20200222/Week%20of%20welfare.icon.png";wx.config({debug:!1,appId:n.appId,timestamp:n.timeStamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["checkJsApi","updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ"]}),wx.ready(function(){wx.onMenuShareAppMessage({title:o,desc:a,link:r,imgUrl:i,type:"",dataUrl:"",success:function(){e.pointButton(1)}}),wx.onMenuShareTimeline({title:o,link:r,imgUrl:i,success:function(){e.pointButton(1)}}),wx.onMenuShareQQ({title:o,desc:a,link:r,imgUrl:i,success:function(){e.pointButton(1)},cancel:function(){}})})}})}}},B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("Poster"),this._v(" "),this.posterShow?t("div",{staticClass:"down-tips"},[this._v("长按保存，分享给好友")]):this._e()],1)},staticRenderFns:[]};var E=n("C7Lr")(k,B,!1,function(e){n("rJnp")},null,null).exports,U=n("rVsN"),_=n.n(U),j=n("I29D"),R=n.n(j),M=(n("TCmZ"),n("jupl")),L=function(){try{localStorage.setItem("a","a"),localStorage.removeItem("a"),this.isStorage=!0}catch(e){this.isStorage=!1}};L.prototype={set:function(e,t){this.isStorage?localStorage.setItem(e,t):document.cookie=e+"="+t+"; path=/"},get:function(e){if(this.isStorage)return localStorage.getItem(e);for(var t=e+"=",n=document.cookie.split(";"),o=0,a=n.length;o<a;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null},del:function(e){this.isStorage?localStorage.removeItem(e):this.set(e,"")},clear:function(){if(this.isStorage)localStorage.clear();else for(var e=document.cookie.split(";"),t=0,n=e.length;t<n;t++){var o=e[t],a=o.indexOf("="),r=a>-1?o.substr(0,a):o;document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}};var N=new L,$=function(e){N.del(e)};R.a.defaults.timeout=6e4;var P=void 0,q=void 0;P="https://xgxapi.xueguoxue.com",q="https://loginapi.xueguoxue.com",R.a.defaults.baseURL=P,R.a.defaults.headers={"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json;charset=utf-8"},R.a.interceptors.request.use(function(e){return e.url.includes("/login/loginBySMS")&&(e.baseURL=q),e.token&&(e.headers.token=e.token,e.headers.userId=e.userId),e.url+=e.url.indexOf("?")>=0?"&_t="+(new Date).getTime():"?_t="+(new Date).getTime(),"post"===e.method&&e.headers["Content-Type"].includes("application/json")&&(e.data=s()(e.data)),e},function(e){return _.a.reject(e)}),R.a.interceptors.response.use(function(e){return 555==e.data.status&&$("uInfo"),e},function(e){return _.a.reject(e)});var A=R.a,D={couponId:"181",env:"prod",appId:"wx44e94e1ef84f486e",sendSms:"/common/getCodeForLoginBySMS",login:"/login/loginBySMS",receiveCoupon:"/common/receiveCoupon",verifyIsComplete:"/caiGenTan/verifyIsComplete",receiveBook:"/caiGenTan/receiveBook",receiveInfo:"/caiGenTan/receiveInfo",getUserInfoById:"/user/getUserInfoById",pointPage:"/caiGenTan/pointPage",pointButton:"/caiGenTan/pointButton"},O=n("bAj6");i.a.use(O.a);var F=new O.a({mode:"hash",routes:[{path:"/",name:"index",component:function(){return n.e(0).then(n.bind(null,"2NXm"))}},{path:"/receive",name:"receive",component:function(){return n.e(1).then(n.bind(null,"5uBo"))}},{path:"/rule",name:"rule",component:function(){return n.e(2).then(n.bind(null,"NhT7"))}}]});a.a.polyfill(),x.a.setRem(),i.a.config.productionTip=!1,i.a.use(r.a),i.a.prototype.$http=A,i.a.prototype.$server=D,i.a.prototype.$setCookie=function(e,t){N.set(e,M.Base64.encode(t))},i.a.prototype.$getCookie=function(e){try{var t=N.get(e);return t?M.Base64.decode(t):null}catch(e){return console.log(e,(new Date).getTime(),"获取cookie失败"),null}},i.a.prototype.$delCookie=$,new i.a({el:"#app",router:F,render:function(e){return e(E)}})},ZRMA:function(e,t){},olkN:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var o=n("+RKF").a.observable({userInfo:{},posterShow:!1,scrollTop:0,inApp:!1}),a={setUserInfo:function(e){o.userInfo=e},setPosterShow:function(e){o.posterShow=e},setScrollTop:function(e){o.scrollTop=e},setInApp:function(e){o.inApp=e}}},qNfL:function(e,t){},rBKV:function(e,t,n){"use strict";(function(t){e.exports={NODE_ENV:'"production"',argv:"beta"==t.argv[2]?'"beta"':'"prod"',page:[{name:"channel1",des:"app端",channelId:1,src:"https://hm.baidu.com/hm.js?c9718290cd2aa22eca96ca03dd5a438c"},{name:"channel2",des:"M站",channelId:2,src:"https://hm.baidu.com/hm.js?ccefbefd049be1385e39e35f2733bcc4"},{name:"channel3",des:"微信公众号",channelId:3,src:"https://hm.baidu.com/hm.js?5df009c12393aaa309854e4989c326bb"},{name:"channel4",des:"微信群、朋友圈",channelId:4,src:"https://hm.baidu.com/hm.js?aba0dac094b8578deb7e8dc0c4bc73d1"},{name:"channel5",des:"杜老师",channelId:5,src:"https://hm.baidu.com/hm.js?200563f10d0e5805f51afa4e4162c483"},{name:"channel6",des:"端外1",channelId:6,src:"https://hm.baidu.com/hm.js?ff364f11c0ba4c08c1d6e7e8c8d64628"},{name:"channel7",des:"端外2",channelId:7,src:"https://hm.baidu.com/hm.js?728dad70c633198e385ccd8f45b31f63"},{name:"channel8",des:"端外3",channelId:8,src:"https://hm.baidu.com/hm.js?4ccceff6e84639c0134b931fa9020176"}]}}).call(t,n("V0EG"))},rJnp:function(e,t){},rpD8:function(e,t,n){e.exports=n.p+"image/poster.5aac59c.jpg"}},["NHnr"]);