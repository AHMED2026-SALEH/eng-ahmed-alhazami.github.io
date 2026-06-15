let current='ar';
const btn=document.getElementById('langBtn');
function setLang(lang){
  current=lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-ar]').forEach(el=>{el.textContent=el.dataset[lang];});
  btn.textContent=lang==='ar'?'English':'العربية';
}
btn.addEventListener('click',()=>setLang(current==='ar'?'en':'ar'));
setLang('ar');
