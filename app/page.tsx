/* eslint-disable */
// @ts-nocheck
'use client';
import { useEffect, useRef } from 'react';
import { brands, items, profileImages, analytics } from './portfolio-data';

function esc(v) { return String(v == null ? '' : v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function safeCss(v) { return String(v == null ? '' : v).replace(/[^\w\s#%.,()\/-]/g, ''); }
// Builds the hero/about <img>. Settings come from profileImages in portfolio-data.ts.
function portraitImg(c, priority) {
  return '<img src="' + esc(c.src) + '" alt="' + esc(c.alt) + '" data-fit="' + (c.fit === 'contain' ? 'contain' : 'cover') +
    '" style="object-position:' + esc(safeCss(c.position || 'center 20%')) + '" decoding="async"' +
    (priority ? ' fetchpriority="high"' : ' loading="lazy"') + '>';
}
function frameBg(c) { return c.background ? ' style="background:' + esc(safeCss(c.background)) + '"' : ''; }

const RAW_HTML = "<div class=\"progress\" id=\"pg\" aria-hidden=\"true\"></div>\n\n<div id=\"splash\" role=\"dialog\" aria-label=\"Welcome\">\n  <button class=\"skip\" id=\"skip\">Skip intro</button>\n  <span class=\"spark\" style=\"top:18%;left:14%;font-size:1.6rem\" aria-hidden=\"true\">✦</span>\n  <span class=\"spark\" style=\"top:70%;right:16%;font-size:1.2rem;animation-delay:1.2s\" aria-hidden=\"true\">✦</span>\n  <span class=\"spark\" style=\"top:24%;right:22%;font-size:.9rem;animation-delay:2.2s\" aria-hidden=\"true\">✧</span>\n  <div>\n    <div class=\"mark\">THE ANGEL EFFECT</div>\n    <h1>Angel Heart<br>Avilanes</h1>\n    <p>A little heart. A lot of stories.</p>\n    <div class=\"line\" aria-hidden=\"true\"></div>\n    <button class=\"btn main go\" id=\"enter\">Enter my world</button>\n  </div>\n</div>\n\n<header id=\"top\">\n  <div class=\"wrap bar\">\n    <a class=\"brand\" href=\"#home\">THE ANGEL EFFECT</a>\n    <nav id=\"nav\" aria-label=\"Main\">\n      <ul>\n        <li><a href=\"#home\">Home</a></li>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#insights\">Insights</a></li>\n        <li><a href=\"#content\">Content</a></li>\n        <li><a href=\"#collab\">Collaborations</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n        <li><a class=\"btn main\" href=\"#contact\" style=\"min-height:40px;padding:0 18px;border-bottom:1px solid var(--deep)\">Collaborate</a></li>\n      </ul>\n    </nav>\n    <button class=\"menu\" id=\"menu\" aria-expanded=\"false\" aria-controls=\"nav\" aria-label=\"Open menu\">☰</button>\n  </div>\n</header>\n\n<main id=\"main\">\n<section class=\"hero\" id=\"home\" aria-labelledby=\"h-hero\">\n  <div class=\"wrap\">\n    <div class=\"hero-copy\">\n      <p class=\"kicker\">Content creator &amp; digital personality on TikTok</p>\n      <h2 id=\"h-hero\">A little heart.<em>A lot of stories.</em></h2>\n      <p class=\"lead\">Creating content, building community, and connecting people with brands through stories that feel real.</p>\n      <div class=\"cta\"><a class=\"btn main\" href=\"#content\">Explore my content</a><a class=\"btn\" href=\"#contact\">Let’s collaborate</a></div>\n    </div>\n    <div class=\"portrait\"__HERO_BG__>__HERO_IMG__\n      <div class=\"sticker\">hi, I’m Angel ♡</div>\n      <div class=\"floatcard\"><b data-count=\"59000\" data-suffix=\"+\" data-short=\"K\">59K+</b><span class=\"small\">followers · reference figure</span></div>\n    </div>\n  </div>\n  <div class=\"ticker\" aria-hidden=\"true\"><div>\n    <span>Content</span>✦<span>Storytelling</span>✦<span>Community</span>✦<span>Creative partnerships</span>✦<span>Content</span>✦<span>Storytelling</span>✦<span>Community</span>✦<span>Creative partnerships</span>✦\n    <span>Content</span>✦<span>Storytelling</span>✦<span>Community</span>✦<span>Creative partnerships</span>✦<span>Content</span>✦<span>Storytelling</span>✦<span>Community</span>✦<span>Creative partnerships</span>✦\n  </div></div>\n</section>\n\n<section class=\"about\" id=\"about\" aria-labelledby=\"h-about\">\n  <div class=\"wrap\">\n    <div class=\"portrait\"__ABOUT_BG__>__ABOUT_IMG__</div>\n    <div>\n      <p class=\"kicker\">About</p>\n      <h2 id=\"h-about\">The person behind the posts.</h2>\n      <p style=\"color:var(--text2);max-width:52ch;margin-top:22px\">[Your biography goes here. Write two or three sentences in your own voice about who you are and what you like to make.] Edit this in the <code>profile</code> object of the data file.</p>\n      <ul aria-label=\"Creative interests\"><li>[Interest]</li><li>[Interest]</li><li>[Interest]</li></ul>\n      <p class=\"small\">Social: <a href=\"https://www.tiktok.com/@heart_avii\" target=\"_blank\" rel=\"noopener noreferrer\">TikTok @heart_avii</a> · <a href=\"https://www.instagram.com/heart_avii/\" target=\"_blank\" rel=\"noopener noreferrer\">Instagram @heart_avii</a></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"insights\" id=\"insights\" aria-labelledby=\"h-ins\">\n  <div class=\"wrap\">\n    <p class=\"kicker\">Creator insights</p>\n    <h2 id=\"h-ins\">The numbers behind the stories.</h2>\n    <p style=\"max-width:56ch;color:var(--text2);margin-top:18px\">A snapshot of the community, reach, and content performance behind my creator journey.</p>\n    <div class=\"metrics\">\n      <article class=\"metric\"><p class=\"kicker\">Followers</p><div class=\"n\" data-count=\"59000\" data-suffix=\"+\" data-short=\"K\">59K+</div><p class=\"small\">Approximate reference figure. Confirm and date before sharing.</p></article>\n      <article class=\"metric\"><p class=\"kicker\">Viewers</p><div class=\"n\" data-count=\"1300000\" data-short=\"M\" data-dec=\"1\">1.3M</div><p class=\"small\">Approximate, over a recent 28-day period.</p></article>\n      <article class=\"metric\"><p class=\"kicker\">Video reach</p><div class=\"n\">10K to millions</div><p class=\"small\">Historical range across videos. Not a typical or average result.</p></article>\n      \n    </div>\n    <div class=\"metrics\" id=\"postmetrics\" style=\"margin-top:16px\"></div><p class=\"small\" id=\"period\" style=\"margin-top:10px\"></p>\n      <div class=\"panels\">\n      <div class=\"panel\"><h3>Views over time</h3><div id=\"views-chart\" class=\"empty\">No monthly data yet. Add one entry per month under <code>analytics.monthly</code> in portfolio-data.ts and a chart appears here. Nothing here is sample data.</div></div>\n      <div class=\"panel\"><h3>Audience</h3>\n        <div class=\"aud\"><div>Age ranges<br><b id=\"aud-age\">Not provided</b></div><div>Gender<br><b id=\"aud-gender\">Not provided</b></div><div>Top locations<br><b id=\"aud-locations\">Not provided</b></div><div>Active times<br><b id=\"aud-times\">Not provided</b></div></div></div>\n    </div>\n    <div class=\"panel\" style=\"margin-top:16px\"><h3>Top-performing content</h3><div id=\"topvids\" class=\"top\"><p class=\"empty\">Add a video’s real view count (<code>views</code>) in portfolio-data.ts and it appears here. Views are per video, not account-wide.</p></div></div>\n    <p class=\"small\" style=\"margin-top:18px\">These are static, manually entered figures, not a live TikTok integration. Update them from your analytics and note the reporting period.</p>\n  </div>\n</section>\n\n<section class=\"brandsec\" id=\"brands\" aria-labelledby=\"h-br\"><div class=\"wrap\"><p class=\"kicker\">Brand partnerships</p><h2 id=\"h-br\">Brands I’ve created with.</h2><p class=\"small\" style=\"margin-top:14px\">Past and existing collaborations across fashion, beauty, and lifestyle. Numbers show how many portfolio items are linked to each brand.</p><div class=\"brands\" id=\"brandrow\"></div></div></section>\n<section id=\"content\" aria-labelledby=\"h-con\"><div class=\"wrap\"><p class=\"kicker\">Selected campaigns</p><h2 id=\"h-con\">Work I’m proud of.</h2><div class=\"filters\" role=\"group\" aria-label=\"Filter campaigns by category\" id=\"cf\"></div><div class=\"car\" id=\"car\" tabindex=\"0\" aria-label=\"Campaign carousel\"></div><div class=\"ctl\"><button type=\"button\" class=\"ar\" id=\"prev\" aria-label=\"Previous\">←</button><button type=\"button\" class=\"ar\" id=\"next\" aria-label=\"Next\">→</button><div id=\"dots\"></div></div></div></section>\n<section class=\"onsite\" id=\"onsite\" aria-labelledby=\"h-on\"><div class=\"wrap\"><p class=\"kicker\">On-site experiences</p><h2 id=\"h-on\">Beyond the screen.</h2><p class=\"small\" style=\"margin-top:14px\">Content created at real places and stores. These are on-site content experiences, not formal partnerships beyond what is stated.</p><div class=\"mg\" id=\"onsite-grid\"></div></div></section>\n<section class=\"ig\" id=\"instagram\" aria-labelledby=\"h-ig\"><div class=\"wrap\"><p class=\"kicker\">Instagram</p><h2 id=\"h-ig\">Instagram collaborations.</h2><div class=\"mg\" id=\"instagram-grid\"></div></div></section>\n<section class=\"mod\" id=\"modeling\" aria-labelledby=\"h-mo\"><div class=\"wrap\"><p class=\"kicker\">Modeling &amp; editorial</p><h2 id=\"h-mo\">Modeling with Straightforward</h2><div class=\"mg\" id=\"modeling-grid\"></div></div></section>\n<section class=\"cafe\" id=\"cafe\" aria-labelledby=\"h-cf\"><div class=\"wrap\"><p class=\"kicker\">Coffee, bites &amp; little discoveries</p><h2 id=\"h-cf\">A little taste of life.</h2><div class=\"mg\" id=\"cafe-grid\"></div><div class=\"cta-box\"><h3>Your next favorite spot deserves to be discovered.</h3><p class=\"small\" style=\"font-size:1rem\">I love discovering cozy cafés, beautiful spaces, and good food. Let’s create content that captures the experience and gives people a reason to visit.</p><a class=\"btn main\" href=\"mailto:avilanesangelheart@gmail.com?subject=Caf%C3%A9%20%2F%20food%20collaboration\">Let’s collaborate</a></div></div></section>\n\n<section class=\"studio\" id=\"collab\" aria-labelledby=\"h-col\">\n  <div class=\"wrap\">\n    <p class=\"kicker\">Collaborations</p>\n    <h2 id=\"h-col\">Let’s make something people remember.</h2>\n    <p style=\"max-width:56ch;color:var(--text2);margin-top:18px\">I create content designed to connect with people through personality, storytelling, and authentic creative expression. Pricing depends on campaign scope and deliverables.</p>\n    <div class=\"svc\">\n      <div><h3>Sponsored TikTok videos</h3><p class=\"small\">Story-led videos built around your product or message.</p></div>\n      <div><h3>UGC-style content</h3><p class=\"small\">Natural, personal clips your brand can use.</p></div>\n      <div><h3>Product features</h3><p class=\"small\">Honest showcases that fit my content.</p></div>\n      <div><h3>Lifestyle &amp; beauty</h3><p class=\"small\">Everyday moments with a brand woven in.</p></div>\n      <div><h3>Creative storytelling</h3><p class=\"small\">Concept-driven campaigns with a clear arc.</p></div>\n      <div><h3>Events &amp; ambassadorships</h3><p class=\"small\">Appearances and longer partnerships.</p></div>\n    </div>\n    <div class=\"kit\"><div><h3 style=\"font-size:1.5rem\">Media kit</h3><p class=\"small\" style=\"margin:4px 0 0\">Not uploaded yet. Add <code>public/media/angel-heart-media-kit.pdf</code> and set its path in the data file to enable the download.</p></div><span class=\"btn\" aria-disabled=\"true\" style=\"opacity:.5;cursor:not-allowed\">Download coming soon</span></div>\n    <p class=\"small\" style=\"margin-top:18px\">Case studies and brand logos will appear here once you supply real collaborations.</p>\n  </div>\n</section>\n\n<section class=\"contact\" id=\"contact\" aria-labelledby=\"h-ct\">\n  <div class=\"wrap\">\n    <div>\n      <p class=\"kicker\">Contact</p>\n      <h2 id=\"h-ct\">Let’s create something beautiful.</h2>\n      <p style=\"color:var(--text2);max-width:40ch;margin:18px 0\">Have a brand, a story, or a little something worth sharing? From fashion and beauty campaigns to café discoveries and lifestyle content, I’m always excited to create something meaningful with brands that align with my style.</p>\n      <p><a href=\"mailto:avilanesangelheart@gmail.com\" style=\"font:400 1.4rem var(--serif);overflow-wrap:anywhere\">avilanesangelheart@gmail.com</a></p><div class=\"soc\"><a class=\"btn\" href=\"https://www.tiktok.com/@heart_avii\" target=\"_blank\" rel=\"noopener noreferrer\">Follow my TikTok</a><a class=\"btn\" href=\"https://www.instagram.com/heart_avii/\" target=\"_blank\" rel=\"noopener noreferrer\">Let’s connect on Instagram</a></div>\n    </div>\n    <form id=\"form\" novalidate>\n      <div class=\"hp\" aria-hidden=\"true\"><label>Leave empty<input name=\"website\" tabindex=\"-1\" autocomplete=\"off\"></label></div>\n      <div class=\"two\">\n        <label>Name<input name=\"name\" required autocomplete=\"name\"><span class=\"err\" data-for=\"name\"></span></label>\n        <label>Company or brand<input name=\"company\" autocomplete=\"organization\"></label>\n      </div>\n      <label>Email<input name=\"email\" type=\"email\" required autocomplete=\"email\"><span class=\"err\" data-for=\"email\"></span></label>\n      <div class=\"two\">\n        <label>Campaign type<select name=\"type\"><option>Fashion &amp; Apparel</option><option>Beauty &amp; Skincare</option><option>Food &amp; Beverage</option><option>Café &amp; Restaurant Features</option><option>Modeling</option><option>On-site Content</option><option>Other Collaborations</option></select></label>\n        <label>Timeline (optional)<input name=\"timeline\"></label>\n      </div>\n      <label>Estimated budget (optional)<input name=\"budget\"></label>\n      <label>Message<textarea name=\"message\" required></textarea><span class=\"err\" data-for=\"message\"></span></label>\n      <button class=\"btn main\" type=\"submit\">Open email draft</button>\n      <p id=\"status\" role=\"status\" tabindex=\"-1\" hidden></p>\n      <p class=\"small\">This form has no server connected yet. It opens a pre-filled draft in your email app, and nothing is sent until you press send there.</p>\n    </form>\n  </div>\n</section>\n</main>\n\n<div id=\"lb\" hidden role=\"dialog\" aria-modal=\"true\" aria-label=\"Media preview\"><div class=\"lbbox\"><div id=\"lbm\"></div><div id=\"lbi\"></div></div></div>\n<footer><div class=\"wrap\"><span>© 2026 Angel Heart Avilanes · The Angel Effect</span><a href=\"#top\">Back to top</a></div></footer>";
const HTML = RAW_HTML
  .replace('__HERO_IMG__', portraitImg(profileImages.hero, true)).replace('__HERO_BG__', frameBg(profileImages.hero))
  .replace('__ABOUT_IMG__', portraitImg(profileImages.about, false)).replace('__ABOUT_BG__', frameBg(profileImages.about));

export default function Home() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups = [];
    const observers = [];
    const IO = window.IntersectionObserver;
    function listen(t, ev, fn, opt) { t.addEventListener(ev, fn, opt); cleanups.push(function () { t.removeEventListener(ev, fn, opt); }); }
    function byId(id) { return root.querySelector('#' + id); }
    function TrackedIO(cb, o) {
      const x = IO ? new IO(cb, o) : { observe() {}, unobserve() {}, disconnect() {} };
      observers.push(x);
      return x;
    }
(function(){
  var splash=byId('splash'),enter=byId('enter'),main=byId('main');
  var missing=['splash','enter','skip','main'].filter(function(id){return !byId(id)});
  if(missing.length){console.error('Intro initialization failed. Missing element(s): #'+missing.join(', #'));return}
  var seen=false;try{seen=sessionStorage.getItem('ae-intro')==='1'}catch(e){}
  function leave(){splash.classList.add('out');try{sessionStorage.setItem('ae-intro','1')}catch(e){}
    setTimeout(function(){splash.hidden=true;main.removeAttribute('inert');document.body.style.overflow=''},950)}
  if(seen){splash.hidden=true}else{main.setAttribute('inert','');document.body.style.overflow='hidden';enter.focus()}
  enter.onclick=leave;byId('skip').onclick=leave;
  listen(document,'keydown',function(e){if(e.key==='Escape'){if(!splash.hidden)leave();closeMenu()}});

  var nav=byId('nav'),menu=byId('menu');
  function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}
  menu.onclick=function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o);menu.setAttribute('aria-label',o?'Close menu':'Open menu')};
  nav.querySelectorAll('a').forEach(function(a){listen(a,'click',closeMenu)});

  var head=byId('top'),pg=byId('pg');
  listen(window,'scroll',function(){var h=document.documentElement;head.classList.toggle('stuck',scrollY>20);pg.style.width=(scrollY/(h.scrollHeight-innerHeight||1)*100)+'%'},{passive:true});
  var links=[].slice.call(nav.querySelectorAll('a[href^="#"]:not(.btn)'));
  var so=new TrackedIO(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(function(l){var s=root.querySelector(l.getAttribute('href'));if(s)so.observe(s)});

  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function fmt(v,el){var s=el.dataset.short,d=+el.dataset.dec||0;if(s==='K')v=Math.round(v/1000)+'K';else if(s==='M')v=(v/1e6).toFixed(d)+'M';return v+(el.dataset.suffix||'')}
  var co=new TrackedIO(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);if(reduce)return;var el=e.target,end=+el.dataset.count,t0=performance.now();
    (function f(t){var p=Math.min((t-t0)/1100,1);el.textContent=fmt(end*(1-Math.pow(1-p,3)),el);if(p<1)requestAnimationFrame(f)})(t0)})});
  root.querySelectorAll('[data-count]').forEach(function(el){co.observe(el)});

  

  var form=byId('form'),status=byId('status');
  form.onsubmit=function(e){e.preventDefault();var d=new FormData(form),bad=false;
    if(d.get('website'))return;
    form.querySelectorAll('.err').forEach(function(x){x.textContent=''});
    function chk(n,ok,m){if(!ok){form.querySelector('[data-for="'+n+'"]').textContent=m;if(!bad)form.elements[n].focus();bad=true}}
    chk('name',d.get('name').trim(),'Enter your name.');
    chk('email',/^\S+@\S+\.\S+$/.test(d.get('email').trim()),'Enter a valid email address.');
    chk('message',d.get('message').trim(),'Add a short message.');
    if(bad)return;
    var body=['Name: '+d.get('name'),'Company: '+d.get('company'),'Email: '+d.get('email'),'Campaign type: '+d.get('type'),'Budget: '+d.get('budget'),'Timeline: '+d.get('timeline'),'','Message:',d.get('message')].join('\n');
    location.href='mailto:avilanesangelheart@gmail.com?subject='+encodeURIComponent('Collaboration inquiry from '+d.get('name'))+'&body='+encodeURIComponent(body);
    status.hidden=false;status.textContent='Your email app should open with a draft. If it did not, write to avilanesangelheart@gmail.com directly. Nothing has been sent yet.';status.focus()};
})();

(function(){
var D={brands:brands,items:items},$=function(i){return byId(i)};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function lab(u){return /tiktok/.test(u)?'Watch on TikTok':/instagram/.test(u)?'View Instagram post':'View campaign'}
function css(v){return String(v==null?'':v).replace(/[^\w\s#%.,()\/-]/g,'')}
function fv(n){n=Number(n);if(!isFinite(n))return '';var t=n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?(n/1e3).toFixed(1)+'K':String(n);return t.replace('.0','')}
function linkCard(it){var pos=it.position?' style="object-position:'+esc(css(it.position))+'"':'';
  var im=it.thumbnailPath?'<img src="'+esc(it.thumbnailPath)+'" alt="'+esc(it.alt||it.title)+'" loading="lazy" decoding="async" draggable="false"'+(it.fit==='contain'?' class="fit-contain"':'')+pos+'>':'<span class="ph">Add a thumbnail</span>';
  return '<a class="mc lc" href="'+esc(it.postUrl)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(lab(it.postUrl)+': '+it.title+(it.views!=null?', '+fv(it.views)+' views':''))+'"'+(it.background?' style="background:'+esc(css(it.background))+'"':'')+'>'+im+
   (it.brand?'<span class="bd">'+esc(it.brand)+'</span>':'')+'<span class="vw"><span aria-hidden="true">▶</span> '+(it.views!=null?esc(fv(it.views)):'Watch')+'</span></a>'}
function card(it){if(it.postUrl&&!it.mediaPath&&it.mediaType==='video')return linkCard(it);var v=it.mediaType==='video',s=it.thumbnailPath||(v?'':it.mediaPath),m,pos=it.position?' style="object-position:'+esc(css(it.position))+'"':'';
  var rc=['portrait','square','landscape','tall','wide'].indexOf(it.ratio)>-1?' r-'+it.ratio:'';
  if(s)m='<img src="'+esc(s)+'" alt="'+esc(it.alt||it.title)+'" loading="lazy" decoding="async" draggable="false"'+(it.fit==='contain'?' class="fit-contain"':'')+pos+'>';
  else if(it.mediaPath)m='<video src="'+esc(it.mediaPath)+'#t=0.1" preload="metadata" muted playsinline aria-hidden="true"'+pos+'></video>';
  else m='<span class="ph">Media coming soon</span>';
  return '<button type="button" class="mc'+rc+'"'+(it.background?' style="background:'+esc(css(it.background))+'"':'')+' data-id="'+esc(it.id)+'" aria-label="Open: '+esc(it.title)+'">'+m+
   (it.mediaPath?'<span class="bd">'+(v?'Video':'Photo')+'</span>':'')+(v&&it.mediaPath?'<span class="pl" aria-hidden="true">▶</span>':'')+
   '<span class="cap">'+(it.brand||it.location?'<small>'+esc(it.brand||it.location)+'</small>':'')+esc(it.title)+'</span></button>'}
function note(s){return '<p class="empty" style="grid-column:1/-1">Nothing here yet. Add an item with section "'+s+'" in portfolio-data.ts.</p>'}
['onsite','instagram','modeling','cafe'].forEach(function(s){var l=D.items.filter(function(x){return x.section===s});$(s+'-grid').innerHTML=l.length?l.map(card).join(''):note(s);if(s==='modeling'||s==='cafe'){var se=$(s);if(se)se.hidden=!l.length}});
$('brandrow').innerHTML=D.brands.map(function(b){var n=D.items.filter(function(x){return x.brand===b}).length;return '<span class="bchip">'+esc(b)+(n?'<sup>'+n+'</sup>':'')+'</span>'}).join('');

var car=$('car'),dots=$('dots'),cf=$('cf'),cur='all',camp=D.items.filter(function(x){return x.section==='campaign'});
var L={all:'All',fashion:'Fashion',makeup:'Makeup',skincare:'Skincare',lifestyle:'Lifestyle',food:'Food',cafe:'Cafés',modeling:'Modeling'};
function mark(){var m=car.scrollWidth-car.clientWidth,k=m>0?Math.round(car.scrollLeft/m*(dots.children.length-1)):0;[].forEach.call(dots.children,function(d,i){d.classList.toggle('on',i===k);d.setAttribute('aria-current',i===k)})}
function draw(){var l=cur==='all'?camp:camp.filter(function(x){return x.category===cur});car.innerHTML=l.length?l.map(card).join(''):note('campaign');car.scrollLeft=0;
  var p=Math.max(1,Math.ceil(car.scrollWidth/car.clientWidth-.15));dots.innerHTML='';if(l.length&&p>1)for(var i=0;i<p;i++)(function(i){var b=document.createElement('button');b.className='dot';b.type='button';b.setAttribute('aria-label','Go to slide '+(i+1));b.onclick=function(){car.scrollTo({left:i/(p-1)*(car.scrollWidth-car.clientWidth),behavior:'smooth'})};dots.appendChild(b)})(i);mark()}
var cats=['all'];camp.forEach(function(x){if(cats.indexOf(x.category)<0)cats.push(x.category)});
cf.innerHTML='';if(cats.length>1)cats.forEach(function(c){var b=document.createElement('button');b.className='chip';b.type='button';b.textContent=L[c];b.setAttribute('aria-pressed',c==='all');
  b.onclick=function(){cur=c;[].forEach.call(cf.children,function(x){x.setAttribute('aria-pressed',x===b)});draw()};cf.appendChild(b)});
draw();listen(car,'scroll',mark,{passive:true});listen(window,'resize',draw);
$('prev').onclick=function(){car.scrollBy({left:-car.clientWidth*.8,behavior:'smooth'})};
$('next').onclick=function(){car.scrollBy({left:car.clientWidth*.8,behavior:'smooth'})};
var dn=false,sx=0,sl=0,mv=false;
listen(car,'pointerdown',function(e){if(e.pointerType!=='mouse')return;dn=true;mv=false;sx=e.clientX;sl=car.scrollLeft});
listen(window,'pointermove',function(e){if(!dn)return;var d=e.clientX-sx;if(Math.abs(d)>5){mv=true;car.classList.add('drag')}car.scrollLeft=sl-d});
listen(window,'pointerup',function(){dn=false;car.classList.remove('drag')});
listen(car,'click',function(e){if(mv){e.stopPropagation();e.preventDefault();mv=false}},true);

var lb=$('lb'),lbm=$('lbm'),lbi=$('lbi'),last=null;
function open(it){last=document.activeElement;var v=it.mediaType==='video',s=it.thumbnailPath||(v?'':it.mediaPath);
  lbm.innerHTML=v&&it.mediaPath?'<video src="'+esc(it.mediaPath)+'"'+(s?' poster="'+esc(s)+'"':'')+' controls playsinline preload="metadata"></video>':s?'<img src="'+esc(s)+'" alt="'+esc(it.alt||it.title)+'">':'<div class="ph" style="position:static;min-height:240px">Media coming soon</div>';
  var meta=[it.date,it.views!=null?Number(it.views).toLocaleString()+' views':'',it.likes!=null?Number(it.likes).toLocaleString()+' likes':''].filter(Boolean).join(' · ');
  lbi.innerHTML='<button type="button" id="lbx" class="ar" aria-label="Close preview">✕</button>'+(it.brand?'<p class="kicker">'+esc(it.brand)+'</p>':'')+'<h3>'+esc(it.title)+'</h3>'+(it.location?'<p class="small">'+esc(it.location)+'</p>':'')+(it.description?'<p>'+esc(it.description)+'</p>':'')+(meta?'<p class="small">'+esc(meta)+'</p>':'')+(it.postUrl?'<a class="btn main" href="'+esc(it.postUrl)+'" target="_blank" rel="noopener noreferrer">'+lab(it.postUrl)+'</a>':'');
  lb.hidden=false;document.body.style.overflow='hidden';$('lbx').focus()}
function close(){if(lb.hidden)return;lbm.innerHTML='';lb.hidden=true;document.body.style.overflow='';if(last&&last.focus)last.focus()}
listen(document,'click',function(e){var t=e.target;if(t===lb||(t.closest&&t.closest('#lbx')))return close();var c=t.closest&&t.closest('.mc');if(!c||c.classList.contains('lc'))return;var it=D.items.filter(function(x){return x.id===c.dataset.id})[0];if(it)open(it)});
listen(document,'keydown',function(e){if(e.key==='Escape')close()});

var tv=D.items.filter(function(x){return x.views!=null}).sort(function(a,b){return b.views-a.views}).slice(0,5);
if(tv.length){var te=$('topvids');te.className='mg';te.style.marginTop='12px';te.innerHTML=tv.map(card).join('')+'<p class="small" style="grid-column:1/-1;margin:0">Views are per video, not account-wide.</p>'}
var pm=$('postmetrics');if(pm&&analytics&&analytics.stats){pm.innerHTML=analytics.stats.map(function(s){return '<article class="metric"><p class="kicker">'+esc(s.label)+'</p><div class="n">'+esc(s.value)+'</div><p class="small">'+esc(s.caption||'From TikTok analytics.')+'</p></article>'}).join('');
  $('period').innerHTML=analytics.period?'Reporting period: '+esc(analytics.period)+' · '+esc(analytics.source):'<span class="tag">Reporting period not set</span> Add the dates for these figures in portfolio-data.ts so viewers know what they cover.'}
var A=analytics.audience||{};[['age','age'],['gender','gender'],['locations','locations'],['times','activeTimes']].forEach(function(p){var el=$('aud-'+p[0]);if(el&&A[p[1]])el.textContent=A[p[1]]});
var mo=analytics.monthly||[],vc=$('views-chart');
if(vc&&mo.length>1){var mx=Math.max.apply(null,mo.map(function(m){return m.views}));vc.className='';vc.innerHTML='<div style="display:flex;align-items:flex-end;gap:12px;margin-top:8px">'+mo.map(function(m){return '<div style="flex:1;text-align:center;font-size:.8rem"><div style="font-weight:600">'+Number(m.views).toLocaleString()+'</div><div style="background:var(--rose);border-radius:10px 10px 0 0;height:'+Math.max(4,Math.round(m.views/mx*150))+'px;margin:4px auto 0;max-width:56px"></div><div class="small">'+esc(m.label)+'</div></div>'}).join('')+'</div>'}
})();

    // Broken or missing images fall back to a labelled placeholder instead of a broken icon.
    function onImgErr(e) {
      const t = e.target;
      if (!t || t.tagName !== 'IMG') return;
      t.style.display = 'none';
      if (t.parentElement) t.parentElement.classList.add('img-missing');
    }
    listen(root, 'error', onImgErr, true);
    root.querySelectorAll('img').forEach(function (i) {
      if (i.getAttribute('src') && i.complete && i.naturalWidth === 0) onImgErr({ target: i });
    });
    return function () {
      cleanups.forEach(function (f) { f(); });
      observers.forEach(function (o) { o.disconnect(); });
      document.body.style.overflow = '';
    };
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: HTML }} />;
}