import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const m={email:"",message:""},e=document.querySelector(".feedback-form"),l=e.elements.message,o=e.elements.email;e.addEventListener("submit",a=>{a.preventDefault(),localStorage.removeItem("feedback-form-state"),e.reset()});e.addEventListener("input",a=>{const s=a.currentTarget.elements;m.email=s.email.value,m.message=s.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(m))});const t=JSON.parse(localStorage.getItem("feedback-form-state"));o.value=t?t.email:"";l.value=t?t.message:"";
//# sourceMappingURL=commonHelpers2.js.map
