try{
var Gr=Object.defineProperty;var w=(o,e)=>()=>(o&&(e=o(o=0)),e);var Vt=(o,e)=>{for(var t in e)Gr(o,t,{get:e[t],enumerable:!0})};var c=w(()=>{});var g,u=w(()=>{g={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}});var d=w(()=>{});var os,rs,ns,Zt,is,ss,as,ls,cs,us,ds,ps,hs,fs,Gt,ms,gs,vs,ys,bs,xs,_s,ws,Me,$s,Te,Ss,Es,oe,As,ks,Cs,Ps,H,Ms,Ts,Os,Xt,Ns,Rs,Bs,js,Ls,Hs,Is,Fs,Us,Ds,zs,Kt,Vs,Ys,Ws,Zs,Gs,Xs,Ks,qs,Js,Qs,ea,ta,oa,ra,na,ia,sa,U=w(()=>{c();u();d();os=__STORYBOOKCOMPONENTS__,{A:rs,ActionBar:ns,AddonPanel:Zt,Badge:is,Bar:ss,Blockquote:as,Button:ls,ClipboardCode:cs,Code:us,DL:ds,Div:ps,DocumentWrapper:hs,ErrorFormatter:fs,FlexBar:Gt,Form:ms,H1:gs,H2:vs,H3:ys,H4:bs,H5:xs,H6:_s,HR:ws,IconButton:Me,IconButtonSkeleton:$s,Icons:Te,Img:Ss,LI:Es,Link:oe,ListItem:As,Loader:ks,OL:Cs,P:Ps,Placeholder:H,Pre:Ms,ResetWrapper:Ts,ScrollArea:Os,Separator:Xt,Spaced:Ns,Span:Rs,StorybookIcon:Bs,StorybookLogo:js,Symbols:Ls,SyntaxHighlighter:Hs,TT:Is,TabBar:Fs,TabButton:Us,TabWrapper:Ds,Table:zs,Tabs:Kt,TabsState:Vs,TooltipLinkList:Ys,TooltipMessage:Ws,TooltipNote:Zs,UL:Gs,WithTooltip:Xs,WithTooltipPure:Ks,Zoom:qs,codeCommon:Js,components:Qs,createCopyToClipboardFunction:ea,getStoryHref:ta,icons:oa,interleaveSeparators:ra,nameSpaceClassNames:na,resetComponents:ia,withReset:sa}=__STORYBOOKCOMPONENTS__});var da,pa,ha,fa,ma,ga,va,ya,ba,xa,_a,wa,O,$a,Sa,Ea,Aa,f,ka,Ca,Pa,Ma,Ta,Oa,Na,L=w(()=>{c();u();d();da=__STORYBOOKTHEMING__,{CacheProvider:pa,ClassNames:ha,Global:fa,ThemeProvider:ma,background:ga,color:va,convert:ya,create:ba,createCache:xa,createGlobal:_a,createReset:wa,css:O,darken:$a,ensure:Sa,ignoreSsrWarning:Ea,isPropValid:Aa,jsx:f,keyframes:ka,lighten:Ca,styled:Pa,themes:Ma,typography:Ta,useTheme:Oa,withTheme:Na}=__STORYBOOKTHEMING__});var Ne={};Vt(Ne,{Children:()=>qr,Component:()=>et,Fragment:()=>E,Profiler:()=>Jr,PureComponent:()=>Qr,StrictMode:()=>en,Suspense:()=>tt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>tn,cloneElement:()=>on,createContext:()=>rn,createElement:()=>nn,createFactory:()=>sn,createRef:()=>an,default:()=>Kr,forwardRef:()=>ln,isValidElement:()=>cn,lazy:()=>ot,memo:()=>un,useCallback:()=>I,useContext:()=>dn,useDebugValue:()=>pn,useEffect:()=>N,useImperativeHandle:()=>hn,useLayoutEffect:()=>fn,useMemo:()=>W,useReducer:()=>mn,useRef:()=>gn,useState:()=>M,version:()=>vn});var Kr,qr,et,E,Jr,Qr,en,tt,tn,on,rn,nn,sn,an,ln,cn,ot,un,I,dn,pn,N,hn,fn,W,mn,gn,M,vn,R=w(()=>{c();u();d();Kr=__REACT__,{Children:qr,Component:et,Fragment:E,Profiler:Jr,PureComponent:Qr,StrictMode:en,Suspense:tt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:tn,cloneElement:on,createContext:rn,createElement:nn,createFactory:sn,createRef:an,forwardRef:ln,isValidElement:cn,lazy:ot,memo:un,useCallback:I,useContext:dn,useDebugValue:pn,useEffect:N,useImperativeHandle:hn,useLayoutEffect:fn,useMemo:W,useReducer:mn,useRef:gn,useState:M,version:vn}=__REACT__});var nt,ce,bn,xn,_n,qt,Jt,Qt,Re=w(()=>{c();u();d();R();L();U();nt=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},ce=function(o){var e=o.config,t=o.defer,r=t===void 0?!1:t,n=M(r?void 0:e.url),i=n[0],s=n[1],p=M(!1),a=p[0],l=p[1];return N(function(){if(r){var h=requestAnimationFrame(function(){s(e.url)});return function(){return cancelAnimationFrame(h)}}},[r,e.url]),N(function(){l(!1)},[i]),f("div",{css:bn},!a&&f(H,{css:xn},"Loading..."),f("iframe",{css:_n,src:i,allowFullScreen:e.allowFullscreen,onLoad:function(){return l(!0)}}))},bn=O(qt||(qt=nt([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`]))),xn=O(Jt||(Jt=nt([`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`],[`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`]))),_n=O(Qt||(Qt=nt([`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`],[`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`])))});var it,wn,eo,st=w(()=>{c();u();d();R();L();Re();it=/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,wn=function(o){return it.test(o)},eo=function(o){var e=o.config,t=W(function(){var r=wn(e.url);if(!r)return console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),e;var n=e.embedHost||location.hostname,i="https://www.figma.com/embed?embed_host=".concat(n,"&url=").concat(e.url);return{url:i,allowFullscreen:e.allowFullscreen}},[e.url,e.allowFullscreen,e.embedHost]);return f(ce,{defer:!0,config:t})}});var Be,je,ct,yo,ge,bo,B,ut,Le,dt=w(()=>{c();u();d();Be=window,je=Be.ShadowRoot&&(Be.ShadyCSS===void 0||Be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),yo=new WeakMap,ge=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(je&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=yo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&yo.set(t,e))}return e}toString(){return this.cssText}},bo=o=>new ge(typeof o=="string"?o:o+"",void 0,ct),B=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new ge(t,o,ct)},ut=(o,e)=>{je?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),n=Be.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,o.appendChild(r)})},Le=je?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return bo(t)})(o):o});var pt,He,xo,Tn,_o,ft,wo,ht,mt,Z,Ie=w(()=>{c();u();d();dt();dt();He=window,xo=He.trustedTypes,Tn=xo?xo.emptyScript:"",_o=He.reactiveElementPolyfillSupport,ft={toAttribute(o,e){switch(e){case Boolean:o=o?Tn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},wo=(o,e)=>e!==o&&(e==e||o==o),ht={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:wo},mt="finalized",Z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=ht){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){let i=this[e];this[t]=n,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ht}static finalize(){if(this.hasOwnProperty(mt))return!1;this[mt]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift(Le(n))}else e!==void 0&&t.push(Le(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=ht){var n;let i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){let s=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:ft).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var r;let n=this.constructor,i=n._$Ev.get(e);if(i!==void 0&&this._$El!==i){let s=n.getPropertyOptions(i),p=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:ft;this._$El=i,this[i]=p.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||wo)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Z[mt]=!0,Z.elementProperties=new Map,Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},_o?.({ReactiveElement:Z}),((pt=He.reactiveElementVersions)!==null&&pt!==void 0?pt:He.reactiveElementVersions=[]).push("1.6.2")});function pe(o,e,t=o,r){var n,i,s,p;if(e===G)return e;let a=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl,l=be(e)?void 0:e._$litDirective$;return a?.constructor!==l&&((i=a?._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,t,r)),r!==void 0?((s=(p=t)._$Co)!==null&&s!==void 0?s:p._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=pe(o,a._$AS(o,e.values),a,r)),e}var gt,Fe,de,$o,yt,K,Mo,On,ie,ye,be,To,Nn,vt,ve,So,Eo,re,Ao,ko,Oo,No,S,j,G,C,Co,ne,Rn,xe,bt,_e,he,xt,Bn,_t,wt,$t,Po,Ro,we=w(()=>{c();u();d();Fe=window,de=Fe.trustedTypes,$o=de?de.createPolicy("lit-html",{createHTML:o=>o}):void 0,yt="$lit$",K=`lit$${(Math.random()+"").slice(9)}$`,Mo="?"+K,On=`<${Mo}>`,ie=document,ye=()=>ie.createComment(""),be=o=>o===null||typeof o!="object"&&typeof o!="function",To=Array.isArray,Nn=o=>To(o)||typeof o?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,So=/-->/g,Eo=/>/g,re=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ao=/'/g,ko=/"/g,Oo=/^(?:script|style|textarea|title)$/i,No=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),S=No(1),j=No(2),G=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Co=new WeakMap,ne=ie.createTreeWalker(ie,129,null,!1),Rn=(o,e)=>{let t=o.length-1,r=[],n,i=e===2?"<svg>":"",s=ve;for(let a=0;a<t;a++){let l=o[a],h,m,x=-1,_=0;for(;_<l.length&&(s.lastIndex=_,m=s.exec(l),m!==null);)_=s.lastIndex,s===ve?m[1]==="!--"?s=So:m[1]!==void 0?s=Eo:m[2]!==void 0?(Oo.test(m[2])&&(n=RegExp("</"+m[2],"g")),s=re):m[3]!==void 0&&(s=re):s===re?m[0]===">"?(s=n??ve,x=-1):m[1]===void 0?x=-2:(x=s.lastIndex-m[2].length,h=m[1],s=m[3]===void 0?re:m[3]==='"'?ko:Ao):s===ko||s===Ao?s=re:s===So||s===Eo?s=ve:(s=re,n=void 0);let b=s===re&&o[a+1].startsWith("/>")?" ":"";i+=s===ve?l+On:x>=0?(r.push(h),l.slice(0,x)+yt+l.slice(x)+K+b):l+K+(x===-2?(r.push(void 0),a):b)}let p=i+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[$o!==void 0?$o.createHTML(p):p,r]},xe=class o{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,s=0,p=e.length-1,a=this.parts,[l,h]=Rn(e,t);if(this.el=o.createElement(l,r),ne.currentNode=this.el.content,t===2){let m=this.el.content,x=m.firstChild;x.remove(),m.append(...x.childNodes)}for(;(n=ne.nextNode())!==null&&a.length<p;){if(n.nodeType===1){if(n.hasAttributes()){let m=[];for(let x of n.getAttributeNames())if(x.endsWith(yt)||x.startsWith(K)){let _=h[s++];if(m.push(x),_!==void 0){let b=n.getAttribute(_.toLowerCase()+yt).split(K),$=/([.?@])?(.*)/.exec(_);a.push({type:1,index:i,name:$[2],strings:b,ctor:$[1]==="."?xt:$[1]==="?"?_t:$[1]==="@"?wt:he})}else a.push({type:6,index:i})}for(let x of m)n.removeAttribute(x)}if(Oo.test(n.tagName)){let m=n.textContent.split(K),x=m.length-1;if(x>0){n.textContent=de?de.emptyScript:"";for(let _=0;_<x;_++)n.append(m[_],ye()),ne.nextNode(),a.push({type:2,index:++i});n.append(m[x],ye())}}}else if(n.nodeType===8)if(n.data===Mo)a.push({type:2,index:i});else{let m=-1;for(;(m=n.data.indexOf(K,m+1))!==-1;)a.push({type:7,index:i}),m+=K.length-1}i++}}static createElement(e,t){let r=ie.createElement("template");return r.innerHTML=e,r}};bt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:n}=this._$AD,i=((t=e?.creationScope)!==null&&t!==void 0?t:ie).importNode(r,!0);ne.currentNode=i;let s=ne.nextNode(),p=0,a=0,l=n[0];for(;l!==void 0;){if(p===l.index){let h;l.type===2?h=new _e(s,s.nextSibling,this,e):l.type===1?h=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(h=new $t(s,this,e)),this._$AV.push(h),l=n[++a]}p!==l?.index&&(s=ne.nextNode(),p++)}return ne.currentNode=ie,i}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},_e=class o{constructor(e,t,r,n){var i;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(i=n?.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),be(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Nn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&be(this._$AH)?this._$AA.nextSibling.data=e:this.$(ie.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=xe.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.v(r);else{let s=new bt(i,this),p=s.u(this.options);s.v(r),this.$(p),this._$AH=s}}_$AC(e){let t=Co.get(e.strings);return t===void 0&&Co.set(e.strings,t=new xe(e)),t}T(e){To(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new o(this.k(ye()),this.k(ye()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},he=class{constructor(e,t,r,n,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){let i=this.strings,s=!1;if(i===void 0)e=pe(this,e,t,0),s=!be(e)||e!==this._$AH&&e!==G,s&&(this._$AH=e);else{let p=e,a,l;for(e=i[0],a=0;a<i.length-1;a++)l=pe(this,p[r+a],t,a),l===G&&(l=this._$AH[a]),s||(s=!be(l)||l!==this._$AH[a]),l===C?e=C:e!==C&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xt=class extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Bn=de?de.emptyScript:"",_t=class extends he{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,Bn):this.element.removeAttribute(this.name)}},wt=class extends he{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=pe(this,e,t,0))!==null&&r!==void 0?r:C)===G)return;let n=this._$AH,i=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==C&&(n===C||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},$t=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}},Po=Fe.litHtmlPolyfillSupport;Po?.(xe,_e),((gt=Fe.litHtmlVersions)!==null&&gt!==void 0?gt:Fe.litHtmlVersions=[]).push("2.7.4");Ro=(o,e,t)=>{var r,n;let i=(r=t?.renderBefore)!==null&&r!==void 0?r:e,s=i._$litPart$;if(s===void 0){let p=(n=t?.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new _e(e.insertBefore(ye(),p),p,void 0,t??{})}return s._$AI(o),s}});var St,Et,D,Bo,jo=w(()=>{c();u();d();Ie();Ie();we();we();D=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ro(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return G}};D.finalized=!0,D._$litElement$=!0,(St=globalThis.litElementHydrateSupport)===null||St===void 0||St.call(globalThis,{LitElement:D});Bo=globalThis.litElementPolyfillSupport;Bo?.({LitElement:D});((Et=globalThis.litElementVersions)!==null&&Et!==void 0?Et:globalThis.litElementVersions=[]).push("3.3.2")});var Lo=w(()=>{c();u();d();});var z=w(()=>{c();u();d();Ie();we();jo();Lo()});var Ho=w(()=>{c();u();d();});function P(o){return(e,t)=>t!==void 0?Ln(o,e,t):jn(o,e)}var jn,Ln,At=w(()=>{c();u();d();jn=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},Ln=(o,e,t)=>{e.constructor.createProperty(t,o)}});var Io=w(()=>{c();u();d();At();});var se=w(()=>{c();u();d();});var Fo=w(()=>{c();u();d();se();});var Uo=w(()=>{c();u();d();se();});var Do=w(()=>{c();u();d();se();});var zo=w(()=>{c();u();d();se();});var kt,Ou,Ct=w(()=>{c();u();d();se();Ou=((kt=window.HTMLSlotElement)===null||kt===void 0?void 0:kt.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE)});var Vo=w(()=>{c();u();d();se();Ct();});var fe=w(()=>{c();u();d();Ho();At();Io();Fo();Uo();Do();zo();Ct();Vo()});var X,Yo,Ue=w(()=>{c();u();d();z();X=({title:o,children:e})=>S`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Yo=B`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`});var Wo,Zo,De,Go=w(()=>{c();u();d();Wo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zo=o=>(...e)=>({_$litDirective$:o,values:e}),De=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}});var Xo,Hn,ae,Ko=w(()=>{c();u();d();we();Go();Xo="important",Hn=" !"+Xo,ae=Zo(class extends De{constructor(o){var e;if(super(o),o.type!==Wo.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ut===void 0){this.ut=new Set;for(let r in e)this.ut.add(r);return this.render(e)}this.ut.forEach(r=>{e[r]==null&&(this.ut.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let n=e[r];if(n!=null){this.ut.add(r);let i=typeof n=="string"&&n.endsWith(Hn);r.includes("-")||i?t.setProperty(r,i?n.slice(0,-11):n,i?Xo:""):t[r]=n}}return G}})});var ze=w(()=>{c();u();d();Ko()});function qo(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function Qo(o,e){let t=qo(o),r=qo(e),n=!(t.top>r.bottom||t.bottom<r.top),i=!(t.left>r.right||t.right<r.left);if(i&&n){let h={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:h.y},{x:r.left,y:h.y}]},{points:[{x:t.right,y:h.y},{x:r.right,y:h.y}]},{points:[{y:t.top,x:h.x},{y:r.top,x:h.x}]},{points:[{y:t.bottom,x:h.x},{y:r.bottom,x:h.x}]}]}let s=t.left>r.right,p=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[i?null:{points:[{x:s?t.left:t.right,y:a.y},{x:s?r.right:r.left,y:a.y}],bisector:n?void 0:[{x:s?r.right:r.left,y:a.y},{x:s?r.right:r.left,y:p?r.bottom:r.top}]},n?null:{points:[{y:p?t.top:t.bottom,x:a.x},{y:p?r.bottom:r.top,x:a.x}],bisector:i?void 0:[{y:p?r.bottom:r.top,x:a.x},{y:p?r.bottom:r.top,x:s?r.right:r.left}]}].filter(h=>!!h)}function Se(o){return Math.round(o*100)/100}function Ve(o,e){return[...Jo(o),...Jo(e)]}function Jo(o){return o?o instanceof Array?o:[o]:[]}var Ee=w(()=>{c();u();d()});var In,er,tr=w(()=>{c();u();d();fe();In=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},er=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return In([P({attribute:!1})],e.prototype,"selectedNode",void 0),e}});function Ye(o){return o.touches.length===0||o.touches.length>2}function Fn(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var or,rr=w(()=>{c();u();d();or=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{Ye(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{Ye(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{Ye(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(Ye(r))return;let n=Array.from(this.previousTouches||[]),i=Array.from(r.touches);if(this.previousTouches=r.touches,!(i.length!==n.length||!i.every(s=>n.some(p=>p.identifier===s.identifier)))){if(i.length===1){this.onTouchPan({x:i[0].pageX-n[0].pageX,y:i[0].pageY-n[0].pageY});return}this.onTouchPinch(Fn({x:i[0].pageX,y:i[0].pageY},{x:n[0].pageX,y:n[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}}});var Ae,V,nr,ir,sr=w(()=>{c();u();d();fe();rr();Ae=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},V=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},nr=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},ir=o=>{var e,t,r,n,i;class s extends or(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(h,m)=>{this.panX+=h/this.scale/window.devicePixelRatio,this.panY+=m/this.scale/window.devicePixelRatio}),r.set(this,h=>{h.code==="Space"&&!V(this,e)&&(nr(this,e,!0),document.body.style.cursor="grab")}),n.set(this,h=>{h.code==="Space"&&V(this,e)&&(nr(this,e,!1),document.body.style.cursor="auto")}),i.set(this,()=>{document.addEventListener("keyup",V(this,n)),document.addEventListener("keydown",V(this,r))}),this.addEventListener("wheel",h=>{if(this.isMovable)if(h.preventDefault(),h.ctrlKey){let{deltaY:m}=h;h.deltaMode===1&&(m*=15);let x=this.scale;this.scale*=1-m/((1e3-this.zoomSpeed)*.5);let _=h.offsetX-this.offsetWidth/2,b=h.offsetY-this.offsetHeight/2;this.panX+=_/this.scale-_/x,this.panY+=b/this.scale-b/x}else{let m=this.panSpeed*.002;this.panX-=h.deltaX*m/this.scale,this.panY-=h.deltaY*m/this.scale}},{passive:!1});let l=1;this.addEventListener("gesturestart",h=>{h.preventDefault(),l=this.scale}),this.addEventListener("gesturechange",h=>{let m=h;m.preventDefault(),this.scale=l*m.scale}),this.addEventListener("pointermove",h=>{h.buttons&4&&(h.preventDefault(),V(this,t).call(this,h.movementX,h.movementY))}),V(this,i).call(this),this.onmousedown=()=>{V(this,e)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:h,movementY:m})=>{V(this,t).call(this,h,m)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",V(this,n)),document.removeEventListener("keydown",V(this,r)),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,n=new WeakMap,i=new WeakMap,Ae([P({attribute:!1})],s.prototype,"panX",void 0),Ae([P({attribute:!1})],s.prototype,"panY",void 0),Ae([P({attribute:!1})],s.prototype,"scale",void 0),Ae([P({type:Number,attribute:"zoom-speed"})],s.prototype,"zoomSpeed",void 0),Ae([P({type:Number,attribute:"pan-speed"})],s.prototype,"panSpeed",void 0),s}});var Un,Dn,ar,lr,cr,ur=w(()=>{c();u();d();z();ze();Ee();Un=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:j`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&j`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${ae({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},Dn=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),n=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&n===0)return null;let i=Se(Math.max(r,n)).toString(10),s=i.length*t*.5,p=t*.25,a=t*.25,l=t*.5,h=r>n?(o.points[0].x+o.points[1].x)/2-s/2:o.points[0].x,m=r>n?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,x=[`scale(${e})`,r>n?`translate(0, ${p+a})`:`translate(${p+l}, 0)`].join(" "),_=h+s/2,b=m+t/2,$=r>n?`${_} ${m}`:`${h} ${b}`;return j`
    <g class="distance-tooltip">
      <rect
        x=${h-l}
        y=${m-a}
        rx="2"
        width=${s+l*2}
        height=${t+a*2}
        transform=${x}
        transform-origin=${$}
        stroke="none"
      />

      <text
        x=${_}
        y=${m+t-a/2}
        text-anchor="middle"
        transform=${x}
        transform-origin=${$}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${i}
      </text>
    </g>
  `},ar=new Map,lr=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let n=o.id+`
`+e.id,i=ar.get(n);return i||(i=Qo(o.absoluteBoundingBox,e.absoluteBoundingBox),ar.set(n,i)),[...i.map(s=>Un({guide:s,reverseScale:t})),...i.map(s=>Dn({guide:s,reverseScale:t,fontSize:r}))]},cr=B`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`});var dr,Mt,pr,hr,fr,Tt=w(()=>{c();u();d();z();dr=({onClick:o=()=>{}})=>j`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Mt=({onClick:o=()=>{}})=>j`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,pr=()=>j`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,hr=()=>j`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,fr=()=>j`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`});var me,Vn,Ot,We,mr,Yn,Nt,gr=w(()=>{c();u();d();me=o=>o.a===0?"transparent":o.a<1?`rgba(${mr(o).join(", ")}, ${o.a.toFixed(2)})`:Yn(o),Vn=o=>new Ot(o).cssColor,Ot=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>me(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},We=class{constructor(e){var t,r,n;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(s=>s===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let s=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=me(s)}let i=(n=e.fills)===null||n===void 0?void 0:n[0];if(i&&i.visible!==!1&&(e.type==="TEXT"?this.color=me(i.color):i.type.includes("GRADIENT")?this.backgroundImage=Vn(i):i.type==="SOLID"&&(this.background=me(i.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=me(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:s,radius:p,color:a}=e.effects[0];this.boxShadowColor=me(a),this.boxShadow=`${s?.x||0}px ${s?.y||0}px 0 ${p} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Nt).join(`
`)}},mr=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],Yn=o=>{let[e,t,r]=mr(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},Nt=({property:o,value:e})=>`${o}: ${e};`});var Wn,Rt,vr,Zn,Gn,yr,br=w(()=>{c();u();d();z();Tt();gr();Wn=function(o,e,t,r){function n(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function p(h){try{l(r.next(h))}catch(m){s(m)}}function a(h){try{l(r.throw(h))}catch(m){s(m)}}function l(h){h.done?i(h.value):n(h.value).then(p,a)}l((r=r.apply(o,e||[])).next())})},Rt=o=>Wn(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),vr=({node:o,onClose:e})=>{if(!o)return null;let t=new We(o),r=n=>n.stopPropagation();return S`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${dr({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?S`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?S`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&S`<p class="inspector-property">
              ${pr()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&S`<p class="inspector-property">
              ${hr()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?S`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Mt({onClick:()=>Rt(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${Zn(t)}
    </div>
  `},Zn=o=>{let e=()=>Rt(o.getStyleSheet()),t=o.getStyles();return S`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Mt({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(Gn)}
    </div>
  </div>`},Gn=o=>{let{property:e,value:t,color:r}=o,n=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":n=S`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":n=S`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return S`<div class="css-property" @click=${()=>Rt(Nt(o))}>
    <span>${e}:</span>${n}<span class="css-value">${t}</span>;</span>
  </div>`},yr=B`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`});var Bt,xr,_r,wr=w(()=>{c();u();d();z();ze();Ee();Bt=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:n,y:i,width:s,height:p}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},l=t/2,h=(b,$)=>`M${b},${$}`,m=(b,$)=>`L${b},${$}`,x=(b,$,A)=>`A${b},${b} 0 0 1 ${$},${A}`,_=[h(a.topLeft+l,l),m(s-a.topRight,l),x(a.topRight-l,s-l,a.topRight),m(s-l,p-a.bottomRight),x(a.bottomRight-l,s-a.bottomRight,p-l),m(a.bottomLeft,p-l),x(a.bottomLeft-l,l,p-a.bottomLeft),m(l,a.topLeft),x(a.topLeft-l,a.topLeft,l),"Z"].join(" ");return j`
    <path
      class="guide"
      d=${_}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${n}, ${i})"
      ?data-selected=${e}
      @click=${r}
    />
  `},xr=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:n,offsetY:i,reverseScale:s})=>{let p={top:`${i+e+r}px`,left:`${n+o+t/2}px`,transform:`translateX(-50%) scale(${s}) translateY(0.25em)`};return S`
    <div class="tooltip" style="${ae(p)}">
      ${Se(t)} x ${Se(r)}
    </div>
  `},_r=B`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`});var qn,$r,Sr,Er=w(()=>{c();u();d();qn=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],$r=o=>(typeof o=="object"?o:new Date(o)).getTime(),Sr=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let n=$r(e)-$r(o),i=Math.abs(n);for(let s of qn)if(i>=s.gte){let p=Math.round(Math.abs(n)/s.divisor),a=n<0,l=s.unit;return l?t.format(a?p:-p,l):s.text}}});var Ar,kr,Cr=w(()=>{c();u();d();z();Tt();Er();Ar=B`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,kr=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return S`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${fr()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Sr(t)}
    </span>
  </a>`}});function Qn(o){let e=[],t=[],r=[],n=[];for(let p of o.children){if(p.type!=="FRAME"&&p.type!=="COMPONENT")continue;let{x:a,y:l,width:h,height:m}=p.absoluteBoundingBox;e.push(a),t.push(a+h),r.push(l),n.push(l+m)}let i=Math.min(...e),s=Math.min(...r);return{x:i,y:s,width:Math.abs(Math.max(...t)-i),height:Math.abs(Math.min(...n)-s)}}function ei(o,e){let t=e.map(n=>{if(!("effects"in n))return{top:n.absoluteBoundingBox.y,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height,left:n.absoluteBoundingBox.x};let i=n.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),s=n.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),p={top:Math.max(0,...i,...s.map(a=>a.top)),right:Math.max(0,...i,...s.map(a=>a.right)),bottom:Math.max(0,...i,...s.map(a=>a.bottom)),left:Math.max(0,...i,...s.map(a=>a.left))};return{top:n.absoluteBoundingBox.y-p.top,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width+p.right,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height+p.bottom,left:n.absoluteBoundingBox.x-p.left}}),r={top:Math.min(...t.map(n=>n.top)),right:Math.max(...t.map(n=>n.right)),bottom:Math.max(...t.map(n=>n.bottom)),left:Math.min(...t.map(n=>n.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function Ze(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>Ze(t,e+1)).flat()]:o.children.map(t=>Ze(t,e+1)).flat()}var Pr,F,jt,Ge,Lt=w(()=>{c();u();d();z();fe();ze();Ee();tr();sr();ur();br();Ue();wr();Cr();Pr=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},F=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},jt=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},Ge=o=>{var e,t,r,n,i;class s extends er(ir(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),n.set(this,l=>h=>{h.preventDefault(),h.stopPropagation(),this.selectedNode=l}),i.set(this,l=>{var h,m;return(m=(h=F(this,r))===null||h===void 0?void 0:h.find(x=>x.id===l))!==null&&m!==void 0?m:null})}static get styles(){let a=super.styles;return Ve(a,[B`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,_r,Yo,cr,yr,Ar])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!F(this,e)||!F(this,r)?X({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?X({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?X({title:"Error",children:this.error}):this.error;let a=F(this,e),l=1/this.scale,h=`calc(var(--guide-thickness) * ${l})`,m=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),x=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return S`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([_,b])=>{var $;let A=F(this,i).call(this,_);if(!A||!("absoluteBoundingBox"in A)||!(!(($=F(this,t))===null||$===void 0)&&$[A.id]))return null;let k=F(this,t)[A.id];return S`
                <img class="rendered-image" src="${b}"
                style=${ae({top:`${A.absoluteBoundingBox.y-a.y}px`,left:`${A.absoluteBoundingBox.x-a.x}px`,marginTop:`${-k.top}px`,marginLeft:`${-k.left}px`,width:A.absoluteBoundingBox.width+k.left+k.right+"px",height:A.absoluteBoundingBox.height+k.top+k.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&xr({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:l})}
            ${j`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${ae({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:h})}
            >
              ${this.selectedNode&&Bt({node:this.selectedNode,selected:!0,computedThickness:m*l})}

              ${F(this,r).map(_=>{var b;return _.id===((b=this.selectedNode)===null||b===void 0?void 0:b.id)?null:j`
                  <g>
                    ${Bt({node:_,computedThickness:m*l,onClick:F(this,n).call(this,_)})}
                    ${this.selectedNode&&lr({node:_,distanceTo:this.selectedNode,reverseScale:l,fontSize:x})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${vr({node:this.selectedNode,onClose:this.deselectNode})}
          ${kr(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");jt(this,e,a.type==="CANVAS"?Qn(a):a.absoluteBoundingBox),jt(this,r,Ze(a)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(F(this,i)).filter(l=>!!l);jt(this,t,a.reduce((l,h)=>"absoluteBoundingBox"in h?Object.assign(Object.assign({},l),{[h.id]:ei(h,Ze(h))}):l,{})),this.requestUpdate()}resetZoom(){if(F(this,e)){let{width:a,height:l}=F(this,e),{width:h,height:m}=this.getBoundingClientRect(),x=h/(a+this.zoomMargin*2),_=m/(l+this.zoomMargin*2);this.scale=Math.min(x,_,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,n=new WeakMap,i=new WeakMap,Pr([P({type:Number,attribute:"zoom-margin"})],s.prototype,"zoomMargin",void 0),Pr([P({type:String,attribute:"link"})],s.prototype,"link",void 0),s}});var Mr,q,Tr=w(()=>{c();u();d();z();fe();Ue();Lt();Mr=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},q=class extends Ge(D){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return X({title:"Parameter error",children:S`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return X({title:"Parameter Error",children:S`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};Mr([P({type:Object})],q.prototype,"nodes",void 0);Mr([P({type:String,attribute:"rendered-image"})],q.prototype,"renderedImage",void 0)});var Or,Ht,Xe,It,J,Nr=w(()=>{c();u();d();z();fe();Ue();Lt();Ee();Or=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},Ht=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},J=class extends Ge(D){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,Xe.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),It.set(this,e=>{var t,r;let n=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(i=>i.id===n.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return X({title:"Parameter error",children:S`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return Ve(super.styles,[B`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return S`
      <div class="controls">
        <select @change=${Ht(this,It)}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>S`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Ht(this,Xe).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Ht(this,Xe).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};Xe=new WeakMap,It=new WeakMap;Or([P({type:Object,attribute:"document-node"})],J.prototype,"documentNode",void 0);Or([P({type:Object,attribute:"rendered-images"})],J.prototype,"renderedImages",void 0)});var Rr=w(()=>{c();u();d();Tr();Nr();customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",J);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",q)});function Ke(o=window.React,e,t,r,n){let i,s,p;if(e===void 0){let _=o;({tagName:s,elementClass:p,events:r,displayName:n}=_),i=_.react}else i=o,p=t,s=e;let a=i.Component,l=i.createElement,h=new Set(Object.keys(r??{}));class m extends a{constructor(){super(...arguments),this.o=null}t(b){if(this.o!==null)for(let $ in this.i)oi(this.o,$,this.props[$],b?b[$]:void 0,r)}componentDidMount(){var b;this.t(),(b=this.o)===null||b===void 0||b.removeAttribute("defer-hydration")}componentDidUpdate(b){this.t(b)}render(){let{_$Gl:b,...$}=this.props;this.h!==b&&(this.u=k=>{b!==null&&ri(b,k),this.o=k,this.h=b}),this.i={};let A={ref:this.u};for(let[k,Q]of Object.entries($))ti.has(k)?A[k==="className"?"class":k]=Q:h.has(k)||k in p.prototype?this.i[k]=Q:A[k]=Q;return A.suppressHydrationWarning=!0,l(s,A)}}m.displayName=n??p.name;let x=i.forwardRef((_,b)=>l(m,{..._,_$Gl:b},_?.children));return x.displayName=m.displayName,x}var ti,Br,oi,ri,jr=w(()=>{c();u();d();ti=new Set(["children","localName","ref","style","className"]),Br=new WeakMap,oi=(o,e,t,r,n)=>{let i=n?.[e];i===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((s,p,a)=>{let l=Br.get(s);l===void 0&&Br.set(s,l=new Map);let h=l.get(p);a!==void 0?h===void 0?(l.set(p,h={handleEvent:a}),s.addEventListener(p,h)):h.handleEvent=a:h!==void 0&&(l.delete(p),s.removeEventListener(p,h))})(o,i,t)},ri=(o,e)=>{typeof o=="function"?o(e):o.current=e}});var Lr=w(()=>{c();u();d();jr()});var Hr,Ir,Fr=w(()=>{c();u();d();Rr();Lr();R();Hr=Ke(Ne,"figspec-frame-viewer",q,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),Ir=Ke(Ne,"figspec-file-viewer",J,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"})});var Yr={};Vt(Yr,{Figspec:()=>zr,default:()=>li});function qe(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function ai(o){var e;if(o.accessToken)return o.accessToken;try{return(e=g.STORYBOOK_FIGMA_ACCESS_TOKEN)!==null&&e!==void 0?e:null}catch{return null}}function Vr(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(Vr).reduce(function(e,t){return e.concat(t)},[])}var ni,Je,ii,si,Ur,zr,li,Dr,Wr=w(()=>{c();u();d();R();Fr();U();L();st();ni=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},Je=function(){return Je=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},Je.apply(this,arguments)},ii=function(o,e,t,r){function n(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function p(h){try{l(r.next(h))}catch(m){s(m)}}function a(h){try{l(r.throw(h))}catch(m){s(m)}}function l(h){h.done?i(h.value):n(h.value).then(p,a)}l((r=r.apply(o,e||[])).next())})},si=function(o,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,s;return s={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function p(l){return function(h){return a([l,h])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(o,t)}catch(h){l=[6,h],n=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Ur=O(Dr||(Dr=ni([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`])));zr=function(o){var e=o.config,t=M({state:"loading"}),r=t[0],n=t[1],i=function(s){return ii(void 0,void 0,void 0,function(){var p,a,l,h,m,x,_,b,$,A,k,Q,Dt,zt,ee;return si(this,function(te){switch(te.label){case 0:n({state:"loading"}),te.label=1;case 1:if(te.trys.push([1,6,,7]),p=e.url.match(it),!p)throw new Error(e.url+" is not a valid Figma URL.");if(a=p[3],l=new URL(e.url),h=l.searchParams.get("node-id"),m=ai(e),!m)throw new Error("Personal Access Token is required.");return x={"X-FIGMA-TOKEN":m},_=new URL("https://api.figma.com/v1/files/".concat(a)),b=new URL("https://api.figma.com/v1/images/".concat(a)),b.searchParams.set("format","svg"),h?[3,4]:[4,fetch(_.href,{headers:x,signal:s}).then(function(Y){return qe(Y)})];case 2:return $=te.sent(),A=Vr($.document),b.searchParams.set("ids",A.map(function(Y){return Y.id}).join(",")),[4,fetch(b.href,{headers:x,signal:s}).then(function(Y){return qe(Y)})];case 3:return k=te.sent(),n({state:"fetched",value:{type:"file",props:{documentNode:$,renderedImages:k.images,link:e.url}}}),[2];case 4:return _.pathname+="/nodes",_.searchParams.set("ids",h),b.searchParams.set("ids",h),[4,Promise.all([fetch(_.href,{headers:x,signal:s}).then(function(Y){return qe(Y)}),fetch(b.href,{headers:x,signal:s}).then(function(Y){return qe(Y)})])];case 5:return Q=te.sent(),Dt=Q[0],zt=Q[1],n({state:"fetched",value:{type:"frame",props:{nodes:Dt,renderedImage:Object.values(zt.images)[0],link:e.url}}}),[3,7];case 6:return ee=te.sent(),ee instanceof DOMException&&ee.code===DOMException.ABORT_ERR?[2]:(console.error(ee),n({state:"failed",error:ee instanceof Error?ee.message:String(ee)}),[3,7]);case 7:return[2]}})})};switch(N(function(){var s=!1,p=function(){s=!0},a=new AbortController;return i(a.signal).then(p,p),function(){s||a.abort()}},[e.url]),r.state){case"loading":return f(H,null,f(E,null,"Loading Figma file..."));case"failed":return f(H,null,f(E,null,"Failed to load Figma file"),f(E,null,r.error));case"fetched":return r.value.type==="file"?f(Ir,Je({css:Ur},r.value.props)):f(Hr,Je({css:Ur},r.value.props))}},li=zr});c();u();d();c();u();d();c();u();d();c();u();d();var vi=__STORYBOOKADDONS__,{addons:Ce,types:Yt,mockChannel:yi}=__STORYBOOKADDONS__;c();u();d();var $i=__STORYBOOKAPI__,{ActiveTabs:Si,Consumer:Ei,ManagerContext:Ai,Provider:ki,addons:Ci,combineParameters:Pi,controlOrMetaKey:Mi,controlOrMetaSymbol:Ti,eventMatchesShortcut:Oi,eventToShortcut:Ni,isMacLike:Ri,isShortcutTaken:Bi,keyToSymbol:ji,merge:Li,mockChannel:Hi,optionOrAltSymbol:Ii,shortcutMatchesShortcut:Fi,shortcutToHumanString:Ui,types:Di,useAddonState:zi,useArgTypes:Vi,useArgs:Yi,useChannel:Wi,useGlobalTypes:Zi,useGlobals:Gi,useParameter:Pe,useSharedState:Xi,useStoryPrepared:Ki,useStorybookApi:qi,useStorybookState:Wt}=__STORYBOOKAPI__;U();L();c();u();d();var Oe="STORYBOOK_ADDON_DESIGNS",Qe=Oe+"/panel",Ha={UpdateConfig:Oe+"/update_config"},le="design";c();u();d();R();U();L();var yn=function(){var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},o(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");o(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),rt=function(o){yn(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.state={hasError:!1},t}return e.getDerivedStateFromError=function(t){return{hasError:!0,error:t}},e.prototype.componentDidCatch=function(t,r){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(t),console.log("--- React Component Stack ---"),console.error(r.componentStack),console.groupEnd()},e.prototype.render=function(){return this.state.hasError?f(H,null,f(E,null,"Failed to render addon UI"),f(E,null,f("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),f("pre",null,String(this.state.error)),f("p",null,"See console log for more details. To clear the error state, please reload the page."," ",f(oe,{href:"https://github.com/pocka/storybook-addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children},e}(et);c();u();d();R();L();c();u();d();R();L();U();st();Re();c();u();d();R();L();U();c();u();d();R();L();c();u();d();R();var to=function(o,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return o.concat(i||Array.prototype.slice.call(e))},oo=function(o,e){var t=M([0,0]),r=t[0],n=t[1],i=M(!1),s=i[0],p=i[1],a=I(function(b){b.button===0&&(n([b.screenX,b.screenY]),p(!0))},[p,n]),l=I(function(b){var $=b.touches[0];n([$.screenX,$.screenY]),p(!0)},[p,n]),h=I(function(b){s&&n(function($){return o([b[0]-$[0],b[1]-$[1]]),b})},to([n,s],e,!0)),m=I(function(b){var $=b.screenX,A=b.screenY;h([$,A])},[h]),x=I(function(b){var $=b.touches[0],A=$.screenX,k=$.screenY;h([A,k])},to([n,s],e,!0)),_=I(function(){n([0,0]),p(!1)},[p,n]);return{onMouseDown:a,onMouseMove:m,onMouseUp:_,onMouseLeave:_,onTouchStart:l,onTouchMove:x,onTouchCancel:_,onTouchEnd:_}};var io=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},at=function(){return at=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},at.apply(this,arguments)},so=function(o){var e=o.children,t=o.className,r=o.style,n=o.defaultValue,i=o.value,s=o.onChange,p=M([0,0]),a=p[0],l=p[1];N(function(){l(n||i||[0,0])},[n]);var h=oo(function(x){s&&s(x),l(function(_){return[_[0]+x[0],_[1]+x[1]]})},[l,s]),m=W(function(){var x=i||a;return{transform:"translate(".concat(x[0],"px, ").concat(x[1],"px)")}},[i,a]);return f("div",at({css:$n,className:t,style:r},h),f("div",{css:Sn,style:m},e))};var $n=O(ro||(ro=io([`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`],[`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`]))),Sn=O(no||(no=io([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`]))),ro,no;c();u();d();R();L();U();var ao=function(o){var e=o.onZoomIn,t=o.onZoomOut,r=o.onReset;return f(E,null,f(Me,{onClick:e},f(Te,{icon:"zoom"})),f(Me,{onClick:t},f(Te,{icon:"zoomout"})),f(Me,{onClick:r},f(Te,{icon:"zoomreset"})))};c();u();d();R();var lo=function(o,e){var t=M(1),r=t[0],n=t[1];N(function(){n(o)},e);var i=I(function(){n(function(a){return a+.1})},[n]),s=I(function(){n(function(a){return Math.max(a-.1,.1)})},[n]),p=I(function(){n(1)},[n]);return{scale:r,zoomIn:i,zoomOut:s,resetZoom:p}};var lt=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},ho=function(o){var e=o.config,t=lo(e.scale||1,[e.scale]),r=W(function(){return{transform:"scale(".concat(t.scale,")")}},[t.scale]);return f("div",{css:En},f(Gt,{border:!0},f(E,{key:"left"},f("p",null,f("b",null,"Image")),f(Xt,null),f(ao,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),f(so,{css:An,defaultValue:e.offset},f("img",{css:kn,src:e.url,style:r})))};var En=O(co||(co=lt([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`]))),An=O(uo||(uo=lt([`
  flex-grow: 1;
`],[`
  flex-grow: 1;
`]))),kn=O(po||(po=lt([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`]))),co,uo,po;c();u();d();L();U();var Cn=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},mo=function(o){var e,t,r,n=o.config;return f("div",{css:Pn},f(oe,{cancel:!1,href:n.url,target:(e=n.target)!==null&&e!==void 0?e:"_blank",rel:(t=n.rel)!==null&&t!==void 0?t:"noopener",withArrow:(r=n.showArrow)!==null&&r!==void 0?r:!0},n.label||n.url))};var Pn=O(fo||(fo=Cn([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`]))),fo;c();u();d();U();L();R();Re();var ue=function(){return ue=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},ue.apply(this,arguments)},Mn=function(o){if(o.protocol!=="https:")return{valid:!1,error:f(E,null,"Expected HTTPS link, received ",f("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:f(E,null,"Expected a hostname ",f("code",null,"www.sketch.com"),", received"," ",f("code",null,o.hostname))};var e=f(E,null,"Expected pathname ",f("code",null,"/s/<string>/a/<string>"),", received"," ",f("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};var r=t[0],n=t[1],i=t[2],s=t[3];return r!=="s"||!n||i!=="a"||!s?{valid:!1,error:e}:{valid:!0,data:{url:"https://www.sketch.com/embed/s/".concat(n,"/a/").concat(s),offscreen:!1}}},go=function(o){var e=o.config,t=W(function(){var r=Mn(new URL(e.url));return r.valid?ue(ue({},r),{data:ue(ue({},e),r.data)}):r},[e]);return t.valid?f(ce,{defer:!0,config:t.data}):f(H,null,f(E,null,"Invalid Sketch URL"),f(E,null,t.error))};c();u();d();R();L();U();var vo=function(o){var e=o.tabs,t=o.deps,r=t===void 0?[]:t,n=M(e[0].id),i=n[0],s=n[1];return N(function(){s(e[0].id)},r),f(Kt,{absolute:!0,selected:i,actions:{onSelect:s}},e.map(function(p){return f("div",{key:p.id,id:p.id,title:p.name},p.offscreen||i===p.id?p.content:null)}))};var T=function(){return T=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},T.apply(this,arguments)},ci=function(o,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return o.concat(i||Array.prototype.slice.call(e))},ui=ot(function(){return Promise.resolve().then(()=>(Wr(),Yr))}),Zr=function(o){var e=o.config;if(!e||"length"in e&&e.length===0)return f(H,null,f(E,null,"No designs found"),f(E,null,"Learn how to"," ",f(oe,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var t=ci([],e instanceof Array?e:[e],!0).map(function(r){var n,i,s={id:JSON.stringify(r),name:r.name||((n=r.type)===null||n===void 0?void 0:n.toUpperCase())||"ERROR",offscreen:(i=r.offscreen)!==null&&i!==void 0?i:!0};switch(r.type){case"iframe":return T(T({},s),{content:f(ce,{config:r})});case"figma":return T(T({},s),{content:f(eo,{config:r}),offscreen:!1});case"sketch":return T(T({},s),{content:f(go,{config:r})});case"figspec":case"experimental-figspec":return r.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),T(T({},s),{content:f(tt,{fallback:"Preparing Figspec viewer..."},f(ui,{config:r})),offscreen:!1});case"image":return T(T({},s),{content:f(ho,{config:r})});case"link":return T(T({},s),{content:f(mo,{config:r})})}return T(T({},s),{content:f(H,null,f(E,null,"Invalid config type"),f(E,null,"Config type you set is not supported. Please choose one from"," ",f(oe,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})});return t.length===1?f("div",null,t[0].content):f(vo,{tabs:t,deps:[e]})};var Ft=function(o){var e=o.active,t=Wt(),r=Pe(le),n=M(e),i=n[0],s=n[1];return N(function(){s(e)},[r]),N(function(){e&&s(!0)},[e]),i?f(Zr,{key:t.storyId,config:r}):null};var ke="Design";function Ut(o){Ce.register(Oe,function(e){var t=function(){var r=Pe(le);return r?Array.isArray(r)?r.length>0?"".concat(ke," (").concat(r.length,")"):ke:(r.name||ke)+" (1)":ke};o==="tab"?Ce.add(Qe,{title:ke,render:function(r){var n=r.active,i=r.key;return n?f(rt,{key:i},f(Ft,{active:!0})):f("noscript",{key:i})},type:Yt.TAB,paramKey:le,route:function(r){var n=r.storyId;return"/design/".concat(n)},match:function(r){var n=r.viewMode;return n==="design"}}):Ce.addPanel(Qe,{title:t,paramKey:le,render:function(r){var n=r.active,i=r.key;return f(Zt,{key:i,active:!!n},f(rt,null,f(Ft,{active:!!n})))}})})}Ut("panel");
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
