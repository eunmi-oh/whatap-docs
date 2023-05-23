"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235"],{66602:(e,t,s)=>{s.d(t,{z:()=>g});var n=s(59753),i=s(19146),o=s(34892),r=s(56959),l=s(64611),a=s(36071),m=s(65935),c=s(22971);let u=[];function d(e){e.querySelector(".js-write-tab").click();let t=e.querySelector(".js-comment-field");t.focus(),(0,n.f)(t,"change")}function f(e){return e.querySelector(".js-comment-edit-form-deferred-include-fragment")}function j(e){f(e)?.setAttribute("loading","eager")}function g(e){let t=e.currentTarget.closest("form"),s=e.currentTarget.getAttribute("data-confirm-text");if((0,l.T)(t)&&!confirm(s))return!1;for(let e of t.querySelectorAll("input, textarea")){let t=e;t.value=t.defaultValue,t.classList.contains("session-resumable-canceled")&&(t.classList.add("js-session-resumable"),t.classList.remove("session-resumable-canceled"))}let n=e.currentTarget.closest(".js-comment");return n&&n.classList.remove("is-comment-editing"),!0}function y(e){let t=e.querySelector("ol");if(t){t.textContent="";let e=u.map(e=>{let t=document.createElement("li");return t.textContent=e,t});for(let s of e)t.appendChild(s)}e.hidden=!1}function p(e,t){let s=e.querySelector(".js-comment-show-on-error");s&&(s.hidden=!t);let n=e.querySelector(".js-comment-hide-on-error");n&&(n.hidden=t)}(0,a.N7)(".js-comment-header-actions-deferred-include-fragment",{subscribe:e=>(0,r.RB)(e,"loadstart",()=>{let t=e.closest(".js-comment");j(t)},{capture:!1,once:!0})}),(0,a.N7)(".js-comment .contains-task-list",{add:e=>{let t=e.closest(".js-comment");j(t)}}),(0,n.on)("click",".js-comment-edit-button",function(e){let t=e.currentTarget.closest(".js-comment");t.classList.add("is-comment-editing");let s=f(t);s?s.addEventListener("include-fragment-replaced",()=>d(t),{once:!0}):d(t);let n=e.currentTarget.closest(".js-dropdown-details");n&&n.removeAttribute("open")}),(0,n.on)("click",".js-comment-hide-button",function(e){let t=e.currentTarget.closest(".js-comment");p(t,!1);let s=t.querySelector(".js-minimize-comment");s&&s.classList.remove("d-none");let n=e.currentTarget.closest(".js-dropdown-details");n&&n.removeAttribute("open")}),(0,n.on)("click",".js-comment-hide-minimize-form",function(e){let t=e.currentTarget.closest(".js-minimize-comment");t.classList.add("d-none")}),(0,n.on)("click",".js-comment-cancel-button",g),(0,n.on)("click",".js-cancel-issue-edit",function(e){let t=e.currentTarget.closest(".js-details-container");t.querySelector(".js-comment-form-error").hidden=!0}),(0,m.AC)(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize",function(e,t,s){let n=e.closest(".js-comment");n.classList.add("is-comment-loading");let i=n.getAttribute("data-body-version");i&&s.headers.set("X-Body-Version",i)}),(0,m.AC)(".js-comment .js-comment-update",async function(e,t){let s;let n=e.closest(".js-comment"),i=n.querySelector(".js-comment-update-error"),r=n.querySelector(".js-comment-body-error");i instanceof HTMLElement&&(i.hidden=!0),r instanceof HTMLElement&&(r.hidden=!0),u=[],e.classList.add("is-dirty");try{s=await t.json()}catch(e){if(422===e.response.status){let t=JSON.parse(e.response.text);if(t.errors){i instanceof HTMLElement&&(i.textContent=`There was an error posting your comment: ${t.errors.join(", ")}`,i.hidden=!1);return}}else throw e}finally{e.classList.remove("is-dirty")}if(!s)return;let a=s.json;a.errors&&a.errors.length>0&&(u=a.errors,y(r));let m=n.querySelector(".js-comment-body"),c=null!=m&&"async"===e.getAttribute("data-submitting-tracking-block-update")&&(0,l.M)(m,!0,!0);if(m&&a.body&&!c&&(m.innerHTML=a.body),null!=a.source){let e=n.querySelector(".js-comment-field");if(e&&(e.defaultValue=a.source,c||(e.value=a.source)),a.default_merge_commit_message){if(document.querySelector(".js-merge-pr.is-merging")){let e=document.querySelector(".js-merge-pull-request textarea");e instanceof HTMLTextAreaElement&&e.value===e.defaultValue&&(e.value=e.defaultValue=a.default_merge_commit_message)}if(a.default_squash_commit_message&&document.querySelector(".js-merge-pr.is-squashing")){let e=document.querySelector(".js-merge-pull-request textarea");e instanceof HTMLTextAreaElement&&e.value===e.defaultValue&&(e.value=e.defaultValue=a.default_squash_commit_message)}}document.querySelector(".js-merge-box-button-merge")?.setAttribute("data-input-message-value",a.default_merge_commit_message),document.querySelector(".js-merge-box-button-squash")?.setAttribute("data-input-message-value",a.default_squash_commit_message)}n.setAttribute("data-body-version",a.newBodyVersion);let d=n.querySelector(".js-body-version");d instanceof HTMLInputElement&&(d.value=a.newBodyVersion);let f=n.querySelector(".js-discussion-poll");for(let e of(f&&a.poll&&(f.innerHTML=a.poll),n.querySelectorAll("input, textarea"))){let t=e;t.defaultValue=t.value}n.classList.remove("is-comment-stale"),e.hasAttribute("data-submitting-tracking-block-update")||n.classList.remove("is-comment-editing");let j=n.querySelector(".js-comment-edit-history");if(j){let e=await (0,o.a_)(document,a.editUrl);j.textContent="",j.append(e)}}),(0,a.N7)(".js-comment-body-error",{add:e=>{u&&u.length>0&&y(e)}}),(0,m.AC)(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize",async function(e,t){let s;let n=e.closest(".js-comment");try{await t.text()}catch(e){if(422===(s=e).response.status){let e;try{e=JSON.parse(s.response.text)}catch(e){}e&&e.stale&&n.classList.add("is-comment-stale")}else throw s}finally{e.dispatchEvent(new CustomEvent("submit:complete",{bubbles:!0,detail:{error:s}}))}n.classList.remove("is-comment-loading")}),(0,m.AC)(".js-timeline-comment-unminimize, .js-timeline-comment-minimize",async function(e,t){let s=e.closest(".js-minimize-container");try{let e=await t.html();s.replaceWith(e.html)}catch(e){p(s,!0)}}),(0,m.AC)(".js-discussion-comment-unminimize, .js-discussion-comment-minimize",async function(e,t){let s=e.closest(".js-discussion-comment"),n=s.querySelector(".js-discussion-comment-error");n&&(n.hidden=!0);try{let e=await t.html();s.replaceWith(e.html)}catch(e){if(e.response.status>=400&&e.response.status<500){if(e.response.html){let t=e.response.html.querySelector(".js-discussion-comment").getAttribute("data-error");n instanceof HTMLElement&&(n.textContent=t,n.hidden=!1)}}else throw e}}),(0,m.AC)(".js-comment-delete",async function(e,t){await t.json();let s=e.closest(".js-comment-delete-container");!s&&(s=e.closest(".js-comment-container")||e.closest(".js-line-comments"))&&1!==s.querySelectorAll(".js-comment").length&&(s=e.closest(".js-comment"));let n=s?.closest(".js-comment-container")||s?.closest(".js-line-comments");if(s?.remove(),n&&1===n.querySelectorAll(".js-comment").length)for(let e of n.querySelectorAll(".js-delete-on-last-reply-deleted"))e.remove()}),(0,m.AC)(".js-issue-update",async function(e,t){let s;let n=e.closest(".js-details-container"),i=n.querySelector(".js-comment-form-error");try{s=await t.json()}catch(e){i.textContent=e.response?.json?.errors?.[0]||"Something went wrong. Please try again.",i.hidden=!1}if(!s)return;n.classList.remove("open"),i.hidden=!0;let o=s.json;if(null!=o.issue_title){n.querySelector(".js-issue-title").textContent=o.issue_title;let e=n.closest(".js-issues-results");if(e){if(e.querySelector(".js-merge-pr.is-merging")){let t=e.querySelector(".js-merge-pull-request .js-merge-title");t instanceof HTMLInputElement&&t.value===t.defaultValue&&(t.value=t.defaultValue=o.default_merge_commit_title)}else if(e.querySelector(".js-merge-pr.is-squashing")){let t=e.querySelector(".js-merge-pull-request .js-merge-title");t instanceof HTMLInputElement&&t.value===t.defaultValue&&(t.value=t.defaultValue=o.default_squash_commit_title)}let t=e.querySelector("button[value=merge]");t&&t.setAttribute("data-input-title-value",o.default_merge_commit_title);let s=e.querySelector("button[value=squash]");s&&s.setAttribute("data-input-title-value",o.default_squash_commit_title)}}for(let t of(document.title=o.page_title,e.elements))(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(t.defaultValue=t.value)}),(0,m.AC)(".js-comment-minimize",async function(e,t){await t.json();let s=e.closest(".js-comment"),n=s.querySelector(".js-minimize-comment");if(n&&n.classList.contains("js-update-minimized-content")){let t=e.querySelector("input[type=submit], button[type=submit]");t&&t.classList.add("disabled");let n=s.closest(".js-comment-container");n&&await (0,c.x0)(n)}else{n&&n.classList.add("d-none");let t=e.closest(".unminimized-comment");t.classList.add("d-none"),t.classList.remove("js-comment");let s=e.closest(".js-minimizable-comment-group"),i=s.querySelector(".minimized-comment");i&&i.classList.remove("d-none"),i&&i.classList.add("js-comment")}}),(0,m.AC)(".js-comment-unminimize",async function(e,t){await t.json();let s=e.closest(".js-minimizable-comment-group"),n=s.querySelector(".unminimized-comment"),i=s.querySelector(".minimized-comment");if(n)n.classList.remove("d-none"),n.classList.add("js-comment"),i&&i.classList.add("d-none"),i&&i.classList.remove("js-comment");else{if(i){let e=i.querySelector(".timeline-comment-actions");e&&e.classList.add("d-none"),i.classList.remove("js-comment")}let e=s.closest(".js-comment-container");await (0,c.x0)(e)}}),(0,n.on)("details-menu-select",".js-comment-edit-history-menu",e=>{let t=e.detail.relatedTarget.getAttribute("data-edit-history-url");if(!t)return;e.preventDefault();let s=(0,o.a_)(document,t);(0,i.W)({content:s,dialogClass:"Box-overlay--wide overflow-visible",errorMessage:"Couldn't display edit history diff"})},{capture:!0})},81775:(e,t,s)=>{s.d(t,{G:()=>m});var n=s(254),i=s(36071),o=s(59753);function r(e){let t=e.getAttribute("data-required-value"),s=e.getAttribute("data-required-value-prefix");if(e.value===t)e.setCustomValidity("");else{let n=t;s&&(n=s+n),e.setCustomValidity(n)}}(0,n.q6)("[data-required-value]",function(e){let t=e.currentTarget;r(t)}),(0,o.on)("change","[data-required-value]",function(e){let t=e.currentTarget;r(t),m(t.form)}),(0,n.q6)("[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity("")}),(0,o.on)("change","[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity(""),m(t.form)}),(0,n.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",e=>{let t=e.checkValidity();function s(){let s=e.checkValidity();s!==t&&e.form&&m(e.form),t=s}e.addEventListener("input",s),e.addEventListener("blur",function t(){e.removeEventListener("input",s),e.removeEventListener("blur",t)})});let l=new WeakMap;function a(e){l.get(e)||(e.addEventListener("change",()=>m(e)),l.set(e,!0))}function m(e){let t=e.checkValidity();for(let s of e.querySelectorAll("button[data-disable-invalid]"))s.disabled=!t}(0,i.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(e){let t=e.form;t&&(a(t),e.disabled=!t.checkValidity())}}),(0,i.N7)("input[data-required-change], textarea[data-required-change]",function(e){let t="radio"===e.type&&e.form?e.form.elements.namedItem(e.name).value:null;function s(s){let n=e.form;if(s&&"radio"===e.type&&n&&t)for(let s of n.elements.namedItem(e.name))s instanceof HTMLInputElement&&s.setCustomValidity(e.value===t?"unchanged":"");else e.setCustomValidity(e.value===(t||e.defaultValue)?"unchanged":"")}e.addEventListener("input",s),e.addEventListener("change",s),s(),e.form&&m(e.form)}),document.addEventListener("reset",function(e){if(e.target instanceof HTMLFormElement){let t=e.target;setTimeout(()=>m(t))}})}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-1e6a2a481b0e.js.map