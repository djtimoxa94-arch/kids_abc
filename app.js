const DATA={
  letters:[
    {t:'А',w:'АРБУЗ',e:'🍉'},{t:'Б',w:'БАРАБАН',e:'🥁'},{t:'В',w:'ВИШНЯ',e:'🍒'},
    {t:'Г',w:'ГИТАРА',e:'🎸'},{t:'Д',w:'ДОМ',e:'🏠'},{t:'Е',w:'ЕНОТ',e:'🦝'},
    {t:'Ё',w:'ЁЖИК',e:'🦔'},{t:'Ж',w:'ЖИРАФ',e:'🦒'},{t:'З',w:'ЗЕБРА',e:'🦓'},
    {t:'И',w:'ИГОЛКА',e:'🪡'},{t:'Й',w:'ЙОГУРТ',e:'🥛'},{t:'К',w:'КОТ',e:'🐈'},
    {t:'Л',w:'ЛЕВ',e:'🦁'},{t:'М',w:'МЯЧ',e:'⚽'},{t:'Н',w:'НОС',e:'👃'},
    {t:'О',w:'ОБЛАКО',e:'☁️'},{t:'П',w:'ПЕТУХ',e:'🐓'},{t:'Р',w:'РЫБА',e:'🐟'},
    {t:'С',w:'СЛОН',e:'🐘'},{t:'Т',w:'ТОРТ',e:'🎂'},{t:'У',w:'УТКА',e:'🦆'},
    {t:'Ф',w:'ФЛАГ',e:'🚩'},{t:'Х',w:'ХЛЕБ',e:'🍞'},{t:'Ц',w:'ЦВЕТОК',e:'🌸'},
    {t:'Ч',w:'ЧАСЫ',e:'⌚'},{t:'Ш',w:'ШАРИК',e:'🎈'},{t:'Щ',w:'ЩЁТКА',e:'🪥'},
    {t:'Ъ',w:'ОБЪЕКТ',e:'📦',sp:1},{t:'Ы',w:'МЫЛО',e:'🧼',sp:1},
    {t:'Ь',w:'МЕДВЕДЬ',e:'🐻'},{t:'Э',w:'ЭКРАН',e:'📺'},
    {t:'Ю',w:'ЮБКА',e:'👗'},{t:'Я',w:'ЯБЛОКО',e:'🍎'},
  ],
  syllables:[
    {t:'МА',w:'МА-МА',e:'👩'},{t:'ПА',w:'ПА-ПА',e:'👨'},{t:'БА',w:'БА-БА',e:'👵'},
    {t:'ДА',w:'ДА-ЧА',e:'🏡'},{t:'КА',w:'КА-ША',e:'🍲'},{t:'РА',w:'РА-ДУ-ГА',e:'🌈'},
    {t:'ЛА',w:'ЛА-ПА',e:'🐾'},{t:'СА',w:'СА-НИ',e:'🛷'},{t:'ТА',w:'ТА-ЧКА',e:'🚜'},
    {t:'НА',w:'НА-ЧА-ЛО',e:'🌟'},{t:'МО',w:'МО-РЕ',e:'🌊'},{t:'КО',w:'КО-ШКА',e:'🐈'},
    {t:'ДО',w:'ДО-ЖДЬ',e:'🌧️'},{t:'РО',w:'РО-ЗА',e:'🌹'},{t:'ПО',w:'ПО-ЛЕ',e:'🌾'},
    {t:'СО',w:'СО-КОЛ',e:'🦅'},{t:'НО',w:'НОЖ',e:'🔪'},{t:'ЛО',w:'ЛОБ',e:'😊'},
    {t:'МУ',w:'МУ-ХА',e:'🪰'},{t:'КУ',w:'КУ-КЛА',e:'🪆'},{t:'ЛУ',w:'ЛУ-НА',e:'🌙'},
    {t:'РУ',w:'РУ-КА',e:'✋'},{t:'ТУ',w:'ТУ-ЧА',e:'⛈️'},{t:'ДУ',w:'ДУБ',e:'🌳'},
    {t:'МИ',w:'МИ-ШКА',e:'🧸'},{t:'НИ',w:'НИ-ТКА',e:'🧵'},{t:'РИ',w:'РИС',e:'🍚'},
    {t:'КИ',w:'КИТ',e:'🐋'},{t:'МЕ',w:'МЕД',e:'🍯'},{t:'НЕ',w:'НЕ-БО',e:'☁️'},
    {t:'РЕ',w:'РЕ-КА',e:'🏞️'},{t:'ЛЕ',w:'ЛЕС',e:'🌲'},{t:'ДЕ',w:'ДЕ-РЕ-ВО',e:'🌴'},
  ],
  words:[
    {t:'МАМА',e:'👩'},{t:'ПАПА',e:'👨'},{t:'БАБА',e:'👵'},{t:'КОТ',e:'🐈'},
    {t:'ПЁС',e:'🐕'},{t:'ДОМ',e:'🏠'},{t:'ЛЕС',e:'🌲'},{t:'РЫБА',e:'🐟'},
    {t:'ЛУНА',e:'🌙'},{t:'РУКА',e:'✋'},{t:'НОГА',e:'🦵'},{t:'РОЗА',e:'🌹'},
    {t:'МУХА',e:'🪰'},{t:'КУКЛА',e:'🪆'},{t:'НЕБО',e:'☁️'},{t:'РЕКА',e:'🏞️'},
    {t:'КАША',e:'🍲'},{t:'ЛАПА',e:'🐾'},{t:'НИТКА',e:'🧵'},{t:'РАДУГА',e:'🌈'},
    {t:'САНКИ',e:'🛷'},{t:'КОШКА',e:'🐱'},{t:'СОБАКА',e:'🐶'},
    {t:'МЕДВЕДЬ',e:'🐻'},{t:'ЯБЛОКО',e:'🍎'},
  ]
};
const BADGES=[
  {id:'letters_done',e:'🔤',name:'Знаток Букв',cond:s=>s.completed.includes('letters')},
  {id:'syllables_done',e:'📖',name:'Мастер Слогов',cond:s=>s.completed.includes('syllables')},
  {id:'words_done',e:'📚',name:'Читатель',cond:s=>s.completed.includes('words')},
  {id:'streak_3',e:'🔥',name:'Серия 3 дня',cond:s=>s.streak>=3},
  {id:'xp_100',e:'⭐',name:'Первая Сотня',cond:s=>s.xp>=100},
  {id:'xp_300',e:'🚀',name:'Суперзнайка',cond:s=>s.xp>=300},
];

// STATE — мигрируем из v10/v9
const KEY='abc_v11';
function def(){return{xp:0,robotName:'',unlocked:['letters'],completed:[],progress:{letters:0,syllables:0,words:0},badges:[],streak:0,lastPlayDate:null};}
let state;
try{
  const raw=localStorage.getItem(KEY)||localStorage.getItem('abc_v10_save')||localStorage.getItem('abc_v9_save');
  state=raw?Object.assign(def(),JSON.parse(raw)):def();
  state.progress=Object.assign({letters:0,syllables:0,words:0},state.progress);
}catch(e){state=def();}

let curLvl=null,curIdx=0,ans=null;

// TTS
let ruVoice=null,vReady=false,vPending=null;
function loadV(){
  const all=window.speechSynthesis?speechSynthesis.getVoices():[];
  if(!all.length)return;vReady=true;
  ruVoice=all.find(v=>v.lang==='ru-RU'&&v.localService)||all.find(v=>v.lang==='ru-RU')||all.find(v=>v.lang.startsWith('ru'))||null;
  if(vPending){_speak(vPending);vPending=null;}
}
if(window.speechSynthesis){speechSynthesis.addEventListener('voiceschanged',loadV);loadV();}
function _speak(t){try{speechSynthesis.cancel();setTimeout(()=>{const u=new SpeechSynthesisUtterance(t.replace(/-/g,' '));u.lang='ru-RU';u.rate=0.82;u.pitch=1.2;if(ruVoice)u.voice=ruVoice;speechSynthesis.speak(u);},90);}catch(e){}}
function speak(t){if(!window.speechSynthesis)return;if(!vReady){vPending=t;return;}_speak(t);}

// AUDIO
function snd(type){
  try{
    const ac=new(window.AudioContext||window.webkitAudioContext)();
    const tone=(f,d,dur=.35)=>{const o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.frequency.value=f;g.gain.setValueAtTime(.22,ac.currentTime+d);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+d+dur);o.start(ac.currentTime+d);o.stop(ac.currentTime+d+dur);};
    if(type==='ok'){tone(523,0);tone(659,.12);tone(784,.24);}
    else if(type==='no'){const o=ac.createOscillator(),g=ac.createGain();o.type='sawtooth';o.connect(g);g.connect(ac.destination);o.frequency.setValueAtTime(240,ac.currentTime);o.frequency.exponentialRampToValueAtTime(110,ac.currentTime+.35);g.gain.setValueAtTime(.2,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.35);o.start(ac.currentTime);o.stop(ac.currentTime+.35);}
    else if(type==='win'){tone(523,0,.45);tone(659,.18,.45);tone(784,.36,.45);tone(1047,.54,.45);}
    else if(type==='tap'){tone(440,0,.08);}
  }catch(e){}
}
function vib(p){try{navigator.vibrate&&navigator.vibrate(p);}catch(e){}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}

function updateStreak(){
  const today=new Date().toDateString(),yest=new Date(Date.now()-86400000).toDateString();
  if(state.lastPlayDate===today)return;
  state.streak=state.lastPlayDate===yest?state.streak+1:1;state.lastPlayDate=today;
}
function chkBadges(){let nb=null;BADGES.forEach(b=>{if(!state.badges.includes(b.id)&&b.cond(state)){state.badges.push(b.id);nb=nb||b;}});return nb;}
function renderBadges(){
  const p=document.getElementById('badges-panel');if(!p)return;
  const e=BADGES.filter(b=>state.badges.includes(b.id));
  p.innerHTML=e.length?'<div class="badges-title">Мои значки</div>'+e.map(b=>`<div class="badge-chip">${b.e} ${b.name}</div>`).join(''):'';
}

// STAR BURST
function burst(){
  const el=document.getElementById('star-burst');el.classList.remove('hidden');el.innerHTML='';
  const em=['⭐','🌟','✨','💫','🎉'];
  for(let i=0;i<14;i++){
    const s=document.createElement('div');s.className='star-p';s.textContent=em[i%em.length];
    const a=Math.random()*Math.PI*2,d=80+Math.random()*130;
    s.style.cssText=`--tx:translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px);left:50%;top:50%;animation-delay:${Math.random()*.2}s;`;
    el.appendChild(s);
  }
  setTimeout(()=>el.classList.add('hidden'),1100);
}

// MAP
function updateMap(){
  const {robotName,xp,streak,unlocked,completed,progress}=state;
  document.getElementById('robot-name-display').textContent=robotName;
  document.getElementById('xp-display').textContent=xp;
  document.getElementById('streak-display').textContent=streak;
  document.getElementById('robot-icon').textContent=xp>=300?'🚀':xp>=100?'🤖':'🦜';
  ['syllables','words'].forEach(id=>document.getElementById('isl-'+id).classList.toggle('locked',!unlocked.includes(id)));
  ['letters','syllables','words'].forEach(id=>{
    const el=document.getElementById('prog-'+id);if(!el)return;
    const done=progress[id]||0,total=DATA[id].length;
    if(completed.includes(id)){el.textContent='✅';el.style.display='block';}
    else if(done>0){el.textContent=`${done}/${total}`;el.style.display='block';}
    else{el.style.display='none';}
  });
  renderBadges();
}

function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function showMap(){if(curLvl!==null){state.progress[curLvl]=curIdx;save();}showScreen('screen-map');updateMap();}
function goMap(){snd('tap');vib([30]);showMap();}

function saveRobotName(){
  const v=document.getElementById('robot-name-input').value.trim();
  if(!v){alert('Введи имя! 🦜');return;}
  snd('tap');vib([50]);state.robotName=v;updateStreak();save();speak('Привет! Давай учиться!');showMap();
}

function startLevel(id){
  if(!state.unlocked.includes(id)){vib([100,50,100]);speak('Этот остров закрыт!');return;}
  curLvl=id;const sv=state.progress[id];
  curIdx=(Number.isFinite(sv)&&sv<DATA[id].length)?sv:0;
  updateStreak();save();showScreen('screen-game');showPhase('card');renderCard();
}

function renderCard(){
  const item=DATA[curLvl][curIdx];
  const ch=document.getElementById('card-char');
  ch.textContent=item.t;
  const L=item.t.length;
  ch.style.fontSize=L>=6?'2.6rem':L>=4?'4.2rem':L>=2?'5.5rem':'';
  document.getElementById('card-emoji').textContent=item.e;
  document.getElementById('card-word').textContent=item.w||'';
  const total=DATA[curLvl].length;
  document.getElementById('progress-tag').textContent=`${curIdx+1}/${total}`;
  document.getElementById('progress-fill').style.width=((curIdx+1)/total*100)+'%';
  state.progress[curLvl]=curIdx;save();
  const word=(item.w||'').replace(/-/g,' ');
  speak(curLvl==='words'?item.t:(word?`${item.t}... ${word}`:item.t));
}

function speakCurrent(){vib([30]);if(curLvl)renderCard();}
function showPhase(n){['card','quiz','feedback'].forEach(p=>document.getElementById('phase-'+p).classList.toggle('hidden',p!==n));}

function startQuiz(){
  snd('tap');vib([30]);
  const item=DATA[curLvl][curIdx];ans=item.t;
  const pool=DATA[curLvl].filter((_,i)=>i!==curIdx).map(x=>x.t).sort(()=>Math.random()-.5).slice(0,3);
  const opts=[...pool,item.t].sort(()=>Math.random()-.5);
  const qm={letters:'С какой буквы начинается слово? 🤔',syllables:'Найди нужный слог! 📖',words:'Что на картинке? 🖼️'};
  document.getElementById('quiz-prompt').textContent=qm[curLvl];
  document.getElementById('quiz-emoji').textContent=item.e;
  document.getElementById('quiz-options').innerHTML=opts.map(o=>{
    const c=o.length>=6?'xs':o.length>=4?'sm':'';
    return `<button class="opt-btn ${c}" onclick="checkAns(this,'${o}')">${o}</button>`;
  }).join('');
  showPhase('quiz');speak(qm[curLvl]);
}

function checkAns(btn,chosen){
  document.querySelectorAll('.opt-btn').forEach(b=>b.disabled=true);
  const ok=chosen===ans;
  document.querySelectorAll('.opt-btn').forEach(b=>{
    if(b.textContent===ans)b.classList.add('correct');
    if(b.textContent===chosen&&!ok)b.classList.add('wrong');
  });
  if(ok){snd('ok');vib([50]);state.xp+=10;burst();}
  else{snd('no');vib([120,60,120]);state.xp+=3;}
  const badge=chkBadges();save();
  setTimeout(()=>showFeedback(ok,badge),750);
}

function showFeedback(ok,badge){
  const pr=['Правильно!','Молодец!','Супер!','Отлично!','Умница!','Класс!'];
  document.getElementById('fb-icon').textContent=ok?'🎉':'💪';
  document.getElementById('fb-text').textContent=ok?pr[Math.random()*pr.length|0]:`Правильно: ${ans}`;
  let sub=ok?'+10 ⭐':'+3 ⭐';if(badge)sub+=`  ${badge.e}`;
  document.getElementById('fb-sub').textContent=sub;
  showPhase('feedback');speak(ok?pr[Math.random()*pr.length|0]:`Правильно: ${ans}`);
}

function nextStep(){
  snd('tap');vib([30]);
  if(curIdx<DATA[curLvl].length-1){curIdx++;state.progress[curLvl]=curIdx;save();showPhase('card');renderCard();}
  else{
    state.progress[curLvl]=0;
    if(!state.completed.includes(curLvl))state.completed.push(curLvl);
    if(curLvl==='letters'&&!state.unlocked.includes('syllables'))state.unlocked.push('syllables');
    if(curLvl==='syllables'&&!state.unlocked.includes('words'))state.unlocked.push('words');
    state.xp+=50;const badge=chkBadges();save();showVictory(badge);
  }
}

function replayLevel(){snd('tap');vib([30]);curIdx=0;state.progress[curLvl]=0;save();showScreen('screen-game');showPhase('card');renderCard();}

function showVictory(badge){
  const nm={letters:'Остров Букв',syllables:'Остров Слогов',words:'Город Слов'};
  document.getElementById('vic-icon').textContent='🏆';
  document.getElementById('vic-title').textContent=nm[curLvl]+' пройден!';
  document.getElementById('vic-xp').textContent='+50 ⭐ Бонус!';
  document.getElementById('vic-badge').innerHTML=badge?`<div class="new-badge">${badge.e} ${badge.name}!</div>`:'';
  showScreen('screen-victory');snd('win');vib([100,50,100,50,200]);speak('Ура! Молодец!');confetti();
}

function confetti(){
  const cv=document.getElementById('confetti-canvas'),ctx=cv.getContext('2d');
  cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;
  const W=cv.width,H=cv.height;
  const cols=['#FF6B6B','#FFE66D','#A8E6CF','#88D8EA','#FF8B94','#B388FF','#FFCC99'];
  const ps=Array.from({length:160},()=>({x:Math.random()*W,y:-20-Math.random()*120,w:Math.random()*14+5,h:Math.random()*8+4,c:cols[Math.random()*cols.length|0],vx:(Math.random()-.5)*6,vy:Math.random()*4+1.5,rot:Math.random()*360,rv:(Math.random()-.5)*10,op:1}));
  let t=0;
  (function draw(){
    ctx.clearRect(0,0,W,H);let alive=false;
    ps.forEach(p=>{if(p.op<=0)return;ctx.save();ctx.globalAlpha=p.op;ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.c;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();p.x+=p.vx+Math.sin(t*.03+p.y*.01)*.7;p.y+=p.vy;p.vy+=.06;p.rot+=p.rv;if(p.y>H*.72)p.op-=.02;if(p.op>0)alive=true;});
    t++;if(alive)requestAnimationFrame(draw);
  })();
}

if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
if(state.robotName){updateStreak();save();showMap();}
