import{i as l}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="46859410-d5a1b7b8d3c8579cf11d58e8b",f="https://pixabay.com/api/";function d(n,o=1,s=12){const t=`${f}?key=${u}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`;return fetch(t).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}function p(n,o){const s=n.map(t=>`
    <div class="photo-card">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </div>
  `).join("");o.innerHTML=s}function c(){l.info({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}const a=document.querySelector("#search-form"),m=document.querySelector("#gallery"),h=12;let g=1;a.addEventListener("submit",n=>{n.preventDefault();const o=n.currentTarget.elements.searchQuery.value.trim();if(o===""){c();return}d(o,g,h).then(s=>{s.length===0?c():p(s,m),a.reset()}).catch(s=>{console.error("Error processing images:",s)})});
//# sourceMappingURL=index.js.map
