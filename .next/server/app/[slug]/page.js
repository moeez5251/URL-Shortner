(()=>{var e={};e.id=182,e.ids=[182],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4690:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var i=r(260),n=r(8203),o=r(5155),a=r.n(o),s=r(7292),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d=["",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8310)),"D:\\Complete Web Development Bootcamp\\URL Shortner\\url-shortner\\app\\[slug]\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9019)),"D:\\Complete Web Development Bootcamp\\URL Shortner\\url-shortner\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["D:\\Complete Web Development Bootcamp\\URL Shortner\\url-shortner\\app\\[slug]\\page.js"],u={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/[slug]/page",pathname:"/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7963:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},1107:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},7413:()=>{},9269:()=>{},6487:()=>{},8335:()=>{},8310:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var i,n,o,a,s,l,d,c,u,p,f,h=r(7359);function m(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((i=i.apply(e,t||[])).next())})}class g{constructor(e,t,r){this.method=e,this.attribute=t,void 0!==r&&(Array.isArray(r)?this.values=r:this.values=[r])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}g.equal=(e,t)=>new g("equal",e,t).toString(),g.notEqual=(e,t)=>new g("notEqual",e,t).toString(),g.lessThan=(e,t)=>new g("lessThan",e,t).toString(),g.lessThanEqual=(e,t)=>new g("lessThanEqual",e,t).toString(),g.greaterThan=(e,t)=>new g("greaterThan",e,t).toString(),g.greaterThanEqual=(e,t)=>new g("greaterThanEqual",e,t).toString(),g.isNull=e=>new g("isNull",e).toString(),g.isNotNull=e=>new g("isNotNull",e).toString(),g.between=(e,t,r)=>new g("between",e,[t,r]).toString(),g.startsWith=(e,t)=>new g("startsWith",e,t).toString(),g.endsWith=(e,t)=>new g("endsWith",e,t).toString(),g.select=e=>new g("select",void 0,e).toString(),g.search=(e,t)=>new g("search",e,t).toString(),g.orderDesc=e=>new g("orderDesc",e).toString(),g.orderAsc=e=>new g("orderAsc",e).toString(),g.cursorAfter=e=>new g("cursorAfter",void 0,e).toString(),g.cursorBefore=e=>new g("cursorBefore",void 0,e).toString(),g.limit=e=>new g("limit",void 0,e).toString(),g.offset=e=>new g("offset",void 0,e).toString(),g.contains=(e,t)=>new g("contains",e,t).toString(),g.or=e=>new g("or",void 0,e.map(e=>JSON.parse(e))).toString(),g.and=e=>new g("and",void 0,e.map(e=>JSON.parse(e))).toString();class b extends Error{constructor(e,t=0,r="",i=""){super(e),this.name="AppwriteException",this.message=e,this.code=t,this.type=r,this.response=i}}class y{constructor(){this.config={endpoint:"https://cloud.appwrite.io/v1",endpointRealtime:"",project:"",jwt:"",locale:"",session:""},this.headers={"x-sdk-name":"Web","x-sdk-platform":"client","x-sdk-language":"web","x-sdk-version":"16.1.0","X-Appwrite-Response-Format":"1.6.0"},this.realtime={socket:void 0,timeout:void 0,heartbeat:void 0,url:"",channels:new Set,subscriptions:new Map,subscriptionsCounter:0,reconnect:!0,reconnectAttempts:0,lastMessage:void 0,connect:()=>{clearTimeout(this.realtime.timeout),this.realtime.timeout=null==window?void 0:window.setTimeout(()=>{this.realtime.createSocket()},50)},getTimeout:()=>{switch(!0){case this.realtime.reconnectAttempts<5:return 1e3;case this.realtime.reconnectAttempts<15:return 5e3;case this.realtime.reconnectAttempts<100:return 1e4;default:return 6e4}},createHeartbeat:()=>{this.realtime.heartbeat&&clearTimeout(this.realtime.heartbeat),this.realtime.heartbeat=null==window?void 0:window.setInterval(()=>{var e;null===(e=this.realtime.socket)||void 0===e||e.send(JSON.stringify({type:"ping"}))},2e4)},createSocket:()=>{var e,t,r;if(this.realtime.channels.size<1){this.realtime.reconnect=!1,null===(e=this.realtime.socket)||void 0===e||e.close();return}let i=new URLSearchParams;i.set("project",this.config.project),this.realtime.channels.forEach(e=>{i.append("channels[]",e)});let n=this.config.endpointRealtime+"/realtime?"+i.toString();(n!==this.realtime.url||!this.realtime.socket||(null===(t=this.realtime.socket)||void 0===t?void 0:t.readyState)>WebSocket.OPEN)&&(this.realtime.socket&&(null===(r=this.realtime.socket)||void 0===r?void 0:r.readyState)<WebSocket.CLOSING&&(this.realtime.reconnect=!1,this.realtime.socket.close()),this.realtime.url=n,this.realtime.socket=new WebSocket(n),this.realtime.socket.addEventListener("message",this.realtime.onMessage),this.realtime.socket.addEventListener("open",e=>{this.realtime.reconnectAttempts=0,this.realtime.createHeartbeat()}),this.realtime.socket.addEventListener("close",e=>{var t,r,i;if(!this.realtime.reconnect||(null===(r=null===(t=this.realtime)||void 0===t?void 0:t.lastMessage)||void 0===r?void 0:r.type)==="error"&&1008===(null===(i=this.realtime)||void 0===i?void 0:i.lastMessage.data).code){this.realtime.reconnect=!0;return}let n=this.realtime.getTimeout();console.error(`Realtime got disconnected. Reconnect will be attempted in ${n/1e3} seconds.`,e.reason),setTimeout(()=>{this.realtime.reconnectAttempts++,this.realtime.createSocket()},n)}))},onMessage:e=>{var t,r;try{let i=JSON.parse(e.data);switch(this.realtime.lastMessage=i,i.type){case"connected":let n=JSON.parse(null!==(t=window.localStorage.getItem("cookieFallback"))&&void 0!==t?t:"{}"),o=null==n?void 0:n[`a_session_${this.config.project}`],a=i.data;o&&!a.user&&(null===(r=this.realtime.socket)||void 0===r||r.send(JSON.stringify({type:"authentication",data:{session:o}})));break;case"event":let s=i.data;if(null==s?void 0:s.channels){if(!s.channels.some(e=>this.realtime.channels.has(e)))return;this.realtime.subscriptions.forEach(e=>{s.channels.some(t=>e.channels.includes(t))&&setTimeout(()=>e.callback(s))})}break;case"error":throw i.data}}catch(e){console.error(e)}},cleanUp:e=>{this.realtime.channels.forEach(t=>{e.includes(t)&&!Array.from(this.realtime.subscriptions).some(([e,r])=>r.channels.includes(t))&&this.realtime.channels.delete(t)})}}}setEndpoint(e){return this.config.endpoint=e,this.config.endpointRealtime=this.config.endpointRealtime||this.config.endpoint.replace("https://","wss://").replace("http://","ws://"),this}setEndpointRealtime(e){return this.config.endpointRealtime=e,this}setProject(e){return this.headers["X-Appwrite-Project"]=e,this.config.project=e,this}setJWT(e){return this.headers["X-Appwrite-JWT"]=e,this.config.jwt=e,this}setLocale(e){return this.headers["X-Appwrite-Locale"]=e,this.config.locale=e,this}setSession(e){return this.headers["X-Appwrite-Session"]=e,this.config.session=e,this}subscribe(e,t){let r="string"==typeof e?[e]:e;r.forEach(e=>this.realtime.channels.add(e));let i=this.realtime.subscriptionsCounter++;return this.realtime.subscriptions.set(i,{channels:r,callback:t}),this.realtime.connect(),()=>{this.realtime.subscriptions.delete(i),this.realtime.cleanUp(r),this.realtime.connect()}}prepareRequest(e,t,r={},i={}){if(e=e.toUpperCase(),r=Object.assign({},this.headers,r),"undefined"!=typeof window&&window.localStorage){let e=window.localStorage.getItem("cookieFallback");e&&(r["X-Fallback-Cookies"]=e)}let n={method:e,headers:r,credentials:"include"};if("GET"===e)for(let[e,r]of Object.entries(y.flatten(i)))t.searchParams.append(e,r);else switch(r["content-type"]){case"application/json":n.body=JSON.stringify(i);break;case"multipart/form-data":let o=new FormData;for(let[e,t]of Object.entries(i))if(t instanceof File)o.append(e,t,t.name);else if(Array.isArray(t))for(let r of t)o.append(`${e}[]`,r);else o.append(e,t);n.body=o,delete r["content-type"]}return{uri:t.toString(),options:n}}chunkedUpload(e,t,r={},i={},n){return m(this,void 0,void 0,function*(){let o=Object.values(i).find(e=>e instanceof File);if(o.size<=y.CHUNK_SIZE)return yield this.call(e,t,r,i);let a=0,s=null;for(;a<o.size;){let l=a+y.CHUNK_SIZE;l>=o.size&&(l=o.size),r["content-range"]=`bytes ${a}-${l-1}/${o.size}`;let d=o.slice(a,l),c=Object.assign(Object.assign({},i),{file:new File([d],o.name)});s=yield this.call(e,t,r,c),n&&"function"==typeof n&&n({$id:s.$id,progress:Math.round(l/o.size*100),sizeUploaded:l,chunksTotal:Math.ceil(o.size/y.CHUNK_SIZE),chunksUploaded:Math.ceil(l/y.CHUNK_SIZE)}),s&&s.$id&&(r["x-appwrite-id"]=s.$id),a=l}return s})}ping(){return m(this,void 0,void 0,function*(){return this.call("GET",new URL(this.config.endpoint+"/ping"))})}call(e,t,r={},i={},n="json"){var o;return m(this,void 0,void 0,function*(){let{uri:a,options:s}=this.prepareRequest(e,t,r,i),l=null,d=yield fetch(a,s),c=d.headers.get("x-appwrite-warning");if(c&&c.split(";").forEach(e=>console.warn("Warning: "+e)),l=(null===(o=d.headers.get("content-type"))||void 0===o?void 0:o.includes("application/json"))?yield d.json():"arrayBuffer"===n?yield d.arrayBuffer():{message:yield d.text()},400<=d.status)throw new b(null==l?void 0:l.message,d.status,null==l?void 0:l.type,l);let u=d.headers.get("X-Fallback-Cookies");return"undefined"!=typeof window&&window.localStorage&&u&&(window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."),window.localStorage.setItem("cookieFallback",u)),l})}static flatten(e,t=""){let r={};for(let[i,n]of Object.entries(e)){let e=t?t+"["+i+"]":i;Array.isArray(n)?r=Object.assign(Object.assign({},r),y.flatten(n,e)):r[e]=n}return r}}y.CHUNK_SIZE=5242880;class v{constructor(e){this.client=e}static flatten(e,t=""){let r={};for(let[i,n]of Object.entries(e)){let e=t?t+"["+i+"]":i;Array.isArray(n)?r=Object.assign(Object.assign({},r),v.flatten(n,e)):r[e]=n}return r}}v.CHUNK_SIZE=5242880;class w{constructor(e){this.client=e}listDocuments(e,t,r){return m(this,void 0,void 0,function*(){if(void 0===e)throw new b('Missing required parameter: "databaseId"');if(void 0===t)throw new b('Missing required parameter: "collectionId"');let i="/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}",e).replace("{collectionId}",t),n={};void 0!==r&&(n.queries=r);let o=new URL(this.client.config.endpoint+i);return yield this.client.call("get",o,{"content-type":"application/json"},n)})}createDocument(e,t,r,i,n){return m(this,void 0,void 0,function*(){if(void 0===e)throw new b('Missing required parameter: "databaseId"');if(void 0===t)throw new b('Missing required parameter: "collectionId"');if(void 0===r)throw new b('Missing required parameter: "documentId"');if(void 0===i)throw new b('Missing required parameter: "data"');let o="/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}",e).replace("{collectionId}",t),a={};void 0!==r&&(a.documentId=r),void 0!==i&&(a.data=i),void 0!==n&&(a.permissions=n);let s=new URL(this.client.config.endpoint+o);return yield this.client.call("post",s,{"content-type":"application/json"},a)})}getDocument(e,t,r,i){return m(this,void 0,void 0,function*(){if(void 0===e)throw new b('Missing required parameter: "databaseId"');if(void 0===t)throw new b('Missing required parameter: "collectionId"');if(void 0===r)throw new b('Missing required parameter: "documentId"');let n="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",e).replace("{collectionId}",t).replace("{documentId}",r),o={};void 0!==i&&(o.queries=i);let a=new URL(this.client.config.endpoint+n);return yield this.client.call("get",a,{"content-type":"application/json"},o)})}updateDocument(e,t,r,i,n){return m(this,void 0,void 0,function*(){if(void 0===e)throw new b('Missing required parameter: "databaseId"');if(void 0===t)throw new b('Missing required parameter: "collectionId"');if(void 0===r)throw new b('Missing required parameter: "documentId"');let o="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",e).replace("{collectionId}",t).replace("{documentId}",r),a={};void 0!==i&&(a.data=i),void 0!==n&&(a.permissions=n);let s=new URL(this.client.config.endpoint+o);return yield this.client.call("patch",s,{"content-type":"application/json"},a)})}deleteDocument(e,t,r){return m(this,void 0,void 0,function*(){if(void 0===e)throw new b('Missing required parameter: "databaseId"');if(void 0===t)throw new b('Missing required parameter: "collectionId"');if(void 0===r)throw new b('Missing required parameter: "documentId"');let i="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",e).replace("{collectionId}",t).replace("{documentId}",r),n=new URL(this.client.config.endpoint+i);return yield this.client.call("delete",n,{"content-type":"application/json"},{})})}}class S{}S.read=e=>`read("${e}")`,S.write=e=>`write("${e}")`,S.create=e=>`create("${e}")`,S.update=e=>`update("${e}")`,S.delete=e=>`delete("${e}")`;class R{static custom(e){return e}static unique(e=7){let t=(function(e,t,r,i){if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return i})(R,i,0,n).call(R),r="";for(let t=0;t<e;t++)r+=Math.floor(16*Math.random()).toString(16);return t+r}}i=R,n=function(){let e=new Date,t=Math.floor(e.getTime()/1e3),r=e.getMilliseconds();return t.toString(16)+r.toString(16).padStart(5,"0")},(o||(o={})).Totp="totp",function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"}(a||(a={})),function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"}(s||(s={})),function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"}(l||(l={})),function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionChinaPay="union-china-pay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro"}(d||(d={})),function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"}(c||(c={})),function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS"}(u||(u={})),function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"}(p||(p={})),function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Gif="gif",e.Png="png",e.Webp="webp",e.Avif="avif"}(f||(f={}));let j=new y;j.setProject("67711efb00047d73dddf");let E=new w(j);async function _({params:e}){let t=await e,r=(await E.listDocuments("67711f37002bc5d73098","67711f42000e0f4d2733")).documents.find(e=>e.keyword===t.slug);r?(0,h.redirect)(r.URL):(0,h.redirect)("/")}},9019:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>n});var i=r(2740);r(2704);let n={title:"URL Shortener",description:"URL Shortener that makes your links manageable"};function o({children:e}){return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",rel:"stylesheet"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"})]}),(0,i.jsx)("body",{className:"font-roboto",children:e})]})}},6347:(e,t,r)=>{"use strict";function i(){throw Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return i}}),r(6003).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1271:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return o}});let i=r(6003),n=r(3543);function o(e){return(0,n.isRedirectError)(e)||(0,i.isHTTPAccessFallbackError)(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7359:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return c},RedirectType:function(){return n.RedirectType},forbidden:function(){return a.forbidden},notFound:function(){return o.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect},unauthorized:function(){return s.unauthorized},unstable_rethrow:function(){return l.unstable_rethrow}});let i=r(6552),n=r(3543),o=r(6893),a=r(6347),s=r(590),l=r(1370);class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class c extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6893:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return n}});let i=""+r(6003).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function n(){let e=Error(i);throw e.digest=i,e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3543:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{REDIRECT_ERROR_CODE:function(){return n},RedirectType:function(){return o},isRedirectError:function(){return a}});let i=r(1541),n="NEXT_REDIRECT";var o=function(e){return e.push="push",e.replace="replace",e}({});function a(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,o]=t,a=t.slice(2,-2).join(";"),s=Number(t.at(-2));return r===n&&("replace"===o||"push"===o)&&"string"==typeof a&&!isNaN(s)&&s in i.RedirectStatusCode}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1541:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}});var r=function(e){return e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e}({});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6552:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRedirectError:function(){return a},getRedirectStatusCodeFromError:function(){return u},getRedirectTypeFromError:function(){return c},getURLFromRedirectError:function(){return d},permanentRedirect:function(){return l},redirect:function(){return s}});let i=r(9121),n=r(1541),o=r(3543);function a(e,t,r){void 0===r&&(r=n.RedirectStatusCode.TemporaryRedirect);let i=Error(o.REDIRECT_ERROR_CODE);return i.digest=o.REDIRECT_ERROR_CODE+";"+t+";"+e+";"+r+";",i}function s(e,t){let r=i.actionAsyncStorage.getStore();throw a(e,t||((null==r?void 0:r.isAction)?o.RedirectType.push:o.RedirectType.replace),n.RedirectStatusCode.TemporaryRedirect)}function l(e,t){throw void 0===t&&(t=o.RedirectType.replace),a(e,t,n.RedirectStatusCode.PermanentRedirect)}function d(e){return(0,o.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function c(e){if(!(0,o.isRedirectError)(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function u(e){if(!(0,o.isRedirectError)(e))throw Error("Not a redirect error");return Number(e.digest.split(";").at(-2))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},590:(e,t,r)=>{"use strict";function i(){throw Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return i}}),r(6003).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1370:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,a.isNextRouterError)(t)||(0,o.isBailoutToCSRError)(t)||(0,i.isDynamicUsageError)(t)||(0,n.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let i=r(2349),n=r(7418),o=r(627),a=r(1271);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2349:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return s}});let i=r(2490),n=r(627),o=r(1271),a=r(436),s=e=>(0,i.isDynamicServerError)(e)||(0,n.isBailoutToCSRError)(e)||(0,o.isNextRouterError)(e)||(0,a.isDynamicPostpone)(e)},7418:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return i}});let r=Symbol.for("react.postpone");function i(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},627:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return i},isBailoutToCSRError:function(){return n}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class i extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},2704:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[403],()=>r(4690));module.exports=i})();