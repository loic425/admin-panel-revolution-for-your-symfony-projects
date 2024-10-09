(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}})();function Rs(n,s){const t=Object.create(null),o=n.split(",");for(let l=0;l<o.length;l++)t[o[l]]=!0;return s?l=>!!t[l.toLowerCase()]:l=>!!t[l]}function Ze(n){if(ce(n)){const s={};for(let t=0;t<n.length;t++){const o=n[t],l=He(o)?Of(o):Ze(o);if(l)for(const r in l)s[r]=l[r]}return s}else{if(He(n))return n;if(Le(n))return n}}const $f=/;(?![^(]*\))/g,Tf=/:([^]+)/,jf=/\/\*.*?\*\//gs;function Of(n){const s={};return n.replace(jf,"").split($f).forEach(t=>{if(t){const o=t.split(Tf);o.length>1&&(s[o[0].trim()]=o[1].trim())}}),s}function Ue(n){let s="";if(He(n))s=n;else if(ce(n))for(let t=0;t<n.length;t++){const o=Ue(n[t]);o&&(s+=o+" ")}else if(Le(n))for(const t in n)n[t]&&(s+=t+" ");return s.trim()}function W(n){if(!n)return null;let{class:s,style:t}=n;return s&&!He(s)&&(n.class=Ue(s)),t&&(n.style=Ze(t)),n}const Pf="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",If="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ru=Rs(Pf),Lf=Rs(If),Nf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rf=Rs(Nf);function au(n){return!!n||n===""}const at=n=>He(n)?n:n==null?"":ce(n)||Le(n)&&(n.toString===uu||!ye(n.toString))?JSON.stringify(n,iu,2):String(n),iu=(n,s)=>s&&s.__v_isRef?iu(n,s.value):et(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((t,[o,l])=>(t[`${o} =>`]=l,t),{})}:pu(s)?{[`Set(${s.size})`]:[...s.values()]}:Le(s)&&!ce(s)&&!du(s)?String(s):s,Me=Object.freeze({}),wt=Object.freeze([]),vn=()=>{},cu=()=>!1,Mf=/^on[^a-z]/,Mo=n=>Mf.test(n),Bl=n=>n.startsWith("onUpdate:"),We=Object.assign,Ma=(n,s)=>{const t=n.indexOf(s);t>-1&&n.splice(t,1)},qf=Object.prototype.hasOwnProperty,be=(n,s)=>qf.call(n,s),ce=Array.isArray,et=n=>qo(n)==="[object Map]",pu=n=>qo(n)==="[object Set]",Gf=n=>qo(n)==="[object RegExp]",ye=n=>typeof n=="function",He=n=>typeof n=="string",qa=n=>typeof n=="symbol",Le=n=>n!==null&&typeof n=="object",Ga=n=>Le(n)&&ye(n.then)&&ye(n.catch),uu=Object.prototype.toString,qo=n=>uu.call(n),Ha=n=>qo(n).slice(8,-1),du=n=>qo(n)==="[object Object]",Va=n=>He(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ul=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hf=Rs("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Gl=n=>{const s=Object.create(null);return t=>s[t]||(s[t]=n(t))},Vf=/-(\w)/g,es=Gl(n=>n.replace(Vf,(s,t)=>t?t.toUpperCase():"")),Uf=/\B([A-Z])/g,ys=Gl(n=>n.replace(Uf,"-$1").toLowerCase()),it=Gl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Us=Gl(n=>n?`on${it(n)}`:""),Bo=(n,s)=>!Object.is(n,s),bs=(n,s)=>{for(let t=0;t<n.length;t++)n[t](s)},kl=(n,s,t)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:t})},Gr=n=>{const s=parseFloat(n);return isNaN(s)?n:s},Wf=n=>{const s=He(n)?Number(n):NaN;return isNaN(s)?n:s};let Gi;const yu=()=>Gi||(Gi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dl(n,...s){console.warn(`[Vue warn] ${n}`,...s)}let wn;class fu{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!s&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const t=wn;try{return wn=this,s()}finally{wn=t}}else Dl("cannot run an inactive effect scope.")}on(){wn=this}off(){wn=this.parent}stop(s){if(this._active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!s){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function zf(n){return new fu(n)}function Kf(n,s=wn){s&&s.active&&s.effects.push(n)}function Ua(){return wn}function mu(n){wn?wn.cleanups.push(n):Dl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Wa=n=>{const s=new Set(n);return s.w=0,s.n=0,s},hu=n=>(n.w&Is)>0,_u=n=>(n.n&Is)>0,Yf=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=Is},Xf=n=>{const{deps:s}=n;if(s.length){let t=0;for(let o=0;o<s.length;o++){const l=s[o];hu(l)&&!_u(l)?l.delete(n):s[t++]=l,l.w&=~Is,l.n&=~Is}s.length=t}},Cl=new WeakMap;let so=0,Is=1;const Hr=30;let yn;const nt=Symbol("iterate"),Vr=Symbol("Map key iterate");class za{constructor(s,t=null,o){this.fn=s,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Kf(this,o)}run(){if(!this.active)return this.fn();let s=yn,t=Ss;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=yn,yn=this,Ss=!0,Is=1<<++so,so<=Hr?Yf(this):Hi(this),this.fn()}finally{so<=Hr&&Xf(this),Is=1<<--so,yn=this.parent,Ss=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yn===this?this.deferStop=!0:this.active&&(Hi(this),this.onStop&&this.onStop(),this.active=!1)}}function Hi(n){const{deps:s}=n;if(s.length){for(let t=0;t<s.length;t++)s[t].delete(n);s.length=0}}let Ss=!0;const gu=[];function pt(){gu.push(Ss),Ss=!1}function ut(){const n=gu.pop();Ss=n===void 0?!0:n}function kn(n,s,t){if(Ss&&yn){let o=Cl.get(n);o||Cl.set(n,o=new Map);let l=o.get(t);l||o.set(t,l=Wa()),Au(l,{effect:yn,target:n,type:s,key:t})}}function Au(n,s){let t=!1;so<=Hr?_u(n)||(n.n|=Is,t=!hu(n)):t=!n.has(yn),t&&(n.add(yn),yn.deps.push(n),yn.onTrack&&yn.onTrack(Object.assign({effect:yn},s)))}function fs(n,s,t,o,l,r){const i=Cl.get(n);if(!i)return;let c=[];if(s==="clear")c=[...i.values()];else if(t==="length"&&ce(n)){const u=Number(o);i.forEach((d,y)=>{(y==="length"||y>=u)&&c.push(d)})}else switch(t!==void 0&&c.push(i.get(t)),s){case"add":ce(n)?Va(t)&&c.push(i.get("length")):(c.push(i.get(nt)),et(n)&&c.push(i.get(Vr)));break;case"delete":ce(n)||(c.push(i.get(nt)),et(n)&&c.push(i.get(Vr)));break;case"set":et(n)&&c.push(i.get(nt));break}const p={target:n,type:s,key:t,newValue:o,oldValue:l,oldTarget:r};if(c.length===1)c[0]&&Ur(c[0],p);else{const u=[];for(const d of c)d&&u.push(...d);Ur(Wa(u),p)}}function Ur(n,s){const t=ce(n)?n:[...n];for(const o of t)o.computed&&Vi(o,s);for(const o of t)o.computed||Vi(o,s)}function Vi(n,s){(n!==yn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(We({effect:n},s)),n.scheduler?n.scheduler():n.run())}function Zf(n,s){var t;return(t=Cl.get(n))===null||t===void 0?void 0:t.get(s)}const Jf=Rs("__proto__,__v_isRef,__isVue"),vu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qa)),Qf=Hl(),em=Hl(!1,!0),nm=Hl(!0),sm=Hl(!0,!0),Ui=tm();function tm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...t){const o=fe(this);for(let r=0,i=this.length;r<i;r++)kn(o,"get",r+"");const l=o[s](...t);return l===-1||l===!1?o[s](...t.map(fe)):l}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...t){pt();const o=fe(this)[s].apply(this,t);return ut(),o}}),n}function om(n){const s=fe(this);return kn(s,"has",n),s.hasOwnProperty(n)}function Hl(n=!1,s=!1){return function(o,l,r){if(l==="__v_isReactive")return!n;if(l==="__v_isReadonly")return n;if(l==="__v_isShallow")return s;if(l==="__v_raw"&&r===(n?s?xu:Eu:s?wu:bu).get(o))return o;const i=ce(o);if(!n){if(i&&be(Ui,l))return Reflect.get(Ui,l,r);if(l==="hasOwnProperty")return om}const c=Reflect.get(o,l,r);return(qa(l)?vu.has(l):Jf(l))||(n||kn(o,"get",l),s)?c:Te(c)?i&&Va(l)?c:c.value:Le(c)?n?Zn(c):Ve(c):c}}const lm=Bu(),rm=Bu(!0);function Bu(n=!1){return function(t,o,l,r){let i=t[o];if(Ls(i)&&Te(i)&&!Te(l))return!1;if(!n&&(!bl(l)&&!Ls(l)&&(i=fe(i),l=fe(l)),!ce(t)&&Te(i)&&!Te(l)))return i.value=l,!0;const c=ce(t)&&Va(o)?Number(o)<t.length:be(t,o),p=Reflect.set(t,o,l,r);return t===fe(r)&&(c?Bo(l,i)&&fs(t,"set",o,l,i):fs(t,"add",o,l)),p}}function am(n,s){const t=be(n,s),o=n[s],l=Reflect.deleteProperty(n,s);return l&&t&&fs(n,"delete",s,void 0,o),l}function im(n,s){const t=Reflect.has(n,s);return(!qa(s)||!vu.has(s))&&kn(n,"has",s),t}function cm(n){return kn(n,"iterate",ce(n)?"length":nt),Reflect.ownKeys(n)}const ku={get:Qf,set:lm,deleteProperty:am,has:im,ownKeys:cm},Du={get:nm,set(n,s){return Dl(`Set operation on key "${String(s)}" failed: target is readonly.`,n),!0},deleteProperty(n,s){return Dl(`Delete operation on key "${String(s)}" failed: target is readonly.`,n),!0}},pm=We({},ku,{get:em,set:rm}),um=We({},Du,{get:sm}),Ka=n=>n,Vl=n=>Reflect.getPrototypeOf(n);function Jo(n,s,t=!1,o=!1){n=n.__v_raw;const l=fe(n),r=fe(s);t||(s!==r&&kn(l,"get",s),kn(l,"get",r));const{has:i}=Vl(l),c=o?Ka:t?Ya:ko;if(i.call(l,s))return c(n.get(s));if(i.call(l,r))return c(n.get(r));n!==l&&n.get(s)}function Qo(n,s=!1){const t=this.__v_raw,o=fe(t),l=fe(n);return s||(n!==l&&kn(o,"has",n),kn(o,"has",l)),n===l?t.has(n):t.has(n)||t.has(l)}function el(n,s=!1){return n=n.__v_raw,!s&&kn(fe(n),"iterate",nt),Reflect.get(n,"size",n)}function Wi(n){n=fe(n);const s=fe(this);return Vl(s).has.call(s,n)||(s.add(n),fs(s,"add",n,n)),this}function zi(n,s){s=fe(s);const t=fe(this),{has:o,get:l}=Vl(t);let r=o.call(t,n);r?Cu(t,o,n):(n=fe(n),r=o.call(t,n));const i=l.call(t,n);return t.set(n,s),r?Bo(s,i)&&fs(t,"set",n,s,i):fs(t,"add",n,s),this}function Ki(n){const s=fe(this),{has:t,get:o}=Vl(s);let l=t.call(s,n);l?Cu(s,t,n):(n=fe(n),l=t.call(s,n));const r=o?o.call(s,n):void 0,i=s.delete(n);return l&&fs(s,"delete",n,void 0,r),i}function Yi(){const n=fe(this),s=n.size!==0,t=et(n)?new Map(n):new Set(n),o=n.clear();return s&&fs(n,"clear",void 0,void 0,t),o}function nl(n,s){return function(o,l){const r=this,i=r.__v_raw,c=fe(i),p=s?Ka:n?Ya:ko;return!n&&kn(c,"iterate",nt),i.forEach((u,d)=>o.call(l,p(u),p(d),r))}}function sl(n,s,t){return function(...o){const l=this.__v_raw,r=fe(l),i=et(r),c=n==="entries"||n===Symbol.iterator&&i,p=n==="keys"&&i,u=l[n](...o),d=t?Ka:s?Ya:ko;return!s&&kn(r,"iterate",p?Vr:nt),{next(){const{value:y,done:f}=u.next();return f?{value:y,done:f}:{value:c?[d(y[0]),d(y[1])]:d(y),done:f}},[Symbol.iterator](){return this}}}}function gs(n){return function(...s){{const t=s[0]?`on key "${s[0]}" `:"";console.warn(`${it(n)} operation ${t}failed: target is readonly.`,fe(this))}return n==="delete"?!1:this}}function dm(){const n={get(r){return Jo(this,r)},get size(){return el(this)},has:Qo,add:Wi,set:zi,delete:Ki,clear:Yi,forEach:nl(!1,!1)},s={get(r){return Jo(this,r,!1,!0)},get size(){return el(this)},has:Qo,add:Wi,set:zi,delete:Ki,clear:Yi,forEach:nl(!1,!0)},t={get(r){return Jo(this,r,!0)},get size(){return el(this,!0)},has(r){return Qo.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:nl(!0,!1)},o={get(r){return Jo(this,r,!0,!0)},get size(){return el(this,!0)},has(r){return Qo.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:nl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=sl(r,!1,!1),t[r]=sl(r,!0,!1),s[r]=sl(r,!1,!0),o[r]=sl(r,!0,!0)}),[n,t,s,o]}const[ym,fm,mm,hm]=dm();function Ul(n,s){const t=s?n?hm:mm:n?fm:ym;return(o,l,r)=>l==="__v_isReactive"?!n:l==="__v_isReadonly"?n:l==="__v_raw"?o:Reflect.get(be(t,l)&&l in o?t:o,l,r)}const _m={get:Ul(!1,!1)},gm={get:Ul(!1,!0)},Am={get:Ul(!0,!1)},vm={get:Ul(!0,!0)};function Cu(n,s,t){const o=fe(t);if(o!==t&&s.call(n,o)){const l=Ha(n);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const bu=new WeakMap,wu=new WeakMap,Eu=new WeakMap,xu=new WeakMap;function Bm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function km(n){return n.__v_skip||!Object.isExtensible(n)?0:Bm(Ha(n))}function Ve(n){return Ls(n)?n:Wl(n,!1,ku,_m,bu)}function Dm(n){return Wl(n,!1,pm,gm,wu)}function Zn(n){return Wl(n,!0,Du,Am,Eu)}function Ct(n){return Wl(n,!0,um,vm,xu)}function Wl(n,s,t,o,l){if(!Le(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(s&&n.__v_isReactive))return n;const r=l.get(n);if(r)return r;const i=km(n);if(i===0)return n;const c=new Proxy(n,i===2?o:t);return l.set(n,c),c}function st(n){return Ls(n)?st(n.__v_raw):!!(n&&n.__v_isReactive)}function Ls(n){return!!(n&&n.__v_isReadonly)}function bl(n){return!!(n&&n.__v_isShallow)}function wl(n){return st(n)||Ls(n)}function fe(n){const s=n&&n.__v_raw;return s?fe(s):n}function zl(n){return kl(n,"__v_skip",!0),n}const ko=n=>Le(n)?Ve(n):n,Ya=n=>Le(n)?Zn(n):n;function Xa(n){Ss&&yn&&(n=fe(n),Au(n.dep||(n.dep=Wa()),{target:n,type:"get",key:"value"}))}function Za(n,s){n=fe(n);const t=n.dep;t&&Ur(t,{target:n,type:"set",key:"value",newValue:s})}function Te(n){return!!(n&&n.__v_isRef===!0)}function Q(n){return Su(n,!1)}function ns(n){return Su(n,!0)}function Su(n,s){return Te(n)?n:new Cm(n,s)}class Cm{constructor(s,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?s:fe(s),this._value=t?s:ko(s)}get value(){return Xa(this),this._value}set value(s){const t=this.__v_isShallow||bl(s)||Ls(s);s=t?s:fe(s),Bo(s,this._rawValue)&&(this._rawValue=s,this._value=t?s:ko(s),Za(this,s))}}function b(n){return Te(n)?n.value:n}const bm={get:(n,s,t)=>b(Reflect.get(n,s,t)),set:(n,s,t,o)=>{const l=n[s];return Te(l)&&!Te(t)?(l.value=t,!0):Reflect.set(n,s,t,o)}};function Fu(n){return st(n)?n:new Proxy(n,bm)}class wm{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:o}=s(()=>Xa(this),()=>Za(this));this._get=t,this._set=o}get value(){return this._get()}set value(s){this._set(s)}}function $u(n){return new wm(n)}function Em(n){wl(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=ce(n)?new Array(n.length):{};for(const t in n)s[t]=Sm(n,t);return s}class xm{constructor(s,t,o){this._object=s,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return Zf(fe(this._object),this._key)}}function Sm(n,s,t){const o=n[s];return Te(o)?o:new xm(n,s,t)}var Tu;class Fm{constructor(s,t,o,l){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Tu]=!1,this._dirty=!0,this.effect=new za(s,()=>{this._dirty||(this._dirty=!0,Za(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const s=fe(this);return Xa(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}Tu="__v_isReadonly";function $m(n,s,t=!1){let o,l;const r=ye(n);r?(o=n,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,l=n.set);const i=new Fm(o,l,r||!l,t);return s&&!t&&(i.effect.onTrack=s.onTrack,i.effect.onTrigger=s.onTrigger),i}const tt=[];function dl(n){tt.push(n)}function yl(){tt.pop()}function q(n,...s){pt();const t=tt.length?tt[tt.length-1].component:null,o=t&&t.appContext.config.warnHandler,l=Tm();if(o)us(o,t,11,[n+s.join(""),t&&t.proxy,l.map(({vnode:r})=>`at <${or(t,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${n}`,...s];l.length&&r.push(`
`,...jm(l)),console.warn(...r)}ut()}function Tm(){let n=tt[tt.length-1];if(!n)return[];const s=[];for(;n;){const t=s[0];t&&t.vnode===n?t.recurseCount++:s.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return s}function jm(n){const s=[];return n.forEach((t,o)=>{s.push(...o===0?[]:[`
`],...Om(t))}),s}function Om({vnode:n,recurseCount:s}){const t=s>0?`... (${s} recursive calls)`:"",o=n.component?n.component.parent==null:!1,l=` at <${or(n.component,n.type,o)}`,r=">"+t;return n.props?[l,...Pm(n.props),r]:[l+r]}function Pm(n){const s=[],t=Object.keys(n);return t.slice(0,3).forEach(o=>{s.push(...ju(o,n[o]))}),t.length>3&&s.push(" ..."),s}function ju(n,s,t){return He(s)?(s=JSON.stringify(s),t?s:[`${n}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?t?s:[`${n}=${s}`]:Te(s)?(s=ju(n,fe(s.value),!0),t?s:[`${n}=Ref<`,s,">"]):ye(s)?[`${n}=fn${s.name?`<${s.name}>`:""}`]:(s=fe(s),t?s:[`${n}=`,s])}function Im(n,s){n!==void 0&&(typeof n!="number"?q(`${s} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&q(`${s} is NaN - the duration expression might be incorrect.`))}const Ja={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function us(n,s,t,o){let l;try{l=o?n(...o):n()}catch(r){Kl(r,s,t)}return l}function In(n,s,t,o){if(ye(n)){const r=us(n,s,t,o);return r&&Ga(r)&&r.catch(i=>{Kl(i,s,t)}),r}const l=[];for(let r=0;r<n.length;r++)l.push(In(n[r],s,t,o));return l}function Kl(n,s,t,o=!0){const l=s?s.vnode:null;if(s){let r=s.parent;const i=s.proxy,c=Ja[t];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,i,c)===!1)return}r=r.parent}const p=s.appContext.config.errorHandler;if(p){us(p,null,10,[n,i,c]);return}}Lm(n,t,l,o)}function Lm(n,s,t,o=!0){{const l=Ja[s];if(t&&dl(t),q(`Unhandled error${l?` during execution of ${l}`:""}`),t&&yl(),o)throw n;console.error(n)}}let Do=!1,Wr=!1;const rn=[];let Yn=0;const Et=[];let Kn=null,ks=0;const Ou=Promise.resolve();let Qa=null;const Nm=100;function tn(n){const s=Qa||Ou;return n?s.then(this?n.bind(this):n):s}function Rm(n){let s=Yn+1,t=rn.length;for(;s<t;){const o=s+t>>>1;Co(rn[o])<n?s=o+1:t=o}return s}function Yl(n){(!rn.length||!rn.includes(n,Do&&n.allowRecurse?Yn+1:Yn))&&(n.id==null?rn.push(n):rn.splice(Rm(n.id),0,n),Pu())}function Pu(){!Do&&!Wr&&(Wr=!0,Qa=Ou.then(Nu))}function Mm(n){const s=rn.indexOf(n);s>Yn&&rn.splice(s,1)}function Iu(n){ce(n)?Et.push(...n):(!Kn||!Kn.includes(n,n.allowRecurse?ks+1:ks))&&Et.push(n),Pu()}function Xi(n,s=Do?Yn+1:0){for(n=n||new Map;s<rn.length;s++){const t=rn[s];if(t&&t.pre){if(ei(n,t))continue;rn.splice(s,1),s--,t()}}}function Lu(n){if(Et.length){const s=[...new Set(Et)];if(Et.length=0,Kn){Kn.push(...s);return}for(Kn=s,n=n||new Map,Kn.sort((t,o)=>Co(t)-Co(o)),ks=0;ks<Kn.length;ks++)ei(n,Kn[ks])||Kn[ks]();Kn=null,ks=0}}const Co=n=>n.id==null?1/0:n.id,qm=(n,s)=>{const t=Co(n)-Co(s);if(t===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return t};function Nu(n){Wr=!1,Do=!0,n=n||new Map,rn.sort(qm);const s=t=>ei(n,t);try{for(Yn=0;Yn<rn.length;Yn++){const t=rn[Yn];if(t&&t.active!==!1){if(s(t))continue;us(t,null,14)}}}finally{Yn=0,rn.length=0,Lu(n),Do=!1,Qa=null,(rn.length||Et.length)&&Nu(n)}}function ei(n,s){if(!n.has(s))n.set(s,1);else{const t=n.get(s);if(t>Nm){const o=s.ownerInstance,l=o&&xo(o.type);return q(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(s,t+1)}}let Fs=!1;const Bt=new Set;yu().__VUE_HMR_RUNTIME__={createRecord:pr(Ru),rerender:pr(Vm),reload:pr(Um)};const ct=new Map;function Gm(n){const s=n.type.__hmrId;let t=ct.get(s);t||(Ru(s,n.type),t=ct.get(s)),t.instances.add(n)}function Hm(n){ct.get(n.type.__hmrId).instances.delete(n)}function Ru(n,s){return ct.has(n)?!1:(ct.set(n,{initialDef:ao(s),instances:new Set}),!0)}function ao(n){return gd(n)?n.__vccOpts:n}function Vm(n,s){const t=ct.get(n);t&&(t.initialDef.render=s,[...t.instances].forEach(o=>{s&&(o.render=s,ao(o.type).render=s),o.renderCache=[],Fs=!0,o.update(),Fs=!1}))}function Um(n,s){const t=ct.get(n);if(!t)return;s=ao(s),Zi(t.initialDef,s);const o=[...t.instances];for(const l of o){const r=ao(l.type);Bt.has(r)||(r!==t.initialDef&&Zi(r,s),Bt.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(Bt.add(r),l.ceReload(s.styles),Bt.delete(r)):l.parent?Yl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Iu(()=>{for(const l of o)Bt.delete(ao(l.type))})}function Zi(n,s){We(n,s);for(const t in n)t!=="__file"&&!(t in s)&&delete n[t]}function pr(n){return(s,t)=>{try{return n(s,t)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xn,to=[],zr=!1;function Go(n,...s){Xn?Xn.emit(n,...s):zr||to.push({event:n,args:s})}function Mu(n,s){var t,o;Xn=n,Xn?(Xn.enabled=!0,to.forEach(({event:l,args:r})=>Xn.emit(l,...r)),to=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(t=window.navigator)===null||t===void 0?void 0:t.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Mu(r,s)}),setTimeout(()=>{Xn||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,zr=!0,to=[])},3e3)):(zr=!0,to=[])}function Wm(n,s){Go("app:init",n,s,{Fragment:je,Text:Uo,Comment:en,Static:fl})}function zm(n){Go("app:unmount",n)}const Kr=ni("component:added"),qu=ni("component:updated"),Km=ni("component:removed"),Ym=n=>{Xn&&typeof Xn.cleanupBuffer=="function"&&!Xn.cleanupBuffer(n)&&Km(n)};function ni(n){return s=>{Go(n,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const Xm=Gu("perf:start"),Zm=Gu("perf:end");function Gu(n){return(s,t,o)=>{Go(n,s.appContext.app,s.uid,s,t,o)}}function Jm(n,s,t){Go("component:emit",n.appContext.app,n,s,t)}function Qm(n,s,...t){if(n.isUnmounted)return;const o=n.vnode.props||Me;{const{emitsOptions:d,propsOptions:[y]}=n;if(d)if(!(s in d))(!y||!(Us(s)in y))&&q(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${Us(s)}" prop.`);else{const f=d[s];ye(f)&&(f(...t)||q(`Invalid event arguments: event validation failed for event "${s}".`))}}let l=t;const r=s.startsWith("update:"),i=r&&s.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:f}=o[d]||Me;f&&(l=t.map(h=>He(h)?h.trim():h)),y&&(l=t.map(Gr))}Jm(n,s,l);{const d=s.toLowerCase();d!==s&&o[Us(d)]&&q(`Event "${d}" is emitted in component ${or(n,n.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ys(s)}" instead of "${s}".`)}let c,p=o[c=Us(s)]||o[c=Us(es(s))];!p&&r&&(p=o[c=Us(ys(s))]),p&&In(p,n,6,l);const u=o[c+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,In(u,n,6,l)}}function Hu(n,s,t=!1){const o=s.emitsCache,l=o.get(n);if(l!==void 0)return l;const r=n.emits;let i={},c=!1;if(!ye(n)){const p=u=>{const d=Hu(u,s,!0);d&&(c=!0,We(i,d))};!t&&s.mixins.length&&s.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!r&&!c?(Le(n)&&o.set(n,null),null):(ce(r)?r.forEach(p=>i[p]=null):We(i,r),Le(n)&&o.set(n,i),i)}function Xl(n,s){return!n||!Mo(s)?!1:(s=s.slice(2).replace(/Once$/,""),be(n,s[0].toLowerCase()+s.slice(1))||be(n,ys(s))||be(n,s))}let Qe=null,Zl=null;function El(n){const s=Qe;return Qe=n,Zl=n&&n.type.__scopeId||null,s}function gF(n){Zl=n}function AF(){Zl=null}function E(n,s=Qe,t){if(!s||n._n)return n;const o=(...l)=>{o._d&&uc(-1);const r=El(s);let i;try{i=n(...l)}finally{El(r),o._d&&uc(1)}return qu(s),i};return o._n=!0,o._c=!0,o._d=!0,o}let Yr=!1;function xl(){Yr=!0}function ur(n){const{type:s,vnode:t,proxy:o,withProxy:l,props:r,propsOptions:[i],slots:c,attrs:p,emit:u,render:d,renderCache:y,data:f,setupState:h,ctx:m,inheritAttrs:A}=n;let v,w;const k=El(n);Yr=!1;try{if(t.shapeFlag&4){const L=l||o;v=Gn(d.call(L,L,y,r,h,f,m)),w=p}else{const L=s;p===r&&xl(),v=Gn(L.length>1?L(r,{get attrs(){return xl(),p},slots:c,emit:u}):L(r,null)),w=s.props?p:n8(p)}}catch(L){co.length=0,Kl(L,n,1),v=M(en)}let D=v,x;if(v.patchFlag>0&&v.patchFlag&2048&&([D,x]=e8(v)),w&&A!==!1){const L=Object.keys(w),{shapeFlag:G}=D;if(L.length){if(G&7)i&&L.some(Bl)&&(w=s8(w,i)),D=Vn(D,w);else if(!Yr&&D.type!==en){const X=Object.keys(p),I=[],K=[];for(let oe=0,ue=X.length;oe<ue;oe++){const ee=X[oe];Mo(ee)?Bl(ee)||I.push(ee[2].toLowerCase()+ee.slice(3)):K.push(ee)}K.length&&q(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),I.length&&q(`Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return t.dirs&&(Ji(D)||q("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Vn(D),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&(Ji(D)||q("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=t.transition),x?x(D):v=D,El(k),v}const e8=n=>{const s=n.children,t=n.dynamicChildren,o=Vu(s);if(!o)return[n,void 0];const l=s.indexOf(o),r=t?t.indexOf(o):-1,i=c=>{s[l]=c,t&&(r>-1?t[r]=c:c.patchFlag>0&&(n.dynamicChildren=[...t,c]))};return[Gn(o),i]};function Vu(n){let s;for(let t=0;t<n.length;t++){const o=n[t];if(ms(o)){if(o.type!==en||o.children==="v-if"){if(s)return;s=o}}else return}return s}const n8=n=>{let s;for(const t in n)(t==="class"||t==="style"||Mo(t))&&((s||(s={}))[t]=n[t]);return s},s8=(n,s)=>{const t={};for(const o in n)(!Bl(o)||!(o.slice(9)in s))&&(t[o]=n[o]);return t},Ji=n=>n.shapeFlag&7||n.type===en;function t8(n,s,t){const{props:o,children:l,component:r}=n,{props:i,children:c,patchFlag:p}=s,u=r.emitsOptions;if((l||c)&&Fs||s.dirs||s.transition)return!0;if(t&&p>=0){if(p&1024)return!0;if(p&16)return o?Qi(o,i,u):!!i;if(p&8){const d=s.dynamicProps;for(let y=0;y<d.length;y++){const f=d[y];if(i[f]!==o[f]&&!Xl(u,f))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?Qi(o,i,u):!0:!!i;return!1}function Qi(n,s,t){const o=Object.keys(s);if(o.length!==Object.keys(n).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(s[r]!==n[r]&&!Xl(t,r))return!0}return!1}function o8({vnode:n,parent:s},t){for(;s&&s.subTree===n;)(n=s.vnode).el=t,s=s.parent}const Uu=n=>n.__isSuspense;function l8(n,s){s&&s.pendingBranch?ce(n)?s.effects.push(...n):s.effects.push(n):Iu(n)}function En(n,s){if(!ze)q("provide() can only be used inside setup().");else{let t=ze.provides;const o=ze.parent&&ze.parent.provides;o===t&&(t=ze.provides=Object.create(o)),t[n]=s}}function F(n,s,t=!1){const o=ze||Qe;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&n in l)return l[n];if(arguments.length>1)return t&&ye(s)?s.call(o.proxy):s;q(`injection "${String(n)}" not found.`)}else q("inject() can only be used inside setup() or functional components.")}function dt(n,s){return si(n,null,s)}const tl={};function ve(n,s,t){return ye(s)||q("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),si(n,s,t)}function si(n,s,{immediate:t,deep:o,flush:l,onTrack:r,onTrigger:i}=Me){s||(t!==void 0&&q('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&q('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=x=>{q("Invalid watch source: ",x,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Ua()===(ze==null?void 0:ze.scope)?ze:null;let u,d=!1,y=!1;if(Te(n)?(u=()=>n.value,d=bl(n)):st(n)?(u=()=>n,o=!0):ce(n)?(y=!0,d=n.some(x=>st(x)||bl(x)),u=()=>n.map(x=>{if(Te(x))return x.value;if(st(x))return Zs(x);if(ye(x))return us(x,p,2);c(x)})):ye(n)?s?u=()=>us(n,p,2):u=()=>{if(!(p&&p.isUnmounted))return f&&f(),In(n,p,3,[h])}:(u=vn,c(n)),s&&o){const x=u;u=()=>Zs(x())}let f,h=x=>{f=k.onStop=()=>{us(x,p,4)}},m;if(Eo)if(h=vn,s?t&&In(s,p,3,[u(),y?[]:void 0,h]):u(),l==="sync"){const x=uh();m=x.__watcherHandles||(x.__watcherHandles=[])}else return vn;let A=y?new Array(n.length).fill(tl):tl;const v=()=>{if(k.active)if(s){const x=k.run();(o||d||(y?x.some((L,G)=>Bo(L,A[G])):Bo(x,A)))&&(f&&f(),In(s,p,3,[x,A===tl?void 0:y&&A[0]===tl?[]:A,h]),A=x)}else k.run()};v.allowRecurse=!!s;let w;l==="sync"?w=v:l==="post"?w=()=>sn(v,p&&p.suspense):(v.pre=!0,p&&(v.id=p.uid),w=()=>Yl(v));const k=new za(u,w);k.onTrack=r,k.onTrigger=i,s?t?v():A=k.run():l==="post"?sn(k.run.bind(k),p&&p.suspense):k.run();const D=()=>{k.stop(),p&&p.scope&&Ma(p.scope.effects,k)};return m&&m.push(D),D}function r8(n,s,t){const o=this.proxy,l=He(n)?n.includes(".")?Wu(o,n):()=>o[n]:n.bind(o,o);let r;ye(s)?r=s:(r=s.handler,t=s);const i=ze;Pt(this);const c=si(l,r.bind(o),t);return i?Pt(i):lt(),c}function Wu(n,s){const t=s.split(".");return()=>{let o=n;for(let l=0;l<t.length&&o;l++)o=o[t[l]];return o}}function Zs(n,s){if(!Le(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),Te(n))Zs(n.value,s);else if(ce(n))for(let t=0;t<n.length;t++)Zs(n[t],s);else if(pu(n)||et(n))n.forEach(t=>{Zs(t,s)});else if(du(n))for(const t in n)Zs(n[t],s);return n}function zu(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yt(()=>{n.isMounted=!0}),Vo(()=>{n.isUnmounting=!0}),n}const Tn=[Function,Array],a8={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},setup(n,{slots:s}){const t=$n(),o=zu();let l;return()=>{const r=s.default&&ti(s.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){let A=!1;for(const v of r)if(v.type!==en){if(A){q("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=v,A=!0}}const c=fe(n),{mode:p}=c;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&q(`invalid <transition> mode: ${p}`),o.isLeaving)return dr(i);const u=ec(i);if(!u)return dr(i);const d=bo(u,c,o,t);jt(u,d);const y=t.subTree,f=y&&ec(y);let h=!1;const{getTransitionKey:m}=u.type;if(m){const A=m();l===void 0?l=A:A!==l&&(l=A,h=!0)}if(f&&f.type!==en&&(!Es(u,f)||h)){const A=bo(f,c,o,t);if(jt(f,A),p==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,t.update.active!==!1&&t.update()},dr(i);p==="in-out"&&u.type!==en&&(A.delayLeave=(v,w,k)=>{const D=Ku(o,f);D[String(f.key)]=f,v._leaveCb=()=>{w(),v._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=k})}return i}}},i8=a8;function Ku(n,s){const{leavingVNodes:t}=n;let o=t.get(s.type);return o||(o=Object.create(null),t.set(s.type,o)),o}function bo(n,s,t,o){const{appear:l,mode:r,persisted:i=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:y,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:A,onAppear:v,onAfterAppear:w,onAppearCancelled:k}=s,D=String(n.key),x=Ku(t,n),L=(I,K)=>{I&&In(I,o,9,K)},G=(I,K)=>{const oe=K[1];L(I,K),ce(I)?I.every(ue=>ue.length<=1)&&oe():I.length<=1&&oe()},X={mode:r,persisted:i,beforeEnter(I){let K=c;if(!t.isMounted)if(l)K=A||c;else return;I._leaveCb&&I._leaveCb(!0);const oe=x[D];oe&&Es(n,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),L(K,[I])},enter(I){let K=p,oe=u,ue=d;if(!t.isMounted)if(l)K=v||p,oe=w||u,ue=k||d;else return;let ee=!1;const De=I._enterCb=Oe=>{ee||(ee=!0,Oe?L(ue,[I]):L(oe,[I]),X.delayedLeave&&X.delayedLeave(),I._enterCb=void 0)};K?G(K,[I,De]):De()},leave(I,K){const oe=String(n.key);if(I._enterCb&&I._enterCb(!0),t.isUnmounting)return K();L(y,[I]);let ue=!1;const ee=I._leaveCb=De=>{ue||(ue=!0,K(),De?L(m,[I]):L(h,[I]),I._leaveCb=void 0,x[oe]===n&&delete x[oe])};x[oe]=n,f?G(f,[I,ee]):ee()},clone(I){return bo(I,s,t,o)}};return X}function dr(n){if(Ho(n))return n=Vn(n),n.children=null,n}function ec(n){return Ho(n)?n.children?n.children[0]:void 0:n}function jt(n,s){n.shapeFlag&6&&n.component?jt(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function ti(n,s=!1,t){let o=[],l=0;for(let r=0;r<n.length;r++){let i=n[r];const c=t==null?i.key:String(t)+String(i.key!=null?i.key:r);i.type===je?(i.patchFlag&128&&l++,o=o.concat(ti(i.children,s,c))):(s||i.type!==en)&&o.push(c!=null?Vn(i,{key:c}):i)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function we(n){return ye(n)?{setup:n,name:n.name}:n}const xt=n=>!!n.type.__asyncLoader,Ho=n=>n.type.__isKeepAlive,c8={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:s}){const t=$n(),o=t.ctx;if(!o.renderer)return()=>{const k=s.default&&s.default();return k&&k.length===1?k[0]:k};const l=new Map,r=new Set;let i=null;t.__v_cache=l;const c=t.suspense,{renderer:{p,m:u,um:d,o:{createElement:y}}}=o,f=y("div");o.activate=(k,D,x,L,G)=>{const X=k.component;u(k,D,x,0,c),p(X.vnode,k,D,x,X,c,L,k.slotScopeIds,G),sn(()=>{X.isDeactivated=!1,X.a&&bs(X.a);const I=k.props&&k.props.onVnodeMounted;I&&jn(I,X.parent,k)},c),Kr(X)},o.deactivate=k=>{const D=k.component;u(k,f,null,1,c),sn(()=>{D.da&&bs(D.da);const x=k.props&&k.props.onVnodeUnmounted;x&&jn(x,D.parent,k),D.isDeactivated=!0},c),Kr(D)};function h(k){yr(k),d(k,t,c,!0)}function m(k){l.forEach((D,x)=>{const L=xo(D.type);L&&(!k||!k(L))&&A(x)})}function A(k){const D=l.get(k);!i||!Es(D,i)?h(D):i&&yr(i),l.delete(k),r.delete(k)}ve(()=>[n.include,n.exclude],([k,D])=>{k&&m(x=>oo(k,x)),D&&m(x=>!oo(D,x))},{flush:"post",deep:!0});let v=null;const w=()=>{v!=null&&l.set(v,fr(t.subTree))};return yt(w),Ql(w),Vo(()=>{l.forEach(k=>{const{subTree:D,suspense:x}=t,L=fr(D);if(k.type===L.type&&k.key===L.key){yr(L);const G=L.component.da;G&&sn(G,x);return}h(k)})}),()=>{if(v=null,!s.default)return null;const k=s.default(),D=k[0];if(k.length>1)return q("KeepAlive should contain exactly one component child."),i=null,k;if(!ms(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return i=null,D;let x=fr(D);const L=x.type,G=xo(xt(x)?x.type.__asyncResolved||{}:L),{include:X,exclude:I,max:K}=n;if(X&&(!G||!oo(X,G))||I&&G&&oo(I,G))return i=x,D;const oe=x.key==null?L:x.key,ue=l.get(oe);return x.el&&(x=Vn(x),D.shapeFlag&128&&(D.ssContent=x)),v=oe,ue?(x.el=ue.el,x.component=ue.component,x.transition&&jt(x,x.transition),x.shapeFlag|=512,r.delete(oe),r.add(oe)):(r.add(oe),K&&r.size>parseInt(K,10)&&A(r.values().next().value)),x.shapeFlag|=256,i=x,Uu(D.type)?D:x}}},Yu=c8;function oo(n,s){return ce(n)?n.some(t=>oo(t,s)):He(n)?n.split(",").includes(s):Gf(n)?n.test(s):!1}function Xu(n,s){Ju(n,"a",s)}function Zu(n,s){Ju(n,"da",s)}function Ju(n,s,t=ze){const o=n.__wdc||(n.__wdc=()=>{let l=t;for(;l;){if(l.isDeactivated)return;l=l.parent}return n()});if(Jl(s,o,t),t){let l=t.parent;for(;l&&l.parent;)Ho(l.parent.vnode)&&p8(o,s,t,l),l=l.parent}}function p8(n,s,t,o){const l=Jl(s,n,o,!0);er(()=>{Ma(o[s],l)},t)}function yr(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function fr(n){return n.shapeFlag&128?n.ssContent:n}function Jl(n,s,t=ze,o=!1){if(t){const l=t[n]||(t[n]=[]),r=s.__weh||(s.__weh=(...i)=>{if(t.isUnmounted)return;pt(),Pt(t);const c=In(s,t,n,i);return lt(),ut(),c});return o?l.unshift(r):l.push(r),r}else{const l=Us(Ja[n].replace(/ hook$/,""));q(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const hs=n=>(s,t=ze)=>(!Eo||n==="sp")&&Jl(n,(...o)=>s(...o),t),u8=hs("bm"),yt=hs("m"),d8=hs("bu"),Ql=hs("u"),Vo=hs("bum"),er=hs("um"),y8=hs("sp"),f8=hs("rtg"),m8=hs("rtc");function h8(n,s=ze){Jl("ec",n,s)}function Qu(n){Hf(n)&&q("Do not use built-in directive ids as custom directive id: "+n)}function nr(n,s){const t=Qe;if(t===null)return q("withDirectives can only be used inside render functions."),n;const o=tr(t)||t.proxy,l=n.dirs||(n.dirs=[]);for(let r=0;r<s.length;r++){let[i,c,p,u=Me]=s[r];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&Zs(c),l.push({dir:i,instance:o,value:c,oldValue:void 0,arg:p,modifiers:u}))}return n}function Ms(n,s,t,o){const l=n.dirs,r=s&&s.dirs;for(let i=0;i<l.length;i++){const c=l[i];r&&(c.oldValue=r[i].value);let p=c.dir[o];p&&(pt(),In(p,t,8,[n.el,c,n,s]),ut())}}const Xr="components",_8="directives";function Ot(n,s){return ed(Xr,n,!0,s)||n}const g8=Symbol();function nc(n){return ed(_8,n)}function ed(n,s,t=!0,o=!1){const l=Qe||ze;if(l){const r=l.type;if(n===Xr){const c=xo(r,!1);if(c&&(c===s||c===es(s)||c===it(es(s))))return r}const i=sc(l[n]||r[n],s)||sc(l.appContext[n],s);if(!i&&o)return r;if(t&&!i){const c=n===Xr?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";q(`Failed to resolve ${n.slice(0,-1)}: ${s}${c}`)}return i}else q(`resolve${it(n.slice(0,-1))} can only be used in render() or setup().`)}function sc(n,s){return n&&(n[s]||n[es(s)]||n[it(es(s))])}function Nt(n,s,t,o){let l;const r=t&&t[o];if(ce(n)||He(n)){l=new Array(n.length);for(let i=0,c=n.length;i<c;i++)l[i]=s(n[i],i,void 0,r&&r[i])}else if(typeof n=="number"){Number.isInteger(n)||q(`The v-for range expect an integer value but got ${n}.`),l=new Array(n);for(let i=0;i<n;i++)l[i]=s(i+1,i,void 0,r&&r[i])}else if(Le(n))if(n[Symbol.iterator])l=Array.from(n,(i,c)=>s(i,c,void 0,r&&r[c]));else{const i=Object.keys(n);l=new Array(i.length);for(let c=0,p=i.length;c<p;c++){const u=i[c];l[c]=s(n[u],u,c,r&&r[c])}}else l=[];return t&&(t[o]=l),l}function hn(n,s,t={},o,l){if(Qe.isCE||Qe.parent&&xt(Qe.parent)&&Qe.parent.isCE)return s!=="default"&&(t.name=s),M("slot",t,o&&o());let r=n[s];r&&r.length>1&&(q("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),_();const i=r&&nd(r(t)),c=T(je,{key:t.key||i&&i.key||`_${s}`},i||(o?o():[]),i&&n._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function nd(n){return n.some(s=>ms(s)?!(s.type===en||s.type===je&&!nd(s.children)):!0)?n:null}const Zr=n=>n?md(n)?tr(n)||n.proxy:Zr(n.parent):null,ot=We(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>Ct(n.props),$attrs:n=>Ct(n.attrs),$slots:n=>Ct(n.slots),$refs:n=>Ct(n.refs),$parent:n=>Zr(n.parent),$root:n=>Zr(n.root),$emit:n=>n.emit,$options:n=>li(n),$forceUpdate:n=>n.f||(n.f=()=>Yl(n.update)),$nextTick:n=>n.n||(n.n=tn.bind(n.proxy)),$watch:n=>r8.bind(n)}),oi=n=>n==="_"||n==="$",mr=(n,s)=>n!==Me&&!n.__isScriptSetup&&be(n,s),sd={get({_:n},s){const{ctx:t,setupState:o,data:l,props:r,accessCache:i,type:c,appContext:p}=n;if(s==="__isVue")return!0;let u;if(s[0]!=="$"){const h=i[s];if(h!==void 0)switch(h){case 1:return o[s];case 2:return l[s];case 4:return t[s];case 3:return r[s]}else{if(mr(o,s))return i[s]=1,o[s];if(l!==Me&&be(l,s))return i[s]=2,l[s];if((u=n.propsOptions[0])&&be(u,s))return i[s]=3,r[s];if(t!==Me&&be(t,s))return i[s]=4,t[s];Jr&&(i[s]=0)}}const d=ot[s];let y,f;if(d)return s==="$attrs"&&(kn(n,"get",s),xl()),d(n);if((y=c.__cssModules)&&(y=y[s]))return y;if(t!==Me&&be(t,s))return i[s]=4,t[s];if(f=p.config.globalProperties,be(f,s))return f[s];Qe&&(!He(s)||s.indexOf("__v")!==0)&&(l!==Me&&oi(s[0])&&be(l,s)?q(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Qe&&q(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:n},s,t){const{data:o,setupState:l,ctx:r}=n;return mr(l,s)?(l[s]=t,!0):l.__isScriptSetup&&be(l,s)?(q(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):o!==Me&&be(o,s)?(o[s]=t,!0):be(n.props,s)?(q(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in n?(q(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in n.appContext.config.globalProperties?Object.defineProperty(r,s,{enumerable:!0,configurable:!0,value:t}):r[s]=t,!0)},has({_:{data:n,setupState:s,accessCache:t,ctx:o,appContext:l,propsOptions:r}},i){let c;return!!t[i]||n!==Me&&be(n,i)||mr(s,i)||(c=r[0])&&be(c,i)||be(o,i)||be(ot,i)||be(l.config.globalProperties,i)},defineProperty(n,s,t){return t.get!=null?n._.accessCache[s]=0:be(t,"value")&&this.set(n,s,t.value,null),Reflect.defineProperty(n,s,t)}};sd.ownKeys=n=>(q("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function A8(n){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(ot).forEach(t=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,get:()=>ot[t](n),set:vn})}),s}function v8(n){const{ctx:s,propsOptions:[t]}=n;t&&Object.keys(t).forEach(o=>{Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:vn})})}function B8(n){const{ctx:s,setupState:t}=n;Object.keys(fe(t)).forEach(o=>{if(!t.__isScriptSetup){if(oi(o[0])){q(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>t[o],set:vn})}})}function k8(){const n=Object.create(null);return(s,t)=>{n[t]?q(`${s} property "${t}" is already defined in ${n[t]}.`):n[t]=s}}let Jr=!0;function D8(n){const s=li(n),t=n.proxy,o=n.ctx;Jr=!1,s.beforeCreate&&tc(s.beforeCreate,n,"bc");const{data:l,computed:r,methods:i,watch:c,provide:p,inject:u,created:d,beforeMount:y,mounted:f,beforeUpdate:h,updated:m,activated:A,deactivated:v,beforeDestroy:w,beforeUnmount:k,destroyed:D,unmounted:x,render:L,renderTracked:G,renderTriggered:X,errorCaptured:I,serverPrefetch:K,expose:oe,inheritAttrs:ue,components:ee,directives:De,filters:Oe}=s,Se=k8();{const[ne]=n.propsOptions;if(ne)for(const pe in ne)Se("Props",pe)}if(u&&C8(u,o,Se,n.appContext.config.unwrapInjectedRef),i)for(const ne in i){const pe=i[ne];ye(pe)?(Object.defineProperty(o,ne,{value:pe.bind(t),configurable:!0,enumerable:!0,writable:!0}),Se("Methods",ne)):q(`Method "${ne}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(l){ye(l)||q("The data option must be a function. Plain object usage is no longer supported.");const ne=l.call(t,t);if(Ga(ne)&&q("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(ne))q("data() should return an object.");else{n.data=Ve(ne);for(const pe in ne)Se("Data",pe),oi(pe[0])||Object.defineProperty(o,pe,{configurable:!0,enumerable:!0,get:()=>ne[pe],set:vn})}}if(Jr=!0,r)for(const ne in r){const pe=r[ne],ke=ye(pe)?pe.bind(t,t):ye(pe.get)?pe.get.bind(t,t):vn;ke===vn&&q(`Computed property "${ne}" has no getter.`);const Ne=!ye(pe)&&ye(pe.set)?pe.set.bind(t):()=>{q(`Write operation failed: computed property "${ne}" is readonly.`)},Dn=$({get:ke,set:Ne});Object.defineProperty(o,ne,{enumerable:!0,configurable:!0,get:()=>Dn.value,set:on=>Dn.value=on}),Se("Computed",ne)}if(c)for(const ne in c)td(c[ne],o,t,ne);if(p){const ne=ye(p)?p.call(t):p;Reflect.ownKeys(ne).forEach(pe=>{En(pe,ne[pe])})}d&&tc(d,n,"c");function qe(ne,pe){ce(pe)?pe.forEach(ke=>ne(ke.bind(t))):pe&&ne(pe.bind(t))}if(qe(u8,y),qe(yt,f),qe(d8,h),qe(Ql,m),qe(Xu,A),qe(Zu,v),qe(h8,I),qe(m8,G),qe(f8,X),qe(Vo,k),qe(er,x),qe(y8,K),ce(oe))if(oe.length){const ne=n.exposed||(n.exposed={});oe.forEach(pe=>{Object.defineProperty(ne,pe,{get:()=>t[pe],set:ke=>t[pe]=ke})})}else n.exposed||(n.exposed={});L&&n.render===vn&&(n.render=L),ue!=null&&(n.inheritAttrs=ue),ee&&(n.components=ee),De&&(n.directives=De)}function C8(n,s,t=vn,o=!1){ce(n)&&(n=Qr(n));for(const l in n){const r=n[l];let i;Le(r)?"default"in r?i=F(r.from||l,r.default,!0):i=F(r.from||l):i=F(r),Te(i)?o?Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):(q(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),s[l]=i):s[l]=i,t("Inject",l)}}function tc(n,s,t){In(ce(n)?n.map(o=>o.bind(s.proxy)):n.bind(s.proxy),s,t)}function td(n,s,t,o){const l=o.includes(".")?Wu(t,o):()=>t[o];if(He(n)){const r=s[n];ye(r)?ve(l,r):q(`Invalid watch handler specified by key "${n}"`,r)}else if(ye(n))ve(l,n.bind(t));else if(Le(n))if(ce(n))n.forEach(r=>td(r,s,t,o));else{const r=ye(n.handler)?n.handler.bind(t):s[n.handler];ye(r)?ve(l,r,n):q(`Invalid watch handler specified by key "${n.handler}"`,r)}else q(`Invalid watch option: "${o}"`,n)}function li(n){const s=n.type,{mixins:t,extends:o}=s,{mixins:l,optionsCache:r,config:{optionMergeStrategies:i}}=n.appContext,c=r.get(s);let p;return c?p=c:!l.length&&!t&&!o?p=s:(p={},l.length&&l.forEach(u=>Sl(p,u,i,!0)),Sl(p,s,i)),Le(s)&&r.set(s,p),p}function Sl(n,s,t,o=!1){const{mixins:l,extends:r}=s;r&&Sl(n,r,t,!0),l&&l.forEach(i=>Sl(n,i,t,!0));for(const i in s)if(o&&i==="expose")q('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=b8[i]||t&&t[i];n[i]=c?c(n[i],s[i]):s[i]}return n}const b8={data:oc,props:Ws,emits:Ws,methods:Ws,computed:Ws,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:Ws,directives:Ws,watch:E8,provide:oc,inject:w8};function oc(n,s){return s?n?function(){return We(ye(n)?n.call(this,this):n,ye(s)?s.call(this,this):s)}:s:n}function w8(n,s){return Ws(Qr(n),Qr(s))}function Qr(n){if(ce(n)){const s={};for(let t=0;t<n.length;t++)s[n[t]]=n[t];return s}return n}function pn(n,s){return n?[...new Set([].concat(n,s))]:s}function Ws(n,s){return n?We(We(Object.create(null),n),s):s}function E8(n,s){if(!n)return s;if(!s)return n;const t=We(Object.create(null),n);for(const o in s)t[o]=pn(n[o],s[o]);return t}function x8(n,s,t,o=!1){const l={},r={};kl(r,sr,1),n.propsDefaults=Object.create(null),od(n,s,l,r);for(const i in n.propsOptions[0])i in l||(l[i]=void 0);rd(s||{},l,n),t?n.props=o?l:Dm(l):n.type.props?n.props=l:n.props=r,n.attrs=r}function S8(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function F8(n,s,t,o){const{props:l,attrs:r,vnode:{patchFlag:i}}=n,c=fe(l),[p]=n.propsOptions;let u=!1;if(!S8(n)&&(o||i>0)&&!(i&16)){if(i&8){const d=n.vnode.dynamicProps;for(let y=0;y<d.length;y++){let f=d[y];if(Xl(n.emitsOptions,f))continue;const h=s[f];if(p)if(be(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const m=es(f);l[m]=ea(p,c,m,h,n,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{od(n,s,l,r)&&(u=!0);let d;for(const y in c)(!s||!be(s,y)&&((d=ys(y))===y||!be(s,d)))&&(p?t&&(t[y]!==void 0||t[d]!==void 0)&&(l[y]=ea(p,c,y,void 0,n,!0)):delete l[y]);if(r!==c)for(const y in r)(!s||!be(s,y))&&(delete r[y],u=!0)}u&&fs(n,"set","$attrs"),rd(s||{},l,n)}function od(n,s,t,o){const[l,r]=n.propsOptions;let i=!1,c;if(s)for(let p in s){if(ul(p))continue;const u=s[p];let d;l&&be(l,d=es(p))?!r||!r.includes(d)?t[d]=u:(c||(c={}))[d]=u:Xl(n.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,i=!0)}if(r){const p=fe(t),u=c||Me;for(let d=0;d<r.length;d++){const y=r[d];t[y]=ea(l,p,y,u[y],n,!be(u,y))}}return i}function ea(n,s,t,o,l,r){const i=n[t];if(i!=null){const c=be(i,"default");if(c&&o===void 0){const p=i.default;if(i.type!==Function&&ye(p)){const{propsDefaults:u}=l;t in u?o=u[t]:(Pt(l),o=u[t]=p.call(null,s),lt())}else o=p}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===ys(t))&&(o=!0))}return o}function ld(n,s,t=!1){const o=s.propsCache,l=o.get(n);if(l)return l;const r=n.props,i={},c=[];let p=!1;if(!ye(n)){const d=y=>{p=!0;const[f,h]=ld(y,s,!0);We(i,f),h&&c.push(...h)};!t&&s.mixins.length&&s.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!p)return Le(n)&&o.set(n,wt),wt;if(ce(r))for(let d=0;d<r.length;d++){He(r[d])||q("props must be strings when using array syntax.",r[d]);const y=es(r[d]);lc(y)&&(i[y]=Me)}else if(r){Le(r)||q("invalid props options",r);for(const d in r){const y=es(d);if(lc(y)){const f=r[d],h=i[y]=ce(f)||ye(f)?{type:f}:Object.assign({},f);if(h){const m=ac(Boolean,h.type),A=ac(String,h.type);h[0]=m>-1,h[1]=A<0||m<A,(m>-1||be(h,"default"))&&c.push(y)}}}}const u=[i,c];return Le(n)&&o.set(n,u),u}function lc(n){return n[0]!=="$"?!0:(q(`Invalid prop name: "${n}" is a reserved property.`),!1)}function na(n){const s=n&&n.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:n===null?"null":""}function rc(n,s){return na(n)===na(s)}function ac(n,s){return ce(s)?s.findIndex(t=>rc(t,n)):ye(s)&&rc(s,n)?0:-1}function rd(n,s,t){const o=fe(s),l=t.propsOptions[0];for(const r in l){let i=l[r];i!=null&&$8(r,o[r],i,!be(n,r)&&!be(n,ys(r)))}}function $8(n,s,t,o){const{type:l,required:r,validator:i}=t;if(r&&o){q('Missing required prop: "'+n+'"');return}if(!(s==null&&!t.required)){if(l!=null&&l!==!0){let c=!1;const p=ce(l)?l:[l],u=[];for(let d=0;d<p.length&&!c;d++){const{valid:y,expectedType:f}=j8(s,p[d]);u.push(f||""),c=y}if(!c){q(O8(n,s,u));return}}i&&!i(s)&&q('Invalid prop: custom validator check failed for prop "'+n+'".')}}const T8=Rs("String,Number,Boolean,Function,Symbol,BigInt");function j8(n,s){let t;const o=na(s);if(T8(o)){const l=typeof n;t=l===o.toLowerCase(),!t&&l==="object"&&(t=n instanceof s)}else o==="Object"?t=Le(n):o==="Array"?t=ce(n):o==="null"?t=n===null:t=n instanceof s;return{valid:t,expectedType:o}}function O8(n,s,t){let o=`Invalid prop: type check failed for prop "${n}". Expected ${t.map(it).join(" | ")}`;const l=t[0],r=Ha(s),i=ic(s,l),c=ic(s,r);return t.length===1&&cc(l)&&!P8(l,r)&&(o+=` with value ${i}`),o+=`, got ${r} `,cc(r)&&(o+=`with value ${c}.`),o}function ic(n,s){return s==="String"?`"${n}"`:s==="Number"?`${Number(n)}`:`${n}`}function cc(n){return["string","number","boolean"].some(t=>n.toLowerCase()===t)}function P8(...n){return n.some(s=>s.toLowerCase()==="boolean")}const ad=n=>n[0]==="_"||n==="$stable",ri=n=>ce(n)?n.map(Gn):[Gn(n)],I8=(n,s,t)=>{if(s._n)return s;const o=E((...l)=>(ze&&q(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),ri(s(...l))),t);return o._c=!1,o},id=(n,s,t)=>{const o=n._ctx;for(const l in n){if(ad(l))continue;const r=n[l];if(ye(r))s[l]=I8(l,r,o);else if(r!=null){q(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const i=ri(r);s[l]=()=>i}}},cd=(n,s)=>{Ho(n.vnode)||q("Non-function value encountered for default slot. Prefer function slots for better performance.");const t=ri(s);n.slots.default=()=>t},L8=(n,s)=>{if(n.vnode.shapeFlag&32){const t=s._;t?(n.slots=fe(s),kl(s,"_",t)):id(s,n.slots={})}else n.slots={},s&&cd(n,s);kl(n.slots,sr,1)},N8=(n,s,t)=>{const{vnode:o,slots:l}=n;let r=!0,i=Me;if(o.shapeFlag&32){const c=s._;c?Fs?We(l,s):t&&c===1?r=!1:(We(l,s),!t&&c===1&&delete l._):(r=!s.$stable,id(s,l)),i=s}else s&&(cd(n,s),i={default:1});if(r)for(const c in l)!ad(c)&&!(c in i)&&delete l[c]};function pd(){return{app:null,config:{isNativeTag:cu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R8=0;function M8(n,s){return function(o,l=null){ye(o)||(o=Object.assign({},o)),l!=null&&!Le(l)&&(q("root props passed to app.mount() must be an object."),l=null);const r=pd(),i=new Set;let c=!1;const p=r.app={_uid:R8++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:$l,get config(){return r.config},set config(u){q("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return i.has(u)?q("Plugin has already been applied to target app."):u&&ye(u.install)?(i.add(u),u.install(p,...d)):ye(u)?(i.add(u),u(p,...d)):q('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return r.mixins.includes(u)?q("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),p},component(u,d){return oa(u,r.config),d?(r.components[u]&&q(`Component "${u}" has already been registered in target app.`),r.components[u]=d,p):r.components[u]},directive(u,d){return Qu(u),d?(r.directives[u]&&q(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,p):r.directives[u]},mount(u,d,y){if(c)q("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&q("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=M(o,l);return f.appContext=r,r.reload=()=>{n(Vn(f),u,y)},d&&s?s(f,u):n(f,u,y),c=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,Wm(p,$l),tr(f.component)||f.component.proxy}},unmount(){c?(n(null,p._container),p._instance=null,zm(p),delete p._container.__vue_app__):q("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&q(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,p}};return p}}function sa(n,s,t,o,l=!1){if(ce(n)){n.forEach((f,h)=>sa(f,s&&(ce(s)?s[h]:s),t,o,l));return}if(xt(o)&&!l)return;const r=o.shapeFlag&4?tr(o.component)||o.component.proxy:o.el,i=l?null:r,{i:c,r:p}=n;if(!c){q("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=s&&s.r,d=c.refs===Me?c.refs={}:c.refs,y=c.setupState;if(u!=null&&u!==p&&(He(u)?(d[u]=null,be(y,u)&&(y[u]=null)):Te(u)&&(u.value=null)),ye(p))us(p,c,12,[i,d]);else{const f=He(p),h=Te(p);if(f||h){const m=()=>{if(n.f){const A=f?be(y,p)?y[p]:d[p]:p.value;l?ce(A)&&Ma(A,r):ce(A)?A.includes(r)||A.push(r):f?(d[p]=[r],be(y,p)&&(y[p]=d[p])):(p.value=[r],n.k&&(d[n.k]=p.value))}else f?(d[p]=i,be(y,p)&&(y[p]=i)):h?(p.value=i,n.k&&(d[n.k]=i)):q("Invalid template ref type:",p,`(${typeof p})`)};i?(m.id=-1,sn(m,t)):m()}else q("Invalid template ref type:",p,`(${typeof p})`)}}let Vt,ws;function os(n,s){n.appContext.config.performance&&Fl()&&ws.mark(`vue-${s}-${n.uid}`),Xm(n,s,Fl()?ws.now():Date.now())}function ls(n,s){if(n.appContext.config.performance&&Fl()){const t=`vue-${s}-${n.uid}`,o=t+":end";ws.mark(o),ws.measure(`<${or(n,n.type)}> ${s}`,t,o),ws.clearMarks(t),ws.clearMarks(o)}Zm(n,s,Fl()?ws.now():Date.now())}function Fl(){return Vt!==void 0||(typeof window<"u"&&window.performance?(Vt=!0,ws=window.performance):Vt=!1),Vt}function q8(){const n=[];if(n.length){const s=n.length>1;console.warn(`Feature flag${s?"s":""} ${n.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const sn=l8;function G8(n){return H8(n)}function H8(n,s){q8();const t=yu();t.__VUE__=!0,Mu(t.__VUE_DEVTOOLS_GLOBAL_HOOK__,t);const{insert:o,remove:l,patchProp:r,createElement:i,createText:c,createComment:p,setText:u,setElementText:d,parentNode:y,nextSibling:f,setScopeId:h=vn,insertStaticContent:m}=n,A=(g,B,S,R=null,N=null,z=null,J=!1,V=null,Y=Fs?!1:!!B.dynamicChildren)=>{if(g===B)return;g&&!Es(g,B)&&(R=le(g),_n(g,N,z,!0),g=null),B.patchFlag===-2&&(Y=!1,B.dynamicChildren=null);const{type:H,ref:ae,shapeFlag:re}=B;switch(H){case Uo:v(g,B,S,R);break;case en:w(g,B,S,R);break;case fl:g==null?k(B,S,R,J):D(g,B,S,J);break;case je:De(g,B,S,R,N,z,J,V,Y);break;default:re&1?G(g,B,S,R,N,z,J,V,Y):re&6?Oe(g,B,S,R,N,z,J,V,Y):re&64||re&128?H.process(g,B,S,R,N,z,J,V,Y,xe):q("Invalid VNode type:",H,`(${typeof H})`)}ae!=null&&N&&sa(ae,g&&g.ref,z,B||g,!B)},v=(g,B,S,R)=>{if(g==null)o(B.el=c(B.children),S,R);else{const N=B.el=g.el;B.children!==g.children&&u(N,B.children)}},w=(g,B,S,R)=>{g==null?o(B.el=p(B.children||""),S,R):B.el=g.el},k=(g,B,S,R)=>{[g.el,g.anchor]=m(g.children,B,S,R,g.el,g.anchor)},D=(g,B,S,R)=>{if(B.children!==g.children){const N=f(g.anchor);L(g),[B.el,B.anchor]=m(B.children,S,N,R)}else B.el=g.el,B.anchor=g.anchor},x=({el:g,anchor:B},S,R)=>{let N;for(;g&&g!==B;)N=f(g),o(g,S,R),g=N;o(B,S,R)},L=({el:g,anchor:B})=>{let S;for(;g&&g!==B;)S=f(g),l(g),g=S;l(B)},G=(g,B,S,R,N,z,J,V,Y)=>{J=J||B.type==="svg",g==null?X(B,S,R,N,z,J,V,Y):oe(g,B,N,z,J,V,Y)},X=(g,B,S,R,N,z,J,V)=>{let Y,H;const{type:ae,props:re,shapeFlag:ie,transition:_e,dirs:Ee}=g;if(Y=g.el=i(g.type,z,re&&re.is,re),ie&8?d(Y,g.children):ie&16&&K(g.children,Y,null,R,N,z&&ae!=="foreignObject",J,V),Ee&&Ms(g,null,R,"created"),I(Y,g,g.scopeId,J,R),re){for(const Re in re)Re!=="value"&&!ul(Re)&&r(Y,Re,null,re[Re],z,g.children,R,N,Z);"value"in re&&r(Y,"value",null,re.value),(H=re.onVnodeBeforeMount)&&jn(H,R,g)}Object.defineProperty(Y,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:R,enumerable:!1}),Ee&&Ms(g,null,R,"beforeMount");const Ge=(!N||N&&!N.pendingBranch)&&_e&&!_e.persisted;Ge&&_e.beforeEnter(Y),o(Y,B,S),((H=re&&re.onVnodeMounted)||Ge||Ee)&&sn(()=>{H&&jn(H,R,g),Ge&&_e.enter(Y),Ee&&Ms(g,null,R,"mounted")},N)},I=(g,B,S,R,N)=>{if(S&&h(g,S),R)for(let z=0;z<R.length;z++)h(g,R[z]);if(N){let z=N.subTree;if(z.patchFlag>0&&z.patchFlag&2048&&(z=Vu(z.children)||z),B===z){const J=N.vnode;I(g,J,J.scopeId,J.slotScopeIds,N.parent)}}},K=(g,B,S,R,N,z,J,V,Y=0)=>{for(let H=Y;H<g.length;H++){const ae=g[H]=V?Ds(g[H]):Gn(g[H]);A(null,ae,B,S,R,N,z,J,V)}},oe=(g,B,S,R,N,z,J)=>{const V=B.el=g.el;let{patchFlag:Y,dynamicChildren:H,dirs:ae}=B;Y|=g.patchFlag&16;const re=g.props||Me,ie=B.props||Me;let _e;S&&qs(S,!1),(_e=ie.onVnodeBeforeUpdate)&&jn(_e,S,B,g),ae&&Ms(B,g,S,"beforeUpdate"),S&&qs(S,!0),Fs&&(Y=0,J=!1,H=null);const Ee=N&&B.type!=="foreignObject";if(H?(ue(g.dynamicChildren,H,V,S,R,Ee,z),S&&S.type.__hmrId&&io(g,B)):J||ke(g,B,V,null,S,R,Ee,z,!1),Y>0){if(Y&16)ee(V,B,re,ie,S,R,N);else if(Y&2&&re.class!==ie.class&&r(V,"class",null,ie.class,N),Y&4&&r(V,"style",re.style,ie.style,N),Y&8){const Ge=B.dynamicProps;for(let Re=0;Re<Ge.length;Re++){const Ye=Ge[Re],Rn=re[Ye],ht=ie[Ye];(ht!==Rn||Ye==="value")&&r(V,Ye,Rn,ht,N,g.children,S,R,Z)}}Y&1&&g.children!==B.children&&d(V,B.children)}else!J&&H==null&&ee(V,B,re,ie,S,R,N);((_e=ie.onVnodeUpdated)||ae)&&sn(()=>{_e&&jn(_e,S,B,g),ae&&Ms(B,g,S,"updated")},R)},ue=(g,B,S,R,N,z,J)=>{for(let V=0;V<B.length;V++){const Y=g[V],H=B[V],ae=Y.el&&(Y.type===je||!Es(Y,H)||Y.shapeFlag&70)?y(Y.el):S;A(Y,H,ae,null,R,N,z,J,!0)}},ee=(g,B,S,R,N,z,J)=>{if(S!==R){if(S!==Me)for(const V in S)!ul(V)&&!(V in R)&&r(g,V,S[V],null,J,B.children,N,z,Z);for(const V in R){if(ul(V))continue;const Y=R[V],H=S[V];Y!==H&&V!=="value"&&r(g,V,H,Y,J,B.children,N,z,Z)}"value"in R&&r(g,"value",S.value,R.value)}},De=(g,B,S,R,N,z,J,V,Y)=>{const H=B.el=g?g.el:c(""),ae=B.anchor=g?g.anchor:c("");let{patchFlag:re,dynamicChildren:ie,slotScopeIds:_e}=B;(Fs||re&2048)&&(re=0,Y=!1,ie=null),_e&&(V=V?V.concat(_e):_e),g==null?(o(H,S,R),o(ae,S,R),K(B.children,S,ae,N,z,J,V,Y)):re>0&&re&64&&ie&&g.dynamicChildren?(ue(g.dynamicChildren,ie,S,N,z,J,V),N&&N.type.__hmrId?io(g,B):(B.key!=null||N&&B===N.subTree)&&io(g,B,!0)):ke(g,B,S,ae,N,z,J,V,Y)},Oe=(g,B,S,R,N,z,J,V,Y)=>{B.slotScopeIds=V,g==null?B.shapeFlag&512?N.ctx.activate(B,S,R,J,Y):Se(B,S,R,N,z,J,Y):qe(g,B,Y)},Se=(g,B,S,R,N,z,J)=>{const V=g.component=eh(g,R,N);if(V.type.__hmrId&&Gm(V),dl(g),os(V,"mount"),Ho(g)&&(V.ctx.renderer=xe),os(V,"init"),sh(V),ls(V,"init"),V.asyncDep){if(N&&N.registerDep(V,ne),!g.el){const Y=V.subTree=M(en);w(null,Y,B,S)}return}ne(V,g,B,S,N,z,J),yl(),ls(V,"mount")},qe=(g,B,S)=>{const R=B.component=g.component;if(t8(g,B,S))if(R.asyncDep&&!R.asyncResolved){dl(B),pe(R,B,S),yl();return}else R.next=B,Mm(R.update),R.update();else B.el=g.el,R.vnode=B},ne=(g,B,S,R,N,z,J)=>{const V=()=>{if(g.isMounted){let{next:ae,bu:re,u:ie,parent:_e,vnode:Ee}=g,Ge=ae,Re;dl(ae||g.vnode),qs(g,!1),ae?(ae.el=Ee.el,pe(g,ae,J)):ae=Ee,re&&bs(re),(Re=ae.props&&ae.props.onVnodeBeforeUpdate)&&jn(Re,_e,ae,Ee),qs(g,!0),os(g,"render");const Ye=ur(g);ls(g,"render");const Rn=g.subTree;g.subTree=Ye,os(g,"patch"),A(Rn,Ye,y(Rn.el),le(Rn),g,N,z),ls(g,"patch"),ae.el=Ye.el,Ge===null&&o8(g,Ye.el),ie&&sn(ie,N),(Re=ae.props&&ae.props.onVnodeUpdated)&&sn(()=>jn(Re,_e,ae,Ee),N),qu(g),yl()}else{let ae;const{el:re,props:ie}=B,{bm:_e,m:Ee,parent:Ge}=g,Re=xt(B);if(qs(g,!1),_e&&bs(_e),!Re&&(ae=ie&&ie.onVnodeBeforeMount)&&jn(ae,Ge,B),qs(g,!0),re&&de){const Ye=()=>{os(g,"render"),g.subTree=ur(g),ls(g,"render"),os(g,"hydrate"),de(re,g.subTree,g,N,null),ls(g,"hydrate")};Re?B.type.__asyncLoader().then(()=>!g.isUnmounted&&Ye()):Ye()}else{os(g,"render");const Ye=g.subTree=ur(g);ls(g,"render"),os(g,"patch"),A(null,Ye,S,R,g,N,z),ls(g,"patch"),B.el=Ye.el}if(Ee&&sn(Ee,N),!Re&&(ae=ie&&ie.onVnodeMounted)){const Ye=B;sn(()=>jn(ae,Ge,Ye),N)}(B.shapeFlag&256||Ge&&xt(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&g.a&&sn(g.a,N),g.isMounted=!0,Kr(g),B=S=R=null}},Y=g.effect=new za(V,()=>Yl(H),g.scope),H=g.update=()=>Y.run();H.id=g.uid,qs(g,!0),Y.onTrack=g.rtc?ae=>bs(g.rtc,ae):void 0,Y.onTrigger=g.rtg?ae=>bs(g.rtg,ae):void 0,H.ownerInstance=g,H()},pe=(g,B,S)=>{B.component=g;const R=g.vnode.props;g.vnode=B,g.next=null,F8(g,B.props,R,S),N8(g,B.children,S),pt(),Xi(),ut()},ke=(g,B,S,R,N,z,J,V,Y=!1)=>{const H=g&&g.children,ae=g?g.shapeFlag:0,re=B.children,{patchFlag:ie,shapeFlag:_e}=B;if(ie>0){if(ie&128){Dn(H,re,S,R,N,z,J,V,Y);return}else if(ie&256){Ne(H,re,S,R,N,z,J,V,Y);return}}_e&8?(ae&16&&Z(H,N,z),re!==H&&d(S,re)):ae&16?_e&16?Dn(H,re,S,R,N,z,J,V,Y):Z(H,N,z,!0):(ae&8&&d(S,""),_e&16&&K(re,S,R,N,z,J,V,Y))},Ne=(g,B,S,R,N,z,J,V,Y)=>{g=g||wt,B=B||wt;const H=g.length,ae=B.length,re=Math.min(H,ae);let ie;for(ie=0;ie<re;ie++){const _e=B[ie]=Y?Ds(B[ie]):Gn(B[ie]);A(g[ie],_e,S,null,N,z,J,V,Y)}H>ae?Z(g,N,z,!0,!1,re):K(B,S,R,N,z,J,V,Y,re)},Dn=(g,B,S,R,N,z,J,V,Y)=>{let H=0;const ae=B.length;let re=g.length-1,ie=ae-1;for(;H<=re&&H<=ie;){const _e=g[H],Ee=B[H]=Y?Ds(B[H]):Gn(B[H]);if(Es(_e,Ee))A(_e,Ee,S,null,N,z,J,V,Y);else break;H++}for(;H<=re&&H<=ie;){const _e=g[re],Ee=B[ie]=Y?Ds(B[ie]):Gn(B[ie]);if(Es(_e,Ee))A(_e,Ee,S,null,N,z,J,V,Y);else break;re--,ie--}if(H>re){if(H<=ie){const _e=ie+1,Ee=_e<ae?B[_e].el:R;for(;H<=ie;)A(null,B[H]=Y?Ds(B[H]):Gn(B[H]),S,Ee,N,z,J,V,Y),H++}}else if(H>ie)for(;H<=re;)_n(g[H],N,z,!0),H++;else{const _e=H,Ee=H,Ge=new Map;for(H=Ee;H<=ie;H++){const cn=B[H]=Y?Ds(B[H]):Gn(B[H]);cn.key!=null&&(Ge.has(cn.key)&&q("Duplicate keys found during update:",JSON.stringify(cn.key),"Make sure keys are unique."),Ge.set(cn.key,H))}let Re,Ye=0;const Rn=ie-Ee+1;let ht=!1,Ri=0;const Ht=new Array(Rn);for(H=0;H<Rn;H++)Ht[H]=0;for(H=_e;H<=re;H++){const cn=g[H];if(Ye>=Rn){_n(cn,N,z,!0);continue}let zn;if(cn.key!=null)zn=Ge.get(cn.key);else for(Re=Ee;Re<=ie;Re++)if(Ht[Re-Ee]===0&&Es(cn,B[Re])){zn=Re;break}zn===void 0?_n(cn,N,z,!0):(Ht[zn-Ee]=H+1,zn>=Ri?Ri=zn:ht=!0,A(cn,B[zn],S,null,N,z,J,V,Y),Ye++)}const Mi=ht?V8(Ht):wt;for(Re=Mi.length-1,H=Rn-1;H>=0;H--){const cn=Ee+H,zn=B[cn],qi=cn+1<ae?B[cn+1].el:R;Ht[H]===0?A(null,zn,S,qi,N,z,J,V,Y):ht&&(Re<0||H!==Mi[Re]?on(zn,S,qi,2):Re--)}}},on=(g,B,S,R,N=null)=>{const{el:z,type:J,transition:V,children:Y,shapeFlag:H}=g;if(H&6){on(g.component.subTree,B,S,R);return}if(H&128){g.suspense.move(B,S,R);return}if(H&64){J.move(g,B,S,xe);return}if(J===je){o(z,B,S);for(let re=0;re<Y.length;re++)on(Y[re],B,S,R);o(g.anchor,B,S);return}if(J===fl){x(g,B,S);return}if(R!==2&&H&1&&V)if(R===0)V.beforeEnter(z),o(z,B,S),sn(()=>V.enter(z),N);else{const{leave:re,delayLeave:ie,afterLeave:_e}=V,Ee=()=>o(z,B,S),Ge=()=>{re(z,()=>{Ee(),_e&&_e()})};ie?ie(z,Ee,Ge):Ge()}else o(z,B,S)},_n=(g,B,S,R=!1,N=!1)=>{const{type:z,props:J,ref:V,children:Y,dynamicChildren:H,shapeFlag:ae,patchFlag:re,dirs:ie}=g;if(V!=null&&sa(V,null,S,g,!0),ae&256){B.ctx.deactivate(g);return}const _e=ae&1&&ie,Ee=!xt(g);let Ge;if(Ee&&(Ge=J&&J.onVnodeBeforeUnmount)&&jn(Ge,B,g),ae&6)te(g.component,S,R);else{if(ae&128){g.suspense.unmount(S,R);return}_e&&Ms(g,null,B,"beforeUnmount"),ae&64?g.type.remove(g,B,S,N,xe,R):H&&(z!==je||re>0&&re&64)?Z(H,B,S,!1,!0):(z===je&&re&384||!N&&ae&16)&&Z(Y,B,S),R&&_s(g)}(Ee&&(Ge=J&&J.onVnodeUnmounted)||_e)&&sn(()=>{Ge&&jn(Ge,B,g),_e&&Ms(g,null,B,"unmounted")},S)},_s=g=>{const{type:B,el:S,anchor:R,transition:N}=g;if(B===je){g.patchFlag>0&&g.patchFlag&2048&&N&&!N.persisted?g.children.forEach(J=>{J.type===en?l(J.el):_s(J)}):j(S,R);return}if(B===fl){L(g);return}const z=()=>{l(S),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:J,delayLeave:V}=N,Y=()=>J(S,z);V?V(g.el,z,Y):Y()}else z()},j=(g,B)=>{let S;for(;g!==B;)S=f(g),l(g),g=S;l(B)},te=(g,B,S)=>{g.type.__hmrId&&Hm(g);const{bum:R,scope:N,update:z,subTree:J,um:V}=g;R&&bs(R),N.stop(),z&&(z.active=!1,_n(J,g,B,S)),V&&sn(V,B),sn(()=>{g.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve()),Ym(g)},Z=(g,B,S,R=!1,N=!1,z=0)=>{for(let J=z;J<g.length;J++)_n(g[J],B,S,R,N)},le=g=>g.shapeFlag&6?le(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),Ce=(g,B,S)=>{g==null?B._vnode&&_n(B._vnode,null,null,!0):A(B._vnode||null,g,B,null,null,null,S),Xi(),Lu(),B._vnode=g},xe={p:A,um:_n,m:on,r:_s,mt:Se,mc:K,pc:ke,pbc:ue,n:le,o:n};let he,de;return s&&([he,de]=s(xe)),{render:Ce,hydrate:he,createApp:M8(Ce,he)}}function qs({effect:n,update:s},t){n.allowRecurse=s.allowRecurse=t}function io(n,s,t=!1){const o=n.children,l=s.children;if(ce(o)&&ce(l))for(let r=0;r<o.length;r++){const i=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=Ds(l[r]),c.el=i.el),t||io(i,c)),c.type===Uo&&(c.el=i.el),c.type===en&&!c.el&&(c.el=i.el)}}function V8(n){const s=n.slice(),t=[0];let o,l,r,i,c;const p=n.length;for(o=0;o<p;o++){const u=n[o];if(u!==0){if(l=t[t.length-1],n[l]<u){s[o]=l,t.push(o);continue}for(r=0,i=t.length-1;r<i;)c=r+i>>1,n[t[c]]<u?r=c+1:i=c;u<n[t[r]]&&(r>0&&(s[o]=t[r-1]),t[r]=o)}}for(r=t.length,i=t[r-1];r-- >0;)t[r]=i,i=s[i];return t}const U8=n=>n.__isTeleport,St=n=>n&&(n.disabled||n.disabled===""),pc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ta=(n,s)=>{const t=n&&n.to;if(He(t))if(s){const o=s(t);return o||q(`Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return q("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!t&&!St(n)&&q(`Invalid Teleport target: ${t}`),t},W8={__isTeleport:!0,process(n,s,t,o,l,r,i,c,p,u){const{mc:d,pc:y,pbc:f,o:{insert:h,querySelector:m,createText:A,createComment:v}}=u,w=St(s.props);let{shapeFlag:k,children:D,dynamicChildren:x}=s;if(Fs&&(p=!1,x=null),n==null){const L=s.el=v("teleport start"),G=s.anchor=v("teleport end");h(L,t,o),h(G,t,o);const X=s.target=ta(s.props,m),I=s.targetAnchor=A("");X?(h(I,X),i=i||pc(X)):w||q("Invalid Teleport target on mount:",X,`(${typeof X})`);const K=(oe,ue)=>{k&16&&d(D,oe,ue,l,r,i,c,p)};w?K(t,G):X&&K(X,I)}else{s.el=n.el;const L=s.anchor=n.anchor,G=s.target=n.target,X=s.targetAnchor=n.targetAnchor,I=St(n.props),K=I?t:G,oe=I?L:X;if(i=i||pc(G),x?(f(n.dynamicChildren,x,K,l,r,i,c),io(n,s,!0)):p||y(n,s,K,oe,l,r,i,c,!1),w)I||ol(s,t,L,u,1);else if((s.props&&s.props.to)!==(n.props&&n.props.to)){const ue=s.target=ta(s.props,m);ue?ol(s,ue,null,u,0):q("Invalid Teleport target on update:",G,`(${typeof G})`)}else I&&ol(s,G,X,u,1)}ud(s)},remove(n,s,t,o,{um:l,o:{remove:r}},i){const{shapeFlag:c,children:p,anchor:u,targetAnchor:d,target:y,props:f}=n;if(y&&r(d),(i||!St(f))&&(r(u),c&16))for(let h=0;h<p.length;h++){const m=p[h];l(m,s,t,!0,!!m.dynamicChildren)}},move:ol,hydrate:z8};function ol(n,s,t,{o:{insert:o},m:l},r=2){r===0&&o(n.targetAnchor,s,t);const{el:i,anchor:c,shapeFlag:p,children:u,props:d}=n,y=r===2;if(y&&o(i,s,t),(!y||St(d))&&p&16)for(let f=0;f<u.length;f++)l(u[f],s,t,2);y&&o(c,s,t)}function z8(n,s,t,o,l,r,{o:{nextSibling:i,parentNode:c,querySelector:p}},u){const d=s.target=ta(s.props,p);if(d){const y=d._lpa||d.firstChild;if(s.shapeFlag&16)if(St(s.props))s.anchor=u(i(n),s,c(n),t,o,l,r),s.targetAnchor=y;else{s.anchor=i(n);let f=y;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){s.targetAnchor=f,d._lpa=s.targetAnchor&&i(s.targetAnchor);break}u(y,s,d,t,o,l,r)}ud(s)}return s.anchor&&i(s.anchor)}const K8=W8;function ud(n){const s=n.ctx;if(s&&s.ut){let t=n.children[0].el;for(;t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",s.uid),t=t.nextSibling;s.ut()}}const je=Symbol("Fragment"),Uo=Symbol("Text"),en=Symbol("Comment"),fl=Symbol("Static"),co=[];let Hn=null;function _(n=!1){co.push(Hn=n?null:[])}function Y8(){co.pop(),Hn=co[co.length-1]||null}let wo=1;function uc(n){wo+=n}function dd(n){return n.dynamicChildren=wo>0?Hn||wt:null,Y8(),wo>0&&Hn&&Hn.push(n),n}function C(n,s,t,o,l,r){return dd(e(n,s,t,o,l,r,!0))}function T(n,s,t,o,l){return dd(M(n,s,t,o,l,!0))}function ms(n){return n?n.__v_isVNode===!0:!1}function Es(n,s){return s.shapeFlag&6&&Bt.has(s.type)?(n.shapeFlag&=-257,s.shapeFlag&=-513,!1):n.type===s.type&&n.key===s.key}const X8=(...n)=>Z8(...n),sr="__vInternal",yd=({key:n})=>n??null,ml=({ref:n,ref_key:s,ref_for:t})=>n!=null?He(n)||Te(n)||ye(n)?{i:Qe,r:n,k:s,f:!!t}:n:null;function e(n,s=null,t=null,o=0,l=null,r=n===je?0:1,i=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&yd(s),ref:s&&ml(s),scopeId:Zl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Qe};return c?(ai(p,t),r&128&&n.normalize(p)):t&&(p.shapeFlag|=He(t)?8:16),p.key!==p.key&&q("VNode created with invalid key (NaN). VNode type:",p.type),wo>0&&!i&&Hn&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Hn.push(p),p}const M=X8;function Z8(n,s=null,t=null,o=0,l=null,r=!1){if((!n||n===g8)&&(n||q(`Invalid vnode type when creating vnode: ${n}.`),n=en),ms(n)){const c=Vn(n,s,!0);return t&&ai(c,t),wo>0&&!r&&Hn&&(c.shapeFlag&6?Hn[Hn.indexOf(n)]=c:Hn.push(c)),c.patchFlag|=-2,c}if(gd(n)&&(n=n.__vccOpts),s){s=U(s);let{class:c,style:p}=s;c&&!He(c)&&(s.class=Ue(c)),Le(p)&&(wl(p)&&!ce(p)&&(p=We({},p)),s.style=Ze(p))}const i=He(n)?1:Uu(n)?128:U8(n)?64:Le(n)?4:ye(n)?2:0;return i&4&&wl(n)&&(n=fe(n),q("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,s,t,o,l,i,r,!0)}function U(n){return n?wl(n)||sr in n?We({},n):n:null}function Vn(n,s,t=!1){const{props:o,ref:l,patchFlag:r,children:i}=n,c=s?me(o||{},s):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&yd(c),ref:s&&s.ref?t&&l?ce(l)?l.concat(ml(s)):[l,ml(s)]:ml(s):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r===-1&&ce(i)?i.map(fd):i,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==je?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vn(n.ssContent),ssFallback:n.ssFallback&&Vn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function fd(n){const s=Vn(n);return ce(n.children)&&(s.children=n.children.map(fd)),s}function a(n=" ",s=0){return M(Uo,null,n,s)}function ge(n="",s=!1){return s?(_(),T(en,null,n)):M(en,null,n)}function Gn(n){return n==null||typeof n=="boolean"?M(en):ce(n)?M(je,null,n.slice()):typeof n=="object"?Ds(n):M(Uo,null,String(n))}function Ds(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Vn(n)}function ai(n,s){let t=0;const{shapeFlag:o}=n;if(s==null)s=null;else if(ce(s))t=16;else if(typeof s=="object")if(o&65){const l=s.default;l&&(l._c&&(l._d=!1),ai(n,l()),l._c&&(l._d=!0));return}else{t=32;const l=s._;!l&&!(sr in s)?s._ctx=Qe:l===3&&Qe&&(Qe.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else ye(s)?(s={default:s,_ctx:Qe},t=32):(s=String(s),o&64?(t=16,s=[a(s)]):t=8);n.children=s,n.shapeFlag|=t}function me(...n){const s={};for(let t=0;t<n.length;t++){const o=n[t];for(const l in o)if(l==="class")s.class!==o.class&&(s.class=Ue([s.class,o.class]));else if(l==="style")s.style=Ze([s.style,o.style]);else if(Mo(l)){const r=s[l],i=o[l];i&&r!==i&&!(ce(r)&&r.includes(i))&&(s[l]=r?[].concat(r,i):i)}else l!==""&&(s[l]=o[l])}return s}function jn(n,s,t,o=null){In(n,s,7,[t,o])}const J8=pd();let Q8=0;function eh(n,s,t){const o=n.type,l=(s?s.appContext:n.appContext)||J8,r={uid:Q8++,vnode:n,type:o,parent:s,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new fu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(o,l),emitsOptions:Hu(o,l),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:o.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=A8(r),r.root=s?s.root:r,r.emit=Qm.bind(null,r),n.ce&&n.ce(r),r}let ze=null;const $n=()=>ze||Qe,Pt=n=>{ze=n,n.scope.on()},lt=()=>{ze&&ze.scope.off(),ze=null},nh=Rs("slot,component");function oa(n,s){const t=s.isNativeTag||cu;(nh(n)||t(n))&&q("Do not use built-in or reserved HTML elements as component id: "+n)}function md(n){return n.vnode.shapeFlag&4}let Eo=!1;function sh(n,s=!1){Eo=s;const{props:t,children:o}=n.vnode,l=md(n);x8(n,t,l,s),L8(n,o);const r=l?th(n,s):void 0;return Eo=!1,r}function th(n,s){var t;const o=n.type;{if(o.name&&oa(o.name,n.appContext.config),o.components){const r=Object.keys(o.components);for(let i=0;i<r.length;i++)oa(r[i],n.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let i=0;i<r.length;i++)Qu(r[i])}o.compilerOptions&&oh()&&q('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=zl(new Proxy(n.ctx,sd)),v8(n);const{setup:l}=o;if(l){const r=n.setupContext=l.length>1?_d(n):null;Pt(n),pt();const i=us(l,n,0,[Ct(n.props),r]);if(ut(),lt(),Ga(i)){if(i.then(lt,lt),s)return i.then(c=>{dc(n,c,s)}).catch(c=>{Kl(c,n,0)});if(n.asyncDep=i,!n.suspense){const c=(t=o.name)!==null&&t!==void 0?t:"Anonymous";q(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else dc(n,i,s)}else hd(n,s)}function dc(n,s,t){ye(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:Le(s)?(ms(s)&&q("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=s,n.setupState=Fu(s),B8(n)):s!==void 0&&q(`setup() should return an object. Received: ${s===null?"null":typeof s}`),hd(n,t)}let la;const oh=()=>!la;function hd(n,s,t){const o=n.type;if(!n.render){if(!s&&la&&!o.render){const l=o.template||li(n).template;if(l){os(n,"compile");const{isCustomElement:r,compilerOptions:i}=n.appContext.config,{delimiters:c,compilerOptions:p}=o,u=We(We({isCustomElement:r,delimiters:c},i),p);o.render=la(l,u),ls(n,"compile")}}n.render=o.render||vn}Pt(n),pt(),D8(n),ut(),lt(),!o.render&&n.render===vn&&!s&&(o.template?q('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):q("Component is missing template or render function."))}function lh(n){return new Proxy(n.attrs,{get(s,t){return xl(),kn(n,"get","$attrs"),s[t]},set(){return q("setupContext.attrs is readonly."),!1},deleteProperty(){return q("setupContext.attrs is readonly."),!1}})}function _d(n){const s=o=>{if(n.exposed&&q("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(ce(o)?l="array":Te(o)&&(l="ref")),l!=="object"&&q(`expose() should be passed a plain object, received ${l}.`)}n.exposed=o||{}};let t;return Object.freeze({get attrs(){return t||(t=lh(n))},get slots(){return Ct(n.slots)},get emit(){return(o,...l)=>n.emit(o,...l)},expose:s})}function tr(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Fu(zl(n.exposed)),{get(s,t){if(t in s)return s[t];if(t in ot)return ot[t](n)},has(s,t){return t in s||t in ot}}))}const rh=/(?:^|[-_])(\w)/g,ah=n=>n.replace(rh,s=>s.toUpperCase()).replace(/[-_]/g,"");function xo(n,s=!0){return ye(n)?n.displayName||n.name:n.name||s&&n.__name}function or(n,s,t=!1){let o=xo(s);if(!o&&s.__file){const l=s.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&n&&n.parent){const l=r=>{for(const i in r)if(r[i]===s)return i};o=l(n.components||n.parent.type.components)||l(n.appContext.components)}return o?ah(o):t?"App":"Anonymous"}function gd(n){return ye(n)&&"__vccOpts"in n}const $=(n,s)=>$m(n,s,Eo);function ih(){return ch().slots}function ch(){const n=$n();return n||q("useContext() called without active instance."),n.setupContext||(n.setupContext=_d(n))}function fn(n,s,t){const o=arguments.length;return o===2?Le(s)&&!ce(s)?ms(s)?M(n,null,[s]):M(n,s):M(n,null,s):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&ms(t)&&(t=[t]),M(n,s,t))}const ph=Symbol("ssrContext"),uh=()=>{{const n=F(ph);return n||q("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function hr(n){return!!(n&&n.__v_isShallow)}function dh(){if(typeof window>"u")return;const n={style:"color:#3ba776"},s={style:"color:#0b1bc9"},t={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(y){return Le(y)?y.__isVue?["div",n,"VueInstance"]:Te(y)?["div",{},["span",n,d(y)],"<",c(y.value),">"]:st(y)?["div",{},["span",n,hr(y)?"ShallowReactive":"Reactive"],"<",c(y),`>${Ls(y)?" (readonly)":""}`]:Ls(y)?["div",{},["span",n,hr(y)?"ShallowReadonly":"Readonly"],"<",c(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const f=[];y.type.props&&y.props&&f.push(i("props",fe(y.props))),y.setupState!==Me&&f.push(i("setup",y.setupState)),y.data!==Me&&f.push(i("data",fe(y.data)));const h=p(y,"computed");h&&f.push(i("computed",h));const m=p(y,"inject");return m&&f.push(i("injected",m)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function i(y,f){return f=We({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],c(f[h],!1)])]]:["span",{}]}function c(y,f=!0){return typeof y=="number"?["span",s,y]:typeof y=="string"?["span",t,JSON.stringify(y)]:typeof y=="boolean"?["span",o,y]:Le(y)?["object",{object:f?fe(y):y}]:["span",t,String(y)]}function p(y,f){const h=y.type;if(ye(h))return;const m={};for(const A in y.ctx)u(h,A,f)&&(m[A]=y.ctx[A]);return m}function u(y,f,h){const m=y[h];if(ce(m)&&m.includes(f)||Le(m)&&f in m||y.extends&&u(y.extends,f,h)||y.mixins&&y.mixins.some(A=>u(A,f,h)))return!0}function d(y){return hr(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const $l="3.2.47",yh="http://www.w3.org/2000/svg",Ks=typeof document<"u"?document:null,yc=Ks&&Ks.createElement("template"),fh={insert:(n,s,t)=>{s.insertBefore(n,t||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,t,o)=>{const l=s?Ks.createElementNS(yh,n):Ks.createElement(n,t?{is:t}:void 0);return n==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:n=>Ks.createTextNode(n),createComment:n=>Ks.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ks.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,t,o,l,r){const i=t?t.previousSibling:s.lastChild;if(l&&(l===r||l.nextSibling))for(;s.insertBefore(l.cloneNode(!0),t),!(l===r||!(l=l.nextSibling)););else{yc.innerHTML=o?`<svg>${n}</svg>`:n;const c=yc.content;if(o){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}s.insertBefore(c,t)}return[i?i.nextSibling:s.firstChild,t?t.previousSibling:s.lastChild]}};function mh(n,s,t){const o=n._vtc;o&&(s=(s?[s,...o]:[...o]).join(" ")),s==null?n.removeAttribute("class"):t?n.setAttribute("class",s):n.className=s}function hh(n,s,t){const o=n.style,l=He(t);if(t&&!l){if(s&&!He(s))for(const r in s)t[r]==null&&ra(o,r,"");for(const r in t)ra(o,r,t[r])}else{const r=o.display;l?s!==t&&(o.cssText=t):s&&n.removeAttribute("style"),"_vod"in n&&(o.display=r)}}const _h=/[^\\];\s*$/,fc=/\s*!important$/;function ra(n,s,t){if(ce(t))t.forEach(o=>ra(n,s,o));else if(t==null&&(t=""),_h.test(t)&&q(`Unexpected semicolon at the end of '${s}' style value: '${t}'`),s.startsWith("--"))n.setProperty(s,t);else{const o=gh(n,s);fc.test(t)?n.setProperty(ys(o),t.replace(fc,""),"important"):n[o]=t}}const mc=["Webkit","Moz","ms"],_r={};function gh(n,s){const t=_r[s];if(t)return t;let o=es(s);if(o!=="filter"&&o in n)return _r[s]=o;o=it(o);for(let l=0;l<mc.length;l++){const r=mc[l]+o;if(r in n)return _r[s]=r}return s}const hc="http://www.w3.org/1999/xlink";function Ah(n,s,t,o,l){if(o&&s.startsWith("xlink:"))t==null?n.removeAttributeNS(hc,s.slice(6,s.length)):n.setAttributeNS(hc,s,t);else{const r=Rf(s);t==null||r&&!au(t)?n.removeAttribute(s):n.setAttribute(s,r?"":t)}}function vh(n,s,t,o,l,r,i){if(s==="innerHTML"||s==="textContent"){o&&i(o,l,r),n[s]=t??"";return}if(s==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const p=t??"";(n.value!==p||n.tagName==="OPTION")&&(n.value=p),t==null&&n.removeAttribute(s);return}let c=!1;if(t===""||t==null){const p=typeof n[s];p==="boolean"?t=au(t):t==null&&p==="string"?(t="",c=!0):p==="number"&&(t=0,c=!0)}try{n[s]=t}catch(p){c||q(`Failed setting prop "${s}" on <${n.tagName.toLowerCase()}>: value ${t} is invalid.`,p)}c&&n.removeAttribute(s)}function kt(n,s,t,o){n.addEventListener(s,t,o)}function Bh(n,s,t,o){n.removeEventListener(s,t,o)}function kh(n,s,t,o,l=null){const r=n._vei||(n._vei={}),i=r[s];if(o&&i)i.value=o;else{const[c,p]=Dh(s);if(o){const u=r[s]=wh(o,l);kt(n,c,u,p)}else i&&(Bh(n,c,i,p),r[s]=void 0)}}const _c=/(?:Once|Passive|Capture)$/;function Dh(n){let s;if(_c.test(n)){s={};let o;for(;o=n.match(_c);)n=n.slice(0,n.length-o[0].length),s[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ys(n.slice(2)),s]}let gr=0;const Ch=Promise.resolve(),bh=()=>gr||(Ch.then(()=>gr=0),gr=Date.now());function wh(n,s){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;In(Eh(o,t.value),s,5,[o])};return t.value=n,t.attached=bh(),t}function Eh(n,s){if(ce(s)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},s.map(o=>l=>!l._stopped&&o&&o(l))}else return s}const gc=/^on[a-z]/,xh=(n,s,t,o,l=!1,r,i,c,p)=>{s==="class"?mh(n,o,l):s==="style"?hh(n,t,o):Mo(s)?Bl(s)||kh(n,s,t,o,i):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Sh(n,s,o,l))?vh(n,s,o,r,i,c,p):(s==="true-value"?n._trueValue=o:s==="false-value"&&(n._falseValue=o),Ah(n,s,o,l))};function Sh(n,s,t,o){return o?!!(s==="innerHTML"||s==="textContent"||s in n&&gc.test(s)&&ye(t)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||gc.test(s)&&He(t)?!1:s in n}const As="transition",Ut="animation",Ad={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fh=We({},i8.props,Ad),Gs=(n,s=[])=>{ce(n)?n.forEach(t=>t(...s)):n&&n(...s)},Ac=n=>n?ce(n)?n.some(s=>s.length>1):n.length>1:!1;function $h(n){const s={};for(const ee in n)ee in Ad||(s[ee]=n[ee]);if(n.css===!1)return s;const{name:t="v",type:o,duration:l,enterFromClass:r=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:p=r,appearActiveClass:u=i,appearToClass:d=c,leaveFromClass:y=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,m=Th(l),A=m&&m[0],v=m&&m[1],{onBeforeEnter:w,onEnter:k,onEnterCancelled:D,onLeave:x,onLeaveCancelled:L,onBeforeAppear:G=w,onAppear:X=k,onAppearCancelled:I=D}=s,K=(ee,De,Oe)=>{Bs(ee,De?d:c),Bs(ee,De?u:i),Oe&&Oe()},oe=(ee,De)=>{ee._isLeaving=!1,Bs(ee,y),Bs(ee,h),Bs(ee,f),De&&De()},ue=ee=>(De,Oe)=>{const Se=ee?X:k,qe=()=>K(De,ee,Oe);Gs(Se,[De,qe]),vc(()=>{Bs(De,ee?p:r),rs(De,ee?d:c),Ac(Se)||Bc(De,o,A,qe)})};return We(s,{onBeforeEnter(ee){Gs(w,[ee]),rs(ee,r),rs(ee,i)},onBeforeAppear(ee){Gs(G,[ee]),rs(ee,p),rs(ee,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(ee,De){ee._isLeaving=!0;const Oe=()=>oe(ee,De);rs(ee,y),Bd(),rs(ee,f),vc(()=>{ee._isLeaving&&(Bs(ee,y),rs(ee,h),Ac(x)||Bc(ee,o,v,Oe))}),Gs(x,[ee,Oe])},onEnterCancelled(ee){K(ee,!1),Gs(D,[ee])},onAppearCancelled(ee){K(ee,!0),Gs(I,[ee])},onLeaveCancelled(ee){oe(ee),Gs(L,[ee])}})}function Th(n){if(n==null)return null;if(Le(n))return[Ar(n.enter),Ar(n.leave)];{const s=Ar(n);return[s,s]}}function Ar(n){const s=Wf(n);return Im(s,"<transition> explicit duration"),s}function rs(n,s){s.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(s)}function Bs(n,s){s.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:t}=n;t&&(t.delete(s),t.size||(n._vtc=void 0))}function vc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let jh=0;function Bc(n,s,t,o){const l=n._endId=++jh,r=()=>{l===n._endId&&o()};if(t)return setTimeout(r,t);const{type:i,timeout:c,propCount:p}=vd(n,s);if(!i)return o();const u=i+"end";let d=0;const y=()=>{n.removeEventListener(u,f),r()},f=h=>{h.target===n&&++d>=p&&y()};setTimeout(()=>{d<p&&y()},c+1),n.addEventListener(u,f)}function vd(n,s){const t=window.getComputedStyle(n),o=m=>(t[m]||"").split(", "),l=o(`${As}Delay`),r=o(`${As}Duration`),i=kc(l,r),c=o(`${Ut}Delay`),p=o(`${Ut}Duration`),u=kc(c,p);let d=null,y=0,f=0;s===As?i>0&&(d=As,y=i,f=r.length):s===Ut?u>0&&(d=Ut,y=u,f=p.length):(y=Math.max(i,u),d=y>0?i>u?As:Ut:null,f=d?d===As?r.length:p.length:0);const h=d===As&&/\b(transform|all)(,|$)/.test(o(`${As}Property`).toString());return{type:d,timeout:y,propCount:f,hasTransform:h}}function kc(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((t,o)=>Dc(t)+Dc(n[o])))}function Dc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Bd(){return document.body.offsetHeight}const kd=new WeakMap,Dd=new WeakMap,Cd={name:"TransitionGroup",props:We({},Fh,{tag:String,moveClass:String}),setup(n,{slots:s}){const t=$n(),o=zu();let l,r;return Ql(()=>{if(!l.length)return;const i=n.moveClass||`${n.name||"v"}-move`;if(!Rh(l[0].el,t.vnode.el,i))return;l.forEach(Ih),l.forEach(Lh);const c=l.filter(Nh);Bd(),c.forEach(p=>{const u=p.el,d=u.style;rs(u,i),d.transform=d.webkitTransform=d.transitionDuration="";const y=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",y),u._moveCb=null,Bs(u,i))};u.addEventListener("transitionend",y)})}),()=>{const i=fe(n),c=$h(i);let p=i.tag||je;l=r,r=s.default?ti(s.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?jt(d,bo(d,c,o,t)):q("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];jt(d,bo(d,c,o,t)),kd.set(d,d.el.getBoundingClientRect())}return M(p,null,r)}}},Oh=n=>delete n.mode;Cd.props;const Ph=Cd;function Ih(n){const s=n.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function Lh(n){Dd.set(n,n.el.getBoundingClientRect())}function Nh(n){const s=kd.get(n),t=Dd.get(n),o=s.left-t.left,l=s.top-t.top;if(o||l){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",n}}function Rh(n,s,t){const o=n.cloneNode();n._vtc&&n._vtc.forEach(i=>{i.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),t.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const l=s.nodeType===1?s:s.parentNode;l.appendChild(o);const{hasTransform:r}=vd(o);return l.removeChild(o),r}const Cc=n=>{const s=n.props["onUpdate:modelValue"]||!1;return ce(s)?t=>bs(s,t):s};function Mh(n){n.target.composing=!0}function bc(n){const s=n.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const qh={created(n,{modifiers:{lazy:s,trim:t,number:o}},l){n._assign=Cc(l);const r=o||l.props&&l.props.type==="number";kt(n,s?"change":"input",i=>{if(i.target.composing)return;let c=n.value;t&&(c=c.trim()),r&&(c=Gr(c)),n._assign(c)}),t&&kt(n,"change",()=>{n.value=n.value.trim()}),s||(kt(n,"compositionstart",Mh),kt(n,"compositionend",bc),kt(n,"change",bc))},mounted(n,{value:s}){n.value=s??""},beforeUpdate(n,{value:s,modifiers:{lazy:t,trim:o,number:l}},r){if(n._assign=Cc(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||o&&n.value.trim()===s||(l||n.type==="number")&&Gr(n.value)===s))return;const i=s??"";n.value!==i&&(n.value=i)}},Gh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wc=(n,s)=>t=>{if(!("key"in t))return;const o=ys(t.key);if(s.some(l=>l===o||Gh[l]===o))return n(t)},bd={beforeMount(n,{value:s},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&s?t.beforeEnter(n):Wt(n,s)},mounted(n,{value:s},{transition:t}){t&&s&&t.enter(n)},updated(n,{value:s,oldValue:t},{transition:o}){!s!=!t&&(o?s?(o.beforeEnter(n),Wt(n,!0),o.enter(n)):o.leave(n,()=>{Wt(n,!1)}):Wt(n,s))},beforeUnmount(n,{value:s}){Wt(n,s)}};function Wt(n,s){n.style.display=s?n._vod:"none"}const Hh=We({patchProp:xh},fh);let Ec;function Vh(){return Ec||(Ec=G8(Hh))}const Uh=(...n)=>{const s=Vh().createApp(...n);Wh(s),zh(s);const{mount:t}=s;return s.mount=o=>{const l=Kh(o);if(!l)return;const r=s._component;!ye(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const i=t(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},s};function Wh(n){Object.defineProperty(n.config,"isNativeTag",{value:s=>ru(s)||Lf(s),writable:!1})}function zh(n){{const s=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return s},set(){q("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const t=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return q(o),t},set(){q(o)}})}}function Kh(n){if(He(n)){const s=document.querySelector(n);return s||q(`Failed to mount app: mount target selector "${n}" returned null.`),s}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&q('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function Yh(){dh()}Yh();function aa(n,s={},t){for(const o in n){const l=n[o],r=t?`${t}:${o}`:o;typeof l=="object"&&l!==null?aa(l,s,r):typeof l=="function"&&(s[r]=l)}return s}function Xh(n,s){return n.reduce((t,o)=>t.then(()=>o.apply(void 0,s)),Promise.resolve())}function Zh(n,s){return Promise.all(n.map(t=>t.apply(void 0,s)))}function vr(n,s){for(const t of n)t(s)}class Jh{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,t,o={}){if(!s||typeof t!="function")return()=>{};const l=s;let r;for(;this._deprecatedHooks[s];)r=this._deprecatedHooks[s],s=r.to;if(r&&!o.allowDeprecated){let i=r.message;i||(i=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(t),()=>{t&&(this.removeHook(s,t),t=void 0)}}hookOnce(s,t){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,t(...r));return o=this.hook(s,l),o}removeHook(s,t){if(this._hooks[s]){const o=this._hooks[s].indexOf(t);o!==-1&&this._hooks[s].splice(o,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,t){this._deprecatedHooks[s]=typeof t=="string"?{to:t}:t;const o=this._hooks[s]||[];this._hooks[s]=void 0;for(const l of o)this.hook(s,l)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const t in s)this.deprecateHook(t,s[t])}addHooks(s){const t=aa(s),o=Object.keys(t).map(l=>this.hook(l,t[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(s){const t=aa(s);for(const o in t)this.removeHook(o,t[o])}callHook(s,...t){return this.callHookWith(Xh,s,...t)}callHookParallel(s,...t){return this.callHookWith(Zh,s,...t)}callHookWith(s,t,...o){const l=this._before||this._after?{name:t,args:o,context:{}}:void 0;this._before&&vr(this._before,l);const r=s(this._hooks[t]||[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&vr(this._after,l)}):(this._after&&l&&vr(this._after,l),r)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{const t=this._before.indexOf(s);t!==-1&&this._before.splice(t,1)}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{const t=this._after.indexOf(s);t!==-1&&this._after.splice(t,1)}}}function Qh(){return new Jh}function e_(n){return Array.isArray(n)?n:[n]}const wd=["title","script","style","noscript"],ii=["base","meta","link","style","script","noscript"],n_=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],s_=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],t_=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Ed(n){let s=9;for(let t=0;t<n.length;)s=Math.imul(s^n.charCodeAt(t++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Tl(n){return Ed(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([s,t])=>`${s}:${String(t)}`).join(",")}`)}function o_(n){let s=9;for(const t of n)for(let o=0;o<t.length;)s=Math.imul(s^t.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function xd(n,s){const{props:t,tag:o}=n;if(s_.includes(o))return o;if(o==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof t[r]<"u"){const i=String(t[r]);return s&&!s(i)?!1:`${o}:${r}:${i}`}return!1}const ll=(n,s=!1,t)=>{const{tag:o,$el:l}=n;l&&(Object.entries(o.props).forEach(([r,i])=>{i=String(i);const c=`attr:${r}`;if(r==="class"){if(!i)return;for(const p of i.split(" ")){const u=`${c}:${p}`;t&&t(n,u,()=>l.classList.remove(p)),l.classList.contains(p)||l.classList.add(p)}return}t&&!r.startsWith("data-h-")&&t(n,c,()=>l.removeAttribute(r)),(s||l.getAttribute(r)!==i)&&l.setAttribute(r,i)}),wd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))};let zt=!1;async function Sd(n,s={}){var f,h;const t={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const o=s.document||n.resolvedOptions.document||window.document,l=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(zt=zt||n._hash||!1,zt)){const m=o_(l.map(A=>A.tag._h));if(zt===m)return;zt=m}const r=n._popSideEffectQueue();n.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([A,v])=>{r[A]=v})});const i=(m,A,v)=>{A=`${m.renderId}:${A}`,m.entry&&(m.entry._sde[A]=v),delete r[A]};function c(m){const A=n.headEntries().find(w=>w._i===m._e),v={renderId:m._d||Tl(m),$el:null,shouldRender:!0,tag:m,entry:A,markSideEffect:(w,k)=>i(v,w,k)};return v}const p=[],u={body:[],head:[]},d=m=>{n._elMap[m.renderId]=m.$el,p.push(m),i(m,"el",()=>{var A;(A=m.$el)==null||A.remove(),delete n._elMap[m.renderId]})};for(const m of l){if(await n.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:A}=m;if(A.tag==="title"){o.title=A.textContent||"",p.push(m);continue}if(A.tag==="htmlAttrs"||A.tag==="bodyAttrs"){m.$el=o[A.tag==="htmlAttrs"?"documentElement":"body"],ll(m,!1,i),p.push(m);continue}if(m.$el=n._elMap[m.renderId],!m.$el&&A.key&&(m.$el=o.querySelector(`${(f=A.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${A.tag}[data-h-${A._h}]`)),m.$el){m.tag._d&&ll(m),d(m);continue}u[(h=A.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const y={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,A])=>{var w;if(!A.length)return;const v=(w=o==null?void 0:o[m])==null?void 0:w.children;if(v){for(const k of[...v].reverse()){const D=k.tagName.toLowerCase();if(!ii.includes(D))continue;const x=k.getAttributeNames().reduce((I,K)=>({...I,[K]:k.getAttribute(K)}),{}),L={tag:D,props:x};k.innerHTML&&(L.innerHTML=k.innerHTML);const G=Tl(L);let X=A.findIndex(I=>(I==null?void 0:I.renderId)===G);if(X===-1){const I=xd(L);X=A.findIndex(K=>(K==null?void 0:K.tag._d)&&K.tag._d===I)}if(X!==-1){const I=A[X];I.$el=k,ll(I),d(I),delete A[X]}}A.forEach(k=>{const D=k.tag.tagPosition||"head";y[D]=y[D]||o.createDocumentFragment(),k.$el||(k.$el=o.createElement(k.tag.tag),ll(k,!0)),y[D].appendChild(k.$el),d(k)})}}),y.head&&o.head.appendChild(y.head),y.bodyOpen&&o.body.insertBefore(y.bodyOpen,o.body.firstChild),y.bodyClose&&o.body.appendChild(y.bodyClose);for(const m of p)await n.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Br=null;async function Fd(n,s={}){function t(){return Br=null,Sd(n,s)}const o=s.delayFn||(l=>setTimeout(l,10));return Br=Br||new Promise(l=>o(()=>l(t())))}const l_=n=>({hooks:{"entries:updated":function(s){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let t=n==null?void 0:n.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),Fd(s,{document:(n==null?void 0:n.document)||window.document,delayFn:t})}}});function r_(n){var s;return((s=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const xc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Sc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const s=n.tagPriority||n.tag;return s in xc?xc[s]:10}const a_=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function i_(){return{hooks:{"tags:resolve":n=>{const s=t=>{var o;return(o=n.tags.find(l=>l._d===t))==null?void 0:o._p};for(const{prefix:t,offset:o}of a_)for(const l of n.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(t))){const r=s(l.tagPriority.replace(t,""));typeof r<"u"&&(l._p=r+o)}n.tags.sort((t,o)=>t._p-o._p).sort((t,o)=>Sc(t)-Sc(o))}}}}const Fc=(n,s)=>n==null?s||null:typeof n=="function"?n(s):n.replace("%s",s??""),c_=()=>({hooks:{"tags:resolve":n=>{const{tags:s}=n;let t=s.findIndex(l=>l.tag==="titleTemplate");const o=s.findIndex(l=>l.tag==="title");if(o!==-1&&t!==-1){const l=Fc(s[t].textContent,s[o].textContent);l!==null?s[o].textContent=l||s[o].textContent:delete s[o]}else if(t!==-1){const l=Fc(s[t].textContent);l!==null&&(s[t].textContent=l,s[t].tag="title",t=-1)}t!==-1&&delete s[t],n.tags=s.filter(Boolean)}}}),p_=()=>({hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}),$d=typeof window<"u",u_=()=>({hooks:{"tag:normalise":n=>{var r,i;const{tag:s,entry:t,resolvedOptions:o}=n;o.experimentalHashHydration===!0&&(s._h=Tl(s));const l=typeof s.props._dynamic<"u";!ii.includes(s.tag)||!s.key||$d||(i=(r=jd())==null?void 0:r.resolvedOptions)!=null&&i.document||(t._m==="server"||l)&&(s._h=s._h||Tl(s),s.props[`data-h-${s._h}`]="")},"tags:resolve":n=>{n.tags=n.tags.map(s=>(delete s.props._dynamic,s))}}}),$c=["script","link","bodyAttrs"],d_=()=>{const n=(s,t)=>{const o={},l={};Object.entries(t.props).forEach(([i,c])=>{i.startsWith("on")&&typeof c=="function"?l[i]=c:o[i]=c});let r;return s==="dom"&&t.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(t=>(!$c.includes(t.tag)||!Object.entries(t.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(t.props=n("ssr",t).props),t))},"dom:beforeRenderTag":function(s){if(!$c.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([r,i])=>r.startsWith("on")&&typeof i=="function"))return;const{props:t,eventHandlers:o,delayedSrc:l}=n("dom",s.tag);Object.keys(o).length&&(s.tag.props=t,s.tag._eventHandlers=o,s.tag._delayedSrc=l)},"dom:renderTag":function(s){const t=s.$el;if(!s.tag._eventHandlers||!t)return;const o=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(s.tag._eventHandlers).forEach(([l,r])=>{const i=`${s.tag._d||s.tag._p}:${l}`,c=l.slice(2).toLowerCase(),p=`data-h-${c}`;if(s.markSideEffect(i,()=>{}),t.hasAttribute(p))return;const u=r;t.setAttribute(p,""),o.addEventListener(c,u),s.entry&&(s.entry._sde[i]=()=>{o.removeEventListener(c,u),t.removeAttribute(p)})}),s.tag._delayedSrc&&t.setAttribute("src",s.tag._delayedSrc)}}}},y_=["templateParams","htmlAttrs","bodyAttrs"],f_=n=>{n=n||{};const s=n.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:t}){s.forEach(l=>{t.props[l]&&(t.key=t.props[l],delete t.props[l])});const o=t.key?`${t.tag}:${t.key}`:xd(t);o&&(t._d=o)},"tags:resolve":function(t){const o={};t.tags.forEach(r=>{const i=r._d||r._p,c=o[i];if(c){let p=r==null?void 0:r.tagDuplicateStrategy;if(!p&&y_.includes(r.tag)&&(p="merge"),p==="merge"){const d=c.props;["class","style"].forEach(y=>{r.props[y]&&d[y]&&(y==="style"&&!d[y].endsWith(";")&&(d[y]+=";"),r.props[y]=`${d[y]} ${r.props[y]}`)}),o[i].props={...d,...r.props};return}else if(r._e===c._e){c._duped=c._duped||[],r._d=`${c._d}:${c._duped.length+1}`,c._duped.push(r);return}const u=Object.keys(r.props).length;if((u===0||u===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete o[i];return}}o[i]=r});const l=[];Object.values(o).forEach(r=>{const i=r._duped;delete r._duped,l.push(r),i&&l.push(...i)}),t.tags=l}}}};function kr(n,s){const t=(l,r)=>{let i;return r==="pageTitle"||r==="s"?i=s.pageTitle:r.includes(".")?i=r.split(".").reduce((c,p)=>c[p]||"",s):i=s[r],i||""};let o=n.replace(/%(\w+\.+\w+)/g,t).replace(/%(\w+)/g,t).trim();return s.separator&&(o.endsWith(s.separator)&&(o=o.slice(0,-s.separator.length).trim()),o.startsWith(s.separator)&&(o=o.slice(s.separator.length).trim()),o=o.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),o}function m_(){return{hooks:{"tags:resolve":n=>{var r;const{tags:s}=n,t=(r=s.find(i=>i.tag==="title"))==null?void 0:r.textContent,o=s.findIndex(i=>i.tag==="templateParams"),l=o!==-1?s[o].textContent:{};l.pageTitle=l.pageTitle||t||"";for(const i of s)["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string"?i.textContent=kr(i.textContent,l):i.tag==="meta"&&typeof i.props.content=="string"?i.props.content=kr(i.props.content,l):i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string"&&(i.innerHTML=kr(i.innerHTML,l));n.tags=s.filter(i=>i.tag!=="templateParams")}}}}let Td;const h_=n=>Td=n,jd=()=>Td;async function __(n,s){const t={tag:n,props:{}};return["title","titleTemplate","templateParams"].includes(n)?(t.textContent=s instanceof Promise?await s:s,t):typeof s=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?t.props.src=s:(t.innerHTML=s,t.key=Ed(s)),t):!1:(t.props=await A_(n,{...s}),t.props.children&&(t.props.innerHTML=t.props.children),delete t.props.children,Object.keys(t.props).filter(o=>t_.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||wd.includes(t.tag))&&(t[o]=t.props[o]),delete t.props[o]}),["innerHTML","textContent"].forEach(o=>{if(t.tag==="script"&&typeof t[o]=="string"&&["application/ld+json","application/json"].includes(t.props.type))try{t[o]=JSON.parse(t[o])}catch{t[o]=""}typeof t[o]=="object"&&(t[o]=JSON.stringify(t[o]))}),t.props.class&&(t.props.class=g_(t.props.class)),t.props.content&&Array.isArray(t.props.content)?t.props.content.map(o=>({...t,props:{...t.props,content:o}})):t)}function g_(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(s=>n[s])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function A_(n,s){for(const t of Object.keys(s)){const o=t.startsWith("data-");s[t]instanceof Promise&&(s[t]=await s[t]),String(s[t])==="true"?s[t]=o?"true":"":String(s[t])==="false"&&(o?s[t]="false":delete s[t])}return s}const v_=10;async function B_(n){const s=[];return Object.entries(n.resolvedInput).filter(([t,o])=>typeof o<"u"&&n_.includes(t)).forEach(([t,o])=>{const l=e_(o);s.push(...l.map(r=>__(t,r)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((t,o)=>(t._e=n._i,t._p=(n._i<<v_)+o,t))}const k_=()=>[f_(),i_(),m_(),c_(),u_(),d_(),p_()],D_=(n={})=>[l_({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})];function C_(n={}){const s=b_({...n,plugins:[...D_(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=r_(s.resolvedOptions.document)),h_(s),s}function b_(n={}){let s=[],t={},o=0;const l=Qh();n!=null&&n.hooks&&l.addHooks(n.hooks),n.plugins=[...k_(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&l.addHooks(c.hooks)),n.document=n.document||($d?document:void 0);const r=()=>l.callHook("entries:updated",i),i={resolvedOptions:n,headEntries(){return s},get hooks(){return l},use(c){c.hooks&&l.addHooks(c.hooks)},push(c,p){const u={_i:o++,input:c,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),s.push(u),r(),{dispose(){s=s.filter(d=>d._i!==u._i?!0:(t={...t,...d._sde||{}},d._sde={},r(),!1))},patch(d){s=s.map(y=>(y._i===u._i&&(u.input=y.input=d,r()),y))}}},async resolveTags(){const c={tags:[],entries:[...s]};await l.callHook("entries:resolve",c);for(const p of c.entries){const u=p._t||(d=>d);p.resolvedInput=u(p.resolvedInput||p.input);for(const d of await B_(p)){const y={tag:d,entry:p,resolvedOptions:i.resolvedOptions};await l.callHook("tag:normalise",y),c.tags.push(y.tag)}}return await l.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...t};return t={},c},_elMap:{}};return i.hooks.callHook("init",i),i}function w_(n){return typeof n=="function"?n():b(n)}function jl(n,s=""){if(n instanceof Promise)return n;const t=w_(n);if(!n||!t)return t;if(Array.isArray(t))return t.map(o=>jl(o,s));if(typeof t=="object"){let o=!1;const l=Object.fromEntries(Object.entries(t).map(([r,i])=>r==="titleTemplate"||r.startsWith("on")?[r,b(i)]:((typeof i=="function"||Te(i))&&(o=!0),[r,jl(i,r)])));return o&&ii.includes(String(s))&&(l._dynamic=!0),l}return t}const E_=$l.startsWith("3"),x_=typeof window<"u",Od="usehead";function ci(){return $n()&&F(Od)||jd()}function S_(n){return{install(t){E_&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(Od,n))}}.install}function F_(n={}){const s=C_({...n,domDelayFn:t=>setTimeout(()=>tn(()=>t()),10),plugins:[$_(),...(n==null?void 0:n.plugins)||[]]});return s.install=S_(s),s}const $_=()=>({hooks:{"entries:resolve":function(n){for(const s of n.entries)s.resolvedInput=jl(s.input)}}});function T_(n,s={}){const t=ci(),o=Q(!1),l=Q({});dt(()=>{l.value=o.value?{}:jl(n)});const r=t.push(l.value,s);return ve(l,c=>{r.patch(c)}),$n()&&(Vo(()=>{r.dispose()}),Zu(()=>{o.value=!0}),Xu(()=>{o.value=!1})),r}function j_(n,s={}){return ci().push(n,s)}function pi(n,s={}){var o;const t=ci();if(t){const l=x_||!!((o=t.resolvedOptions)!=null&&o.document);return s.mode==="server"&&l||s.mode==="client"&&!l?void 0:l?T_(n,s):j_(n,s)}}const O_=n=>pi({htmlAttrs:n});function P_(n,s){const t=F_(s||{}),o={unhead:t,install(l){$l.startsWith("3")&&(l.config.globalProperties.$head=t,l.provide("usehead",t))},use(l){t.use(l)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(l,r){return t.push(l,r)},addEntry(l,r){return t.push(l,r)},addHeadObjs(l,r){return t.push(l,r)},addReactiveEntry(l,r){const i=pi(l,r);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?Sd(t,{document:l}):Fd(t,{delayFn:i=>setTimeout(()=>i(),50),document:l})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=o.addHeadObjs,t.updateDOM=o.updateDOM,t.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),n&&o.addHeadObjs(n),o}const po=Symbol("v-click-clicks"),Ys=Symbol("v-click-clicks-elements"),ia=Symbol("v-click-clicks-order-map"),uo=Symbol("v-click-clicks-disabled"),Pd=Symbol("slidev-slide-scale"),O=Symbol("slidev-slidev-context"),I_=Symbol("slidev-route"),L_=Symbol("slidev-slide-context"),zs="slidev-vclick-target",Dr="slidev-vclick-hidden",N_="slidev-vclick-fade",Cr="slidev-vclick-hidden-explicitly",Kt="slidev-vclick-current",rl="slidev-vclick-prior",R_=["localhost","127.0.0.1"];let M_=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,t)=>(t&=63,t<36?s+=t.toString(36):t<62?s+=(t-26).toString(36).toUpperCase():t>62?s+="-":s+="_",s),"");function Id(n){return n=n??[],Array.isArray(n)?n:[n]}function ca(n,s){if(!n)return!1;const t=n.indexOf(s);return t>=0?(n.splice(t,1),!0):!1}function q_(...n){let s,t,o;n.length===1?(s=0,o=1,[t]=n):[s,t,o=1]=n;const l=[];let r=s;for(;r<t;)l.push(r),r+=o||1;return l}function G_(n){return n!=null}function H_(n,s){return Object.fromEntries(Object.entries(n).map(([t,o])=>s(t,o)).filter(G_))}const lo={theme:"seriph",title:"Admin panel (R)evolution for your Symfony projects",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:!1,class:"text-center"},$e=lo,$s=$e.aspectRatio??16/9,Ts=$e.canvasWidth??980,ui=Math.ceil(Ts/$s),di=$(()=>H_($e.themeConfig||{},(n,s)=>[`--slidev-theme-${n}`,s]));function Nn(n,s,t){Object.defineProperty(n,s,{value:t,writable:!0,enumerable:!1})}const ft=Ve({page:0,clicks:0});let V_=[],U_=[];Nn(ft,"$syncUp",!0);Nn(ft,"$syncDown",!0);Nn(ft,"$paused",!1);Nn(ft,"$onSet",n=>V_.push(n));Nn(ft,"$onPatch",n=>U_.push(n));Nn(ft,"$patch",async()=>!1);function Ld(n,s,t=!1){const o=[];let l=!1,r=!1,i,c;const p=Ve(s);function u(h){o.push(h)}function d(h,m){p[h]!==m&&(clearTimeout(i),l=!0,p[h]=m,i=setTimeout(()=>l=!1,0))}function y(h){l||(clearTimeout(c),r=!0,Object.entries(h).forEach(([m,A])=>{p[m]=A}),c=setTimeout(()=>r=!1,0))}function f(h){let m;t?t&&window.addEventListener("storage",v=>{v&&v.key===h&&v.newValue&&y(JSON.parse(v.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",v=>y(v.data)));function A(){!t&&m&&!r?m.postMessage(fe(p)):t&&!r&&window.localStorage.setItem(h,JSON.stringify(p)),l||o.forEach(v=>v(p))}if(ve(p,A,{deep:!0}),t){const v=window.localStorage.getItem(h);v&&y(JSON.parse(v))}}return{init:f,onPatch:u,patch:d,state:p}}const{init:W_,onPatch:z_,patch:Yt,state:br}=Ld(ft,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),mt=Ve({});let K_=[],Y_=[];Nn(mt,"$syncUp",!0);Nn(mt,"$syncDown",!0);Nn(mt,"$paused",!1);Nn(mt,"$onSet",n=>K_.push(n));Nn(mt,"$onPatch",n=>Y_.push(n));Nn(mt,"$patch",async()=>!1);const{init:X_,onPatch:Z_,patch:Nd,state:Ol}=Ld(mt,{},!1),J_="modulepreload",Q_=function(n){return"/admin-panel-revolution-for-your-symfony-projects/"+n},Tc={},js=function(s,t,o){if(!t||t.length===0)return s();const l=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=Q_(r),r in Tc)return;Tc[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const y=l[d];if(y.href===r&&(!i||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":J_,i||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),i)return new Promise((d,y)=>{u.addEventListener("load",d),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())};var jc;const Un=typeof window<"u",e5=n=>typeof n<"u",n5=Object.prototype.toString,So=n=>typeof n=="function",s5=n=>typeof n=="number",Rd=n=>typeof n=="string",pa=n=>n5.call(n)==="[object Object]",ua=()=>+Date.now(),Ft=()=>{},t5=Un&&((jc=window==null?void 0:window.navigator)==null?void 0:jc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ln(n){return typeof n=="function"?n():b(n)}function o5(n,s){function t(...o){return new Promise((l,r)=>{Promise.resolve(n(()=>s.apply(this,o),{fn:s,thisArg:this,args:o})).then(l).catch(r)})}return t}const Md=n=>n();function l5(n=Md){const s=Q(!0);function t(){s.value=!1}function o(){s.value=!0}const l=(...r)=>{s.value&&n(...r)};return{isActive:Zn(s),pause:t,resume:o,eventFilter:l}}function r5(n){return n}function a5(n,s){var t;if(typeof n=="number")return n+s;const o=((t=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",l=n.slice(o.length),r=parseFloat(o)+s;return Number.isNaN(r)?n:r+l}function i5(n,s){let t,o,l;const r=Q(!0),i=()=>{r.value=!0,l()};ve(n,i,{flush:"sync"});const c=So(s)?s:s.get,p=So(s)?void 0:s.set,u=$u((d,y)=>(o=d,l=y,{get(){return r.value&&(t=c(),r.value=!1),o(),t},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function ss(n){return Ua()?(mu(n),!0):!1}function c5(n){if(!Te(n))return Ve(n);const s=new Proxy({},{get(t,o,l){return b(Reflect.get(n.value,o,l))},set(t,o,l){return Te(n.value[o])&&!Te(l)?n.value[o].value=l:n.value[o]=l,!0},deleteProperty(t,o){return Reflect.deleteProperty(n.value,o)},has(t,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(s)}function qd(n){return typeof n=="function"?$(n):Q(n)}var p5=Object.defineProperty,u5=Object.defineProperties,d5=Object.getOwnPropertyDescriptors,Oc=Object.getOwnPropertySymbols,y5=Object.prototype.hasOwnProperty,f5=Object.prototype.propertyIsEnumerable,Pc=(n,s,t)=>s in n?p5(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,m5=(n,s)=>{for(var t in s||(s={}))y5.call(s,t)&&Pc(n,t,s[t]);if(Oc)for(var t of Oc(s))f5.call(s,t)&&Pc(n,t,s[t]);return n},h5=(n,s)=>u5(n,d5(s));function _5(n){if(!Te(n))return Em(n);const s=Array.isArray(n.value)?new Array(n.value.length):{};for(const t in n.value)s[t]=$u(()=>({get(){return n.value[t]},set(o){if(Array.isArray(n.value)){const l=[...n.value];l[t]=o,n.value=l}else{const l=h5(m5({},n.value),{[t]:o});Object.setPrototypeOf(l,n.value),n.value=l}}}));return s}function yi(n,s=!0){$n()?yt(n):s?n():tn(n)}function g5(n){$n()&&er(n)}function A5(n,s=1e3,t={}){const{immediate:o=!0,immediateCallback:l=!1}=t;let r=null;const i=Q(!1);function c(){r&&(clearInterval(r),r=null)}function p(){i.value=!1,c()}function u(){const d=ln(s);d<=0||(i.value=!0,l&&n(),c(),r=setInterval(n,d))}if(o&&Un&&u(),Te(s)||So(s)){const d=ve(s,()=>{i.value&&Un&&u()});ss(d)}return ss(p),{isActive:i,pause:p,resume:u}}function v5(n,s,t={}){const{immediate:o=!0}=t,l=Q(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,i()}function p(...u){i(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,n(...u)},ln(s))}return o&&(l.value=!0,Un&&p()),ss(c),{isPending:Zn(l),start:p,stop:c}}function Gd(n=!1,s={}){const{truthyValue:t=!0,falsyValue:o=!1}=s,l=Te(n),r=Q(n);function i(c){if(arguments.length)return r.value=c,r.value;{const p=ln(t);return r.value=r.value===p?ln(o):p,r.value}}return l?i:[r,i]}var Ic=Object.getOwnPropertySymbols,B5=Object.prototype.hasOwnProperty,k5=Object.prototype.propertyIsEnumerable,D5=(n,s)=>{var t={};for(var o in n)B5.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&Ic)for(var o of Ic(n))s.indexOf(o)<0&&k5.call(n,o)&&(t[o]=n[o]);return t};function C5(n,s,t={}){const o=t,{eventFilter:l=Md}=o,r=D5(o,["eventFilter"]);return ve(n,o5(l,s),r)}var b5=Object.defineProperty,w5=Object.defineProperties,E5=Object.getOwnPropertyDescriptors,Pl=Object.getOwnPropertySymbols,Hd=Object.prototype.hasOwnProperty,Vd=Object.prototype.propertyIsEnumerable,Lc=(n,s,t)=>s in n?b5(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,x5=(n,s)=>{for(var t in s||(s={}))Hd.call(s,t)&&Lc(n,t,s[t]);if(Pl)for(var t of Pl(s))Vd.call(s,t)&&Lc(n,t,s[t]);return n},S5=(n,s)=>w5(n,E5(s)),F5=(n,s)=>{var t={};for(var o in n)Hd.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&Pl)for(var o of Pl(n))s.indexOf(o)<0&&Vd.call(n,o)&&(t[o]=n[o]);return t};function $5(n,s,t={}){const o=t,{eventFilter:l}=o,r=F5(o,["eventFilter"]),{eventFilter:i,pause:c,resume:p,isActive:u}=l5(l);return{stop:C5(n,s,S5(x5({},r),{eventFilter:i})),pause:c,resume:p,isActive:u}}function xn(n){var s;const t=ln(n);return(s=t==null?void 0:t.$el)!=null?s:t}const nn=Un?window:void 0,Ud=Un?window.document:void 0,T5=Un?window.navigator:void 0;function Be(...n){let s,t,o,l;if(Rd(n[0])||Array.isArray(n[0])?([t,o,l]=n,s=nn):[s,t,o,l]=n,!s)return Ft;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const r=[],i=()=>{r.forEach(d=>d()),r.length=0},c=(d,y,f,h)=>(d.addEventListener(y,f,h),()=>d.removeEventListener(y,f,h)),p=ve(()=>[xn(s),ln(l)],([d,y])=>{i(),d&&r.push(...t.flatMap(f=>o.map(h=>c(d,f,h,y))))},{immediate:!0,flush:"post"}),u=()=>{p(),i()};return ss(u),u}let Nc=!1;function j5(n,s,t={}){const{window:o=nn,ignore:l=[],capture:r=!0,detectIframe:i=!1}=t;if(!o)return;t5&&!Nc&&(Nc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",Ft)));let c=!0;const p=f=>l.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=xn(h);return m&&(f.target===m||f.composedPath().includes(m))}}),d=[Be(o,"click",f=>{const h=xn(n);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!p(f)),!c){c=!0;return}s(f)}},{passive:!0,capture:r}),Be(o,"pointerdown",f=>{const h=xn(n);h&&(c=!f.composedPath().includes(h)&&!p(f))},{passive:!0}),i&&Be(o,"blur",f=>{var h;const m=xn(n);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&s(f)})].filter(Boolean);return()=>d.forEach(f=>f())}const O5=n=>typeof n=="function"?n:typeof n=="string"?s=>s.key===n:Array.isArray(n)?s=>n.includes(s.key):()=>!0;function P5(...n){let s,t,o={};n.length===3?(s=n[0],t=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(s=!0,t=n[0],o=n[1]):(s=n[0],t=n[1]):(s=!0,t=n[0]);const{target:l=nn,eventName:r="keydown",passive:i=!1}=o,c=O5(s);return Be(l,r,u=>{c(u)&&t(u)},i)}function I5(n={}){var s;const{window:t=nn}=n,o=(s=n.document)!=null?s:t==null?void 0:t.document,l=i5(()=>null,()=>o==null?void 0:o.activeElement);return t&&(Be(t,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Be(t,"focus",l.trigger,!0)),l}function Wo(n,s=!1){const t=Q(),o=()=>t.value=Boolean(n());return o(),yi(o,s),t}function Dt(n,s={}){const{window:t=nn}=s,o=Wo(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let l;const r=Q(!1),i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{o.value&&(i(),l=t.matchMedia(qd(n).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",c):l.addListener(c))};return dt(c),ss(()=>i()),r}const L5={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var N5=Object.defineProperty,Rc=Object.getOwnPropertySymbols,R5=Object.prototype.hasOwnProperty,M5=Object.prototype.propertyIsEnumerable,Mc=(n,s,t)=>s in n?N5(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,q5=(n,s)=>{for(var t in s||(s={}))R5.call(s,t)&&Mc(n,t,s[t]);if(Rc)for(var t of Rc(s))M5.call(s,t)&&Mc(n,t,s[t]);return n};function G5(n,s={}){function t(c,p){let u=n[c];return p!=null&&(u=a5(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=nn}=s;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>Dt(`(min-width: ${t(c)})`,s),i=Object.keys(n).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>r(p),enumerable:!0,configurable:!0}),c),{});return q5({greater(c){return Dt(`(min-width: ${t(c,.1)})`,s)},greaterOrEqual:r,smaller(c){return Dt(`(max-width: ${t(c,-.1)})`,s)},smallerOrEqual(c){return Dt(`(max-width: ${t(c)})`,s)},between(c,p){return Dt(`(min-width: ${t(c)}) and (max-width: ${t(p,-.1)})`,s)},isGreater(c){return l(`(min-width: ${t(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${t(c)})`)},isSmaller(c){return l(`(max-width: ${t(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${t(c)})`)},isInBetween(c,p){return l(`(min-width: ${t(c)}) and (max-width: ${t(p,-.1)})`)}},i)}function H5(n={}){const{navigator:s=T5,read:t=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=n,i=["copy","cut"],c=Wo(()=>s&&"clipboard"in s),p=$(()=>c.value||r),u=Q(""),d=Q(!1),y=v5(()=>d.value=!1,l);function f(){c.value?s.clipboard.readText().then(v=>{u.value=v}):u.value=A()}if(p.value&&t)for(const v of i)Be(v,f);async function h(v=ln(o)){p.value&&v!=null&&(c.value?await s.clipboard.writeText(v):m(v),u.value=v,d.value=!0,y.start())}function m(v){const w=document.createElement("textarea");w.value=v??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function A(){var v,w,k;return(k=(w=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:w.toString())!=null?k:""}return{isSupported:p,text:u,copied:d,copy:h}}function V5(n){return JSON.parse(JSON.stringify(n))}const da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ya="__vueuse_ssr_handlers__";da[ya]=da[ya]||{};const U5=da[ya];function W5(n,s){return U5[n]||s}function z5(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var K5=Object.defineProperty,qc=Object.getOwnPropertySymbols,Y5=Object.prototype.hasOwnProperty,X5=Object.prototype.propertyIsEnumerable,Gc=(n,s,t)=>s in n?K5(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,Hc=(n,s)=>{for(var t in s||(s={}))Y5.call(s,t)&&Gc(n,t,s[t]);if(qc)for(var t of qc(s))X5.call(s,t)&&Gc(n,t,s[t]);return n};const Z5={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Vc="vueuse-storage";function J5(n,s,t,o={}){var l;const{flush:r="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:y=nn,eventFilter:f,onError:h=I=>{console.error(I)}}=o,m=(d?ns:Q)(s);if(!t)try{t=W5("getDefaultStorage",()=>{var I;return(I=nn)==null?void 0:I.localStorage})()}catch(I){h(I)}if(!t)return m;const A=ln(s),v=z5(A),w=(l=o.serializer)!=null?l:Z5[v],{pause:k,resume:D}=$5(m,()=>x(m.value),{flush:r,deep:i,eventFilter:f});return y&&c&&(Be(y,"storage",X),Be(y,Vc,G)),X(),m;function x(I){try{if(I==null)t.removeItem(n);else{const K=w.write(I),oe=t.getItem(n);oe!==K&&(t.setItem(n,K),y&&y.dispatchEvent(new CustomEvent(Vc,{detail:{key:n,oldValue:oe,newValue:K,storageArea:t}})))}}catch(K){h(K)}}function L(I){const K=I?I.newValue:t.getItem(n);if(K==null)return p&&A!==null&&t.setItem(n,w.write(A)),A;if(!I&&u){const oe=w.read(K);return So(u)?u(oe,A):v==="object"&&!Array.isArray(oe)?Hc(Hc({},A),oe):oe}else return typeof K!="string"?K:w.read(K)}function G(I){X(I.detail)}function X(I){if(!(I&&I.storageArea!==t)){if(I&&I.key==null){m.value=A;return}if(!(I&&I.key!==n)){k();try{m.value=L(I)}catch(K){h(K)}finally{I?tn(D):D()}}}}}function Q5(n){return Dt("(prefers-color-scheme: dark)",n)}var eg=Object.defineProperty,ng=Object.defineProperties,sg=Object.getOwnPropertyDescriptors,Uc=Object.getOwnPropertySymbols,tg=Object.prototype.hasOwnProperty,og=Object.prototype.propertyIsEnumerable,Wc=(n,s,t)=>s in n?eg(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,lg=(n,s)=>{for(var t in s||(s={}))tg.call(s,t)&&Wc(n,t,s[t]);if(Uc)for(var t of Uc(s))og.call(s,t)&&Wc(n,t,s[t]);return n},rg=(n,s)=>ng(n,sg(s));function vF(n,s={}){var t,o,l;const r=(t=s.draggingElement)!=null?t:nn,i=(o=s.handle)!=null?o:n,c=Q((l=ln(s.initialValue))!=null?l:{x:0,y:0}),p=Q(),u=m=>s.pointerTypes?s.pointerTypes.includes(m.pointerType):!0,d=m=>{ln(s.preventDefault)&&m.preventDefault(),ln(s.stopPropagation)&&m.stopPropagation()},y=m=>{var A;if(!u(m)||ln(s.exact)&&m.target!==ln(n))return;const v=ln(n).getBoundingClientRect(),w={x:m.clientX-v.left,y:m.clientY-v.top};((A=s.onStart)==null?void 0:A.call(s,w,m))!==!1&&(p.value=w,d(m))},f=m=>{var A;u(m)&&p.value&&(c.value={x:m.clientX-p.value.x,y:m.clientY-p.value.y},(A=s.onMove)==null||A.call(s,c.value,m),d(m))},h=m=>{var A;u(m)&&p.value&&(p.value=void 0,(A=s.onEnd)==null||A.call(s,c.value,m),d(m))};return Un&&(Be(i,"pointerdown",y,!0),Be(r,"pointermove",f,!0),Be(r,"pointerup",h,!0)),rg(lg({},_5(c)),{position:c,isDragging:$(()=>!!p.value),style:$(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var zc=Object.getOwnPropertySymbols,ag=Object.prototype.hasOwnProperty,ig=Object.prototype.propertyIsEnumerable,cg=(n,s)=>{var t={};for(var o in n)ag.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&zc)for(var o of zc(n))s.indexOf(o)<0&&ig.call(n,o)&&(t[o]=n[o]);return t};function pg(n,s,t={}){const o=t,{window:l=nn}=o,r=cg(o,["window"]);let i;const c=Wo(()=>l&&"ResizeObserver"in l),p=()=>{i&&(i.disconnect(),i=void 0)},u=ve(()=>xn(n),y=>{p(),c.value&&l&&y&&(i=new ResizeObserver(s),i.observe(y,r))},{immediate:!0,flush:"post"}),d=()=>{p(),u()};return ss(d),{isSupported:c,stop:d}}function ug(n,s={}){const{immediate:t=!0,window:o=nn}=s,l=Q(!1);let r=0,i=null;function c(d){if(!l.value||!o)return;const y=d-r;n({delta:y,timestamp:d}),r=d,i=o.requestAnimationFrame(c)}function p(){!l.value&&o&&(l.value=!0,i=o.requestAnimationFrame(c))}function u(){l.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return t&&p(),ss(u),{isActive:Zn(l),pause:u,resume:p}}function dg(n,s={width:0,height:0},t={}){const{window:o=nn,box:l="content-box"}=t,r=$(()=>{var p,u;return(u=(p=xn(n))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),i=Q(s.width),c=Q(s.height);return pg(n,([p])=>{const u=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(o&&r.value){const d=xn(n);if(d){const y=o.getComputedStyle(d);i.value=parseFloat(y.width),c.value=parseFloat(y.height)}}else if(u){const d=Array.isArray(u)?u:[u];i.value=d.reduce((y,{inlineSize:f})=>y+f,0),c.value=d.reduce((y,{blockSize:f})=>y+f,0)}else i.value=p.contentRect.width,c.value=p.contentRect.height},t),ve(()=>xn(n),p=>{i.value=p?s.width:0,c.value=p?s.height:0}),{width:i,height:c}}const Kc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function yg(n,s={}){const{document:t=Ud,autoExit:o=!1}=s,l=n||(t==null?void 0:t.querySelector("html")),r=Q(!1);let i=Kc[0];const c=Wo(()=>{if(t){for(const A of Kc)if(A[1]in t)return i=A,!0}else return!1;return!1}),[p,u,d,,y]=i;async function f(){c.value&&(t!=null&&t[d]&&await t[u](),r.value=!1)}async function h(){if(!c.value)return;await f();const A=xn(l);A&&(await A[p](),r.value=!0)}async function m(){r.value?await f():await h()}return t&&Be(t,y,()=>{r.value=!!(t!=null&&t[d])},!1),o&&ss(f),{isSupported:c,isFullscreen:r,enter:h,exit:f,toggle:m}}function fg(n,s,t={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:i=nn}=t,c=Wo(()=>i&&"IntersectionObserver"in i);let p=Ft;const u=c.value?ve(()=>({el:xn(n),root:xn(o)}),({el:y,root:f})=>{if(p(),!y)return;const h=new IntersectionObserver(s,{root:f,rootMargin:l,threshold:r});h.observe(y),p=()=>{h.disconnect(),p=Ft}},{immediate:!0,flush:"post"}):Ft,d=()=>{p(),u()};return ss(d),{isSupported:c,stop:d}}function Wn(n,s,t={}){const{window:o=nn}=t;return J5(n,s,o==null?void 0:o.localStorage,t)}const mg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function hg(n={}){const{reactive:s=!1,target:t=nn,aliasMap:o=mg,passive:l=!0,onEventFired:r=Ft}=n,i=Ve(new Set),c={toJSON(){return{}},current:i},p=s?Ve(c):c,u=new Set,d=new Set;function y(A,v){A in p&&(s?p[A]=v:p[A].value=v)}function f(){i.clear();for(const A of d)y(A,!1)}function h(A,v){var w,k;const D=(w=A.key)==null?void 0:w.toLowerCase(),L=[(k=A.code)==null?void 0:k.toLowerCase(),D].filter(Boolean);D&&(v?i.add(D):i.delete(D));for(const G of L)d.add(G),y(G,v);D==="meta"&&!v?(u.forEach(G=>{i.delete(G),y(G,!1)}),u.clear()):typeof A.getModifierState=="function"&&A.getModifierState("Meta")&&v&&[...i,...L].forEach(G=>u.add(G))}Be(t,"keydown",A=>(h(A,!0),r(A)),{passive:l}),Be(t,"keyup",A=>(h(A,!1),r(A)),{passive:l}),Be("blur",f,{passive:!0}),Be("focus",f,{passive:!0});const m=new Proxy(p,{get(A,v,w){if(typeof v!="string")return Reflect.get(A,v,w);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in p))if(/[+_-]/.test(v)){const D=v.split(/[+_-]/g).map(x=>x.trim());p[v]=$(()=>D.every(x=>b(m[x])))}else p[v]=Q(!1);const k=Reflect.get(A,v,w);return s?b(k):k}});return m}function BF(n={}){const{type:s="page",touch:t=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=nn,eventFilter:i}=n,c=Q(l.x),p=Q(l.y),u=Q(null),d=A=>{s==="page"?(c.value=A.pageX,p.value=A.pageY):s==="client"?(c.value=A.clientX,p.value=A.clientY):s==="movement"&&(c.value=A.movementX,p.value=A.movementY),u.value="mouse"},y=()=>{c.value=l.x,p.value=l.y},f=A=>{if(A.touches.length>0){const v=A.touches[0];s==="page"?(c.value=v.pageX,p.value=v.pageY):s==="client"&&(c.value=v.clientX,p.value=v.clientY),u.value="touch"}},h=A=>i===void 0?d(A):i(()=>d(A),{}),m=A=>i===void 0?f(A):i(()=>f(A),{});return r&&(Be(r,"mousemove",h,{passive:!0}),Be(r,"dragover",h,{passive:!0}),t&&s!=="movement"&&(Be(r,"touchstart",m,{passive:!0}),Be(r,"touchmove",m,{passive:!0}),o&&Be(r,"touchend",y,{passive:!0}))),{x:c,y:p,sourceType:u}}var ps;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(ps||(ps={}));function _g(n,s={}){const t=qd(n),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:i}=s,c=Ve({x:0,y:0}),p=(G,X)=>{c.x=G,c.y=X},u=Ve({x:0,y:0}),d=(G,X)=>{u.x=G,u.y=X},y=$(()=>c.x-u.x),f=$(()=>c.y-u.y),{max:h,abs:m}=Math,A=$(()=>h(m(y.value),m(f.value))>=o),v=Q(!1),w=Q(!1),k=$(()=>A.value?m(y.value)>m(f.value)?y.value>0?ps.LEFT:ps.RIGHT:f.value>0?ps.UP:ps.DOWN:ps.NONE),D=G=>{var X,I,K;const oe=G.buttons===0,ue=G.buttons===1;return(K=(I=(X=s.pointerTypes)==null?void 0:X.includes(G.pointerType))!=null?I:oe||ue)!=null?K:!0},x=[Be(n,"pointerdown",G=>{var X,I;if(!D(G))return;w.value=!0,(I=(X=t.value)==null?void 0:X.style)==null||I.setProperty("touch-action","none");const K=G.target;K==null||K.setPointerCapture(G.pointerId);const{clientX:oe,clientY:ue}=G;p(oe,ue),d(oe,ue),i==null||i(G)}),Be(n,"pointermove",G=>{if(!D(G)||!w.value)return;const{clientX:X,clientY:I}=G;d(X,I),!v.value&&A.value&&(v.value=!0),v.value&&(l==null||l(G))}),Be(n,"pointerup",G=>{var X,I;D(G)&&(v.value&&(r==null||r(G,k.value)),w.value=!1,v.value=!1,(I=(X=t.value)==null?void 0:X.style)==null||I.setProperty("touch-action","initial"))})],L=()=>x.forEach(G=>G());return{isSwiping:Zn(v),direction:Zn(k),posStart:Zn(c),posEnd:Zn(u),distanceX:y,distanceY:f,stop:L}}let gg=0;function kF(n,s={}){const t=Q(!1),{document:o=Ud,immediate:l=!0,manual:r=!1,id:i=`vueuse_styletag_${++gg}`}=s,c=Q(n);let p=()=>{};const u=()=>{if(!o)return;const y=o.getElementById(i)||o.createElement("style");y.isConnected||(y.type="text/css",y.id=i,s.media&&(y.media=s.media),o.head.appendChild(y)),!t.value&&(p=ve(c,f=>{y.textContent=f},{immediate:!0}),t.value=!0)},d=()=>{!o||!t.value||(p(),o.head.removeChild(o.getElementById(i)),t.value=!1)};return l&&!r&&yi(u),r||ss(d),{id:i,css:c,unload:d,load:u,isLoaded:Zn(t)}}var Ag=Object.defineProperty,Yc=Object.getOwnPropertySymbols,vg=Object.prototype.hasOwnProperty,Bg=Object.prototype.propertyIsEnumerable,Xc=(n,s,t)=>s in n?Ag(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,kg=(n,s)=>{for(var t in s||(s={}))vg.call(s,t)&&Xc(n,t,s[t]);if(Yc)for(var t of Yc(s))Bg.call(s,t)&&Xc(n,t,s[t]);return n};function DF(n={}){const{controls:s=!1,offset:t=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=n,i=Q(ua()+t),c=()=>i.value=ua()+t,p=r?()=>{c(),r(i.value)}:c,u=l==="requestAnimationFrame"?ug(p,{immediate:o}):A5(p,l,{immediate:o});return s?kg({timestamp:i},u):i}var Dg=Object.defineProperty,Zc=Object.getOwnPropertySymbols,Cg=Object.prototype.hasOwnProperty,bg=Object.prototype.propertyIsEnumerable,Jc=(n,s,t)=>s in n?Dg(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,wg=(n,s)=>{for(var t in s||(s={}))Cg.call(s,t)&&Jc(n,t,s[t]);if(Zc)for(var t of Zc(s))bg.call(s,t)&&Jc(n,t,s[t]);return n};const Eg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};wg({linear:r5},Eg);function Jn(n,s,t,o={}){var l,r,i;const{clone:c=!1,passive:p=!1,eventName:u,deep:d=!1,defaultValue:y}=o,f=$n(),h=t||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((i=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let m=u;s||(s="modelValue"),m=u||m||`update:${s.toString()}`;const A=w=>c?So(c)?c(w):V5(w):w,v=()=>e5(n[s])?A(n[s]):y;if(p){const w=v(),k=Q(w);return ve(()=>n[s],D=>k.value=A(D)),ve(k,D=>{(D!==n[s]||d)&&h(m,D)},{deep:d}),k}else return $({get(){return v()},set(w){h(m,w)}})}function CF({window:n=nn}={}){if(!n)return Q(!1);const s=Q(n.document.hasFocus());return Be(n,"blur",()=>{s.value=!1}),Be(n,"focus",()=>{s.value=!0}),s}function xg(n={}){const{window:s=nn,initialWidth:t=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=n,i=Q(t),c=Q(o),p=()=>{s&&(r?(i.value=s.innerWidth,c.value=s.innerHeight):(i.value=s.document.documentElement.clientWidth,c.value=s.document.documentElement.clientHeight))};return p(),yi(p),Be("resize",p,{passive:!0}),l&&Be("orientationchange",p,{passive:!0}),{width:i,height:c}}function Sg(){return Wd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Wd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Fg=typeof Proxy=="function",$g="devtools-plugin:setup",Tg="plugin:settings:set";let _t,fa;function jg(){var n;return _t!==void 0||(typeof window<"u"&&window.performance?(_t=!0,fa=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(_t=!0,fa=global.perf_hooks.performance):_t=!1),_t}function Og(){return jg()?fa.now():Date.now()}class Pg{constructor(s,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=t;const o={};if(s.settings)for(const i in s.settings){const c=s.settings[i];o[i]=c.defaultValue}const l=`__vue-devtools-plugin-settings__${s.id}`;let r=Object.assign({},o);try{const i=localStorage.getItem(l),c=JSON.parse(i);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(i){try{localStorage.setItem(l,JSON.stringify(i))}catch{}r=i},now(){return Og()}},t&&t.on(Tg,(i,c)=>{i===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(i,c)=>this.target?this.target.on[c]:(...p)=>{this.onQueue.push({method:c,args:p})}}),this.proxiedTarget=new Proxy({},{get:(i,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...p)=>(this.targetQueue.push({method:c,args:p,resolve:()=>{}}),this.fallbacks[c](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:c,args:p,resolve:u})})})}async setRealTarget(s){this.target=s;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Ig(n,s){const t=n,o=Wd(),l=Sg(),r=Fg&&t.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit($g,n,s);else{const i=r?new Pg(t,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:s,proxy:i}),i&&s(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof window<"u";function Lg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function wr(n,s){const t={};for(const o in s){const l=s[o];t[o]=Fn(l)?l.map(n):n(l)}return t}const yo=()=>{},Fn=Array.isArray;function Fe(n){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(s))}const Ng=/\/$/,Rg=n=>n.replace(Ng,"");function Er(n,s,t="/"){let o,l={},r="",i="";const c=s.indexOf("#");let p=s.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(o=s.slice(0,p),r=s.slice(p+1,c>-1?c:s.length),l=n(r)),c>-1&&(o=o||s.slice(0,c),i=s.slice(c,s.length)),o=Gg(o??s,t),{fullPath:o+(r&&"?")+r+i,path:o,query:l,hash:i}}function Mg(n,s){const t=s.query?n(s.query):"";return s.path+(t&&"?")+t+(s.hash||"")}function Qc(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function ep(n,s,t){const o=s.matched.length-1,l=t.matched.length-1;return o>-1&&o===l&&Ns(s.matched[o],t.matched[l])&&zd(s.params,t.params)&&n(s.query)===n(t.query)&&s.hash===t.hash}function Ns(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function zd(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const t in n)if(!qg(n[t],s[t]))return!1;return!0}function qg(n,s){return Fn(n)?np(n,s):Fn(s)?np(s,n):n===s}function np(n,s){return Fn(s)?n.length===s.length&&n.every((t,o)=>t===s[o]):n.length===1&&n[0]===s}function Gg(n,s){if(n.startsWith("/"))return n;if(!s.startsWith("/"))return Fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${s}". It should look like "/${s}".`),n;if(!n)return s;const t=s.split("/"),o=n.split("/");let l=t.length-1,r,i;for(r=0;r<o.length;r++)if(i=o[r],i!==".")if(i==="..")l>1&&l--;else break;return t.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Fo;(function(n){n.pop="pop",n.push="push"})(Fo||(Fo={}));var fo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(fo||(fo={}));function Hg(n){if(!n)if(is){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Rg(n)}const Vg=/^[^#]+#/;function Ug(n,s){return n.replace(Vg,"#")+s}function Wg(n,s){const t=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:s.behavior,left:o.left-t.left-(s.left||0),top:o.top-t.top-(s.top||0)}}const lr=()=>({left:window.pageXOffset,top:window.pageYOffset});function zg(n){let s;if("el"in n){const t=n.el,o=typeof t=="string"&&t.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const r=document.querySelector(n.el);if(o&&r){Fe(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Fe(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof t=="string"?o?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!l){Fe(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}s=Wg(l,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function sp(n,s){return(history.state?history.state.position-s:-1)+n}const ma=new Map;function Kg(n,s){ma.set(n,s)}function Yg(n){const s=ma.get(n);return ma.delete(n),s}let Xg=()=>location.protocol+"//"+location.host;function Kd(n,s){const{pathname:t,search:o,hash:l}=s,r=n.indexOf("#");if(r>-1){let c=l.includes(n.slice(r))?n.slice(r).length:1,p=l.slice(c);return p[0]!=="/"&&(p="/"+p),Qc(p,"")}return Qc(t,n)+o+l}function Zg(n,s,t,o){let l=[],r=[],i=null;const c=({state:f})=>{const h=Kd(n,location),m=t.value,A=s.value;let v=0;if(f){if(t.value=h,s.value=f,i&&i===m){i=null;return}v=A?f.position-A.position:0}else o(h);l.forEach(w=>{w(t.value,m,{delta:v,type:Fo.pop,direction:v?v>0?fo.forward:fo.back:fo.unknown})})};function p(){i=t.value}function u(f){l.push(f);const h=()=>{const m=l.indexOf(f);m>-1&&l.splice(m,1)};return r.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Ie({},f.state,{scroll:lr()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:p,listen:u,destroy:y}}function tp(n,s,t,o=!1,l=!1){return{back:n,current:s,forward:t,replaced:o,position:window.history.length,scroll:l?lr():null}}function Jg(n){const{history:s,location:t}=window,o={value:Kd(n,t)},l={value:s.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function r(p,u,d){const y=n.indexOf("#"),f=y>-1?(t.host&&document.querySelector("base")?n:n.slice(y))+p:Xg()+n+p;try{s[d?"replaceState":"pushState"](u,"",f),l.value=u}catch(h){Fe("Error with push/replace State",h),t[d?"replace":"assign"](f)}}function i(p,u){const d=Ie({},s.state,tp(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});r(p,d,!0),o.value=p}function c(p,u){const d=Ie({},l.value,s.state,{forward:p,scroll:lr()});s.state||Fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const y=Ie({},tp(o.value,p,null),{position:d.position+1},u);r(p,y,!1),o.value=p}return{location:o,state:l,push:c,replace:i}}function Qg(n){n=Hg(n);const s=Jg(n),t=Zg(n,s.state,s.location,s.replace);function o(r,i=!0){i||t.pauseListeners(),history.go(r)}const l=Ie({location:"",base:n,go:o,createHref:Ug.bind(null,n)},s,t);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>s.state.value}),l}function eA(n){return typeof n=="string"||n&&typeof n=="object"}function Yd(n){return typeof n=="string"||typeof n=="symbol"}const vs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xd=Symbol("navigation failure");var op;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(op||(op={}));const nA={[1]({location:n,currentLocation:s}){return`No match for
 ${JSON.stringify(n)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:n,to:s}){return`Redirected from "${n.fullPath}" to "${tA(s)}" via a navigation guard.`},[4]({from:n,to:s}){return`Navigation aborted from "${n.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:n,to:s}){return`Navigation cancelled from "${n.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:n,to:s}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function It(n,s){return Ie(new Error(nA[n](s)),{type:n,[Xd]:!0},s)}function ts(n,s){return n instanceof Error&&Xd in n&&(s==null||!!(n.type&s))}const sA=["params","query","hash"];function tA(n){if(typeof n=="string")return n;if("path"in n)return n.path;const s={};for(const t of sA)t in n&&(s[t]=n[t]);return JSON.stringify(s,null,2)}const lp="[^/]+?",oA={sensitive:!1,strict:!1,start:!0,end:!0},lA=/[.+*?^${}()[\]/\\]/g;function rA(n,s){const t=Ie({},oA,s),o=[];let l=t.start?"^":"";const r=[];for(const u of n){const d=u.length?[]:[90];t.strict&&!u.length&&(l+="/");for(let y=0;y<u.length;y++){const f=u[y];let h=40+(t.sensitive?.25:0);if(f.type===0)y||(l+="/"),l+=f.value.replace(lA,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:A,optional:v,regexp:w}=f;r.push({name:m,repeatable:A,optional:v});const k=w||lp;if(k!==lp){h+=10;try{new RegExp(`(${k})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${k}): `+x.message)}}let D=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;y||(D=v&&u.length<2?`(?:/${D})`:"/"+D),v&&(D+="?"),l+=D,h+=20,v&&(h+=-8),A&&(h+=-20),k===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(t.strict&&t.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}t.strict||(l+="/?"),t.end?l+="$":t.strict&&(l+="(?:/|$)");const i=new RegExp(l,t.sensitive?"":"i");function c(u){const d=u.match(i),y={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",m=r[f-1];y[m.name]=h&&m.repeatable?h.split("/"):h}return y}function p(u){let d="",y=!1;for(const f of n){(!y||!d.endsWith("/"))&&(d+="/"),y=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:A,optional:v}=h,w=m in u?u[m]:"";if(Fn(w)&&!A)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const k=Fn(w)?w.join("/"):w;if(!k)if(v)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):y=!0);else throw new Error(`Missing required param "${m}"`);d+=k}}return d||"/"}return{re:i,score:o,keys:r,parse:c,stringify:p}}function aA(n,s){let t=0;for(;t<n.length&&t<s.length;){const o=s[t]-n[t];if(o)return o;t++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function iA(n,s){let t=0;const o=n.score,l=s.score;for(;t<o.length&&t<l.length;){const r=aA(o[t],l[t]);if(r)return r;t++}if(Math.abs(l.length-o.length)===1){if(rp(o))return 1;if(rp(l))return-1}return l.length-o.length}function rp(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const cA={type:0,value:""},pA=/[a-zA-Z0-9_]/;function uA(n){if(!n)return[[]];if(n==="/")return[[cA]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function s(h){throw new Error(`ERR (${t})/"${u}": ${h}`)}let t=0,o=t;const l=[];let r;function i(){r&&l.push(r),r=[]}let c=0,p,u="",d="";function y(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(p==="*"||p==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):s("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;c<n.length;){if(p=n[c++],p==="\\"&&t!==2){o=t,t=4;continue}switch(t){case 0:p==="/"?(u&&y(),i()):p===":"?(y(),t=1):f();break;case 4:f(),t=o;break;case 1:p==="("?t=2:pA.test(p)?f():(y(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:t=3:d+=p;break;case 3:y(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,d="";break;default:s("Unknown state");break}}return t===2&&s(`Unfinished custom RegExp for param "${u}"`),y(),i(),l}function dA(n,s,t){const o=rA(uA(n.path),t);{const r=new Set;for(const i of o.keys)r.has(i.name)&&Fe(`Found duplicated params with name "${i.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),r.add(i.name)}const l=Ie(o,{record:n,parent:s,children:[],alias:[]});return s&&!l.record.aliasOf==!s.record.aliasOf&&s.children.push(l),l}function yA(n,s){const t=[],o=new Map;s=cp({strict:!1,end:!0,sensitive:!1},s);function l(d){return o.get(d)}function r(d,y,f){const h=!f,m=fA(d);gA(m,y),m.aliasOf=f&&f.record;const A=cp(s,d),v=[m];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of D)v.push(Ie({},m,{components:f?f.record.components:m.components,path:x,aliasOf:f?f.record:m}))}let w,k;for(const D of v){const{path:x}=D;if(y&&x[0]!=="/"){const L=y.record.path,G=L[L.length-1]==="/"?"":"/";D.path=y.record.path+(x&&G+x)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=dA(D,y,A),y&&x[0]==="/"&&AA(w,y),f?(f.alias.push(w),_A(f,w)):(k=k||w,k!==w&&k.alias.push(w),h&&d.name&&!ip(w)&&i(d.name)),m.children){const L=m.children;for(let G=0;G<L.length;G++)r(L[G],w,f&&f.children[G])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&p(w)}return k?()=>{i(k)}:yo}function i(d){if(Yd(d)){const y=o.get(d);y&&(o.delete(d),t.splice(t.indexOf(y),1),y.children.forEach(i),y.alias.forEach(i))}else{const y=t.indexOf(d);y>-1&&(t.splice(y,1),d.record.name&&o.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return t}function p(d){let y=0;for(;y<t.length&&iA(d,t[y])>=0&&(d.record.path!==t[y].record.path||!Zd(d,t[y]));)y++;t.splice(y,0,d),d.record.name&&!ip(d)&&o.set(d.record.name,d)}function u(d,y){let f,h={},m,A;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw It(1,{location:d});{const k=Object.keys(d.params||{}).filter(D=>!f.keys.find(x=>x.name===D));k.length&&Fe(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}A=f.record.name,h=Ie(ap(y.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),d.params&&ap(d.params,f.keys.map(k=>k.name))),m=f.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||Fe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=t.find(k=>k.re.test(m)),f&&(h=f.parse(m),A=f.record.name);else{if(f=y.name?o.get(y.name):t.find(k=>k.re.test(y.path)),!f)throw It(1,{location:d,currentLocation:y});A=f.record.name,h=Ie({},y.params,d.params),m=f.stringify(h)}const v=[];let w=f;for(;w;)v.unshift(w.record),w=w.parent;return{name:A,path:m,params:h,matched:v,meta:hA(v)}}return n.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:i,getRoutes:c,getRecordMatcher:l}}function ap(n,s){const t={};for(const o of s)o in n&&(t[o]=n[o]);return t}function fA(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:mA(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function mA(n){const s={},t=n.props||!1;if("component"in n)s.default=t;else for(const o in n.components)s[o]=typeof t=="boolean"?t:t[o];return s}function ip(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function hA(n){return n.reduce((s,t)=>Ie(s,t.meta),{})}function cp(n,s){const t={};for(const o in n)t[o]=o in s?s[o]:n[o];return t}function ha(n,s){return n.name===s.name&&n.optional===s.optional&&n.repeatable===s.repeatable}function _A(n,s){for(const t of n.keys)if(!t.optional&&!s.keys.find(ha.bind(null,t)))return Fe(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);for(const t of s.keys)if(!t.optional&&!n.keys.find(ha.bind(null,t)))return Fe(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`)}function gA(n,s){s&&s.record.name&&!n.name&&!n.path&&Fe(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function AA(n,s){for(const t of s.keys)if(!n.keys.find(ha.bind(null,t)))return Fe(`Absolute path "${n.record.path}" must have the exact same param named "${t.name}" as its parent "${s.record.path}".`)}function Zd(n,s){return s.children.some(t=>t===n||Zd(n,t))}const Jd=/#/g,vA=/&/g,BA=/\//g,kA=/=/g,DA=/\?/g,Qd=/\+/g,CA=/%5B/g,bA=/%5D/g,ey=/%5E/g,wA=/%60/g,ny=/%7B/g,EA=/%7C/g,sy=/%7D/g,xA=/%20/g;function fi(n){return encodeURI(""+n).replace(EA,"|").replace(CA,"[").replace(bA,"]")}function SA(n){return fi(n).replace(ny,"{").replace(sy,"}").replace(ey,"^")}function _a(n){return fi(n).replace(Qd,"%2B").replace(xA,"+").replace(Jd,"%23").replace(vA,"%26").replace(wA,"`").replace(ny,"{").replace(sy,"}").replace(ey,"^")}function FA(n){return _a(n).replace(kA,"%3D")}function $A(n){return fi(n).replace(Jd,"%23").replace(DA,"%3F")}function TA(n){return n==null?"":$A(n).replace(BA,"%2F")}function $o(n){try{return decodeURIComponent(""+n)}catch{Fe(`Error decoding "${n}". Using original value`)}return""+n}function jA(n){const s={};if(n===""||n==="?")return s;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(Qd," "),i=r.indexOf("="),c=$o(i<0?r:r.slice(0,i)),p=i<0?null:$o(r.slice(i+1));if(c in s){let u=s[c];Fn(u)||(u=s[c]=[u]),u.push(p)}else s[c]=p}return s}function pp(n){let s="";for(let t in n){const o=n[t];if(t=FA(t),o==null){o!==void 0&&(s+=(s.length?"&":"")+t);continue}(Fn(o)?o.map(r=>r&&_a(r)):[o&&_a(o)]).forEach(r=>{r!==void 0&&(s+=(s.length?"&":"")+t,r!=null&&(s+="="+r))})}return s}function OA(n){const s={};for(const t in n){const o=n[t];o!==void 0&&(s[t]=Fn(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return s}const PA=Symbol("router view location matched"),up=Symbol("router view depth"),mi=Symbol("router"),ty=Symbol("route location"),ga=Symbol("router view location");function Xt(){let n=[];function s(o){return n.push(o),()=>{const l=n.indexOf(o);l>-1&&n.splice(l,1)}}function t(){n=[]}return{add:s,list:()=>n,reset:t}}function Cs(n,s,t,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((i,c)=>{const p=y=>{y===!1?c(It(4,{from:t,to:s})):y instanceof Error?c(y):eA(y)?c(It(2,{from:s,to:y})):(r&&o.enterCallbacks[l]===r&&typeof y=="function"&&r.push(y),i())},u=n.call(o&&o.instances[l],s,t,IA(p,s,t));let d=Promise.resolve(u);if(n.length<3&&(d=d.then(p)),n.length>2){const y=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>p._called?f:(Fe(y),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){Fe(y),c(new Error("Invalid navigation guard"));return}}d.catch(y=>c(y))})}function IA(n,s,t){let o=0;return function(){o++===1&&Fe(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function xr(n,s,t,o){const l=[];for(const r of n){!r.components&&!r.children.length&&Fe(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const i in r.components){let c=r.components[i];{if(!c||typeof c!="object"&&typeof c!="function")throw Fe(`Component "${i}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Fe(`Component "${i}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=c;c=()=>p}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Fe(`Component "${i}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!r.instances[i]))if(LA(c)){const u=(c.__vccOpts||c)[s];u&&l.push(Cs(u,t,o,r,i))}else{let p=c();"catch"in p||(Fe(`Component "${i}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const d=Lg(u)?u.default:u;r.components[i]=d;const f=(d.__vccOpts||d)[s];return f&&Cs(f,t,o,r,i)()}))}}}return l}function LA(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function dp(n){const s=F(mi),t=F(ty),o=$(()=>s.resolve(b(n.to))),l=$(()=>{const{matched:p}=o.value,{length:u}=p,d=p[u-1],y=t.matched;if(!d||!y.length)return-1;const f=y.findIndex(Ns.bind(null,d));if(f>-1)return f;const h=yp(p[u-2]);return u>1&&yp(d)===h&&y[y.length-1].path!==h?y.findIndex(Ns.bind(null,p[u-2])):f}),r=$(()=>l.value>-1&&qA(t.params,o.value.params)),i=$(()=>l.value>-1&&l.value===t.matched.length-1&&zd(t.params,o.value.params));function c(p={}){return MA(p)?s[b(n.replace)?"replace":"push"](b(n.to)).catch(yo):Promise.resolve()}if(is){const p=$n();if(p){const u={route:o.value,isActive:r.value,isExactActive:i.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),dt(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=i.value},{flush:"post"})}}return{route:o,href:$(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const NA=we({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dp,setup(n,{slots:s}){const t=Ve(dp(n)),{options:o}=F(mi),l=$(()=>({[fp(n.activeClass,o.linkActiveClass,"router-link-active")]:t.isActive,[fp(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=s.default&&s.default(t);return n.custom?r:fn("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:l.value},r)}}}),RA=NA;function MA(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function qA(n,s){for(const t in s){const o=s[t],l=n[t];if(typeof o=="string"){if(o!==l)return!1}else if(!Fn(l)||l.length!==o.length||o.some((r,i)=>r!==l[i]))return!1}return!0}function yp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const fp=(n,s,t)=>n??s??t,GA=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:t}){VA();const o=F(ga),l=$(()=>n.route||o.value),r=F(up,0),i=$(()=>{let u=b(r);const{matched:d}=l.value;let y;for(;(y=d[u])&&!y.components;)u++;return u}),c=$(()=>l.value.matched[i.value]);En(up,$(()=>i.value+1)),En(PA,c),En(ga,l);const p=Q();return ve(()=>[p.value,c.value,n.name],([u,d,y],[f,h,m])=>{d&&(d.instances[y]=u,h&&h!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Ns(d,h)||!f)&&(d.enterCallbacks[y]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=l.value,d=n.name,y=c.value,f=y&&y.components[d];if(!f)return mp(t.default,{Component:f,route:u});const h=y.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,v=fn(f,Ie({},m,s,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(y.instances[d]=null)},ref:p}));if(is&&v.ref){const w={depth:i.value,name:y.name,path:y.path,meta:y.meta};(Fn(v.ref)?v.ref.map(D=>D.i):[v.ref.i]).forEach(D=>{D.__vrv_devtools=w})}return mp(t.default,{Component:v,route:u})||v}}});function mp(n,s){if(!n)return null;const t=n(s);return t.length===1?t[0]:t}const HA=GA;function VA(){const n=$n(),s=n.parent&&n.parent.type.name;if(s&&(s==="KeepAlive"||s.includes("Transition"))){const t=s==="KeepAlive"?"keep-alive":"transition";Fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${t}>
    <component :is="Component" />
  </${t}>
</router-view>`)}}function Zt(n,s){const t=Ie({},n,{matched:n.matched.map(o=>QA(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:s,value:t}}}function al(n){return{_custom:{display:n}}}let UA=0;function WA(n,s,t){if(s.__hasDevtools)return;s.__hasDevtools=!0;const o=UA++;Ig({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,y)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Zt(s.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:oy})}Fn(y.__vrl_devtools)&&(y.__devtoolsApi=l,y.__vrl_devtools.forEach(f=>{let h=ay,m="";f.isExactActive?(h=ry,m="This is exactly active"):f.isActive&&(h=ly,m="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),ve(s.currentRoute,()=>{p(),l.notifyComponentUpdate(),l.sendInspectorTree(c),l.sendInspectorState(c)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),s.onError((d,y)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:y.meta.__navigationId}})});let i=0;s.beforeEach((d,y)=>{const f={guard:al("beforeEach"),from:Zt(y,"Current Location during this navigation"),to:Zt(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:i++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),s.afterEach((d,y,f)=>{const h={guard:al("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=al("❌")):h.status=al("✅"),h.from=Zt(y,"Current Location during this navigation"),h.to=Zt(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;l.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const d=u;let y=t.getRoutes().filter(f=>!f.parent);y.forEach(py),d.filter&&(y=y.filter(f=>Aa(f,d.filter.toLowerCase()))),y.forEach(f=>cy(f,s.currentRoute.value)),d.rootNodes=y.map(iy)}let u;l.on.getInspectorTree(d=>{u=d,d.app===n&&d.inspectorId===c&&p()}),l.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=t.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:KA(f)})}}),l.sendInspectorTree(c),l.sendInspectorState(c)})}function zA(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function KA(n){const{record:s}=n,t=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&t.push({editable:!1,key:"name",value:s.name}),t.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&t.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${zA(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),s.redirect!=null&&t.push({editable:!1,key:"redirect",value:s.redirect}),n.alias.length&&t.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&t.push({editable:!1,key:"meta",value:n.record.meta}),t.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),t}const oy=15485081,ly=2450411,ry=8702998,YA=2282478,ay=16486972,XA=6710886;function iy(n){const s=[],{record:t}=n;t.name!=null&&s.push({label:String(t.name),textColor:0,backgroundColor:YA}),t.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:ay}),n.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:oy}),n.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:ry}),n.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:ly}),t.redirect&&s.push({label:typeof t.redirect=="string"?`redirect: ${t.redirect}`:"redirects",textColor:16777215,backgroundColor:XA});let o=t.__vd_id;return o==null&&(o=String(ZA++),t.__vd_id=o),{id:o,label:t.path,tags:s,children:n.children.map(iy)}}let ZA=0;const JA=/^\/(.*)\/([a-z]*)$/;function cy(n,s){const t=s.matched.length&&Ns(s.matched[s.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=t,t||(n.__vd_active=s.matched.some(o=>Ns(o,n.record))),n.children.forEach(o=>cy(o,s))}function py(n){n.__vd_match=!1,n.children.forEach(py)}function Aa(n,s){const t=String(n.re).match(JA);if(n.__vd_match=!1,!t||t.length<3)return!1;if(new RegExp(t[1].replace(/\$$/,""),t[2]).test(s))return n.children.forEach(i=>Aa(i,s)),n.record.path!=="/"||s==="/"?(n.__vd_match=n.re.test(s),!0):!1;const l=n.record.path.toLowerCase(),r=$o(l);return!s.startsWith("/")&&(r.includes(s)||l.includes(s))||r.startsWith(s)||l.startsWith(s)||n.record.name&&String(n.record.name).includes(s)?!0:n.children.some(i=>Aa(i,s))}function QA(n,s){const t={};for(const o in n)s.includes(o)||(t[o]=n[o]);return t}function e3(n){const s=yA(n.routes,n),t=n.parseQuery||jA,o=n.stringifyQuery||pp,l=n.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Xt(),i=Xt(),c=Xt(),p=ns(vs);let u=vs;is&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=wr.bind(null,j=>""+j),y=wr.bind(null,TA),f=wr.bind(null,$o);function h(j,te){let Z,le;return Yd(j)?(Z=s.getRecordMatcher(j),le=te):le=j,s.addRoute(le,Z)}function m(j){const te=s.getRecordMatcher(j);te?s.removeRoute(te):Fe(`Cannot remove non-existent route "${String(j)}"`)}function A(){return s.getRoutes().map(j=>j.record)}function v(j){return!!s.getRecordMatcher(j)}function w(j,te){if(te=Ie({},te||p.value),typeof j=="string"){const de=Er(t,j,te.path),g=s.resolve({path:de.path},te),B=l.createHref(de.fullPath);return B.startsWith("//")?Fe(`Location "${j}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):g.matched.length||Fe(`No match found for location with path "${j}"`),Ie(de,g,{params:f(g.params),hash:$o(de.hash),redirectedFrom:void 0,href:B})}let Z;if("path"in j)"params"in j&&!("name"in j)&&Object.keys(j.params).length&&Fe(`Path "${j.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Z=Ie({},j,{path:Er(t,j.path,te.path).path});else{const de=Ie({},j.params);for(const g in de)de[g]==null&&delete de[g];Z=Ie({},j,{params:y(j.params)}),te.params=y(te.params)}const le=s.resolve(Z,te),Ce=j.hash||"";Ce&&!Ce.startsWith("#")&&Fe(`A \`hash\` should always start with the character "#". Replace "${Ce}" with "#${Ce}".`),le.params=d(f(le.params));const xe=Mg(o,Ie({},j,{hash:SA(Ce),path:le.path})),he=l.createHref(xe);return he.startsWith("//")?Fe(`Location "${j}" resolved to "${he}". A resolved location cannot start with multiple slashes.`):le.matched.length||Fe(`No match found for location with path "${"path"in j?j.path:j}"`),Ie({fullPath:xe,hash:Ce,query:o===pp?OA(j.query):j.query||{}},le,{redirectedFrom:void 0,href:he})}function k(j){return typeof j=="string"?Er(t,j,p.value.path):Ie({},j)}function D(j,te){if(u!==j)return It(8,{from:te,to:j})}function x(j){return X(j)}function L(j){return x(Ie(k(j),{replace:!0}))}function G(j){const te=j.matched[j.matched.length-1];if(te&&te.redirect){const{redirect:Z}=te;let le=typeof Z=="function"?Z(j):Z;if(typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=k(le):{path:le},le.params={}),!("path"in le)&&!("name"in le))throw Fe(`Invalid redirect found:
${JSON.stringify(le,null,2)}
 when navigating to "${j.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:j.query,hash:j.hash,params:"path"in le?{}:j.params},le)}}function X(j,te){const Z=u=w(j),le=p.value,Ce=j.state,xe=j.force,he=j.replace===!0,de=G(Z);if(de)return X(Ie(k(de),{state:typeof de=="object"?Ie({},Ce,de.state):Ce,force:xe,replace:he}),te||Z);const g=Z;g.redirectedFrom=te;let B;return!xe&&ep(o,le,Z)&&(B=It(16,{to:g,from:le}),Ne(le,le,!0,!1)),(B?Promise.resolve(B):K(g,le)).catch(S=>ts(S)?ts(S,2)?S:ke(S):ne(S,g,le)).then(S=>{if(S){if(ts(S,2))return ep(o,w(S.to),g)&&te&&(te._count=te._count?te._count+1:1)>10?(Fe(`Detected an infinite redirection in a navigation guard when going from "${le.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):X(Ie({replace:he},k(S.to),{state:typeof S.to=="object"?Ie({},Ce,S.to.state):Ce,force:xe}),te||g)}else S=ue(g,le,!0,he,Ce);return oe(g,le,S),S})}function I(j,te){const Z=D(j,te);return Z?Promise.reject(Z):Promise.resolve()}function K(j,te){let Z;const[le,Ce,xe]=n3(j,te);Z=xr(le.reverse(),"beforeRouteLeave",j,te);for(const de of le)de.leaveGuards.forEach(g=>{Z.push(Cs(g,j,te))});const he=I.bind(null,j,te);return Z.push(he),gt(Z).then(()=>{Z=[];for(const de of r.list())Z.push(Cs(de,j,te));return Z.push(he),gt(Z)}).then(()=>{Z=xr(Ce,"beforeRouteUpdate",j,te);for(const de of Ce)de.updateGuards.forEach(g=>{Z.push(Cs(g,j,te))});return Z.push(he),gt(Z)}).then(()=>{Z=[];for(const de of j.matched)if(de.beforeEnter&&!te.matched.includes(de))if(Fn(de.beforeEnter))for(const g of de.beforeEnter)Z.push(Cs(g,j,te));else Z.push(Cs(de.beforeEnter,j,te));return Z.push(he),gt(Z)}).then(()=>(j.matched.forEach(de=>de.enterCallbacks={}),Z=xr(xe,"beforeRouteEnter",j,te),Z.push(he),gt(Z))).then(()=>{Z=[];for(const de of i.list())Z.push(Cs(de,j,te));return Z.push(he),gt(Z)}).catch(de=>ts(de,8)?de:Promise.reject(de))}function oe(j,te,Z){for(const le of c.list())le(j,te,Z)}function ue(j,te,Z,le,Ce){const xe=D(j,te);if(xe)return xe;const he=te===vs,de=is?history.state:{};Z&&(le||he?l.replace(j.fullPath,Ie({scroll:he&&de&&de.scroll},Ce)):l.push(j.fullPath,Ce)),p.value=j,Ne(j,te,Z,he),ke()}let ee;function De(){ee||(ee=l.listen((j,te,Z)=>{if(!_s.listening)return;const le=w(j),Ce=G(le);if(Ce){X(Ie(Ce,{replace:!0}),le).catch(yo);return}u=le;const xe=p.value;is&&Kg(sp(xe.fullPath,Z.delta),lr()),K(le,xe).catch(he=>ts(he,12)?he:ts(he,2)?(X(he.to,le).then(de=>{ts(de,20)&&!Z.delta&&Z.type===Fo.pop&&l.go(-1,!1)}).catch(yo),Promise.reject()):(Z.delta&&l.go(-Z.delta,!1),ne(he,le,xe))).then(he=>{he=he||ue(le,xe,!1),he&&(Z.delta&&!ts(he,8)?l.go(-Z.delta,!1):Z.type===Fo.pop&&ts(he,20)&&l.go(-1,!1)),oe(le,xe,he)}).catch(yo)}))}let Oe=Xt(),Se=Xt(),qe;function ne(j,te,Z){ke(j);const le=Se.list();return le.length?le.forEach(Ce=>Ce(j,te,Z)):(Fe("uncaught error during route navigation:"),console.error(j)),Promise.reject(j)}function pe(){return qe&&p.value!==vs?Promise.resolve():new Promise((j,te)=>{Oe.add([j,te])})}function ke(j){return qe||(qe=!j,De(),Oe.list().forEach(([te,Z])=>j?Z(j):te()),Oe.reset()),j}function Ne(j,te,Z,le){const{scrollBehavior:Ce}=n;if(!is||!Ce)return Promise.resolve();const xe=!Z&&Yg(sp(j.fullPath,0))||(le||!Z)&&history.state&&history.state.scroll||null;return tn().then(()=>Ce(j,te,xe)).then(he=>he&&zg(he)).catch(he=>ne(he,j,te))}const Dn=j=>l.go(j);let on;const _n=new Set,_s={currentRoute:p,listening:!0,addRoute:h,removeRoute:m,hasRoute:v,getRoutes:A,resolve:w,options:n,push:x,replace:L,go:Dn,back:()=>Dn(-1),forward:()=>Dn(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:Se.add,isReady:pe,install(j){const te=this;j.component("RouterLink",RA),j.component("RouterView",HA),j.config.globalProperties.$router=te,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>b(p)}),is&&!on&&p.value===vs&&(on=!0,x(l.location).catch(Ce=>{Fe("Unexpected error when starting the router:",Ce)}));const Z={};for(const Ce in vs)Z[Ce]=$(()=>p.value[Ce]);j.provide(mi,te),j.provide(ty,Ve(Z)),j.provide(ga,p);const le=j.unmount;_n.add(j),j.unmount=function(){_n.delete(j),_n.size<1&&(u=vs,ee&&ee(),ee=null,p.value=vs,on=!1,qe=!1),le()},is&&WA(j,te,s)}};return _s}function gt(n){return n.reduce((s,t)=>s.then(()=>t()),Promise.resolve())}function n3(n,s){const t=[],o=[],l=[],r=Math.max(s.matched.length,n.matched.length);for(let i=0;i<r;i++){const c=s.matched[i];c&&(n.matched.find(u=>Ns(u,c))?o.push(c):t.push(c));const p=n.matched[i];p&&(s.matched.find(u=>Ns(u,p))||l.push(p))}return[t,o,l]}const Sr=Q(!1),mo=Q(!1),bt=Q(!1),s3=Q(!0),va=G5({xs:460,...L5}),rt=xg(),uy=hg(),t3=$(()=>rt.height.value-rt.width.value/$s>180),dy=yg(Un?document.body:null),$t=I5(),o3=$(()=>{var n,s;return["INPUT","TEXTAREA"].includes(((n=$t.value)==null?void 0:n.tagName)||"")||((s=$t.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),l3=$(()=>{var n;return["BUTTON","A"].includes(((n=$t.value)==null?void 0:n.tagName)||"")});Wn("slidev-camera","default");Wn("slidev-mic","default");const hl=Wn("slidev-scale",0),un=Wn("slidev-show-overview",!1),Fr=Wn("slidev-presenter-cursor",!0),hp=Wn("slidev-show-editor",!1);Wn("slidev-editor-width",Un?window.innerWidth*.4:100);const yy=Gd(un);function _p(n,s,t,o=l=>l){return n*o(.5-s*(.5-t))}function r3(n){return[-n[0],-n[1]]}function qn(n,s){return[n[0]+s[0],n[1]+s[1]]}function On(n,s){return[n[0]-s[0],n[1]-s[1]]}function Mn(n,s){return[n[0]*s,n[1]*s]}function a3(n,s){return[n[0]/s,n[1]/s]}function Jt(n){return[n[1],-n[0]]}function gp(n,s){return n[0]*s[0]+n[1]*s[1]}function i3(n,s){return n[0]===s[0]&&n[1]===s[1]}function c3(n){return Math.hypot(n[0],n[1])}function p3(n){return n[0]*n[0]+n[1]*n[1]}function Ap(n,s){return p3(On(n,s))}function fy(n){return a3(n,c3(n))}function u3(n,s){return Math.hypot(n[1]-s[1],n[0]-s[0])}function Qt(n,s,t){let o=Math.sin(t),l=Math.cos(t),r=n[0]-s[0],i=n[1]-s[1],c=r*l-i*o,p=r*o+i*l;return[c+s[0],p+s[1]]}function Ba(n,s,t){return qn(n,Mn(On(s,n),t))}function vp(n,s,t){return qn(n,Mn(s,t))}var{min:At,PI:d3}=Math,Bp=.275,eo=d3+1e-4;function y3(n,s={}){let{size:t=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:i=ne=>ne,start:c={},end:p={},last:u=!1}=s,{cap:d=!0,easing:y=ne=>ne*(2-ne)}=c,{cap:f=!0,easing:h=ne=>--ne*ne*ne+1}=p;if(n.length===0||t<=0)return[];let m=n[n.length-1].runningLength,A=c.taper===!1?0:c.taper===!0?Math.max(t,m):c.taper,v=p.taper===!1?0:p.taper===!0?Math.max(t,m):p.taper,w=Math.pow(t*o,2),k=[],D=[],x=n.slice(0,10).reduce((ne,pe)=>{let ke=pe.pressure;if(r){let Ne=At(1,pe.distance/t),Dn=At(1,1-Ne);ke=At(1,ne+(Dn-ne)*(Ne*Bp))}return(ne+ke)/2},n[0].pressure),L=_p(t,l,n[n.length-1].pressure,i),G,X=n[0].vector,I=n[0].point,K=I,oe=I,ue=K,ee=!1;for(let ne=0;ne<n.length;ne++){let{pressure:pe}=n[ne],{point:ke,vector:Ne,distance:Dn,runningLength:on}=n[ne];if(ne<n.length-1&&m-on<3)continue;if(l){if(r){let xe=At(1,Dn/t),he=At(1,1-xe);pe=At(1,x+(he-x)*(xe*Bp))}L=_p(t,l,pe,i)}else L=t/2;G===void 0&&(G=L);let _n=on<A?y(on/A):1,_s=m-on<v?h((m-on)/v):1;L=Math.max(.01,L*Math.min(_n,_s));let j=(ne<n.length-1?n[ne+1]:n[ne]).vector,te=ne<n.length-1?gp(Ne,j):1,Z=gp(Ne,X)<0&&!ee,le=te!==null&&te<0;if(Z||le){let xe=Mn(Jt(X),L);for(let he=1/13,de=0;de<=1;de+=he)oe=Qt(On(ke,xe),ke,eo*de),k.push(oe),ue=Qt(qn(ke,xe),ke,eo*-de),D.push(ue);I=oe,K=ue,le&&(ee=!0);continue}if(ee=!1,ne===n.length-1){let xe=Mn(Jt(Ne),L);k.push(On(ke,xe)),D.push(qn(ke,xe));continue}let Ce=Mn(Jt(Ba(j,Ne,te)),L);oe=On(ke,Ce),(ne<=1||Ap(I,oe)>w)&&(k.push(oe),I=oe),ue=qn(ke,Ce),(ne<=1||Ap(K,ue)>w)&&(D.push(ue),K=ue),x=pe,X=Ne}let De=n[0].point.slice(0,2),Oe=n.length>1?n[n.length-1].point.slice(0,2):qn(n[0].point,[1,1]),Se=[],qe=[];if(n.length===1){if(!(A||v)||u){let ne=vp(De,fy(Jt(On(De,Oe))),-(G||L)),pe=[];for(let ke=1/13,Ne=ke;Ne<=1;Ne+=ke)pe.push(Qt(ne,De,eo*2*Ne));return pe}}else{if(!(A||v&&n.length===1))if(d)for(let pe=1/13,ke=pe;ke<=1;ke+=pe){let Ne=Qt(D[0],De,eo*ke);Se.push(Ne)}else{let pe=On(k[0],D[0]),ke=Mn(pe,.5),Ne=Mn(pe,.51);Se.push(On(De,ke),On(De,Ne),qn(De,Ne),qn(De,ke))}let ne=Jt(r3(n[n.length-1].vector));if(v||A&&n.length===1)qe.push(Oe);else if(f){let pe=vp(Oe,ne,L);for(let ke=1/29,Ne=ke;Ne<1;Ne+=ke)qe.push(Qt(pe,Oe,eo*3*Ne))}else qe.push(qn(Oe,Mn(ne,L)),qn(Oe,Mn(ne,L*.99)),On(Oe,Mn(ne,L*.99)),On(Oe,Mn(ne,L)))}return k.concat(qe,D.reverse(),Se)}function f3(n,s={}){var t;let{streamline:o=.5,size:l=16,last:r=!1}=s;if(n.length===0)return[];let i=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:h,y:m,pressure:A=.5})=>[h,m,A]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let m=1;m<5;m++)c.push(Ba(c[0],h,m/4))}c.length===1&&(c=[...c,[...qn(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,y=p[0],f=c.length-1;for(let h=1;h<c.length;h++){let m=r&&h===f?c[h].slice(0,2):Ba(y.point,c[h],i);if(i3(y.point,m))continue;let A=u3(m,y.point);if(d+=A,h<f&&!u){if(d<l)continue;u=!0}y={point:m,pressure:c[h][2]>=0?c[h][2]:.5,vector:fy(On(y.point,m)),distance:A,runningLength:d},p.push(y)}return p[0].vector=((t=p[1])==null?void 0:t.vector)||[0,0],p}function m3(n,s={}){return y3(f3(n,s),s)}var h3=()=>({events:{},emit(n,...s){let t=this.events[n]||[];for(let o=0,l=t.length;o<l;o++)t[o](...s)},on(n,s){var t;return(t=this.events[n])!=null&&t.push(s)||(this.events[n]=[s]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(l=>s!==l)}}});function Il(n,s){return n-s}function _3(n){return n<0?-1:1}function Ll(n){return[Math.abs(n),_3(n)]}function my(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var g3=2,cs=g3,Rt=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var s;const t=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-l.left)*o,y:(n.pageY-l.top)*o,pressure:n.pressure}}else{const l=this.drauu.svgPoint;l.x=n.clientX,l.y=n.clientY;const r=l.matrixTransform((s=t.getScreenCTM())==null?void 0:s.inverse());return{x:r.x*o,y:r.y*o,pressure:n.pressure}}}createElement(n,s){const t=document.createElementNS("http://www.w3.org/2000/svg",n),o=s?{...this.brush,...s}:this.brush;return t.setAttribute("fill",o.fill??"transparent"),t.setAttribute("stroke",o.color),t.setAttribute("stroke-width",o.size.toString()),t.setAttribute("stroke-linecap","round"),o.dasharray&&t.setAttribute("stroke-dasharray",o.dasharray),t}attr(n,s){this.el.setAttribute(n,typeof s=="string"?s:s.toFixed(cs))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},A3=class extends Rt{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const s=m3(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const t=s.reduce((o,[l,r],i,c)=>{const[p,u]=c[(i+1)%c.length];return o.push(l,r,(l+p)/2,(r+u)/2),o},["M",...s[0],"Q"]);return t.push("Z"),t.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},v3=class extends Rt{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,t]=Ll(n.x-this.start.x),[o,l]=Ll(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,o);s=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",o);else{const[r,i]=[this.start.x,this.start.x+s*t].sort(Il),[c,p]=[this.start.y,this.start.y+o*l].sort(Il);this.attr("cx",(r+i)/2),this.attr("cy",(c+p)/2),this.attr("rx",(i-r)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function hy(n,s){const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",s),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),t.appendChild(o),t}var B3=class extends Rt{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const s=my(),t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.append(hy(s,this.brush.color)),t.append(this.el),this.attr("marker-end",`url(#${s})`),t}return this.el}onMove(n){if(!this.el)return!1;let{x:s,y:t}=n;if(this.shiftPressed){const o=n.x-this.start.x,l=n.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(s=this.start.x+l*r,t=this.start.y+l):(s=this.start.x+o,t=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-t),this.attr("x2",s),this.attr("y2",t)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",t)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},k3=class extends Rt{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,t]=Ll(n.x-this.start.x),[o,l]=Ll(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,o);s=r,o=r}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-o),this.attr("width",s*2),this.attr("height",o*2);else{const[r,i]=[this.start.x,this.start.x+s*t].sort(Il),[c,p]=[this.start.y,this.start.y+o*l].sort(Il);this.attr("x",r),this.attr("y",c),this.attr("width",i-r),this.attr("height",p-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function D3(n,s){const t=n.x-s.x,o=n.y-s.y;return t*t+o*o}function C3(n,s,t){let o=s.x,l=s.y,r=t.x-o,i=t.y-l;if(r!==0||i!==0){const c=((n.x-o)*r+(n.y-l)*i)/(r*r+i*i);c>1?(o=t.x,l=t.y):c>0&&(o+=r*c,l+=i*c)}return r=n.x-o,i=n.y-l,r*r+i*i}function b3(n,s){let t=n[0];const o=[t];let l;for(let r=1,i=n.length;r<i;r++)l=n[r],D3(l,t)>s&&(o.push(l),t=l);return t!==l&&l&&o.push(l),o}function ka(n,s,t,o,l){let r=o,i=0;for(let c=s+1;c<t;c++){const p=C3(n[c],n[s],n[t]);p>r&&(i=c,r=p)}r>o&&(i-s>1&&ka(n,s,i,o,l),l.push(n[i]),t-i>1&&ka(n,i,t,o,l))}function w3(n,s){const t=n.length-1,o=[n[0]];return ka(n,0,t,s,o),o.push(n[t]),o}function kp(n,s,t=!1){if(n.length<=2)return n;const o=s!==void 0?s*s:1;return n=t?n:b3(n,o),n=w3(n,o),n}var E3=class extends Rt{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=my();const s=hy(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=kp(this.points,1,!0),this.count=0),this.attr("d",Cp(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Cp(kp(this.points,1,!0))),!n.getTotalLength()))}};function x3(n,s){const t=s.x-n.x,o=s.y-n.y;return{length:Math.sqrt(t**2+o**2),angle:Math.atan2(o,t)}}function Dp(n,s,t,o){const l=s||n,r=t||n,i=.2,c=x3(l,r),p=c.angle+(o?Math.PI:0),u=c.length*i,d=n.x+Math.cos(p)*u,y=n.y+Math.sin(p)*u;return{x:d,y}}function S3(n,s,t){const o=Dp(t[s-1],t[s-2],n),l=Dp(n,t[s-1],t[s+1],!0);return`C ${o.x.toFixed(cs)},${o.y.toFixed(cs)} ${l.x.toFixed(cs)},${l.y.toFixed(cs)} ${n.x.toFixed(cs)},${n.y.toFixed(cs)}`}function Cp(n){return n.reduce((s,t,o,l)=>o===0?`M ${t.x.toFixed(cs)},${t.y.toFixed(cs)}`:`${s} ${S3(t,o,l)}`,"")}var F3=class extends Rt{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const s=(t,o)=>{if(t&&t.length)for(let l=0;l<t.length;l++){const r=t[l];if(r.getTotalLength){const i=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=r.getPointAtLength(i*c/this.pathSubFactor),u=r.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:o||r})}}else r.children&&s(r.children,r)}};n&&s(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const t=this.pathFragments[s],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(t,o)&&(t.element.remove(),n.push(s))}return n.length&&(this.pathFragments=this.pathFragments.filter((s,t)=>!n.includes(t))),n.length>0}lineLineIntersect(n,s){const t=n.x1,o=n.x2,l=s.x1,r=s.x2,i=n.y1,c=n.y2,p=s.y1,u=s.y2,d=(t-o)*(p-u)-(i-c)*(l-r),y=(t*c-i*o)*(l-r)-(t-o)*(l*u-p*r),f=(t*c-i*o)*(p-u)-(i-c)*(l*u-p*r),h=(m,A,v)=>m>=A&&m<=v?!0:m>=v&&m<=A;if(d===0)return!1;{const m={x:y/d,y:f/d};return h(m.x,t,o)&&h(m.y,i,c)&&h(m.x,l,r)&&h(m.y,p,u)}}};function $3(n){return{draw:new E3(n),stylus:new A3(n),line:new B3(n),rectangle:new k3(n),ellipse:new v3(n),eraseLine:new F3(n)}}var T3=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=h3(),this._models=$3(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const t=this.resolveSelector(s)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);t.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{t.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,s){return this._emitter.on(n,s)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const s=this.model._eventUp(n);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function j3(n){return new T3(n)}const Da=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Qn=Wn("slidev-drawing-enabled",!1),bF=Wn("slidev-drawing-pinned",!1),O3=Q(!1),P3=Q(!1),I3=Q(!1),To=Q(!1),Js=c5(Wn("slidev-drawing-brush",{color:Da[0],size:4,mode:"stylus"})),bp=Q("stylus"),_y=$(()=>$e.drawings.syncAll||An.value);let jo=!1;const no=$({get(){return bp.value},set(n){bp.value=n,n==="arrow"?(Js.mode="line",Js.arrowEnd=!0):(Js.mode=n,Js.arrowEnd=!1)}}),L3=Ve({brush:Js,acceptsInputTypes:$(()=>Qn.value&&(!$e.drawings.presenterOnly||An.value)?void 0:["pen"]),coordinateTransform:!1}),mn=zl(j3(L3));function N3(){mn.clear(),_y.value&&Nd(Ke.value,"")}function hi(){var n;P3.value=mn.canRedo(),O3.value=mn.canUndo(),I3.value=!!((n=mn.el)!=null&&n.children.length)}function R3(n){jo=!0;const s=Ol[n||Ke.value];s!=null?mn.load(s):mn.clear(),hi(),jo=!1}mn.on("changed",()=>{if(hi(),!jo){const n=mn.dump(),s=Ke.value;(Ol[s]||"")!==n&&_y.value&&Nd(s,mn.dump())}});Z_(n=>{jo=!0,n[Ke.value]!=null&&mn.load(n[Ke.value]||""),jo=!1,hi()});tn(()=>{ve(Ke,()=>{mn.mounted&&R3()},{immediate:!0})});mn.on("start",()=>To.value=!0);mn.on("end",()=>To.value=!1);window.addEventListener("keydown",n=>{if(!Qn.value)return;const s=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let t=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?mn.redo():mn.undo():n.code==="Escape"?Qn.value=!1:n.code==="KeyL"&&s?no.value="line":n.code==="KeyA"&&s?no.value="arrow":n.code==="KeyS"&&s?no.value="stylus":n.code==="KeyR"&&s?no.value="rectangle":n.code==="KeyE"&&s?no.value="ellipse":n.code==="KeyC"&&s?N3():n.code.startsWith("Digit")&&s&&+n.code[5]<=Da.length?Js.color=Da[+n.code[5]-1]:t=!1,t&&(n.preventDefault(),n.stopPropagation())},!1);function Je(...n){return $(()=>n.every(s=>ln(s)))}function bn(n){return $(()=>!ln(n))}const wp=Q5(),$r=Wn("slidev-color-schema","auto"),Ca=$(()=>$e.colorSchema!=="auto"),_i=$({get(){return Ca.value?$e.colorSchema==="dark":$r.value==="auto"?wp.value:$r.value==="dark"},set(n){Ca.value||($r.value=n===wp.value?"auto":n?"dark":"light")}}),gy=Gd(_i);Un&&ve(_i,n=>{const s=document.querySelector("html");s.classList.toggle("dark",n),s.classList.toggle("light",!n)},{immediate:!0});const _l=Q(1),gl=$(()=>Xe.length-1),Sn=Q(0),gi=Q(0);function M3(){Sn.value>_l.value&&(Sn.value-=1)}function q3(){Sn.value<gl.value&&(Sn.value+=1)}function G3(){if(Sn.value>_l.value){let n=Sn.value-gi.value;n<_l.value&&(n=_l.value),Sn.value=n}}function H3(){if(Sn.value<gl.value){let n=Sn.value+gi.value;n>gl.value&&(n=gl.value),Sn.value=n}}function V3(){const{escape:n,space:s,shift:t,left:o,right:l,up:r,down:i,enter:c,d:p,g:u,o:d}=uy;let y=[{name:"next_space",key:Je(s,bn(t)),fn:Os,autoRepeat:!0},{name:"prev_space",key:Je(s,t),fn:Ps,autoRepeat:!0},{name:"next_right",key:Je(l,bn(t),bn(un)),fn:Os,autoRepeat:!0},{name:"prev_left",key:Je(o,bn(t),bn(un)),fn:Ps,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Os,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Ps,autoRepeat:!0},{name:"next_down",key:Je(i,bn(un)),fn:Po,autoRepeat:!0},{name:"prev_up",key:Je(r,bn(un)),fn:()=>Io(!1),autoRepeat:!0},{name:"next_shift",key:Je(l,t),fn:Po,autoRepeat:!0},{name:"prev_shift",key:Je(o,t),fn:()=>Io(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(p,bn(Qn)),fn:gy},{name:"toggle_overview",key:Je(d,bn(Qn)),fn:yy},{name:"hide_overview",key:Je(n,bn(Qn)),fn:()=>un.value=!1},{name:"goto",key:Je(u,bn(Qn)),fn:()=>bt.value=!bt.value},{name:"next_overview",key:Je(l,un),fn:q3},{name:"prev_overview",key:Je(o,un),fn:M3},{name:"up_overview",key:Je(r,un),fn:G3},{name:"down_overview",key:Je(i,un),fn:H3},{name:"goto_from_overview",key:Je(c,un),fn:()=>{Lt(Sn.value),un.value=!1}}];const f=new Set(y.map(m=>m.name));if(y.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return y}const Ay=Je(bn(o3),bn(l3),s3);function U3(n,s,t=!1){typeof n=="string"&&(n=uy[n]);const o=Je(n,Ay);let l=0,r;const i=()=>{if(clearTimeout(r),!o.value){l=0;return}t&&(r=setTimeout(i,Math.max(1e3-l*250,150)),l++),s()};return ve(o,i,{flush:"sync"})}function W3(n,s){return P5(n,t=>{Ay.value&&(t.repeat||s())})}function z3(){const n=V3();new Map(n.map(t=>[t.key,t])).forEach(t=>{t.fn&&U3(t.key,t.fn,t.autoRepeat)}),W3("f",()=>dy.toggle())}const K3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y3=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),X3=[Y3];function Z3(n,s){return _(),C("svg",K3,X3)}const J3={name:"carbon-close",render:Z3};function Ai(n,s=""){var l,r;const t=["slidev-page",s],o=(r=(l=n==null?void 0:n.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&t.push(`slidev-page-${o}`),t.filter(Boolean).join(" ")}const Q3=we({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const s=n;F(O);const t=Q(),o=dg(t),l=$(()=>s.width?s.width:o.width.value),r=$(()=>s.width?s.width/$s:o.height.value);s.width&&dt(()=>{t.value&&(t.value.style.width=`${l.value}px`,t.value.style.height=`${r.value}px`)});const i=$(()=>l.value/r.value),c=$(()=>s.scale&&!ds.value?s.scale:i.value<$s?l.value/Ts:r.value*$s/Ts),p=$(()=>({height:`${ui}px`,width:`${Ts}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=$(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return En(Pd,c),(d,y)=>(_(),C("div",{id:"slide-container",ref_key:"root",ref:t,class:Ue(b(u))},[e("div",{id:"slide-content",style:Ze(b(p))},[hn(d.$slots,"default")],4),hn(d.$slots,"controls")],2))}});const P=(n,s)=>{const t=n.__vccOpts||n;for(const[o,l]of s)t[o]=l;return t},vy=P(Q3,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/SlideContainer.vue"]]),vi=we({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:s}){const t=Jn(n,"clicks",s),o=Jn(n,"clicksElements",s),l=Jn(n,"clicksDisabled",s),r=Jn(n,"clicksOrderMap",s);o.value.length=0,En(I_,n.route),En(L_,n.context),En(po,t),En(uo,l),En(Ys,o),En(ia,r)},render(){var n,s;return this.$props.is?fn(this.$props.is):(s=(n=this.$slots)==null?void 0:n.default)==null?void 0:s.call(n)}}),ev=["innerHTML"],nv=we({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return F(O),(s,t)=>b(Ol)[n.page]?(_(),C("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Ol)[n.page]},null,8,ev)):ge("v-if",!0)}}),By=P(nv,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),sv=Object.freeze(Object.defineProperty({__proto__:null,default:By},Symbol.toStringTag,{value:"Module"})),tv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},ov=["onClick"],lv=we({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:s}){const t=n;F(O);const o=Jn(t,"modelValue",s);function l(){o.value=!1}function r(h){Lt(h),l()}function i(h){return h===Sn.value}const c=va.smaller("xs"),p=va.smaller("sm"),u=4*16*2,d=2*16,y=$(()=>c.value?rt.width.value-u:p.value?(rt.width.value-u-d)/2:300),f=$(()=>Math.floor((rt.width.value-u)/(y.value+d)));return dt(()=>{Sn.value=Ke.value,gi.value=f.value}),(h,m)=>{const A=J3;return _(),C(je,null,[nr(e("div",tv,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ze(`grid-template-columns: repeat(auto-fit,minmax(${b(y)}px,1fr))`)},[(_(!0),C(je,null,Nt(b(Xe).slice(0,-1),(v,w)=>(_(),C("div",{key:v.path,class:"relative"},[e("div",{class:Ue(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(w+1),"border-gray-400":!i(w+1)}]),style:Ze(b(di)),onClick:k=>r(+v.path)},[(_(),T(vy,{key:v.path,width:b(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:E(()=>[M(b(vi),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:Ue(b(Ai)(v)),route:v,context:"overview"},null,8,["is","class","route"]),M(By,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,ov),e("div",{class:"absolute top-0 opacity-50",style:Ze(`left: ${b(y)+5}px`)},at(w+1),5)]))),128))],4)],512),[[bd,b(o)]]),b(o)?(_(),C("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[M(A)])):ge("v-if",!0)],64)}}});const rv=P(lv,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),av="/admin-panel-revolution-for-your-symfony-projects/assets/logo-b72bde5d.png",iv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},cv=we({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:s}){const t=n;F(O);const o=Jn(t,"modelValue",s);function l(){o.value=!1}return(r,i)=>(_(),T(Yu,null,[b(o)?(_(),C("div",iv,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>l())}),e("div",{class:Ue(["m-auto rounded-md bg-main shadow",t.class]),"dark:border":"~ gray-400 opacity-10"},[hn(r.$slots,"default")],2)])):ge("v-if",!0)],1024))}}),pv=P(cv,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/Modal.vue"]]),uv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},dv=["innerHTML"],yv=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:av,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),a("dev ")])])],-1),fv=we({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:s}){const t=n;F(O);const o=Jn(t,"modelValue",s),l=$(()=>typeof $e.info=="string");return(r,i)=>(_(),T(pv,{modelValue:b(o),"onUpdate:modelValue":i[0]||(i[0]=c=>Te(o)?o.value=c:null),class:"px-6 py-4"},{default:E(()=>[e("div",uv,[b(l)?(_(),C("div",{key:0,class:"mb-4",innerHTML:b($e).info},null,8,dv)):ge("v-if",!0),yv])]),_:1},8,["modelValue"]))}});const mv=P(fv,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/InfoDialog.vue"]]),hv=["disabled","onKeydown"],_v=we({__name:"Goto",setup(n){F(O);const s=Q(),t=Q(""),o=$(()=>{if(t.value.startsWith("/"))return!!Xe.find(i=>i.path===t.value.substring(1));{const i=+t.value;return!isNaN(i)&&i>0&&i<=Ny.value}});function l(){o.value&&(t.value.startsWith("/")?Lt(t.value.substring(1)):Lt(+t.value)),r()}function r(){bt.value=!1}return ve(bt,async i=>{var c,p;i?(await tn(),t.value="",(c=s.value)==null||c.focus()):(p=s.value)==null||p.blur()}),ve(t,i=>{i.match(/^[^0-9/]/)&&(t.value=t.value.substring(1))}),(i,c)=>(_(),C("div",{id:"slidev-goto-dialog",class:Ue(["fixed right-5 bg-main transform transition-all",b(bt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[nr(e("input",{ref_key:"input",ref:s,"onUpdate:modelValue":c[0]||(c[0]=p=>t.value=p),type:"text",disabled:!b(bt),class:Ue(["outline-none bg-transparent",{"text-red-400":!b(o)&&t.value}]),placeholder:"Goto...",onKeydown:[wc(l,["enter"]),wc(r,["escape"])],onBlur:r},null,42,hv),[[qh,t.value]])],2))}}),gv=P(_v,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/Goto.vue"]]),Av=we({__name:"Controls",setup(n){F(O);const s=ns(),t=ns();return(o,l)=>(_(),C(je,null,[M(rv,{modelValue:b(un),"onUpdate:modelValue":l[0]||(l[0]=r=>Te(un)?un.value=r:null)},null,8,["modelValue"]),M(gv),b(s)?(_(),T(b(s),{key:0})):ge("v-if",!0),b(t)?(_(),T(b(t),{key:1,modelValue:b(Sr),"onUpdate:modelValue":l[1]||(l[1]=r=>Te(Sr)?Sr.value=r:null)},null,8,["modelValue"])):ge("v-if",!0),b($e).info?(_(),T(mv,{key:2,modelValue:b(mo),"onUpdate:modelValue":l[2]||(l[2]=r=>Te(mo)?mo.value=r:null)},null,8,["modelValue"])):ge("v-if",!0)],64))}}),vv=P(Av,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/Controls.vue"]]),Bv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kv=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Dv=[kv];function Cv(n,s){return _(),C("svg",Bv,Dv)}const bv={name:"carbon-settings-adjust",render:Cv},wv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ev=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),xv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Sv=[Ev,xv];function Fv(n,s){return _(),C("svg",wv,Sv)}const $v={name:"carbon-information",render:Fv},Tv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Ov=[jv];function Pv(n,s){return _(),C("svg",Tv,Ov)}const Iv={name:"carbon-download",render:Pv},Lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nv=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Rv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Mv=[Nv,Rv];function qv(n,s){return _(),C("svg",Lv,Mv)}const Gv={name:"carbon-user-speaker",render:qv},Hv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Uv=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Wv=[Vv,Uv];function zv(n,s){return _(),C("svg",Hv,Wv)}const Kv={name:"carbon-presentation-file",render:zv},Yv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xv=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Zv=[Xv];function Jv(n,s){return _(),C("svg",Yv,Zv)}const Qv={name:"carbon-pen",render:Jv},eB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},nB=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),sB=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),tB=[nB,sB];function oB(n,s){return _(),C("svg",eB,tB)}const lB={name:"ph-cursor-duotone",render:oB},rB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},aB=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),iB=[aB];function cB(n,s){return _(),C("svg",rB,iB)}const ky={name:"ph-cursor-fill",render:cB},pB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uB=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),dB=[uB];function yB(n,s){return _(),C("svg",pB,dB)}const fB={name:"carbon-sun",render:yB},mB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hB=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),_B=[hB];function gB(n,s){return _(),C("svg",mB,_B)}const AB={name:"carbon-moon",render:gB},vB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},BB=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),kB=[BB];function DB(n,s){return _(),C("svg",vB,kB)}const CB={name:"carbon-apps",render:DB},bB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wB=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),EB=[wB];function xB(n,s){return _(),C("svg",bB,EB)}const SB={name:"carbon-arrow-right",render:xB},FB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$B=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),TB=[$B];function jB(n,s){return _(),C("svg",FB,TB)}const OB={name:"carbon-arrow-left",render:jB},PB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},IB=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),LB=[IB];function NB(n,s){return _(),C("svg",PB,LB)}const RB={name:"carbon-maximize",render:NB},MB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qB=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),GB=[qB];function HB(n,s){return _(),C("svg",MB,GB)}const VB={name:"carbon-minimize",render:HB},UB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WB=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),zB=[WB];function KB(n,s){return _(),C("svg",UB,zB)}const YB={name:"carbon-checkmark",render:KB},XB={class:"select-list"},ZB={class:"title"},JB={class:"items"},QB=["onClick"],e1=we({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:s}){const t=n;F(O);const o=Jn(t,"modelValue",s,{passive:!0});return(l,r)=>{const i=YB;return _(),C("div",XB,[e("div",ZB,at(n.title),1),e("div",JB,[(_(!0),C(je,null,Nt(n.items,c=>(_(),C("div",{key:c.value,class:Ue(["item",{active:b(o)===c.value}]),onClick:()=>{var p;o.value=c.value,(p=c.onClick)==null||p.call(c)}},[M(i,{class:Ue(["text-green-500",{"opacity-0":b(o)!==c.value}])},null,8,["class"]),a(" "+at(c.display||c.value),1)],10,QB))),128))])])}}});const n1=P(e1,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/SelectList.vue"]]),s1={class:"text-sm"},t1=we({__name:"Settings",setup(n){F(O);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,o)=>(_(),C("div",s1,[M(n1,{modelValue:b(hl),"onUpdate:modelValue":o[0]||(o[0]=l=>Te(hl)?hl.value=l:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),o1=P(t1,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/Settings.vue"]]),l1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},r1=we({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:s}){const t=n;F(O);const o=Jn(t,"modelValue",s,{passive:!0}),l=Q();return j5(l,()=>{o.value=!1}),(r,i)=>(_(),C("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Ue({disabled:n.disabled}),onClick:i[0]||(i[0]=c=>o.value=!b(o))},[hn(r.$slots,"button",{class:Ue({disabled:n.disabled})})],2),(_(),T(Yu,null,[b(o)?(_(),C("div",l1,[hn(r.$slots,"menu")])):ge("v-if",!0)],1024))],512))}}),a1=P(r1,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/MenuButton.vue"]]),i1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},c1={__name:"VerticalDivider",setup(n){return F(O),(s,t)=>(_(),C("div",i1))}},il=P(c1,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),p1={render(){return[]}},u1={class:"slidev-icon-btn"},d1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},y1={class:"my-auto"},f1={class:"opacity-50"},m1=we({__name:"NavControls",props:{persist:{default:!1}},setup(n){const s=n;F(O);const t=va.smaller("md"),{isFullscreen:o,toggle:l}=dy,r=$(()=>wa.value?`?password=${wa.value}`:""),i=$(()=>`/presenter/${Ke.value}${r.value}`),c=$(()=>`/${Ke.value}${r.value}`),p=Q(),u=()=>{p.value&&$t.value&&p.value.contains($t.value)&&$t.value.blur()},d=$(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=ns(),f=ns();return js(()=>import("./DrawingControls-190ba8cc.js"),[]).then(h=>f.value=h.default),(h,m)=>{const A=VB,v=RB,w=OB,k=SB,D=CB,x=AB,L=fB,G=ky,X=lB,I=Qv,K=Kv,oe=Ot("RouterLink"),ue=Gv,ee=Iv,De=$v,Oe=bv;return _(),C("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Ue(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(as)?ge("v-if",!0):(_(),C("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...Se)=>b(l)&&b(l)(...Se))},[b(o)?(_(),T(A,{key:0})):(_(),T(v,{key:1}))])),e("button",{class:Ue(["slidev-icon-btn",{disabled:!b(qE)}]),onClick:m[1]||(m[1]=(...Se)=>b(Ps)&&b(Ps)(...Se))},[M(w)],2),e("button",{class:Ue(["slidev-icon-btn",{disabled:!b(ME)}]),title:"Next",onClick:m[2]||(m[2]=(...Se)=>b(Os)&&b(Os)(...Se))},[M(k)],2),b(as)?ge("v-if",!0):(_(),C("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Se=>b(yy)())},[M(D)])),b(Ca)?ge("v-if",!0):(_(),C("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Se=>b(gy)())},[b(_i)?(_(),T(x,{key:0})):(_(),T(L,{key:1}))])),M(il),b(as)?ge("v-if",!0):(_(),C(je,{key:3},[!b(An)&&!b(t)&&b(y)?(_(),C(je,{key:0},[M(b(y)),M(il)],64)):ge("v-if",!0),b(An)?(_(),C("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Se=>Fr.value=!b(Fr))},[b(Fr)?(_(),T(G,{key:0})):(_(),T(X,{key:1,class:"opacity-50"}))])):ge("v-if",!0)],64)),(!b($e).drawings.presenterOnly||b(An))&&!b(as)?(_(),C(je,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Se=>Qn.value=!b(Qn))},[M(I),b(Qn)?(_(),C("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ze({background:b(Js).color})},null,4)):ge("v-if",!0)]),M(il)],64)):ge("v-if",!0),b(as)?ge("v-if",!0):(_(),C(je,{key:5},[b(An)?(_(),T(oe,{key:0,to:b(c),class:"slidev-icon-btn",title:"Play Mode"},{default:E(()=>[M(K)]),_:1},8,["to"])):ge("v-if",!0),b(IE)?(_(),T(oe,{key:1,to:b(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:E(()=>[M(ue)]),_:1},8,["to"])):ge("v-if",!0),ge("v-if",!0)],64)),(_(),C(je,{key:6},[b($e).download?(_(),C("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...Se)=>b(Ea)&&b(Ea)(...Se))},[M(ee)])):ge("v-if",!0)],64)),!b(An)&&b($e).info&&!b(as)?(_(),C("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=Se=>mo.value=!b(mo))},[M(De)])):ge("v-if",!0),!b(An)&&!b(as)?(_(),T(a1,{key:8},{button:E(()=>[e("button",u1,[M(Oe)])]),menu:E(()=>[M(o1)]),_:1})):ge("v-if",!0),b(as)?ge("v-if",!0):(_(),T(il,{key:9})),e("div",d1,[e("div",y1,[a(at(b(Ke))+" ",1),e("span",f1,"/ "+at(b(Ny)),1)])]),M(b(p1))],34)],512)}}}),h1=P(m1,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/NavControls.vue"]]),Dy={render(){return[]}},Cy={render(){return[]}},_1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},g1=we({__name:"PresenterMouse",setup(n){return F(O),(s,t)=>{const o=ky;return b(br).cursor?(_(),C("div",_1,[M(o,{class:"absolute",style:Ze({left:`${b(br).cursor.x}%`,top:`${b(br).cursor.y}%`})},null,8,["style"])])):ge("v-if",!0)}}}),A1=P(g1,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),v1=we({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){F(O),ve(dn,()=>{var o,l;(o=dn.value)!=null&&o.meta&&dn.value.meta.preload!==!1&&(dn.value.meta.__preloaded=!0),(l=Tr.value)!=null&&l.meta&&Tr.value.meta.preload!==!1&&(Tr.value.meta.__preloaded=!0)},{immediate:!0});const s=ns();js(()=>import("./DrawingLayer-8379db43.js"),[]).then(o=>s.value=o.default);const t=$(()=>Xe.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===dn.value}));return(o,l)=>(_(),C(je,null,[ge(" Global Bottom "),M(b(Cy)),ge(" Slides "),M(Ph,me(b(VE),{id:"slideshow",tag:"div"}),{default:E(()=>[(_(!0),C(je,null,Nt(b(t),r=>{var i;return nr((_(),T(b(vi),{key:r.path,is:r==null?void 0:r.component,clicks:r===b(dn)?b(Pn):0,"clicks-elements":((i=r.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Ue(b(Ai)(r)),route:r,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[bd,r===b(dn)]])}),128))]),_:1},16),ge(" Global Top "),M(b(Dy)),b(s)?(_(),T(b(s),{key:0})):ge("v-if",!0),b(An)?ge("v-if",!0):(_(),T(A1,{key:1}))],64))}});const B1=P(v1,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/SlidesShow.vue"]]),k1=we({__name:"PrintStyle",setup(n){F(O);function s(t,{slots:o}){if(o.default)return fn("style",o.default())}return(t,o)=>(_(),T(s,null,{default:E(()=>[a(" @page { size: "+at(b(Ts))+"px "+at(b(ui))+"px; margin: 0px; } ",1)]),_:1}))}}),by=P(k1,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/PrintStyle.vue"]]),D1=we({__name:"Play",setup(n){F(O),z3();const s=Q();function t(r){var i;hp.value||((i=r.target)==null?void 0:i.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Os():Ps())}UE(s);const o=$(()=>t3.value||hp.value);ns();const l=ns();return js(()=>import("./DrawingControls-190ba8cc.js"),[]).then(r=>l.value=r.default),(r,i)=>(_(),C(je,null,[b(ds)?(_(),T(by,{key:0})):ge("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:Ze(b(di))},[M(vy,{class:"w-full h-full",style:Ze({background:"var(--slidev-slide-container-background, black)"}),width:b(ds)?b(rt).width.value:void 0,scale:b(hl),onPointerdown:t},{default:E(()=>[M(B1,{context:"slide"})]),controls:E(()=>[e("div",{class:Ue(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(o)?"opacity-100 right-0":"opacity-0 p-2",b(To)?"pointer-events-none":""]])},[M(h1,{class:"m-auto",persist:b(o)},null,8,["persist"])],2),!b($e).drawings.presenterOnly&&!b(as)&&b(l)?(_(),T(b(l),{key:0,class:"ml-0"})):ge("v-if",!0)]),_:1},8,["style","width","scale"]),ge("v-if",!0)],4),M(vv)],64))}}),C1=P(D1,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function wy(n){return typeof n>"u"||n===null}function b1(n){return typeof n=="object"&&n!==null}function w1(n){return Array.isArray(n)?n:wy(n)?[]:[n]}function E1(n,s){var t,o,l,r;if(s)for(r=Object.keys(s),t=0,o=r.length;t<o;t+=1)l=r[t],n[l]=s[l];return n}function x1(n,s){var t="",o;for(o=0;o<s;o+=1)t+=n;return t}function S1(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var F1=wy,$1=b1,T1=w1,j1=x1,O1=S1,P1=E1,Bi={isNothing:F1,isObject:$1,toArray:T1,repeat:j1,isNegativeZero:O1,extend:P1};function Ey(n,s){var t="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(t+='in "'+n.mark.name+'" '),t+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!s&&n.mark.snippet&&(t+=`

`+n.mark.snippet),o+" "+t):o}function Oo(n,s){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=s,this.message=Ey(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(s){return this.name+": "+Ey(this,s)};var Xs=Oo,I1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],L1=["scalar","sequence","mapping"];function N1(n){var s={};return n!==null&&Object.keys(n).forEach(function(t){n[t].forEach(function(o){s[String(o)]=t})}),s}function R1(n,s){if(s=s||{},Object.keys(s).forEach(function(t){if(I1.indexOf(t)===-1)throw new Xs('Unknown option "'+t+'" is met in definition of "'+n+'" YAML type.')}),this.options=s,this.tag=n,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(t){return t},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=N1(s.styleAliases||null),L1.indexOf(this.kind)===-1)throw new Xs('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var an=R1;function Ep(n,s){var t=[];return n[s].forEach(function(o){var l=t.length;t.forEach(function(r,i){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=i)}),t[l]=o}),t}function M1(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,t;function o(l){l.multi?(n.multi[l.kind].push(l),n.multi.fallback.push(l)):n[l.kind][l.tag]=n.fallback[l.tag]=l}for(s=0,t=arguments.length;s<t;s+=1)arguments[s].forEach(o);return n}function ba(n){return this.extend(n)}ba.prototype.extend=function(s){var t=[],o=[];if(s instanceof an)o.push(s);else if(Array.isArray(s))o=o.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(t=t.concat(s.implicit)),s.explicit&&(o=o.concat(s.explicit));else throw new Xs("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(r){if(!(r instanceof an))throw new Xs("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Xs("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Xs("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof an))throw new Xs("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(ba.prototype);return l.implicit=(this.implicit||[]).concat(t),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Ep(l,"implicit"),l.compiledExplicit=Ep(l,"explicit"),l.compiledTypeMap=M1(l.compiledImplicit,l.compiledExplicit),l};var q1=ba,G1=new an("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),H1=new an("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),V1=new an("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),U1=new q1({explicit:[G1,H1,V1]});function W1(n){if(n===null)return!0;var s=n.length;return s===1&&n==="~"||s===4&&(n==="null"||n==="Null"||n==="NULL")}function z1(){return null}function K1(n){return n===null}var Y1=new an("tag:yaml.org,2002:null",{kind:"scalar",resolve:W1,construct:z1,predicate:K1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function X1(n){if(n===null)return!1;var s=n.length;return s===4&&(n==="true"||n==="True"||n==="TRUE")||s===5&&(n==="false"||n==="False"||n==="FALSE")}function Z1(n){return n==="true"||n==="True"||n==="TRUE"}function J1(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var Q1=new an("tag:yaml.org,2002:bool",{kind:"scalar",resolve:X1,construct:Z1,predicate:J1,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function e0(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function n0(n){return 48<=n&&n<=55}function s0(n){return 48<=n&&n<=57}function t0(n){if(n===null)return!1;var s=n.length,t=0,o=!1,l;if(!s)return!1;if(l=n[t],(l==="-"||l==="+")&&(l=n[++t]),l==="0"){if(t+1===s)return!0;if(l=n[++t],l==="b"){for(t++;t<s;t++)if(l=n[t],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(t++;t<s;t++)if(l=n[t],l!=="_"){if(!e0(n.charCodeAt(t)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(t++;t<s;t++)if(l=n[t],l!=="_"){if(!n0(n.charCodeAt(t)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;t<s;t++)if(l=n[t],l!=="_"){if(!s0(n.charCodeAt(t)))return!1;o=!0}return!(!o||l==="_")}function o0(n){var s=n,t=1,o;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),o=s[0],(o==="-"||o==="+")&&(o==="-"&&(t=-1),s=s.slice(1),o=s[0]),s==="0")return 0;if(o==="0"){if(s[1]==="b")return t*parseInt(s.slice(2),2);if(s[1]==="x")return t*parseInt(s.slice(2),16);if(s[1]==="o")return t*parseInt(s.slice(2),8)}return t*parseInt(s,10)}function l0(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Bi.isNegativeZero(n)}var r0=new an("tag:yaml.org,2002:int",{kind:"scalar",resolve:t0,construct:o0,predicate:l0,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),a0=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function i0(n){return!(n===null||!a0.test(n)||n[n.length-1]==="_")}function c0(n){var s,t;return s=n.replace(/_/g,"").toLowerCase(),t=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:t*parseFloat(s,10)}var p0=/^[-+]?[0-9]+e/;function u0(n,s){var t;if(isNaN(n))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Bi.isNegativeZero(n))return"-0.0";return t=n.toString(10),p0.test(t)?t.replace("e",".e"):t}function d0(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Bi.isNegativeZero(n))}var y0=new an("tag:yaml.org,2002:float",{kind:"scalar",resolve:i0,construct:c0,predicate:d0,represent:u0,defaultStyle:"lowercase"}),f0=U1.extend({implicit:[Y1,Q1,r0,y0]}),m0=f0,xy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Sy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function h0(n){return n===null?!1:xy.exec(n)!==null||Sy.exec(n)!==null}function _0(n){var s,t,o,l,r,i,c,p=0,u=null,d,y,f;if(s=xy.exec(n),s===null&&(s=Sy.exec(n)),s===null)throw new Error("Date resolve error");if(t=+s[1],o=+s[2]-1,l=+s[3],!s[4])return new Date(Date.UTC(t,o,l));if(r=+s[4],i=+s[5],c=+s[6],s[7]){for(p=s[7].slice(0,3);p.length<3;)p+="0";p=+p}return s[9]&&(d=+s[10],y=+(s[11]||0),u=(d*60+y)*6e4,s[9]==="-"&&(u=-u)),f=new Date(Date.UTC(t,o,l,r,i,c,p)),u&&f.setTime(f.getTime()-u),f}function g0(n){return n.toISOString()}var A0=new an("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:h0,construct:_0,instanceOf:Date,represent:g0});function v0(n){return n==="<<"||n===null}var B0=new an("tag:yaml.org,2002:merge",{kind:"scalar",resolve:v0}),ki=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function k0(n){if(n===null)return!1;var s,t,o=0,l=n.length,r=ki;for(t=0;t<l;t++)if(s=r.indexOf(n.charAt(t)),!(s>64)){if(s<0)return!1;o+=6}return o%8===0}function D0(n){var s,t,o=n.replace(/[\r\n=]/g,""),l=o.length,r=ki,i=0,c=[];for(s=0;s<l;s++)s%4===0&&s&&(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)),i=i<<6|r.indexOf(o.charAt(s));return t=l%4*6,t===0?(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)):t===18?(c.push(i>>10&255),c.push(i>>2&255)):t===12&&c.push(i>>4&255),new Uint8Array(c)}function C0(n){var s="",t=0,o,l,r=n.length,i=ki;for(o=0;o<r;o++)o%3===0&&o&&(s+=i[t>>18&63],s+=i[t>>12&63],s+=i[t>>6&63],s+=i[t&63]),t=(t<<8)+n[o];return l=r%3,l===0?(s+=i[t>>18&63],s+=i[t>>12&63],s+=i[t>>6&63],s+=i[t&63]):l===2?(s+=i[t>>10&63],s+=i[t>>4&63],s+=i[t<<2&63],s+=i[64]):l===1&&(s+=i[t>>2&63],s+=i[t<<4&63],s+=i[64],s+=i[64]),s}function b0(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var w0=new an("tag:yaml.org,2002:binary",{kind:"scalar",resolve:k0,construct:D0,predicate:b0,represent:C0}),E0=Object.prototype.hasOwnProperty,x0=Object.prototype.toString;function S0(n){if(n===null)return!0;var s=[],t,o,l,r,i,c=n;for(t=0,o=c.length;t<o;t+=1){if(l=c[t],i=!1,x0.call(l)!=="[object Object]")return!1;for(r in l)if(E0.call(l,r))if(!i)i=!0;else return!1;if(!i)return!1;if(s.indexOf(r)===-1)s.push(r);else return!1}return!0}function F0(n){return n!==null?n:[]}var $0=new an("tag:yaml.org,2002:omap",{kind:"sequence",resolve:S0,construct:F0}),T0=Object.prototype.toString;function j0(n){if(n===null)return!0;var s,t,o,l,r,i=n;for(r=new Array(i.length),s=0,t=i.length;s<t;s+=1){if(o=i[s],T0.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[s]=[l[0],o[l[0]]]}return!0}function O0(n){if(n===null)return[];var s,t,o,l,r,i=n;for(r=new Array(i.length),s=0,t=i.length;s<t;s+=1)o=i[s],l=Object.keys(o),r[s]=[l[0],o[l[0]]];return r}var P0=new an("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:j0,construct:O0}),I0=Object.prototype.hasOwnProperty;function L0(n){if(n===null)return!0;var s,t=n;for(s in t)if(I0.call(t,s)&&t[s]!==null)return!1;return!0}function N0(n){return n!==null?n:{}}var R0=new an("tag:yaml.org,2002:set",{kind:"mapping",resolve:L0,construct:N0});m0.extend({implicit:[A0,B0],explicit:[w0,$0,P0,R0]});function xp(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var M0=new Array(256),q0=new Array(256);for(var vt=0;vt<256;vt++)M0[vt]=xp(vt)?1:0,q0[vt]=xp(vt);function G0(n){return Array.from(new Set(n))}function Sp(...n){let s,t,o;n.length===1?(s=0,o=1,[t]=n):[s,t,o=1]=n;const l=[];let r=s;for(;r<t;)l.push(r),r+=o||1;return l}function Fy(n,s){if(!s||s==="all"||s==="*")return Sp(1,n+1);const t=[];for(const o of s.split(/[,;]/g))if(!o.includes("-"))t.push(+o);else{const[l,r]=o.split("-",2);t.push(...Sp(+l,r?+r+1:n+1))}return G0(t).filter(o=>o<=n).sort((o,l)=>o-l)}function $y(n){const s=$(()=>n.value.path),t=$(()=>Xe.length-1),o=$(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),l=$(()=>rr(o.value)),r=$(()=>Xe.find(f=>f.path===`${o.value}`)),i=$(()=>{var f,h,m;return(m=(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),c=$(()=>{var f,h;return((h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),p=$(()=>Xe.find(f=>f.path===`${Math.min(Xe.length,o.value+1)}`)),u=$(()=>Xe.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(Ci(f,h),f),[])),d=$(()=>bi(u.value,r.value)),y=$(()=>wi(d.value));return{route:n,path:s,total:t,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:i,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:y}}function Ty(n,s,t){const o=Q(0);tn(()=>{Bn.afterEach(async()=>{await tn(),o.value+=1})});const l=$(()=>{var p,u;return o.value,((u=(p=s.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=$(()=>{var p,u;return+(((u=(p=s.value)==null?void 0:p.meta)==null?void 0:u.clicks)??l.value.length)}),i=$(()=>t.value<Xe.length-1||n.value<r.value),c=$(()=>t.value>1||n.value>0);return{clicks:n,clicksElements:l,clicksTotal:r,hasNext:i,hasPrev:c}}const H0=["id"],V0=we({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:s}){const t=n,o=Jn(t,"clicksElements",s),l=$(()=>({height:`${ui}px`,width:`${Ts}px`})),r=ns();js(()=>Promise.resolve().then(()=>sv),void 0).then(u=>r.value=u.default);const i=$(()=>t.clicks),c=Ty(i,t.nav.currentRoute,t.nav.currentPage),p=$(()=>`${t.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return En(O,Ve({nav:{...t.nav,...c},configs:$e,themeConfigs:$(()=>$e.themeConfig)})),(u,d)=>{var y;return _(),C("div",{id:b(p),class:"print-slide-container",style:Ze(b(l))},[M(b(Cy)),M(b(vi),{is:(y=n.route)==null?void 0:y.component,"clicks-elements":b(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Te(o)?o.value=f:null),clicks:b(i),"clicks-disabled":!1,class:Ue(b(Ai)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),b(r)?(_(),T(b(r),{key:0,page:+n.route.path},null,8,["page"])):ge("v-if",!0),M(b(Dy))],12,H0)}}}),Fp=P(V0,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),U0=we({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var r;const s=n;F(O);const t=Ve(((r=s.route.meta)==null?void 0:r.__clicksElements)||[]),o=$(()=>s.route),l=$y(o);return(i,c)=>(_(),C(je,null,[M(Fp,{"clicks-elements":t,"onUpdate:clicksElements":c[0]||(c[0]=p=>t=p),clicks:0,nav:b(l),route:b(o)},null,8,["clicks-elements","nav","route"]),b(ho)?ge("v-if",!0):(_(!0),C(je,{key:0},Nt(t.length,p=>(_(),T(Fp,{key:p,clicks:p,nav:b(l),route:b(o)},null,8,["clicks","nav","route"]))),128))],64))}}),W0=P(U0,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/PrintSlide.vue"]]),z0={id:"print-content"},K0=we({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const s=n;F(O);const t=$(()=>s.width),o=$(()=>s.width/$s),l=$(()=>t.value/o.value),r=$(()=>l.value<$s?t.value/Ts:o.value*$s/Ts);let i=Xe.slice(0,-1);Ln.value.query.range&&(i=Fy(i.length,Ln.value.query.range).map(u=>i[u-1]));const c=$(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return En(Pd,r),(p,u)=>(_(),C("div",{id:"print-container",class:Ue(b(c))},[e("div",z0,[(_(!0),C(je,null,Nt(b(i),d=>(_(),T(W0,{key:d.path,route:d},null,8,["route"]))),128))]),hn(p.$slots,"controls")],2))}});const Y0=P(K0,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/PrintContainer.vue"]]),X0=we({__name:"Print",setup(n){return F(O),dt(()=>{ds?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,t)=>(_(),C(je,null,[b(ds)?(_(),T(by,{key:0})):ge("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ze(b(di))},[M(Y0,{class:"w-full h-full",style:Ze({background:"var(--slidev-slide-container-background, black)"}),width:b(rt).width.value},null,8,["style","width"])],4)],64))}});const Z0=P(X0,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/internals/Print.vue"]]);const J0={class:"slidev-layout end"},Q0={__name:"end",setup(n){return F(O),(s,t)=>(_(),C("div",J0," END "))}},e9=P(Q0,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/layouts/end.vue"]]);function $p(n){return n.startsWith("/")?"/admin-panel-revolution-for-your-symfony-projects/"+n.slice(1):n}function n9(n,s=!1){const t=n&&["#","rgb","hsl"].some(l=>n.indexOf(l)===0),o={background:t?n:void 0,color:n&&!t?"white":void 0,backgroundImage:t?void 0:n?s?`linear-gradient(#0005, #0008), url(${$p(n)})`:`url("${$p(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const s9={class:"my-auto w-full"},t9=we({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(n){const s=n;F(O);const t=$(()=>n9(s.background,!0));return(o,l)=>(_(),C("div",{class:"slidev-layout cover text-center",style:Ze(b(t))},[e("div",s9,[hn(o.$slots,"default")])],4))}}),jy=P(t9,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),o9=e("h1",null,"Admin panel (R)evolution for your Symfony projects",-1),l9=e("p",null,"with Symfony UX and Sylius stack",-1),r9=e("div",{align:"center"},[e("img",{class:"w-75",align:"center",src:"https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg"})],-1),a9=e("div",{align:"center"},[e("img",{class:"w-75",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPIHpPwcT2rG_eIrbJ9e9VWXkPP7U_oHTPw&s"})],-1),i9={__name:"1",setup(n){const s={theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss"};return F(O),(t,o)=>(_(),T(jy,W(U(s)),{default:E(()=>[o9,l9,r9,a9]),_:1},16))}},c9=P(i9,[["__file","/@slidev/slides/1.md"]]);function Tp(n){return n.startsWith("/")?"/admin-panel-revolution-for-your-symfony-projects/"+n.slice(1):n}function Oy(n,s=!1){const t=n&&(n[0]==="#"||n.startsWith("rgb")),o={background:t?n:void 0,color:n&&!t?"white":void 0,backgroundImage:t?void 0:n?s?`linear-gradient(#0005, #0008), url(${Tp(n)})`:`url("${Tp(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const p9={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},u9=we({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(n){const s=n;F(O);const t=$(()=>Oy(s.image));return(o,l)=>(_(),C("div",p9,[e("div",{class:Ue(["slidev-layout default",s.class])},[hn(o.$slots,"default")],2),e("div",{class:"w-full w-full",style:Ze(b(t))},null,4)]))}}),zo=P(u9,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/layouts/image-right.vue"]]),d9=e("h1",null,"Loïc Frémont",-1),y9=e("ul",null,[e("li",null,"Technical Expert @Akawaka"),e("li",null,"Core Team Member @Sylius"),e("li",null,"Monofony creator")],-1),f9={__name:"2",setup(n){const s={layout:"image-right",image:"/akawaka.png",hideInToc:!0,srcSequence:"./pages/01_index.md"};return F(O),(t,o)=>(_(),T(zo,W(U(s)),{default:E(()=>[d9,y9]),_:1},16))}},m9=P(f9,[["__file","/@slidev/slides/2.md"]]),h9=["href","innerHTML"],_9=["href"],g9=we({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(n){return F(O),(s,t)=>{const o=Ot("RouterLink");return!b(ds)&&n.title?(_(),T(o,{key:0,to:String(n.to),onClick:t[0]||(t[0]=l=>l.target.blur()),innerHTML:n.title},null,8,["to","innerHTML"])):!b(ds)&&!n.title?(_(),T(o,{key:1,to:String(n.to),onClick:t[1]||(t[1]=l=>l.target.blur())},{default:E(()=>[hn(s.$slots,"default")]),_:3},8,["to"])):b(ds)&&n.title?(_(),C("a",{key:2,href:`#${n.to}`,innerHTML:n.title},null,8,h9)):(_(),C("a",{key:3,href:`#${n.to}`},[hn(s.$slots,"default")],8,_9))}}}),A9=P(g9,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/builtin/Link.vue"]]),v9={key:0},B9={key:1},k9={key:2},D9={key:3},C9={key:4},b9={key:5},w9={key:6},E9={key:7},x9={key:8},S9={key:9},F9={key:10},$9={key:11},T9={key:12},j9={key:13},O9={key:14},P9={key:15},I9={key:16},L9={key:17},N9={key:18},R9={key:19},M9={key:20},q9={key:21},G9={key:22},H9={key:23},V9={key:24},U9={key:25},W9={key:26},z9={key:27},K9={key:28},Y9={key:29},X9={key:30},Z9={key:31},J9={key:32},Q9={key:33},ek={key:34},nk={key:35},sk={key:36},tk={key:37},ok={key:38},lk={key:39},rk={key:40},ak={key:41},ik={key:42},ck={key:43},pk={key:44},uk={key:45},dk={key:46},yk={key:47},fk={key:48},mk={key:49},hk={key:50},_k={key:51},gk={key:52},Ak={key:53},vk={key:54},Bk={key:55},kk={key:56},Dk={key:57},Ck={key:58},bk={key:59},wk={key:60},Ek={key:61},xk={key:62},Sk={key:63},Fk={key:64},$k={key:65},Tk={key:66},jk={key:67},Ok={key:68},Pk={key:69},Ik={key:70},Lk={key:71},Nk={key:72},Rk={key:73},Mk={key:74},qk={key:75},Gk={key:76},Hk={key:77},Vk={key:78},Uk={key:79},Wk={key:80},zk={key:81},Kk={key:82},Yk={key:83},Xk={key:84},Zk={key:85},Jk={key:86},Qk={key:87},eD=we({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(n){return(s,t)=>(_(),C("div",null,[+n.no==1?(_(),C("p",v9,"Admin panel (R)evolution for your Symfony projects")):+n.no==2?(_(),C("p",B9,"Loïc Frémont")):+n.no==3?(_(),C("p",k9,"undefined")):+n.no==4?(_(),C("p",D9,"Akawaka")):+n.no==5?(_(),C("p",C9,"Sylius technical history")):+n.no==6?(_(),C("p",b9,"undefined")):+n.no==7?(_(),C("p",w9,"undefined")):+n.no==8?(_(),C("p",E9,"undefined")):+n.no==9?(_(),C("p",x9,"undefined")):+n.no==10?(_(),C("p",S9,"undefined")):+n.no==11?(_(),C("p",F9,"undefined")):+n.no==12?(_(),C("p",$9,"undefined")):+n.no==13?(_(),C("p",T9,"undefined")):+n.no==14?(_(),C("p",j9,"undefined")):+n.no==15?(_(),C("p",O9,"undefined")):+n.no==16?(_(),C("p",P9,"Benefits & Drawbacks of Monofony")):+n.no==17?(_(),C("p",I9,"Installation")):+n.no==18?(_(),C("p",L9,"undefined")):+n.no==19?(_(),C("p",N9,"undefined")):+n.no==20?(_(),C("p",R9,"Drawbacks")):+n.no==21?(_(),C("p",M9,"Sylius {Stack} - Nowadays")):+n.no==22?(_(),C("p",q9,"Admin UI")):+n.no==23?(_(),C("p",G9,"undefined")):+n.no==24?(_(),C("p",H9,"undefined")):+n.no==25?(_(),C("p",V9,"undefined")):+n.no==26?(_(),C("p",U9,"undefined")):+n.no==27?(_(),C("p",W9,"undefined")):+n.no==28?(_(),C("p",z9,"undefined")):+n.no==29?(_(),C("p",K9,"undefined")):+n.no==30?(_(),C("p",Y9,"undefined")):+n.no==31?(_(),C("p",X9,"undefined")):+n.no==32?(_(),C("p",Z9,"undefined")):+n.no==33?(_(),C("p",J9,"Hook 'index'")):+n.no==34?(_(),C("p",Q9,"undefined")):+n.no==35?(_(),C("p",ek,"Hook 'header'")):+n.no==36?(_(),C("p",nk,"config/packages/twig_hooks.yaml")):+n.no==37?(_(),C("p",sk,"undefined")):+n.no==38?(_(),C("p",tk,"undefined")):+n.no==39?(_(),C("p",ok,"config/packages/twig_hooks.yaml")):+n.no==40?(_(),C("p",lk,"undefined")):+n.no==41?(_(),C("p",rk,"undefined")):+n.no==42?(_(),C("p",ak,"undefined")):+n.no==43?(_(),C("p",ik,"Real use case")):+n.no==44?(_(),C("p",ck,"undefined")):+n.no==45?(_(),C("p",pk,"undefined")):+n.no==46?(_(),C("p",uk,"undefined")):+n.no==47?(_(),C("p",dk,"undefined")):+n.no==48?(_(),C("p",yk,"undefined")):+n.no==49?(_(),C("p",fk,"undefined")):+n.no==50?(_(),C("p",mk,"undefined")):+n.no==51?(_(),C("p",hk,"undefined")):+n.no==52?(_(),C("p",_k,"undefined")):+n.no==53?(_(),C("p",gk,"undefined")):+n.no==54?(_(),C("p",Ak,"undefined")):+n.no==55?(_(),C("p",vk,"undefined")):+n.no==56?(_(),C("p",Bk,"undefined")):+n.no==57?(_(),C("p",kk,"undefined")):+n.no==58?(_(),C("p",Dk,"undefined")):+n.no==59?(_(),C("p",Ck,"undefined")):+n.no==60?(_(),C("p",bk,"undefined")):+n.no==61?(_(),C("p",wk,"undefined")):+n.no==62?(_(),C("p",Ek,"undefined")):+n.no==63?(_(),C("p",xk,"undefined")):+n.no==64?(_(),C("p",Sk,"undefined")):+n.no==65?(_(),C("p",Fk,"undefined")):+n.no==66?(_(),C("p",$k,"undefined")):+n.no==67?(_(),C("p",Tk,"undefined")):+n.no==68?(_(),C("p",jk,"Going further with Symfony UX")):+n.no==69?(_(),C("p",Ok,"undefined")):+n.no==70?(_(),C("p",Pk,"undefined")):+n.no==71?(_(),C("p",Ik,"undefined")):+n.no==72?(_(),C("p",Lk,"undefined")):+n.no==73?(_(),C("p",Nk,"undefined")):+n.no==74?(_(),C("p",Rk,"undefined")):+n.no==75?(_(),C("p",Mk,"undefined")):+n.no==76?(_(),C("p",qk,"undefined")):+n.no==77?(_(),C("p",Gk,"config/packages/twig_hooks.yaml")):+n.no==78?(_(),C("p",Hk,"undefined")):+n.no==79?(_(),C("p",Vk,"undefined")):+n.no==80?(_(),C("p",Uk,"undefined")):+n.no==81?(_(),C("p",Wk,"undefined")):+n.no==82?(_(),C("p",zk,"undefined")):+n.no==83?(_(),C("p",Kk,"undefined")):+n.no==84?(_(),C("p",Yk,"TODO")):+n.no==85?(_(),C("p",Xk,"Install It")):+n.no==86?(_(),C("p",Zk,"undefined")):+n.no==87?(_(),C("p",Jk,"undefined")):+n.no==88?(_(),C("p",Qk,"undefined")):ge("v-if",!0)]))}}),nD=P(eD,[["__file","/@slidev/titles.md"]]),sD=we({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(n){const s=n;F(O);const t=$(()=>[...Id(s.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${s.level}`]);return(o,l)=>{const r=A9,i=Ot("TocList",!0);return n.list&&n.list.length>0?(_(),C("ol",{key:0,class:Ue(b(t))},[(_(!0),C(je,null,Nt(n.list,c=>(_(),C("li",{key:c.path,class:Ue(["slidev-toc-item",[{"slidev-toc-item-active":c.active},{"slidev-toc-item-parent-active":c.activeParent}]])},[M(r,{to:c.path},{default:E(()=>[M(b(nD),{no:c.path},null,8,["no"])]),_:2},1032,["to"]),c.children.length>0?(_(),T(i,{key:0,level:n.level+1,list:c.children,"list-class":n.listClass},null,8,["level","list","list-class"])):ge("v-if",!0)],2))),128))],2)):ge("v-if",!0)}}});const tD=P(sD,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/builtin/TocList.vue"]]),oD=we({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(n){const s=n,t=F(O);function o(c,p=1){if(p>Number(s.maxDepth))return[];if(p<Number(s.minDepth)){const u=c.find(d=>d.active||d.activeParent);return u?o(u.children,p+1):[]}return c.map(u=>({...u,children:o(u.children,p+1)}))}function l(c){return c.filter(p=>p.active||p.activeParent||p.hasActiveParent).map(p=>({...p,children:l(p.children)}))}function r(c){const p=c.some(u=>u.active||u.activeParent||u.hasActiveParent);return c.filter(()=>p).map(u=>({...u,children:r(u.children)}))}const i=$(()=>{const c=t==null?void 0:t.nav.tree;if(!c)return[];let p=o(c);return s.mode==="onlyCurrentTree"?p=l(p):s.mode==="onlySiblings"&&(p=r(p)),p});return(c,p)=>{const u=tD;return _(),C("div",{class:"slidev-toc",style:Ze(`column-count:${n.columns}`)},[M(u,{level:1,list:b(i),"list-class":n.listClass},null,8,["list","list-class"])],4)}}}),lD=P(oD,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/builtin/Toc.vue"]]),rD={class:"slidev-layout default"},aD={__name:"default",setup(n){return F(O),(s,t)=>(_(),C("div",rD,[hn(s.$slots,"default")]))}},se=P(aD,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/layouts/default.vue"]]),iD={__name:"3",setup(n){const s={class:"w-sm",srcSequence:"./pages/01_index.md"};return F(O),(t,o)=>{const l=lD;return _(),T(se,W(U(s)),{default:E(()=>[M(l,{maxDepth:"1"})]),_:1},16)}}},cD=P(iD,[["__file","/@slidev/slides/3.md"]]),Mt=we({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,i;const n=nc("click"),s=nc("after"),t=(c,p,u)=>nr(c,[[p,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let o=(i=(r=this.$slots).default)==null?void 0:i.call(r);if(!o)return;o=Id(o);const l=c=>c.map((p,u)=>ms(p)?t(fn(p),u%this.every===0?n:s,Math.floor(u/this.every)):p);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?fn(o[0],{},[l(o[0].children)]):l(o)}}),pD=e("h1",null,"Akawaka",-1),uD=e("h2",null,"Experts for your web projects & Sylius partner",-1),dD=e("p",null,"We help you design and improve your projects:",-1),yD=e("ul",null,[e("li",null,[e("p",null,"We use clean architecture techniques via DDD methodologies for projects that stand the test of time,")]),e("li",null,[e("p",null,"A true quality approach through testing,")]),e("li",null,[e("p",null,"On a contract or fixed-price basis, to create and/or integrate teams and work in complete collaboration.")])],-1),fD={__name:"4",setup(n){const s={layout:"image-right",image:"/akawaka.png",srcSequence:"./pages/02_akawaka.md"};return F(O),(t,o)=>{const l=Mt;return _(),T(zo,W(U(s)),{default:E(()=>[pD,uD,dD,M(l,null,{default:E(()=>[yD]),_:1})]),_:1},16)}}},mD=P(fD,[["__file","/@slidev/slides/4.md"]]),hD="/admin-panel-revolution-for-your-symfony-projects/bootstrap2-users.jpeg",_D=e("h1",null,"Sylius technical history",-1),gD=e("p",null,"Back in 2013 - Before Bootstrap 3 migration",-1),AD=e("img",{class:"w-200",src:hD},null,-1),vD={__name:"5",setup(n){const s={srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[_D,gD,ge(" https://github.com/Sylius/Sylius/pull/368 "),AD]),_:1},16))}},BD=P(vD,[["__file","/@slidev/slides/5.md"]]),kD="/admin-panel-revolution-for-your-symfony-projects/bootstrap3-users.jpeg",DD=e("p",null,"Back in 2013 - After Bootstrap 3 migration",-1),CD=e("img",{class:"w-200",src:kD},null,-1),bD={__name:"6",setup(n){const s={srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[DD,ge(" https://github.com/Sylius/Sylius/pull/368 "),CD]),_:1},16))}},wD=P(bD,[["__file","/@slidev/slides/6.md"]]),ED="/admin-panel-revolution-for-your-symfony-projects/new_grids.png",xD=e("p",null,"Back in 2016 - Grids",-1),SD=e("img",{class:"w-150",src:ED},null,-1),FD={__name:"7",setup(n){const s={srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[xD,SD]),_:1},16))}},$D=P(FD,[["__file","/@slidev/slides/7.md"]]),TD={class:"slidev-layout quote"},jD={class:"my-auto"},OD={__name:"quote",setup(n){return F(O),(s,t)=>(_(),C("div",TD,[e("div",jD,[hn(s.$slots,"default")])]))}},Di=P(OD,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/theme-seriph/layouts/quote.vue"]]),PD=e("p",null,"Paweł Jędrzejewski wrote",-1),ID=e("ul",null,[e("li",null,"Standalone Grid component, decoupled from persistence with a system of drivers."),e("li",null,"Standalone SyliusGridBundle, decoupled from SyliusResourceBundle."),e("li",null,"SyliusResourceBundle does not force you to use GridBundle."),e("li",null,"Doctrine ORM and Doctrine DBAL drivers for SyliusGridBundle, later I plan to have ElasticSearchDriver."),e("li",null,"Super easy to introduce new drivers, filters, columns and customize rendering of every single part;")],-1),LD={__name:"8",setup(n){const s={layout:"quote",srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>{const l=Mt;return _(),T(Di,W(U(s)),{default:E(()=>[PD,M(l,null,{default:E(()=>[ID]),_:1})]),_:1},16)}}},ND=P(LD,[["__file","/@slidev/slides/8.md"]]),RD=e("p",null,"1 month later…",-1),MD={__name:"9",setup(n){const s={layout:"cover",srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(jy,W(U(s)),{default:E(()=>[RD]),_:1},16))}},qD=P(MD,[["__file","/@slidev/slides/9.md"]]),GD="/admin-panel-revolution-for-your-symfony-projects/generic_templates.png",HD=e("p",null,"Back in 2016 - Semantic UI & Generic templates",-1),VD=e("img",{class:"w-150",src:GD},null,-1),UD={__name:"10",setup(n){const s={srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[HD,VD]),_:1},16))}},WD=P(UD,[["__file","/@slidev/slides/10.md"]]),zD=e("p",null,"Paweł Jędrzejewski wrote",-1),KD=e("p",null,[a("I started preparing generic "),e("strong",null,"CRUD templates with AdminLTE"),a(" and it is far from perfect. The css/html is not that nice and "),e("strong",null,"Bootstrap is getting slowly out-dated"),a(". I discovered "),e("a",{href:"http://semantic-ui.com/",target:"_blank",rel:"noopener"},"http://semantic-ui.com/"),a(", which provides tons of components out of the box that we can find useful both for admin and shop interface. Just have a look around the docs. Also it is actually much easier to learn. "),e("strong",null,"These components give us a lot of power both for Sylius itself as well as for customizing the admin/shop"),a(".")],-1),YD={__name:"11",setup(n){const s={layout:"quote",srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(Di,W(U(s)),{default:E(()=>[zD,KD]),_:1},16))}},XD=P(YD,[["__file","/@slidev/slides/11.md"]]),ZD={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},JD=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),QD=[JD];function eC(n,s){return _(),C("svg",ZD,QD)}const nC={name:"ph-clipboard",render:eC},sC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},tC=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),oC=[tC];function lC(n,s){return _(),C("svg",sC,oC)}const rC={name:"ph-check-circle",render:lC},aC=["title"],iC=we({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const s=n;F(O);const t=F(po),o=F(Ys),l=F(uo);function r(y=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let A=0;A<y;A++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const i=Q(),c=$n();yt(()=>{const y=s.at==null?o==null?void 0:o.value.length:s.at,f=$(()=>l!=null&&l.value?s.ranges.length-1:Math.min(Math.max(0,((t==null?void 0:t.value)||0)-(y||0)),s.ranges.length-1)),h=$(()=>s.ranges[f.value]||"");if(s.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),A=q_(s.ranges.length-1).map(v=>m+v);o!=null&&o.value&&(o.value.push(...A),er(()=>A.forEach(v=>ca(o.value,v)),c))}dt(()=>{if(!i.value)return;const A=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const v of A){const w=Array.from(v.querySelectorAll(".line")),k=Fy(w.length,h.value);if(w.forEach((D,x)=>{const L=k.includes(x+1);D.classList.toggle(zs,!0),D.classList.toggle("highlighted",L),D.classList.toggle("dishonored",!L)}),s.maxHeight){const D=v.querySelector(".line.highlighted");D&&D.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=H5();function d(){var f,h;const y=(h=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;y&&u(y)}return(y,f)=>{const h=rC,m=nC;return _(),C("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:Ze({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[hn(y.$slots,"default"),b($e).codeCopy?(_(),C("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:b(p)?"Copied":"Copy",onClick:f[0]||(f[0]=A=>d())},[b(p)?(_(),T(h,{key:0,class:"p-2 w-8 h-8"})):(_(),T(m,{key:1,class:"p-2 w-8 h-8"}))],8,aC)):ge("v-if",!0)],4)}}}),Pe=P(iC,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),cC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'SyliusAdminBundle::layout.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'SyliusUiBundle:Macro:headers.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"headers"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}},".applicationName~"),e("span",{style:{color:"#C98A7D"}},"'.ui.new_'"),e("span",{style:{color:"#DBD7CA"}},"~metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans "),e("span",{style:{color:"#858585"}},"}}{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"form_theme"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'SyliusUiBundle:Form:theme.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," headers"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans, "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"icon"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'plus'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"subheader"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," form_start"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"'action'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," path"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"getRouteName"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'create'"),e("span",{style:{color:"#858585"}},")),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'attr'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"'class'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'ui form'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'novalidate'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'novalidate'"),e("span",{style:{color:"#858585"}},"}})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"ui segment"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"templates"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"is"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"defined"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"templates"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," form_widget"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endif"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'SyliusUiBundle:Form:_create.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," form_end"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'SyliusAdminBundle::layout.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'SyliusUiBundle:Macro:headers.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"headers"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}},".applicationName~"),e("span",{style:{color:"#B56959"}},"'.ui.new_'"),e("span",{style:{color:"#393A34"}},"~metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"title"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans "),e("span",{style:{color:"#8E8F8B"}},"}}{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"form_theme"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'SyliusUiBundle:Form:theme.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"content"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," headers"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans, "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"icon"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'plus'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"subheader"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," form_start"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"'action'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," path"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'create'"),e("span",{style:{color:"#8E8F8B"}},")),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'attr'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"'class'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'ui form'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'novalidate'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'novalidate'"),e("span",{style:{color:"#8E8F8B"}},"}})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"ui segment"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"templates"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"is"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"defined"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"templates"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," form_widget"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endif"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'SyliusUiBundle:Form:_create.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," form_end"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")])])])],-1),pC={__name:"12",setup(n){const s={srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[M(l,me({},{ranges:["all","2","4-5","10-11","13-22","15-16","17-18"]}),{default:E(()=>[cC]),_:1},16)]),_:1},16)}}},uC=P(pC,[["__file","/@slidev/slides/12.md"]]),dC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'SyliusAdminBundle::layout.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"templates"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"list"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"list"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- ... -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}},".applicationName~"),e("span",{style:{color:"#C98A7D"}},"'.ui.'"),e("span",{style:{color:"#DBD7CA"}},"~metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"pluralName"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans "),e("span",{style:{color:"#858585"}},"}}{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"ui stackable two column grid"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"column"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," headers"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans, "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"icon"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"subheader"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"middle aligned column"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"ui right floated buttons"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," buttons"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"path"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"getRouteName"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'create'"),e("span",{style:{color:"#858585"}},")))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"ui segment"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," pagination"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"render"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"resources"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," list"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"full"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"resources"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," pagination"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"render"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"resources"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"div"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'SyliusAdminBundle::layout.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"templates"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"list"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"list"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- ... -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}},".applicationName~"),e("span",{style:{color:"#B56959"}},"'.ui.'"),e("span",{style:{color:"#393A34"}},"~metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"pluralName"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"title"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans "),e("span",{style:{color:"#8E8F8B"}},"}}{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"content"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"ui stackable two column grid"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"column"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," headers"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans, "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"icon"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"subheader"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"middle aligned column"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"ui right floated buttons"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," buttons"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"path"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"getRouteName"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'create'"),e("span",{style:{color:"#8E8F8B"}},")))"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"ui segment"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," pagination"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"render"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"resources"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," list"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"full"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"resources"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," pagination"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"render"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"resources"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"div"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")])])])],-1),yC={__name:"13",setup(n){const s={srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[M(l,me({},{ranges:["all","2","6","10-19","21-25"]}),{default:E(()=>[dC]),_:1},16)]),_:1},16)}}},fC=P(yC,[["__file","/@slidev/slides/13.md"]]),mC="/admin-panel-revolution-for-your-symfony-projects/template_events.png",hC=e("p",null,"Back in 2019 - Templates events",-1),_C=e("img",{class:"w-150",src:mC},null,-1),gC={__name:"14",setup(n){const s={srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[hC,_C]),_:1},16))}},AC=P(gC,[["__file","/@slidev/slides/14.md"]]),vC=e("p",null,"Kamil Kokot wrote",-1),BC=e("p",null,[a("This PR aims to "),e("strong",null,"replace our current template events system using Sonata Block bundle"),a(" and improve both the "),e("strong",null,"developer experience"),a(" using it and "),e("strong",null,"Sylius extendability"),a(", especially in the light of "),e("strong",null,"Sylius Store"),a(" which has been recently opened.")],-1),kC={__name:"15",setup(n){const s={layout:"quote",srcSequence:"./pages/03_history.md"};return F(O),(t,o)=>(_(),T(Di,W(U(s)),{default:E(()=>[vC,BC]),_:1},16))}},DC=P(kC,[["__file","/@slidev/slides/15.md"]]),CC=e("h1",null,"Benefits & Drawbacks of Monofony",-1),bC=e("h2",null,"Benefits",-1),wC=e("ul",null,[e("li",null,"Bootstrapping a modern application on top of Symfony"),e("li",null,"Leveraging Sylius bundles and components"),e("li",null,"Helping you to focus more on what truly matters to your use-case")],-1),EC={__name:"16",setup(n){const s={layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",srcSequence:"./pages/04_monofony.md"};return F(O),(t,o)=>{const l=Mt;return _(),T(zo,W(U(s)),{default:E(()=>[CC,M(l,null,{default:E(()=>[bC]),_:1}),M(l,null,{default:E(()=>[wC]),_:1})]),_:1},16)}}},xC=P(EC,[["__file","/@slidev/slides/16.md"]]),SC=e("h1",null,"Installation",-1),FC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"composer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"create-project"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"monofony/skeleton"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"project_name")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"composer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"create-project"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"monofony/skeleton"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"project_name")])])])],-1),$C=e("p",null,"You can also add some basic endpoints with optional api-pack",-1),TC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"composer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"require"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"monofony/api-pack")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"composer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"require"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"monofony/api-pack")])])])],-1),jC={__name:"17",setup(n){const s={hideInToc:!0,srcSequence:"./pages/04_monofony.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[SC,M(l,me({},{ranges:[""]}),{default:E(()=>[FC]),_:1},16),$C,M(l,me({},{ranges:[""]}),{default:E(()=>[TC]),_:1},16)]),_:1},16)}}},OC=P(jC,[["__file","/@slidev/slides/17.md"]]),PC=we({__name:"image",props:{image:{type:String}},setup(n){const s=n;F(O);const t=$(()=>Oy(s.image));return(o,l)=>(_(),C("div",{class:"slidev-layout w-full h-full",style:Ze(b(t))},[hn(o.$slots,"default")],4))}}),Py=P(PC,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/layouts/image.vue"]]),IC={__name:"18",setup(n){const s={layout:"image",image:"/dashboard.png",transition:"fade",srcSequence:"./pages/04_monofony.md"};return F(O),(t,o)=>(_(),T(Py,W(U(s)),null,16))}},LC=P(IC,[["__file","/@slidev/slides/18.md"]]),NC={__name:"19",setup(n){const s={layout:"image",image:"/administrators.png",srcSequence:"./pages/04_monofony.md"};return F(O),(t,o)=>(_(),T(Py,W(U(s)),null,16))}},RC=P(NC,[["__file","/@slidev/slides/19.md"]]),MC=e("h2",null,"Drawbacks",-1),qC=e("ul",null,[e("li",null,"Hard to setup on existing applications"),e("li",null,"Depends on some Sylius packages from E-commerce repository"),e("li",null,"Lot of codes are copied into your application with Flex")],-1),GC={__name:"20",setup(n){const s={layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",srcSequence:"./pages/04_monofony.md"};return F(O),(t,o)=>{const l=Mt;return _(),T(zo,W(U(s)),{default:E(()=>[MC,M(l,null,{default:E(()=>[qC]),_:1})]),_:1},16)}}},HC=P(GC,[["__file","/@slidev/slides/20.md"]]),VC={class:"slidev-layout center h-full grid place-content-center"},UC={class:"my-auto"},WC={__name:"center",setup(n){return F(O),(s,t)=>(_(),C("div",VC,[e("div",UC,[hn(s.$slots,"default")])]))}},qt=P(WC,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/layouts/center.vue"]]),zC=e("div",{align:"center"},[e("h1",null,"Sylius {Stack} - Nowadays"),e("p",null,"To The Rescue"),e("img",{align:"center",src:"https://i.giphy.com/6IanN6Nqj0JFK.webp"})],-1),KC={__name:"21",setup(n){const s={layout:"center",srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(qt,W(U(s)),{default:E(()=>[zC]),_:1},16))}},YC=P(KC,[["__file","/@slidev/slides/21.md"]]),XC="/admin-panel-revolution-for-your-symfony-projects/admin_ui_grids.png",ZC=e("h2",null,"Admin UI",-1),JC=e("img",{src:XC},null,-1),QC={__name:"22",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[ZC,JC]),_:1},16))}},eb=P(QC,[["__file","/@slidev/slides/22.md"]]),nb="/admin-panel-revolution-for-your-symfony-projects/admin_ui_search.png",sb=e("p",null,"Searching menu items in sidebar",-1),tb=e("img",{src:nb},null,-1),ob={__name:"23",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[sb,tb]),_:1},16))}},lb=P(ob,[["__file","/@slidev/slides/23.md"]]),rb="/admin-panel-revolution-for-your-symfony-projects/admin_ui_filters.png",ab=e("p",null,"Filtering grid data",-1),ib=e("img",{src:rb},null,-1),cb={__name:"24",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[ab,ib]),_:1},16))}},pb=P(cb,[["__file","/@slidev/slides/24.md"]]),ub="/admin-panel-revolution-for-your-symfony-projects/admin_ui_delete.png",db=e("p",null,"Deleting grid item",-1),yb=e("img",{src:ub},null,-1),fb={__name:"25",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[db,yb]),_:1},16))}},mb=P(fb,[["__file","/@slidev/slides/25.md"]]),hb="/admin-panel-revolution-for-your-symfony-projects/admin_ui_bulk_delete.png",_b=e("p",null,"Deleting multiple grid items",-1),gb=e("img",{src:hb},null,-1),Ab={__name:"26",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[_b,gb]),_:1},16))}},vb=P(Ab,[["__file","/@slidev/slides/26.md"]]),Bb="/admin-panel-revolution-for-your-symfony-projects/admin_ui_sorting.png",kb=e("p",null,"Sorting grid data",-1),Db=e("img",{src:Bb},null,-1),Cb={__name:"27",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[kb,Db]),_:1},16))}},bb=P(Cb,[["__file","/@slidev/slides/27.md"]]),wb="/admin-panel-revolution-for-your-symfony-projects/admin_ui_pagination.png",Eb=e("p",null,"Paginating grid data",-1),xb=e("img",{src:wb},null,-1),Sb={__name:"28",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Eb,xb]),_:1},16))}},Fb=P(Sb,[["__file","/@slidev/slides/28.md"]]),$b="/admin-panel-revolution-for-your-symfony-projects/admin_ui_create.png",Tb=e("p",null,"Creating new item",-1),jb=e("img",{src:$b},null,-1),Ob={__name:"29",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Tb,jb]),_:1},16))}},Pb=P(Ob,[["__file","/@slidev/slides/29.md"]]),Ib="/admin-panel-revolution-for-your-symfony-projects/admin_ui_update.png",Lb=e("p",null,"Editing existing item",-1),Nb=e("img",{src:Ib},null,-1),Rb={__name:"30",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Lb,Nb]),_:1},16))}},Mb=P(Rb,[["__file","/@slidev/slides/30.md"]]),qb=e("p",null,"Configure your resource",-1),Gb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Entity"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Grid"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookGrid"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Repository"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Component"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Model"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"ResourceInterface"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Resource"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Metadata"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"pluralName"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'library'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"operations"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BookGrid"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Grid"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookGrid"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Repository"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Component"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Model"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"ResourceInterface"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Resource"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Metadata"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"pluralName"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'library'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"operations"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BookGrid"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Hb={__name:"31",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[qb,M(l,me({},{ranges:["all","10","12","13","15-21"]}),{default:E(()=>[Gb]),_:1},16)]),_:1},16)}}},Vb=P(Hb,[["__file","/@slidev/slides/31.md"]]),Ub=e("p",null,"Generic index template",-1),Wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/base.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource_metadata"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.%resource_name%'"),e("span",{style:{color:"#DBD7CA"}},"|"),e("span",{style:{color:"#E0A569"}},"replace"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#C98A7D"}},"'%resource_name%'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource_name"),e("span",{style:{color:"#DBD7CA"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")}),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.common'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}},".applicationName~"),e("span",{style:{color:"#C98A7D"}},"'.ui.'"),e("span",{style:{color:"#DBD7CA"}},"~metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"pluralName"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans "),e("span",{style:{color:"#858585"}},"}}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'index'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resources"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"stylesheets"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'index#stylesheets'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"javascripts"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'index#javascripts'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/base.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource_metadata"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'sylius_admin.%resource_name%'"),e("span",{style:{color:"#393A34"}},"|"),e("span",{style:{color:"#B58451"}},"replace"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#B56959"}},"'%resource_name%'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource_name"),e("span",{style:{color:"#393A34"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")}),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'sylius_admin.common'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}},".applicationName~"),e("span",{style:{color:"#B56959"}},"'.ui.'"),e("span",{style:{color:"#393A34"}},"~metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"pluralName"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"title"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans "),e("span",{style:{color:"#8E8F8B"}},"}}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"content"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'index'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resources"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"stylesheets"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'index#stylesheets'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"javascripts"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'index#javascripts'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")])])])],-1),zb={__name:"32",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[Ub,M(l,me({},{ranges:["all","1","4-7","9-10","12-14","16-19","21-25"]}),{default:E(()=>[Wb]),_:1},16)]),_:1},16)}}},Kb=P(zb,[["__file","/@slidev/slides/32.md"]]),Yb=e("p",null,"Twig hooks overview",-1),Xb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"## Hook 'index'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"'sylius_admin.common.index'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"sidebar"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/index/sidebar.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"navbar"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/index/navbar.html.twig'"),e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"content"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/index/content.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"# this template contains 'content' hook ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"## hook 'content'        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"'sylius_admin.common.index.content'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"flashes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/index/content/flashes.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"header"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/index/content/header.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"# this template contains 'header' hook ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"grid"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/index/content/grid.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"# this template contains 'grid' hook")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"## Hook 'index'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"'sylius_admin.common.index'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"sidebar"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/index/sidebar.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"navbar"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/index/navbar.html.twig'"),e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"content"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/index/content.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"# this template contains 'content' hook ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"## hook 'content'        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"'sylius_admin.common.index.content'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"flashes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/index/content/flashes.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"header"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/index/content/header.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"# this template contains 'header' hook ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/index/content/grid.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"# this template contains 'grid' hook")])])])],-1),Zb={__name:"33",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[Yb,M(l,me({},{ranges:["all","2","3-4","5-6","7-9","11-12","13-14","15-17","18-20"]}),{default:E(()=>[Xb]),_:1},16)]),_:1},16)}}},Jb=P(Zb,[["__file","/@slidev/slides/33.md"]]),Qb="/admin-panel-revolution-for-your-symfony-projects/admin_ui_index_hooks_with_focus.png",e7=e("p",null,"Debugging with profiler",-1),n7=e("img",{src:Qb},null,-1),s7={__name:"34",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[e7,n7]),_:1},16))}},t7=P(s7,[["__file","/@slidev/slides/34.md"]]),o7="/admin-panel-revolution-for-your-symfony-projects/focused_hook.png",l7=e("p",null,[a("Hooking the header "),e("img",{src:o7,width:"700"})],-1),r7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"## Hook 'header'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"'sylius_admin.[book/common].index.content.header'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}},"  ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"breadcrumbs"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/header/breadcrumbs.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"title_block"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/header/title_block.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"## Hook 'title_block'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},"'sylius_admin.[book/common].index.content.header.title_block'"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"title"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/header/title_block/title.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"actions"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'[...]/header/title_block/actions.html.twig'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"## Hook 'header'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"'sylius_admin.[book/common].index.content.header'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}},"  ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"breadcrumbs"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/header/breadcrumbs.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"title_block"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/header/title_block.html.twig'"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"## Hook 'title_block'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},"'sylius_admin.[book/common].index.content.header.title_block'"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"title"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/header/title_block/title.html.twig'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"actions"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'[...]/header/title_block/actions.html.twig'")])])])],-1),a7={__name:"35",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[l7,M(l,me({},{ranges:["all","1-6","8-13","2"]}),{default:E(()=>[r7]),_:1},16)]),_:1},16)}}},i7=P(a7,[["__file","/@slidev/slides/35.md"]]),c7=e("p",null,"Hooking templates to add data to the book index template",-1),p7=e("p",null,[e("strong",null,"Hook")],-1),u7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"## config/packages/twig_hooks.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"sylius_twig_hooks"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"hooks"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.book.index.content.header'"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"description"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'book/index/content/header/description.html.twig'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"## config/packages/twig_hooks.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"sylius_twig_hooks"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"hooks"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},"'sylius_admin.book.index.content.header'"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"description"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'book/index/content/header/description.html.twig'")])])])],-1),d7=e("p",null,[e("strong",null,"Template")],-1),y7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- templates/book/index/content/header/description.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"mt-3"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- templates/book/index/content/header/description.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"mt-3"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),f7={__name:"36",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[c7,p7,M(l,me({},{ranges:["all","4","5","6"]}),{default:E(()=>[u7]),_:1},16),d7,M(l,me({},{ranges:[""]}),{default:E(()=>[y7]),_:1},16)]),_:1},16)}}},m7=P(f7,[["__file","/@slidev/slides/36.md"]]),h7="/admin-panel-revolution-for-your-symfony-projects/admin_ui_index_hooks_result.png",_7=e("img",{src:h7},null,-1),g7={__name:"37",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[_7]),_:1},16))}},A7=P(g7,[["__file","/@slidev/slides/37.md"]]),v7="/admin-panel-revolution-for-your-symfony-projects/admin_ui_index_hooks_result_debug.png",B7=e("img",{src:v7},null,-1),k7={__name:"38",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[B7]),_:1},16))}},D7=P(k7,[["__file","/@slidev/slides/38.md"]]),C7=e("p",null,"Hooking templates to change logo on the layout",-1),b7=e("p",null,[e("strong",null,"Hook")],-1),w7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"## config/packages/twig_hooks.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"sylius_twig_hooks"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"hooks"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.common.component.sidebar'"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"logo"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'shared/crud/common/sidebar/logo.html.twig'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"## config/packages/twig_hooks.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"sylius_twig_hooks"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"hooks"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},"'sylius_admin.common.component.sidebar'"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"logo"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'shared/crud/common/sidebar/logo.html.twig'")])])])],-1),E7=e("p",null,[e("strong",null,"Template")],-1),x7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- templates/shared/crud/common/sidebar/logo.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"navbar-brand"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"a"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"href"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"{{ dashboard_path }}"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"style"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#DBD7CA"}},'text-decoration: none"'),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"img"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},`"{{ asset('afup-icon-color.png') }}"`),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"alt"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"AFUP logo"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"navbar-brand-image"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        AFUP")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"a"),e("span",{style:{color:"#858585"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- templates/shared/crud/common/sidebar/logo.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"navbar-brand"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"a"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"href"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"{{ dashboard_path }}"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"style"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#393A34"}},'text-decoration: none"'),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"img"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},`"{{ asset('afup-icon-color.png') }}"`),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"alt"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"AFUP logo"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"navbar-brand-image"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        AFUP")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"a"),e("span",{style:{color:"#8E8F8B"}},">")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),S7={__name:"39",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[C7,b7,M(l,me({},{ranges:["all","4","5","6"]}),{default:E(()=>[w7]),_:1},16),E7,M(l,me({},{ranges:["all","2","5","6","7"]}),{default:E(()=>[x7]),_:1},16)]),_:1},16)}}},F7=P(S7,[["__file","/@slidev/slides/39.md"]]),$7="/admin-panel-revolution-for-your-symfony-projects/admin_ui_logo_hooks_result.png",T7=e("img",{src:$7},null,-1),j7={__name:"40",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[T7]),_:1},16))}},O7=P(j7,[["__file","/@slidev/slides/40.md"]]),P7=e("p",null,"Generic create template",-1),I7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/base.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource_metadata"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.%resource_name%'"),e("span",{style:{color:"#DBD7CA"}},"|"),e("span",{style:{color:"#E0A569"}},"replace"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#C98A7D"}},"'%resource_name%'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource_name"),e("span",{style:{color:"#DBD7CA"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")}),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.common'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}},".applicationName~"),e("span",{style:{color:"#C98A7D"}},"'.ui.'"),e("span",{style:{color:"#DBD7CA"}},"~metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"pluralName"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans "),e("span",{style:{color:"#858585"}},"}}"),e("span",{style:{color:"#DBD7CA"}}," | "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'create'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"stylesheets"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'create#stylesheets'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"javascripts"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'create#javascripts'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/base.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource_metadata"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'sylius_admin.%resource_name%'"),e("span",{style:{color:"#393A34"}},"|"),e("span",{style:{color:"#B58451"}},"replace"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#B56959"}},"'%resource_name%'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource_name"),e("span",{style:{color:"#393A34"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")}),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'sylius_admin.common'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}},".applicationName~"),e("span",{style:{color:"#B56959"}},"'.ui.'"),e("span",{style:{color:"#393A34"}},"~metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"pluralName"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"title"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans "),e("span",{style:{color:"#8E8F8B"}},"}}"),e("span",{style:{color:"#393A34"}}," | "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"content"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'create'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"stylesheets"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'create#stylesheets'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"javascripts"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'create#javascripts'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")])])])],-1),L7={__name:"41",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[P7,M(l,me({},{ranges:[""]}),{default:E(()=>[I7]),_:1},16)]),_:1},16)}}},N7=P(L7,[["__file","/@slidev/slides/41.md"]]),R7=e("p",null,"Generic update template",-1),M7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/base.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource_metadata"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.%resource_name%'"),e("span",{style:{color:"#DBD7CA"}},"|"),e("span",{style:{color:"#E0A569"}},"replace"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#C98A7D"}},"'%resource_name%'"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource_name"),e("span",{style:{color:"#DBD7CA"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")}),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.common'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"vars"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#E0A569"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#DBD7CA"}},".applicationName~"),e("span",{style:{color:"#C98A7D"}},"'.ui.'"),e("span",{style:{color:"#DBD7CA"}},"~metadata"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"pluralName"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"title"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"header"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"trans "),e("span",{style:{color:"#858585"}},"}}"),e("span",{style:{color:"#DBD7CA"}}," | "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"content"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'update'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"resource"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"metadata"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"configuration"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"stylesheets"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'update#stylesheets'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"block"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"javascripts"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"parent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"hook"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'update#javascripts'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_prefixes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"prefixes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"endblock"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/base.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource_metadata"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'sylius_admin.%resource_name%'"),e("span",{style:{color:"#393A34"}},"|"),e("span",{style:{color:"#B58451"}},"replace"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#B56959"}},"'%resource_name%'"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource_name"),e("span",{style:{color:"#393A34"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")}),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959"}},"'sylius_admin.common'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"vars"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#B58451"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#393A34"}},".applicationName~"),e("span",{style:{color:"#B56959"}},"'.ui.'"),e("span",{style:{color:"#393A34"}},"~metadata"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"pluralName"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"title"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"header"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"trans "),e("span",{style:{color:"#8E8F8B"}},"}}"),e("span",{style:{color:"#393A34"}}," | "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"content"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'update'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"resource"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"metadata"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"configuration"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"stylesheets"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'update#stylesheets'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"block"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"javascripts"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"parent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"hook"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'update#javascripts'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_prefixes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"prefixes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"endblock"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")])])])],-1),q7={__name:"42",setup(n){const s={srcSequence:"./pages/05_sylius_stack.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[R7,M(l,me({},{ranges:[""]}),{default:E(()=>[M7]),_:1},16)]),_:1},16)}}},G7=P(q7,[["__file","/@slidev/slides/42.md"]]),H7=e("h1",null,"Real use case",-1),V7=e("p",null,"Let’s create an AFUP admin panel",-1),U7={__name:"43",setup(n){const s={layout:"center",srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(qt,W(U(s)),{default:E(()=>[H7,V7]),_:1},16))}},W7=P(U7,[["__file","/@slidev/slides/43.md"]]),z7=e("p",null,"Create a speaker entity",-1),K7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"symfony"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"make:entity"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"Speaker")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"symfony"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"make:entity"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"Speaker")])])])],-1),Y7=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Nullable")])]),e("tbody",null,[e("tr",null,[e("td",null,"firstName"),e("td",null,"string"),e("td",null,"no")]),e("tr",null,[e("td",null,"lastName"),e("td",null,"string"),e("td",null,"no")]),e("tr",null,[e("td",null,"companyName"),e("td",null,"string"),e("td",null,"yes")]),e("tr",null,[e("td",null,"avatar"),e("td",null,"oneToOne"),e("td",null,"yes")])])],-1),X7={__name:"44",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[z7,M(l,me({},{ranges:[""]}),{default:E(()=>[K7]),_:1},16),Y7]),_:1},16)}}},Z7=P(X7,[["__file","/@slidev/slides/44.md"]]),J7=e("p",null,"Create a speaker form type",-1),Q7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"symfony"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"make"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"form"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"SpeakerType"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"Speaker")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"symfony"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"make"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"form"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"SpeakerType"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"Speaker")])])])],-1),e6=e("p",null,"Create a speaker grid",-1),n6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"symfony"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"make"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"Speaker")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"symfony"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"make"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"Speaker")])])])],-1),s6={__name:"45",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[J7,M(l,me({},{ranges:[""]}),{default:E(()=>[Q7]),_:1},16),e6,M(l,me({},{ranges:[""]}),{default:E(()=>[n6]),_:1},16)]),_:1},16)}}},t6=P(s6,[["__file","/@slidev/slides/45.md"]]),o6=e("p",null,"Declare entity as a Sylius resource & add your basic operations",-1),l6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"ORM"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Entity"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"repositoryClass"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SpeakerRepository"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsResource"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"section"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'admin'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"formType"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SpeakerType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"templatesDir"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"routePrefix"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'/admin'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"operations"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Create"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Update"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SpeakerGrid"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Delete"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BulkDelete"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Speaker"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceInterface")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"ORM"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Entity"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"repositoryClass"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SpeakerRepository"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsResource"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"section"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"formType"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SpeakerType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"templatesDir"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusAdminUi/crud'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"routePrefix"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'/admin'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"operations"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Update"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SpeakerGrid"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Delete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BulkDelete"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Speaker"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceInterface")])])])],-1),r6={__name:"46",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[o6,M(l,me({},{ranges:["all","2","3","4","5","6","7-13","8","9","10","11","12","15"]}),{default:E(()=>[l6]),_:1},16)]),_:1},16)}}},a6=P(r6,[["__file","/@slidev/slides/46.md"]]),i6="/admin-panel-revolution-for-your-symfony-projects/admin_ui_speakers.png",c6=e("p",null,"Generated grid",-1),p6=e("img",{src:i6},null,-1),u6={__name:"47",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[c6,p6]),_:1},16))}},d6=P(u6,[["__file","/@slidev/slides/47.md"]]),y6="/admin-panel-revolution-for-your-symfony-projects/admin_ui_no_filters.png",f6=e("p",null,"No filters by default",-1),m6=e("img",{class:"w-100",src:y6},null,-1),h6={__name:"48",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[f6,m6]),_:1},16))}},_6=P(h6,[["__file","/@slidev/slides/48.md"]]),g6=e("p",null,"Adding a search filter",-1),A6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Grid/SpeakerGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SpeakerGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFilter"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"StringFilter"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'search'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'firstName'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'lastName'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'companyName'"),e("span",{style:{color:"#858585"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'sylius.ui.search'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Grid/SpeakerGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SpeakerGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFilter"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"StringFilter"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'search'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'firstName'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'lastName'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'companyName'"),e("span",{style:{color:"#8E8F8B"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'sylius.ui.search'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),v6={__name:"49",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[g6,M(l,me({},{ranges:["all","10-14","11","12","13"]}),{default:E(()=>[A6]),_:1},16)]),_:1},16)}}},B6=P(v6,[["__file","/@slidev/slides/49.md"]]),k6="/admin-panel-revolution-for-your-symfony-projects/admin_ui_with_filters.png",D6=e("img",{src:k6},null,-1),C6={__name:"50",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[D6]),_:1},16))}},b6=P(C6,[["__file","/@slidev/slides/50.md"]]),w6=e("p",null,"Adding a default sorting",-1),E6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SpeakerGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFilter"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"StringFilter"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'search'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'firstName'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'lastName'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'companyName'"),e("span",{style:{color:"#858585"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'sylius.ui.search'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addOrderBy"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'firstName'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'asc'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SpeakerGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFilter"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"StringFilter"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'search'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'firstName'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'lastName'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'companyName'"),e("span",{style:{color:"#8E8F8B"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'sylius.ui.search'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addOrderBy"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'firstName'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'asc'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),x6={__name:"51",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[w6,M(l,me({},{ranges:["all","16"]}),{default:E(()=>[E6]),_:1},16)]),_:1},16)}}},S6=P(x6,[["__file","/@slidev/slides/51.md"]]),F6="/admin-panel-revolution-for-your-symfony-projects/admin_ui_default_sorting.png",$6=e("p",null,"Sorted by first name",-1),T6=e("img",{src:F6},null,-1),j6={__name:"52",setup(n){const s={transition:"fade",srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[$6,T6]),_:1},16))}},O6=P(j6,[["__file","/@slidev/slides/52.md"]]),P6="/admin-panel-revolution-for-your-symfony-projects/admin_ui_sorted_by_company_name.png",I6=e("p",null,"Sorted by company name",-1),L6=e("img",{src:P6},null,-1),N6={__name:"53",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[I6,L6]),_:1},16))}},R6=P(N6,[["__file","/@slidev/slides/53.md"]]),M6=e("p",null,"Adding an image for the speaker avatar",-1),q6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addField"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"TwigField"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'avatar'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'speaker/grid/field/image.html.twig'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setPath"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'.'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addField"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"TwigField"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'avatar'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'speaker/grid/field/image.html.twig'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setPath"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'.'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")])])])],-1),G6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- templates/speaker/grid/field/image.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"avatar"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"set"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"avatar_path"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"avatar"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"path"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"is"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"defined"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#DBD7CA"}}," vich_uploader_asset"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"avatar"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{{"),e("span",{style:{color:"#DBD7CA"}}," avatar"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"default"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"avatar_path"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'img-thumbnail'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- templates/speaker/grid/field/image.html.twig -->")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"avatar"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"set"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"avatar_path"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"avatar"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"path"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"is"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"defined"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#393A34"}}," vich_uploader_asset"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"avatar"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"%}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{{"),e("span",{style:{color:"#393A34"}}," avatar"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"default"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"avatar_path"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'img-thumbnail'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}}")])])])],-1),H6={__name:"54",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[M6,M(l,me({},{ranges:["all","6-9","6","7","8"]}),{default:E(()=>[q6]),_:1},16),M(l,me({},{ranges:["all","2","4","5"]}),{default:E(()=>[G6]),_:1},16)]),_:1},16)}}},V6=P(H6,[["__file","/@slidev/slides/54.md"]]),U6="/admin-panel-revolution-for-your-symfony-projects/admin_ui_speaker_avatars.png",W6=e("img",{src:U6},null,-1),z6={__name:"55",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[W6]),_:1},16))}},K6=P(z6,[["__file","/@slidev/slides/55.md"]]),Y6=e("p",null,"Create a talk entity",-1),X6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"symfony"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"make:entity"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"Talk")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"symfony"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"make:entity"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"Talk")])])])],-1),Z6=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Nullable")])]),e("tbody",null,[e("tr",null,[e("td",null,"title"),e("td",null,"string"),e("td",null,"no")]),e("tr",null,[e("td",null,"description"),e("td",null,"text"),e("td",null,"yes")]),e("tr",null,[e("td",null,"speaker"),e("td",null,"manyToOne"),e("td",null,"yes")])])],-1),J6=e("p",null,"Create a talk form type",-1),Q6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"symfony"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"make"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"form"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"TalkType"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"Talk")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"symfony"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"make"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"form"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"TalkType"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"Talk")])])])],-1),ew=e("p",null,"Create a talk grid",-1),nw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"symfony"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"console"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"make"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"grid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"Talk")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"symfony"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"console"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"make"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"grid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"Talk")])])])],-1),sw={__name:"56",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[Y6,M(l,me({},{ranges:[""]}),{default:E(()=>[X6]),_:1},16),Z6,J6,M(l,me({},{ranges:[""]}),{default:E(()=>[Q6]),_:1},16),ew,M(l,me({},{ranges:[""]}),{default:E(()=>[nw]),_:1},16)]),_:1},16)}}},tw=P(sw,[["__file","/@slidev/slides/56.md"]]),ow="/admin-panel-revolution-for-your-symfony-projects/admin_ui_talks.png",lw=e("p",null,"Generated grid",-1),rw=e("img",{src:ow},null,-1),aw={__name:"57",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[lw,rw]),_:1},16))}},iw=P(aw,[["__file","/@slidev/slides/57.md"]]),cw=e("p",null,"Adding the speaker avatar",-1),pw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TalkGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addField"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"TwigField"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'avatar'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'speaker/grid/field/image.html.twig'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setPath"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'speaker'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TalkGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addField"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"TwigField"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'avatar'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'speaker/grid/field/image.html.twig'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setPath"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'speaker'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),uw={__name:"58",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[cw,M(l,me({},{ranges:["all","10-13","11","12"]}),{default:E(()=>[pw]),_:1},16)]),_:1},16)}}},dw=P(uw,[["__file","/@slidev/slides/58.md"]]),yw="/admin-panel-revolution-for-your-symfony-projects/admin_ui_talks_with_avatars.png",fw=e("p",null,"Talks with speaker avatars",-1),mw=e("img",{src:yw},null,-1),hw={__name:"59",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[fw,mw]),_:1},16))}},_w=P(hw,[["__file","/@slidev/slides/59.md"]]),gw=e("p",null,"Adding the speaker full names",-1),Aw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TalkGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addField"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"StringField"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'speaker'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'app.ui.speaker'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setPath"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'speaker.fullName'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setSortable"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'speaker.firstName'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TalkGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addField"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"StringField"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'speaker'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'app.ui.speaker'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setPath"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'speaker.fullName'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setSortable"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'speaker.firstName'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),vw={__name:"60",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[gw,M(l,me({},{ranges:["all","10-15","11","12","13","14"]}),{default:E(()=>[Aw]),_:1},16)]),_:1},16)}}},Bw=P(vw,[["__file","/@slidev/slides/60.md"]]),kw="/admin-panel-revolution-for-your-symfony-projects/admin_ui_talks_with_speaker_full_names.png",Dw=e("p",null,"Talks with speaker full names",-1),Cw=e("img",{src:kw},null,-1),bw={__name:"61",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Dw,Cw]),_:1},16))}},ww=P(bw,[["__file","/@slidev/slides/61.md"]]),Ew=e("p",null,"Adding the speaker filter",-1),xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TalkGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFilter"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"EntityFilter"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'speaker'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Speaker"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'app.ui.speaker'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFormOption"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'choice_label'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},"'fullName'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TalkGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFilter"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"EntityFilter"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'speaker'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Speaker"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'app.ui.speaker'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFormOption"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'choice_label'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},"'fullName'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Sw={__name:"62",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[Ew,M(l,me({},{ranges:["all","10-14","11","12","13"]}),{default:E(()=>[xw]),_:1},16)]),_:1},16)}}},Fw=P(Sw,[["__file","/@slidev/slides/62.md"]]),$w="/admin-panel-revolution-for-your-symfony-projects/admin_ui_speaker_filter.png",Tw=e("p",null,"Talks with speaker filter",-1),jw=e("img",{src:$w},null,-1),Ow={__name:"63",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Tw,jw]),_:1},16))}},Pw=P(Ow,[["__file","/@slidev/slides/63.md"]]),Iw="/admin-panel-revolution-for-your-symfony-projects/admin_ui_speaker_filter_result.png",Lw=e("p",null,"Talks with speaker filter",-1),Nw=e("img",{src:Iw},null,-1),Rw={__name:"64",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Lw,Nw]),_:1},16))}},Mw=P(Rw,[["__file","/@slidev/slides/64.md"]]),qw=e("p",null,"Adding a link to speaker talks on list of speakers",-1),Gw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Grid/SpeakerGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SpeakerGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addActionGroup"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"ItemActionGroup"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#E0A569"}},"Action"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'show_talks'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'show'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setIcon"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'list_letters'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'app.ui.show_talks'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                        "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setOptions"),e("span",{style:{color:"#858585"}},"([")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                            "),e("span",{style:{color:"#C98A7D"}},"'link'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                                "),e("span",{style:{color:"#C98A7D"}},"'route'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_admin_talk_index'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                                "),e("span",{style:{color:"#C98A7D"}},"'parameters'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                                    "),e("span",{style:{color:"#C98A7D"}},"'criteria'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                                        "),e("span",{style:{color:"#C98A7D"}},"'speaker'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'resource.id'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                                    "),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                                "),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                            "),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                        "),e("span",{style:{color:"#858585"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#E0A569"}},"UpdateAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#E0A569"}},"DeleteAction"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Grid/SpeakerGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SpeakerGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addActionGroup"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"ItemActionGroup"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#B58451"}},"Action"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'show_talks'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'show'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setIcon"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'list_letters'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'app.ui.show_talks'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                        "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setOptions"),e("span",{style:{color:"#8E8F8B"}},"([")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                            "),e("span",{style:{color:"#B56959"}},"'link'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                                "),e("span",{style:{color:"#B56959"}},"'route'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_admin_talk_index'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                                "),e("span",{style:{color:"#B56959"}},"'parameters'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                                    "),e("span",{style:{color:"#B56959"}},"'criteria'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                                        "),e("span",{style:{color:"#B56959"}},"'speaker'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'resource.id'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                                    "),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                                "),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                            "),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                        "),e("span",{style:{color:"#8E8F8B"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#B58451"}},"UpdateAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"(),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#B58451"}},"DeleteAction"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Hw={__name:"65",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[qw,M(l,me({},{ranges:["all","10-24","11","12","13","14","15","16","17","18-21","20"]}),{default:E(()=>[Gw]),_:1},16)]),_:1},16)}}},Vw=P(Hw,[["__file","/@slidev/slides/65.md"]]),Uw="/admin-panel-revolution-for-your-symfony-projects/admin_ui_show_talks.png",Ww=e("p",null,"Link to speaker talks",-1),zw=e("img",{src:Uw},null,-1),Kw={__name:"66",setup(n){const s={transition:"fade",srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Ww,zw]),_:1},16))}},Yw=P(Kw,[["__file","/@slidev/slides/66.md"]]),Xw="/admin-panel-revolution-for-your-symfony-projects/admin_ui_one_speaker_talks.png",Zw=e("p",null,"Linked to talks of this speaker",-1),Jw=e("img",{src:Xw},null,-1),Qw={__name:"67",setup(n){const s={srcSequence:"./pages/06_real_use_case.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Zw,Jw]),_:1},16))}},e4=P(Qw,[["__file","/@slidev/slides/67.md"]]),n4=e("h1",null,"Going further with Symfony UX",-1),s4=e("p",null,"Let’s use some Symfony UX components",-1),t4={__name:"68",setup(n){const s={layout:"center",srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>(_(),T(qt,W(U(s)),{default:E(()=>[n4,s4]),_:1},16))}},o4=P(t4,[["__file","/@slidev/slides/68.md"]]),l4=e("p",null,"Add a speaker autocomplete filter",-1),r4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Grid/SpeakerGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SpeakerGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFilter"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"Filter"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'speaker'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'ux_autocomplete'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'app.ui.speaker'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setFormOptions"),e("span",{style:{color:"#858585"}},"([")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                        "),e("span",{style:{color:"#C98A7D"}},"'multiple'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                        "),e("span",{style:{color:"#C98A7D"}},"'extra_options'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                            "),e("span",{style:{color:"#C98A7D"}},"'class'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Speaker"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                            "),e("span",{style:{color:"#C98A7D"}},"'choice_label'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'fullName'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                        "),e("span",{style:{color:"#858585"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#858585"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setOptions"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#C98A7D"}},"'fields'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'speaker.id'"),e("span",{style:{color:"#858585"}},"]])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Grid/SpeakerGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SpeakerGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFilter"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"Filter"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'speaker'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'ux_autocomplete'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'app.ui.speaker'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setFormOptions"),e("span",{style:{color:"#8E8F8B"}},"([")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                        "),e("span",{style:{color:"#B56959"}},"'multiple'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                        "),e("span",{style:{color:"#B56959"}},"'extra_options'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                            "),e("span",{style:{color:"#B56959"}},"'class'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Speaker"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                            "),e("span",{style:{color:"#B56959"}},"'choice_label'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'fullName'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                        "),e("span",{style:{color:"#8E8F8B"}},"],")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#8E8F8B"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setOptions"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#B56959"}},"'fields'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'speaker.id'"),e("span",{style:{color:"#8E8F8B"}},"]])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),a4={__name:"69",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[l4,M(l,me({},{ranges:["all","10-21","11","12","13","14","15-17","16","17","20"]}),{default:E(()=>[r4]),_:1},16)]),_:1},16)}}},i4=P(a4,[["__file","/@slidev/slides/69.md"]]),c4="/admin-panel-revolution-for-your-symfony-projects/filter_with_ux_autocomplete.png",p4=e("p",null,"Speaker filter with autocompletion",-1),u4=e("img",{src:c4},null,-1),d4={__name:"70",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[p4,u4]),_:1},16))}},y4=P(d4,[["__file","/@slidev/slides/70.md"]]),f4=e("p",null,"Creating a Speaker Autocomplete to use on forms",-1),m4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Form/SpeakerAutocompleteType.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsEntityAutocompleteField"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"alias"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app_admin_speaker'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SpeakerAutocompleteType"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractType")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"configureOptions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"OptionsResolver"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"resolver"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"resolver"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setDefaults"),e("span",{style:{color:"#858585"}},"([")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'class'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Speaker"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'choice_label'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'fullName'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"]);")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getParent"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"string")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"BaseEntityAutocompleteType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Form/SpeakerAutocompleteType.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsEntityAutocompleteField"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"alias"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app_admin_speaker'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SpeakerAutocompleteType"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractType")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"configureOptions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"OptionsResolver"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"resolver"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"resolver"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setDefaults"),e("span",{style:{color:"#8E8F8B"}},"([")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'class'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Speaker"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'choice_label'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'fullName'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"]);")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getParent"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"string")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"BaseEntityAutocompleteType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),h4={__name:"71",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[f4,M(l,me({},{ranges:["all","4","5","7","12","13","17-20"]}),{default:E(()=>[m4]),_:1},16)]),_:1},16)}}},_4=P(h4,[["__file","/@slidev/slides/71.md"]]),g4=e("p",null,"Speaker Autocomplete on talk form type",-1),A4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Form/TalkType.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TalkType"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractType")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildForm"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"FormBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"builder"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"options"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"builder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"add"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'title'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"add"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'speaker'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SpeakerAutocompleteType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"add"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'description'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Form/TalkType.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TalkType"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractType")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildForm"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"FormBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"builder"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"options"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"builder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"add"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'title'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"add"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'speaker'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SpeakerAutocompleteType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"add"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'description'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),v4={__name:"72",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[g4,M(l,me({},{ranges:["all","10"]}),{default:E(()=>[A4]),_:1},16)]),_:1},16)}}},B4=P(v4,[["__file","/@slidev/slides/72.md"]]),k4="/admin-panel-revolution-for-your-symfony-projects/talk_form_type.png",D4=e("p",null,"Speaker Autocomplete on talk form type",-1),C4=e("img",{src:k4},null,-1),b4={__name:"73",setup(n){const s={transition:"fade",srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[D4,C4]),_:1},16))}},w4=P(b4,[["__file","/@slidev/slides/73.md"]]),E4="/admin-panel-revolution-for-your-symfony-projects/form_type_with_ux_autocomplete.png",x4=e("p",null,"Speaker Autocomplete on talk form type",-1),S4=e("img",{src:E4},null,-1),F4={__name:"74",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[x4,S4]),_:1},16))}},$4=P(F4,[["__file","/@slidev/slides/74.md"]]),T4=e("p",null,"Talk can have multiple speakers",-1),j4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Form/TalkType.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TalkType"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractType")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildForm"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"FormBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"builder"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"array"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"options"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"builder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"add"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'speakers'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"LiveCollectionType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#C98A7D"}},"'label'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'app.ui.speakers'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#C98A7D"}},"'entry_type'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"SpeakerAutocompleteType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#C98A7D"}},"'allow_add'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#C98A7D"}},"'allow_delete'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#C98A7D"}},"'by_reference'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Form/TalkType.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TalkType"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractType")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildForm"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"FormBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"builder"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"array"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"options"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"builder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"add"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'speakers'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"LiveCollectionType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B56959"}},"'label'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'app.ui.speakers'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B56959"}},"'entry_type'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"SpeakerAutocompleteType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B56959"}},"'allow_add'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B56959"}},"'allow_delete'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B56959"}},"'by_reference'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),O4={__name:"75",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[T4,M(l,me({},{ranges:["all","10","12","13","14","15"]}),{default:E(()=>[j4]),_:1},16)]),_:1},16)}}},P4=P(O4,[["__file","/@slidev/slides/75.md"]]),I4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Twig/Component/TalkFormComponent.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"TwigHooks"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"LiveComponent"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"HookableLiveComponentTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Symfony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"UX"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"LiveComponent"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"AsLiveComponent"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Symfony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"UX"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"LiveComponent"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Attribute"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"LiveProp"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Symfony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"UX"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"LiveComponent"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DefaultActionTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Symfony"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"UX"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"LiveComponent"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"LiveCollectionTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"#["),e("span",{style:{color:"#E0A569"}},"AsLiveComponent"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"template"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@SyliusBootstrapAdminUi/shared/crud/common/content/form.html.twig'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TalkFormComponent"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractController")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"LiveCollectionTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"DefaultActionTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"HookableLiveComponentTrait"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"LiveProp"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Talk"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"initialFormData"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"protected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"instantiateForm"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"FormInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"createForm"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"TalkType"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"initialFormData"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Twig/Component/TalkFormComponent.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"TwigHooks"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"LiveComponent"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"HookableLiveComponentTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Symfony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"UX"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"LiveComponent"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"AsLiveComponent"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Symfony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"UX"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"LiveComponent"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Attribute"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"LiveProp"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Symfony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"UX"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"LiveComponent"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DefaultActionTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Symfony"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"UX"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"LiveComponent"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"LiveCollectionTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"#["),e("span",{style:{color:"#B58451"}},"AsLiveComponent"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"template"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@SyliusBootstrapAdminUi/shared/crud/common/content/form.html.twig'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TalkFormComponent"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractController")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"LiveCollectionTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"DefaultActionTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"HookableLiveComponentTrait"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"LiveProp"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Talk"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"initialFormData"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"protected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"instantiateForm"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"FormInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"createForm"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"TalkType"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"initialFormData"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),L4={__name:"76",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[M(l,me({},{ranges:["all","4,9","7,12","6,13","3,14","16-17","19-22"]}),{default:E(()=>[I4]),_:1},16)]),_:1},16)}}},N4=P(L4,[["__file","/@slidev/slides/76.md"]]),R4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"## config/packages/twig_hooks.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"sylius_twig_hooks"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"hooks"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"# ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.talk.create.content'"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"form"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"component"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'App\\Twig\\Component\\TalkFormComponent'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"props"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#429988"}},"form"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@=_context.form'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#429988"}},"initialFormData"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@=_context.resource'")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#C98A7D"}},"'sylius_admin.talk.update.content'"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"form"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"component"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'App\\Twig\\Component\\TalkFormComponent'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"props"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#429988"}},"form"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@=_context.form'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#429988"}},"initialFormData"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@=_context.resource'")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"## config/packages/twig_hooks.yaml")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"sylius_twig_hooks"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"hooks"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"# ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},"'sylius_admin.talk.create.content'"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"form"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"component"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'App\\Twig\\Component\\TalkFormComponent'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"props"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#2F8A89"}},"form"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@=_context.form'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#2F8A89"}},"initialFormData"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@=_context.resource'")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959"}},"'sylius_admin.talk.update.content'"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"form"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"component"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'App\\Twig\\Component\\TalkFormComponent'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"props"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#2F8A89"}},"form"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@=_context.form'")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#2F8A89"}},"initialFormData"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@=_context.resource'")])])])],-1),M4={__name:"77",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[M(l,me({},{ranges:["all","6","7","8","9","10","11","13"]}),{default:E(()=>[R4]),_:1},16)]),_:1},16)}}},q4=P(M4,[["__file","/@slidev/slides/77.md"]]),G4="/admin-panel-revolution-for-your-symfony-projects/live-collection.png",H4=e("img",{src:G4},null,-1),V4={__name:"78",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[H4]),_:1},16))}},U4=P(V4,[["__file","/@slidev/slides/78.md"]]),W4=e("p",null,"Two more filters…",-1),z4={__name:"79",setup(n){const s={layout:"center",srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>(_(),T(qt,W(U(s)),{default:E(()=>[W4]),_:1},16))}},K4=P(z4,[["__file","/@slidev/slides/79.md"]]),Y4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"GridBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Builder"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Filter"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"DateFilter"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Sylius"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Bundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"GridBundle"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Builder"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Filter"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"EntityFilter"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TalkGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"extends"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"AbstractGrid"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"buildGrid"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"GridBuilderInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFilter"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"DateFilter"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'startsAt'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'app.ui.starts_at'"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addFilter"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#E0A569"}},"SelectFilter"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'track'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#C98A7D"}},"'app.ui.biz'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Track"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BIZ"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#C98A7D"}},"'app.ui.tech_one'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Track"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"TECH_ONE"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#C98A7D"}},"'app.ui.tech_two'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Track"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"TECH_TWO"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                    "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"setLabel"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'app.ui.track'"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"            "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/Grid/TalkGrid.php")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"GridBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Builder"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Filter"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"DateFilter"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Sylius"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Bundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"GridBundle"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Builder"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Filter"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"EntityFilter"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TalkGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"extends"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"AbstractGrid"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ResourceAwareGridInterface")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"buildGrid"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"GridBuilderInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"gridBuilder")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFilter"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"DateFilter"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'startsAt'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'app.ui.starts_at'"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addFilter"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#B58451"}},"SelectFilter"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'track'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#B56959"}},"'app.ui.biz'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Track"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BIZ"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#B56959"}},"'app.ui.tech_one'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Track"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"TECH_ONE"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#B56959"}},"'app.ui.tech_two'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Track"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"TECH_TWO"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"])")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                    "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"setLabel"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'app.ui.track'"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"            "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),X4={__name:"80",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[M(l,me({},{ranges:["all","3,14-17","18-25"]}),{default:E(()=>[Y4]),_:1},16)]),_:1},16)}}},Z4=P(X4,[["__file","/@slidev/slides/80.md"]]),J4="/admin-panel-revolution-for-your-symfony-projects/last-filters.png",Q4=e("img",{src:J4},null,-1),eE={__name:"81",setup(n){const s={srcSequence:"./pages/07_symfony_ux.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[Q4]),_:1},16))}},nE=P(eE,[["__file","/@slidev/slides/81.md"]]),sE=e("p",null,"Now it’s time to conclude",-1),tE={__name:"82",setup(n){const s={layout:"center",srcSequence:"./pages/08_conclusion.md"};return F(O),(t,o)=>(_(),T(qt,W(U(s)),{default:E(()=>[sE]),_:1},16))}},oE=P(tE,[["__file","/@slidev/slides/82.md"]]),lE=e("ul",null,[e("li",null,"Symfony 7.1 support"),e("li",null,"PHP 8.3 support"),e("li",null,"Fewer dependencies on third party packages"),e("li",null,"No dependencies on Sylius E-commerce packages"),e("li",null,[a("DDD architecture ready "),e("ul",null,[e("li",null,"Resource detached from the Doctrine entity"),e("li",null,"Query bus on providers"),e("li",null,"Command bus on processors")])]),e("li",null,"Installable on existing projects")],-1),rE={__name:"83",setup(n){const s={layout:"image-right",image:"/profiler.png",srcSequence:"./pages/08_conclusion.md"};return F(O),(t,o)=>{const l=Mt;return _(),T(zo,W(U(s)),{default:E(()=>[M(l,null,{default:E(()=>[lE]),_:1})]),_:1},16)}}},aE=P(rE,[["__file","/@slidev/slides/83.md"]]),iE=e("h2",null,"TODO",-1),cE=e("ul",null,[e("li",null,"Writing documentation"),e("li",null,"Adding Doctrine orm 3 support"),e("li",null,"Adding UX autocomplete grid filter"),e("li",null,"Using these packages on Monofony"),e("li",null,"Using these packages on Sylius E-commerce"),e("li",null,"Grid with UX Live Component")],-1),pE={__name:"84",setup(n){const s={srcSequence:"./pages/08_conclusion.md"};return F(O),(t,o)=>{const l=Mt;return _(),T(se,W(U(s)),{default:E(()=>[iE,M(l,null,{default:E(()=>[cE]),_:1})]),_:1},16)}}},uE=P(pE,[["__file","/@slidev/slides/84.md"]]),dE=e("h2",null,"Install It",-1),yE=e("p",null,"From scratch, install a Symfony skeleton",-1),fE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"symfony"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"--webapp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"application_name"),e("span",{style:{color:"#858585"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"symfony"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"--webapp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"application_name"),e("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),mE=e("p",null,"Install all the packages (Soon…)",-1),hE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"composer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"require"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"sylius/admin-panel-pack")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"composer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"require"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"sylius/admin-panel-pack")])])])],-1),_E={__name:"85",setup(n){const s={srcSequence:"./pages/08_conclusion.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[dE,yE,M(l,me({},{ranges:[""]}),{default:E(()=>[fE]),_:1},16),mE,M(l,me({},{ranges:[""]}),{default:E(()=>[hE]),_:1},16)]),_:1},16)}}},gE=P(_E,[["__file","/@slidev/slides/85.md"]]),AE=e("p",null,"Install all the packages (For now)",-1),vE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"composer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"require"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"doctrine/doctrine-bundle"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^2.12"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"doctrine/orm"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^2.0"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"sylius/admin-ui"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^0.4"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"sylius/bootstrap-admin-ui"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^0.4"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"sylius/grid-bundle"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^1.13"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"sylius/resource-bundle":'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^1.12"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"sylius/twig-extra"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^0.4"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"sylius/twig-hooks"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^0.4"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"sylius/ui-translations"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"^0.4"')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"composer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"require"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"doctrine/doctrine-bundle"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^2.12"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"doctrine/orm"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^2.0"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"sylius/admin-ui"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^0.4"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"sylius/bootstrap-admin-ui"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^0.4"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"sylius/grid-bundle"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^1.13"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"sylius/resource-bundle":'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^1.12"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"sylius/twig-extra"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^0.4"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"sylius/twig-hooks"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^0.4"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"\\")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"sylius/ui-translations"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"^0.4"')])])])],-1),BE=e("p",null,"Do not forget to accept contrib recipes",-1),kE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Do"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"you"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"want"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"execute"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"this"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"recipe?")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"y"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Yes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"n"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"No")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"a"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Yes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"all"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"packages,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"only"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"the"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"current"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"installation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"session")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"p"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Yes"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"permanently,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"never"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"ask"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"again"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"this"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"project")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"defaults"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"n"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#E0A569"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"a")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Do"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"you"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"want"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"execute"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"this"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"recipe?")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"y"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Yes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"n"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"No")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"a"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Yes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"all"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"packages,"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"only"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"the"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"current"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"installation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"session")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"p"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Yes"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"permanently,"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"never"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"ask"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"again"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"this"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"project")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"defaults"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"n"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#B58451"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"a")])])])],-1),DE={__name:"86",setup(n){const s={srcSequence:"./pages/08_conclusion.md"};return F(O),(t,o)=>{const l=Pe;return _(),T(se,W(U(s)),{default:E(()=>[AE,M(l,me({},{ranges:[""]}),{default:E(()=>[vE]),_:1},16),BE,M(l,me({},{ranges:["4"]}),{default:E(()=>[kE]),_:1},16)]),_:1},16)}}},CE=P(DE,[["__file","/@slidev/slides/86.md"]]),bE="/admin-panel-revolution-for-your-symfony-projects/enjoy.png",wE=e("img",{src:bE},null,-1),EE={__name:"87",setup(n){const s={srcSequence:"./pages/08_conclusion.md"};return F(O),(t,o)=>(_(),T(se,W(U(s)),{default:E(()=>[wE]),_:1},16))}},xE=P(EE,[["__file","/@slidev/slides/87.md"]]),SE=e("p",null,"Now it’s your turn…",-1),FE={__name:"88",setup(n){const s={layout:"center",srcSequence:"./pages/08_conclusion.md"};return F(O),(t,o)=>(_(),T(qt,W(U(s)),{default:E(()=>[SE]),_:1},16))}},$E=P(FE,[["__file","/@slidev/slides/88.md"]]),TE=[{path:"1",name:"page-1",component:c9,meta:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Admin panel \\(R)evolution for your Symfony projects",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: false
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
colorSchema: light
# use UnoCSS
css: unocss
---

# Admin panel \\(R)evolution for your Symfony projects

with Symfony UX and Sylius stack

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPIHpPwcT2rG_eIrbJ9e9VWXkPP7U_oHTPw&s">
</div>

<!--
Let's talk about the Resource revolution on the new Sylius and Grid based on API Platform internals.
-->
`,title:"Admin panel \\(R)evolution for your Symfony projects",level:1,content:`# Admin panel \\(R)evolution for your Symfony projects

with Symfony UX and Sylius stack

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPIHpPwcT2rG_eIrbJ9e9VWXkPP7U_oHTPw&s">
</div>`,frontmatter:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"Admin panel \\(R)evolution for your Symfony projects"},note:"Let's talk about the Resource revolution on the new Sylius and Grid based on API Platform internals.",index:0,start:0,end:44,noteHTML:`<p>Let's talk about the Resource revolution on the new Sylius and Grid based on API Platform internals.</p>
`,filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:m9,meta:{layout:"image-right",image:"/akawaka.png",hideInToc:!0,title:"Loïc Frémont",srcSequence:"./pages/01_index.md",slide:{raw:null,title:"Loïc Frémont",level:1,content:`# Loïc Frémont

* Technical Expert @Akawaka
* Core Team Member @Sylius
* Monofony creator`,frontmatter:{layout:"image-right",image:"/akawaka.png",hideInToc:!0,title:"Loïc Frémont",srcSequence:"./pages/01_index.md"},note:"My name is Loïc Frémont, I'm a technical expert at Akawaka, a Sylius core team member and Monofony creator.",index:1,start:0,end:16,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/01_index.md",raw:`---
layout: image-right
image: /akawaka.png
hideInToc: true
---

# Loïc Frémont

* Technical Expert @Akawaka
* Core Team Member @Sylius
* Monofony creator

<!--
My name is Loïc Frémont, I'm a technical expert at Akawaka, a Sylius core team member and Monofony creator.
-->
`,title:"Loïc Frémont",level:1,content:`# Loïc Frémont

* Technical Expert @Akawaka
* Core Team Member @Sylius
* Monofony creator`,frontmatter:{layout:"image-right",image:"/akawaka.png",hideInToc:!0,title:"Loïc Frémont"},note:"My name is Loïc Frémont, I'm a technical expert at Akawaka, a Sylius core team member and Monofony creator.",index:0,start:0,end:16},inline:{raw:`---
src: ./pages/01_index.md
---
`,content:"",frontmatter:{},index:1,start:44,end:48},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/01_index.md",noteHTML:`<p>My name is Loïc Frémont, I'm a technical expert at Akawaka, a Sylius core team member and Monofony creator.</p>
`,id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:cD,meta:{class:"w-sm",srcSequence:"./pages/01_index.md",slide:{raw:`---
class: w-sm
---

<Toc maxDepth="1" />
`,content:'<Toc maxDepth="1" />',frontmatter:{class:"w-sm",srcSequence:"./pages/01_index.md"},index:2,start:16,end:22,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/01_index.md",raw:`---
class: w-sm
---

<Toc maxDepth="1" />
`,content:'<Toc maxDepth="1" />',frontmatter:{class:"w-sm"},index:1,start:16,end:22},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/01_index.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:mD,meta:{layout:"image-right",image:"/akawaka.png",title:"Akawaka",srcSequence:"./pages/02_akawaka.md",slide:{raw:null,title:"Akawaka",level:1,content:`# Akawaka

## Experts for your web projects & Sylius partner

We help you design and improve your projects:

<v-clicks>

*    We use clean architecture techniques via DDD methodologies for projects that stand the test of time,

*    A true quality approach through testing,

*    On a contract or fixed-price basis, to create and/or integrate teams and work in complete collaboration.

</v-clicks>`,frontmatter:{layout:"image-right",image:"/akawaka.png",title:"Akawaka",srcSequence:"./pages/02_akawaka.md"},index:3,start:0,end:21,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/02_akawaka.md",raw:`---
layout: image-right
image: /akawaka.png
---

# Akawaka

## Experts for your web projects & Sylius partner

We help you design and improve your projects:

<v-clicks>

*    We use clean architecture techniques via DDD methodologies for projects that stand the test of time,

*    A true quality approach through testing,

*    On a contract or fixed-price basis, to create and/or integrate teams and work in complete collaboration.

</v-clicks>
`,title:"Akawaka",level:1,content:`# Akawaka

## Experts for your web projects & Sylius partner

We help you design and improve your projects:

<v-clicks>

*    We use clean architecture techniques via DDD methodologies for projects that stand the test of time,

*    A true quality approach through testing,

*    On a contract or fixed-price basis, to create and/or integrate teams and work in complete collaboration.

</v-clicks>`,frontmatter:{layout:"image-right",image:"/akawaka.png",title:"Akawaka"},index:0,start:0,end:21},inline:{raw:`---
src: ./pages/02_akawaka.md
---
`,content:"",frontmatter:{},index:2,start:48,end:52},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/02_akawaka.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:BD,meta:{title:"Sylius technical history",srcSequence:"./pages/03_history.md",slide:{raw:null,title:"Sylius technical history",level:1,content:`# Sylius technical history

Back in 2013 - Before Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap2-users.jpeg"/>`,frontmatter:{title:"Sylius technical history",srcSequence:"./pages/03_history.md"},index:4,start:0,end:8,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`# Sylius technical history

Back in 2013 - Before Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap2-users.jpeg"/>
`,title:"Sylius technical history",level:1,content:`# Sylius technical history

Back in 2013 - Before Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap2-users.jpeg"/>`,frontmatter:{title:"Sylius technical history"},index:0,start:0,end:8},inline:{raw:`---
src: ./pages/03_history.md
---
`,content:"",frontmatter:{},index:3,start:52,end:56},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:wD,meta:{srcSequence:"./pages/03_history.md",slide:{raw:`
Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-users.jpeg"/>
`,content:`Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-users.jpeg"/>`,frontmatter:{srcSequence:"./pages/03_history.md"},index:5,start:9,end:16,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`
Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-users.jpeg"/>
`,content:`Back in 2013 - After Bootstrap 3 migration

<!-- https://github.com/Sylius/Sylius/pull/368 -->

<img class="w-200" src="/bootstrap3-users.jpeg"/>`,frontmatter:{},index:1,start:9,end:16},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:$D,meta:{srcSequence:"./pages/03_history.md",slide:{raw:`
Back in 2016 - Grids

<img class="w-150" src="/new_grids.png"/>

`,content:`Back in 2016 - Grids

<img class="w-150" src="/new_grids.png"/>`,frontmatter:{srcSequence:"./pages/03_history.md"},index:6,start:17,end:23,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`
Back in 2016 - Grids

<img class="w-150" src="/new_grids.png"/>

`,content:`Back in 2016 - Grids

<img class="w-150" src="/new_grids.png"/>`,frontmatter:{},index:2,start:17,end:23},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:ND,meta:{layout:"quote",srcSequence:"./pages/03_history.md",slide:{raw:`---
layout: quote
---

Paweł Jędrzejewski wrote

<v-clicks>

* Standalone Grid component, decoupled from persistence with a system of drivers.
* Standalone SyliusGridBundle, decoupled from SyliusResourceBundle.
* SyliusResourceBundle does not force you to use GridBundle.
* Doctrine ORM and Doctrine DBAL drivers for SyliusGridBundle, later I plan to have ElasticSearchDriver.
* Super easy to introduce new drivers, filters, columns and customize rendering of every single part;

</v-clicks>

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|4-7|8-9|10-19|11-12|14-15|14-15,18-19|17|20-23})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            driver:)

[//]: # (                name: doctrine/orm)

[//]: # (                options:)

[//]: # (                    class: '%sylius.model.tax_category.class%')

[//]: # (            sorting:)

[//]: # (                name: asc)

[//]: # (            fields:)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (                nameAndDescription:)

[//]: # (                    type: twig)

[//]: # (                    label: sylius.ui.name)

[//]: # (                    path: .)

[//]: # (                    options:)

[//]: # (                        template: SyliusAdminBundle:Grid/Field:nameAndDescription.html.twig)

[//]: # (            filters:)

[//]: # (                name:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.name)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|5-13|6|7-8|9|10-11|12-13})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            # ...)

[//]: # (            actions:)

[//]: # (                main:)

[//]: # (                    create:)

[//]: # (                        type: create)

[//]: # (                item:)

[//]: # (                    update:)

[//]: # (                        type: update)

[//]: # (                    delete:)

[//]: # (                        type: delete)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|5|6|8})

[//]: # (sylius_admin_tax_category:)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: admin)

[//]: # (        templates: SyliusAdminBundle:Crud)

[//]: # (        except: ['show'])

[//]: # (        redirect: update)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (        vars:)

[//]: # (          all:)

[//]: # (              subheader: sylius.ui.manage_taxation_of_your_products)

[//]: # (              templates:)

[//]: # (                  form: SyliusAdminBundle:TaxCategory:_form.html.twig)

[//]: # (          index:)

[//]: # (              icon: tags)

[//]: # (    type: sylius.resource)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid &#40;on API&#41;)

[//]: # ()
[//]: # (\`\`\`yaml)

[//]: # (sylius_api_tax_category:)

[//]: # (    resource: '@SyliusApiBundle/Resources/config/routing/tax_category.yml')

[//]: # (    prefix: /tax-categories)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: api)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (    type: sylius.resource_api)

[//]: # (\`\`\`)
`,content:`Paweł Jędrzejewski wrote

<v-clicks>

* Standalone Grid component, decoupled from persistence with a system of drivers.
* Standalone SyliusGridBundle, decoupled from SyliusResourceBundle.
* SyliusResourceBundle does not force you to use GridBundle.
* Doctrine ORM and Doctrine DBAL drivers for SyliusGridBundle, later I plan to have ElasticSearchDriver.
* Super easy to introduce new drivers, filters, columns and customize rendering of every single part;

</v-clicks>

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|4-7|8-9|10-19|11-12|14-15|14-15,18-19|17|20-23})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            driver:)

[//]: # (                name: doctrine/orm)

[//]: # (                options:)

[//]: # (                    class: '%sylius.model.tax_category.class%')

[//]: # (            sorting:)

[//]: # (                name: asc)

[//]: # (            fields:)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (                nameAndDescription:)

[//]: # (                    type: twig)

[//]: # (                    label: sylius.ui.name)

[//]: # (                    path: .)

[//]: # (                    options:)

[//]: # (                        template: SyliusAdminBundle:Grid/Field:nameAndDescription.html.twig)

[//]: # (            filters:)

[//]: # (                name:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.name)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|5-13|6|7-8|9|10-11|12-13})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            # ...)

[//]: # (            actions:)

[//]: # (                main:)

[//]: # (                    create:)

[//]: # (                        type: create)

[//]: # (                item:)

[//]: # (                    update:)

[//]: # (                        type: update)

[//]: # (                    delete:)

[//]: # (                        type: delete)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|5|6|8})

[//]: # (sylius_admin_tax_category:)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: admin)

[//]: # (        templates: SyliusAdminBundle:Crud)

[//]: # (        except: ['show'])

[//]: # (        redirect: update)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (        vars:)

[//]: # (          all:)

[//]: # (              subheader: sylius.ui.manage_taxation_of_your_products)

[//]: # (              templates:)

[//]: # (                  form: SyliusAdminBundle:TaxCategory:_form.html.twig)

[//]: # (          index:)

[//]: # (              icon: tags)

[//]: # (    type: sylius.resource)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid &#40;on API&#41;)

[//]: # ()
[//]: # (\`\`\`yaml)

[//]: # (sylius_api_tax_category:)

[//]: # (    resource: '@SyliusApiBundle/Resources/config/routing/tax_category.yml')

[//]: # (    prefix: /tax-categories)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: api)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (    type: sylius.resource_api)

[//]: # (\`\`\`)`,frontmatter:{layout:"quote",srcSequence:"./pages/03_history.md"},index:7,start:23,end:205,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`---
layout: quote
---

Paweł Jędrzejewski wrote

<v-clicks>

* Standalone Grid component, decoupled from persistence with a system of drivers.
* Standalone SyliusGridBundle, decoupled from SyliusResourceBundle.
* SyliusResourceBundle does not force you to use GridBundle.
* Doctrine ORM and Doctrine DBAL drivers for SyliusGridBundle, later I plan to have ElasticSearchDriver.
* Super easy to introduce new drivers, filters, columns and customize rendering of every single part;

</v-clicks>

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|4-7|8-9|10-19|11-12|14-15|14-15,18-19|17|20-23})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            driver:)

[//]: # (                name: doctrine/orm)

[//]: # (                options:)

[//]: # (                    class: '%sylius.model.tax_category.class%')

[//]: # (            sorting:)

[//]: # (                name: asc)

[//]: # (            fields:)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (                nameAndDescription:)

[//]: # (                    type: twig)

[//]: # (                    label: sylius.ui.name)

[//]: # (                    path: .)

[//]: # (                    options:)

[//]: # (                        template: SyliusAdminBundle:Grid/Field:nameAndDescription.html.twig)

[//]: # (            filters:)

[//]: # (                name:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.name)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|5-13|6|7-8|9|10-11|12-13})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            # ...)

[//]: # (            actions:)

[//]: # (                main:)

[//]: # (                    create:)

[//]: # (                        type: create)

[//]: # (                item:)

[//]: # (                    update:)

[//]: # (                        type: update)

[//]: # (                    delete:)

[//]: # (                        type: delete)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|5|6|8})

[//]: # (sylius_admin_tax_category:)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: admin)

[//]: # (        templates: SyliusAdminBundle:Crud)

[//]: # (        except: ['show'])

[//]: # (        redirect: update)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (        vars:)

[//]: # (          all:)

[//]: # (              subheader: sylius.ui.manage_taxation_of_your_products)

[//]: # (              templates:)

[//]: # (                  form: SyliusAdminBundle:TaxCategory:_form.html.twig)

[//]: # (          index:)

[//]: # (              icon: tags)

[//]: # (    type: sylius.resource)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid &#40;on API&#41;)

[//]: # ()
[//]: # (\`\`\`yaml)

[//]: # (sylius_api_tax_category:)

[//]: # (    resource: '@SyliusApiBundle/Resources/config/routing/tax_category.yml')

[//]: # (    prefix: /tax-categories)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: api)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (    type: sylius.resource_api)

[//]: # (\`\`\`)
`,content:`Paweł Jędrzejewski wrote

<v-clicks>

* Standalone Grid component, decoupled from persistence with a system of drivers.
* Standalone SyliusGridBundle, decoupled from SyliusResourceBundle.
* SyliusResourceBundle does not force you to use GridBundle.
* Doctrine ORM and Doctrine DBAL drivers for SyliusGridBundle, later I plan to have ElasticSearchDriver.
* Super easy to introduce new drivers, filters, columns and customize rendering of every single part;

</v-clicks>

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|4-7|8-9|10-19|11-12|14-15|14-15,18-19|17|20-23})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            driver:)

[//]: # (                name: doctrine/orm)

[//]: # (                options:)

[//]: # (                    class: '%sylius.model.tax_category.class%')

[//]: # (            sorting:)

[//]: # (                name: asc)

[//]: # (            fields:)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (                nameAndDescription:)

[//]: # (                    type: twig)

[//]: # (                    label: sylius.ui.name)

[//]: # (                    path: .)

[//]: # (                    options:)

[//]: # (                        template: SyliusAdminBundle:Grid/Field:nameAndDescription.html.twig)

[//]: # (            filters:)

[//]: # (                name:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.name)

[//]: # (                code:)

[//]: # (                    type: string)

[//]: # (                    label: sylius.ui.code)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Grid definition)

[//]: # ()
[//]: # (\`\`\`yaml {all|5-13|6|7-8|9|10-11|12-13})

[//]: # (sylius_grid:)

[//]: # (    grids:)

[//]: # (        sylius_admin_tax_category:)

[//]: # (            # ...)

[//]: # (            actions:)

[//]: # (                main:)

[//]: # (                    create:)

[//]: # (                        type: create)

[//]: # (                item:)

[//]: # (                    update:)

[//]: # (                        type: update)

[//]: # (                    delete:)

[//]: # (                        type: delete)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid)

[//]: # ()
[//]: # (\`\`\`yaml {all|3|5|6|8})

[//]: # (sylius_admin_tax_category:)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: admin)

[//]: # (        templates: SyliusAdminBundle:Crud)

[//]: # (        except: ['show'])

[//]: # (        redirect: update)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (        vars:)

[//]: # (          all:)

[//]: # (              subheader: sylius.ui.manage_taxation_of_your_products)

[//]: # (              templates:)

[//]: # (                  form: SyliusAdminBundle:TaxCategory:_form.html.twig)

[//]: # (          index:)

[//]: # (              icon: tags)

[//]: # (    type: sylius.resource)

[//]: # (\`\`\`)

[//]: # (---)

[//]: # ()
[//]: # (Back in 2016 - Route with grid &#40;on API&#41;)

[//]: # ()
[//]: # (\`\`\`yaml)

[//]: # (sylius_api_tax_category:)

[//]: # (    resource: '@SyliusApiBundle/Resources/config/routing/tax_category.yml')

[//]: # (    prefix: /tax-categories)

[//]: # (    resource: |)

[//]: # (        alias: sylius.tax_category)

[//]: # (        section: api)

[//]: # (        grid: sylius_admin_tax_category)

[//]: # (    type: sylius.resource_api)

[//]: # (\`\`\`)`,frontmatter:{layout:"quote"},index:3,start:23,end:205},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:qD,meta:{layout:"cover",srcSequence:"./pages/03_history.md",slide:{raw:`---
layout: cover
---

1 month later...
`,content:"1 month later...",frontmatter:{layout:"cover",srcSequence:"./pages/03_history.md"},index:8,start:205,end:211,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`---
layout: cover
---

1 month later...
`,content:"1 month later...",frontmatter:{layout:"cover"},index:4,start:205,end:211},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:WD,meta:{srcSequence:"./pages/03_history.md",slide:{raw:`
Back in 2016 - Semantic UI & Generic templates 

<img class="w-150" src="/generic_templates.png"/>
`,content:`Back in 2016 - Semantic UI & Generic templates 

<img class="w-150" src="/generic_templates.png"/>`,frontmatter:{srcSequence:"./pages/03_history.md"},index:9,start:212,end:217,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`
Back in 2016 - Semantic UI & Generic templates 

<img class="w-150" src="/generic_templates.png"/>
`,content:`Back in 2016 - Semantic UI & Generic templates 

<img class="w-150" src="/generic_templates.png"/>`,frontmatter:{},index:5,start:212,end:217},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:XD,meta:{layout:"quote",srcSequence:"./pages/03_history.md",slide:{raw:`---
layout: quote
---

Paweł Jędrzejewski wrote

I started preparing generic __CRUD templates with AdminLTE__ and it is far from perfect. 
The css/html is not that nice and __Bootstrap is getting slowly out-dated__. 
I discovered http://semantic-ui.com/, which provides tons of components out of the box that we can find useful both for admin and shop interface. 
Just have a look around the docs. 
Also it is actually much easier to learn.
__These components give us a lot of power both for Sylius itself as well as for customizing the admin/shop__.
`,content:`Paweł Jędrzejewski wrote

I started preparing generic __CRUD templates with AdminLTE__ and it is far from perfect. 
The css/html is not that nice and __Bootstrap is getting slowly out-dated__. 
I discovered http://semantic-ui.com/, which provides tons of components out of the box that we can find useful both for admin and shop interface. 
Just have a look around the docs. 
Also it is actually much easier to learn.
__These components give us a lot of power both for Sylius itself as well as for customizing the admin/shop__.`,frontmatter:{layout:"quote",srcSequence:"./pages/03_history.md"},index:10,start:217,end:230,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`---
layout: quote
---

Paweł Jędrzejewski wrote

I started preparing generic __CRUD templates with AdminLTE__ and it is far from perfect. 
The css/html is not that nice and __Bootstrap is getting slowly out-dated__. 
I discovered http://semantic-ui.com/, which provides tons of components out of the box that we can find useful both for admin and shop interface. 
Just have a look around the docs. 
Also it is actually much easier to learn.
__These components give us a lot of power both for Sylius itself as well as for customizing the admin/shop__.
`,content:`Paweł Jędrzejewski wrote

I started preparing generic __CRUD templates with AdminLTE__ and it is far from perfect. 
The css/html is not that nice and __Bootstrap is getting slowly out-dated__. 
I discovered http://semantic-ui.com/, which provides tons of components out of the box that we can find useful both for admin and shop interface. 
Just have a look around the docs. 
Also it is actually much easier to learn.
__These components give us a lot of power both for Sylius itself as well as for customizing the admin/shop__.`,frontmatter:{layout:"quote"},index:6,start:217,end:230},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:uC,meta:{srcSequence:"./pages/03_history.md",slide:{raw:`
\`\`\`twig {all|2|4-5|10-11|13-22|15-16|17-18}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import 'SyliusUiBundle:Macro:headers.html.twig' as headers %}
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.new_'~metadata.name) %}

{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}
{% form_theme form 'SyliusUiBundle:Form:theme.html.twig' %}

{% block content %}
{{ headers.default(header|trans, configuration.vars.icon|default('plus'), configuration.vars.subheader|default(null)|trans) }}

{{ form_start(form, {'action': path(configuration.getRouteName('create')), 'attr': {'class': 'ui form', 'novalidate': 'novalidate'}}) }}
    <div class="ui segment">
        {% if configuration.vars.templates.form is defined %}
            {% include configuration.vars.templates.form %}
        {% else %}
            {{ form_widget(form) }}
        {% endif %}
        {% include 'SyliusUiBundle:Form:_create.html.twig' %}
    </div>
{{ form_end(form) }}
{% endblock %}
\`\`\`
`,content:`\`\`\`twig {all|2|4-5|10-11|13-22|15-16|17-18}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import 'SyliusUiBundle:Macro:headers.html.twig' as headers %}
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.new_'~metadata.name) %}

{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}
{% form_theme form 'SyliusUiBundle:Form:theme.html.twig' %}

{% block content %}
{{ headers.default(header|trans, configuration.vars.icon|default('plus'), configuration.vars.subheader|default(null)|trans) }}

{{ form_start(form, {'action': path(configuration.getRouteName('create')), 'attr': {'class': 'ui form', 'novalidate': 'novalidate'}}) }}
    <div class="ui segment">
        {% if configuration.vars.templates.form is defined %}
            {% include configuration.vars.templates.form %}
        {% else %}
            {{ form_widget(form) }}
        {% endif %}
        {% include 'SyliusUiBundle:Form:_create.html.twig' %}
    </div>
{{ form_end(form) }}
{% endblock %}
\`\`\``,frontmatter:{srcSequence:"./pages/03_history.md"},index:11,start:231,end:258,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`
\`\`\`twig {all|2|4-5|10-11|13-22|15-16|17-18}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import 'SyliusUiBundle:Macro:headers.html.twig' as headers %}
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.new_'~metadata.name) %}

{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}
{% form_theme form 'SyliusUiBundle:Form:theme.html.twig' %}

{% block content %}
{{ headers.default(header|trans, configuration.vars.icon|default('plus'), configuration.vars.subheader|default(null)|trans) }}

{{ form_start(form, {'action': path(configuration.getRouteName('create')), 'attr': {'class': 'ui form', 'novalidate': 'novalidate'}}) }}
    <div class="ui segment">
        {% if configuration.vars.templates.form is defined %}
            {% include configuration.vars.templates.form %}
        {% else %}
            {{ form_widget(form) }}
        {% endif %}
        {% include 'SyliusUiBundle:Form:_create.html.twig' %}
    </div>
{{ form_end(form) }}
{% endblock %}
\`\`\`
`,content:`\`\`\`twig {all|2|4-5|10-11|13-22|15-16|17-18}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/create.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import 'SyliusUiBundle:Macro:headers.html.twig' as headers %}
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.new_'~metadata.name) %}

{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}
{% form_theme form 'SyliusUiBundle:Form:theme.html.twig' %}

{% block content %}
{{ headers.default(header|trans, configuration.vars.icon|default('plus'), configuration.vars.subheader|default(null)|trans) }}

{{ form_start(form, {'action': path(configuration.getRouteName('create')), 'attr': {'class': 'ui form', 'novalidate': 'novalidate'}}) }}
    <div class="ui segment">
        {% if configuration.vars.templates.form is defined %}
            {% include configuration.vars.templates.form %}
        {% else %}
            {{ form_widget(form) }}
        {% endif %}
        {% include 'SyliusUiBundle:Form:_create.html.twig' %}
    </div>
{{ form_end(form) }}
{% endblock %}
\`\`\``,frontmatter:{},index:7,start:231,end:258},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:fC,meta:{srcSequence:"./pages/03_history.md",slide:{raw:`
\`\`\`twig {all|2|6|10-19|21-25}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import configuration.vars.templates.list as list %}
<!-- ... -->
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}

{% block content %}
<div class="ui stackable two column grid">
    <div class="column">
        {{ headers.default(header|trans, configuration.vars.icon|default('list'), configuration.vars.subheader|default(null)|trans) }}
    </div>
    <div class="middle aligned column">
        <div class="ui right floated buttons">
            {{ buttons.create(path(configuration.getRouteName('create'))) }}
        </div>
    </div>
</div>

<div class="ui segment">
{{ pagination.render(resources) }}
{{ list.full(resources, configuration) }}
{{ pagination.render(resources) }}
</div>
{% endblock %}
\`\`\`

`,content:`\`\`\`twig {all|2|6|10-19|21-25}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import configuration.vars.templates.list as list %}
<!-- ... -->
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}

{% block content %}
<div class="ui stackable two column grid">
    <div class="column">
        {{ headers.default(header|trans, configuration.vars.icon|default('list'), configuration.vars.subheader|default(null)|trans) }}
    </div>
    <div class="middle aligned column">
        <div class="ui right floated buttons">
            {{ buttons.create(path(configuration.getRouteName('create'))) }}
        </div>
    </div>
</div>

<div class="ui segment">
{{ pagination.render(resources) }}
{{ list.full(resources, configuration) }}
{{ pagination.render(resources) }}
</div>
{% endblock %}
\`\`\``,frontmatter:{srcSequence:"./pages/03_history.md"},index:12,start:259,end:290,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`
\`\`\`twig {all|2|6|10-19|21-25}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import configuration.vars.templates.list as list %}
<!-- ... -->
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}

{% block content %}
<div class="ui stackable two column grid">
    <div class="column">
        {{ headers.default(header|trans, configuration.vars.icon|default('list'), configuration.vars.subheader|default(null)|trans) }}
    </div>
    <div class="middle aligned column">
        <div class="ui right floated buttons">
            {{ buttons.create(path(configuration.getRouteName('create'))) }}
        </div>
    </div>
</div>

<div class="ui segment">
{{ pagination.render(resources) }}
{{ list.full(resources, configuration) }}
{{ pagination.render(resources) }}
</div>
{% endblock %}
\`\`\`

`,content:`\`\`\`twig {all|2|6|10-19|21-25}
<!-- src/Sylius/Bundle/AdminBundle/Resources/views/Crud/index.html.twig -->
{% extends 'SyliusAdminBundle::layout.html.twig' %}

{% import configuration.vars.templates.list as list %}
<!-- ... -->
{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ parent() }} {{ header|trans }}{% endblock %}

{% block content %}
<div class="ui stackable two column grid">
    <div class="column">
        {{ headers.default(header|trans, configuration.vars.icon|default('list'), configuration.vars.subheader|default(null)|trans) }}
    </div>
    <div class="middle aligned column">
        <div class="ui right floated buttons">
            {{ buttons.create(path(configuration.getRouteName('create'))) }}
        </div>
    </div>
</div>

<div class="ui segment">
{{ pagination.render(resources) }}
{{ list.full(resources, configuration) }}
{{ pagination.render(resources) }}
</div>
{% endblock %}
\`\`\``,frontmatter:{},index:8,start:259,end:290},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:AC,meta:{srcSequence:"./pages/03_history.md",slide:{raw:`
Back in 2019 - Templates events

<img class="w-150" src="/template_events.png"/>
`,content:`Back in 2019 - Templates events

<img class="w-150" src="/template_events.png"/>`,frontmatter:{srcSequence:"./pages/03_history.md"},index:13,start:291,end:296,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`
Back in 2019 - Templates events

<img class="w-150" src="/template_events.png"/>
`,content:`Back in 2019 - Templates events

<img class="w-150" src="/template_events.png"/>`,frontmatter:{},index:9,start:291,end:296},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:DC,meta:{layout:"quote",srcSequence:"./pages/03_history.md",slide:{raw:`---
layout: quote
---

Kamil Kokot wrote

This PR aims to __replace our current template events system using Sonata Block bundle__ and improve both the __developer experience__ using it and __Sylius extendability__, especially in the light of __Sylius Store__ which has been recently opened.
`,content:`Kamil Kokot wrote

This PR aims to __replace our current template events system using Sonata Block bundle__ and improve both the __developer experience__ using it and __Sylius extendability__, especially in the light of __Sylius Store__ which has been recently opened.`,frontmatter:{layout:"quote",srcSequence:"./pages/03_history.md"},index:14,start:296,end:304,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",raw:`---
layout: quote
---

Kamil Kokot wrote

This PR aims to __replace our current template events system using Sonata Block bundle__ and improve both the __developer experience__ using it and __Sylius extendability__, especially in the light of __Sylius Store__ which has been recently opened.
`,content:`Kamil Kokot wrote

This PR aims to __replace our current template events system using Sonata Block bundle__ and improve both the __developer experience__ using it and __Sylius extendability__, especially in the light of __Sylius Store__ which has been recently opened.`,frontmatter:{layout:"quote"},index:10,start:296,end:304},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/03_history.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:xC,meta:{layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",title:"Benefits & Drawbacks of Monofony",srcSequence:"./pages/04_monofony.md",slide:{raw:null,title:"Benefits & Drawbacks of Monofony",level:1,content:`# Benefits & Drawbacks of Monofony

<v-clicks>

## Benefits

</v-clicks>

<v-clicks>

* Bootstrapping a modern application on top of Symfony
* Leveraging Sylius bundles and components
* Helping you to focus more on what truly matters to your use-case

</v-clicks>`,frontmatter:{layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",title:"Benefits & Drawbacks of Monofony",srcSequence:"./pages/04_monofony.md"},index:15,start:0,end:21,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",raw:`---
layout: image-right
image: https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png
---

# Benefits & Drawbacks of Monofony

<v-clicks>

## Benefits

</v-clicks>

<v-clicks>

* Bootstrapping a modern application on top of Symfony
* Leveraging Sylius bundles and components
* Helping you to focus more on what truly matters to your use-case

</v-clicks>
`,title:"Benefits & Drawbacks of Monofony",level:1,content:`# Benefits & Drawbacks of Monofony

<v-clicks>

## Benefits

</v-clicks>

<v-clicks>

* Bootstrapping a modern application on top of Symfony
* Leveraging Sylius bundles and components
* Helping you to focus more on what truly matters to your use-case

</v-clicks>`,frontmatter:{layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",title:"Benefits & Drawbacks of Monofony"},index:0,start:0,end:21},inline:{raw:`---
src: ./pages/04_monofony.md
---
`,content:"",frontmatter:{},index:4,start:56,end:60},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:OC,meta:{hideInToc:!0,srcSequence:"./pages/04_monofony.md",slide:{raw:`---
hideInToc: true
---

# Installation

\`\`\`shell
$ composer create-project monofony/skeleton project_name
\`\`\`

You can also add some basic endpoints with optional api-pack
\`\`\`shell
$ composer require monofony/api-pack
\`\`\`


<!--
To set up the project, there is a skeleton which uses Flex to copy some basic features into your project.
-->
`,title:"Installation",level:1,content:"# Installation\n\n```shell\n$ composer create-project monofony/skeleton project_name\n```\n\nYou can also add some basic endpoints with optional api-pack\n```shell\n$ composer require monofony/api-pack\n```",frontmatter:{hideInToc:!0,srcSequence:"./pages/04_monofony.md"},note:"To set up the project, there is a skeleton which uses Flex to copy some basic features into your project.",index:16,start:21,end:41,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",raw:`---
hideInToc: true
---

# Installation

\`\`\`shell
$ composer create-project monofony/skeleton project_name
\`\`\`

You can also add some basic endpoints with optional api-pack
\`\`\`shell
$ composer require monofony/api-pack
\`\`\`


<!--
To set up the project, there is a skeleton which uses Flex to copy some basic features into your project.
-->
`,title:"Installation",level:1,content:"# Installation\n\n```shell\n$ composer create-project monofony/skeleton project_name\n```\n\nYou can also add some basic endpoints with optional api-pack\n```shell\n$ composer require monofony/api-pack\n```",frontmatter:{hideInToc:!0},note:"To set up the project, there is a skeleton which uses Flex to copy some basic features into your project.",index:1,start:21,end:41},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",noteHTML:`<p>To set up the project, there is a skeleton which uses Flex to copy some basic features into your project.</p>
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:LC,meta:{layout:"image",image:"/dashboard.png",transition:"fade",srcSequence:"./pages/04_monofony.md",slide:{raw:`---
layout: image
image: /dashboard.png
transition: fade
---

<!--
The installation comes with an admin pack.
It contains a minimal dashboard and some basic CRUDs to manage administrators and customers.

All these features can be customized, improved or simply removed.
-->
`,content:"",frontmatter:{layout:"image",image:"/dashboard.png",transition:"fade",srcSequence:"./pages/04_monofony.md"},note:`The installation comes with an admin pack.
It contains a minimal dashboard and some basic CRUDs to manage administrators and customers.

All these features can be customized, improved or simply removed.`,index:17,start:41,end:54,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",raw:`---
layout: image
image: /dashboard.png
transition: fade
---

<!--
The installation comes with an admin pack.
It contains a minimal dashboard and some basic CRUDs to manage administrators and customers.

All these features can be customized, improved or simply removed.
-->
`,content:"",frontmatter:{layout:"image",image:"/dashboard.png",transition:"fade"},note:`The installation comes with an admin pack.
It contains a minimal dashboard and some basic CRUDs to manage administrators and customers.

All these features can be customized, improved or simply removed.`,index:2,start:41,end:54},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",noteHTML:`<p>The installation comes with an admin pack.
It contains a minimal dashboard and some basic CRUDs to manage administrators and customers.</p>
<p>All these features can be customized, improved or simply removed.</p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:RC,meta:{layout:"image",image:"/administrators.png",srcSequence:"./pages/04_monofony.md",slide:{raw:`---
layout: image
image: /administrators.png
---

<!--
Here is a grid of administrators.

Does everybody know what is a Grid?

Basically, a grid is an object which contains the table data, the filters and some action buttons, such as the edit, delete and also the create buttons.
-->
`,content:"",frontmatter:{layout:"image",image:"/administrators.png",srcSequence:"./pages/04_monofony.md"},note:`Here is a grid of administrators.

Does everybody know what is a Grid?

Basically, a grid is an object which contains the table data, the filters and some action buttons, such as the edit, delete and also the create buttons.`,index:18,start:54,end:67,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",raw:`---
layout: image
image: /administrators.png
---

<!--
Here is a grid of administrators.

Does everybody know what is a Grid?

Basically, a grid is an object which contains the table data, the filters and some action buttons, such as the edit, delete and also the create buttons.
-->
`,content:"",frontmatter:{layout:"image",image:"/administrators.png"},note:`Here is a grid of administrators.

Does everybody know what is a Grid?

Basically, a grid is an object which contains the table data, the filters and some action buttons, such as the edit, delete and also the create buttons.`,index:3,start:54,end:67},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",noteHTML:`<p>Here is a grid of administrators.</p>
<p>Does everybody know what is a Grid?</p>
<p>Basically, a grid is an object which contains the table data, the filters and some action buttons, such as the edit, delete and also the create buttons.</p>
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:HC,meta:{layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",srcSequence:"./pages/04_monofony.md",slide:{raw:`---
layout: image-right
image: https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png
---

## Drawbacks

<v-clicks>

* Hard to setup on existing applications
* Depends on some Sylius packages from E-commerce repository
* Lot of codes are copied into your application with Flex

</v-clicks>
`,title:"Drawbacks",level:2,content:`## Drawbacks

<v-clicks>

* Hard to setup on existing applications
* Depends on some Sylius packages from E-commerce repository
* Lot of codes are copied into your application with Flex

</v-clicks>`,frontmatter:{layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png",srcSequence:"./pages/04_monofony.md"},index:19,start:67,end:82,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",raw:`---
layout: image-right
image: https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png
---

## Drawbacks

<v-clicks>

* Hard to setup on existing applications
* Depends on some Sylius packages from E-commerce repository
* Lot of codes are copied into your application with Flex

</v-clicks>
`,title:"Drawbacks",level:2,content:`## Drawbacks

<v-clicks>

* Hard to setup on existing applications
* Depends on some Sylius packages from E-commerce repository
* Lot of codes are copied into your application with Flex

</v-clicks>`,frontmatter:{layout:"image-right",image:"https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png"},index:4,start:67,end:82},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/04_monofony.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:YC,meta:{layout:"center",title:"Sylius  {Stack} - Nowadays",srcSequence:"./pages/05_sylius_stack.md",slide:{raw:null,title:"Sylius  {Stack} - Nowadays",level:1,content:`<div align="center">

# Sylius  {Stack} - Nowadays

To The Rescue

<img align="center" src="https://i.giphy.com/6IanN6Nqj0JFK.webp"/>

</div>`,frontmatter:{layout:"center",title:"Sylius  {Stack} - Nowadays",srcSequence:"./pages/05_sylius_stack.md"},index:20,start:0,end:13,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`---
layout: center
---
<div align="center">

# Sylius  {Stack} - Nowadays

To The Rescue

<img align="center" src="https://i.giphy.com/6IanN6Nqj0JFK.webp"/>

</div>
`,title:"Sylius  {Stack} - Nowadays",level:1,content:`<div align="center">

# Sylius  {Stack} - Nowadays

To The Rescue

<img align="center" src="https://i.giphy.com/6IanN6Nqj0JFK.webp"/>

</div>`,frontmatter:{layout:"center",title:"Sylius  {Stack} - Nowadays"},index:0,start:0,end:13},inline:{raw:`---
src: ./pages/05_sylius_stack.md
---
`,content:"",frontmatter:{},index:5,start:60,end:64},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:eb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
## Admin UI

<img src="/admin_ui_grids.png"/>
`,title:"Admin UI",level:2,content:`## Admin UI

<img src="/admin_ui_grids.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:21,start:14,end:19,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
## Admin UI

<img src="/admin_ui_grids.png"/>
`,title:"Admin UI",level:2,content:`## Admin UI

<img src="/admin_ui_grids.png"/>`,frontmatter:{},index:1,start:14,end:19},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:lb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Searching menu items in sidebar

<img src="/admin_ui_search.png"/>
`,content:`Searching menu items in sidebar

<img src="/admin_ui_search.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:22,start:20,end:25,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Searching menu items in sidebar

<img src="/admin_ui_search.png"/>
`,content:`Searching menu items in sidebar

<img src="/admin_ui_search.png"/>`,frontmatter:{},index:2,start:20,end:25},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:pb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Filtering grid data

<img src="/admin_ui_filters.png"/>
`,content:`Filtering grid data

<img src="/admin_ui_filters.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:23,start:26,end:31,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Filtering grid data

<img src="/admin_ui_filters.png"/>
`,content:`Filtering grid data

<img src="/admin_ui_filters.png"/>`,frontmatter:{},index:3,start:26,end:31},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:mb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Deleting grid item

<img src="/admin_ui_delete.png"/>
`,content:`Deleting grid item

<img src="/admin_ui_delete.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:24,start:32,end:37,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Deleting grid item

<img src="/admin_ui_delete.png"/>
`,content:`Deleting grid item

<img src="/admin_ui_delete.png"/>`,frontmatter:{},index:4,start:32,end:37},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:vb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Deleting multiple grid items

<img src="/admin_ui_bulk_delete.png"/>
`,content:`Deleting multiple grid items

<img src="/admin_ui_bulk_delete.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:25,start:38,end:43,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Deleting multiple grid items

<img src="/admin_ui_bulk_delete.png"/>
`,content:`Deleting multiple grid items

<img src="/admin_ui_bulk_delete.png"/>`,frontmatter:{},index:5,start:38,end:43},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:bb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Sorting grid data

<img src="/admin_ui_sorting.png"/>
`,content:`Sorting grid data

<img src="/admin_ui_sorting.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:26,start:44,end:49,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Sorting grid data

<img src="/admin_ui_sorting.png"/>
`,content:`Sorting grid data

<img src="/admin_ui_sorting.png"/>`,frontmatter:{},index:6,start:44,end:49},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Fb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Paginating grid data

<img src="/admin_ui_pagination.png"/>
`,content:`Paginating grid data

<img src="/admin_ui_pagination.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:27,start:50,end:55,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Paginating grid data

<img src="/admin_ui_pagination.png"/>
`,content:`Paginating grid data

<img src="/admin_ui_pagination.png"/>`,frontmatter:{},index:7,start:50,end:55},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Pb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Creating new item

<img src="/admin_ui_create.png"/>
`,content:`Creating new item

<img src="/admin_ui_create.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:28,start:56,end:61,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Creating new item

<img src="/admin_ui_create.png"/>
`,content:`Creating new item

<img src="/admin_ui_create.png"/>`,frontmatter:{},index:8,start:56,end:61},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Mb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Editing existing item

<img src="/admin_ui_update.png"/>
`,content:`Editing existing item

<img src="/admin_ui_update.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:29,start:62,end:67,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Editing existing item

<img src="/admin_ui_update.png"/>
`,content:`Editing existing item

<img src="/admin_ui_update.png"/>`,frontmatter:{},index:9,start:62,end:67},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Vb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Configure your resource

\`\`\`php {all|10|12|13|15-21}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use App\\Repository\\BookRepository;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;
use Sylius\\Resource\\Metadata\\AsResource;
// ...

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource(
    section: 'admin',
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    pluralName: 'library',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: BookGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Book implements ResourceInterface
{
    // ...
}
\`\`\`
`,content:`Configure your resource

\`\`\`php {all|10|12|13|15-21}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use App\\Repository\\BookRepository;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;
use Sylius\\Resource\\Metadata\\AsResource;
// ...

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource(
    section: 'admin',
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    pluralName: 'library',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: BookGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Book implements ResourceInterface
{
    // ...
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:30,start:68,end:100,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Configure your resource

\`\`\`php {all|10|12|13|15-21}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use App\\Repository\\BookRepository;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;
use Sylius\\Resource\\Metadata\\AsResource;
// ...

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource(
    section: 'admin',
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    pluralName: 'library',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: BookGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Book implements ResourceInterface
{
    // ...
}
\`\`\`
`,content:`Configure your resource

\`\`\`php {all|10|12|13|15-21}
namespace App\\Entity;

use App\\Grid\\BookGrid;
use App\\Repository\\BookRepository;
use Sylius\\Component\\Resource\\Model\\ResourceInterface;
use Sylius\\Resource\\Metadata\\AsResource;
// ...

#[ORM\\Entity(repositoryClass: BookRepository::class)]
#[AsResource(
    section: 'admin',
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    pluralName: 'library',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: BookGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Book implements ResourceInterface
{
    // ...
}
\`\`\``,frontmatter:{},index:10,start:68,end:100},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Kb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Generic index template

\`\`\`twig {all|1|4-7|9-10|12-14|16-19|21-25}
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'index' with { _prefixes: prefixes, metadata, resources } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'index#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'index#javascripts' with { _prefixes: prefixes } %}
{% endblock %}
\`\`\`
`,content:`Generic index template

\`\`\`twig {all|1|4-7|9-10|12-14|16-19|21-25}
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'index' with { _prefixes: prefixes, metadata, resources } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'index#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'index#javascripts' with { _prefixes: prefixes } %}
{% endblock %}
\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:31,start:101,end:131,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Generic index template

\`\`\`twig {all|1|4-7|9-10|12-14|16-19|21-25}
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'index' with { _prefixes: prefixes, metadata, resources } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'index#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'index#javascripts' with { _prefixes: prefixes } %}
{% endblock %}
\`\`\`
`,content:`Generic index template

\`\`\`twig {all|1|4-7|9-10|12-14|16-19|21-25}
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'index' with { _prefixes: prefixes, metadata, resources } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'index#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'index#javascripts' with { _prefixes: prefixes } %}
{% endblock %}
\`\`\``,frontmatter:{},index:11,start:101,end:131},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Jb,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Twig hooks overview

\`\`\`yaml {all|2|3-4|5-6|7-9|11-12|13-14|15-17|18-20}
## Hook 'index'
'sylius_admin.common.index': 
    sidebar:
        template: '[...]/index/sidebar.html.twig'
    navbar:
        template: '[...]/index/navbar.html.twig'    
    content:
        template: '[...]/index/content.html.twig'
        # this template contains 'content' hook 
      
## hook 'content'        
'sylius_admin.common.index.content':    
    flashes: 
        template: '[...]/index/content/flashes.html.twig'
    header:
        template: '[...]/index/content/header.html.twig'
        # this template contains 'header' hook 
    grid:
        template: '[...]/index/content/grid.html.twig'
        # this template contains 'grid' hook
\`\`\`                `,title:"Hook 'index'",level:2,content:`Twig hooks overview

\`\`\`yaml {all|2|3-4|5-6|7-9|11-12|13-14|15-17|18-20}
## Hook 'index'
'sylius_admin.common.index': 
    sidebar:
        template: '[...]/index/sidebar.html.twig'
    navbar:
        template: '[...]/index/navbar.html.twig'    
    content:
        template: '[...]/index/content.html.twig'
        # this template contains 'content' hook 
      
## hook 'content'        
'sylius_admin.common.index.content':    
    flashes: 
        template: '[...]/index/content/flashes.html.twig'
    header:
        template: '[...]/index/content/header.html.twig'
        # this template contains 'header' hook 
    grid:
        template: '[...]/index/content/grid.html.twig'
        # this template contains 'grid' hook
\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:32,start:132,end:157,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Twig hooks overview

\`\`\`yaml {all|2|3-4|5-6|7-9|11-12|13-14|15-17|18-20}
## Hook 'index'
'sylius_admin.common.index': 
    sidebar:
        template: '[...]/index/sidebar.html.twig'
    navbar:
        template: '[...]/index/navbar.html.twig'    
    content:
        template: '[...]/index/content.html.twig'
        # this template contains 'content' hook 
      
## hook 'content'        
'sylius_admin.common.index.content':    
    flashes: 
        template: '[...]/index/content/flashes.html.twig'
    header:
        template: '[...]/index/content/header.html.twig'
        # this template contains 'header' hook 
    grid:
        template: '[...]/index/content/grid.html.twig'
        # this template contains 'grid' hook
\`\`\`                `,title:"Hook 'index'",level:2,content:`Twig hooks overview

\`\`\`yaml {all|2|3-4|5-6|7-9|11-12|13-14|15-17|18-20}
## Hook 'index'
'sylius_admin.common.index': 
    sidebar:
        template: '[...]/index/sidebar.html.twig'
    navbar:
        template: '[...]/index/navbar.html.twig'    
    content:
        template: '[...]/index/content.html.twig'
        # this template contains 'content' hook 
      
## hook 'content'        
'sylius_admin.common.index.content':    
    flashes: 
        template: '[...]/index/content/flashes.html.twig'
    header:
        template: '[...]/index/content/header.html.twig'
        # this template contains 'header' hook 
    grid:
        template: '[...]/index/content/grid.html.twig'
        # this template contains 'grid' hook
\`\`\``,frontmatter:{},index:12,start:132,end:157},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:t7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Debugging with profiler

<img src="/admin_ui_index_hooks_with_focus.png"/>
`,content:`Debugging with profiler

<img src="/admin_ui_index_hooks_with_focus.png"/>`,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:33,start:158,end:163,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Debugging with profiler

<img src="/admin_ui_index_hooks_with_focus.png"/>
`,content:`Debugging with profiler

<img src="/admin_ui_index_hooks_with_focus.png"/>`,frontmatter:{},index:13,start:158,end:163},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:i7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Hooking the header
<img src="/focused_hook.png" width="700"/>



\`\`\`yaml {all|1-6|8-13|2}
## Hook 'header'
'sylius_admin.[book/common].index.content.header':  
    breadcrumbs:
        template: '[...]/header/breadcrumbs.html.twig'
    title_block:
        template: '[...]/header/title_block.html.twig' 
        
## Hook 'title_block'
'sylius_admin.[book/common].index.content.header.title_block':
    title: 
        template: '[...]/header/title_block/title.html.twig'
    actions:
        template: '[...]/header/title_block/actions.html.twig'
\`\`\`    
`,title:"Hook 'header'",level:2,content:`Hooking the header
<img src="/focused_hook.png" width="700"/>



\`\`\`yaml {all|1-6|8-13|2}
## Hook 'header'
'sylius_admin.[book/common].index.content.header':  
    breadcrumbs:
        template: '[...]/header/breadcrumbs.html.twig'
    title_block:
        template: '[...]/header/title_block.html.twig' 
        
## Hook 'title_block'
'sylius_admin.[book/common].index.content.header.title_block':
    title: 
        template: '[...]/header/title_block/title.html.twig'
    actions:
        template: '[...]/header/title_block/actions.html.twig'
\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:34,start:164,end:186,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Hooking the header
<img src="/focused_hook.png" width="700"/>



\`\`\`yaml {all|1-6|8-13|2}
## Hook 'header'
'sylius_admin.[book/common].index.content.header':  
    breadcrumbs:
        template: '[...]/header/breadcrumbs.html.twig'
    title_block:
        template: '[...]/header/title_block.html.twig' 
        
## Hook 'title_block'
'sylius_admin.[book/common].index.content.header.title_block':
    title: 
        template: '[...]/header/title_block/title.html.twig'
    actions:
        template: '[...]/header/title_block/actions.html.twig'
\`\`\`    
`,title:"Hook 'header'",level:2,content:`Hooking the header
<img src="/focused_hook.png" width="700"/>



\`\`\`yaml {all|1-6|8-13|2}
## Hook 'header'
'sylius_admin.[book/common].index.content.header':  
    breadcrumbs:
        template: '[...]/header/breadcrumbs.html.twig'
    title_block:
        template: '[...]/header/title_block.html.twig' 
        
## Hook 'title_block'
'sylius_admin.[book/common].index.content.header.title_block':
    title: 
        template: '[...]/header/title_block/title.html.twig'
    actions:
        template: '[...]/header/title_block/actions.html.twig'
\`\`\``,frontmatter:{},index:14,start:164,end:186},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:m7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Hooking templates to add data to the book index template

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.book.index.content.header':
            description:
                template: 'book/index/content/header/description.html.twig'

\`\`\`

__Template__
\`\`\`html
<!-- templates/book/index/content/header/description.html.twig -->
<p class="mt-3">
    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.
</p>
<p>
    Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.
</p>

\`\`\`
`,title:"config/packages/twig_hooks.yaml",level:2,content:`Hooking templates to add data to the book index template

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.book.index.content.header':
            description:
                template: 'book/index/content/header/description.html.twig'

\`\`\`

__Template__
\`\`\`html
<!-- templates/book/index/content/header/description.html.twig -->
<p class="mt-3">
    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.
</p>
<p>
    Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.
</p>

\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:35,start:187,end:214,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Hooking templates to add data to the book index template

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.book.index.content.header':
            description:
                template: 'book/index/content/header/description.html.twig'

\`\`\`

__Template__
\`\`\`html
<!-- templates/book/index/content/header/description.html.twig -->
<p class="mt-3">
    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.
</p>
<p>
    Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.
</p>

\`\`\`
`,title:"config/packages/twig_hooks.yaml",level:2,content:`Hooking templates to add data to the book index template

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.book.index.content.header':
            description:
                template: 'book/index/content/header/description.html.twig'

\`\`\`

__Template__
\`\`\`html
<!-- templates/book/index/content/header/description.html.twig -->
<p class="mt-3">
    Aliquam arcu ligula, aliquet vitae malesuada quis, accumsan nec metus. Proin lacinia dolor eu convallis mollis. Phasellus quis laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum dolor est, vel tristique sapien sodales eget. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae viverra leo, vel consectetur tellus. Sed ipsum risus, pharetra id tincidunt et, ultricies at nisl. Morbi nec ultrices elit, vitae vehicula lectus. Nullam venenatis condimentum dui ut vehicula. Vivamus sit amet pharetra justo. Sed sit amet quam nisi.
</p>
<p>
    Etiam ac justo euismod, luctus urna sit amet, pellentesque risus. Vestibulum mi mi, ultrices quis arcu sed, suscipit efficitur metus. Quisque vitae ipsum arcu. Etiam sagittis mollis lacus eu posuere. Nam ac leo ex. Nam vitae dapibus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices, est at condimentum euismod, ligula tellus hendrerit ex, vel dictum orci augue at magna.
</p>

\`\`\``,frontmatter:{},index:15,start:187,end:214},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:A7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
<img src="/admin_ui_index_hooks_result.png"/>
`,content:'<img src="/admin_ui_index_hooks_result.png"/>',frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:36,start:215,end:218,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
<img src="/admin_ui_index_hooks_result.png"/>
`,content:'<img src="/admin_ui_index_hooks_result.png"/>',frontmatter:{},index:16,start:215,end:218},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:D7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
<img src="/admin_ui_index_hooks_result_debug.png"/>
`,content:'<img src="/admin_ui_index_hooks_result_debug.png"/>',frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:37,start:219,end:222,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
<img src="/admin_ui_index_hooks_result_debug.png"/>
`,content:'<img src="/admin_ui_index_hooks_result_debug.png"/>',frontmatter:{},index:17,start:219,end:222},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:F7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Hooking templates to change logo on the layout

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.common.component.sidebar':
            logo:
                template: 'shared/crud/common/sidebar/logo.html.twig'

\`\`\`

__Template__

\`\`\`html {all|2|5|6|7}
<!-- templates/shared/crud/common/sidebar/logo.html.twig -->
{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}

<h1 class="navbar-brand">
    <a href="{{ dashboard_path }}" style="text-decoration: none">
        <img src="{{ asset('afup-icon-color.png') }}" alt="AFUP logo" class="navbar-brand-image" />
        AFUP
    </a>
</h1>

\`\`\`
`,title:"config/packages/twig_hooks.yaml",level:2,content:`Hooking templates to change logo on the layout

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.common.component.sidebar':
            logo:
                template: 'shared/crud/common/sidebar/logo.html.twig'

\`\`\`

__Template__

\`\`\`html {all|2|5|6|7}
<!-- templates/shared/crud/common/sidebar/logo.html.twig -->
{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}

<h1 class="navbar-brand">
    <a href="{{ dashboard_path }}" style="text-decoration: none">
        <img src="{{ asset('afup-icon-color.png') }}" alt="AFUP logo" class="navbar-brand-image" />
        AFUP
    </a>
</h1>

\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:38,start:223,end:253,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Hooking templates to change logo on the layout

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.common.component.sidebar':
            logo:
                template: 'shared/crud/common/sidebar/logo.html.twig'

\`\`\`

__Template__

\`\`\`html {all|2|5|6|7}
<!-- templates/shared/crud/common/sidebar/logo.html.twig -->
{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}

<h1 class="navbar-brand">
    <a href="{{ dashboard_path }}" style="text-decoration: none">
        <img src="{{ asset('afup-icon-color.png') }}" alt="AFUP logo" class="navbar-brand-image" />
        AFUP
    </a>
</h1>

\`\`\`
`,title:"config/packages/twig_hooks.yaml",level:2,content:`Hooking templates to change logo on the layout

__Hook__

\`\`\`yaml {all|4|5|6}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        'sylius_admin.common.component.sidebar':
            logo:
                template: 'shared/crud/common/sidebar/logo.html.twig'

\`\`\`

__Template__

\`\`\`html {all|2|5|6|7}
<!-- templates/shared/crud/common/sidebar/logo.html.twig -->
{% set dashboard_path = hookable_metadata.context.routing.dashboard_path|default('/admin') %}

<h1 class="navbar-brand">
    <a href="{{ dashboard_path }}" style="text-decoration: none">
        <img src="{{ asset('afup-icon-color.png') }}" alt="AFUP logo" class="navbar-brand-image" />
        AFUP
    </a>
</h1>

\`\`\``,frontmatter:{},index:18,start:223,end:253},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:O7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
<img src="/admin_ui_logo_hooks_result.png" />
`,content:'<img src="/admin_ui_logo_hooks_result.png" />',frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:39,start:254,end:257,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
<img src="/admin_ui_logo_hooks_result.png" />
`,content:'<img src="/admin_ui_logo_hooks_result.png" />',frontmatter:{},index:19,start:254,end:257},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:N7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Generic create template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'create' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'create#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'create#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\`
`,content:`Generic create template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'create' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'create#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'create#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:40,start:258,end:289,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Generic create template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'create' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'create#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'create#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\`
`,content:`Generic create template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'create' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'create#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'create#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\``,frontmatter:{},index:20,start:258,end:289},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:G7,meta:{srcSequence:"./pages/05_sylius_stack.md",slide:{raw:`
Generic update template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'update' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'update#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'update#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\`
`,content:`Generic update template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'update' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'update#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'update#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\``,frontmatter:{srcSequence:"./pages/05_sylius_stack.md"},index:41,start:290,end:321,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",raw:`
Generic update template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'update' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'update#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'update#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\`
`,content:`Generic update template

\`\`\`twig
{% extends '@SyliusAdminUi/base.html.twig' %}

{% set metadata = resource_metadata|default(metadata) %}
{% set prefixes = [
    'sylius_admin.%resource_name%'|replace({'%resource_name%': resource_name|default(metadata.name)}),
    'sylius_admin.common'
] %}

{% set header = configuration.vars.header|default(metadata.applicationName~'.ui.'~metadata.pluralName) %}
{% block title %}{{ header|trans }} | {{ parent() }}{% endblock %}

{% block content %}
    {% hook 'update' with { _prefixes: prefixes, resource, metadata, configuration, form } %}
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {% hook 'update#stylesheets' with { _prefixes: prefixes } %}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {% hook 'update#javascripts' with { _prefixes: prefixes } %}
{% endblock %}

\`\`\``,frontmatter:{},index:21,start:290,end:321},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/05_sylius_stack.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:W7,meta:{layout:"center",title:"Real use case",srcSequence:"./pages/06_real_use_case.md",slide:{raw:null,title:"Real use case",level:1,content:`# Real use case
Let's create an AFUP admin panel`,frontmatter:{layout:"center",title:"Real use case",srcSequence:"./pages/06_real_use_case.md"},index:42,start:0,end:7,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`---
layout: center
---

# Real use case
Let's create an AFUP admin panel
`,title:"Real use case",level:1,content:`# Real use case
Let's create an AFUP admin panel`,frontmatter:{layout:"center",title:"Real use case"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/06_real_use_case.md
---
`,content:"",frontmatter:{},index:6,start:64,end:68},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:Z7,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Create a speaker entity
\`\`\`shell
symfony console make:entity Speaker
\`\`\`

| Name        | Type     | Nullable |
|-------------|----------|----------|
| firstName   | string   | no       |
| lastName    | string   | no       |
| companyName | string   | yes      |
| avatar      | oneToOne | yes      |
`,content:`Create a speaker entity
\`\`\`shell
symfony console make:entity Speaker
\`\`\`

| Name        | Type     | Nullable |
|-------------|----------|----------|
| firstName   | string   | no       |
| lastName    | string   | no       |
| companyName | string   | yes      |
| avatar      | oneToOne | yes      |`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:43,start:8,end:21,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Create a speaker entity
\`\`\`shell
symfony console make:entity Speaker
\`\`\`

| Name        | Type     | Nullable |
|-------------|----------|----------|
| firstName   | string   | no       |
| lastName    | string   | no       |
| companyName | string   | yes      |
| avatar      | oneToOne | yes      |
`,content:`Create a speaker entity
\`\`\`shell
symfony console make:entity Speaker
\`\`\`

| Name        | Type     | Nullable |
|-------------|----------|----------|
| firstName   | string   | no       |
| lastName    | string   | no       |
| companyName | string   | yes      |
| avatar      | oneToOne | yes      |`,frontmatter:{},index:1,start:8,end:21},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:t6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:"\nCreate a speaker form type\n```php\nsymfony console make:form SpeakerType Speaker\n```\n\nCreate a speaker grid\n```php\nsymfony console make:grid Speaker\n```\n",content:"Create a speaker form type\n```php\nsymfony console make:form SpeakerType Speaker\n```\n\nCreate a speaker grid\n```php\nsymfony console make:grid Speaker\n```",frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:44,start:22,end:33,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:"\nCreate a speaker form type\n```php\nsymfony console make:form SpeakerType Speaker\n```\n\nCreate a speaker grid\n```php\nsymfony console make:grid Speaker\n```\n",content:"Create a speaker form type\n```php\nsymfony console make:form SpeakerType Speaker\n```\n\nCreate a speaker grid\n```php\nsymfony console make:grid Speaker\n```",frontmatter:{},index:2,start:22,end:33},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:a6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Declare entity as a Sylius resource
& add your basic operations

\`\`\`php {all|2|3|4|5|6|7-13|8|9|10|11|12|15}
#[ORM\\Entity(repositoryClass: SpeakerRepository::class)]
#[AsResource(
    section: 'admin',
    formType: SpeakerType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: SpeakerGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Speaker implements ResourceInterface
\`\`\`
`,content:`Declare entity as a Sylius resource
& add your basic operations

\`\`\`php {all|2|3|4|5|6|7-13|8|9|10|11|12|15}
#[ORM\\Entity(repositoryClass: SpeakerRepository::class)]
#[AsResource(
    section: 'admin',
    formType: SpeakerType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: SpeakerGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Speaker implements ResourceInterface
\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:45,start:34,end:56,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Declare entity as a Sylius resource
& add your basic operations

\`\`\`php {all|2|3|4|5|6|7-13|8|9|10|11|12|15}
#[ORM\\Entity(repositoryClass: SpeakerRepository::class)]
#[AsResource(
    section: 'admin',
    formType: SpeakerType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: SpeakerGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Speaker implements ResourceInterface
\`\`\`
`,content:`Declare entity as a Sylius resource
& add your basic operations

\`\`\`php {all|2|3|4|5|6|7-13|8|9|10|11|12|15}
#[ORM\\Entity(repositoryClass: SpeakerRepository::class)]
#[AsResource(
    section: 'admin',
    formType: SpeakerType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Create(),
        new Update(),
        new Index(grid: SpeakerGrid::class),
        new Delete(),
        new BulkDelete(),
    ],
)]
class Speaker implements ResourceInterface
\`\`\``,frontmatter:{},index:3,start:34,end:56},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:d6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Generated grid

<img src="/admin_ui_speakers.png" />
`,content:`Generated grid

<img src="/admin_ui_speakers.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:46,start:57,end:62,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Generated grid

<img src="/admin_ui_speakers.png" />
`,content:`Generated grid

<img src="/admin_ui_speakers.png" />`,frontmatter:{},index:4,start:57,end:62},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:_6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
No filters by default

<img class="w-100" src="/admin_ui_no_filters.png" />
`,content:`No filters by default

<img class="w-100" src="/admin_ui_no_filters.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:47,start:63,end:68,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
No filters by default

<img class="w-100" src="/admin_ui_no_filters.png" />
`,content:`No filters by default

<img class="w-100" src="/admin_ui_no_filters.png" />`,frontmatter:{},index:5,start:63,end:68},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:B6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Adding a search filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/SpeakerGrid.php
// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`Adding a search filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/SpeakerGrid.php
// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:48,start:69,end:96,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Adding a search filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/SpeakerGrid.php
// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`Adding a search filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/SpeakerGrid.php
// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{},index:6,start:69,end:96},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:b6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
<img src="/admin_ui_with_filters.png" />
`,content:'<img src="/admin_ui_with_filters.png" />',frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:49,start:97,end:100,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
<img src="/admin_ui_with_filters.png" />
`,content:'<img src="/admin_ui_with_filters.png" />',frontmatter:{},index:7,start:97,end:100},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:S6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Adding a default sorting

\`\`\`php {all|16}
<?php

// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            ->addOrderBy('firstName', 'asc')
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`Adding a default sorting

\`\`\`php {all|16}
<?php

// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            ->addOrderBy('firstName', 'asc')
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:50,start:101,end:130,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Adding a default sorting

\`\`\`php {all|16}
<?php

// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            ->addOrderBy('firstName', 'asc')
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`Adding a default sorting

\`\`\`php {all|16}
<?php

// ...

final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->addFilter(
                StringFilter::create('search', ['firstName', 'lastName', 'companyName'])
                    ->setLabel('sylius.ui.search')
            )
            ->addOrderBy('firstName', 'asc')
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{},index:8,start:101,end:130},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:O6,meta:{transition:"fade",srcSequence:"./pages/06_real_use_case.md",slide:{raw:`---
transition: fade
---

Sorted by first name

<img src="/admin_ui_default_sorting.png" />
`,content:`Sorted by first name

<img src="/admin_ui_default_sorting.png" />`,frontmatter:{transition:"fade",srcSequence:"./pages/06_real_use_case.md"},index:51,start:130,end:138,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`---
transition: fade
---

Sorted by first name

<img src="/admin_ui_default_sorting.png" />
`,content:`Sorted by first name

<img src="/admin_ui_default_sorting.png" />`,frontmatter:{transition:"fade"},index:9,start:130,end:138},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:R6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Sorted by company name

<img src="/admin_ui_sorted_by_company_name.png" />

`,content:`Sorted by company name

<img src="/admin_ui_sorted_by_company_name.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:52,start:139,end:145,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Sorted by company name

<img src="/admin_ui_sorted_by_company_name.png" />

`,content:`Sorted by company name

<img src="/admin_ui_sorted_by_company_name.png" />`,frontmatter:{},index:10,start:139,end:145},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:V6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Adding an image for the speaker avatar

\`\`\`php {all|6-9|6|7|8}
// ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('.')
            )
            // ...
        ;
    }
// ...

\`\`\`

\`\`\`twig {all|2|4|5}
<!-- templates/speaker/grid/field/image.html.twig -->
{% import '@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig' as avatar %}

{% set avatar_path = data.avatar.path is defined ? vich_uploader_asset(data.avatar) : null %}
{{ avatar.default(avatar_path, 'img-thumbnail') }}
\`\`\`
`,content:`Adding an image for the speaker avatar

\`\`\`php {all|6-9|6|7|8}
// ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('.')
            )
            // ...
        ;
    }
// ...

\`\`\`

\`\`\`twig {all|2|4|5}
<!-- templates/speaker/grid/field/image.html.twig -->
{% import '@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig' as avatar %}

{% set avatar_path = data.avatar.path is defined ? vich_uploader_asset(data.avatar) : null %}
{{ avatar.default(avatar_path, 'img-thumbnail') }}
\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:53,start:146,end:174,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Adding an image for the speaker avatar

\`\`\`php {all|6-9|6|7|8}
// ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('.')
            )
            // ...
        ;
    }
// ...

\`\`\`

\`\`\`twig {all|2|4|5}
<!-- templates/speaker/grid/field/image.html.twig -->
{% import '@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig' as avatar %}

{% set avatar_path = data.avatar.path is defined ? vich_uploader_asset(data.avatar) : null %}
{{ avatar.default(avatar_path, 'img-thumbnail') }}
\`\`\`
`,content:`Adding an image for the speaker avatar

\`\`\`php {all|6-9|6|7|8}
// ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('.')
            )
            // ...
        ;
    }
// ...

\`\`\`

\`\`\`twig {all|2|4|5}
<!-- templates/speaker/grid/field/image.html.twig -->
{% import '@SyliusBootstrapAdminUi/shared/helper/avatar.html.twig' as avatar %}

{% set avatar_path = data.avatar.path is defined ? vich_uploader_asset(data.avatar) : null %}
{{ avatar.default(avatar_path, 'img-thumbnail') }}
\`\`\``,frontmatter:{},index:11,start:146,end:174},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:K6,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
<img src="/admin_ui_speaker_avatars.png" />
`,content:'<img src="/admin_ui_speaker_avatars.png" />',frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:54,start:175,end:178,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
<img src="/admin_ui_speaker_avatars.png" />
`,content:'<img src="/admin_ui_speaker_avatars.png" />',frontmatter:{},index:12,start:175,end:178},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:tw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Create a talk entity
\`\`\`shell
symfony console make:entity Talk
\`\`\`

| Name        | Type      | Nullable |
|-------------|-----------|----------|
| title       | string    | no       |
| description | text      | yes      |
| speaker     | manyToOne | yes      |

Create a talk form type
\`\`\`php
symfony console make:form TalkType Talk
\`\`\`

Create a talk grid
\`\`\`php
symfony console make:grid Talk
\`\`\`
`,content:`Create a talk entity
\`\`\`shell
symfony console make:entity Talk
\`\`\`

| Name        | Type      | Nullable |
|-------------|-----------|----------|
| title       | string    | no       |
| description | text      | yes      |
| speaker     | manyToOne | yes      |

Create a talk form type
\`\`\`php
symfony console make:form TalkType Talk
\`\`\`

Create a talk grid
\`\`\`php
symfony console make:grid Talk
\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:55,start:179,end:201,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Create a talk entity
\`\`\`shell
symfony console make:entity Talk
\`\`\`

| Name        | Type      | Nullable |
|-------------|-----------|----------|
| title       | string    | no       |
| description | text      | yes      |
| speaker     | manyToOne | yes      |

Create a talk form type
\`\`\`php
symfony console make:form TalkType Talk
\`\`\`

Create a talk grid
\`\`\`php
symfony console make:grid Talk
\`\`\`
`,content:`Create a talk entity
\`\`\`shell
symfony console make:entity Talk
\`\`\`

| Name        | Type      | Nullable |
|-------------|-----------|----------|
| title       | string    | no       |
| description | text      | yes      |
| speaker     | manyToOne | yes      |

Create a talk form type
\`\`\`php
symfony console make:form TalkType Talk
\`\`\`

Create a talk grid
\`\`\`php
symfony console make:grid Talk
\`\`\``,frontmatter:{},index:13,start:179,end:201},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:iw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Generated grid

<img src="/admin_ui_talks.png" />
`,content:`Generated grid

<img src="/admin_ui_talks.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:56,start:202,end:207,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Generated grid

<img src="/admin_ui_talks.png" />
`,content:`Generated grid

<img src="/admin_ui_talks.png" />`,frontmatter:{},index:14,start:202,end:207},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:dw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Adding the speaker avatar

\`\`\`php {all|10-13|11|12}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('speaker')
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding the speaker avatar

\`\`\`php {all|10-13|11|12}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('speaker')
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:57,start:208,end:232,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Adding the speaker avatar

\`\`\`php {all|10-13|11|12}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('speaker')
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding the speaker avatar

\`\`\`php {all|10-13|11|12}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                TwigField::create('avatar', 'speaker/grid/field/image.html.twig')
                    ->setPath('speaker')
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{},index:15,start:208,end:232},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:_w,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Talks with speaker avatars

<img src="/admin_ui_talks_with_avatars.png" />
`,content:`Talks with speaker avatars

<img src="/admin_ui_talks_with_avatars.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:58,start:233,end:238,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Talks with speaker avatars

<img src="/admin_ui_talks_with_avatars.png" />
`,content:`Talks with speaker avatars

<img src="/admin_ui_talks_with_avatars.png" />`,frontmatter:{},index:16,start:233,end:238},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:Bw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Adding the speaker full names

\`\`\`php {all|10-15|11|12|13|14}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                StringField::create('speaker')
                    ->setLabel('app.ui.speaker')
                    ->setPath('speaker.fullName')
                    ->setSortable(true, 'speaker.firstName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding the speaker full names

\`\`\`php {all|10-15|11|12|13|14}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                StringField::create('speaker')
                    ->setLabel('app.ui.speaker')
                    ->setPath('speaker.fullName')
                    ->setSortable(true, 'speaker.firstName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:59,start:239,end:265,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Adding the speaker full names

\`\`\`php {all|10-15|11|12|13|14}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                StringField::create('speaker')
                    ->setLabel('app.ui.speaker')
                    ->setPath('speaker.fullName')
                    ->setSortable(true, 'speaker.firstName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding the speaker full names

\`\`\`php {all|10-15|11|12|13|14}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addField(
                StringField::create('speaker')
                    ->setLabel('app.ui.speaker')
                    ->setPath('speaker.fullName')
                    ->setSortable(true, 'speaker.firstName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{},index:17,start:239,end:265},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:ww,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Talks with speaker full names

<img src="/admin_ui_talks_with_speaker_full_names.png" />
`,content:`Talks with speaker full names

<img src="/admin_ui_talks_with_speaker_full_names.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:60,start:266,end:271,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Talks with speaker full names

<img src="/admin_ui_talks_with_speaker_full_names.png" />
`,content:`Talks with speaker full names

<img src="/admin_ui_talks_with_speaker_full_names.png" />`,frontmatter:{},index:18,start:266,end:271},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:Fw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Adding the speaker filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                EntityFilter::create('speaker', Speaker::class)
                    ->setLabel('app.ui.speaker')
                    ->addFormOption('choice_label',  'fullName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding the speaker filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                EntityFilter::create('speaker', Speaker::class)
                    ->setLabel('app.ui.speaker')
                    ->addFormOption('choice_label',  'fullName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:61,start:272,end:297,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Adding the speaker filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                EntityFilter::create('speaker', Speaker::class)
                    ->setLabel('app.ui.speaker')
                    ->addFormOption('choice_label',  'fullName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding the speaker filter

\`\`\`php {all|10-14|11|12|13}
// src/Grid/TalkGrid.php
// ...
final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                EntityFilter::create('speaker', Speaker::class)
                    ->setLabel('app.ui.speaker')
                    ->addFormOption('choice_label',  'fullName')
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{},index:19,start:272,end:297},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:Pw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Talks with speaker filter

<img src="/admin_ui_speaker_filter.png" />
`,content:`Talks with speaker filter

<img src="/admin_ui_speaker_filter.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:62,start:298,end:303,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Talks with speaker filter

<img src="/admin_ui_speaker_filter.png" />
`,content:`Talks with speaker filter

<img src="/admin_ui_speaker_filter.png" />`,frontmatter:{},index:20,start:298,end:303},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:Mw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Talks with speaker filter

<img src="/admin_ui_speaker_filter_result.png" />
`,content:`Talks with speaker filter

<img src="/admin_ui_speaker_filter_result.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:63,start:304,end:309,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Talks with speaker filter

<img src="/admin_ui_speaker_filter_result.png" />
`,content:`Talks with speaker filter

<img src="/admin_ui_speaker_filter_result.png" />`,frontmatter:{},index:21,start:304,end:309},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:Vw,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Adding a link to speaker talks on list of speakers

\`\`\`php {all|10-24|11|12|13|14|15|16|17|18-21|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addActionGroup(
                ItemActionGroup::create(
                    Action::create('show_talks', 'show')
                        ->setIcon('list_letters')
                        ->setLabel('app.ui.show_talks')
                        ->setOptions([
                            'link' => [
                                'route' => 'app_admin_talk_index',
                                'parameters' => [
                                    'criteria' => [
                                        'speaker' => 'resource.id',
                                    ],
                                ],
                            ],
                        ])
                    ,
                    UpdateAction::create(),
                    DeleteAction::create()
                )
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding a link to speaker talks on list of speakers

\`\`\`php {all|10-24|11|12|13|14|15|16|17|18-21|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addActionGroup(
                ItemActionGroup::create(
                    Action::create('show_talks', 'show')
                        ->setIcon('list_letters')
                        ->setLabel('app.ui.show_talks')
                        ->setOptions([
                            'link' => [
                                'route' => 'app_admin_talk_index',
                                'parameters' => [
                                    'criteria' => [
                                        'speaker' => 'resource.id',
                                    ],
                                ],
                            ],
                        ])
                    ,
                    UpdateAction::create(),
                    DeleteAction::create()
                )
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:64,start:310,end:350,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Adding a link to speaker talks on list of speakers

\`\`\`php {all|10-24|11|12|13|14|15|16|17|18-21|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addActionGroup(
                ItemActionGroup::create(
                    Action::create('show_talks', 'show')
                        ->setIcon('list_letters')
                        ->setLabel('app.ui.show_talks')
                        ->setOptions([
                            'link' => [
                                'route' => 'app_admin_talk_index',
                                'parameters' => [
                                    'criteria' => [
                                        'speaker' => 'resource.id',
                                    ],
                                ],
                            ],
                        ])
                    ,
                    UpdateAction::create(),
                    DeleteAction::create()
                )
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Adding a link to speaker talks on list of speakers

\`\`\`php {all|10-24|11|12|13|14|15|16|17|18-21|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addActionGroup(
                ItemActionGroup::create(
                    Action::create('show_talks', 'show')
                        ->setIcon('list_letters')
                        ->setLabel('app.ui.show_talks')
                        ->setOptions([
                            'link' => [
                                'route' => 'app_admin_talk_index',
                                'parameters' => [
                                    'criteria' => [
                                        'speaker' => 'resource.id',
                                    ],
                                ],
                            ],
                        ])
                    ,
                    UpdateAction::create(),
                    DeleteAction::create()
                )
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{},index:22,start:310,end:350},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:Yw,meta:{transition:"fade",srcSequence:"./pages/06_real_use_case.md",slide:{raw:`---
transition: fade
---

Link to speaker talks

<img src="/admin_ui_show_talks.png" />
`,content:`Link to speaker talks

<img src="/admin_ui_show_talks.png" />`,frontmatter:{transition:"fade",srcSequence:"./pages/06_real_use_case.md"},index:65,start:350,end:358,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`---
transition: fade
---

Link to speaker talks

<img src="/admin_ui_show_talks.png" />
`,content:`Link to speaker talks

<img src="/admin_ui_show_talks.png" />`,frontmatter:{transition:"fade"},index:23,start:350,end:358},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:e4,meta:{srcSequence:"./pages/06_real_use_case.md",slide:{raw:`
Linked to talks of this speaker

<img src="/admin_ui_one_speaker_talks.png" />
`,content:`Linked to talks of this speaker

<img src="/admin_ui_one_speaker_talks.png" />`,frontmatter:{srcSequence:"./pages/06_real_use_case.md"},index:66,start:359,end:364,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",raw:`
Linked to talks of this speaker

<img src="/admin_ui_one_speaker_talks.png" />
`,content:`Linked to talks of this speaker

<img src="/admin_ui_one_speaker_talks.png" />`,frontmatter:{},index:24,start:359,end:364},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/06_real_use_case.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:o4,meta:{layout:"center",title:"Going further with Symfony UX",srcSequence:"./pages/07_symfony_ux.md",slide:{raw:null,title:"Going further with Symfony UX",level:1,content:`# Going further with Symfony UX
Let's use some Symfony UX components`,frontmatter:{layout:"center",title:"Going further with Symfony UX",srcSequence:"./pages/07_symfony_ux.md"},index:67,start:0,end:7,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`---
layout: center
---

# Going further with Symfony UX
Let's use some Symfony UX components
`,title:"Going further with Symfony UX",level:1,content:`# Going further with Symfony UX
Let's use some Symfony UX components`,frontmatter:{layout:"center",title:"Going further with Symfony UX"},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/07_symfony_ux.md
---
`,content:"",frontmatter:{},index:7,start:68,end:72},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:i4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
Add a speaker autocomplete filter

\`\`\`php {all|10-21|11|12|13|14|15-17|16|17|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                Filter::create('speaker', 'ux_autocomplete')
                    ->setLabel('app.ui.speaker')
                    ->setFormOptions([
                        'multiple' => false,
                        'extra_options' => [
                            'class' => Speaker::class,
                            'choice_label' => 'fullName',
                        ],
                    ])
                    ->setOptions(['fields' => ['speaker.id']])
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Add a speaker autocomplete filter

\`\`\`php {all|10-21|11|12|13|14|15-17|16|17|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                Filter::create('speaker', 'ux_autocomplete')
                    ->setLabel('app.ui.speaker')
                    ->setFormOptions([
                        'multiple' => false,
                        'extra_options' => [
                            'class' => Speaker::class,
                            'choice_label' => 'fullName',
                        ],
                    ])
                    ->setOptions(['fields' => ['speaker.id']])
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:68,start:8,end:40,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
Add a speaker autocomplete filter

\`\`\`php {all|10-21|11|12|13|14|15-17|16|17|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                Filter::create('speaker', 'ux_autocomplete')
                    ->setLabel('app.ui.speaker')
                    ->setFormOptions([
                        'multiple' => false,
                        'extra_options' => [
                            'class' => Speaker::class,
                            'choice_label' => 'fullName',
                        ],
                    ])
                    ->setOptions(['fields' => ['speaker.id']])
            )
            // ...
        ;
    }
    // ...
}
\`\`\`
`,content:`Add a speaker autocomplete filter

\`\`\`php {all|10-21|11|12|13|14|15-17|16|17|20}
// src/Grid/SpeakerGrid.php
// ...
final class SpeakerGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...
    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                Filter::create('speaker', 'ux_autocomplete')
                    ->setLabel('app.ui.speaker')
                    ->setFormOptions([
                        'multiple' => false,
                        'extra_options' => [
                            'class' => Speaker::class,
                            'choice_label' => 'fullName',
                        ],
                    ])
                    ->setOptions(['fields' => ['speaker.id']])
            )
            // ...
        ;
    }
    // ...
}
\`\`\``,frontmatter:{},index:1,start:8,end:40},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:y4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
Speaker filter with autocompletion

<img src="/filter_with_ux_autocomplete.png" />
`,content:`Speaker filter with autocompletion

<img src="/filter_with_ux_autocomplete.png" />`,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:69,start:41,end:46,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
Speaker filter with autocompletion

<img src="/filter_with_ux_autocomplete.png" />
`,content:`Speaker filter with autocompletion

<img src="/filter_with_ux_autocomplete.png" />`,frontmatter:{},index:2,start:41,end:46},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:_4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
Creating a Speaker Autocomplete to use on forms

\`\`\`php {all|4|5|7|12|13|17-20}
// src/Form/SpeakerAutocompleteType.php
// ...

#[AsEntityAutocompleteField(
    alias: 'app_admin_speaker',
)]
final class SpeakerAutocompleteType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => Speaker::class,
            'choice_label' => 'fullName',
        ]);
    }

    public function getParent(): string
    {
        return BaseEntityAutocompleteType::class;
    }
}

\`\`\`
`,content:`Creating a Speaker Autocomplete to use on forms

\`\`\`php {all|4|5|7|12|13|17-20}
// src/Form/SpeakerAutocompleteType.php
// ...

#[AsEntityAutocompleteField(
    alias: 'app_admin_speaker',
)]
final class SpeakerAutocompleteType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => Speaker::class,
            'choice_label' => 'fullName',
        ]);
    }

    public function getParent(): string
    {
        return BaseEntityAutocompleteType::class;
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:70,start:47,end:75,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
Creating a Speaker Autocomplete to use on forms

\`\`\`php {all|4|5|7|12|13|17-20}
// src/Form/SpeakerAutocompleteType.php
// ...

#[AsEntityAutocompleteField(
    alias: 'app_admin_speaker',
)]
final class SpeakerAutocompleteType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => Speaker::class,
            'choice_label' => 'fullName',
        ]);
    }

    public function getParent(): string
    {
        return BaseEntityAutocompleteType::class;
    }
}

\`\`\`
`,content:`Creating a Speaker Autocomplete to use on forms

\`\`\`php {all|4|5|7|12|13|17-20}
// src/Form/SpeakerAutocompleteType.php
// ...

#[AsEntityAutocompleteField(
    alias: 'app_admin_speaker',
)]
final class SpeakerAutocompleteType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => Speaker::class,
            'choice_label' => 'fullName',
        ]);
    }

    public function getParent(): string
    {
        return BaseEntityAutocompleteType::class;
    }
}

\`\`\``,frontmatter:{},index:3,start:47,end:75},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:B4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
Speaker Autocomplete on talk form type

\`\`\`php {all|10}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('speaker', SpeakerAutocompleteType::class)
            ->add('description')
        ;
    }

    // ...
}

\`\`\`
`,content:`Speaker Autocomplete on talk form type

\`\`\`php {all|10}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('speaker', SpeakerAutocompleteType::class)
            ->add('description')
        ;
    }

    // ...
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:71,start:76,end:99,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
Speaker Autocomplete on talk form type

\`\`\`php {all|10}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('speaker', SpeakerAutocompleteType::class)
            ->add('description')
        ;
    }

    // ...
}

\`\`\`
`,content:`Speaker Autocomplete on talk form type

\`\`\`php {all|10}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('speaker', SpeakerAutocompleteType::class)
            ->add('description')
        ;
    }

    // ...
}

\`\`\``,frontmatter:{},index:4,start:76,end:99},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:w4,meta:{transition:"fade",srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`---
transition: fade
---

Speaker Autocomplete on talk form type

<img src="/talk_form_type.png" />
`,content:`Speaker Autocomplete on talk form type

<img src="/talk_form_type.png" />`,frontmatter:{transition:"fade",srcSequence:"./pages/07_symfony_ux.md"},index:72,start:99,end:107,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`---
transition: fade
---

Speaker Autocomplete on talk form type

<img src="/talk_form_type.png" />
`,content:`Speaker Autocomplete on talk form type

<img src="/talk_form_type.png" />`,frontmatter:{transition:"fade"},index:5,start:99,end:107},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:$4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
Speaker Autocomplete on talk form type

<img src="/form_type_with_ux_autocomplete.png" />
`,content:`Speaker Autocomplete on talk form type

<img src="/form_type_with_ux_autocomplete.png" />`,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:73,start:108,end:113,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
Speaker Autocomplete on talk form type

<img src="/form_type_with_ux_autocomplete.png" />
`,content:`Speaker Autocomplete on talk form type

<img src="/form_type_with_ux_autocomplete.png" />`,frontmatter:{},index:6,start:108,end:113},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:P4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
Talk can have multiple speakers

\`\`\`php {all|10|12|13|14|15}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ...
            ->add('speakers', LiveCollectionType::class, [
                'label' => 'app.ui.speakers',
                'entry_type' => SpeakerAutocompleteType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`Talk can have multiple speakers

\`\`\`php {all|10|12|13|14|15}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ...
            ->add('speakers', LiveCollectionType::class, [
                'label' => 'app.ui.speakers',
                'entry_type' => SpeakerAutocompleteType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:74,start:114,end:143,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
Talk can have multiple speakers

\`\`\`php {all|10|12|13|14|15}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ...
            ->add('speakers', LiveCollectionType::class, [
                'label' => 'app.ui.speakers',
                'entry_type' => SpeakerAutocompleteType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`Talk can have multiple speakers

\`\`\`php {all|10|12|13|14|15}
// src/Form/TalkType.php
// ...

class TalkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ...
            ->add('speakers', LiveCollectionType::class, [
                'label' => 'app.ui.speakers',
                'entry_type' => SpeakerAutocompleteType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{},index:7,start:114,end:143},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:N4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
\`\`\`php {all|4,9|7,12|6,13|3,14|16-17|19-22}
// src/Twig/Component/TalkFormComponent.php
// ...
use Sylius\\TwigHooks\\LiveComponent\\HookableLiveComponentTrait;
use Symfony\\UX\\LiveComponent\\Attribute\\AsLiveComponent;
use Symfony\\UX\\LiveComponent\\Attribute\\LiveProp;
use Symfony\\UX\\LiveComponent\\DefaultActionTrait;
use Symfony\\UX\\LiveComponent\\LiveCollectionTrait;

#[AsLiveComponent(template: '@SyliusBootstrapAdminUi/shared/crud/common/content/form.html.twig')]
class TalkFormComponent extends AbstractController
{
    use LiveCollectionTrait;
    use DefaultActionTrait;
    use HookableLiveComponentTrait;

    #[LiveProp]
    public Talk $initialFormData;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(TalkType::class, $this->initialFormData);
    }
}

\`\`\`
`,content:`\`\`\`php {all|4,9|7,12|6,13|3,14|16-17|19-22}
// src/Twig/Component/TalkFormComponent.php
// ...
use Sylius\\TwigHooks\\LiveComponent\\HookableLiveComponentTrait;
use Symfony\\UX\\LiveComponent\\Attribute\\AsLiveComponent;
use Symfony\\UX\\LiveComponent\\Attribute\\LiveProp;
use Symfony\\UX\\LiveComponent\\DefaultActionTrait;
use Symfony\\UX\\LiveComponent\\LiveCollectionTrait;

#[AsLiveComponent(template: '@SyliusBootstrapAdminUi/shared/crud/common/content/form.html.twig')]
class TalkFormComponent extends AbstractController
{
    use LiveCollectionTrait;
    use DefaultActionTrait;
    use HookableLiveComponentTrait;

    #[LiveProp]
    public Talk $initialFormData;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(TalkType::class, $this->initialFormData);
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:75,start:144,end:172,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
\`\`\`php {all|4,9|7,12|6,13|3,14|16-17|19-22}
// src/Twig/Component/TalkFormComponent.php
// ...
use Sylius\\TwigHooks\\LiveComponent\\HookableLiveComponentTrait;
use Symfony\\UX\\LiveComponent\\Attribute\\AsLiveComponent;
use Symfony\\UX\\LiveComponent\\Attribute\\LiveProp;
use Symfony\\UX\\LiveComponent\\DefaultActionTrait;
use Symfony\\UX\\LiveComponent\\LiveCollectionTrait;

#[AsLiveComponent(template: '@SyliusBootstrapAdminUi/shared/crud/common/content/form.html.twig')]
class TalkFormComponent extends AbstractController
{
    use LiveCollectionTrait;
    use DefaultActionTrait;
    use HookableLiveComponentTrait;

    #[LiveProp]
    public Talk $initialFormData;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(TalkType::class, $this->initialFormData);
    }
}

\`\`\`
`,content:`\`\`\`php {all|4,9|7,12|6,13|3,14|16-17|19-22}
// src/Twig/Component/TalkFormComponent.php
// ...
use Sylius\\TwigHooks\\LiveComponent\\HookableLiveComponentTrait;
use Symfony\\UX\\LiveComponent\\Attribute\\AsLiveComponent;
use Symfony\\UX\\LiveComponent\\Attribute\\LiveProp;
use Symfony\\UX\\LiveComponent\\DefaultActionTrait;
use Symfony\\UX\\LiveComponent\\LiveCollectionTrait;

#[AsLiveComponent(template: '@SyliusBootstrapAdminUi/shared/crud/common/content/form.html.twig')]
class TalkFormComponent extends AbstractController
{
    use LiveCollectionTrait;
    use DefaultActionTrait;
    use HookableLiveComponentTrait;

    #[LiveProp]
    public Talk $initialFormData;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(TalkType::class, $this->initialFormData);
    }
}

\`\`\``,frontmatter:{},index:8,start:144,end:172},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:q4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
\`\`\`yaml {all|6|7|8|9|10|11|13}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        # ...

        'sylius_admin.talk.create.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

        'sylius_admin.talk.update.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

\`\`\`
`,title:"config/packages/twig_hooks.yaml",level:2,content:`\`\`\`yaml {all|6|7|8|9|10|11|13}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        # ...

        'sylius_admin.talk.create.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

        'sylius_admin.talk.update.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

\`\`\``,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:76,start:173,end:196,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
\`\`\`yaml {all|6|7|8|9|10|11|13}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        # ...

        'sylius_admin.talk.create.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

        'sylius_admin.talk.update.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

\`\`\`
`,title:"config/packages/twig_hooks.yaml",level:2,content:`\`\`\`yaml {all|6|7|8|9|10|11|13}
## config/packages/twig_hooks.yaml
sylius_twig_hooks:
    hooks:
        # ...

        'sylius_admin.talk.create.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

        'sylius_admin.talk.update.content':
            form:
                component: 'App\\Twig\\Component\\TalkFormComponent'
                props:
                    form: '@=_context.form'
                    initialFormData: '@=_context.resource'

\`\`\``,frontmatter:{},index:9,start:173,end:196},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:U4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
<img src="/live-collection.png"/>
`,content:'<img src="/live-collection.png"/>',frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:77,start:197,end:200,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
<img src="/live-collection.png"/>
`,content:'<img src="/live-collection.png"/>',frontmatter:{},index:10,start:197,end:200},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:K4,meta:{layout:"center",srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`---
layout: center
---

Two more filters...
`,content:"Two more filters...",frontmatter:{layout:"center",srcSequence:"./pages/07_symfony_ux.md"},index:78,start:200,end:206,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`---
layout: center
---

Two more filters...
`,content:"Two more filters...",frontmatter:{layout:"center"},index:11,start:200,end:206},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:Z4,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
\`\`\`php {all|3,14-17|18-25}
// src/Grid/TalkGrid.php
// ...
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\DateFilter;
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\EntityFilter;

final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                DateFilter::create('startsAt')
                    ->setLabel('app.ui.starts_at'),
            )
            ->addFilter(
                SelectFilter::create('track', [
                    'app.ui.biz' => Track::BIZ->value,
                    'app.ui.tech_one' => Track::TECH_ONE->value,
                    'app.ui.tech_two' => Track::TECH_TWO->value,
                ])
                    ->setLabel('app.ui.track'),
            )
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`\`\`\`php {all|3,14-17|18-25}
// src/Grid/TalkGrid.php
// ...
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\DateFilter;
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\EntityFilter;

final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                DateFilter::create('startsAt')
                    ->setLabel('app.ui.starts_at'),
            )
            ->addFilter(
                SelectFilter::create('track', [
                    'app.ui.biz' => Track::BIZ->value,
                    'app.ui.tech_one' => Track::TECH_ONE->value,
                    'app.ui.tech_two' => Track::TECH_TWO->value,
                ])
                    ->setLabel('app.ui.track'),
            )
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:79,start:207,end:243,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
\`\`\`php {all|3,14-17|18-25}
// src/Grid/TalkGrid.php
// ...
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\DateFilter;
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\EntityFilter;

final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                DateFilter::create('startsAt')
                    ->setLabel('app.ui.starts_at'),
            )
            ->addFilter(
                SelectFilter::create('track', [
                    'app.ui.biz' => Track::BIZ->value,
                    'app.ui.tech_one' => Track::TECH_ONE->value,
                    'app.ui.tech_two' => Track::TECH_TWO->value,
                ])
                    ->setLabel('app.ui.track'),
            )
            // ...
        ;
    }

    // ...
}

\`\`\`
`,content:`\`\`\`php {all|3,14-17|18-25}
// src/Grid/TalkGrid.php
// ...
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\DateFilter;
use Sylius\\Bundle\\GridBundle\\Builder\\Filter\\EntityFilter;

final class TalkGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    // ...

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            // ...
            ->addFilter(
                DateFilter::create('startsAt')
                    ->setLabel('app.ui.starts_at'),
            )
            ->addFilter(
                SelectFilter::create('track', [
                    'app.ui.biz' => Track::BIZ->value,
                    'app.ui.tech_one' => Track::TECH_ONE->value,
                    'app.ui.tech_two' => Track::TECH_TWO->value,
                ])
                    ->setLabel('app.ui.track'),
            )
            // ...
        ;
    }

    // ...
}

\`\`\``,frontmatter:{},index:12,start:207,end:243},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:nE,meta:{srcSequence:"./pages/07_symfony_ux.md",slide:{raw:`
<img src="/last-filters.png"/>
`,content:'<img src="/last-filters.png"/>',frontmatter:{srcSequence:"./pages/07_symfony_ux.md"},index:80,start:244,end:247,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",raw:`
<img src="/last-filters.png"/>
`,content:'<img src="/last-filters.png"/>',frontmatter:{},index:13,start:244,end:247},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/07_symfony_ux.md",noteHTML:"",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:oE,meta:{layout:"center",srcSequence:"./pages/08_conclusion.md",slide:{raw:null,content:"Now it's time to conclude",frontmatter:{layout:"center",srcSequence:"./pages/08_conclusion.md"},index:81,start:0,end:6,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",raw:`---
layout: center
---

Now it's time to conclude
`,content:"Now it's time to conclude",frontmatter:{layout:"center"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/08_conclusion.md
---
`,content:"",frontmatter:{},index:8,start:72,end:76},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",noteHTML:"",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:aE,meta:{layout:"image-right",image:"/profiler.png",srcSequence:"./pages/08_conclusion.md",slide:{raw:`---
layout: image-right
image: /profiler.png
---

<v-clicks>

- Symfony 7.1 support
- PHP 8.3 support
- Fewer dependencies on third party packages
- No dependencies on Sylius E-commerce packages
- DDD architecture ready
    - Resource detached from the Doctrine entity
    - Query bus on providers
    - Command bus on processors
- Installable on existing projects  

</v-clicks>
`,content:`<v-clicks>

- Symfony 7.1 support
- PHP 8.3 support
- Fewer dependencies on third party packages
- No dependencies on Sylius E-commerce packages
- DDD architecture ready
    - Resource detached from the Doctrine entity
    - Query bus on providers
    - Command bus on processors
- Installable on existing projects  

</v-clicks>`,frontmatter:{layout:"image-right",image:"/profiler.png",srcSequence:"./pages/08_conclusion.md"},index:82,start:6,end:25,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",raw:`---
layout: image-right
image: /profiler.png
---

<v-clicks>

- Symfony 7.1 support
- PHP 8.3 support
- Fewer dependencies on third party packages
- No dependencies on Sylius E-commerce packages
- DDD architecture ready
    - Resource detached from the Doctrine entity
    - Query bus on providers
    - Command bus on processors
- Installable on existing projects  

</v-clicks>
`,content:`<v-clicks>

- Symfony 7.1 support
- PHP 8.3 support
- Fewer dependencies on third party packages
- No dependencies on Sylius E-commerce packages
- DDD architecture ready
    - Resource detached from the Doctrine entity
    - Query bus on providers
    - Command bus on processors
- Installable on existing projects  

</v-clicks>`,frontmatter:{layout:"image-right",image:"/profiler.png"},index:1,start:6,end:25},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",noteHTML:"",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:uE,meta:{srcSequence:"./pages/08_conclusion.md",slide:{raw:`
## TODO

<v-clicks>

- Writing documentation
- Adding Doctrine orm 3 support
- Adding UX autocomplete grid filter
- Using these packages on Monofony
- Using these packages on Sylius E-commerce
- Grid with UX Live Component

</v-clicks>
`,title:"TODO",level:2,content:`## TODO

<v-clicks>

- Writing documentation
- Adding Doctrine orm 3 support
- Adding UX autocomplete grid filter
- Using these packages on Monofony
- Using these packages on Sylius E-commerce
- Grid with UX Live Component

</v-clicks>`,frontmatter:{srcSequence:"./pages/08_conclusion.md"},index:83,start:26,end:40,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",raw:`
## TODO

<v-clicks>

- Writing documentation
- Adding Doctrine orm 3 support
- Adding UX autocomplete grid filter
- Using these packages on Monofony
- Using these packages on Sylius E-commerce
- Grid with UX Live Component

</v-clicks>
`,title:"TODO",level:2,content:`## TODO

<v-clicks>

- Writing documentation
- Adding Doctrine orm 3 support
- Adding UX autocomplete grid filter
- Using these packages on Monofony
- Using these packages on Sylius E-commerce
- Grid with UX Live Component

</v-clicks>`,frontmatter:{},index:2,start:26,end:40},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",noteHTML:"",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:gE,meta:{srcSequence:"./pages/08_conclusion.md",slide:{raw:`
## Install It

From scratch, install a Symfony skeleton

\`\`\`shell
symfony new --webapp [application_name]
\`\`\`

Install all the packages (Soon...)

\`\`\`shell
composer require sylius/admin-panel-pack
\`\`\`
`,title:"Install It",level:2,content:"## Install It\n\nFrom scratch, install a Symfony skeleton\n\n```shell\nsymfony new --webapp [application_name]\n```\n\nInstall all the packages (Soon...)\n\n```shell\ncomposer require sylius/admin-panel-pack\n```",frontmatter:{srcSequence:"./pages/08_conclusion.md"},index:84,start:41,end:56,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",raw:`
## Install It

From scratch, install a Symfony skeleton

\`\`\`shell
symfony new --webapp [application_name]
\`\`\`

Install all the packages (Soon...)

\`\`\`shell
composer require sylius/admin-panel-pack
\`\`\`
`,title:"Install It",level:2,content:"## Install It\n\nFrom scratch, install a Symfony skeleton\n\n```shell\nsymfony new --webapp [application_name]\n```\n\nInstall all the packages (Soon...)\n\n```shell\ncomposer require sylius/admin-panel-pack\n```",frontmatter:{},index:3,start:41,end:56},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",noteHTML:"",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:CE,meta:{srcSequence:"./pages/08_conclusion.md",slide:{raw:`
Install all the packages (For now)  

\`\`\`shell
composer require \\
  "doctrine/doctrine-bundle" "^2.12" \\
  "doctrine/orm" "^2.0" \\
  "sylius/admin-ui" "^0.4" \\
  "sylius/bootstrap-admin-ui" "^0.4" \\
  "sylius/grid-bundle" "^1.13" \\
  "sylius/resource-bundle": "^1.12" \\
  "sylius/twig-extra" "^0.4" \\
  "sylius/twig-hooks" "^0.4" \\
  "sylius/ui-translations" "^0.4"
\`\`\`

Do not forget to accept contrib recipes

\`\`\`shell {4}
    Do you want to execute this recipe?
    [y] Yes
    [n] No
    [a] Yes for all packages, only for the current installation session
    [p] Yes permanently, never ask again for this project
    (defaults to n): a
\`\`\`
`,content:`Install all the packages (For now)  

\`\`\`shell
composer require \\
  "doctrine/doctrine-bundle" "^2.12" \\
  "doctrine/orm" "^2.0" \\
  "sylius/admin-ui" "^0.4" \\
  "sylius/bootstrap-admin-ui" "^0.4" \\
  "sylius/grid-bundle" "^1.13" \\
  "sylius/resource-bundle": "^1.12" \\
  "sylius/twig-extra" "^0.4" \\
  "sylius/twig-hooks" "^0.4" \\
  "sylius/ui-translations" "^0.4"
\`\`\`

Do not forget to accept contrib recipes

\`\`\`shell {4}
    Do you want to execute this recipe?
    [y] Yes
    [n] No
    [a] Yes for all packages, only for the current installation session
    [p] Yes permanently, never ask again for this project
    (defaults to n): a
\`\`\``,frontmatter:{srcSequence:"./pages/08_conclusion.md"},index:85,start:57,end:84,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",raw:`
Install all the packages (For now)  

\`\`\`shell
composer require \\
  "doctrine/doctrine-bundle" "^2.12" \\
  "doctrine/orm" "^2.0" \\
  "sylius/admin-ui" "^0.4" \\
  "sylius/bootstrap-admin-ui" "^0.4" \\
  "sylius/grid-bundle" "^1.13" \\
  "sylius/resource-bundle": "^1.12" \\
  "sylius/twig-extra" "^0.4" \\
  "sylius/twig-hooks" "^0.4" \\
  "sylius/ui-translations" "^0.4"
\`\`\`

Do not forget to accept contrib recipes

\`\`\`shell {4}
    Do you want to execute this recipe?
    [y] Yes
    [n] No
    [a] Yes for all packages, only for the current installation session
    [p] Yes permanently, never ask again for this project
    (defaults to n): a
\`\`\`
`,content:`Install all the packages (For now)  

\`\`\`shell
composer require \\
  "doctrine/doctrine-bundle" "^2.12" \\
  "doctrine/orm" "^2.0" \\
  "sylius/admin-ui" "^0.4" \\
  "sylius/bootstrap-admin-ui" "^0.4" \\
  "sylius/grid-bundle" "^1.13" \\
  "sylius/resource-bundle": "^1.12" \\
  "sylius/twig-extra" "^0.4" \\
  "sylius/twig-hooks" "^0.4" \\
  "sylius/ui-translations" "^0.4"
\`\`\`

Do not forget to accept contrib recipes

\`\`\`shell {4}
    Do you want to execute this recipe?
    [y] Yes
    [n] No
    [a] Yes for all packages, only for the current installation session
    [p] Yes permanently, never ask again for this project
    (defaults to n): a
\`\`\``,frontmatter:{},index:4,start:57,end:84},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",noteHTML:"",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:xE,meta:{srcSequence:"./pages/08_conclusion.md",slide:{raw:`
<img src="/enjoy.png"/>

`,content:'<img src="/enjoy.png"/>',frontmatter:{srcSequence:"./pages/08_conclusion.md"},index:86,start:85,end:89,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",raw:`
<img src="/enjoy.png"/>

`,content:'<img src="/enjoy.png"/>',frontmatter:{},index:5,start:85,end:89},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",noteHTML:"",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:$E,meta:{layout:"center",srcSequence:"./pages/08_conclusion.md",slide:{raw:`---
layout: center
---

Now it's your turn...
`,content:"Now it's your turn...",frontmatter:{layout:"center",srcSequence:"./pages/08_conclusion.md"},index:87,start:89,end:95,source:{filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",raw:`---
layout: center
---

Now it's your turn...
`,content:"Now it's your turn...",frontmatter:{layout:"center"},index:6,start:89,end:95},filepath:"/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/pages/08_conclusion.md",noteHTML:"",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",component:e9,meta:{layout:"end"}}],Xe=TE,ro=[{name:"play",path:"/",component:C1,children:[...Xe]},{name:"print",path:"/print",component:Z0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(s){if(!lo.remote||lo.remote===s.query.password)return!0;if(lo.remote&&s.query.password===void 0){const t=prompt("Enter password");if(lo.remote===t)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};ro.push({path:"/presenter/print",component:()=>js(()=>import("./PresenterPrint-78fa3c18.js"),["assets/PresenterPrint-78fa3c18.js","assets/NoteDisplay-b7529003.js"])}),ro.push({name:"notes",path:"/notes",component:()=>js(()=>import("./NotesView-b5a80534.js"),["assets/NotesView-b5a80534.js","assets/NoteDisplay-b7529003.js"]),beforeEnter:n}),ro.push({name:"presenter",path:"/presenter/:no",component:()=>js(()=>import("./Presenter-7210bb8b.js"),["assets/Presenter-7210bb8b.js","assets/NoteDisplay-b7529003.js","assets/DrawingControls-190ba8cc.js","assets/Presenter-aa6741a8.css"]),beforeEnter:n}),ro.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Bn=e3({history:Qg("/admin-panel-revolution-for-your-symfony-projects/"),routes:ro});function jE(n,s,{mode:t="replace"}={}){return $({get(){const o=Bn.currentRoute.value.query[n];return o==null?s??null:Array.isArray(o)?o.filter(Boolean):o},set(o){tn(()=>{Bn[b(t)]({query:{...Bn.currentRoute.value.query,[n]:o}})})}})}const Iy=Q(0);tn(()=>{Bn.afterEach(async()=>{await tn(),Iy.value+=1})});const Ly=Q(0),Ln=$(()=>Bn.currentRoute.value),ds=$(()=>Ln.value.query.print!==void 0),OE=$(()=>Ln.value.query.print==="clicks"),as=$(()=>Ln.value.query.embedded!==void 0),An=$(()=>Ln.value.path.startsWith("/presenter")),PE=$(()=>Ln.value.path.startsWith("/notes")),ho=$(()=>ds.value&&!OE.value),wa=$(()=>Ln.value.query.password),IE=$(()=>!An.value&&(!$e.remote||wa.value===$e.remote)),jp=jE("clicks","0"),Ny=$(()=>Xe.length-1),LE=$(()=>Ln.value.path),Ke=$(()=>parseInt(LE.value.split(/\//g).slice(-1)[0])||1);$(()=>rr(Ke.value));const dn=$(()=>Xe.find(n=>n.path===`${Ke.value}`));$(()=>{var n,s,t;return(t=(s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.slide)==null?void 0:t.id});$(()=>{var n,s;return((s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.layout)||(Ke.value===1?"cover":"default")});const Tr=$(()=>Xe.find(n=>n.path===`${Math.min(Xe.length,Ke.value+1)}`)),NE=$(()=>Xe.find(n=>n.path===`${Math.max(1,Ke.value-1)}`)),RE=$(()=>{var n,s;return Iy.value,((s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.__clicksElements)||[]}),Pn=$({get(){if(ho.value)return 99999;let n=+(jp.value||0);return isNaN(n)&&(n=0),n},set(n){jp.value=n.toString()}}),Nl=$(()=>{var n,s;return+(((s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.clicks)??RE.value.length)}),ME=$(()=>Ke.value<Xe.length-1||Pn.value<Nl.value),qE=$(()=>Ke.value>1||Pn.value>0),GE=$(()=>Xe.filter(n=>{var s,t;return(t=(s=n.meta)==null?void 0:s.slide)==null?void 0:t.title}).reduce((n,s)=>(Ci(n,s),n),[])),HE=$(()=>bi(GE.value,dn.value));$(()=>wi(HE.value));const VE=$(()=>YE(Ly.value,dn.value,NE.value));ve(dn,(n,s)=>{Ly.value=Number(n==null?void 0:n.path)-Number(s==null?void 0:s.path)});function Os(){Nl.value<=Pn.value?Po():Pn.value+=1}async function Ps(){Pn.value<=0?await Io():Pn.value-=1}function rr(n){return An.value?`/presenter/${n}`:`/${n}`}function Po(){const n=Math.min(Xe.length,Ke.value+1);return Lt(n)}async function Io(n=!0){const s=Math.max(1,Ke.value-1);await Lt(s),n&&Nl.value&&Bn.replace({query:{...Ln.value.query,clicks:Nl.value}})}function Lt(n,s){return Bn.push({path:rr(n),query:{...Ln.value.query,clicks:s}})}function UE(n){const s=Q(0),{direction:t,distanceX:o,distanceY:l}=_g(n,{onSwipeStart(r){r.pointerType==="touch"&&(To.value||(s.value=ua()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!s.value||To.value)return;const i=Math.abs(o.value),c=Math.abs(l.value);i/window.innerWidth>.3||i>100?t.value===ps.LEFT?Os():Ps():(c/window.innerHeight>.4||c>200)&&(t.value===ps.DOWN?Io():Po())}})}async function Ea(){const{saveAs:n}=await js(()=>import("./FileSaver.min-17c85779.js").then(s=>s.F),[]);n(Rd($e.download)?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/admin-panel-revolution-for-your-symfony-projects/slidev-exported.pdf",`${$e.title}.pdf`)}async function WE(n){var s,t;if(n==null){const o=(t=(s=dn.value)==null?void 0:s.meta)==null?void 0:t.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Ci(n,s,t=1){var l,r,i,c,p;const o=(r=(l=s.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>t&&n.length>0?Ci(n[n.length-1].children,s,t+1):n.push({children:[],level:t,path:s.path,hideInToc:Boolean((i=s.meta)==null?void 0:i.hideInToc),title:(p=(c=s.meta)==null?void 0:c.slide)==null?void 0:p.title})}function bi(n,s,t=!1,o){return n.map(l=>{const r={...l,active:l.path===(s==null?void 0:s.path),hasActiveParent:t};return r.children.length>0&&(r.children=bi(r.children,s,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function wi(n,s=1){return n.filter(t=>!t.hideInToc).map(t=>({...t,children:wi(t.children,s+1)}))}const zE={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function KE(n,s=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let t=n.name.includes("|")?n.name:zE[n.name]||n.name;if(t.includes("|")){const[o,l]=t.split("|").map(r=>r.trim());t=s?l:o}if(t)return{...n,name:t}}function YE(n,s,t){var l,r;let o=n>0?(l=t==null?void 0:t.meta)==null?void 0:l.transition:(r=s==null?void 0:s.meta)==null?void 0:r.transition;return o||(o=$e.transition),KE(o,n<0)}function XE(){const n=$e.titleTemplate.replace("%s",$e.title||"Slidev");pi({title:n}),O_($e.htmlAttrs),W_(`${n} - shared`),X_(`${n} - drawings`);const s=`${location.origin}_${M_()}`;function t(){PE.value||!An.value&&!R_.includes(location.host.split(":")[0])||(An.value?(Yt("page",+Ke.value),Yt("clicks",Pn.value)):(Yt("viewerPage",+Ke.value),Yt("viewerClicks",Pn.value)),Yt("lastUpdate",{id:s,type:An.value?"presenter":"viewer",time:new Date().getTime()}))}Bn.afterEach(t),ve(Pn,t),z_(o=>{var r;Bn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ke.value||+Pn.value!=+o.clicks)&&Bn.replace({path:rr(o.page),query:{...Bn.currentRoute.value.query,clicks:o.clicks||0}})})}const ZE=we({__name:"App",setup(n){return F(O),XE(),(s,t)=>{const o=Ot("RouterView"),l=Ot("StarportCarrier");return _(),C(je,null,[M(o),M(l)],64)}}}),JE=P(ZE,[["__file","/home/runner/work/admin-panel-revolution-for-your-symfony-projects/admin-panel-revolution-for-your-symfony-projects/node_modules/@slidev/client/App.vue"]]);function jr(n){return n!==null&&typeof n=="object"}function xa(n,s,t=".",o){if(!jr(s))return xa(n,{},t,o);const l=Object.assign({},s);for(const r in n){if(r==="__proto__"||r==="constructor")continue;const i=n[r];i!=null&&(o&&o(l,r,i,t)||(Array.isArray(i)&&Array.isArray(l[r])?l[r]=[...i,...l[r]]:jr(i)&&jr(l[r])?l[r]=xa(i,l[r],(t?`${t}.`:"")+r.toString(),o):l[r]=i))}return l}function QE(n){return(...s)=>s.reduce((t,o)=>xa(t,o,"",n),{})}const ex=QE(),Ry=1/60*1e3,nx=typeof performance<"u"?()=>performance.now():()=>Date.now(),My=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(nx()),Ry);function sx(n){let s=[],t=[],o=0,l=!1,r=!1;const i=new WeakSet,c={schedule:(p,u=!1,d=!1)=>{const y=d&&l,f=y?s:t;return u&&i.add(p),f.indexOf(p)===-1&&(f.push(p),y&&l&&(o=s.length)),p},cancel:p=>{const u=t.indexOf(p);u!==-1&&t.splice(u,1),i.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[s,t]=[t,s],t.length=0,o=s.length,o)for(let u=0;u<o;u++){const d=s[u];d(p),i.has(d)&&(c.schedule(d),n())}l=!1,r&&(r=!1,c.process(p))}};return c}const tx=40;let Sa=!0,Lo=!1,Fa=!1;const Tt={delta:0,timestamp:0},Ko=["read","update","preRender","render","postRender"],ar=Ko.reduce((n,s)=>(n[s]=sx(()=>Lo=!0),n),{}),$a=Ko.reduce((n,s)=>{const t=ar[s];return n[s]=(o,l=!1,r=!1)=>(Lo||rx(),t.schedule(o,l,r)),n},{}),ox=Ko.reduce((n,s)=>(n[s]=ar[s].cancel,n),{});Ko.reduce((n,s)=>(n[s]=()=>ar[s].process(Tt),n),{});const lx=n=>ar[n].process(Tt),qy=n=>{Lo=!1,Tt.delta=Sa?Ry:Math.max(Math.min(n-Tt.timestamp,tx),1),Tt.timestamp=n,Fa=!0,Ko.forEach(lx),Fa=!1,Lo&&(Sa=!1,My(qy))},rx=()=>{Lo=!0,Sa=!0,Fa||My(qy)},Gy=()=>Tt;function Hy(n,s){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(n);l<o.length;l++)s.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(n,o[l])&&(t[o[l]]=n[o[l]]);return t}var Ei=function(){},No=function(){};Ei=function(n,s){!n&&typeof console<"u"&&console.warn(s)},No=function(n,s){if(!n)throw new Error(s)};const Ta=(n,s,t)=>Math.min(Math.max(t,n),s),Or=.001,ax=.01,Op=10,ix=.05,cx=1;function px({duration:n=800,bounce:s=.25,velocity:t=0,mass:o=1}){let l,r;Ei(n<=Op*1e3,"Spring duration must be 10 seconds or less");let i=1-s;i=Ta(ix,cx,i),n=Ta(ax,Op,n/1e3),i<1?(l=u=>{const d=u*i,y=d*n,f=d-t,h=ja(u,i),m=Math.exp(-y);return Or-f/h*m},r=u=>{const y=u*i*n,f=y*t+t,h=Math.pow(i,2)*Math.pow(u,2)*n,m=Math.exp(-y),A=ja(Math.pow(u,2),i);return(-l(u)+Or>0?-1:1)*((f-h)*m)/A}):(l=u=>{const d=Math.exp(-u*n),y=(u-t)*n+1;return-Or+d*y},r=u=>{const d=Math.exp(-u*n),y=(t-u)*(n*n);return d*y});const c=5/n,p=dx(l,r,c);if(n=n*1e3,isNaN(p))return{stiffness:100,damping:10,duration:n};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:i*2*Math.sqrt(o*u),duration:n}}}const ux=12;function dx(n,s,t){let o=t;for(let l=1;l<ux;l++)o=o-n(o)/s(o);return o}function ja(n,s){return n*Math.sqrt(1-s*s)}const yx=["duration","bounce"],fx=["stiffness","damping","mass"];function Pp(n,s){return s.some(t=>n[t]!==void 0)}function mx(n){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Pp(n,fx)&&Pp(n,yx)){const t=px(n);s=Object.assign(Object.assign(Object.assign({},s),t),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function xi(n){var{from:s=0,to:t=1,restSpeed:o=2,restDelta:l}=n,r=Hy(n,["from","to","restSpeed","restDelta"]);const i={done:!1,value:s};let{stiffness:c,damping:p,mass:u,velocity:d,duration:y,isResolvedFromDuration:f}=mx(r),h=Ip,m=Ip;function A(){const v=d?-(d/1e3):0,w=t-s,k=p/(2*Math.sqrt(c*u)),D=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(t-s)/100,.4)),k<1){const x=ja(D,k);h=L=>{const G=Math.exp(-k*D*L);return t-G*((v+k*D*w)/x*Math.sin(x*L)+w*Math.cos(x*L))},m=L=>{const G=Math.exp(-k*D*L);return k*D*G*(Math.sin(x*L)*(v+k*D*w)/x+w*Math.cos(x*L))-G*(Math.cos(x*L)*(v+k*D*w)-x*w*Math.sin(x*L))}}else if(k===1)h=x=>t-Math.exp(-D*x)*(w+(v+D*w)*x);else{const x=D*Math.sqrt(k*k-1);h=L=>{const G=Math.exp(-k*D*L),X=Math.min(x*L,300);return t-G*((v+k*D*w)*Math.sinh(X)+x*w*Math.cosh(X))/x}}}return A(),{next:v=>{const w=h(v);if(f)i.done=v>=y;else{const k=m(v)*1e3,D=Math.abs(k)<=o,x=Math.abs(t-w)<=l;i.done=D&&x}return i.value=i.done?t:w,i},flipTarget:()=>{d=-d,[s,t]=[t,s],A()}}}xi.needsInterpolation=(n,s)=>typeof n=="string"||typeof s=="string";const Ip=n=>0,Vy=(n,s,t)=>{const o=s-n;return o===0?1:(t-n)/o},Si=(n,s,t)=>-t*n+t*s+n,Uy=(n,s)=>t=>Math.max(Math.min(t,s),n),_o=n=>n%1?Number(n.toFixed(5)):n,Ro=/(-)?([\d]*\.?[\d])+/g,Oa=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Yo(n){return typeof n=="string"}const Xo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},go=Object.assign(Object.assign({},Xo),{transform:Uy(0,1)}),cl=Object.assign(Object.assign({},Xo),{default:1}),Fi=n=>({test:s=>Yo(s)&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),Hs=Fi("deg"),Ao=Fi("%"),Ae=Fi("px"),Lp=Object.assign(Object.assign({},Ao),{parse:n=>Ao.parse(n)/100,transform:n=>Ao.transform(n*100)}),$i=(n,s)=>t=>Boolean(Yo(t)&&hx.test(t)&&t.startsWith(n)||s&&Object.prototype.hasOwnProperty.call(t,s)),Wy=(n,s,t)=>o=>{if(!Yo(o))return o;const[l,r,i,c]=o.match(Ro);return{[n]:parseFloat(l),[s]:parseFloat(r),[t]:parseFloat(i),alpha:c!==void 0?parseFloat(c):1}},Qs={test:$i("hsl","hue"),parse:Wy("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:t,alpha:o=1})=>"hsla("+Math.round(n)+", "+Ao.transform(_o(s))+", "+Ao.transform(_o(t))+", "+_o(go.transform(o))+")"},_x=Uy(0,255),Pr=Object.assign(Object.assign({},Xo),{transform:n=>Math.round(_x(n))}),xs={test:$i("rgb","red"),parse:Wy("red","green","blue"),transform:({red:n,green:s,blue:t,alpha:o=1})=>"rgba("+Pr.transform(n)+", "+Pr.transform(s)+", "+Pr.transform(t)+", "+_o(go.transform(o))+")"};function gx(n){let s="",t="",o="",l="";return n.length>5?(s=n.substr(1,2),t=n.substr(3,2),o=n.substr(5,2),l=n.substr(7,2)):(s=n.substr(1,1),t=n.substr(2,1),o=n.substr(3,1),l=n.substr(4,1),s+=s,t+=t,o+=o,l+=l),{red:parseInt(s,16),green:parseInt(t,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Pa={test:$i("#"),parse:gx,transform:xs.transform},gn={test:n=>xs.test(n)||Pa.test(n)||Qs.test(n),parse:n=>xs.test(n)?xs.parse(n):Qs.test(n)?Qs.parse(n):Pa.parse(n),transform:n=>Yo(n)?n:n.hasOwnProperty("red")?xs.transform(n):Qs.transform(n)},zy="${c}",Ky="${n}";function Ax(n){var s,t,o,l;return isNaN(n)&&Yo(n)&&((t=(s=n.match(Ro))===null||s===void 0?void 0:s.length)!==null&&t!==void 0?t:0)+((l=(o=n.match(Oa))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Yy(n){typeof n=="number"&&(n=`${n}`);const s=[];let t=0;const o=n.match(Oa);o&&(t=o.length,n=n.replace(Oa,zy),s.push(...o.map(gn.parse)));const l=n.match(Ro);return l&&(n=n.replace(Ro,Ky),s.push(...l.map(Xo.parse))),{values:s,numColors:t,tokenised:n}}function Xy(n){return Yy(n).values}function Zy(n){const{values:s,numColors:t,tokenised:o}=Yy(n),l=s.length;return r=>{let i=o;for(let c=0;c<l;c++)i=i.replace(c<t?zy:Ky,c<t?gn.transform(r[c]):_o(r[c]));return i}}const vx=n=>typeof n=="number"?0:n;function Bx(n){const s=Xy(n);return Zy(n)(s.map(vx))}const Zo={test:Ax,parse:Xy,createTransformer:Zy,getAnimatableNone:Bx},kx=new Set(["brightness","contrast","saturate","opacity"]);function Dx(n){let[s,t]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[o]=t.match(Ro)||[];if(!o)return n;const l=t.replace(o,"");let r=kx.has(s)?1:0;return o!==t&&(r*=100),s+"("+r+l+")"}const Cx=/([a-z-]*)\(.*?\)/g,Ia=Object.assign(Object.assign({},Zo),{getAnimatableNone:n=>{const s=n.match(Cx);return s?s.map(Dx).join(" "):n}});function Ir(n,s,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(s-n)*6*t:t<1/2?s:t<2/3?n+(s-n)*(2/3-t)*6:n}function Np({hue:n,saturation:s,lightness:t,alpha:o}){n/=360,s/=100,t/=100;let l=0,r=0,i=0;if(!s)l=r=i=t;else{const c=t<.5?t*(1+s):t+s-t*s,p=2*t-c;l=Ir(p,c,n+1/3),r=Ir(p,c,n),i=Ir(p,c,n-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(i*255),alpha:o}}const bx=(n,s,t)=>{const o=n*n,l=s*s;return Math.sqrt(Math.max(0,t*(l-o)+o))},wx=[Pa,xs,Qs],Rp=n=>wx.find(s=>s.test(n)),Mp=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,Jy=(n,s)=>{let t=Rp(n),o=Rp(s);No(!!t,Mp(n)),No(!!o,Mp(s));let l=t.parse(n),r=o.parse(s);t===Qs&&(l=Np(l),t=xs),o===Qs&&(r=Np(r),o=xs);const i=Object.assign({},l);return c=>{for(const p in i)p!=="alpha"&&(i[p]=bx(l[p],r[p],c));return i.alpha=Si(l.alpha,r.alpha,c),t.transform(i)}},Ex=n=>typeof n=="number",xx=(n,s)=>t=>s(n(t)),Qy=(...n)=>n.reduce(xx);function ef(n,s){return Ex(n)?t=>Si(n,s,t):gn.test(n)?Jy(n,s):sf(n,s)}const nf=(n,s)=>{const t=[...n],o=t.length,l=n.map((r,i)=>ef(r,s[i]));return r=>{for(let i=0;i<o;i++)t[i]=l[i](r);return t}},Sx=(n,s)=>{const t=Object.assign(Object.assign({},n),s),o={};for(const l in t)n[l]!==void 0&&s[l]!==void 0&&(o[l]=ef(n[l],s[l]));return l=>{for(const r in o)t[r]=o[r](l);return t}};function qp(n){const s=Zo.parse(n),t=s.length;let o=0,l=0,r=0;for(let i=0;i<t;i++)o||typeof s[i]=="number"?o++:s[i].hue!==void 0?r++:l++;return{parsed:s,numNumbers:o,numRGB:l,numHSL:r}}const sf=(n,s)=>{const t=Zo.createTransformer(s),o=qp(n),l=qp(s);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Qy(nf(o.parsed,l.parsed),t):(Ei(!0,`Complex values '${n}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?s:n}`)},Fx=(n,s)=>t=>Si(n,s,t);function $x(n){if(typeof n=="number")return Fx;if(typeof n=="string")return gn.test(n)?Jy:sf;if(Array.isArray(n))return nf;if(typeof n=="object")return Sx}function Tx(n,s,t){const o=[],l=t||$x(n[0]),r=n.length-1;for(let i=0;i<r;i++){let c=l(n[i],n[i+1]);if(s){const p=Array.isArray(s)?s[i]:s;c=Qy(p,c)}o.push(c)}return o}function jx([n,s],[t]){return o=>t(Vy(n,s,o))}function Ox(n,s){const t=n.length,o=t-1;return l=>{let r=0,i=!1;if(l<=n[0]?i=!0:l>=n[o]&&(r=o-1,i=!0),!i){let p=1;for(;p<t&&!(n[p]>l||p===o);p++);r=p-1}const c=Vy(n[r],n[r+1],l);return s[r](c)}}function tf(n,s,{clamp:t=!0,ease:o,mixer:l}={}){const r=n.length;No(r===s.length,"Both input and output ranges must be the same length"),No(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[r-1]&&(n=[].concat(n),s=[].concat(s),n.reverse(),s.reverse());const i=Tx(s,o,l),c=r===2?jx(n,i):Ox(n,i);return t?p=>c(Ta(n[0],n[r-1],p)):c}const ir=n=>s=>1-n(1-s),Ti=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,Px=n=>s=>Math.pow(s,n),of=n=>s=>s*s*((n+1)*s-n),Ix=n=>{const s=of(n);return t=>(t*=2)<1?.5*s(t):.5*(2-Math.pow(2,-10*(t-1)))},lf=1.525,Lx=4/11,Nx=8/11,Rx=9/10,rf=n=>n,ji=Px(2),Mx=ir(ji),af=Ti(ji),cf=n=>1-Math.sin(Math.acos(n)),pf=ir(cf),qx=Ti(pf),Oi=of(lf),Gx=ir(Oi),Hx=Ti(Oi),Vx=Ix(lf),Ux=4356/361,Wx=35442/1805,zx=16061/1805,Rl=n=>{if(n===1||n===0)return n;const s=n*n;return n<Lx?7.5625*s:n<Nx?9.075*s-9.9*n+3.4:n<Rx?Ux*s-Wx*n+zx:10.8*n*n-20.52*n+10.72},Kx=ir(Rl),Yx=n=>n<.5?.5*(1-Rl(1-n*2)):.5*Rl(n*2-1)+.5;function Xx(n,s){return n.map(()=>s||af).splice(0,n.length-1)}function Zx(n){const s=n.length;return n.map((t,o)=>o!==0?o/(s-1):0)}function Jx(n,s){return n.map(t=>t*s)}function Al({from:n=0,to:s=1,ease:t,offset:o,duration:l=300}){const r={done:!1,value:n},i=Array.isArray(s)?s:[n,s],c=Jx(o&&o.length===i.length?o:Zx(i),l);function p(){return tf(c,i,{ease:Array.isArray(t)?t:Xx(i,t)})}let u=p();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{i.reverse(),u=p()}}}function Qx({velocity:n=0,from:s=0,power:t=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const i={done:!1,value:s};let c=t*n;const p=s+c,u=r===void 0?p:r(p);return u!==p&&(c=u-s),{next:d=>{const y=-c*Math.exp(-d/o);return i.done=!(y>l||y<-l),i.value=i.done?u:u+y,i},flipTarget:()=>{}}}const Gp={keyframes:Al,spring:xi,decay:Qx};function e2(n){if(Array.isArray(n.to))return Al;if(Gp[n.type])return Gp[n.type];const s=new Set(Object.keys(n));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?Al:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?xi:Al}function uf(n,s,t=0){return n-s-t}function n2(n,s,t=0,o=!0){return o?uf(s+-n,s,t):s-(n-s)+t}function s2(n,s,t,o){return o?n>=s+t:n<=-t}const t2=n=>{const s=({delta:t})=>n(t);return{start:()=>$a.update(s,!0),stop:()=>ox.update(s)}};function df(n){var s,t,{from:o,autoplay:l=!0,driver:r=t2,elapsed:i=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:y,onComplete:f,onRepeat:h,onUpdate:m}=n,A=Hy(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=A,w,k=0,D=A.duration,x,L=!1,G=!0,X;const I=e2(A);!((t=(s=I).needsInterpolation)===null||t===void 0)&&t.call(s,o,v)&&(X=tf([0,100],[o,v],{clamp:!1}),o=0,v=100);const K=I(Object.assign(Object.assign({},A),{from:o,to:v}));function oe(){k++,p==="reverse"?(G=k%2===0,i=n2(i,D,u,G)):(i=uf(i,D,u),p==="mirror"&&K.flipTarget()),L=!1,h&&h()}function ue(){w.stop(),f&&f()}function ee(Oe){if(G||(Oe=-Oe),i+=Oe,!L){const Se=K.next(Math.max(0,i));x=Se.value,X&&(x=X(x)),L=G?Se.done:i<=0}m==null||m(x),L&&(k===0&&(D??(D=i)),k<c?s2(i,D,u,G)&&oe():ue())}function De(){d==null||d(),w=r(ee),w.start()}return l&&De(),{stop:()=>{y==null||y(),w.stop()}}}function yf(n,s){return s?n*(1e3/s):0}function o2({from:n=0,velocity:s=0,min:t,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:i=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:y,onComplete:f,onStop:h}){let m;function A(D){return t!==void 0&&D<t||o!==void 0&&D>o}function v(D){return t===void 0?o:o===void 0||Math.abs(t-D)<Math.abs(o-D)?t:o}function w(D){m==null||m.stop(),m=df(Object.assign(Object.assign({},D),{driver:d,onUpdate:x=>{var L;y==null||y(x),(L=D.onUpdate)===null||L===void 0||L.call(D,x)},onComplete:f,onStop:h}))}function k(D){w(Object.assign({type:"spring",stiffness:i,damping:c,restDelta:p},D))}if(A(n))k({from:n,velocity:s,to:v(n)});else{let D=l*s+n;typeof u<"u"&&(D=u(D));const x=v(D),L=x===t?-1:1;let G,X;const I=K=>{G=X,X=K,s=yf(K-G,Gy().delta),(L===1&&K>x||L===-1&&K<x)&&k({from:K,to:x,velocity:s})};w({type:"decay",from:n,velocity:s,timeConstant:r,power:l,restDelta:p,modifyTarget:u,onUpdate:A(D)?I:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const ff=(n,s)=>1-3*s+3*n,mf=(n,s)=>3*s-6*n,hf=n=>3*n,Ml=(n,s,t)=>((ff(s,t)*n+mf(s,t))*n+hf(s))*n,_f=(n,s,t)=>3*ff(s,t)*n*n+2*mf(s,t)*n+hf(s),l2=1e-7,r2=10;function a2(n,s,t,o,l){let r,i,c=0;do i=s+(t-s)/2,r=Ml(i,o,l)-n,r>0?t=i:s=i;while(Math.abs(r)>l2&&++c<r2);return i}const i2=8,c2=.001;function p2(n,s,t,o){for(let l=0;l<i2;++l){const r=_f(s,t,o);if(r===0)return s;const i=Ml(s,t,o)-n;s-=i/r}return s}const vl=11,pl=1/(vl-1);function u2(n,s,t,o){if(n===s&&t===o)return rf;const l=new Float32Array(vl);for(let i=0;i<vl;++i)l[i]=Ml(i*pl,n,t);function r(i){let c=0,p=1;const u=vl-1;for(;p!==u&&l[p]<=i;++p)c+=pl;--p;const d=(i-l[p])/(l[p+1]-l[p]),y=c+d*pl,f=_f(y,n,t);return f>=c2?p2(i,y,n,t):f===0?y:a2(i,c,c+pl,n,t)}return i=>i===0||i===1?i:Ml(r(i),s,o)}const Lr={};class d2{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,t,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(s,t,o)}clear(){this.subscriptions.clear()}}const Hp=n=>!isNaN(parseFloat(n));class y2{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new d2,this.canTrackVelocity=!1,this.updateAndNotify=t=>{this.prev=this.current,this.current=t;const{delta:o,timestamp:l}=Gy();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),$a.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>$a.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=Hp(this.current)),t!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Hp(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?yf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(t=>{const{stop:o}=s(t);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function f2(n){return new y2(n)}const{isArray:m2}=Array;function h2(){const n=Q({}),s=o=>{const l=r=>{n.value[r]&&(n.value[r].stop(),n.value[r].destroy(),delete n.value[r])};o?m2(o)?o.forEach(l):l(o):Object.keys(n.value).forEach(l)},t=(o,l,r)=>{if(n.value[o])return n.value[o];const i=f2(l);return i.onChange(c=>r[o]=c),n.value[o]=i,i};return g5(s),{motionValues:n,get:t,stop:s}}const _2=n=>Array.isArray(n),Vs=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Nr=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),g2=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),Rr=()=>({type:"keyframes",ease:"linear",duration:300}),A2=n=>({type:"keyframes",duration:800,values:n}),Vp={default:g2,x:Vs,y:Vs,z:Vs,rotate:Vs,rotateX:Vs,rotateY:Vs,rotateZ:Vs,scaleX:Nr,scaleY:Nr,scale:Nr,backgroundColor:Rr,color:Rr,opacity:Rr},gf=(n,s)=>{let t;return _2(s)?t=A2:t=Vp[n]||Vp.default,{to:s,...t(s)}},Up={...Xo,transform:Math.round},Af={color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,borderWidth:Ae,borderTopWidth:Ae,borderRightWidth:Ae,borderBottomWidth:Ae,borderLeftWidth:Ae,borderRadius:Ae,radius:Ae,borderTopLeftRadius:Ae,borderTopRightRadius:Ae,borderBottomRightRadius:Ae,borderBottomLeftRadius:Ae,width:Ae,maxWidth:Ae,height:Ae,maxHeight:Ae,size:Ae,top:Ae,right:Ae,bottom:Ae,left:Ae,padding:Ae,paddingTop:Ae,paddingRight:Ae,paddingBottom:Ae,paddingLeft:Ae,margin:Ae,marginTop:Ae,marginRight:Ae,marginBottom:Ae,marginLeft:Ae,rotate:Hs,rotateX:Hs,rotateY:Hs,rotateZ:Hs,scale:cl,scaleX:cl,scaleY:cl,scaleZ:cl,skew:Hs,skewX:Hs,skewY:Hs,distance:Ae,translateX:Ae,translateY:Ae,translateZ:Ae,x:Ae,y:Ae,z:Ae,perspective:Ae,transformPerspective:Ae,opacity:go,originX:Lp,originY:Lp,originZ:Ae,zIndex:Up,filter:Ia,WebkitFilter:Ia,fillOpacity:go,strokeOpacity:go,numOctaves:Up},Pi=n=>Af[n],vf=(n,s)=>s&&typeof n=="number"&&s.transform?s.transform(n):n;function v2(n,s){let t=Pi(n);return t!==Ia&&(t=Zo),t.getAnimatableNone?t.getAnimatableNone(s):void 0}const B2={linear:rf,easeIn:ji,easeInOut:af,easeOut:Mx,circIn:cf,circInOut:qx,circOut:pf,backIn:Oi,backInOut:Hx,backOut:Gx,anticipate:Vx,bounceIn:Kx,bounceInOut:Yx,bounceOut:Rl},Wp=n=>{if(Array.isArray(n)){const[s,t,o,l]=n;return u2(s,t,o,l)}else if(typeof n=="string")return B2[n];return n},k2=n=>Array.isArray(n)&&typeof n[0]!="number",zp=(n,s)=>n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Zo.test(s)&&!s.startsWith("url("));function D2(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function C2({ease:n,times:s,delay:t,...o}){const l={...o};return s&&(l.offset=s),n&&(l.ease=k2(n)?n.map(Wp):Wp(n)),t&&(l.elapsed=-t),l}function b2(n,s,t){return Array.isArray(s.to)&&(n.duration||(n.duration=800)),D2(s),w2(n)||(n={...n,...gf(t,s.to)}),{...s,...C2(n)}}function w2({delay:n,repeat:s,repeatType:t,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function E2(n,s){return n[s]||n.default||n}function x2(n,s,t,o,l){const r=E2(o,n);let i=r.from===null||r.from===void 0?s.get():r.from;const c=zp(n,t);i==="none"&&c&&typeof t=="string"&&(i=v2(n,t));const p=zp(n,i);function u(y){const f={from:i,to:t,velocity:o.velocity?o.velocity:s.getVelocity(),onUpdate:h=>s.set(h)};return r.type==="inertia"||r.type==="decay"?o2({...f,...r}):df({...b2(r,f,n),onUpdate:h=>{f.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),y&&y()}})}function d(y){return s.set(t),o.onComplete&&o.onComplete(),l&&l(),y&&y(),{stop:()=>{}}}return!p||!c||r.type===!1?d:u}function S2(){const{motionValues:n,stop:s,get:t}=h2();return{motionValues:n,stop:s,push:(l,r,i,c={},p)=>{const u=i[l],d=t(l,u,i);if(c&&c.immediate){d.set(r);return}const y=x2(l,d,r,c,p);d.start(y)}}}function F2(n,s={},{motionValues:t,push:o,stop:l}=S2()){const r=b(s),i=Q(!1);ve(t,y=>{i.value=Object.values(y).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=y=>{if(!r||!r[y])throw new Error(`The variant ${y} does not exist.`);return r[y]},p=y=>(typeof y=="string"&&(y=c(y)),Promise.all(Object.entries(y).map(([f,h])=>{if(f!=="transition")return new Promise(m=>o(f,h,n,y.transition||gf(f,y[f]),m))}).filter(Boolean)));return{isAnimating:i,apply:p,set:y=>{const f=pa(y)?y:c(y);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&o(h,m,n,{immediate:!0})})},leave:async y=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){y();return}await p(f),y()},stop:l}}const Ii=typeof window<"u",$2=()=>Ii&&window.onpointerdown===null,T2=()=>Ii&&window.ontouchstart===null,j2=()=>Ii&&window.onmousedown===null;function O2({target:n,state:s,variants:t,apply:o}){const l=b(t),r=Q(!1),i=Q(!1),c=Q(!1),p=$(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=$(()=>{const d={};Object.assign(d,s.value),r.value&&l.hovered&&Object.assign(d,l.hovered),i.value&&l.tapped&&Object.assign(d,l.tapped),c.value&&l.focused&&Object.assign(d,l.focused);for(const y in d)p.value.includes(y)||delete d[y];return d});l.hovered&&(Be(n,"mouseenter",()=>r.value=!0),Be(n,"mouseleave",()=>{r.value=!1,i.value=!1}),Be(n,"mouseout",()=>{r.value=!1,i.value=!1})),l.tapped&&(j2()&&(Be(n,"mousedown",()=>i.value=!0),Be(n,"mouseup",()=>i.value=!1)),$2()&&(Be(n,"pointerdown",()=>i.value=!0),Be(n,"pointerup",()=>i.value=!1)),T2()&&(Be(n,"touchstart",()=>i.value=!0),Be(n,"touchend",()=>i.value=!1))),l.focused&&(Be(n,"focus",()=>c.value=!0),Be(n,"blur",()=>c.value=!1)),ve(u,o)}function P2({set:n,target:s,apply:t,variants:o,variant:l}){const r=b(o);ve(()=>s,()=>{r&&(r.initial&&n("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function I2({state:n,apply:s}){ve(n,t=>{t&&s(t)},{immediate:!0})}function L2({target:n,variants:s,variant:t}){const o=b(s);o&&(o.visible||o.visibleOnce)&&fg(n,([{isIntersecting:l}])=>{o.visible?l?t.value="visible":t.value="initial":o.visibleOnce&&(l&&t.value!=="visibleOnce"?t.value="visibleOnce":t.value||(t.value="initial"))})}function N2(n,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&P2(n),s.syncVariants&&I2(n),s.visibilityHooks&&L2(n),s.eventListeners&&O2(n)}function Bf(n={}){const s=Ve({...n}),t=Q({});return ve(s,()=>{const o={};for(const[l,r]of Object.entries(s)){const i=Pi(l),c=vf(r,i);o[l]=c}t.value=o},{immediate:!0,deep:!0}),{state:s,style:t}}function Li(n,s){ve(()=>xn(n),t=>{t&&s(t)},{immediate:!0})}const R2={x:"translateX",y:"translateY",z:"translateZ"};function kf(n={},s=!0){const t=Ve({...n}),o=Q("");return ve(t,l=>{let r="",i=!1;if(s&&(l.x||l.y||l.z)){const c=[l.x||0,l.y||0,l.z||0].map(Ae.transform).join(",");r+=`translate3d(${c}) `,i=!0}for(const[c,p]of Object.entries(l)){if(s&&(c==="x"||c==="y"||c==="z"))continue;const u=Pi(c),d=vf(p,u);r+=`${R2[c]||c}(${d}) `}s&&!i&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:t,transform:o}}const M2=["","X","Y","Z"],q2=["perspective","translate","scale","rotate","skew"],Df=["transformPerspective","x","y","z"];q2.forEach(n=>{M2.forEach(s=>{const t=n+s;Df.push(t)})});const G2=new Set(Df);function Ni(n){return G2.has(n)}const H2=new Set(["originX","originY","originZ"]);function Cf(n){return H2.has(n)}function V2(n){const s={},t={};return Object.entries(n).forEach(([o,l])=>{Ni(o)||Cf(o)?s[o]=l:t[o]=l}),{transform:s,style:t}}function bf(n){const{transform:s,style:t}=V2(n),{transform:o}=kf(s),{style:l}=Bf(t);return o.value&&(l.value.transform=o.value),l.value}function U2(n,s){let t,o;const{state:l,style:r}=Bf();return Li(n,i=>{o=i;for(const c of Object.keys(Af))i.style[c]===null||i.style[c]===""||Ni(c)||Cf(c)||(l[c]=i.style[c]);t&&Object.entries(t).forEach(([c,p])=>i.style[c]=p),s&&s(l)}),ve(r,i=>{if(!o){t=i;return}for(const c in i)o.style[c]=i[c]},{immediate:!0}),{style:l}}function W2(n){const s=n.trim().split(/\) |\)/);if(s.length===1)return{};const t=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return s.reduce((o,l)=>{if(!l)return o;const[r,i]=l.split("("),p=i.split(",").map(d=>t(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...o,[r]:u}},{})}function z2(n,s){Object.entries(W2(s)).forEach(([t,o])=>{const l=["x","y","z"];if(t==="translate3d"){if(o===0){l.forEach(r=>n[r]=0);return}o.forEach((r,i)=>n[l[i]]=r);return}if(o=parseFloat(o),t==="translateX"){n.x=o;return}if(t==="translateY"){n.y=o;return}if(t==="translateZ"){n.z=o;return}n[t]=o})}function K2(n,s){let t,o;const{state:l,transform:r}=kf();return Li(n,i=>{o=i,i.style.transform&&z2(l,i.style.transform),t&&(i.style.transform=t),s&&s(l)}),ve(r,i=>{if(!o){t=i;return}o.style.transform=i},{immediate:!0}),{transform:l}}function Y2(n,s){const t=Ve({}),o=i=>Object.entries(i).forEach(([c,p])=>t[c]=p),{style:l}=U2(n,o),{transform:r}=K2(n,o);return ve(t,i=>{Object.entries(i).forEach(([c,p])=>{const u=Ni(c)?r:l;u[c]&&u[c]===p||(u[c]=p)})},{immediate:!0,deep:!0}),Li(n,()=>s&&o(s)),{motionProperties:t,style:l,transform:r}}function X2(n={}){const s=b(n),t=Q();return{state:$(()=>{if(t.value)return s[t.value]}),variant:t}}function wf(n,s={},t){const{motionProperties:o}=Y2(n),{variant:l,state:r}=X2(s),i=F2(o,s),c={target:n,variant:l,variants:s,state:r,motionProperties:o,...i};return N2(c,t),c}const Z2=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],J2=(n,s)=>{const t=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};t&&(t.variants&&pa(t.variants)&&(s.value={...s.value,...t.variants}),Z2.forEach(o=>{if(o==="delay"){if(t&&t[o]&&s5(t[o])){const l=t[o];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:l,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:l,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:l,...s.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),t&&t[o]&&pa(t[o])&&(s.value[o]=t[o])}))},Mr=n=>({created:(t,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Lr[r]&&Lr[r].stop();const i=Q(n||{});typeof o.value=="object"&&(i.value=o.value),J2(l,i);const c=wf(t,i);t.motionInstance=c,r&&(Lr[r]=c)},getSSRProps(t,o){let{initial:l}=t.value||o&&(o==null?void 0:o.props)||{};l=b(l);const r=ex((n==null?void 0:n.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:bf(r)}}}),Q2={initial:{opacity:0},enter:{opacity:1}},eS={initial:{opacity:0},visible:{opacity:1}},nS={initial:{opacity:0},visibleOnce:{opacity:1}},sS={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},tS={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},oS={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},lS={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},rS={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},aS={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},iS={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},cS={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},pS={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},uS={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},dS={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},yS={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},fS={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},mS={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},hS={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},_S={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},gS={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},AS={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},vS={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},BS={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},kS={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},DS={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},CS={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},bS={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},wS={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},ES={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},xS={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},La={__proto__:null,fade:Q2,fadeVisible:eS,fadeVisibleOnce:nS,pop:sS,popVisible:tS,popVisibleOnce:oS,rollBottom:fS,rollLeft:lS,rollRight:iS,rollTop:uS,rollVisibleBottom:mS,rollVisibleLeft:rS,rollVisibleOnceBottom:hS,rollVisibleOnceLeft:aS,rollVisibleOnceRight:pS,rollVisibleOnceTop:yS,rollVisibleRight:cS,rollVisibleTop:dS,slideBottom:wS,slideLeft:_S,slideRight:vS,slideTop:DS,slideVisibleBottom:ES,slideVisibleLeft:gS,slideVisibleOnceBottom:xS,slideVisibleOnceLeft:AS,slideVisibleOnceRight:kS,slideVisibleOnceTop:bS,slideVisibleRight:BS,slideVisibleTop:CS},SS=we({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const s=ih(),t=Ve({});if(!n.is&&!s.default)return()=>fn("div",{});const o=$(()=>{let p;return n.preset&&(p=La[n.preset]),p}),l=$(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),r=$(()=>{const p={...l.value,...o.value||{},...n.variants||{}};return n.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(n.delay)),p}),i=$(()=>{if(!n.is)return;let p=n.is;return typeof i.value=="string"&&!ru(p)&&(p=Ot(p)),p});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var y,f,h;(y=u.variants)!=null&&y.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Ql(()=>Object.entries(t).forEach(([u,d])=>p(d)))}return{slots:s,component:i,motionConfig:r,instances:t}},render({slots:n,motionConfig:s,instances:t,component:o}){var c;const l=bf(s.initial||{}),r=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:d})=>{const y=wf(d,s);t[u]=y},p);if(o){const p=fn(o,void 0,n);return r(p,0),p}return(((c=n.default)==null?void 0:c.call(n))||[]).map((p,u)=>r(p,u))}});function FS(n){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",t="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(s.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>t.charAt(s.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const $S={install(n,s){if(n.directive("motion",Mr()),n.component("Motion",SS),!s||s&&!s.excludePresets)for(const t in La){const o=La[t];n.directive(`motion-${FS(t)}`,Mr(o))}if(s&&s.directives)for(const t in s.directives){const o=s.directives[t];o.initial,n.directive(`motion-${t}`,Mr(o))}}};var Kp;const vo=typeof window<"u",TS=Object.prototype.toString,jS=n=>TS.call(n)==="[object Object]";vo&&((Kp=window==null?void 0:window.navigator)!=null&&Kp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function OS(n){return Ua()?(mu(n),!0):!1}function PS(n){var s;const t=b(n);return(s=t==null?void 0:t.$el)!=null?s:t}const IS=vo?window:void 0,Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ra="__vueuse_ssr_handlers__";Na[Ra]=Na[Ra]||{};Na[Ra];function LS(n,s={}){const{immediate:t=!0,window:o=IS}=s,l=Q(!1);let r=null;function i(){!l.value||!o||(n(),r=o.requestAnimationFrame(i))}function c(){!l.value&&o&&(l.value=!0,i())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return t&&c(),OS(p),{isActive:l,pause:p,resume:c}}var Yp;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Yp||(Yp={}));const cr="vue-starport-injection",Ef="vue-starport-options",NS={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},xf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var RS=Object.defineProperty,ql=Object.getOwnPropertySymbols,Sf=Object.prototype.hasOwnProperty,Ff=Object.prototype.propertyIsEnumerable,Xp=(n,s,t)=>s in n?RS(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,MS=(n,s)=>{for(var t in s||(s={}))Sf.call(s,t)&&Xp(n,t,s[t]);if(ql)for(var t of ql(s))Ff.call(s,t)&&Xp(n,t,s[t]);return n},Zp=(n,s)=>{var t={};for(var o in n)Sf.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&ql)for(var o of ql(n))s.indexOf(o)<0&&Ff.call(n,o)&&(t[o]=n[o]);return t};const qS=we({name:"StarportProxy",props:MS({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},xf),setup(n,s){const t=F(cr),o=$(()=>t.getInstance(n.port,n.component)),l=Q(),r=o.value.generateId(),i=Q(!1);return o.value.isVisible||(o.value.land(),i.value=!0),yt(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await tn(),i.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Vo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await tn(),await tn(),!o.value.el&&t.dispose(o.value.port))}),ve(()=>n,async()=>{o.value.props&&await tn();const c=n,{props:p}=c,u=Zp(c,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:p,mountedProps:u}=c,d=Zp(c,["initialProps","mountedProps"]),y=me(d,(i.value?u:p)||{});return fn("div",me(y,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),s.slots.default?fn(s.slots.default):void 0)}}});var GS=Object.defineProperty,HS=Object.defineProperties,VS=Object.getOwnPropertyDescriptors,Jp=Object.getOwnPropertySymbols,US=Object.prototype.hasOwnProperty,WS=Object.prototype.propertyIsEnumerable,Qp=(n,s,t)=>s in n?GS(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,zS=(n,s)=>{for(var t in s||(s={}))US.call(s,t)&&Qp(n,t,s[t]);if(Jp)for(var t of Jp(s))WS.call(s,t)&&Qp(n,t,s[t]);return n},KS=(n,s)=>HS(n,VS(s));const YS=we({name:"Starport",inheritAttrs:!0,props:xf,setup(n,s){const t=Q(!1);return yt(()=>{if(t.value=!0,!F(cr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,c;const o=(c=(i=s.slots).default)==null?void 0:c.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!jS(r)||ms(r))&&(r={render(){return o}}),fn(qS,KS(zS({},n),{key:n.port,component:zl(r),props:l.props}))}}});function XS(n){const s=Ve({height:0,width:0,left:0,top:0,update:o,listen:r,pause:i,margin:"0px",padding:"0px"}),t=vo?document.documentElement||document.body:void 0;function o(){if(!vo)return;const c=PS(n);if(!c)return;const{height:p,width:u,left:d,top:y}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,m=f.padding;Object.assign(s,{height:p,width:u,left:d,top:t.scrollTop+y,margin:h,padding:m})}const l=LS(o,{immediate:!1});function r(){vo&&(o(),l.resume())}function i(){l.pause()}return s}let ZS=(n,s=21)=>(t=s)=>{let o="",l=t;for(;l--;)o+=n[Math.random()*n.length|0];return o};const eu=ZS("abcdefghijklmnopqrstuvwxyz",5);function nu(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function JS(n){var s;return n.name||((s=n.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var QS=Object.defineProperty,su=Object.getOwnPropertySymbols,eF=Object.prototype.hasOwnProperty,nF=Object.prototype.propertyIsEnumerable,tu=(n,s,t)=>s in n?QS(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,qr=(n,s)=>{for(var t in s||(s={}))eF.call(s,t)&&tu(n,t,s[t]);if(su)for(var t of su(s))nF.call(s,t)&&tu(n,t,s[t]);return n};function sF(n,s,t={}){const o=JS(s),l=nu(o)||eu(),r=Q(),i=Q(null),c=Q(!1),p=Q(!1),u=zf(!0),d=Q({}),y=$(()=>qr(qr(qr({},NS),t),d.value)),f=Q(0);let h;u.run(()=>{h=XS(r),ve(r,async w=>{w&&(p.value=!0),await tn(),r.value||(p.value=!1)})});const m=nu(n);function A(){return`starport-${l}-${m}-${eu()}`}const v=A();return Ve({el:r,id:v,port:n,props:i,rect:h,scope:u,isLanded:c,isVisible:p,options:y,liftOffTime:f,component:s,componentName:o,componentId:l,generateId:A,setLocalOptions(w={}){d.value=JSON.parse(JSON.stringify(w))},elRef(){return r},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function tF(n){const s=Ve(new Map);function t(l,r){let i=s.get(l);return i||(i=sF(l,r,n),s.set(l,i)),i.component=r,i}function o(l){var r;(r=s.get(l))==null||r.scope.stop(),s.delete(l)}return{portMap:s,dispose:o,getInstance:t}}var oF=Object.defineProperty,lF=Object.defineProperties,rF=Object.getOwnPropertyDescriptors,ou=Object.getOwnPropertySymbols,aF=Object.prototype.hasOwnProperty,iF=Object.prototype.propertyIsEnumerable,lu=(n,s,t)=>s in n?oF(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,cF=(n,s)=>{for(var t in s||(s={}))aF.call(s,t)&&lu(n,t,s[t]);if(ou)for(var t of ou(s))iF.call(s,t)&&lu(n,t,s[t]);return n},pF=(n,s)=>lF(n,rF(s));const uF=we({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const s=F(cr);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const t=$(()=>s.getInstance(n.port,n.component)),o=$(()=>{var i;return((i=t.value.el)==null?void 0:i.id)||t.value.id}),l=$(()=>{const i=Date.now()-t.value.liftOffTime,c=Math.max(0,t.value.options.duration-i),p=t.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!t.value.isVisible||!t.value.el?pF(cF({},u),{zIndex:-1,display:"none"}):(t.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:t.value.options.easing}),u)}),r={onTransitionend(i){t.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${t.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${t.value.options.duration/1e3}s).`)}};return()=>{const i=!!(t.value.isLanded&&t.value.el);return fn("div",{style:l.value,"data-starport-craft":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true",onTransitionend:t.value.land},fn(K8,{to:i?`#${o.value}`:"body",disabled:!i},fn(t.value.component,me(r,t.value.props))))}}}),dF=we({name:"StarportCarrier",setup(n,{slots:s}){const t=tF(F(Ef,{}));return $n().appContext.app.provide(cr,t),()=>{var l;return[(l=s.default)==null?void 0:l.call(s),Array.from(t.portMap.entries()).map(([r,{component:i}])=>fn(uF,{key:r,port:r,component:i}))]}}});function yF(n={}){return{install(s){s.provide(Ef,n),s.component("Starport",YS),s.component("StarportCarrier",dF)}}}function fF(n){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),n.app.use($S),n.app.use(yF({keepAlive:!0}))}function Cn(n,s,t){var o;return((o=n.instance)==null?void 0:o.$).provides[s]??t}function mF(){return{install(n){n.directive("click",{name:"v-click",mounted(s,t){var d,y,f,h;if(ho.value||(d=Cn(t,uo))!=null&&d.value)return;const o=Cn(t,Ys),l=Cn(t,po),r=Cn(t,ia),i=t.modifiers.hide!==!1&&t.modifiers.hide!=null,c=t.modifiers.fade!==!1&&t.modifiers.fade!=null,p=((y=o==null?void 0:o.value)==null?void 0:y.length)||0,u=c?N_:Dr;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(s))&&o.value.push(s),t.value==null&&(t.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(t.value)))r==null||r.value.set(t.value,[s]);else if(!((h=r==null?void 0:r.value.get(t.value))!=null&&h.includes(s))){const m=(r==null?void 0:r.value.get(t.value))||[];r==null||r.value.set(t.value,[s].concat(m))}s==null||s.classList.toggle(zs,!0),l&&ve(l,()=>{const m=(l==null?void 0:l.value)??0,A=t.value!=null?m>=t.value:m>p;s.classList.contains(Cr)||s.classList.toggle(u,!A),i!==!1&&i!==void 0&&s.classList.toggle(u,A),s.classList.toggle(Kt,!1);const v=r==null?void 0:r.value.get(m);v==null||v.forEach((w,k)=>{w.classList.toggle(rl,!1),k===v.length-1?w.classList.toggle(Kt,!0):w.classList.toggle(rl,!0)}),s.classList.contains(Kt)||s.classList.toggle(rl,A)},{immediate:!0})},unmounted(s,t){s==null||s.classList.toggle(zs,!1);const o=Cn(t,Ys);o!=null&&o.value&&ca(o.value,s)}}),n.directive("after",{name:"v-after",mounted(s,t){var c,p;if(ho.value||(c=Cn(t,uo))!=null&&c.value)return;const o=Cn(t,Ys),l=Cn(t,po),r=Cn(t,ia),i=o==null?void 0:o.value.length;t.value==null&&(t.value=o==null?void 0:o.value.length),r!=null&&r.value.has(t.value)?(p=r==null?void 0:r.value.get(t.value))==null||p.push(s):r==null||r.value.set(t.value,[s]),s==null||s.classList.toggle(zs,!0),l&&ve(l,()=>{const u=(l.value??0)>=(t.value??i??0);s.classList.contains(Cr)||s.classList.toggle(Dr,!u),s.classList.toggle(Kt,!1),s.classList.contains(Kt)||s.classList.toggle(rl,u)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(zs,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(s,t){var i,c,p;if(ho.value||(i=Cn(t,uo))!=null&&i.value)return;const o=Cn(t,Ys),l=Cn(t,po),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(s))&&o.value.push(s),s==null||s.classList.toggle(zs,!0),l&&ve(l,()=>{const u=(l==null?void 0:l.value)??0,d=t.value!=null?u>=t.value:u>r;s.classList.toggle(Dr,d),s.classList.toggle(Cr,d)},{immediate:!0})},unmounted(s,t){s==null||s.classList.toggle(zs,!1);const o=Cn(t,Ys);o!=null&&o.value&&ca(o.value,s)}})}}}function hF(n,s){const t=$y(n),o=Ty(s,t.currentRoute,t.currentPage);return{nav:{...t,...o,downloadPDF:Ea,next:Os,nextSlide:Po,openInEditor:WE,prev:Ps,prevSlide:Io},configs:$e,themeConfigs:$(()=>$e.themeConfig)}}function _F(){return{install(n){const s=hF(Ln,Pn);n.provide(O,Ve(s))}}}const Gt=Uh(JE);Gt.use(Bn);Gt.use(P_());Gt.use(mF());Gt.use(_F());fF({app:Gt,router:Bn});Gt.mount("#app");export{vi as $,RB as A,Q as B,DF as C,dn as D,Ue as E,je as F,z3 as G,UE as H,Pn as I,Nl as J,ME as K,Tr as L,yt as M,Ve as N,BF as O,CF as P,ve as Q,E as R,vy as S,Te as T,un as U,rv as V,To as W,Fr as X,B1 as Y,Ai as Z,P as _,O as a,Ke as a0,gF as a1,AF as a2,h1 as a3,gv as a4,vF as a5,hn as a6,no as a7,Js as a8,Qn as a9,Da as aa,O3 as ab,P3 as ac,I3 as ad,N3 as ae,nr as af,bd as ag,bF as ah,mn as ai,il as aj,Qv as ak,Pd as al,R3 as am,Vo as an,pi as b,$e as c,we as d,$m as e,C as f,e as g,b as h,F as i,Xe as j,Ny as k,a as l,M as m,Ze as n,_ as o,ge as p,di as q,Nt as r,Wn as s,at as t,kF as u,$ as v,br as w,T as x,dy as y,VB as z};
