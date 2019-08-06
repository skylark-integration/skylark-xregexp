/**
 * skylark-xregexp - A version of xregexp.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-xregexp/
 * @license MIT
 */
define([],function(){return e=>{function n(e,n,i,r){return{name:e,value:n,start:i,end:r}}e.matchRecursive=((i,r,c,s,l)=>{s=s||"",l=l||{};const t=s.includes("g"),u=s.includes("y"),a=s.replace(/y/g,"");let{escapeChar:o}=l;const h=l.valueNames,f=[];let p,d,g,x,m,w=0,b=0,k=0,v=0;if(r=e(r,a),c=e(c,a),o){if(o.length>1)throw new Error("Cannot use more than one escape character");o=e.escape(o),m=new RegExp(`(?:${o}[\\S\\s]|(?:(?!${e.union([r,c],"",{conjunction:"or"}).source})[^${o}])+)+`,s.replace(/[^imu]+/g,""))}for(;;){if(o&&(k+=(e.exec(i,m,k,"sticky")||[""])[0].length),g=e.exec(i,r,k),x=e.exec(i,c,k),g&&x&&(g.index<=x.index?x=null:g=null),g||x)k=(b=(g||x).index)+(g||x)[0].length;else if(!w)break;if(u&&!w&&b>v)break;if(g)w||(p=b,d=k),++w;else{if(!x||!w)throw new Error("Unbalanced delimiter found in string");if(!--w&&(h?(h[0]&&p>v&&f.push(n(h[0],i.slice(v,p),v,p)),h[1]&&f.push(n(h[1],i.slice(p,d),p,d)),h[2]&&f.push(n(h[2],i.slice(d,b),d,b)),h[3]&&f.push(n(h[3],i.slice(b,k),b,k))):f.push(i.slice(d,b)),v=k,!t))break}b===k&&++k}return t&&!u&&h&&h[0]&&i.length>v&&f.push(n(h[0],i.slice(v),v,i.length)),f})}});
//# sourceMappingURL=../sourcemaps/addons/matchrecursive.js.map
