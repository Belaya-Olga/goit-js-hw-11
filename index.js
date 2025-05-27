import{a as u,S as f,i}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=u.create({baseURL:"https://pixabay.com/api/"});function d(s){return m.get("",{params:{key:"50364096-1c7ce5aa76102baff0b747707",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");console.log("Значення myLoader при завантаженні скрипту:",l);let p=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
        <p class="info-item"><span class="label">Likes:</span> ${t.likes}</p>
        <p class="info-item"><span class="label">Views:</span> ${t.views}</p>
        <p class="info-item"><span class="label">Comments:</span> ${t.comments}</p>
        <p class="info-item"><span class="label">Downloads:</span> ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),p.refresh()}function g(){c.innerHTML=" "}function h(){l.classList.add("visible")}function b(){l.classList.remove("visible")}const L=document.querySelector(".form"),v=document.querySelector('[name="search-text"]');document.querySelector("button");L.addEventListener("submit",S);function S(s){s.preventDefault();let o=v.value.trim();if(o===""){i.error({title:"Error",message:"Please enter valid values"});return}g(),h(),d(o).then(t=>{const a=t.data;if(a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(a.hits),console.log(a)}).catch(t=>{i.error({title:"Error",message:"Something went wrong. Try again!"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
