const services=[['القضايا الجنائية','الدفاع والتمثيل القانوني في المسائل الجنائية.','تبدأ الخدمة بفهم الوقائع ومراجعة المستندات وتحديد الخيارات القانونية وفق طبيعة القضية.'],['القضايا المدنية','المنازعات والحقوق والالتزامات المدنية.','يُدرس موضوع النزاع والوثائق المتعلقة به لتحديد نطاق العمل والإجراءات المناسبة.'],['قضايا الأسرة','الاستشارات والخدمات القانونية المرتبطة بمنازعات الأسرة.','تُراعى خصوصية المعلومات وطبيعة العلاقة والوقائع عند دراسة الطلب.'],['تأسيس الشركات','المساعدة القانونية في إجراءات تأسيس الشركات.','تُراجع طبيعة النشاط والشكل القانوني والوثائق المطلوبة قبل تحديد الإجراءات.'],['تسجيل العلامة التجارية','الخدمات القانونية المرتبطة بتسجيل العلامات التجارية.','يُدرس طلب التسجيل والبيانات والمستندات ذات الصلة قبل تحديد الخطوات.'],['المحاكم الجزئية','الخدمات القانونية للقضايا أمام المحاكم الجزئية.','تُدرس طبيعة الدعوى والاختصاص والمستندات ذات الصلة.'],['قضايا النقض','دراسة الطعون بالنقض وفق الاختصاص والصفة المهنية.','تحتاج دراسة الطلب إلى مراجعة الأحكام والمستندات والمواعيد ذات الصلة.'],['الاستشارات القانونية','فهم الموقف القانوني والخيارات المتاحة.','تُحدد الاستشارة وفق موضوع الطلب والمعلومات التي يقدمها الموكل.']];
const $=s=>document.querySelector(s),list=$('#servicesList'),select=$('#type'),dlg=$('#detail');let current='';
services.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.className='service';
 b.innerHTML=`<span class="n">${String(i+1).padStart(2,'0')}</span><h3></h3><p></p><span class="more">تفاصيل الخدمة ←</span>`;
 b.querySelector('h3').textContent=s[0];b.querySelector('p').textContent=s[1];
 b.onclick=()=>{$('#dt').textContent=s[0];$('#dd').textContent=s[1];$('#extra').textContent=s[2];current=s[0];dlg.showModal()};
 list.append(b);select.add(new Option(s[0],s[0]))});
$('#search').oninput=e=>{let n=0;const q=e.target.value.trim();[...list.children].forEach((b,i)=>{const m=services[i].join(' ').includes(q);b.hidden=!m;if(m)n++});$('#empty').hidden=n>0};
$('.close').onclick=()=>dlg.close();
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
$('#request').onclick=()=>{if(current)select.value=current;dlg.close();location.hash='contact';setTimeout(()=>$('#name').focus({preventScroll:true}),300)};
const menu=$('.menu'),nav=$('#nav');
menu.onclick=()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')});
$('#booking').onsubmit=e=>{e.preventDefault();const v=id=>document.getElementById(id).value.trim();
 const text=`السلام عليكم، أرغب في طلب استشارة قانونية.\nالاسم: ${v('name')}\nرقم التواصل: ${v('phone')}\nالخدمة: ${v('type')}\nنبذة: ${v('msg')||'لم تُحدد'}`;
 const r=v('recipient');if(!['201011035059','201554535304'].includes(r))return;
 window.open('https://wa.me/'+r+'?text='+encodeURIComponent(text),'_blank','noopener,noreferrer')};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver'in window&&!reduce){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -40px'});
 document.querySelectorAll('.head,.cards,.steps li,.founder,.acc,.form,.branch,.statgrid').forEach(el=>{el.classList.add('reveal');io.observe(el)});
 const st=$('.stats');const so=new IntersectionObserver(es=>{if(!es.some(e=>e.isIntersecting))return;so.disconnect();const t0=performance.now(),ns=[...st.querySelectorAll('[data-count]')];
  (function tick(t){const p=Math.min(1,(t-t0)/950),k=1-Math.pow(1-p,3);ns.forEach(n=>n.textContent='+'+Math.round(n.dataset.count*k));if(p<1)requestAnimationFrame(tick)})(t0)},{threshold:.3});so.observe(st)}
