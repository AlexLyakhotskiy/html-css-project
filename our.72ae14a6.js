parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ziYQ":[function(require,module,exports) {
(()=>{(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelectorAll(".mobile-menu__nav a"),n=document.querySelector("body");e.addEventListener("click",()=>{t.classList.toggle("is-open"),e.classList.toggle("is-open"),n.classList.toggle("is-open")}),o.forEach(o=>{o.addEventListener("click",function(){t.classList.toggle("is-open"),e.classList.toggle("is-open"),n.classList.toggle("is-open")})})})();const e=document.querySelectorAll("button.read-more");for(i=0;i<e.length;i++){const t=e[i],o=t.previousElementSibling;o.classList.add("hidden-on-small"),t.addEventListener("click",()=>{o.classList.toggle("hidden-on-small"),"Read more"==t.innerText?t.innerText="Less":t.innerText="Read more"})}const t=document.querySelectorAll("[data-rating]");for(i=0;i<t.length;i++){const e=t[i].getAttribute("data-rating"),o=t[i].querySelectorAll(".star-line__star");for(j=e;j<o.length;j++)o[j].classList.add("star-line__star_empty")}const o=document.querySelector(".articles").querySelectorAll("li"),n=o.length;for(i=0;i<n;i++){var s=document.createElement("p");s.className="articles__counter",s.innerHTML=i+1+"/"+n,o[i].appendChild(s)}var l=document.getElementById("time");setInterval(function(){var e=(new Date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1,timeZone:"America/New_York"}).replace(", ",", ");l.innerHTML=e},1e3);const r=document.querySelector("[data-btn-top]");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?r.style.display="inline-flex":r.style.display="none"},r.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})})(),$(document).ready(function(){$(".persons").slick({asNavFor:".articles",mobileFirst:!0,arrows:!1,slidesToShow:1,centerMode:!0,variableWidth:!0,focusOnSelect:!0,speed:250,responsive:[{breakpoint:768,settings:{slidesToShow:3}}]}),$(".articles").slick({asNavFor:".persons",mobileFirst:!0,arrows:!1,slidesToShow:1,adaptiveHeight:!0,speed:250}),$(".articles").slick("slickGoTo",1,!0)});
},{}]},{},["ziYQ"], null)
//# sourceMappingURL=/html-css-project/our.72ae14a6.js.map