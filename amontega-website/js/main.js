
const SHOP_URL="";
const $=s=>document.querySelector(s);
const c=$("#cookie");
if(!localStorage.getItem("cookieOk"))c.hidden=false;
$("#cookieOk").onclick=()=>{localStorage.setItem("cookieOk","1");c.hidden=true};
const d=$("#drawer"),sh=$("#shade");
const tog=o=>{d.classList.toggle("open",o);sh.classList.toggle("on",o)};
$("#burger").onclick=()=>tog(true);$("#drawerClose").onclick=()=>tog(false);sh.onclick=()=>tog(false);
d.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>tog(false)));
const t=$("#toTop");addEventListener("scroll",()=>t.style.display=scrollY>400?"block":"none");
t.onclick=()=>scrollTo({top:0,behavior:"smooth"});
const tr=$("#track");if(tr){const w=()=>tr.clientWidth*0.6;
$(".prev").onclick=()=>tr.scrollBy({left:-w(),behavior:"smooth"});
$(".next").onclick=()=>tr.scrollBy({left:w(),behavior:"smooth"});}
const sl=$("#shopLink");if(sl&&SHOP_URL)sl.href=SHOP_URL;
const f=$("#form");if(f)f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));
location.href="mailto:glaserei@amontega.de?subject="+encodeURIComponent("Anfrage: "+v.topic)+"&body="+encodeURIComponent(v.msg+"\n\n"+v.name+"\n"+v.mail+"\n"+v.tel)};
