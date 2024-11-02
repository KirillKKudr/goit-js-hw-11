import{i as p,S as g}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="46859410-d5a1b7b8d3c8579cf11d58e8b",y="https://pixabay.com/api/";function b(s,t=1,o=12){const i=`${y}?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}const a=()=>{p.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"})},L=(s,t)=>{const o=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:d,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${i}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${n}</p>
          <p><b>Views:</b> ${d}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </li>
    `).join("");t.innerHTML=o},c=document.querySelector(".search-form"),$=document.querySelector(".gallery"),w=12;let S=1,u;const q=()=>{u=new g(".gallery a")},E=()=>{document.querySelector(".loader").style.display="block"},l=()=>{document.querySelector(".loader").style.display="none"};c.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements.search.value.trim();if(t===""){a();return}E(),b(t,S,w).then(o=>{l(),o.length===0?a():(L(o,$),q(),u.refresh()),c.reset()}).catch(o=>{l(),console.error("Error processing images:",o),iziToast.error({title:"Error",message:"Failed to load images"})})});
//# sourceMappingURL=index.js.map
