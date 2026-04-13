(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ol(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},Wr=[],Kt=()=>{},Ad=()=>!1,na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ra=t=>t.startsWith("onUpdate:"),Ze=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F_=Object.prototype.hasOwnProperty,Ee=(t,e)=>F_.call(t,e),se=Array.isArray,Kr=t=>Ei(t)==="[object Map]",bd=t=>Ei(t)==="[object Set]",hh=t=>Ei(t)==="[object Date]",le=t=>typeof t=="function",He=t=>typeof t=="string",wt=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Sd=t=>(Ie(t)||le(t))&&le(t.then)&&le(t.catch),Rd=Object.prototype.toString,Ei=t=>Rd.call(t),U_=t=>Ei(t).slice(8,-1),Cd=t=>Ei(t)==="[object Object]",sa=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},B_=/-\w/g,Nt=ia(t=>t.replace(B_,e=>e.slice(1).toUpperCase())),j_=/\B([A-Z])/g,Sr=ia(t=>t.replace(j_,"-$1").toLowerCase()),Pd=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=ia(t=>t?`on${Pd(t)}`:""),Wt=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},cl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fh;const oa=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function us(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?z_(r):us(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Ie(t))return t}const $_=/;(?![^(]*\))/g,q_=/:([^]+)/,H_=/\/\*[^]*?\*\//g;function z_(t){const e={};return t.replace(H_,"").split($_).forEach(n=>{if(n){const r=n.split(q_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ll(t){let e="";if(He(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=ll(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const W_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",K_=ol(W_);function kd(t){return!!t||t===""}function G_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ii(t[r],e[r]);return n}function ii(t,e){if(t===e)return!0;let n=hh(t),r=hh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=wt(t),r=wt(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?G_(t,e):!1;if(n=Ie(t),r=Ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!ii(t[a],e[a]))return!1}}return String(t)===String(e)}const Dd=t=>!!(t&&t.__v_isRef===!0),Dn=t=>He(t)?t:t==null?"":se(t)||Ie(t)&&(t.toString===Rd||!le(t.toString))?Dd(t)?Dn(t.value):JSON.stringify(t,Nd,2):String(t),Nd=(t,e)=>Dd(e)?Nd(t,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Qa(r,i)+" =>"]=s,n),{})}:bd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qa(n))}:wt(e)?Qa(e):Ie(e)&&!se(e)&&!Cd(e)?String(e):e,Qa=(t,e="")=>{var n;return wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class Od{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xd(t){return new Od(t)}function Md(){return it}function Q_(t,e=!1){it&&it.cleanups.push(t)}let be;const Ja=new WeakSet;class Ld{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dh(this),Bd(this);const e=be,n=Ot;be=this,Ot=!0;try{return this.fn()}finally{jd(this),be=e,Ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Fd=0,zs,Ws;function Ud(t,e=!1){if(t.flags|=8,e){t.next=Ws,Ws=t;return}t.next=zs,zs=t}function ul(){Fd++}function hl(){if(--Fd>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fl(r),J_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($d(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $d(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===oi)||(t.globalVersion=oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tc(t))))return;t.flags|=2;const e=t.dep,n=be,r=Ot;be=t,Ot=!0;try{Bd(t);const s=t.fn(t._value);(e.version===0||Wt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=n,Ot=r,jd(t),t.flags&=-3}}function fl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function J_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ot=!0;const qd=[];function _n(){qd.push(Ot),Ot=!1}function yn(){const t=qd.pop();Ot=t===void 0?!0:t}function dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=be;be=void 0;try{e()}finally{be=n}}}let oi=0;class X_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!Ot||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new X_(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,Hd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=r)}return n}trigger(e){this.version++,oi++,this.notify(e)}notify(e){ul();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hl()}}}function Hd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Hd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Co=new WeakMap,gr=Symbol(""),Ic=Symbol(""),ai=Symbol("");function at(t,e,n){if(Ot&&be){let r=Co.get(t);r||Co.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new dl),s.map=r,s.key=n),s.track()}}function hn(t,e,n,r,s,i){const a=Co.get(t);if(!a){oi++;return}const c=l=>{l&&l.trigger()};if(ul(),e==="clear")a.forEach(c);else{const l=se(t),h=l&&sa(n);if(l&&n==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===ai||!wt(_)&&_>=d)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(ai)),e){case"add":l?h&&c(a.get("length")):(c(a.get(gr)),Kr(t)&&c(a.get(Ic)));break;case"delete":l||(c(a.get(gr)),Kr(t)&&c(a.get(Ic)));break;case"set":Kr(t)&&c(a.get(gr));break}}hl()}function Y_(t,e){const n=Co.get(t);return n&&n.get(e)}function Fr(t){const e=ge(t);return e===t?e:(at(e,"iterate",ai),It(t)?e:e.map(Mt))}function aa(t){return at(t=ge(t),"iterate",ai),t}function Ht(t,e){return vn(t)?ts(Gt(t)?Mt(e):e):Mt(e)}const Z_={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,t=>Ht(this,t))},concat(...t){return Fr(this).concat(...t.map(e=>se(e)?Fr(e):e))},entries(){return Xa(this,"entries",t=>(t[1]=Ht(this,t[1]),t))},every(t,e){return cn(this,"every",t,e,void 0,arguments)},filter(t,e){return cn(this,"filter",t,e,n=>n.map(r=>Ht(this,r)),arguments)},find(t,e){return cn(this,"find",t,e,n=>Ht(this,n),arguments)},findIndex(t,e){return cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return cn(this,"findLast",t,e,n=>Ht(this,n),arguments)},findLastIndex(t,e){return cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ya(this,"includes",t)},indexOf(...t){return Ya(this,"indexOf",t)},join(t){return Fr(this).join(t)},lastIndexOf(...t){return Ya(this,"lastIndexOf",t)},map(t,e){return cn(this,"map",t,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...t){return Os(this,"push",t)},reduce(t,...e){return ph(this,"reduce",t,e)},reduceRight(t,...e){return ph(this,"reduceRight",t,e)},shift(){return Os(this,"shift")},some(t,e){return cn(this,"some",t,e,void 0,arguments)},splice(...t){return Os(this,"splice",t)},toReversed(){return Fr(this).toReversed()},toSorted(t){return Fr(this).toSorted(t)},toSpliced(...t){return Fr(this).toSpliced(...t)},unshift(...t){return Os(this,"unshift",t)},values(){return Xa(this,"values",t=>Ht(this,t))}};function Xa(t,e,n){const r=aa(t),s=r[e]();return r!==t&&!It(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const ey=Array.prototype;function cn(t,e,n,r,s,i){const a=aa(t),c=a!==t&&!It(t),l=a[e];if(l!==ey[e]){const p=l.apply(t,i);return c?Mt(p):p}let h=n;a!==t&&(c?h=function(p,_){return n.call(this,Ht(t,p),_,t)}:n.length>2&&(h=function(p,_){return n.call(this,p,_,t)}));const d=l.call(a,h,r);return c&&s?s(d):d}function ph(t,e,n,r){const s=aa(t),i=s!==t&&!It(t);let a=n,c=!1;s!==t&&(i?(c=r.length===0,a=function(h,d,p){return c&&(c=!1,h=Ht(t,h)),n.call(this,h,Ht(t,d),p,t)}):n.length>3&&(a=function(h,d,p){return n.call(this,h,d,p,t)}));const l=s[e](a,...r);return c?Ht(t,l):l}function Ya(t,e,n){const r=ge(t);at(r,"iterate",ai);const s=r[e](...n);return(s===-1||s===!1)&&la(n[0])?(n[0]=ge(n[0]),r[e](...n)):s}function Os(t,e,n=[]){_n(),ul();const r=ge(t)[e].apply(t,n);return hl(),yn(),r}const ty=ol("__proto__,__v_isRef,__isVue"),zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wt));function ny(t){wt(t)||(t=String(t));const e=ge(this);return at(e,"has",t),e.hasOwnProperty(t)}class Wd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?fy:Jd:i?Qd:Gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let l;if(a&&(l=Z_[n]))return l;if(n==="hasOwnProperty")return ny}const c=Reflect.get(e,n,ke(e)?e:r);if((wt(n)?zd.has(n):ty(n))||(s||at(e,"get",n),i))return c;if(ke(c)){const l=a&&sa(n)?c:c.value;return s&&Ie(l)?Ac(l):l}return Ie(c)?s?Ac(c):ca(c):c}}class Kd extends Wd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=se(e)&&sa(n);if(!this._isShallow){const h=vn(i);if(!It(r)&&!vn(r)&&(i=ge(i),r=ge(r)),!a&&ke(i)&&!ke(r))return h||(i.value=r),!0}const c=a?Number(n)<e.length:Ee(e,n),l=Reflect.set(e,n,r,ke(e)?e:s);return e===ge(s)&&(c?Wt(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wt(n)||!zd.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",se(e)?"length":gr),Reflect.ownKeys(e)}}class ry extends Wd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const sy=new Kd,iy=new ry,oy=new Kd(!0);const wc=t=>t,eo=t=>Reflect.getPrototypeOf(t);function ay(t,e,n){return function(...r){const s=this.__v_raw,i=ge(s),a=Kr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?wc:e?ts:Mt;return!e&&at(i,"iterate",l?Ic:gr),Ze(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}}})}}function to(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cy(t,e){const n={get(s){const i=this.__v_raw,a=ge(i),c=ge(s);t||(Wt(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=eo(a),h=e?wc:t?ts:Mt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(ge(s),"iterate",gr),s.size},has(s){const i=this.__v_raw,a=ge(i),c=ge(s);return t||(Wt(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ge(c),h=e?wc:t?ts:Mt;return!t&&at(l,"iterate",gr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ze(n,t?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(s){const i=ge(this),a=eo(i),c=ge(s),l=!e&&!It(s)&&!vn(s)?c:s;return a.has.call(i,l)||Wt(s,l)&&a.has.call(i,s)||Wt(c,l)&&a.has.call(i,c)||(i.add(l),hn(i,"add",l,l)),this},set(s,i){!e&&!It(i)&&!vn(i)&&(i=ge(i));const a=ge(this),{has:c,get:l}=eo(a);let h=c.call(a,s);h||(s=ge(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Wt(i,d)&&hn(a,"set",s,i):hn(a,"add",s,i),this},delete(s){const i=ge(this),{has:a,get:c}=eo(i);let l=a.call(i,s);l||(s=ge(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&hn(i,"delete",s,void 0),h},clear(){const s=ge(this),i=s.size!==0,a=s.clear();return i&&hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ay(s,t,e)}),n}function pl(t,e){const n=cy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const ly={get:pl(!1,!1)},uy={get:pl(!1,!0)},hy={get:pl(!0,!1)};const Gd=new WeakMap,Qd=new WeakMap,Jd=new WeakMap,fy=new WeakMap;function dy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function py(t){return t.__v_skip||!Object.isExtensible(t)?0:dy(U_(t))}function ca(t){return vn(t)?t:gl(t,!1,sy,ly,Gd)}function gy(t){return gl(t,!1,oy,uy,Qd)}function Ac(t){return gl(t,!0,iy,hy,Jd)}function gl(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=py(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Gt(t){return vn(t)?Gt(t.__v_raw):!!(t&&t.__v_isReactive)}function vn(t){return!!(t&&t.__v_isReadonly)}function It(t){return!!(t&&t.__v_isShallow)}function la(t){return t?!!t.__v_raw:!1}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function ml(t){return!Ee(t,"__v_skip")&&Object.isExtensible(t)&&Vd(t,"__v_skip",!0),t}const Mt=t=>Ie(t)?ca(t):t,ts=t=>Ie(t)?Ac(t):t;function ke(t){return t?t.__v_isRef===!0:!1}function _l(t){return my(t,!1)}function my(t,e){return ke(t)?t:new _y(t,e)}class _y{constructor(e,n){this.dep=new dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ge(e),this._value=n?e:Mt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||It(e)||vn(e);e=r?e:ge(e),Wt(e,n)&&(this._rawValue=e,this._value=r?e:Mt(e),this.dep.trigger())}}function Me(t){return ke(t)?t.value:t}const yy={get:(t,e,n)=>e==="__v_raw"?t:Me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xd(t){return Gt(t)?t:new Proxy(t,yy)}function vy(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=Yd(t,n);return e}class Ey{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=wt(n)?n:String(n),this._raw=ge(e);let s=!0,i=e;if(!se(e)||wt(this._key)||!sa(this._key))do s=!la(i)||It(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Me(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&ke(this._raw[this._key])){const n=this._object[this._key];if(ke(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Y_(this._raw,this._key)}}class Ty{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Iy(t,e,n){return ke(t)?t:le(t)?new Ty(t):Ie(t)&&arguments.length>1?Yd(t,e,n):_l(t)}function Yd(t,e,n){return new Ey(t,e,n)}class wy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Ud(this,!0),!0}get value(){const e=this.dep.track();return $d(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ay(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new wy(r,s,n)}const no={},Po=new WeakMap;let lr;function by(t,e=!1,n=lr){if(n){let r=Po.get(n);r||Po.set(n,r=[]),r.push(t)}}function Sy(t,e,n=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=L=>s?L:It(L)||s===!1||s===0?fn(L,1):fn(L);let d,p,_,b,V=!1,k=!1;if(ke(t)?(p=()=>t.value,V=It(t)):Gt(t)?(p=()=>h(t),V=!0):se(t)?(k=!0,V=t.some(L=>Gt(L)||It(L)),p=()=>t.map(L=>{if(ke(L))return L.value;if(Gt(L))return h(L);if(le(L))return l?l(L,2):L()})):le(t)?e?p=l?()=>l(t,2):t:p=()=>{if(_){_n();try{_()}finally{yn()}}const L=lr;lr=d;try{return l?l(t,3,[b]):t(b)}finally{lr=L}}:p=Kt,e&&s){const L=p,K=s===!0?1/0:s;p=()=>fn(L(),K)}const O=Md(),J=()=>{d.stop(),O&&O.active&&al(O.effects,d)};if(i&&e){const L=e;e=(...K)=>{L(...K),J()}}let H=k?new Array(t.length).fill(no):no;const B=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(e){const K=d.run();if(s||V||(k?K.some((ae,I)=>Wt(ae,H[I])):Wt(K,H))){_&&_();const ae=lr;lr=d;try{const I=[K,H===no?void 0:k&&H[0]===no?[]:H,b];H=K,l?l(e,3,I):e(...I)}finally{lr=ae}}}else d.run()};return c&&c(B),d=new Ld(p),d.scheduler=a?()=>a(B,!1):B,b=L=>by(L,!1,d),_=d.onStop=()=>{const L=Po.get(d);if(L){if(l)l(L,4);else for(const K of L)K();Po.delete(d)}},e?r?B(!0):H=d.run():a?a(B.bind(null,!0),!0):d.run(),J.pause=d.pause.bind(d),J.resume=d.resume.bind(d),J.stop=J,J}function fn(t,e=1/0,n){if(e<=0||!Ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ke(t))fn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)fn(t[r],e,n);else if(bd(t)||Kr(t))t.forEach(r=>{fn(r,e,n)});else if(Cd(t)){for(const r in t)fn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&fn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e,n,r){try{return r?t(...r):t()}catch(s){ua(s,e,n)}}function en(t,e,n,r){if(le(t)){const s=Ti(t,e,n,r);return s&&Sd(s)&&s.catch(i=>{ua(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function ua(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){_n(),Ti(i,null,10,[t,l,h]),yn();return}}Ry(t,n,s,r,a)}function Ry(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pt=[];let jt=-1;const Gr=[];let On=null,jr=0;const Zd=Promise.resolve();let Vo=null;function ep(t){const e=Vo||Zd;return t?e.then(this?t.bind(this):t):e}function Cy(t){let e=jt+1,n=pt.length;for(;e<n;){const r=e+n>>>1,s=pt[r],i=ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function yl(t){if(!(t.flags&1)){const e=ci(t),n=pt[pt.length-1];!n||!(t.flags&2)&&e>=ci(n)?pt.push(t):pt.splice(Cy(e),0,t),t.flags|=1,tp()}}function tp(){Vo||(Vo=Zd.then(rp))}function Py(t){se(t)?Gr.push(...t):On&&t.id===-1?On.splice(jr+1,0,t):t.flags&1||(Gr.push(t),t.flags|=1),tp()}function gh(t,e,n=jt+1){for(;n<pt.length;n++){const r=pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function np(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,r)=>ci(n)-ci(r));if(Gr.length=0,On){On.push(...e);return}for(On=e,jr=0;jr<On.length;jr++){const n=On[jr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}On=null,jr=0}}const ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rp(t){try{for(jt=0;jt<pt.length;jt++){const e=pt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ti(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<pt.length;jt++){const e=pt[jt];e&&(e.flags&=-2)}jt=-1,pt.length=0,np(),Vo=null,(pt.length||Gr.length)&&rp()}}let lt=null,sp=null;function ko(t){const e=lt;return lt=t,sp=t&&t.type.__scopeId||null,e}function Fs(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sh(-1);const i=ko(e);let a;try{a=t(...s)}finally{ko(i),r._d&&Sh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ur(t,e){if(lt===null)return t;const n=pa(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ae]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&fn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ar(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(_n(),en(l,n,8,[t.el,c,t,e]),yn())}}function Vy(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function Ks(t,e,n=!1){const r=kp();if(r||mr){let s=mr?mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}function ky(){return!!(kp()||mr)}const Dy=Symbol.for("v-scx"),Ny=()=>Ks(Dy);function fo(t,e,n){return ip(t,e,n)}function ip(t,e,n=Ae){const{immediate:r,deep:s,flush:i,once:a}=n,c=Ze({},n),l=e&&r||!e&&i!=="post";let h;if(ui){if(i==="sync"){const b=Ny();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Kt,b.resume=Kt,b.pause=Kt,b}}const d=gt;c.call=(b,V,k)=>en(b,d,V,k);let p=!1;i==="post"?c.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():yl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=Sy(t,e,c);return ui&&(h?h.push(_):l&&_()),_}function Oy(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?op(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const a=wi(this),c=ip(s,i.bind(r),n);return a(),c}function op(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const xy=Symbol("_vte"),My=t=>t.__isTeleport,Ly=Symbol("_leaveCb");function vl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ii(t,e){return le(t)?Ze({name:t.name},e,{setup:t}):t}function ap(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function mh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Do=new WeakMap;function Gs(t,e,n,r,s=!1){if(se(t)){t.forEach((k,O)=>Gs(k,e&&(se(e)?e[O]:e),n,r,s));return}if(Qr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?pa(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,_=ge(p),b=p===Ae?Ad:k=>mh(d,k)?!1:Ee(_,k),V=(k,O)=>!(O&&mh(d,O));if(h!=null&&h!==l){if(_h(e),He(h))d[h]=null,b(h)&&(p[h]=null);else if(ke(h)){const k=e;V(h,k.k)&&(h.value=null),k.k&&(d[k.k]=null)}}if(le(l))Ti(l,c,12,[a,d]);else{const k=He(l),O=ke(l);if(k||O){const J=()=>{if(t.f){const H=k?b(l)?p[l]:d[l]:V()||!t.k?l.value:d[t.k];if(s)se(H)&&al(H,i);else if(se(H))H.includes(i)||H.push(i);else if(k)d[l]=[i],b(l)&&(p[l]=d[l]);else{const B=[i];V(l,t.k)&&(l.value=B),t.k&&(d[t.k]=B)}}else k?(d[l]=a,b(l)&&(p[l]=a)):O&&(V(l,t.k)&&(l.value=a),t.k&&(d[t.k]=a))};if(a){const H=()=>{J(),Do.delete(t)};H.id=-1,Do.set(t,H),_t(H,n)}else _h(t),J()}}}function _h(t){const e=Do.get(t);e&&(e.flags|=8,Do.delete(t))}oa().requestIdleCallback;oa().cancelIdleCallback;const Qr=t=>!!t.type.__asyncLoader,cp=t=>t.type.__isKeepAlive;function Fy(t,e){lp(t,"a",e)}function Uy(t,e){lp(t,"da",e)}function lp(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cp(s.parent.vnode)&&By(r,e,n,s),s=s.parent}}function By(t,e,n,r){const s=ha(e,t,r,!0);El(()=>{al(r[e],s)},n)}function ha(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{_n();const c=wi(n),l=en(e,n,t,a);return c(),yn(),l});return r?s.unshift(i):s.push(i),i}}const bn=t=>(e,n=gt)=>{(!ui||t==="sp")&&ha(t,(...r)=>e(...r),n)},jy=bn("bm"),up=bn("m"),$y=bn("bu"),qy=bn("u"),Hy=bn("bum"),El=bn("um"),zy=bn("sp"),Wy=bn("rtg"),Ky=bn("rtc");function Gy(t,e=gt){ha("ec",t,e)}const Qy=Symbol.for("v-ndc");function xn(t,e,n,r){let s;const i=n,a=se(t);if(a||He(t)){const c=a&&Gt(t);let l=!1,h=!1;c&&(l=!It(t),h=vn(t),t=aa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(l?h?ts(Mt(t[d])):Mt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function po(t,e,n={},r,s){if(lt.ce||lt.parent&&Qr(lt.parent)&&lt.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ye(),_r(Fe,null,[vt("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),ye();const a=i&&hp(i(n)),c=n.key||a&&a.key,l=_r(Fe,{key:(c&&!wt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function hp(t){return t.some(e=>wl(e)?!(e.type===En||e.type===Fe&&!hp(e.children)):!0)?t:null}const bc=t=>t?Dp(t)?pa(t):bc(t.parent):null,Qs=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dp(t),$forceUpdate:t=>t.f||(t.f=()=>{yl(t.update)}),$nextTick:t=>t.n||(t.n=ep.bind(t.proxy)),$watch:t=>Oy.bind(t)}),Za=(t,e)=>t!==Ae&&!t.__isScriptSetup&&Ee(t,e),Jy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Za(r,e))return a[e]=1,r[e];if(s!==Ae&&Ee(s,e))return a[e]=2,s[e];if(Ee(i,e))return a[e]=3,i[e];if(n!==Ae&&Ee(n,e))return a[e]=4,n[e];Sc&&(a[e]=0)}}const h=Qs[e];let d,p;if(h)return e==="$attrs"&&at(t.attrs,"get",""),h(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Ae&&Ee(n,e))return a[e]=4,n[e];if(p=l.config.globalProperties,Ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Za(s,e)?(s[e]=n,!0):r!==Ae&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(n[c]||t!==Ae&&c[0]!=="$"&&Ee(t,c)||Za(e,c)||Ee(i,c)||Ee(r,c)||Ee(Qs,c)||Ee(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sc=!0;function Xy(t){const e=dp(t),n=t.proxy,r=t.ctx;Sc=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:V,activated:k,deactivated:O,beforeDestroy:J,beforeUnmount:H,destroyed:B,unmounted:L,render:K,renderTracked:ae,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:A,components:S,directives:E,filters:ht}=e;if(h&&Yy(h,r,null),a)for(const ue in a){const me=a[ue];le(me)&&(r[ue]=me.bind(n))}if(s){const ue=s.call(n,n);Ie(ue)&&(t.data=ca(ue))}if(Sc=!0,i)for(const ue in i){const me=i[ue],Ct=le(me)?me.bind(n,n):le(me.get)?me.get.bind(n,n):Kt,er=!le(me)&&le(me.set)?me.set.bind(n):Kt,rn=$t({get:Ct,set:er});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>rn.value,set:ze=>rn.value=ze})}if(c)for(const ue in c)fp(c[ue],r,n,ue);if(l){const ue=le(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(me=>{Vy(me,ue[me])})}d&&vh(d,t,"c");function De(ue,me){se(me)?me.forEach(Ct=>ue(Ct.bind(n))):me&&ue(me.bind(n))}if(De(jy,p),De(up,_),De($y,b),De(qy,V),De(Fy,k),De(Uy,O),De(Gy,m),De(Ky,ae),De(Wy,I),De(Hy,H),De(El,L),De(zy,y),se(T))if(T.length){const ue=t.exposed||(t.exposed={});T.forEach(me=>{Object.defineProperty(ue,me,{get:()=>n[me],set:Ct=>n[me]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});K&&t.render===Kt&&(t.render=K),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),E&&(t.directives=E),y&&ap(t)}function Yy(t,e,n=Kt){se(t)&&(t=Rc(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=Ks(s.from||r,s.default,!0):i=Ks(s.from||r):i=Ks(s),ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function vh(t,e,n){en(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fp(t,e,n,r){let s=r.includes(".")?op(n,r):()=>n[r];if(He(t)){const i=e[t];le(i)&&fo(s,i)}else if(le(t))fo(s,t.bind(n));else if(Ie(t))if(se(t))t.forEach(i=>fp(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&fo(s,i,t)}}function dp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>No(l,h,a,!0)),No(l,e,a)),Ie(e)&&i.set(e,l),l}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(a=>No(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Zy[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Zy={data:Eh,props:Th,emits:Th,methods:Us,computed:Us,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Us,directives:Us,watch:tv,provide:Eh,inject:ev};function Eh(t,e){return e?t?function(){return Ze(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function ev(t,e){return Us(Rc(t),Rc(e))}function Rc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Ze(Object.create(null),t,e):e}function Th(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Ze(Object.create(null),yh(t),yh(e??{})):e}function tv(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function pp(){return{app:null,config:{isNativeTag:Ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function rv(t,e){return function(r,s=null){le(r)||(r=Ze({},r)),s!=null&&!Ie(s)&&(s=null);const i=pp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:nv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ov,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const b=h._ceVNode||vt(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(b,d,_),l=!0,h._container=d,d.__vue_app__=h,pa(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(en(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=mr;mr=h;try{return d()}finally{mr=p}}};return h}}let mr=null;const sv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Nt(e)}Modifiers`]||t[`${Sr(e)}Modifiers`];function iv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),a=i&&sv(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>He(d)?d.trim():d)),a.number&&(s=n.map(cl)));let c,l=r[c=Ga(e)]||r[c=Ga(Nt(e))];!l&&i&&(l=r[c=Ga(Sr(e))]),l&&en(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,en(h,t,6,s)}}const ov=new WeakMap;function gp(t,e,n=!1){const r=n?ov:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!le(t)){const l=h=>{const d=gp(h,e,!0);d&&(c=!0,Ze(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ie(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>a[l]=null):Ze(a,i),Ie(t)&&r.set(t,a),a)}function fa(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Sr(e))||Ee(t,e))}function Ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:V,inheritAttrs:k}=t,O=ko(t);let J,H;try{if(n.shapeFlag&4){const L=s||r,K=L;J=zt(h.call(K,L,d,p,b,_,V)),H=c}else{const L=e;J=zt(L.length>1?L(p,{attrs:c,slots:a,emit:l}):L(p,null)),H=e.props?c:av(c)}}catch(L){Js.length=0,ua(L,t,1),J=vt(En)}let B=J;if(H&&k!==!1){const L=Object.keys(H),{shapeFlag:K}=B;L.length&&K&7&&(i&&L.some(ra)&&(H=cv(H,i)),B=ns(B,H,!1,!0))}return n.dirs&&(B=ns(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&vl(B,n.transition),J=B,ko(O),J}const av=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},cv=(t,e)=>{const n={};for(const r in t)(!ra(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(mp(a,r,_)&&!fa(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?wh(r,a,h):!0:!!a;return!1}function wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(mp(e,t,i)&&!fa(n,i))return!0}return!1}function mp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ie(r)&&Ie(s)?!ii(r,s):r!==s}function uv({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const _p={},yp=()=>Object.create(_p),vp=t=>Object.getPrototypeOf(t)===_p;function hv(t,e,n,r=!1){const s={},i=yp();t.propsDefaults=Object.create(null),Ep(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:gy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=ge(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(fa(t.emitsOptions,_))continue;const b=e[_];if(l)if(Ee(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const V=Nt(_);s[V]=Cc(l,c,V,b,t,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{Ep(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=Sr(p))===p||!Ee(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Cc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&hn(t.attrs,"set","")}function Ep(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Hs(l))continue;const h=e[l];let d;s&&Ee(s,d=Nt(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:fa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ge(n),h=c||Ae;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Cc(s,l,p,h[p],t,!Ee(h,p))}}return a}function Cc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=wi(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Sr(n))&&(r=!0))}return r}const dv=new WeakMap;function Tp(t,e,n=!1){const r=n?dv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!le(t)){const d=p=>{l=!0;const[_,b]=Tp(p,e,!0);Ze(a,_),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ie(t)&&r.set(t,Wr),Wr;if(se(i))for(let d=0;d<i.length;d++){const p=Nt(i[d]);Ah(p)&&(a[p]=Ae)}else if(i)for(const d in i){const p=Nt(d);if(Ah(p)){const _=i[d],b=a[p]=se(_)||le(_)?{type:_}:Ze({},_),V=b.type;let k=!1,O=!0;if(se(V))for(let J=0;J<V.length;++J){const H=V[J],B=le(H)&&H.name;if(B==="Boolean"){k=!0;break}else B==="String"&&(O=!1)}else k=le(V)&&V.name==="Boolean";b[0]=k,b[1]=O,(k||Ee(b,"default"))&&c.push(p)}}const h=[a,c];return Ie(t)&&r.set(t,h),h}function Ah(t){return t[0]!=="$"&&!Hs(t)}const Tl=t=>t==="_"||t==="_ctx"||t==="$stable",Il=t=>se(t)?t.map(zt):[zt(t)],pv=(t,e,n)=>{if(e._n)return e;const r=Fs((...s)=>Il(e(...s)),n);return r._c=!1,r},Ip=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tl(s))continue;const i=t[s];if(le(i))e[s]=pv(s,i,r);else if(i!=null){const a=Il(i);e[s]=()=>a}}},wp=(t,e)=>{const n=Il(e);t.slots.default=()=>n},Ap=(t,e,n)=>{for(const r in e)(n||!Tl(r))&&(t[r]=e[r])},gv=(t,e,n)=>{const r=t.slots=yp();if(t.vnode.shapeFlag&32){const s=e._;s?(Ap(r,e,n),n&&Vd(r,"_",s,!0)):Ip(e,r)}else e&&wp(t,e)},mv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ap(s,e,n):(i=!e.$stable,Ip(e,s)),a=e}else e&&(wp(t,e),a={default:1});if(i)for(const c in s)!Tl(c)&&a[c]==null&&delete s[c]},_t=Tv;function _v(t){return yv(t)}function yv(t,e){const n=oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Kt,insertStaticContent:V}=t,k=(v,w,P,U=null,x=null,F=null,z=void 0,q=null,j=!!w.dynamicChildren)=>{if(v===w)return;v&&!xs(v,w)&&(U=sn(v),ze(v,x,F,!0),v=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:M,ref:Z,shapeFlag:W}=w;switch(M){case da:O(v,w,P,U);break;case En:J(v,w,P,U);break;case tc:v==null&&H(w,P,U,z);break;case Fe:S(v,w,P,U,x,F,z,q,j);break;default:W&1?K(v,w,P,U,x,F,z,q,j):W&6?E(v,w,P,U,x,F,z,q,j):(W&64||W&128)&&M.process(v,w,P,U,x,F,z,q,j,Ut)}Z!=null&&x?Gs(Z,v&&v.ref,F,w||v,!w):Z==null&&v&&v.ref!=null&&Gs(v.ref,null,F,v,!0)},O=(v,w,P,U)=>{if(v==null)r(w.el=c(w.children),P,U);else{const x=w.el=v.el;w.children!==v.children&&h(x,w.children)}},J=(v,w,P,U)=>{v==null?r(w.el=l(w.children||""),P,U):w.el=v.el},H=(v,w,P,U)=>{[v.el,v.anchor]=V(v.children,w,P,U,v.el,v.anchor)},B=({el:v,anchor:w},P,U)=>{let x;for(;v&&v!==w;)x=_(v),r(v,P,U),v=x;r(w,P,U)},L=({el:v,anchor:w})=>{let P;for(;v&&v!==w;)P=_(v),s(v),v=P;s(w)},K=(v,w,P,U,x,F,z,q,j)=>{if(w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),v==null)ae(w,P,U,x,F,z,q,j);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,w,x,F,z,q,j)}finally{M&&M._endPatch()}}},ae=(v,w,P,U,x,F,z,q)=>{let j,M;const{props:Z,shapeFlag:W,transition:X,dirs:ee}=v;if(j=v.el=a(v.type,F,Z&&Z.is,Z),W&8?d(j,v.children):W&16&&m(v.children,j,null,U,x,ec(v,F),z,q),ee&&ar(v,null,U,"created"),I(j,v,v.scopeId,z,U),Z){for(const ce in Z)ce!=="value"&&!Hs(ce)&&i(j,ce,null,Z[ce],F,U);"value"in Z&&i(j,"value",null,Z.value,F),(M=Z.onVnodeBeforeMount)&&Bt(M,U,v)}ee&&ar(v,null,U,"beforeMount");const te=vv(x,X);te&&X.beforeEnter(j),r(j,w,P),((M=Z&&Z.onVnodeMounted)||te||ee)&&_t(()=>{try{M&&Bt(M,U,v),te&&X.enter(j),ee&&ar(v,null,U,"mounted")}finally{}},x)},I=(v,w,P,U,x)=>{if(P&&b(v,P),U)for(let F=0;F<U.length;F++)b(v,U[F]);if(x){let F=x.subTree;if(w===F||Cp(F.type)&&(F.ssContent===w||F.ssFallback===w)){const z=x.vnode;I(v,z,z.scopeId,z.slotScopeIds,x.parent)}}},m=(v,w,P,U,x,F,z,q,j=0)=>{for(let M=j;M<v.length;M++){const Z=v[M]=q?un(v[M]):zt(v[M]);k(null,Z,w,P,U,x,F,z,q)}},y=(v,w,P,U,x,F,z)=>{const q=w.el=v.el;let{patchFlag:j,dynamicChildren:M,dirs:Z}=w;j|=v.patchFlag&16;const W=v.props||Ae,X=w.props||Ae;let ee;if(P&&cr(P,!1),(ee=X.onVnodeBeforeUpdate)&&Bt(ee,P,w,v),Z&&ar(w,v,P,"beforeUpdate"),P&&cr(P,!0),(W.innerHTML&&X.innerHTML==null||W.textContent&&X.textContent==null)&&d(q,""),M?T(v.dynamicChildren,M,q,P,U,ec(w,x),F):z||me(v,w,q,null,P,U,ec(w,x),F,!1),j>0){if(j&16)A(q,W,X,P,x);else if(j&2&&W.class!==X.class&&i(q,"class",null,X.class,x),j&4&&i(q,"style",W.style,X.style,x),j&8){const te=w.dynamicProps;for(let ce=0;ce<te.length;ce++){const ve=te[ce],Ne=W[ve],Ue=X[ve];(Ue!==Ne||ve==="value")&&i(q,ve,Ne,Ue,x,P)}}j&1&&v.children!==w.children&&d(q,w.children)}else!z&&M==null&&A(q,W,X,P,x);((ee=X.onVnodeUpdated)||Z)&&_t(()=>{ee&&Bt(ee,P,w,v),Z&&ar(w,v,P,"updated")},U)},T=(v,w,P,U,x,F,z)=>{for(let q=0;q<w.length;q++){const j=v[q],M=w[q],Z=j.el&&(j.type===Fe||!xs(j,M)||j.shapeFlag&198)?p(j.el):P;k(j,M,Z,null,U,x,F,z,!0)}},A=(v,w,P,U,x)=>{if(w!==P){if(w!==Ae)for(const F in w)!Hs(F)&&!(F in P)&&i(v,F,w[F],null,x,U);for(const F in P){if(Hs(F))continue;const z=P[F],q=w[F];z!==q&&F!=="value"&&i(v,F,q,z,x,U)}"value"in P&&i(v,"value",w.value,P.value,x)}},S=(v,w,P,U,x,F,z,q,j)=>{const M=w.el=v?v.el:c(""),Z=w.anchor=v?v.anchor:c("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:ee}=w;ee&&(q=q?q.concat(ee):ee),v==null?(r(M,P,U),r(Z,P,U),m(w.children||[],P,Z,x,F,z,q,j)):W>0&&W&64&&X&&v.dynamicChildren&&v.dynamicChildren.length===X.length?(T(v.dynamicChildren,X,P,x,F,z,q),(w.key!=null||x&&w===x.subTree)&&bp(v,w,!0)):me(v,w,P,Z,x,F,z,q,j)},E=(v,w,P,U,x,F,z,q,j)=>{w.slotScopeIds=q,v==null?w.shapeFlag&512?x.ctx.activate(w,P,U,z,j):ht(w,P,U,x,F,z,j):Ft(v,w,j)},ht=(v,w,P,U,x,F,z)=>{const q=v.component=Cv(v,U,x);if(cp(v)&&(q.ctx.renderer=Ut),Pv(q,!1,z),q.asyncDep){if(x&&x.registerDep(q,De,z),!v.el){const j=q.subTree=vt(En);J(null,j,w,P),v.placeholder=j.el}}else De(q,v,w,P,x,F,z)},Ft=(v,w,P)=>{const U=w.component=v.component;if(lv(v,w,P))if(U.asyncDep&&!U.asyncResolved){ue(U,w,P);return}else U.next=w,U.update();else w.el=v.el,U.vnode=w},De=(v,w,P,U,x,F,z)=>{const q=()=>{if(v.isMounted){let{next:W,bu:X,u:ee,parent:te,vnode:ce}=v;{const tt=Sp(v);if(tt){W&&(W.el=ce.el,ue(v,W,z)),tt.asyncDep.then(()=>{_t(()=>{v.isUnmounted||M()},x)});return}}let ve=W,Ne;cr(v,!1),W?(W.el=ce.el,ue(v,W,z)):W=ce,X&&ho(X),(Ne=W.props&&W.props.onVnodeBeforeUpdate)&&Bt(Ne,te,W,ce),cr(v,!0);const Ue=Ih(v),At=v.subTree;v.subTree=Ue,k(At,Ue,p(At.el),sn(At),v,x,F),W.el=Ue.el,ve===null&&uv(v,Ue.el),ee&&_t(ee,x),(Ne=W.props&&W.props.onVnodeUpdated)&&_t(()=>Bt(Ne,te,W,ce),x)}else{let W;const{el:X,props:ee}=w,{bm:te,m:ce,parent:ve,root:Ne,type:Ue}=v,At=Qr(w);cr(v,!1),te&&ho(te),!At&&(W=ee&&ee.onVnodeBeforeMount)&&Bt(W,ve,w),cr(v,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(Ue,v.parent?v.parent.type:void 0);const tt=v.subTree=Ih(v);k(null,tt,P,U,v,x,F),w.el=tt.el}if(ce&&_t(ce,x),!At&&(W=ee&&ee.onVnodeMounted)){const tt=w;_t(()=>Bt(W,ve,tt),x)}(w.shapeFlag&256||ve&&Qr(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&_t(v.a,x),v.isMounted=!0,w=P=U=null}};v.scope.on();const j=v.effect=new Ld(q);v.scope.off();const M=v.update=j.run.bind(j),Z=v.job=j.runIfDirty.bind(j);Z.i=v,Z.id=v.uid,j.scheduler=()=>yl(Z),cr(v,!0),M()},ue=(v,w,P)=>{w.component=v;const U=v.vnode.props;v.vnode=w,v.next=null,fv(v,w.props,U,P),mv(v,w.children,P),_n(),gh(v),yn()},me=(v,w,P,U,x,F,z,q,j=!1)=>{const M=v&&v.children,Z=v?v.shapeFlag:0,W=w.children,{patchFlag:X,shapeFlag:ee}=w;if(X>0){if(X&128){er(M,W,P,U,x,F,z,q,j);return}else if(X&256){Ct(M,W,P,U,x,F,z,q,j);return}}ee&8?(Z&16&&nr(M,x,F),W!==M&&d(P,W)):Z&16?ee&16?er(M,W,P,U,x,F,z,q,j):nr(M,x,F,!0):(Z&8&&d(P,""),ee&16&&m(W,P,U,x,F,z,q,j))},Ct=(v,w,P,U,x,F,z,q,j)=>{v=v||Wr,w=w||Wr;const M=v.length,Z=w.length,W=Math.min(M,Z);let X;for(X=0;X<W;X++){const ee=w[X]=j?un(w[X]):zt(w[X]);k(v[X],ee,P,null,x,F,z,q,j)}M>Z?nr(v,x,F,!0,!1,W):m(w,P,U,x,F,z,q,j,W)},er=(v,w,P,U,x,F,z,q,j)=>{let M=0;const Z=w.length;let W=v.length-1,X=Z-1;for(;M<=W&&M<=X;){const ee=v[M],te=w[M]=j?un(w[M]):zt(w[M]);if(xs(ee,te))k(ee,te,P,null,x,F,z,q,j);else break;M++}for(;M<=W&&M<=X;){const ee=v[W],te=w[X]=j?un(w[X]):zt(w[X]);if(xs(ee,te))k(ee,te,P,null,x,F,z,q,j);else break;W--,X--}if(M>W){if(M<=X){const ee=X+1,te=ee<Z?w[ee].el:U;for(;M<=X;)k(null,w[M]=j?un(w[M]):zt(w[M]),P,te,x,F,z,q,j),M++}}else if(M>X)for(;M<=W;)ze(v[M],x,F,!0),M++;else{const ee=M,te=M,ce=new Map;for(M=te;M<=X;M++){const Qe=w[M]=j?un(w[M]):zt(w[M]);Qe.key!=null&&ce.set(Qe.key,M)}let ve,Ne=0;const Ue=X-te+1;let At=!1,tt=0;const Rn=new Array(Ue);for(M=0;M<Ue;M++)Rn[M]=0;for(M=ee;M<=W;M++){const Qe=v[M];if(Ne>=Ue){ze(Qe,x,F,!0);continue}let bt;if(Qe.key!=null)bt=ce.get(Qe.key);else for(ve=te;ve<=X;ve++)if(Rn[ve-te]===0&&xs(Qe,w[ve])){bt=ve;break}bt===void 0?ze(Qe,x,F,!0):(Rn[bt-te]=M+1,bt>=tt?tt=bt:At=!0,k(Qe,w[bt],P,null,x,F,z,q,j),Ne++)}const Ts=At?Ev(Rn):Wr;for(ve=Ts.length-1,M=Ue-1;M>=0;M--){const Qe=te+M,bt=w[Qe],Fi=w[Qe+1],Nr=Qe+1<Z?Fi.el||Rp(Fi):U;Rn[M]===0?k(null,bt,P,Nr,x,F,z,q,j):At&&(ve<0||M!==Ts[ve]?rn(bt,P,Nr,2):ve--)}}},rn=(v,w,P,U,x=null)=>{const{el:F,type:z,transition:q,children:j,shapeFlag:M}=v;if(M&6){rn(v.component.subTree,w,P,U);return}if(M&128){v.suspense.move(w,P,U);return}if(M&64){z.move(v,w,P,Ut);return}if(z===Fe){r(F,w,P);for(let W=0;W<j.length;W++)rn(j[W],w,P,U);r(v.anchor,w,P);return}if(z===tc){B(v,w,P);return}if(U!==2&&M&1&&q)if(U===0)q.beforeEnter(F),r(F,w,P),_t(()=>q.enter(F),x);else{const{leave:W,delayLeave:X,afterLeave:ee}=q,te=()=>{v.ctx.isUnmounted?s(F):r(F,w,P)},ce=()=>{F._isLeaving&&F[Ly](!0),W(F,()=>{te(),ee&&ee()})};X?X(F,te,ce):ce()}else r(F,w,P)},ze=(v,w,P,U=!1,x=!1)=>{const{type:F,props:z,ref:q,children:j,dynamicChildren:M,shapeFlag:Z,patchFlag:W,dirs:X,cacheIndex:ee,memo:te}=v;if(W===-2&&(x=!1),q!=null&&(_n(),Gs(q,null,P,v,!0),yn()),ee!=null&&(w.renderCache[ee]=void 0),Z&256){w.ctx.deactivate(v);return}const ce=Z&1&&X,ve=!Qr(v);let Ne;if(ve&&(Ne=z&&z.onVnodeBeforeUnmount)&&Bt(Ne,w,v),Z&6)tr(v.component,P,U);else{if(Z&128){v.suspense.unmount(P,U);return}ce&&ar(v,null,w,"beforeUnmount"),Z&64?v.type.remove(v,w,P,Ut,U):M&&!M.hasOnce&&(F!==Fe||W>0&&W&64)?nr(M,w,P,!1,!0):(F===Fe&&W&384||!x&&Z&16)&&nr(j,w,P),U&&We(v)}const Ue=te!=null&&ee==null;(ve&&(Ne=z&&z.onVnodeUnmounted)||ce||Ue)&&_t(()=>{Ne&&Bt(Ne,w,v),ce&&ar(v,null,w,"unmounted"),Ue&&(v.el=null)},P)},We=v=>{const{type:w,el:P,anchor:U,transition:x}=v;if(w===Fe){Na(P,U);return}if(w===tc){L(v);return}const F=()=>{s(P),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:q}=x,j=()=>z(P,F);q?q(v.el,F,j):j()}else F()},Na=(v,w)=>{let P;for(;v!==w;)P=_(v),s(v),v=P;s(w)},tr=(v,w,P)=>{const{bum:U,scope:x,job:F,subTree:z,um:q,m:j,a:M}=v;bh(j),bh(M),U&&ho(U),x.stop(),F&&(F.flags|=8,ze(z,v,w,P)),q&&_t(q,w),_t(()=>{v.isUnmounted=!0},w)},nr=(v,w,P,U=!1,x=!1,F=0)=>{for(let z=F;z<v.length;z++)ze(v[z],w,P,U,x)},sn=v=>{if(v.shapeFlag&6)return sn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=_(v.anchor||v.el),P=w&&w[xy];return P?_(P):w};let vs=!1;const Li=(v,w,P)=>{let U;v==null?w._vnode&&(ze(w._vnode,null,null,!0),U=w._vnode.component):k(w._vnode||null,v,w,null,null,null,P),w._vnode=v,vs||(vs=!0,gh(U),np(),vs=!1)},Ut={p:k,um:ze,m:rn,r:We,mt:ht,mc:m,pc:me,pbc:T,n:sn,o:t};return{render:Li,hydrate:void 0,createApp:rv(Li)}}function ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bp(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=un(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&bp(a,c)),c.type===da&&(c.patchFlag===-1&&(c=s[i]=un(c)),c.el=a.el),c.type===En&&!c.el&&(c.el=a.el)}}function Ev(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Sp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sp(e)}function bh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Rp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Rp(e.subTree):null}const Cp=t=>t.__isSuspense;function Tv(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Py(t)}const Fe=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),En=Symbol.for("v-cmt"),tc=Symbol.for("v-stc"),Js=[];let Tt=null;function ye(t=!1){Js.push(Tt=t?null:[])}function Iv(){Js.pop(),Tt=Js[Js.length-1]||null}let li=1;function Sh(t,e=!1){li+=t,t<0&&Tt&&e&&(Tt.hasOnce=!0)}function Pp(t){return t.dynamicChildren=li>0?Tt||Wr:null,Iv(),li>0&&Tt&&Tt.push(t),t}function Ce(t,e,n,r,s,i){return Pp(Ve(t,e,n,r,s,i,!0))}function _r(t,e,n,r,s){return Pp(vt(t,e,n,r,s,!0))}function wl(t){return t?t.__v_isVNode===!0:!1}function xs(t,e){return t.type===e.type&&t.key===e.key}const Vp=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||ke(t)||le(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function Ve(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vp(e),ref:e&&go(e),scopeId:sp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(Al(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),li>0&&!a&&Tt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Tt.push(l),l}const vt=wv;function wv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qy)&&(t=En),wl(t)){const c=ns(t,e,!0);return n&&Al(c,n),li>0&&!i&&Tt&&(c.shapeFlag&6?Tt[Tt.indexOf(t)]=c:Tt.push(c)),c.patchFlag=-2,c}if(Nv(t)&&(t=t.__vccOpts),e){e=Av(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=ll(c)),Ie(l)&&(la(l)&&!se(l)&&(l=Ze({},l)),e.style=us(l))}const a=He(t)?1:Cp(t)?128:My(t)?64:Ie(t)?4:le(t)?2:0;return Ve(t,e,n,r,s,a,i,!0)}function Av(t){return t?la(t)||vp(t)?Ze({},t):t:null}function ns(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?bv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Vp(h),ref:e&&e.ref?n&&i?se(i)?i.concat(go(e)):[i,go(e)]:go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&vl(d,l.clone(d)),d}function ur(t=" ",e=0){return vt(da,null,t,e)}function Pc(t="",e=!1){return e?(ye(),_r(En,null,t)):vt(En,null,t)}function zt(t){return t==null||typeof t=="boolean"?vt(En):se(t)?vt(Fe,null,t.slice()):wl(t)?un(t):vt(da,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function Al(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Al(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!vp(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function bv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ll([e.class,r.class]));else if(s==="style")e.style=us([e.style,r.style]);else if(na(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!ra(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Bt(t,e,n,r=null){en(t,e,7,[n,r])}const Sv=pp();let Rv=0;function Cv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Sv,i={uid:Rv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tp(r,s),emitsOptions:gp(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iv.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const kp=()=>gt||lt;let Oo,Vc;{const t=oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Oo=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Vc=e("__VUE_SSR_SETTERS__",n=>ui=n)}const wi=t=>{const e=gt;return Oo(t),t.scope.on(),()=>{t.scope.off(),Oo(e)}},Rh=()=>{gt&&gt.scope.off(),Oo(null)};function Dp(t){return t.vnode.shapeFlag&4}let ui=!1;function Pv(t,e=!1,n=!1){e&&Vc(e);const{props:r,children:s}=t.vnode,i=Dp(t);hv(t,r,i,e),gv(t,s,n||e);const a=i?Vv(t,e):void 0;return e&&Vc(!1),a}function Vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jy);const{setup:r}=n;if(r){_n();const s=t.setupContext=r.length>1?Dv(t):null,i=wi(t),a=Ti(r,t,0,[t.props,s]),c=Sd(a);if(yn(),i(),(c||t.sp)&&!Qr(t)&&ap(t),c){if(a.then(Rh,Rh),e)return a.then(l=>{Ch(t,l)}).catch(l=>{ua(l,t,0)});t.asyncDep=a}else Ch(t,a)}else Np(t)}function Ch(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Xd(e)),Np(t)}function Np(t,e,n){const r=t.type;t.render||(t.render=r.render||Kt);{const s=wi(t);_n();try{Xy(t)}finally{yn(),s()}}}const kv={get(t,e){return at(t,"get",""),t[e]}};function Dv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kv),slots:t.slots,emit:t.emit,expose:e}}function pa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Xd(ml(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function Nv(t){return le(t)&&"__vccOpts"in t}const $t=(t,e)=>Ay(t,e,ui),Ov="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kc;const Ph=typeof window<"u"&&window.trustedTypes;if(Ph)try{kc=Ph.createPolicy("vue",{createHTML:t=>t})}catch{}const Op=kc?t=>kc.createHTML(t):t=>t,xv="http://www.w3.org/2000/svg",Mv="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,Vh=ln&&ln.createElement("template"),Lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ln.createElementNS(xv,t):e==="mathml"?ln.createElementNS(Mv,t):n?ln.createElement(t,{is:n}):ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vh.innerHTML=Op(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Vh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Fv=Symbol("_vtc");function Uv(t,e,n){const r=t[Fv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kh=Symbol("_vod"),Bv=Symbol("_vsh"),jv=Symbol(""),$v=/(?:^|;)\s*display\s*:/;function qv(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&mo(r,c,"")}else for(const a in e)n[a]==null&&mo(r,a,"");for(const a in n)a==="display"&&(i=!0),mo(r,a,n[a])}else if(s){if(e!==n){const a=r[jv];a&&(n+=";"+a),r.cssText=n,i=$v.test(n)}}else e&&t.removeAttribute("style");kh in t&&(t[kh]=i?r.display:"",t[Bv]&&(r.display="none"))}const Dh=/\s*!important$/;function mo(t,e,n){if(se(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Hv(t,e);Dh.test(n)?t.setProperty(Sr(r),n.replace(Dh,""),"important"):t[r]=n}}const Nh=["Webkit","Moz","ms"],nc={};function Hv(t,e){const n=nc[e];if(n)return n;let r=Nt(e);if(r!=="filter"&&r in t)return nc[e]=r;r=Pd(r);for(let s=0;s<Nh.length;s++){const i=Nh[s]+r;if(i in t)return nc[e]=i}return e}const Oh="http://www.w3.org/1999/xlink";function xh(t,e,n,r,s,i=K_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Oh,e.slice(6,e.length)):t.setAttributeNS(Oh,e,n):n==null||i&&!kd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wt(n)?String(n):n)}function Mh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Op(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=kd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function fr(t,e,n,r){t.addEventListener(e,n,r)}function zv(t,e,n,r){t.removeEventListener(e,n,r)}const Lh=Symbol("_vei");function Wv(t,e,n,r,s=null){const i=t[Lh]||(t[Lh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Kv(e);if(r){const h=i[e]=Jv(r,s);fr(t,c,h,l)}else a&&(zv(t,c,a,l),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function Kv(t){let e;if(Fh.test(t)){e={};let r;for(;r=t.match(Fh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sr(t.slice(2)),e]}let rc=0;const Gv=Promise.resolve(),Qv=()=>rc||(Gv.then(()=>rc=0),rc=Date.now());function Jv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;en(Xv(r,n.value),e,5,[r])};return n.value=t,n.attached=Qv(),n}function Xv(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Uv(t,r,a):e==="style"?qv(t,n,r):na(e)?ra(e)||Wv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zv(t,e,r,a))?(Mh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xh(t,e,r,a,i,e!=="value")):t._isVueCE&&(eE(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!He(r)))?Mh(t,Nt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xh(t,e,r,a))};function Zv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Uh(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uh(e)&&He(n)?!1:e in t}function eE(t,e){const n=t._def.props;if(!n)return!1;const r=Nt(e);return Array.isArray(n)?n.some(s=>Nt(s)===r):Object.keys(n).some(s=>Nt(s)===r)}const xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>ho(e,n):e};function tE(t){t.target.composing=!0}function Bh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jr=Symbol("_assign");function jh(t,e,n){return e&&(t=t.trim()),n&&(t=cl(t)),t}const nE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Jr]=xo(s);const i=r||s.props&&s.props.type==="number";fr(t,e?"change":"input",a=>{a.target.composing||t[Jr](jh(t.value,n,i))}),(n||i)&&fr(t,"change",()=>{t.value=jh(t.value,n,i)}),e||(fr(t,"compositionstart",tE),fr(t,"compositionend",Bh),fr(t,"change",Bh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Jr]=xo(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?cl(t.value):t.value,l=e??"";if(c===l)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Ms={created(t,{value:e},n){t.checked=ii(e,n.props.value),t[Jr]=xo(n),fr(t,"change",()=>{t[Jr](rE(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Jr]=xo(r),e!==n&&(t.checked=ii(e,r.props.value))}};function rE(t){return"_value"in t?t._value:t.value}const sE=Ze({patchProp:Yv},Lv);let $h;function iE(){return $h||($h=_v(sE))}const oE=((...t)=>{const e=iE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=cE(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,aE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function aE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cE(t){return He(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let xp;const ga=t=>xp=t,Mp=Symbol();function Dc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xs||(Xs={}));function lE(){const t=xd(!0),e=t.run(()=>_l({}));let n=[],r=[];const s=ml({install(i){ga(s),s._a=i,i.provide(Mp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Lp=()=>{};function qh(t,e,n,r=Lp){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Md()&&Q_(s),s}function Br(t,...e){t.forEach(n=>{n(...e)})}const uE=t=>t(),Hh=Symbol(),sc=Symbol();function Nc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Dc(s)&&Dc(r)&&t.hasOwnProperty(n)&&!ke(r)&&!Gt(r)?t[n]=Nc(s,r):t[n]=r}return t}const hE=Symbol();function fE(t){return!Dc(t)||!Object.prototype.hasOwnProperty.call(t,hE)}const{assign:Nn}=Object;function dE(t){return!!(ke(t)&&t.effect)}function pE(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=vy(n.state.value[t]);return Nn(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=ml($t(()=>{ga(n);const b=n._s.get(t);return a[_].call(b,b)})),p),{}))}return l=Fp(t,h,e,n,r,!0),l}function Fp(t,e,n={},r,s,i){let a;const c=Nn({actions:{}},n),l={deep:!0};let h,d,p=new Set,_=new Set,b;const V=r.state.value[t];!i&&!V&&(r.state.value[t]={});let k;function O(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[t]),y={type:Xs.patchFunction,storeId:t,events:b}):(Nc(r.state.value[t],m),y={type:Xs.patchObject,payload:m,storeId:t,events:b});const T=k=Symbol();ep().then(()=>{k===T&&(h=!0)}),d=!0,Br(p,y,r.state.value[t])}const J=i?function(){const{state:y}=n,T=y?y():{};this.$patch(A=>{Nn(A,T)})}:Lp;function H(){a.stop(),p.clear(),_.clear(),r._s.delete(t)}const B=(m,y="")=>{if(Hh in m)return m[sc]=y,m;const T=function(){ga(r);const A=Array.from(arguments),S=new Set,E=new Set;function ht(ue){S.add(ue)}function Ft(ue){E.add(ue)}Br(_,{args:A,name:T[sc],store:K,after:ht,onError:Ft});let De;try{De=m.apply(this&&this.$id===t?this:K,A)}catch(ue){throw Br(E,ue),ue}return De instanceof Promise?De.then(ue=>(Br(S,ue),ue)).catch(ue=>(Br(E,ue),Promise.reject(ue))):(Br(S,De),De)};return T[Hh]=!0,T[sc]=y,T},L={_p:r,$id:t,$onAction:qh.bind(null,_),$patch:O,$reset:J,$subscribe(m,y={}){const T=qh(p,m,y.detached,()=>A()),A=a.run(()=>fo(()=>r.state.value[t],S=>{(y.flush==="sync"?d:h)&&m({storeId:t,type:Xs.direct,events:b},S)},Nn({},l,y)));return T},$dispose:H},K=ca(L);r._s.set(t,K);const I=(r._a&&r._a.runWithContext||uE)(()=>r._e.run(()=>(a=xd()).run(()=>e({action:B}))));for(const m in I){const y=I[m];if(ke(y)&&!dE(y)||Gt(y))i||(V&&fE(y)&&(ke(y)?y.value=V[m]:Nc(y,V[m])),r.state.value[t][m]=y);else if(typeof y=="function"){const T=B(y,m);I[m]=T,c.actions[m]=y}}return Nn(K,I),Nn(ge(K),I),Object.defineProperty(K,"$state",{get:()=>r.state.value[t],set:m=>{O(y=>{Nn(y,m)})}}),r._p.forEach(m=>{Nn(K,a.run(()=>m({store:K,app:r._a,pinia:r,options:c})))}),V&&i&&n.hydrate&&n.hydrate(K.$state,V),h=!0,d=!0,K}/*! #__NO_SIDE_EFFECTS__ */function gE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=ky();return a=a||(l?Ks(Mp,null):null),a&&ga(a),a=xp,a._s.has(t)||(s?Fp(t,e,r,a):pE(t,r,a)),a._s.get(t)}return i.$id=t,i}function Ai(t){const e=ge(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=$t({get:()=>t[r],set(i){t[r]=i}}):(ke(s)||Gt(s))&&(n[r]=Iy(t,r))}return n}function mE(t,e){if(t==null)return;let n=t;for(let r=0;r<e.length;r++){if(n===void 0||n[e[r]]===void 0)return;if(n===null||n[e[r]]===null)return null;n=n[e[r]]}return n}function bl(t,e,n){if(n.length===0)return e;const r=n[0];return n.length>1&&(e=bl(typeof t!="object"||t===null||!Object.prototype.hasOwnProperty.call(t,r)?Number.isInteger(Number(n[1]))?[]:{}:t[r],e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function Up(t,e){if(t==null||e.length===0)return t;if(e.length===1){if(t==null)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const r in t)n[r]=t[r];return delete n[e[0]],n}if(t[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const r in t)n[r]=t[r];return n}return bl(t,Up(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Bp(t,e){return e.map(n=>n.split(".")).map(n=>[n,mE(t,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>bl(n,r[1],r[0]),{})}function jp(t,e){return e.map(n=>n.split(".")).reduce((n,r)=>Up(n,r),t)}function zh(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const _=n.deserialize(p),b=i?Bp(_,i):_,V=a?jp(b,a):b;t.$patch(V)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function Wh(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a}){try{const c=i?Bp(t,i):t,l=a?jp(c,a):c,h=n.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function _E(t,e){return typeof t=="function"?t(e):typeof t=="string"?t:e}function yE(t,e,n){const{pinia:r,store:s,options:{persist:i=n}}=t;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{zh(s,l,t,c)})},s.$persist=()=>{a.forEach(c=>{Wh(s.$state,c)})},a.forEach(c=>{zh(s,c,t),s.$subscribe((l,h)=>Wh(h,c),{detached:!0})})}function vE(t={}){return function(e){yE(e,n=>{const r=_E(n.key,e.store.$id);return{key:(t.key?t.key:s=>s)(r),debug:n.debug??t.debug??!1,serializer:n.serializer??t.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:n.storage??t.storage??window.localStorage,beforeHydrate:n.beforeHydrate??t.beforeHydrate,afterHydrate:n.afterHydrate??t.afterHydrate,pick:n.pick,omit:n.omit}},t.auto??!1)}}var EE=vE();const TE=()=>{};var Kh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},IE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(_=64)),r.push(n[d],n[p],n[_],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new wE;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AE=function(t){const e=$p(t);return qp.encodeByteArray(e,!0)},Mo=function(t){return AE(t).replace(/\./g,"")},Hp=function(t){try{return qp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=()=>bE().__FIREBASE_DEFAULTS__,RE=()=>{if(typeof process>"u"||typeof Kh>"u")return;const t=Kh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hp(t[1]);return e&&JSON.parse(e)},ma=()=>{try{return TE()||SE()||RE()||CE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zp=t=>{var e,n;return(n=(e=ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PE=t=>{const e=zp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wp=()=>{var t;return(t=ma())===null||t===void 0?void 0:t.config},Kp=t=>{var e;return(e=ma())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mo(JSON.stringify(n)),Mo(JSON.stringify(a)),""].join(".")}const Ys={};function DE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ys))Ys[e]?t.emulator.push(e):t.prod.push(e);return t}function NE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gh=!1;function Qp(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Ys[t]===e||Ys[t]||Gh)return;Ys[t]=e;function n(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=DE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Gh=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=NE(r),b=n("text"),V=document.getElementById(b)||document.createElement("span"),k=n("learnmore"),O=document.getElementById(k)||document.createElement("a"),J=n("preprendIcon"),H=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const B=_.element;c(B),d(O,k);const L=h();l(H,J),B.append(H,V,O,L),document.body.appendChild(B)}i?(V.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function xE(){var t;const e=(t=ma())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ME(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UE(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BE(){return!xE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jE(){try{return typeof indexedDB=="object"}catch{return!1}}function $E(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qE,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?HE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,c,r)}}function HE(t,e){return t.replace(zE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zE=/\{\$([^}]+)}/g;function WE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Qh(i)&&Qh(a)){if(!Tr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function KE(t,e){const n=new GE(t,e);return n.subscribe.bind(n)}class GE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YE(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XE(t){return t===hr?void 0:t}function YE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const eT={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},tT=fe.INFO,nT={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},rT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=tT,this._logHandler=rT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const sT=(t,e)=>e.some(n=>t instanceof n);let Jh,Xh;function iT(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oT(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jp=new WeakMap,Oc=new WeakMap,Xp=new WeakMap,oc=new WeakMap,Rl=new WeakMap;function aT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Bn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Jp.set(n,t)}).catch(()=>{}),Rl.set(e,t),e}function cT(t){if(Oc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Oc.set(t,e)}let xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lT(t){xc=t(xc)}function uT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return Xp.set(r,e.sort?e.sort():[e]),Bn(r)}:oT().includes(t)?function(...e){return t.apply(ac(this),e),Bn(Jp.get(this))}:function(...e){return Bn(t.apply(ac(this),e))}}function hT(t){return typeof t=="function"?uT(t):(t instanceof IDBTransaction&&cT(t),sT(t,iT())?new Proxy(t,xc):t)}function Bn(t){if(t instanceof IDBRequest)return aT(t);if(oc.has(t))return oc.get(t);const e=hT(t);return e!==t&&(oc.set(t,e),Rl.set(e,t)),e}const ac=t=>Rl.get(t);function fT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Bn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Bn(a.result),l.oldVersion,l.newVersion,Bn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const dT=["get","getKey","getAll","getAllKeys","count"],pT=["put","add","delete","clear"],cc=new Map;function Yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dT.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return cc.set(e,i),i}lT(t=>({...t,get:(e,n,r)=>Yh(e,n)||t.get(e,n,r),has:(e,n)=>!!Yh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Zh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Sl("@firebase/app"),_T="@firebase/app-compat",yT="@firebase/analytics-compat",vT="@firebase/analytics",ET="@firebase/app-check-compat",TT="@firebase/app-check",IT="@firebase/auth",wT="@firebase/auth-compat",AT="@firebase/database",bT="@firebase/data-connect",ST="@firebase/database-compat",RT="@firebase/functions",CT="@firebase/functions-compat",PT="@firebase/installations",VT="@firebase/installations-compat",kT="@firebase/messaging",DT="@firebase/messaging-compat",NT="@firebase/performance",OT="@firebase/performance-compat",xT="@firebase/remote-config",MT="@firebase/remote-config-compat",LT="@firebase/storage",FT="@firebase/storage-compat",UT="@firebase/firestore",BT="@firebase/ai",jT="@firebase/firestore-compat",$T="firebase",qT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="[DEFAULT]",HT={[Mc]:"fire-core",[_T]:"fire-core-compat",[vT]:"fire-analytics",[yT]:"fire-analytics-compat",[TT]:"fire-app-check",[ET]:"fire-app-check-compat",[IT]:"fire-auth",[wT]:"fire-auth-compat",[AT]:"fire-rtdb",[bT]:"fire-data-connect",[ST]:"fire-rtdb-compat",[RT]:"fire-fn",[CT]:"fire-fn-compat",[PT]:"fire-iid",[VT]:"fire-iid-compat",[kT]:"fire-fcm",[DT]:"fire-fcm-compat",[NT]:"fire-perf",[OT]:"fire-perf-compat",[xT]:"fire-rc",[MT]:"fire-rc-compat",[LT]:"fire-gcs",[FT]:"fire-gcs-compat",[UT]:"fire-fst",[jT]:"fire-fst-compat",[BT]:"fire-vertex","fire-js":"fire-js",[$T]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map,zT=new Map,Fc=new Map;function ef(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(Fc.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,t);for(const n of Lo.values())ef(n,t);for(const n of zT.values())ef(n,t);return!0}function Cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new bi("app","Firebase",WT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=qT;function Yp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=Wp()),!n)throw jn.create("no-options");const i=Lo.get(s);if(i){if(Tr(n,i.options)&&Tr(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const a=new ZE(s);for(const l of Fc.values())a.addComponent(l);const c=new KT(n,r,a);return Lo.set(s,c),c}function Zp(t=Lc){const e=Lo.get(t);if(!e&&t===Lc&&Wp())return Yp();if(!e)throw jn.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let s=(r=HT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(c.join(" "));return}rs(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="firebase-heartbeat-database",QT=1,hi="firebase-heartbeat-store";let lc=null;function eg(){return lc||(lc=fT(GT,QT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),lc}async function JT(t){try{const n=(await eg()).transaction(hi),r=await n.objectStore(hi).get(tg(t));return await n.done,r}catch(e){if(e instanceof Sn)Tn.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function tf(t,e){try{const r=(await eg()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,tg(t)),await r.done}catch(n){if(n instanceof Sn)Tn.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function tg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1024,YT=30;class ZT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>YT){const a=nI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nf(),{heartbeatsToSend:r,unsentEntries:s}=eI(this._heartbeatsCache.heartbeats),i=Mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function nf(){return new Date().toISOString().substring(0,10)}function eI(t,e=XT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),rf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jE()?$E().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rf(t){return Mo(JSON.stringify({version:2,heartbeats:t})).length}function nI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t){rs(new Ir("platform-logger",e=>new gT(e),"PRIVATE")),rs(new Ir("heartbeat",e=>new ZT(e),"PRIVATE")),$n(Mc,Zh,t),$n(Mc,Zh,"esm2017"),$n("fire-js","")}rI("");function Pl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ng(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sI=ng,rg=new bi("auth","Firebase",ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Sl("@firebase/auth");function iI(t,...e){Fo.logLevel<=fe.WARN&&Fo.warn(`Auth (${fs}): ${t}`,...e)}function _o(t,...e){Fo.logLevel<=fe.ERROR&&Fo.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw kl(t,...e)}function xt(t,...e){return kl(t,...e)}function Vl(t,e,n){const r=Object.assign(Object.assign({},sI()),{[e]:n});return new bi("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return Vl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),Vl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rg.create(t,...e)}function re(t,e,...n){if(!t)throw kl(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function In(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aI(){return sf()==="http:"||sf()==="https:"}function sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aI()||LE()||"connection"in navigator)?navigator.onLine:!0}function lI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=OE()||FE()}get(){return cI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fI=new Ri(3e4,6e4);function Nl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ds(t,e,n,r,s={}){return ig(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Si(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return ME()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(h.credentials="include"),sg.fetch()(await og(t,t.config.apiHost,n,c),h)})}async function ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uI),e);try{const s=new pI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ro(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw ro(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Vl(t,d,h);tn(t,d)}}catch(s){if(s instanceof Sn)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function dI(t,e,n,r,s={}){const i=await ds(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function og(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Dl(t.config,s):`${t.config.apiScheme}://${s}`;return hI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class pI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),fI.get())})}}function ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function Uo(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mI(t,e=!1){const n=mt(t),r=await n.getIdToken(e),s=Ol(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(uc(s.auth_time)),issuedAtTime:Zs(uc(s.iat)),expirationTime:Zs(uc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function Ol(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hp(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function of(t){const e=Ol(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&_I(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _I({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fi(t,Uo(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ag(i.providerUserInfo):[],c=EI(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Bc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function vI(t){const e=mt(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ag(t){return t.map(e=>{var{providerId:n}=e,r=Pl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){const n=await ig(t,{},async()=>{const r=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await og(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(l.credentials="include"),sg.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function II(t,e){return ds(t,"POST","/v2/accounts:revokeToken",Nl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await TI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Xr;return r&&(re(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Pl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mI(this,e)}reload(){return vI(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await fi(this,gI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,J=(h=n.createdAt)!==null&&h!==void 0?h:void 0,H=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:L,isAnonymous:K,providerData:ae,stsTokenManager:I}=n;re(B&&I,e,"internal-error");const m=Xr.fromJSON(this.name,I);re(typeof B=="string",e,"internal-error"),kn(p,e.name),kn(_,e.name),re(typeof L=="boolean",e,"internal-error"),re(typeof K=="boolean",e,"internal-error"),kn(b,e.name),kn(V,e.name),kn(k,e.name),kn(O,e.name),kn(J,e.name),kn(H,e.name);const y=new kt({uid:B,auth:e,email:_,emailVerified:L,displayName:p,isAnonymous:K,photoURL:V,phoneNumber:b,tenantId:k,stsTokenManager:m,createdAt:J,lastLoginAt:H});return ae&&Array.isArray(ae)&&(y.providerData=ae.map(T=>Object.assign({},T))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Xr;s.updateFromServerResponse(n);const i=new kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ag(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Xr;c.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function gn(t){In(t instanceof Function,"Expected a class definition");let e=af.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,af.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const cf=cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uo(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(gn(cf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(cf);const a=yo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await Uo(e,{idToken:d}).catch(()=>{});if(!_)break;p=await kt._fromGetAccountInfoResponse(e,_,d)}else p=kt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pg(e))return"Blackberry";if(gg(e))return"Webos";if(ug(e))return"Safari";if((e.includes("chrome/")||hg(e))&&!e.includes("edge/"))return"Chrome";if(dg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lg(t=ut()){return/firefox\//i.test(t)}function ug(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hg(t=ut()){return/crios\//i.test(t)}function fg(t=ut()){return/iemobile/i.test(t)}function dg(t=ut()){return/android/i.test(t)}function pg(t=ut()){return/blackberry/i.test(t)}function gg(t=ut()){return/webos/i.test(t)}function xl(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wI(t=ut()){var e;return xl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AI(){return UE()&&document.documentMode===10}function mg(t=ut()){return xl(t)||dg(t)||gg(t)||pg(t)||/windows phone/i.test(t)||fg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e=[]){let n;switch(t){case"Browser":n=lf(ut());break;case"Worker":n=`${lf(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,e={}){return ds(t,"GET","/v2/passwordPolicy",Nl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=6;class CI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:RI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new bI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uo(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(yr(this));const n=e?mt(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SI(this),n=new CI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await II(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ci(t){return mt(t)}class uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=KE(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(t){Ml=t}function kI(t){return Ml.loadJS(t)}function DI(){return Ml.gapiScript}function NI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e){const n=Cl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tr(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function xI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MI(t,e,n){const r=Ci(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=yg(e),{host:a,port:c}=LI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(Tr(h,r.config.emulator)&&Tr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,hs(a)?(Gp(`${i}//${a}${l}`),Qp("Auth",!0)):FI()}function yg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LI(t){const e=yg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:hf(a)}}}function hf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return dI(t,"POST","/v1/accounts:signInWithIdp",Nl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="http://localhost";class wr extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Pl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new wr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:UI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Ll{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Pi{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Pi{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=ff(r);return new ss({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ff(r);return new ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Sn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jo(e,n,r,s)}}function Eg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(t,i,e,r):i})}async function BI(t,e,n=!1){const r=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(yr(r));const s="reauthenticate";try{const i=await fi(t,Eg(r,s,e,t),n);re(i.idToken,r,"internal-error");const a=Ol(i.idToken);re(a,r,"internal-error");const{sub:c}=a;return re(t.uid===c,r,"user-mismatch"),ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e,n=!1){if(Vt(t.app))return Promise.reject(yr(t));const r="signIn",s=await Eg(t,r,e),i=await ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function qI(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function HI(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function zI(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function WI(t){return mt(t).signOut()}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=1e3,GI=10;class Ig extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);AI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ig.type="LOCAL";const QI=Ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wg.type="SESSION";const Ag=wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await JI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_a.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Fl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function YI(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function ZI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ew(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tw(){return bg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firebaseLocalStorageDb",nw=1,qo="firebaseLocalStorage",Rg="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function rw(){const t=indexedDB.deleteDatabase(Sg);return new Vi(t).toPromise()}function jc(){const t=indexedDB.open(Sg,nw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qo,{keyPath:Rg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qo)?e(r):(r.close(),await rw(),e(await jc()))})})}async function df(t,e,n){const r=ya(t,!0).put({[Rg]:e,value:n});return new Vi(r).toPromise()}async function sw(t,e){const n=ya(t,!1).get(e),r=await new Vi(n).toPromise();return r===void 0?null:r.value}function pf(t,e){const n=ya(t,!0).delete(e);return new Vi(n).toPromise()}const iw=800,ow=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ow)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(tw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZI(),!this.activeServiceWorker)return;this.sender=new XI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ew()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await df(e,$o,"1"),await pf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ya(s,!1).getAll();return new Vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const aw=Cg;new Ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e){return e?gn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cw(t){return $I(t.auth,new Ul(t),t.bypassAuthState)}function lw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),jI(n,new Ul(t),t.bypassAuthState)}async function uw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),BI(n,new Ul(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cw;case"linkViaPopup":case"linkViaRedirect":return uw;case"reauthViaPopup":case"reauthViaRedirect":return lw;default:tn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new Ri(2e3,1e4);async function fw(t,e,n){if(Vt(t.app))return Promise.reject(xt(t,"operation-not-supported-in-this-environment"));const r=Ci(t);oI(t,e,Ll);const s=Pg(r,n);return new dr(r,"signInViaPopup",e,s).executeNotNull()}class dr extends Vg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hw.get())};e()}}dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="pendingRedirect",vo=new Map;class pw extends Vg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await gw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gw(t,e){const n=yw(e),r=_w(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mw(t,e){vo.set(t._key(),e)}function _w(t){return gn(t._redirectPersistence)}function yw(t){return yo(dw,t.config.apiKey,t.name)}async function vw(t,e){return await Ci(t)._initializationPromise,kg(t,e,!1)}async function kg(t,e,n=!1){if(Vt(t.app))return Promise.reject(yr(t));const r=Ci(t),s=Pg(r,e),a=await new pw(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=600*1e3;class Tw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Iw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ew&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(e))}saveEventToCache(e){this.cachedEventUids.add(gf(e)),this.lastProcessedEventTime=Date.now()}}function gf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Iw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bw=/^https?/;async function Sw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ww(t);for(const n of e)try{if(Rw(n))return}catch{}tn(t,"unauthorized-domain")}function Rw(t){const e=Uc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!bw.test(n))return!1;if(Aw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=new Ri(3e4,6e4);function mf(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pw(t){return new Promise((e,n)=>{var r,s,i;function a(){mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mf(),n(xt(t,"network-request-failed"))},timeout:Cw.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)a();else{const c=NI("iframefcb");return Qt()[c]=()=>{gapi.load?a():n(xt(t,"network-request-failed"))},kI(`${DI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function Vw(t){return Eo=Eo||Pw(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Ri(5e3,15e3),Dw="__/auth/iframe",Nw="emulator/auth/iframe",Ow={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mw(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dl(e,Nw):`https://${t.config.authDomain}/${Dw}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=xw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Si(r).slice(1)}`}async function Lw(t){const e=await Vw(t),n=Qt().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:Mw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ow,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=xt(t,"network-request-failed"),c=Qt().setTimeout(()=>{i(a)},kw.get());function l(){Qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uw=500,Bw=600,jw="_blank",$w="http://localhost";class _f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qw(t,e,n,r=Uw,s=Bw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Fw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();n&&(c=hg(h)?jw:n),lg(h)&&(e=e||$w,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[b,V])=>`${_}${b}=${V},`,"");if(wI(h)&&c!=="_self")return Hw(e||"",c),new _f(null);const p=window.open(e||"",c,d);re(p,t,"popup-blocked");try{p.focus()}catch{}return new _f(p)}function Hw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="__/auth/handler",Ww="emulator/auth/handler",Kw=encodeURIComponent("fac");async function yf(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof Ll){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",WE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Pi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${Kw}=${encodeURIComponent(l)}`:"";return`${Gw(t)}?${Si(c).slice(1)}${h}`}function Gw({config:t}){return t.emulator?Dl(t,Ww):`https://${t.authDomain}/${zw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="webStorageSupport";class Qw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=kg,this._overrideRedirectResult=mw}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await yf(e,n,r,Uc(),s);return qw(e,a,Fl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await yf(e,n,r,Uc(),s);return YI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lw(e),r=new Tw(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hc,{type:hc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hc];a!==void 0&&n(!!a),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mg()||ug()||xl()}}const Jw=Qw;var vf="@firebase/auth",Ef="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zw(t){rs(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;re(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_g(t)},h=new PI(r,s,i,l);return xI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new Ir("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new Xw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(vf,Ef,Yw(t)),$n(vf,Ef,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=300,tA=Kp("authIdTokenMaxAge")||eA;let Tf=null;const nA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tA)return;const s=n==null?void 0:n.token;Tf!==s&&(Tf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rA(t=Zp()){const e=Cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OI(t,{popupRedirectResolver:Jw,persistence:[aw,QI,Ag]}),r=Kp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=nA(i.toString());HI(n,a,()=>a(n.currentUser)),qI(n,c=>a(c))}}const s=zp("auth");return s&&MI(n,`http://${s}`),n}function sA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zw("Browser");const Rr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},iA={},oA={class:"carafe"};function aA(t,e){return ye(),Ce("div",oA,[po(t.$slots,"top",{},void 0,!0),po(t.$slots,"mid",{},void 0,!0),po(t.$slots,"bottom",{},void 0,!0)])}const cA=Rr(iA,[["render",aA],["__scopeId","data-v-8709b092"]]),lA={},uA={class:"mug"};function hA(t,e){return ye(),Ce("div",uA,[po(t.$slots,"default")])}const fA=Rr(lA,[["render",hA]]);var If=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qn,Ng;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],A=I.g[2];var S=I.g[3],E=m+(S^y&(A^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(A^S&(y^A))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(y^A^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(A^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,T=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<m;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)I[y++]=this.g[m]>>>T&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==m||(y[A]=S,T=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var m=[],y=1,T=0;I>=y;T++)m[T]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return O(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=p,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=l(0),_=l(1),b=l(16777216);t=a.prototype,t.m=function(){if(k(this))return-O(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(k(this))return"-"+O(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,T="";;){var A=L(y,m).g;y=J(y,A.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=A,V(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=J(this,I),k(I)?-1:V(I)?0:1};function O(I){for(var m=I.g.length,y=[],T=0;T<m;T++)y[T]=~I.g[T];return new a(y,~I.h).add(_)}t.abs=function(){return k(this)?O(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0,A=0;A<=m;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,y[A]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function J(I,m){return I.add(O(m))}t.j=function(I){if(V(this)||V(I))return p;if(k(this))return k(I)?O(this).j(O(I)):O(O(this).j(I));if(k(I))return O(this.j(O(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=I.i(A)>>>16,Ft=I.i(A)&65535;y[2*T+2*A]+=E*Ft,H(y,2*T+2*A),y[2*T+2*A+1]+=S*Ft,H(y,2*T+2*A+1),y[2*T+2*A+1]+=E*ht,H(y,2*T+2*A+1),y[2*T+2*A+2]+=S*ht,H(y,2*T+2*A+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function H(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function B(I,m){this.g=I,this.h=m}function L(I,m){if(V(m))throw Error("division by zero");if(V(I))return new B(p,p);if(k(I))return m=L(O(I),m),new B(O(m.g),O(m.h));if(k(m))return m=L(I,O(m)),new B(O(m.g),m.h);if(30<I.g.length){if(k(I)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(I);)y=K(y),T=K(T);var A=ae(y,1),S=ae(T,1);for(T=ae(T,2),y=ae(y,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(y),S=E),T=ae(T,1),y=ae(y,1)}return m=J(I,A.j(m)),new B(A,m)}for(A=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);k(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(m);V(S)&&(S=_),A=A.add(S),I=J(I,E)}return new B(A,I)}t.A=function(I){return L(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function K(I){for(var m=I.g.length+1,y=[],T=0;T<m;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function ae(I,m){var y=m>>5;m%=32;for(var T=I.g.length-y,A=[],S=0;S<T;S++)A[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ng=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,qn=a}).apply(typeof If<"u"?If:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Og,Bs,xg,To,$c,Mg,Lg,Fg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return u.prototype[R].apply(g,$)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function O(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let $=0;$<C;$++)o[R+$]=g[$]}else o.push(g)}}class J{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function H(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var K=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ae(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<y.length;C++)f=y[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const g=Ft.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ft=new J(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,me=!1,Ct=new ht,er=()=>{const o=c.Promise.resolve(void 0);ue=()=>{o.then(rn)}};var rn=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ft;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Na=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function tr(o,u){if(We.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(K){e:{try{L(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:nr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&tr.aa.h.call(this)}}V(tr,We);var nr={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),vs=0;function Li(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++vs,this.da=this.fa=!1}function Ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Es(o){this.src=o,this.g={},this.h=0}Es.prototype.add=function(o,u,f,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var $=w(o,u,g,R);return-1<$?(u=o[$],f||(u.fa=!1)):(u=new Li(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(Ut(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),U={};function x(o,u,f,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)x(o,u[C],f,g,R);return null}return f=ee(f),o&&o[sn]?o.K(u,f,h(g)?!!g.capture:!1,R):F(o,u,f,!1,g,R)}function F(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");var $=h(R)?!!R.capture:!!R,we=W(o);if(we||(o[P]=we=new Es(o)),f=we.add(u,f,g,$,C),f.proxy)return f;if(g=z(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Na||(R=$),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function o(f){return u.call(o.src,o.listener,f)}const u=Z;return o}function q(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)q(o,u[C],f,g,R);else g=h(g)?!!g.capture:!!g,f=ee(f),o&&o[sn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=w(C,f,g,R),-1<f&&(Ut(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=W(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,g,R)),(f=-1<o?u[o]:null)&&j(f))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[sn])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=W(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):Ut(o)}}}function M(o){return o in U?U[o]:U[o]="on"+o}function Z(o,u){if(o.da)o=!0;else{u=new tr(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&j(o),o=f.call(g,u)}return o}function W(o){return o=o[P],o instanceof Es?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(o){return typeof o=="function"?o:(o[X]||(o[X]=function(u){return o.handleEvent(u)}),o[X])}function te(){ze.call(this),this.i=new Es(this),this.M=this,this.F=null}V(te,ze),te.prototype[sn]=!0,te.prototype.removeEventListener=function(o,u,f,g){q(this,o,u,f,g)};function ce(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new We(u,o);else if(u instanceof We)u.target=u.target||o;else{var R=u;u=new We(g,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var $=u.g=f[C];R=ve($,g,!0,u)&&R}if($=u.g=o,R=ve($,g,!0,u)&&R,R=ve($,g,!1,u)&&R,f)for(C=0;C<f.length;C++)$=u.g=f[C],R=ve($,g,!1,u)&&R}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Ut(f[g]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},te.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function ve(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var $=u[C];if($&&!$.da&&$.capture==f){var we=$.listener,Je=$.ha||$.src;$.fa&&v(o.i,$),R=we.call(Je,g)!==!1&&R}}return R&&!g.defaultPrevented}function Ne(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ue(o){o.g=Ne(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class At extends ze{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){ze.call(this),this.h=o,this.g={}}V(tt,ze);var Rn=[];function Ts(o){ae(o.g,function(u,f){this.g.hasOwnProperty(f)&&j(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),Ts(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,bt=c.JSON.parse,Fi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Nr(){}Nr.prototype.h=null;function Eu(o){return o.h||(o.h=o.i())}function Tu(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oa(){We.call(this,"d")}V(Oa,We);function xa(){We.call(this,"c")}V(xa,We);var rr={},Iu=null;function Ui(){return Iu=Iu||new te}rr.La="serverreachability";function wu(o){We.call(this,rr.La,o)}V(wu,We);function ws(o){const u=Ui();ce(u,new wu(u))}rr.STAT_EVENT="statevent";function Au(o,u){We.call(this,rr.STAT_EVENT,o),this.stat=u}V(Au,We);function ft(o){const u=Ui();ce(u,new Au(u,o))}rr.Ma="timingevent";function bu(o,u){We.call(this,rr.Ma,o),this.size=u}V(bu,We);function As(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function g_(o,u,f,g,R,C){o.info(function(){if(o.g)if(C)for(var $="",we=C.split("&"),Je=0;Je<we.length;Je++){var _e=we[Je].split("=");if(1<_e.length){var nt=_e[0];_e=_e[1];var rt=nt.split("_");$=2<=rt.length&&rt[1]=="type"?$+(nt+"="+_e+"&"):$+(nt+"=redacted&")}}else $=null;else $=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+$})}function m_(o,u,f,g,R,C,$){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+$})}function Or(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+y_(o,f)+(g?" "+g:"")})}function __(o,u){o.info(function(){return"TIMEOUT: "+u})}bs.prototype.info=function(){};function y_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return Qe(f)}catch{return u}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Su={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ma;function ji(){}V(ji,Nr),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Ma=new ji;function Cn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var Cu={},La={};function Fa(o,u,f){o.L=1,o.v=zi(on(u)),o.m=f,o.P=!0,Pu(o,null)}function Pu(o,u){o.F=Date.now(),$i(o),o.A=on(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),qu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Ru,o.g=ah(o.j,f?u:null,!o.m),0<o.O&&(o.M=new At(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Rn[0]=R.toString()),R=Rn);for(var C=0;C<R.length;C++){var $=x(f,R[C],g||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ws(),g_(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&an(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=an(this.g);var u=this.g.Ba();const Lr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Ju(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Lr?ws(3):ws(2)),Ua(this);var f=this.g.Z();this.X=f;t:if(Vu(this)){var g=Ju(this.g);o="";var R=g.length,C=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Ss(this);var $="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,m_(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Je=this.g;if((we=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(we)){var _e=we;break t}}_e=null}if(f=_e)Or(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ba(this,f);else{this.o=!1,this.s=3,ft(12),sr(this),Ss(this);break e}}if(this.P){f=!0;let Pt;for(;!this.J&&this.C<$.length;)if(Pt=v_(this,$),Pt==La){rt==4&&(this.s=4,ft(14),f=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Cu){this.s=4,ft(15),Or(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Or(this.i,this.l,Pt,null),Ba(this,Pt);if(Vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||$.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Or(this.i,this.l,$,"[Invalid Chunked Response]"),sr(this),Ss(this);else if(0<$.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Wa(nt),nt.M=!0,ft(11))}}else Or(this.i,this.l,$,null),Ba(this,$);rt==4&&sr(this),this.o&&!this.J&&(rt==4?rh(this.j,this):(this.o=!1,$i(this)))}else M_(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),sr(this),Ss(this)}}}catch{}finally{}};function Vu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function v_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?La:(f=Number(u.substring(f,g)),isNaN(f)?Cu:(g+=1,g+f>u.length?La:(u=u.slice(g,g+f),o.C=g+f,u)))}Cn.prototype.cancel=function(){this.J=!0,sr(this)};function $i(o){o.S=Date.now()+o.I,ku(o,o.I)}function ku(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=As(_(o.ba,o),u)}function Ua(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(__(this.i,this.A),this.L!=2&&(ws(),ft(17)),sr(this),this.s=2,Ss(this)):ku(this,this.S-o)};function Ss(o){o.j.G==0||o.J||rh(o.j,o)}function sr(o){Ua(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ts(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ba(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ja(f.h,o))){if(!o.K&&ja(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Xi(f),Qi(f);else break e;za(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=As(_(f.Za,f),6e3));if(1>=Ou(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else or(f,11)}else if((o.K||f.g==o)&&Xi(f),!H(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const nt=_e[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=_e[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const Lr=_e[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(g=1.5*Lr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Pt=o.g;if(Pt){const Zi=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var C=g.h;C.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&($a(C,C.h),C.h=null))}if(g.D){const Ka=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(g.ya=Ka,Re(g.I,g.D,Ka))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=o;if(g.qa=oh(g,g.J?g.ia:null,g.W),$.K){xu(g.h,$);var we=$,Je=g.L;Je&&(we.I=Je),we.B&&(Ua(we),$i(we)),g.g=$}else th(g);0<f.i.length&&Ji(f)}else _e[0]!="stop"&&_e[0]!="close"||or(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?or(f,7):Ha(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}ws(4)}catch{}}var E_=class{constructor(o,u){this.g=o,this.map=u}};function Du(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ou(o){return o.h?1:o.g?o.g.size:0}function ja(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function $a(o,u){o.g?o.g.add(u):o.h=u}function xu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Du.prototype.cancel=function(){if(this.i=Mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Mu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function T_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function I_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Lu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=I_(o),g=T_(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],f&&f[C],o)}var Fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var C=o[f].substring(0,g);R=o[f].substring(g+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ir(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ir){this.h=o.h,qi(this,o.j),this.o=o.o,this.g=o.g,Hi(this,o.s),this.l=o.l;var u=o.i,f=new Ps;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Uu(this,f),this.m=o.m}else o&&(u=String(o).match(Fu))?(this.h=!1,qi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Hi(this,u[4]),this.l=Rs(u[5]||"",!0),Uu(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}ir.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Cs(u,Bu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Cs(u,Bu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Cs(f,f.charAt(0)=="/"?S_:b_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Cs(f,C_)),o.join("")};function on(o){return new ir(o)}function qi(o,u,f){o.j=f?Rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Hi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Uu(o,u,f){u instanceof Ps?(o.i=u,P_(o.i,o.h)):(f||(u=Cs(u,R_)),o.i=new Ps(u,o.h))}function Re(o,u,f){o.i.set(u,f)}function zi(o){return Re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,A_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function A_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Bu=/[#\/\?@]/g,b_=/[#\?:]/g,S_=/[#\?]/g,R_=/[#\?@]/g,C_=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&w_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ps.prototype,t.add=function(o,u){Pn(this),this.i=null,o=xr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function ju(o,u){Pn(o),u=xr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function $u(o,u){return Pn(o),u=xr(o,u),o.g.has(u)}t.forEach=function(o,u){Pn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},t.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)f.push(u[g])}return f},t.V=function(o){Pn(this);let u=[];if(typeof o=="string")$u(this,o)&&(u=u.concat(this.g.get(xr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return Pn(this),this.i=null,o=xr(this,o),$u(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function qu(o,u,f){ju(o,u),0<f.length&&(o.i=null,o.g.set(xr(o,u),k(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var R=C;$[g]!==""&&(R+="="+encodeURIComponent(String($[g]))),o.push(R)}}return this.i=o.join("&")};function xr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function P_(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(ju(this,g),qu(this,R,f))},o)),o.j=u}function V_(o,u){const f=new bs;if(c.Image){const g=new Image;g.onload=b(Vn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Vn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(Vn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Vn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function k_(o,u){const f=new bs,g=new AbortController,R=setTimeout(()=>{g.abort(),Vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Vn(f,"TestPingServer: ok",!0,u):Vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Vn(f,"TestPingServer: error",!1,u)})}function Vn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function D_(){this.g=new Fi}function N_(o,u,f){const g=f||"";try{Lu(o,function(R,C){let $=R;h(R)&&($=Qe(R)),u.push(g+C+"="+encodeURIComponent($))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function Wi(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Wi,Nr),Wi.prototype.g=function(){return new Ki(this.l,this.j)},Wi.prototype.i=(function(o){return function(){return o}})({});function Ki(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ki,te),t=Ki.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ks(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vs(this):ks(this),this.readyState==3&&Hu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Vs(this))},t.Qa=function(o){this.g&&(this.response=o,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ks(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ks(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function zu(o){let u="";return ae(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function qa(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=zu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Re(o,u,f))}function xe(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(xe,te);var O_=/^https?$/i,x_=["POST","PUT"];t=xe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ma.g(),this.v=this.o?Eu(this.o):Eu(Ma),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Wu(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(x_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,$]of f)this.g.setRequestHeader(C,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Wu(this,C)}};function Wu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ku(o),Gi(o)}function Ku(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Gi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gu(this):this.bb())},t.bb=function(){Gu(this)};function Gu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||an(o)!=4||o.Z()!=2)){if(o.u&&an(o)==4)Ne(o.Ea,0,o);else if(ce(o,"readystatechange"),an(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=$===0){var R=String(o.D).match(Fu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!O_.test(R?R.toLowerCase():"")}f=g}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var C=2<an(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Ku(o)}}finally{Gi(o)}}}}function Gi(o,u){if(o.g){Qu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=g}catch{}}}function Qu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function an(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),bt(u)}};function Ju(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function M_(o){const u={};o=(o.g&&2<=an(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(H(o[g]))continue;var f=A(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Xu(o){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,o),this.cb=Ds("retryDelaySeedMs",1e4,o),this.Wa=Ds("forwardChannelMaxRetries",2,o),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Du(o&&o.concurrentRequestLimit),this.Da=new D_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=oh(this,null,this.W),Ji(this)};function Ha(o){if(Yu(o),o.G==3){var u=o.U++,f=on(o.I);if(Re(f,"SID",o.K),Re(f,"RID",u),Re(f,"TYPE","terminate"),Ns(o,f),u=new Cn(o,o.j,u),u.L=2,u.v=zi(on(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=ah(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$i(u)}ih(o)}function Qi(o){o.g&&(Wa(o),o.g.cancel(),o.g=null)}function Yu(o){Qi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Xi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ji(o){if(!Nu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ue||er(),me||(ue(),me=!0),Ct.add(u,o),o.B=0}}function L_(o,u){return Ou(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=As(_(o.Ga,o,u),sh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Cn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=eh(this,R,u),f=on(this.I),Re(f,"RID",o),Re(f,"CVER",22),this.D&&Re(f,"X-HTTP-Session-Id",this.D),Ns(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(zu(C)))+"&"+u:this.m&&qa(f,this.m,C)),$a(this.h,R),this.Ua&&Re(f,"TYPE","init"),this.P?(Re(f,"$req",u),Re(f,"SID","null"),R.T=!0,Fa(R,f,null)):Fa(R,f,u),this.G=2}}else this.G==3&&(o?Zu(this,o):this.i.length==0||Nu(this.h)||Zu(this))};function Zu(o,u){var f;u?f=u.l:f=o.U++;const g=on(o.I);Re(g,"SID",o.K),Re(g,"RID",f),Re(g,"AID",o.T),Ns(o,g),o.m&&o.o&&qa(g,o.m,o.o),f=new Cn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=eh(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),$a(o.h,f),Fa(f,g,u)}function Ns(o,u){o.H&&ae(o.H,function(f,g){Re(u,g,f)}),o.l&&Lu({},function(f,g){Re(u,g,f)})}function eh(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const $=["count="+f];C==-1?0<f?(C=R[0].g,$.push("ofs="+C)):C=0:$.push("ofs="+C);let we=!0;for(let Je=0;Je<f;Je++){let _e=R[Je].g;const nt=R[Je].map;if(_e-=C,0>_e)C=Math.max(0,R[Je].g-100),we=!1;else try{N_(nt,$,"req"+_e+"_")}catch{g&&g(nt)}}if(we){g=$.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function th(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ue||er(),me||(ue(),me=!0),Ct.add(u,o),o.v=0}}function za(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=As(_(o.Fa,o),sh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,nh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=As(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Qi(this),nh(this))};function Wa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function nh(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=on(o.qa);Re(u,"RID","rpc"),Re(u,"SID",o.K),Re(u,"AID",o.T),Re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Re(u,"TO",o.ja),Re(u,"TYPE","xmlhttp"),Ns(o,u),o.m&&o.o&&qa(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=zi(on(u)),f.m=null,f.P=!0,Pu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Qi(this),za(this),ft(19))};function Xi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function rh(o,u){var f=null;if(o.g==u){Xi(o),Wa(o),o.g=null;var g=2}else if(ja(o.h,u))f=u.D,xu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Ui(),ce(g,new bu(g,f)),Ji(o)}else th(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&L_(o,u)||g==2&&za(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function sh(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new ir(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qi(g,"https"),zi(g),R?V_(g.toString(),f):k_(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),ih(o),Yu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function ih(o){if(o.G=0,o.ka=[],o.l){const u=Mu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function oh(o,u,f){var g=f instanceof ir?on(f):new ir(f);if(g.g!="")u&&(g.g=u+"."+g.g),Hi(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new ir(null);g&&qi(C,g),u&&(C.g=u),R&&Hi(C,R),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&Re(g,f,u),Re(g,"VER",o.la),Ns(o,g),g}function ah(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xe(new Wi({eb:f})):new xe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yi(){}Yi.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){te.call(this),this.g=new Xu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!H(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!H(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Mr(this)}V(Et,te),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Ha(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new E_(u.Ya++,o)),u.G==3&&Ji(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,Ha(this.g),delete this.g,Et.aa.N.call(this)};function lh(o){Oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(lh,Oa);function uh(){xa.call(this),this.status=1}V(uh,xa);function Mr(o){this.g=o}V(Mr,ch),Mr.prototype.ua=function(){ce(this.g,"a")},Mr.prototype.ta=function(o){ce(this.g,new lh(o))},Mr.prototype.sa=function(o){ce(this.g,new uh)},Mr.prototype.ra=function(){ce(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Fg=function(){return new Yi},Lg=function(){return Ui()},Mg=rr,$c={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,To=Bi,Su.COMPLETE="complete",xg=Su,Tu.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",te.prototype.listen=te.prototype.K,Bs=Tu,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Og=xe}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const wf="@firebase/firestore",Af="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Sl("@firebase/firestore");function $r(){return Ar.logLevel}function G(t,...e){if(Ar.logLevel<=fe.DEBUG){const n=e.map(Bl);Ar.debug(`Firestore (${ps}): ${t}`,...n)}}function wn(t,...e){if(Ar.logLevel<=fe.ERROR){const n=e.map(Bl);Ar.error(`Firestore (${ps}): ${t}`,...n)}}function Kn(t,...e){if(Ar.logLevel<=fe.WARN){const n=e.map(Bl);Ar.warn(`Firestore (${ps}): ${t}`,...n)}}function Bl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ug(t,r,n)}function Ug(t,e,n){let r=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw wn(r),new Error(r)}function Te(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ug(e,s,r)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ot.UNAUTHENTICATED)))}shutdown(){}}class pA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class gA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new Bg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class mA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _A{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new bf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Te(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new bf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function qc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return he(r,s);{const i=jg(),a=EA(i.encode(Sf(t,n)),i.encode(Sf(e,n)));return a!==0?a:he(r,s)}}n+=r>65535?2:1}return he(t.length,e.length)}function Sf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function EA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return he(t[n],e[n]);return he(t.length,e.length)}function is(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="__name__";class qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=qt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return he(e.length,n.length)}static compareSegments(e,n){const r=qt.isNumericId(e),s=qt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(e).compare(qt.extractNumericId(n)):qc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qn.fromString(e.substring(4,e.length-2))}}class Se extends qt{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Se(n)}static emptyPath(){return new Se([])}}const TA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends qt{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return TA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rf}static keyField(){return new Ye([Rf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Se.fromString(e))}static fromName(e){return new Y(Se.fromString(e).popFirst(5))}static empty(){return new Y(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e,n){if(!n)throw new Q(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IA(t,e,n,r){if(e===!0&&r===!0)throw new Q(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cf(t){if(!Y.isDocumentKey(t))throw new Q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pf(t){if(Y.isDocumentKey(t))throw new Q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=va(t);throw new Q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function ki(t,e){if(!qg(t))throw new Q(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=-62135596800,kf=1e6;class Pe{static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*kf);return new Pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vf)throw new Q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kf}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ki(e,Pe._jsonSchema))return new Pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pe._jsonSchemaVersion="firestore/timestamp/1.0",Pe._jsonSchema={type:$e("string",Pe._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Pe(0,0))}static max(){return new ie(new Pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=-1;function wA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new Gn(s,Y.empty(),e)}function AA(t){return new Gn(t.readTime,t.key,di)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(ie.min(),Y.empty(),di)}static max(){return new Gn(ie.max(),Y.empty(),di)}}function bA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==SA)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):N.reject(n)}static resolve(e){return new N(((n,r)=>{n(e)}))}static reject(e){return new N(((n,r)=>{r(e)}))}static waitFor(e){return new N(((n,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(l=>r(l)))})),a=!0,i===s&&n()}))}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next((s=>s?N.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new N(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new N(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function CA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ms(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ea.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=-1;function Ta(t){return t==null}function Ho(t){return t===0&&1/t==-1/0}function PA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="";function VA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Df(e)),e=kA(t.get(n),e);return Df(e)}function kA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Hg:n+="";break;default:n+=i}}return n}function Df(t){return t+Hg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Of(this.data.getIterator())}getIteratorFrom(e){return new Of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ke(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wg("Invalid base64 string: "+i):i}})(e);return new et(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Te(!!t,39018),typeof t=="string"){let e=0;const n=DA.exec(t);if(Te(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jn(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="server_timestamp",Gg="__type__",Qg="__previous_value__",Jg="__local_write_time__";function ql(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gg])===null||n===void 0?void 0:n.stringValue)===Kg}function Ia(t){const e=t.mapValue.fields[Qg];return ql(e)?Ia(e):e}function pi(t){const e=Qn(t.mapValue.fields[Jg].timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const zo="(default)";class gi{constructor(e,n){this.projectId=e,this.database=n||zo}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database===zo}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="__type__",OA="__max__",oo={mapValue:{}},Yg="__vector__",Wo="value";function Xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ql(t)?4:MA(t)?9007199254740991:xA(t)?10:11:ne(28295,{value:t})}function nn(t,e){if(t===e)return!0;const n=Xn(t);if(n!==Xn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Qn(s.timestampValue),c=Qn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Jn(s.bytesValue).isEqual(Jn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?Ho(a)===Ho(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Nf(a)!==Nf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!nn(a[l],c[l])))return!1;return!0})(t,e);default:return ne(52216,{left:t})}}function mi(t,e){return(t.values||[]).find((n=>nn(n,e)))!==void 0}function os(t,e){if(t===e)return 0;const n=Xn(t),r=Xn(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return xf(t.timestampValue,e.timestampValue);case 4:return xf(pi(t),pi(e));case 5:return qc(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=Jn(i),l=Jn(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=he(c[h],l[h]);if(d!==0)return d}return he(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=he(Le(i.latitude),Le(a.latitude));return c!==0?c:he(Le(i.longitude),Le(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Mf(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},_=a.fields||{},b=(c=p[Wo])===null||c===void 0?void 0:c.arrayValue,V=(l=_[Wo])===null||l===void 0?void 0:l.arrayValue,k=he(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Mf(b,V)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===oo.mapValue&&a===oo.mapValue)return 0;if(i===oo.mapValue)return 1;if(a===oo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=qc(l[p],d[p]);if(_!==0)return _;const b=os(c[l[p]],h[d[p]]);if(b!==0)return b}return he(l.length,d.length)})(t.mapValue,e.mapValue);default:throw ne(23264,{le:n})}}function xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Qn(t),r=Qn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Mf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=os(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function as(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Jn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return Y.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Hc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Hc(n.fields[a])}`;return s+"}"})(t.mapValue):ne(61005,{value:t})}function Io(t){switch(Xn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ia(t);return e?16+Io(e):16;case 5:return 2*t.stringValue.length;case 6:return Jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Io(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Cr(r.fields,((i,a)=>{s+=i.length+Io(a)})),s})(t.mapValue);default:throw ne(13486,{value:t})}}function Lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zc(t){return!!t&&"integerValue"in t}function Hl(t){return!!t&&"arrayValue"in t}function Ff(t){return!!t&&"nullValue"in t}function Uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wo(t){return!!t&&"mapValue"in t}function xA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Xg])===null||n===void 0?void 0:n.stringValue)===Yg}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ei(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===OA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=ei(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(ei(this.value))}}function Zg(t){const e=[];return Cr(t.fields,((n,r)=>{const s=new Ye([n]);if(wo(r)){const i=Zg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,ie.min(),ie.min(),ie.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ie.min(),ie.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ie.min(),ie.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function Bf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=os(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n="asc"){this.field=e,this.dir=n}}function LA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{}class je extends em{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UA(e,n,r):n==="array-contains"?new $A(e,r):n==="in"?new qA(e,r):n==="not-in"?new HA(e,r):n==="array-contains-any"?new zA(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BA(e,r):new jA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(os(n,this.value)):n!==null&&Xn(this.value)===Xn(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends em{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Lt(e,n)}matches(e){return tm(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function tm(t){return t.op==="and"}function nm(t){return FA(t)&&tm(t)}function FA(t){for(const e of t.filters)if(e instanceof Lt)return!1;return!0}function Wc(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+as(t.value);if(nm(t))return t.filters.map((e=>Wc(e))).join(",");{const e=t.filters.map((n=>Wc(n))).join(",");return`${t.op}(${e})`}}function rm(t,e){return t instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)})(t,e):t instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&rm(a,s.filters[c])),!0):!1})(t,e):void ne(19439)}function sm(t){return t instanceof je?(function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`})(t):t instanceof Lt?(function(n){return n.op.toString()+" {"+n.getFilters().map(sm).join(" ,")+"}"})(t):"Filter"}class UA extends je{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class BA extends je{constructor(e,n){super(e,"in",n),this.keys=im("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class jA extends je{constructor(e,n){super(e,"not-in",n),this.keys=im("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function im(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>Y.fromName(r.referenceValue)))}class $A extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hl(n)&&mi(n.arrayValue,this.value)}}class qA extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mi(this.value.arrayValue,n)}}class HA extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!mi(this.value.arrayValue,n)}}class zA extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hl(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>mi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function $f(t,e=null,n=[],r=[],s=null,i=null,a=null){return new WA(t,e,n,r,s,i,a)}function zl(t){const e=oe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Wc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>as(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>as(r))).join(",")),e.Pe=n}return e.Pe}function Wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jf(t.startAt,e.startAt)&&jf(t.endAt,e.endAt)}function Kc(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function KA(t,e,n,r,s,i,a,c){return new Di(t,e,n,r,s,i,a,c)}function Kl(t){return new Di(t)}function qf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function om(t){return t.collectionGroup!==null}function ti(t){const e=oe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ke(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Go(i,r))})),n.has(Ye.keyField().canonicalString())||e.Te.push(new Go(Ye.keyField(),r))}return e.Te}function Jt(t){const e=oe(t);return e.Ie||(e.Ie=GA(e,ti(t))),e.Ie}function GA(t,e){if(t.limitType==="F")return $f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Go(s.field,i)}));const n=t.endAt?new Ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ko(t.startAt.position,t.startAt.inclusive):null;return $f(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gc(t,e){const n=t.filters.concat([e]);return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qc(t,e,n){return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wa(t,e){return Wl(Jt(t),Jt(e))&&t.limitType===e.limitType}function am(t){return`${zl(Jt(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>sm(s))).join(", ")}]`),Ta(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>as(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>as(s))).join(",")),`Target(${r})`})(Jt(t))}; limitType=${t.limitType})`}function Aa(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Bf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,ti(r),s)||r.endAt&&!(function(a,c,l){const h=Bf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,ti(r),s))})(t,e)}function QA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cm(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=JA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JA(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?os(l,h):ne(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return zg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Oe(Y.comparator);function An(){return XA}const lm=new Oe(Y.comparator);function js(...t){let e=lm;for(const n of t)e=e.insert(n.key,n);return e}function um(t){let e=lm;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function pr(){return ni()}function hm(){return ni()}function ni(){return new Pr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const YA=new Oe(Y.comparator),ZA=new Ke(Y.comparator);function de(...t){let e=ZA;for(const n of t)e=e.add(n);return e}const eb=new Ke(he);function tb(){return eb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function fm(t){return{integerValue:""+t}}function nb(t,e){return PA(e)?fm(e):Gl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this._=void 0}}function rb(t,e,n){return t instanceof Qo?(function(s,i){const a={fields:{[Gg]:{stringValue:Kg},[Jg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ql(i)&&(i=Ia(i)),i&&(a.fields[Qg]=i),{mapValue:a}})(n,e):t instanceof _i?pm(t,e):t instanceof yi?gm(t,e):(function(s,i){const a=dm(s,i),c=Hf(a)+Hf(s.Ee);return zc(a)&&zc(s.Ee)?fm(c):Gl(s.serializer,c)})(t,e)}function sb(t,e,n){return t instanceof _i?pm(t,e):t instanceof yi?gm(t,e):n}function dm(t,e){return t instanceof Jo?(function(r){return zc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Qo extends ba{}class _i extends ba{constructor(e){super(),this.elements=e}}function pm(t,e){const n=mm(e);for(const r of t.elements)n.some((s=>nn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class yi extends ba{constructor(e){super(),this.elements=e}}function gm(t,e){let n=mm(e);for(const r of t.elements)n=n.filter((s=>!nn(s,r)));return{arrayValue:{values:n}}}class Jo extends ba{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Hf(t){return Le(t.integerValue||t.doubleValue)}function mm(t){return Hl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ib(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?is(r.elements,s.elements,nn):r instanceof Jo&&s instanceof Jo?nn(r.Ee,s.Ee):r instanceof Qo&&s instanceof Qo})(t.transform,e.transform)}class ob{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sa{}function _m(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vm(t.key,mn.none()):new Ni(t.key,t.data,mn.none());{const n=t.data,r=St.empty();let s=new Ke(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vr(t.key,r,new Dt(s.toArray()),mn.none())}}function ab(t,e,n){t instanceof Ni?(function(s,i,a){const c=s.value.clone(),l=Wf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Vr?(function(s,i,a){if(!Ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Wf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(ym(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function ri(t,e,n,r){return t instanceof Ni?(function(i,a,c,l){if(!Ao(i.precondition,a))return c;const h=i.value.clone(),d=Kf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Vr?(function(i,a,c,l){if(!Ao(i.precondition,a))return c;const h=Kf(i.fieldTransforms,l,a),d=a.data;return d.setAll(ym(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,a,c){return Ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function cb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=dm(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function zf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&is(r,s,((i,a)=>ib(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends Sa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends Sa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ym(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Wf(t,e,n){const r=new Map;Te(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,sb(a,c,n[s]))}return r}function Kf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,rb(i,a,e))}return r}class vm extends Sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lb extends Sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ab(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hm();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=_m(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ie.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),de())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,((n,r)=>zf(n,r)))&&is(this.baseMutations,e.baseMutations,((n,r)=>zf(n,r)))}}class Ql{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return YA})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ql(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,pe;function db(t){switch(t){case D.OK:return ne(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function Em(t){if(t===void 0)return wn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Be.OK:return D.OK;case Be.CANCELLED:return D.CANCELLED;case Be.UNKNOWN:return D.UNKNOWN;case Be.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Be.INTERNAL:return D.INTERNAL;case Be.UNAVAILABLE:return D.UNAVAILABLE;case Be.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Be.NOT_FOUND:return D.NOT_FOUND;case Be.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Be.ABORTED:return D.ABORTED;case Be.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Be.DATA_LOSS:return D.DATA_LOSS;default:return ne(39323,{code:t})}}(pe=Be||(Be={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new qn([4294967295,4294967295],0);function Gf(t){const e=jg().encode(t),n=new Ng;return n.update(e),new Uint8Array(n.digest())}function Qf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qn([n,r],0),new qn([s,i],0)]}class Jl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $s(`Invalid padding: ${n}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $s(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=qn.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(qn.fromNumber(r)));return s.compare(pb)===1&&(s=new qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Gf(e),[r,s]=Qf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Jl(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const n=Gf(e),[r,s]=Qf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ra(ie.min(),s,new Oe(he),An(),de())}}class Oi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oi(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Tm{constructor(e,n){this.targetId=e,this.De=n}}class Im{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jf{constructor(){this.ve=0,this.Ce=Xf(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=de(),n=de(),r=de();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}})),new Oi(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Xf()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class gb{constructor(e){this.We=e,this.Ge=new Map,this.ze=An(),this.je=ao(),this.Je=ao(),this.He=new Oe(he)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ne(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Kc(i))if(r===0){const a=new Y(i.path);this.Xe(n,a,ct.newNoDocument(a,ie.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Jn(r).toUint8Array()}catch(l){if(l instanceof Wg)return Kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Jl(a,s,i)}catch(l){return Kn(l instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Kc(c.target)){const l=new Y(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(n.set(a,i.Le()),i.ke())}}));let r=de();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ra(e,n,this.He,this.ze,r);return this.ze=An(),this.je=ao(),this.Je=ao(),this.He=new Oe(he),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Jf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ke(he),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ke(he),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Jf),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ao(){return new Oe(Y.comparator)}function Xf(){return new Oe(Y.comparator)}const mb={asc:"ASCENDING",desc:"DESCENDING"},_b={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yb={and:"AND",or:"OR"};class vb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jc(t,e){return t.useProto3Json||Ta(e)?e:{value:e}}function Xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Eb(t,e){return Xo(t,e.toTimestamp())}function Xt(t){return Te(!!t,49232),ie.fromTimestamp((function(n){const r=Qn(n);return new Pe(r.seconds,r.nanos)})(t))}function Xl(t,e){return Xc(t,e).canonicalString()}function Xc(t,e){const n=(function(s){return new Se(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Am(t){const e=Se.fromString(t);return Te(Pm(e),10190,{key:e.toString()}),e}function Yc(t,e){return Xl(t.databaseId,e.path)}function fc(t,e){const n=Am(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Sm(n))}function bm(t,e){return Xl(t.databaseId,e)}function Tb(t){const e=Am(t);return e.length===4?Se.emptyPath():Sm(e)}function Zc(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sm(t){return Te(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Yf(t,e,n){return{name:Yc(t,e),fields:n.value.mapValue.fields}}function Ib(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Te(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?D.UNKNOWN:Em(h.code);return new Q(d,h.message||"")})(a);n=new Im(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fc(t,r.document.name),i=Xt(r.document.updateTime),a=r.document.createTime?Xt(r.document.createTime):ie.min(),c=new St({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new bo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fc(t,r.document),i=r.readTime?Xt(r.readTime):ie.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new bo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return ne(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new fb(s,i),c=r.targetId;n=new Tm(c,a)}}return n}function wb(t,e){let n;if(e instanceof Ni)n={update:Yf(t,e.key,e.value)};else if(e instanceof vm)n={delete:Yc(t,e.key)};else if(e instanceof Vr)n={update:Yf(t,e.key,e.data),updateMask:Db(e.fieldMask)};else{if(!(e instanceof lb))return ne(16599,{Rt:e.type});n={verify:Yc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Qo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _i)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Jo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ne(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Eb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)})(t,e.precondition)),n}function Ab(t,e){return t&&t.length>0?(Te(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?Xt(s.updateTime):Xt(i);return a.isEqual(ie.min())&&(a=Xt(i)),new ob(a,s.transformResults||[])})(n,e)))):[]}function bb(t,e){return{documents:[bm(t,e.path)]}}function Sb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bm(t,s);const i=(function(h){if(h.length!==0)return Cm(Lt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Hr(_.field),direction:Pb(_.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Jc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:s}}function Rb(t){let e=Tb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const _=Rm(p);return _ instanceof Lt&&nm(_)?_.getFilters():[_]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((_=>(function(V){return new Go(zr(V.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,Ta(_)?null:_})(n.limit));let l=null;n.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new Ko(b,_)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new Ko(b,_)})(n.endAt)),KA(e,s,a,i,c,"F",l,h)}function Cb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rm(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zr(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zr(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zr(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zr(n.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}})(t):t.fieldFilter!==void 0?(function(n){return je.create(zr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Lt.create(n.compositeFilter.filters.map((r=>Rm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}})(n.compositeFilter.op))})(t):ne(30097,{filter:t})}function Pb(t){return mb[t]}function Vb(t){return _b[t]}function kb(t){return yb[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function zr(t){return Ye.fromServerFormat(t.fieldPath)}function Cm(t){return t instanceof je?(function(n){if(n.op==="=="){if(Uf(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(Ff(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uf(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(Ff(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:Vb(n.op),value:n.value}}})(t):t instanceof Lt?(function(n){const r=n.getFilters().map((s=>Cm(s)));return r.length===1?r[0]:{compositeFilter:{op:kb(n.op),filters:r}}})(t):ne(54877,{filter:t})}function Db(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Pm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,s,i=ie.min(),a=ie.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.gt=e}}function Ob(t){const e=Rb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.Dn=new Mb}addToCollectionParentIndex(e,n){return this.Dn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Gn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class Mb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vm=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Vm,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new cs(0)}static ur(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="LruGarbageCollector",Lb=1048576;function td([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class Fb{constructor(e){this.Tr=e,this.buffer=new Ke(td),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();td(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ub{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){G(ed,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ms(n)?G(ed,"Ignoring IndexedDB error during garbage collection: ",n):await gs(n)}await this.Rr(3e5)}))}}class Bb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Ea.ue);const r=new Fb(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Zf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zf):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),$r()<=fe.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function jb(t,e){return new Bb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.changes=new Pr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ri(r.mutation,s,Dt.empty(),Pe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,de()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=de()){const s=pr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=js();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,de())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,r,s){let i=An();const a=ni(),c=(function(){return ni()})();return n.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Vr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ri(d.mutation,h,d.mutation.getFieldMask(),Pe.now())):a.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>{var p;return c.set(h,new qb(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new Oe(((a,c)=>a-c)),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Dt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=hm();d.forEach((_=>{if(!i.has(_)){const b=_m(n.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):om(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(pr());let c=di,l=i;return a.next((h=>N.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,de()))).next((d=>({batchId:c,changes:um(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next((r=>{let s=js();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=js();return this.indexManager.getCollectionParents(e,i).next((c=>N.forEach(c,(l=>{const h=(function(p,_){return new Di(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=js();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ri(d.mutation,h,Dt.empty(),Pe.now()),Aa(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return N.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}})(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:Ob(s.bundledQuery),readTime:Xt(s.readTime)}})(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.overlays=new Oe(Y.comparator),this.kr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return N.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=pr(),i=n.length+1,a=new Y(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=pr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return N.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hb(n,r));let i=this.kr.get(n);i===void 0&&(i=de(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.qr=new Ke(Ge.Qr),this.$r=new Ke(Ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ge(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new Y(new Se([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Y(new Se([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=de();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ge(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Y.comparator(e.key,n.key)||he(e.Hr,n.Hr)}static Ur(e,n){return he(e.Hr,n.Hr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Ge.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ub(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,n){return N.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?$l:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(he);return n.forEach((s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new Y(i),0);let c=new Ke(he);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),N.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Te(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(n.mutations,(s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Yr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.ni=e,this.docs=(function(){return new Oe(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=An();const a=n.path,c=new Y(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||bA(AA(d),r)<=0||(s.has(d.key)||Aa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne(9500)}ri(e,n){return N.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new Jb(this)}getSize(e){return N.resolve(this.size)}}class Jb extends $b{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),N.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.persistence=e,this.ii=new Pr((n=>zl(n)),Wl),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Yl,this.targetCount=0,this._i=cs.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),N.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.hr(n),N.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.ai={},this.overlays={},this.ui=new Ea(0),this.ci=!1,this.ci=!0,this.li=new Kb,this.referenceDelegate=e(this),this.hi=new Xb(this),this.indexManager=new xb,this.remoteDocumentCache=(function(s){return new Qb(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Nb(n),this.Ti=new zb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Gb(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new Yb(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return N.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class Yb extends RA{constructor(e){super(),this.currentSequenceNumber=e}}class Zl{constructor(e){this.persistence=e,this.Ai=new Yl,this.Ri=null}static Vi(e){return new Zl(e)}get mi(){if(this.Ri)return this.Ri;throw ne(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),N.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,(r=>{const s=Y.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ie.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return N.or([()=>N.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Yo{constructor(e,n){this.persistence=e,this.gi=new Pr((r=>VA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=jb(this,n)}static Vi(e,n){return new Yo(e,n)}Ii(){}di(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return N.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?N.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,n).next((c=>{c||(r++,i.removeEntry(a,ie.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Io(e.data.value)),n}Sr(e,n,r){return N.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return BE()?8:CA(ut())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Zb;return this.ws(e,n,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,a,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?($r()<=fe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):($r()<=fe.DEBUG&&G("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?($r()<=fe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):N.resolve())}ps(e,n){if(qf(n))return N.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Qc(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=de(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(n,c);return this.Ds(n,h,a,l.readTime)?this.ps(e,Qc(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ys(e,n,r,s){return qf(n)||s.isEqual(ie.min())?N.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(n,i);return this.Ds(n,a,r,s)?N.resolve(null):($r()<=fe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.vs(e,a,n,wA(s,di)).next((c=>c)))}))}bs(e,n){let r=new Ke(cm(e));return n.forEach(((s,i)=>{Aa(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return $r()<=fe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",qr(n)),this.gs.getDocumentsMatchingQuery(e,n,Gn.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="LocalStore",t0=3e8;class n0{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Oe(he),this.Ms=new Pr((i=>zl(i)),Wl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function r0(t,e,n,r){return new n0(t,e,n,r)}async function Dm(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=de();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function s0(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,_=p.keys();let b=N.resolve();return _.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((k=>{const O=h.docVersions.get(V);Te(O!==null,48541),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Nm(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function i0(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(n.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(k,O,J){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=t0?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(_,b,d)&&c.push(n.hi.updateTargetData(i,b))}));let l=An(),h=de();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(o0(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(ie.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return N.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function o0(t,e,n){let r=de(),s=de();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=An();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):G(tu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function a0(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=$l),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function c0(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):n.hi.allocateTargetId(r).next((a=>(s=new Un(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function el(t,e,n){const r=oe(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ms(a))throw a;G(tu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function nd(t,e,n){const r=oe(t);let s=ie.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=oe(l),_=p.Ms.get(d);return _!==void 0?N.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Jt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,n?s:ie.min(),n?i:de()))).next((c=>(l0(r,QA(e),c),{documents:c,qs:i})))))}function l0(t,e,n){let r=t.xs.get(e)||ie.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class rd{constructor(){this.activeTargetIds=tb()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u0{constructor(){this.Fo=new rd,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new rd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="ConnectivityMonitor";class id{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){G(sd,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){G(sd,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co=null;function tl(){return co===null?co=(function(){return 268435456+Math.round(2147483648*Math.random())})():co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="RestConnection",f0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class d0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===zo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const a=tl(),c=this.Go(e,n.toUriEncodedString());G(dc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=hs(h);return this.jo(e,c,l,r,d).then((p=>(G(dc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Kn(dc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,n,r,s,i,a){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ps})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=f0[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class g0 extends d0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const a=tl();return new Promise(((c,l)=>{const h=new Og;h.setWithCredentials(!0),h.listenOnce(xg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case To.NO_ERROR:const p=h.getResponseJson();G(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case To.TIMEOUT:G(st,`RPC '${e}' ${a} timed out`),l(new Q(D.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const _=h.getStatus();if(G(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const k=(function(J){const H=J.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(H)>=0?H:D.UNKNOWN})(V.status);l(new Q(k,V.message))}else l(new Q(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(D.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{G(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);G(st,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=tl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Fg(),c=Lg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");G(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let _=!1,b=!1;const V=new p0({Ho:O=>{b?G(st,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(_||(G(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),G(st,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Yo:()=>p.close()}),k=(O,J,H)=>{O.listen(J,(B=>{try{H(B)}catch(L){setTimeout((()=>{throw L}),0)}}))};return k(p,Bs.EventType.OPEN,(()=>{b||(G(st,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),k(p,Bs.EventType.CLOSE,(()=>{b||(b=!0,G(st,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),k(p,Bs.EventType.ERROR,(O=>{b||(b=!0,Kn(st,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),V.__(new Q(D.UNAVAILABLE,"The operation could not be completed")))})),k(p,Bs.EventType.MESSAGE,(O=>{var J;if(!b){const H=O.data[0];Te(!!H,16349);const B=H,L=(B==null?void 0:B.error)||((J=B[0])===null||J===void 0?void 0:J.error);if(L){G(st,`RPC '${e}' stream ${s} received error:`,L);const K=L.status;let ae=(function(y){const T=Be[y];if(T!==void 0)return Em(T)})(K),I=L.message;ae===void 0&&(ae=D.INTERNAL,I="Unknown error status: "+K+" with message "+L.message),b=!0,V.__(new Q(ae,I)),p.close()}else G(st,`RPC '${e}' stream ${s} received:`,H),V.a_(H)}})),k(c,Mg.STAT_EVENT,(O=>{O.stat===$c.PROXY?G(st,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===$c.NOPROXY&&G(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){return new vb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="PersistentStream";class xm{constructor(e,n,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Om(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new Q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return G(od,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(G(od,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class m0 extends xm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Ib(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Xt(a.readTime):ie.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Zc(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=Kc(l)?{documents:bb(i,l)}:{query:Sb(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wm(i,a.resumeToken);const h=Jc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=Xo(i,a.snapshotVersion.toTimestamp());const h=Jc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Cb(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Zc(this.serializer),n.removeTarget=e,this.k_(n)}}class _0 extends xm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Ab(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Zc(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>wb(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{}class v0 extends y0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new Q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Xc(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(D.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Xc(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class E0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wn(n),this._a=!1):G("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="RemoteStore";class T0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{kr(this)&&(G(br,"Restarting streams for network reachability change."),await(async function(l){const h=oe(l);h.Ia.add(4),await xi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Pa(h)})(this))}))})),this.Aa=new E0(r,s)}}async function Pa(t){if(kr(t))for(const e of t.da)await e(!0)}async function xi(t){for(const e of t.da)await e(!1)}function Mm(t,e){const n=oe(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),iu(n)?su(n):_s(n).x_()&&ru(n,e))}function nu(t,e){const n=oe(t),r=_s(n);n.Ta.delete(e),r.x_()&&Lm(n,e),n.Ta.size===0&&(r.x_()?r.B_():kr(n)&&n.Aa.set("Unknown"))}function ru(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).H_(e)}function Lm(t,e){t.Ra.$e(e),_s(t).Y_(e)}function su(t){t.Ra=new gb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.Aa.aa()}function iu(t){return kr(t)&&!_s(t).M_()&&t.Ta.size>0}function kr(t){return oe(t).Ia.size===0}function Fm(t){t.Ra=void 0}async function I0(t){t.Aa.set("Online")}async function w0(t){t.Ta.forEach(((e,n)=>{ru(t,e)}))}async function A0(t,e){Fm(t),iu(t)?(t.Aa.la(e),su(t)):t.Aa.set("Unknown")}async function b0(t,e,n){if(t.Aa.set("Online"),e instanceof Im&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){G(br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(t,r)}else if(e instanceof bo?t.Ra.Ye(e):e instanceof Tm?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ie.min()))try{const r=await Nm(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Lm(i,l);const p=new Un(d.target,l,h,d.sequenceNumber);ru(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){G(br,"Failed to raise snapshot:",r),await Zo(t,r)}}async function Zo(t,e,n){if(!ms(e))throw e;t.Ia.add(1),await xi(t),t.Aa.set("Offline"),n||(n=()=>Nm(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{G(br,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Pa(t)}))}function Um(t,e){return e().catch((n=>Zo(t,n,e)))}async function Va(t){const e=oe(t),n=Yn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:$l;for(;S0(e);)try{const s=await a0(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,R0(e,s)}catch(s){await Zo(e,s)}Bm(e)&&jm(e)}function S0(t){return kr(t)&&t.Pa.length<10}function R0(t,e){t.Pa.push(e);const n=Yn(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Bm(t){return kr(t)&&!Yn(t).M_()&&t.Pa.length>0}function jm(t){Yn(t).start()}async function C0(t){Yn(t).na()}async function P0(t){const e=Yn(t);for(const n of t.Pa)e.X_(n.mutations)}async function V0(t,e,n){const r=t.Pa.shift(),s=Ql.from(r,e,n);await Um(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Va(t)}async function k0(t,e){e&&Yn(t).Z_&&await(async function(r,s){if((function(a){return db(a)&&a!==D.ABORTED})(s.code)){const i=r.Pa.shift();Yn(r).N_(),await Um(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Va(r)}})(t,e),Bm(t)&&jm(t)}async function ad(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),G(br,"RemoteStore received new credentials");const r=kr(n);n.Ia.add(3),await xi(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Pa(n)}async function D0(t,e){const n=oe(t);e?(n.Ia.delete(2),await Pa(n)):e||(n.Ia.add(2),await xi(n),n.Aa.set("Unknown"))}function _s(t){return t.Va||(t.Va=(function(n,r,s){const i=oe(n);return i.ia(),new m0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:I0.bind(null,t),e_:w0.bind(null,t),n_:A0.bind(null,t),J_:b0.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),iu(t)?su(t):t.Aa.set("Unknown")):(await t.Va.stop(),Fm(t))}))),t.Va}function Yn(t){return t.ma||(t.ma=(function(n,r,s){const i=oe(n);return i.ia(),new _0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:C0.bind(null,t),n_:k0.bind(null,t),ea:P0.bind(null,t),ta:V0.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Va(t)):(await t.ma.stop(),t.Pa.length>0&&(G(br,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new ou(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(wn("AsyncQueue",`${e}: ${t}`),ms(t))return new Q(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static emptySet(e){return new es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=js(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.fa=new Oe(Y.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ne(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class ls{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new ls(e,n,es.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class O0{constructor(){this.queries=ld(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=ld(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new Q(D.ABORTED,"Firestore shutting down"))}}function ld(){return new Pr((t=>am(t)),wa)}async function $m(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new N0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=au(a,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&cu(n)}async function qm(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function x0(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&cu(n)}function M0(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function cu(t){t.Da.forEach((e=>{e.next()}))}var nl,ud;(ud=nl||(nl={})).Fa="default",ud.Cache="cache";class Hm{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==nl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.key=e}}class Wm{constructor(e){this.key=e}}class L0{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=de(),this.mutatedKeys=de(),this.Xa=cm(e),this.eu=new es(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new cd,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=Aa(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let O=!1;_&&b?_.data.isEqual(b.data)?V!==k&&(r.track({type:3,doc:b}),O=!0):this.iu(_,b)||(r.track({type:2,doc:b}),O=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),O=!0):_&&!b&&(r.track({type:1,doc:_}),O=!0,(l||h)&&(c=!0)),O&&(b?(a=a.add(b),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{At:O})}};return k(b)-k(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new ls(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new cd,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=de(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Wm(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new zm(r))})),n}uu(e){this.Ha=e.qs,this.Za=de();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ls.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const lu="SyncEngine";class F0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class U0{constructor(e){this.key=e,this.lu=!1}}class B0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Pr((c=>am(c)),wa),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(Y.comparator),this.Eu=new Map,this.Au=new Yl,this.Ru={},this.Vu=new Map,this.mu=cs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function j0(t,e,n=!0){const r=Ym(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Km(r,e,n,!0),s}async function $0(t,e){const n=Ym(t);await Km(n,e,!0,!1)}async function Km(t,e,n,r){const s=await c0(t.localStore,Jt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await q0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Mm(t.remoteStore,s),c}async function q0(t,e,n,r,s){t.gu=(p,_,b)=>(async function(k,O,J,H){let B=O.view.nu(J);B.Ds&&(B=await nd(k.localStore,O.query,!1).then((({documents:I})=>O.view.nu(I,B))));const L=H&&H.targetChanges.get(O.targetId),K=H&&H.targetMismatches.get(O.targetId)!=null,ae=O.view.applyChanges(B,k.isPrimaryClient,L,K);return fd(k,O.targetId,ae._u),ae.snapshot})(t,p,_,b);const i=await nd(t.localStore,e,!0),a=new L0(e,i.qs),c=a.nu(i.documents),l=Oi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);fd(t,n,h._u);const d=new F0(e,n,a);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function H0(t,e,n){const r=oe(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!wa(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await el(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&nu(r.remoteStore,s.targetId),rl(r,s.targetId)})).catch(gs)):(rl(r,s.targetId),await el(r.localStore,s.targetId,!0))}async function z0(t,e){const n=oe(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nu(n.remoteStore,r.targetId))}async function W0(t,e,n){const r=Z0(t);try{const s=await(function(a,c){const l=oe(a),h=Pe.now(),d=c.reduce(((b,V)=>b.add(V.key)),de());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=An(),k=de();return l.Os.getEntries(b,d).next((O=>{V=O,V.forEach(((J,H)=>{H.isValidDocument()||(k=k.add(J))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((O=>{p=O;const J=[];for(const H of c){const B=cb(H,p.get(H.key).overlayedDocument);B!=null&&J.push(new Vr(H.key,B,Zg(B.value.mapValue),mn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,J,c)})).next((O=>{_=O;const J=O.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(b,O.batchId,J)}))})).then((()=>({batchId:_.batchId,changes:um(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Oe(he)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,n),await Mi(r,s.changes),await Va(r.remoteStore)}catch(s){const i=au(s,"Failed to persist write");n.reject(i)}}async function Gm(t,e){const n=oe(t);try{const r=await i0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Eu.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Te(a.lu,14607):s.removedDocuments.size>0&&(Te(a.lu,42227),a.lu=!1))})),await Mi(n,r,e)}catch(r){await gs(r)}}function hd(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=oe(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(c)&&(h=!0)})),h&&cu(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function K0(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Oe(Y.comparator);a=a.insert(i,ct.newNoDocument(i,ie.min()));const c=de().add(i),l=new Ra(ie.min(),new Map,new Oe(he),a,c);await Gm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),uu(r)}else await el(r.localStore,e,!1).then((()=>rl(r,e,n))).catch(gs)}async function G0(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await s0(n.localStore,e);Jm(n,r,null),Qm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(n,s)}catch(s){await gs(s)}}async function Q0(t,e,n){const r=oe(t);try{const s=await(function(a,c){const l=oe(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Te(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);Jm(r,e,n),Qm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mi(r,s)}catch(s){await gs(s)}}function Qm(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Jm(t,e,n){const r=oe(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function rl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Xm(t,r)}))}function Xm(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(nu(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),uu(t))}function fd(t,e,n){for(const r of n)r instanceof zm?(t.Au.addReference(r.key,e),J0(t,r)):r instanceof Wm?(G(lu,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Xm(t,r.key)):ne(19791,{yu:r})}function J0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(G(lu,"New document in limbo: "+n),t.Iu.add(r),uu(t))}function uu(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Y(Se.fromString(e)),r=t.mu.next();t.Eu.set(r,new U0(n)),t.du=t.du.insert(n,r),Mm(t.remoteStore,new Un(Jt(Kl(n.path)),r,"TargetPurposeLimboResolution",Ea.ue))}}async function Mi(t,e,n){const r=oe(t),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,n).then((h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=eu.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=oe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>N.forEach(h,(_=>N.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>N.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!ms(p))throw p;G(tu,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),V=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,k)}}})(r.localStore,i))}async function X0(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){G(lu,"User change. New user:",e.toKey());const r=await Dm(n.localStore,e);n.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new Q(D.CANCELLED,a))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(n,r.Bs)}}function Y0(t,e){const n=oe(t),r=n.Eu.get(e);if(r&&r.lu)return de().add(r.key);{let s=de();const i=n.Tu.get(e);if(!i)return s;for(const a of i){const c=n.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Ym(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K0.bind(null,e),e.hu.J_=x0.bind(null,e.eventManager),e.hu.pu=M0.bind(null,e.eventManager),e}function Z0(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q0.bind(null,e),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ca(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return r0(this.persistence,new e0,e.initialUser,this.serializer)}Du(e){return new km(Zl.Vi,this.serializer)}bu(e){return new u0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class eS extends ea{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Te(this.persistence.referenceDelegate instanceof Yo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ub(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new km((r=>Yo.Vi(r,n)),this.serializer)}}class sl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X0.bind(null,this.syncEngine),await D0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new O0})()}createDatastore(e){const n=Ca(e.databaseInfo.databaseId),r=(function(i){return new g0(i)})(e.databaseInfo);return(function(i,a,c,l){return new v0(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,c){return new T0(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>hd(this.syncEngine,n,0)),(function(){return id.C()?new id:new h0})())}createSyncEngine(e,n){return(function(s,i,a,c,l,h,d){const p=new B0(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=oe(s);G(br,"RemoteStore shutting down."),i.Ia.add(5),await xi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sl.provider={build:()=>new sl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class tS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=jl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{G(Zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(G(Zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=au(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),G(Zn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Dm(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Kn("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{G("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Kn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function dd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nS(t);G(Zn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>ad(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>ad(e.remoteStore,s))),t._onlineComponents=e}async function nS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Zn,"Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Kn("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new ea)}}else G(Zn,"Using default OfflineComponentProvider"),await gc(t,new eS(void 0));return t._offlineComponents}async function e_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Zn,"Using user provided OnlineComponentProvider"),await dd(t,t._uninitializedComponentsProvider._online)):(G(Zn,"Using default OnlineComponentProvider"),await dd(t,new sl))),t._onlineComponents}function rS(t){return e_(t).then((e=>e.syncEngine))}async function il(t){const e=await e_(t),n=e.eventManager;return n.onListen=j0.bind(null,e.syncEngine),n.onUnlisten=H0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=z0.bind(null,e.syncEngine),n}function sS(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new Zm({next:_=>{d.Ou(),a.enqueueAndForget((()=>qm(i,p))),_.fromCache&&l.source==="server"?h.reject(new Q(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Hm(c,d,{includeMetadataChanges:!0,ka:!0});return $m(i,p)})(await il(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firestore.googleapis.com",gd=!0;class md{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=n_,this.ssl=gd}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:gd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lb)throw new Q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new md({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new md(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new dA;switch(r.type){case"firstParty":return new _A(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=pd.get(n);r&&(G("ComponentProvider","Removing Datastore"),pd.delete(n),r.terminate())})(this),Promise.resolve()}}function iS(t,e,n,r={}){var s;t=zn(t,ka);const i=hs(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(Gp(`https://${l}`),Qp("Firestore",!0)),a.host!==n_&&a.host!==l&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Tr(h,c)&&(t._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=kE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new Q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(_)}t._authCredentials=new pA(new Bg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ki(n,qe._jsonSchema))return new qe(e,r||null,new Y(Se.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:$e("string",qe._jsonSchemaVersion),referencePath:$e("string")};class Wn extends Dr{constructor(e,n,r){super(e,n,Kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new Y(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function lo(t,e,...n){if(t=mt(t),$g("collection","path",e),t instanceof ka){const r=Se.fromString(e,...n);return Pf(r),new Wn(t,null,r)}{if(!(t instanceof qe||t instanceof Wn))throw new Q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Pf(r),new Wn(t.firestore,null,r)}}function oS(t,e,...n){if(t=mt(t),arguments.length===1&&(e=jl.newId()),$g("doc","path",e),t instanceof ka){const r=Se.fromString(e,...n);return Cf(r),new qe(t,null,new Y(r))}{if(!(t instanceof qe||t instanceof Wn))throw new Q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Cf(r),new qe(t.firestore,t instanceof Wn?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="AsyncQueue";class yd{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Om(this,"async_queue_retry"),this.oc=()=>{const r=pc();r&&G(_d,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Hn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ms(e))throw e;G(_d,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,wn("INTERNAL UNHANDLED ERROR: ",vd(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=ou.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ne(47125,{hc:vd(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function vd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class vi extends ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new yd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yd(e),this._firestoreClient=void 0,await e}}}function aS(t,e){const n=typeof t=="object"?t:Zp(),r=typeof t=="string"?t:zo,s=Cl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=PE("firestore");i&&iS(s,...i)}return s}function hu(t){if(t._terminated)throw new Q(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cS(t),t._firestoreClient}function cS(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,h,d){return new NA(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,t_(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new tS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(et.fromBase64String(e))}catch(n){throw new Q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ki(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:$e("string",Rt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(e){if(ki(e,Yt._jsonSchema))return new Yt(e.latitude,e.longitude)}}Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:$e("string",Yt._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ki(e,Zt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Zt(e.vectorValues);throw new Q(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:$e("string",Zt._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=/^__.*__$/;class uS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}function s_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ec:t})}}class du{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ta(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(s_(this.Ec)&&lS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class hS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ca(e)}Dc(e,n,r,s=!1){return new du({Ec:e,methodName:n,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function i_(t){const e=t._freezeSettings(),n=Ca(t._databaseId);return new hS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fS(t,e,n,r,s,i={}){const a=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);c_("Data must be an object, but it was:",a,r);const c=o_(r,a);let l,h;if(i.merge)l=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=pS(e,p,n);if(!a.contains(_))throw new Q(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);mS(d,_)||d.push(_)}l=new Dt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new uS(new St(c),l,h)}function dS(t,e,n,r=!1){return pu(n,t.Dc(r?4:3,e))}function pu(t,e){if(a_(t=mt(t)))return c_("Unsupported field value:",e,t),o_(t,e);if(t instanceof r_)return(function(r,s){if(!s_(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=pu(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Pe.fromDate(r);return{timestampValue:Xo(s.serializer,i)}}if(r instanceof Pe){const i=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xo(s.serializer,i)}}if(r instanceof Yt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:wm(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Zt)return(function(a,c){return{mapValue:{fields:{[Xg]:{stringValue:Yg},[Wo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Gl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${va(r)}`)})(t,e)}function o_(t,e){const n={};return zg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,((r,s)=>{const i=pu(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function a_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Yt||t instanceof Rt||t instanceof qe||t instanceof r_||t instanceof Zt)}function c_(t,e,n){if(!a_(n)||!qg(n)){const r=va(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function pS(t,e,n){if((e=mt(e))instanceof fu)return e._internalPath;if(typeof e=="string")return l_(t,e);throw ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const gS=new RegExp("[~\\*/\\[\\]]");function l_(t,e,n){if(e.search(gS)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fu(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ta(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Q(D.INVALID_ARGUMENT,c+t+l)}function mS(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _S(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _S extends u_{data(){return super.data()}}function gu(t,e){return typeof e=="string"?l_(t,e):e instanceof fu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mu{}class yS extends mu{}function vS(t,e,...n){let r=[];e instanceof mu&&r.push(e),r=r.concat(n),(function(i){const a=i.filter((l=>l instanceof _u)).length,c=i.filter((l=>l instanceof Da)).length;if(a>1||a>0&&c>0)throw new Q(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Da extends yS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Da(e,n,r)}_apply(e){const n=this._parse(e);return f_(e._query,n),new Dr(e.firestore,e.converter,Gc(e._query,n))}_parse(e){const n=i_(e.firestore);return(function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Id(p,d);const V=[];for(const k of p)V.push(Td(l,i,k));_={arrayValue:{values:V}}}else _=Td(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Id(p,d),_=dS(c,a,p,d==="in"||d==="not-in");return je.create(h,d,_)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ES(t,e,n){const r=e,s=gu("where",t);return Da._create(s,r,n)}class _u extends mu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _u(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Lt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)f_(a,l),a=Gc(a,l)})(e._query,n),new Dr(e.firestore,e.converter,Gc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Td(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new Q(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!om(e)&&n.indexOf("/")!==-1)throw new Q(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!Y.isDocumentKey(r))throw new Q(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Lf(t,new Y(r))}if(n instanceof qe)return Lf(t,n._key);throw new Q(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${va(n)}.`)}function Id(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function f_(t,e){const n=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Q(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TS{convertValue(e,n="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Wo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Le(a.doubleValue)));return new Zt(i)}convertGeoPoint(e){return new Yt(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ia(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Te(Pm(r),9688,{name:e});const s=new gi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vr extends u_{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vr._jsonSchemaVersion="firestore/documentSnapshot/1.0",vr._jsonSchema={type:$e("string",vr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class So extends vr{data(e={}){return super.data(e)}}class Er{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new So(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new So(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new So(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:wS(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}Er._jsonSchemaVersion="firestore/querySnapshot/1.0",Er._jsonSchema={type:$e("string",Er._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class yu extends TS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function mc(t){t=zn(t,Dr);const e=zn(t.firestore,vi),n=hu(e),r=new yu(e);return h_(t._query),sS(n,t._query).then((s=>new Er(e,r,t,s)))}function AS(t,e,n){t=zn(t,qe);const r=zn(t.firestore,vi),s=IS(t.converter,e);return SS(r,[fS(i_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,mn.none())])}function bS(t,...e){var n,r,s;t=mt(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Ed(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ed(e[a])){const p=e[a];e[a]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof qe)h=zn(t.firestore,vi),d=Kl(t._key.path),l={next:p=>{e[a]&&e[a](RS(h,t,p))},error:e[a+1],complete:e[a+2]};else{const p=zn(t,Dr);h=zn(p.firestore,vi),d=p._query;const _=new yu(h);l={next:b=>{e[a]&&e[a](new Er(h,_,p,b))},error:e[a+1],complete:e[a+2]},h_(t._query)}return(function(_,b,V,k){const O=new Zm(k),J=new Hm(b,O,V);return _.asyncQueue.enqueueAndForget((async()=>$m(await il(_),J))),()=>{O.Ou(),_.asyncQueue.enqueueAndForget((async()=>qm(await il(_),J)))}})(hu(h),d,c,l)}function SS(t,e){return(function(r,s){const i=new Hn;return r.asyncQueue.enqueueAndForget((async()=>W0(await rS(r),s,i))),i.promise})(hu(t),e)}function RS(t,e,n){const r=n.docs.get(e._key),s=new yu(t);return new vr(t,s,e._key,r,new qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ps=s})(fs),rs(new Ir("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new vi(new gA(r.getProvider("auth-internal")),new yA(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$n(wf,Af,e),$n(wf,Af,"esm2017")})();var CS="firebase",PS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(CS,PS,"app");const VS={apiKey:"AIzaSyAGVzfSDSEKNOKDZLc9mtrumIfnPmiM0QE",authDomain:"beverageshop-14060.firebaseapp.com",projectId:"beverageshop-14060",storageBucket:"beverageshop-14060.firebasestorage.app",messagingSenderId:"587237184942",appId:"1:587237184942:web:33ea55cefb7bc770c8e43f"},d_=Yp(VS),Ls=aS(d_),uo=rA(d_),wd=["Hot","Cold"];function kS(t){return t?{uid:t.uid,displayName:t.displayName,email:t.email,photoURL:t.photoURL}:null}let Ro=null;const si=()=>({id:"",name:"",color:"transparent"}),_c=()=>si(),yc=()=>si();function DS(){Ro&&(Ro(),Ro=null)}function vc(t){const e=t.data();return{id:e.id??t.id,name:e.name,color:e.color}}function NS(t){const e=t.data();return{id:t.id,name:e.name,temp:e.temp,base:e.base,syrup:e.syrup,creamer:e.creamer}}function Ec(t,e,n){return t.length?t.find(s=>s.id===e.id)??t[0]:n()}const ys=gE("BeverageStore",{state:()=>({temps:wd,bases:[],syrups:[],creamers:[],currentTemp:wd[0],currentBase:si(),currentSyrup:_c(),currentCreamer:yc(),beverageName:"",savedBeverages:[],currentBeverage:null,user:null}),getters:{displayTemp(t){return t.currentBeverage?t.currentBeverage.temp:t.currentTemp},displayBase(t){return t.currentBeverage?t.currentBeverage.base:t.currentBase.id?t.currentBase:t.bases[0]??si()},displaySyrup(t){return t.currentBeverage?t.currentBeverage.syrup:t.currentSyrup.id?t.currentSyrup:t.syrups[0]??_c()},displayCreamer(t){return t.currentBeverage?t.currentBeverage.creamer:t.currentCreamer.id?t.currentCreamer:t.creamers[0]??yc()},isIced(){return this.displayTemp==="Cold"}},actions:{async init(){const[t,e,n]=await Promise.all([mc(lo(Ls,"bases")),mc(lo(Ls,"creamers")),mc(lo(Ls,"syrups"))]),r=t.docs.map(vc),s=e.docs.map(vc),i=n.docs.map(vc),a=(c,l)=>c.id.localeCompare(l.id);this.bases=r.sort(a),this.creamers=s.sort(a),this.syrups=i.sort(a),this.currentBase=Ec(this.bases,this.currentBase,si),this.currentCreamer=Ec(this.creamers,this.currentCreamer,yc),this.currentSyrup=Ec(this.syrups,this.currentSyrup,_c),this.temps.includes(this.currentTemp)||(this.currentTemp=this.temps[0]??"Hot")},setUser(t){if(DS(),this.user=kS(t),!t){this.savedBeverages=[],this.currentBeverage=null;return}const e=vS(lo(Ls,"beverages"),ES("userId","==",t.uid));Ro=bS(e,n=>{const r=n.docs.map(NS);if(r.sort((s,i)=>s.name.localeCompare(i.name)),this.savedBeverages=r,this.currentBeverage){const s=r.find(i=>i.id===this.currentBeverage.id);this.currentBeverage=s??null}})},setCurrentBase(t){const e=this.bases.find(n=>n.id===t);e&&(this.currentBase=e)},setCurrentSyrup(t){const e=this.syrups.find(n=>n.id===t);e&&(this.currentSyrup=e)},setCurrentCreamer(t){const e=this.creamers.find(n=>n.id===t);e&&(this.currentCreamer=e)},touchForm(){this.currentBeverage=null},async makeBeverage(){if(!this.user)return"No user logged in, please sign in first.";const t=this.beverageName.trim(),e=this.currentBase,n=this.currentSyrup,r=this.currentCreamer;if(!t||!this.currentTemp||!e.id||!n.id||!r.id)return"Please complete all beverage options and the name before making a beverage.";const s=crypto.randomUUID(),i={userId:this.user.uid,name:t,temp:this.currentTemp,base:{...e},syrup:{...n},creamer:{...r}},a={id:s,name:t,temp:this.currentTemp,base:{...e},syrup:{...n},creamer:{...r}};try{await AS(oS(Ls,"beverages",s),i)}catch{return"Could not save your beverage. Check your connection and Firestore rules."}return this.beverageName="",this.currentBeverage=a,`Beverage ${t} made successfully!`},showBeverage(t){const e=this.savedBeverages.find(n=>n.id===t);if(!e){this.currentBeverage=null;return}this.currentTemp=e.temp,this.currentBase=this.bases.find(n=>n.id===e.base.id)??{...e.base},this.currentSyrup=this.syrups.find(n=>n.id===e.syrup.id)??{...e.syrup},this.currentCreamer=this.creamers.find(n=>n.id===e.creamer.id)??{...e.creamer},this.currentBeverage={...e}}},persist:{pick:["currentTemp","currentBase","currentSyrup","currentCreamer","beverageName"]}}),OS=Ii({__name:"Syrup",setup(t){const e=ys(),{displaySyrup:n}=Ai(e);return(r,s)=>(ye(),Ce("div",{class:"syrup",style:us({"--texture-color":Me(n).color})},null,4))}}),xS=Rr(OS,[["__scopeId","data-v-769696aa"]]),MS=Ii({__name:"Base",setup(t){const e=ys(),{displayBase:n}=Ai(e);return(r,s)=>(ye(),Ce("div",{class:"baseBeverage",style:us({backgroundColor:Me(n).color})},null,4))}}),LS=Rr(MS,[["__scopeId","data-v-e5341739"]]),FS=Ii({__name:"Creamer",setup(t){const e=ys(),{displayCreamer:n}=Ai(e);return(r,s)=>Me(n).name!=="No Cream"?(ye(),Ce("div",{key:0,class:"froth",style:us({backgroundColor:Me(n).color})},[(ye(),Ce(Fe,null,xn(5,i=>Ve("div",{key:i,class:"foam"})),64))],4)):Pc("",!0)}}),US=Rr(FS,[["__scopeId","data-v-d8a7b6d1"]]),BS={},jS={id:"steam"};function $S(t,e){return ye(),Ce("div",jS,[(ye(),Ce(Fe,null,xn(3,n=>Ve("div",{class:"stream",key:n})),64))])}const qS=Rr(BS,[["render",$S]]),HS={},zS={id:"condensation"};function WS(t,e){return ye(),Ce("div",zS,[(ye(),Ce(Fe,null,xn(3,n=>Ve("div",{class:"flake",key:n})),64))])}const KS=Rr(HS,[["render",WS]]),GS=Ii({__name:"Beverage",setup(t){const e=ys(),{isIced:n}=Ai(e);return(r,s)=>(ye(),_r(fA,null,{default:Fs(()=>[Me(n)?(ye(),_r(KS,{key:0})):(ye(),_r(qS,{key:1})),vt(cA,null,{top:Fs(()=>[vt(US)]),mid:Fs(()=>[vt(xS)]),bottom:Fs(()=>[vt(LS)]),_:1})]),_:1}))}}),QS={class:"app"},JS={class:"options"},XS=["id","value"],YS=["id","value"],ZS=["id","value"],eR=["id","value"],tR={class:"make-row"},nR=["disabled"],rR={class:"auth-bar"},sR={class:"user-label"},iR={class:"user-name"},oR={key:0,class:"message",role:"status","aria-live":"polite"},aR={key:1,id:"beverage-container"},cR=["value"],lR=Ii({__name:"App",setup(t){const e=ys(),{currentTemp:n,currentBase:r,currentSyrup:s,currentCreamer:i,currentBeverage:a}=Ai(e),c=_l(""),l=$t(()=>c.value?c.value:e.user?"":"Please sign in to save your beverage."),h=$t(()=>{var L;const B=e.user;return B?((L=B.displayName)==null?void 0:L.trim())||B.email||"User":""}),d=$t({get:()=>r.value.id,set:B=>{e.setCurrentBase(B),e.touchForm()}}),p=$t({get:()=>s.value.id,set:B=>{e.setCurrentSyrup(B),e.touchForm()}}),_=$t({get:()=>i.value.id,set:B=>{e.setCurrentCreamer(B),e.touchForm()}}),b=$t({get:()=>{var B;return((B=a.value)==null?void 0:B.id)??""},set:B=>{B&&e.showBeverage(B)}}),V=$t(()=>{var B;return(B=a.value)!=null&&B.id?a.value.id:[n.value,r.value.id,s.value.id,i.value.id].join("-")}),k=zI(uo,B=>{e.setUser(B)});up(async()=>{try{const B=await vw(uo);B!=null&&B.user&&e.setUser(B.user)}catch{}}),El(()=>{k()});async function O(){c.value="";const B=new dn;try{const L=await fw(uo,B);e.setUser(L.user)}catch(L){c.value=L instanceof Error?L.message:"Sign-in failed. Please try again."}}async function J(){c.value="";try{await WI(uo)}catch(B){c.value=B instanceof Error?B.message:"Sign out failed. Please try again."}}async function H(){c.value=await e.makeBeverage()}return(B,L)=>(ye(),Ce("div",QS,[L[9]||(L[9]=Ve("h1",null,"Custom Beverage Maker",-1)),(ye(),_r(GS,{key:V.value})),Ve("ul",JS,[Ve("li",null,[(ye(!0),Ce(Fe,null,xn(Me(e).temps,K=>(ye(),Ce("label",{key:K},[Ur(Ve("input",{type:"radio",name:"temperature",id:`r${K}`,value:K,"onUpdate:modelValue":L[0]||(L[0]=ae=>Me(e).currentTemp=ae),onChange:L[1]||(L[1]=(...ae)=>Me(e).touchForm&&Me(e).touchForm(...ae))},null,40,XS),[[Ms,Me(e).currentTemp]]),ur(" "+Dn(K),1)]))),128))]),Ve("li",null,[(ye(!0),Ce(Fe,null,xn(Me(e).bases,K=>(ye(),Ce("label",{key:K.id},[Ur(Ve("input",{type:"radio",name:"base",id:`base-${K.id}`,value:K.id,"onUpdate:modelValue":L[2]||(L[2]=ae=>d.value=ae)},null,8,YS),[[Ms,d.value]]),ur(" "+Dn(K.name),1)]))),128))]),Ve("li",null,[(ye(!0),Ce(Fe,null,xn(Me(e).syrups,K=>(ye(),Ce("label",{key:K.id},[Ur(Ve("input",{type:"radio",name:"syrup",id:`syrup-${K.id}`,value:K.id,"onUpdate:modelValue":L[3]||(L[3]=ae=>p.value=ae)},null,8,ZS),[[Ms,p.value]]),ur(" "+Dn(K.name),1)]))),128))]),Ve("li",null,[(ye(!0),Ce(Fe,null,xn(Me(e).creamers,K=>(ye(),Ce("label",{key:K.id},[Ur(Ve("input",{type:"radio",name:"creamer",id:`creamer-${K.id}`,value:K.id,"onUpdate:modelValue":L[4]||(L[4]=ae=>_.value=ae)},null,8,eR),[[Ms,_.value]]),ur(" "+Dn(K.name),1)]))),128))])]),Ve("div",tR,[L[7]||(L[7]=Ve("label",{class:"name-label",for:"beverage-name"},"Name",-1)),Ur(Ve("input",{id:"beverage-name",type:"text","onUpdate:modelValue":L[5]||(L[5]=K=>Me(e).beverageName=K),placeholder:"",autocomplete:"off"},null,512),[[nE,Me(e).beverageName]]),Ve("button",{type:"button",disabled:!Me(e).user,onClick:H}," 🍺 Make Beverage ",8,nR)]),Ve("div",rR,[Me(e).user?(ye(),Ce(Fe,{key:1},[Ve("span",sR,[L[8]||(L[8]=ur(" Signed in as ",-1)),Ve("strong",iR,Dn(h.value),1)]),Ve("button",{type:"button",class:"btn-signout",onClick:J}," Sign out ")],64)):(ye(),Ce("button",{key:0,type:"button",class:"btn-google",onClick:O}," Sign in with Google "))]),l.value?(ye(),Ce("p",oR,Dn(l.value),1)):Pc("",!0),Me(e).user?(ye(),Ce("div",aR,[(ye(!0),Ce(Fe,null,xn(Me(e).savedBeverages,K=>(ye(),Ce("label",{key:K.id,class:"saved-bev"},[Ur(Ve("input",{type:"radio",name:"saved-beverage",value:K.id,"onUpdate:modelValue":L[6]||(L[6]=ae=>b.value=ae)},null,8,cR),[[Ms,b.value]]),ur(" "+Dn(K.name),1)]))),128))])):Pc("",!0)]))}}),vu=lE();vu.use(EE);const p_=oE(lR);p_.use(vu);const uR=ys(vu);uR.init().then(()=>{p_.mount("#app")});
