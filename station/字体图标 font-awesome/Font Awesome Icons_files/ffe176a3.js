!function(){window.FortAwesomeConfig={autoA11y:{enabled:!0},asyncLoading:{enabled:!0},reporting:{enabled:!1},useUrl:"fonticons-free-fonticons.netdna-ssl.com/kits/ffe176a3",code:"ffe176a3",familyName:"FontAwesomeSite",prefix:"fas",testString:"\uf001",webFontLoaderVersion:"1.6.24"}}(),!function(){function e(e){var t,n=[],o=document,i=o.documentElement.doScroll,s="DOMContentLoaded",r=(i?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);r||o.addEventListener(s,t=function(){for(o.removeEventListener(s,t),r=1;t=n.shift();)t()}),r?setTimeout(e,0):n.push(e)}function t(e,t){var n=!1;return e.split(",").forEach(function(e){var o=new RegExp(e.trim().replace(".","\\.").replace("*","(.*)"));t.match(o)&&(n=!0)}),n}function n(e){"undefined"!=typeof MutationObserver&&new MutationObserver(e).observe(document,{childList:!0,subtree:!0})}function o(e){var t,n,o,i;e=e||"fa",t=document.querySelectorAll("."+e),Array.prototype.forEach.call(t,function(e){n=e.getAttribute("title"),e.setAttribute("aria-hidden","true"),o=e.nextElementSibling?!e.nextElementSibling.classList.contains("sr-only"):!0,n&&o&&(i=document.createElement("span"),i.innerHTML=n,i.classList.add("sr-only"),e.parentNode.insertBefore(i,e.nextSibling))})}!function(){function e(e){this.el=e;for(var t=e.className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<t.length;n++)o.call(this,t[n])}function t(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var n=Array.prototype,o=n.push,i=n.splice,s=n.join;e.prototype={add:function(e){this.contains(e)||(o.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!=e;t++);i.call(this,t,1),this.el.className=this.toString()}},toString:function(){return s.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=e,t(Element.prototype,"classList",function(){return new e(this)})}}();var i,s,r,a,c,d,l,u,f,m,p={isIE:function(e,t){var n,o="IE",i=document.createElement("B"),s=document.documentElement;return e&&(o+=" "+e,t&&(o=t+" "+o)),i.innerHTML="<!--[if "+o+']><b id="fitest"></b><![endif]-->',s.appendChild(i),n=!!document.getElementById("fitest"),s.removeChild(i),n}},h={load:function(e){var t=document.createElement("link");t.href=e,t.media="all",t.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(t)},loadAsync:function(e,t,n,o){var i,s=document.createElement("script"),r={},a="n4",c=function(){},d=document.scripts[0];window.WebFontConfig||(window.WebFontConfig={}),r=window.WebFontConfig,r.custom||(r.custom={}),r.custom.families||(r.custom.families=[]),r.custom.urls||(r.custom.urls=[]),r.custom.testStrings||(r.custom.testStrings={}),r.custom.families.push(t),r.custom.urls.push(e),r.custom.testStrings[t]=n,i=r.fontactive||c,r.fontactive=function(e,n){var o=(window.FontAwesomeHooks||{}).loaded||c;i(e,n),t===e&&a===n&&o()},s.src=o,d.parentNode.insertBefore(s,d)}},w={load:function(e){var t=document.createElement("script"),n=document.scripts[0];t.src=e,n.parentNode.appendChild(t)}};if(window.FontAwesomeCdnConfig&&(i=window.FontAwesomeCdnConfig,s=i.useUrl,r=i.faCdnUrl,a=i.code,c="FontAwesome",d="fa",l="\uf240",u=i.webFontLoaderVersion,i.autoA11y.enabled&&(e(o.bind(o,"fa")),n(o.bind(o,"fa"))),i.reporting.enabled&&t(i.reporting.domains,location.host)&&w.load(r+"/js/stats.js"),m="https://"+s+"/"+a+".css",f="https://"+s+"/webfontloader/"+u+"/webfontloader.js",i.asyncLoading.enabled?h.loadAsync(m,c,l,f):h.load(m)),window.FortAwesomeConfig){var g;i=window.FortAwesomeConfig,s=i.useUrl,a=i.code,c=i.familyName,d=i.prefix,l=i.testString,u=i.webFontLoaderVersion,i.autoA11y.enabled&&(e(o.bind(o,d)),n(o.bind(o,d))),g=p.isIE(8,"lte")?a+"-sd":a,m="https://"+s+"/"+g+".css",f="https://use.fonticons.com/webfontloader/"+u+"/webfontloader.js",i.asyncLoading.enabled?h.loadAsync(m,c,l,f):h.load(m)}}();