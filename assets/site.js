(function(){
// gallery
document.querySelectorAll('.gt').forEach(function(b){b.addEventListener('click',function(){var m=document.getElementById('mainimg');m.src=b.dataset.src;document.querySelectorAll('.gt').forEach(function(x){x.classList.remove('on')});b.classList.add('on')})});
// in-page filter on category pages
document.querySelectorAll('.filt').forEach(function(inp){inp.addEventListener('input',function(){var v=inp.value.toLowerCase();document.querySelectorAll(inp.dataset.target+' .card').forEach(function(c){c.style.display=c.textContent.toLowerCase().indexOf(v)>-1?'':'none'})})});
// shop page
var res=document.getElementById('results');if(!res||!window.PRODUCTS)return;
var P=window.PRODUCTS,q=document.getElementById('q'),cat=document.getElementById('cat'),sort=document.getElementById('sort'),ph=document.getElementById('photo'),ins=document.getElementById('instock'),cnt=document.getElementById('cnt'),more=document.getElementById('moreb'),shown=60,list=[];
var sp=new URLSearchParams(location.search);q.value=sp.get('q')||'';cat.value=sp.get('cat')||'';
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function money(v){return v?'$'+Number(v).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):'Call for price'}
function run(){var terms=q.value.toLowerCase().split(/\s+/).filter(Boolean),c=cat.value;
list=P.filter(function(p){if(c&&p.c.indexOf(c)<0)return false;if(ph.checked&&p.t.indexOf('placeholder')>-1)return false;if(ins.checked&&p.o)return false;var h=(p.n+' '+p.pn+' '+p.y+' '+p.c.join(' ')).toLowerCase();return terms.every(function(t){return h.indexOf(t)>-1})});
var s=sort.value;if(s=='pa')list.sort(function(a,b){return (a.p||1e9)-(b.p||1e9)});else if(s=='pd')list.sort(function(a,b){return (b.p||0)-(a.p||0)});else if(s=='n')list.sort(function(a,b){return a.n.localeCompare(b.n)});else list.sort(function(a,b){return (a.t.indexOf('placeholder')>-1)-(b.t.indexOf('placeholder')>-1)||a.o-b.o});
shown=60;render()}
function render(){cnt.textContent=list.length+' parts';res.innerHTML=list.slice(0,shown).map(function(p){return '<a class="card" href="'+esc(p.u)+'"><div class="ci"><img loading="lazy" src="'+esc(p.t)+'" alt="">'+(p.o?'<span class="badge oos">Out of stock</span>':'')+'</div><div class="cb"><div class="cn">'+esc(p.n)+'</div>'+(p.pn?'<div class="cp">Part # '+esc(p.pn)+'</div>':'')+'<div class="pr">'+money(p.p)+'</div></div></a>'}).join('')||'<p class="muted">No parts match your search.</p>';more.style.display=list.length>shown?'':'none'}
[q,cat,sort,ph,ins].forEach(function(e){e.addEventListener(e===q?'input':'change',run)});more.addEventListener('click',function(){shown+=60;render()});run();
})();
