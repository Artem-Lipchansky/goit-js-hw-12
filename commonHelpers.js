import{a as p,S as P,i as S}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();class w{constructor(){this.BASE_URL="https://pixabay.com",this.API_KEY="42546986-414d01ac2526fb250e7f0e208",this.perPage=15,p.defaults.baseURL=this.BASE_URL}async getImages(o,a=1){const s=new URLSearchParams({key:this.API_KEY,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.perPage,page:a});return(await p.get("/api/",{params:s})).data}}function v({webformatURL:t,largeImageURL:o,tags:a,likes:s,views:e,comments:r,downloads:i}){return`      
      <li class="card">
        <a href ="${o}">
        <img class="card-img" src="${t}" alt="${a}" >
        <ul class="card-data">
          <li><h3>Likes</h3><p>${s}</p></li>
          <li><h3>Views</h3><p>${e}</p></li>
          <li><h3>Comments</h3><p>${r}</p></li>
          <li><h3>Downloads</h3><p>${i}</p></li>
        </ul>
      </li>`}function E(t){return t.map(v).join("")}const c=new w,A=new P(".gallery a"),x=document.querySelector(".search-form"),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-btn");let g,n,y;x.addEventListener("submit",B);h.addEventListener("click",C);async function B(t){if(t.preventDefault(),d.innerHTML="",g=t.target.query.value.trim(),n=1,f(),u(),!t.target.query.value.trim()){l("Please enter a search query."),u();return}try{const a=await c.getImages(t.target.query.value);y=Math.ceil(a.totalHits/c.perPage);const s=a.hits;if(!s.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");q(s),b()}catch(a){l(a.message)}L(),t.target.reset()}async function C(t){n+=1,f(),u();const o=await c.getImages(g,n);q(o.hits),L(),b();const a=d.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:a*2})}function l(t){S.error({pauseOnHover:!1,position:"topRight",message:t})}function u(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function O(){h.classList.remove("hidden")}function f(){h.classList.add("hidden")}function b(){n>=y?(f(),l("We're sorry, but you've reached the end of search results.")):O()}function q(t){d.insertAdjacentHTML("beforeend",E(t)),A.refresh()}
//# sourceMappingURL=commonHelpers.js.map