(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a(){}function A(e){return e()}function L(){return Object.create(null)}function p(e){e.forEach(A)}function F(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function B(){return D(" ")}function I(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function se(e){return function(t){return t.preventDefault(),e.call(this,t)}}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function ie(e,t){e.value=t??""}let O;function m(e){O=e}const d=[],M=[];let h=[];const j=[],z=Promise.resolve();let v=!1;function G(){v||(v=!0,z.then(H))}function x(e){h.push(e)}const $=new Set;let f=0;function H(){if(f!==0)return;const e=O;do{try{for(;f<d.length;){const t=d[f];f++,m(t),Q(t.$$)}}catch(t){throw d.length=0,f=0,t}for(m(null),d.length=0,f=0;M.length;)M.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];$.has(n)||($.add(n),n())}h.length=0}while(d.length);for(;j.length;)j.pop()();v=!1,$.clear(),m(e)}function Q(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}function R(e){const t=[],n=[];h.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),h=t}const U=new Set;function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function W(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||x(()=>{const i=e.$$.on_mount.map(A).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...i):p(i),e.$$.on_mount=[]}),s.forEach(x)}function X(e,t){const n=e.$$;n.fragment!==null&&(R(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(d.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(e,t,n,o,r,s,i,_=[-1]){const u=O;m(e);const c=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:L(),dirty:_,skip_bound:!1,root:t.target||u.$$.root};i&&i(c.root);let k=!1;if(c.ctx=n?n(e,t.props||{},(l,E,...S)=>{const N=S.length?S[0]:E;return c.ctx&&r(c.ctx[l],c.ctx[l]=N)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](N),k&&Y(e,l)),E}):[],c.update(),k=!0,p(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const l=K(t.target);c.fragment&&c.fragment.l(l),l.forEach(w)}else c.fragment&&c.fragment.c();t.intro&&V(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),H()}m(u)}class q{$destroy(){X(this,1),this.$destroy=a}$on(t,n){if(!F(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(e){let t;return{c(){t=D("©NOT a real business")},m(n,o){C(n,t,o)},p:a,i:a,o:a,d(n){n&&w(t)}}}class ee extends q{constructor(t){super(),T(this,t,null,Z,P,{})}}function te(e){let t,n,o,r,s,i;return{c(){t=y("div"),n=y("div"),n.innerHTML='<a href="/index.html" class="svelte-1wb9y38">Fac<span class="highlight svelte-1wb9y38">Bok</span></a>',o=B(),r=y("button"),r.textContent="Login",b(n,"class","logo svelte-1wb9y38"),b(r,"class","svelte-1wb9y38"),b(t,"class","container svelte-1wb9y38")},m(_,u){C(_,t,u),g(t,n),g(t,o),g(t,r),s||(i=I(r,"click",e[0]),s=!0)},p:a,i:a,o:a,d(_){_&&w(t),s=!1,i()}}}function ne(e){return[()=>{window.location.href="/login.html"}]}class re extends q{constructor(t){super(),T(this,t,ne,te,P,{})}}function ae(e,t){localStorage.setItem(e,JSON.stringify(t))}function le(){new re({target:document.querySelector("#main-header")}),new ee({target:document.querySelector("#main-footer")})}function ue(e){const t=new FormData(e),n={};return t.forEach(function(o,r){n[r]=o}),n}export{q as S,b as a,C as b,oe as c,w as d,y as e,B as f,g,ce as h,T as i,ae as j,ie as k,le as l,I as m,a as n,ue as o,se as p,p as r,P as s,D as t};