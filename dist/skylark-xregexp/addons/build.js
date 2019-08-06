/**
 * skylark-xregexp - A version of xregexp.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-xregexp/
 * @license MIT
 */
define([],function(){return e=>{const n="xregexp",r=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,t=e.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/,r],"g",{conjunction:"or"});function c(e){const n=/^(?:\(\?:\))*\^/,r=/\$(?:\(\?:\))*$/;return n.test(e)&&r.test(e)&&r.test(e.replace(/\\[\s\S]/g,""))?e.replace(n,"").replace(r,""):e}function s(r,t){const c=t?"x":"";return e.isRegExp(r)?r[n]&&r[n].captureNames?r:e(r.source,c):e(r,c)}function u(n){return n instanceof RegExp?n:e.escape(n)}function o(e,n,r){return e[`subpattern${r}`]=n,e}function a(e,n,r){return e+(n<r.length-1?`{{subpattern${n}}}`:"")}e.tag=(n=>(r,...t)=>{const c=t.map(u).reduce(o,{}),s=r.raw.map(a).join("");return e.build(s,c,n)}),e.build=((u,o,a)=>{const i=(a=a||"").includes("x"),p=/^\(\?([\w$]+)\)/.exec(u);p&&(a=e._clipDuplicates(a+p[1]));const f={};for(const e in o)if(o.hasOwnProperty(e)){const r=s(o[e],i);f[e]={pattern:c(r.source),names:r[n].captureNames||[]}}const $=s(u,i);let l,m=0,d=0;const g=[0],w=$[n].captureNames||[],x=$.source.replace(t,(e,n,t,c,s)=>{const u=n||t;let o,a,i;if(u){if(!f.hasOwnProperty(u))throw new ReferenceError(`Undefined property ${e}`);return n?(o=w[d],g[++d]=++m,a=`(?<${o||u}>`):a="(?:",l=m,`${a}${f[u].pattern.replace(r,(e,n,r)=>{if(n){if(o=f[u].names[m-l],++m,o)return`(?<${o}>`}else if(r)return i=+r-1,f[u].names[i]?`\\k<${f[u].names[i]}>`:`\\${+r+l}`;return e})})`}if(c){if(o=w[d],g[++d]=++m,o)return`(?<${o}>`}else if(s)return w[i=+s-1]?`\\k<${w[i]}>`:`\\${g[+s]}`;return e});return e(x,a)})}});
//# sourceMappingURL=../sourcemaps/addons/build.js.map
