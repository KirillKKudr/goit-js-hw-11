import{a as g,i as d,S as h}from"./assets/vendor-3KjQMYCQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="46859410-d5a1b7b8d3c8579cf11d58e8b",b="https://pixabay.com/api/";function L(r,o=1,s=12){const n=`${b}?key=${y}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`;return g.get(n).then(e=>e.data.hits).catch(e=>{throw console.error("Error fetching images:",e),e})}const a=()=>{d.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"})},$=(r,o)=>{const s=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:f,comments:m,downloads:p})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${n}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${i}</p>
          <p><b>Views:</b> ${f}</p>
          <p><b>Comments:</b> ${m}</p>
          <p><b>Downloads:</b> ${p}</p>
        </div>
      </li>
    `).join("");o.innerHTML=s},c=document.querySelector(".search-form"),l=document.querySelector(".gallery"),S=12;let q=1,P=new h(".gallery a");const w=()=>{const r=document.querySelector(".loader");r&&(r.style.display="block")},u=()=>{const r=document.querySelector(".loader");r&&(r.style.display="none")};c.addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements.search.value.trim();if(o===""){a();return}w(),l.innerHTML="",L(o,q,S).then(s=>{u(),s.length===0?a():($(s,l),P.refresh()),c.reset()}).catch(s=>{u(),console.error("Error processing images:",s),d.error({title:"Error",message:"Failed to load images"})})});
//# sourceMappingURL=index.js.map
