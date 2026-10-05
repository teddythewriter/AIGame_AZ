'use strict';
const bank=[
  {
    "id": "padlock",
    "file": "01",
    "question": "What is securing this door?",
    "correct": "Padlock",
    "options": [
      "Padlock",
      "Doorbell",
      "Hinge",
      "Door knocker"
    ],
    "credit": "Maurijn Pach",
    "source": "https://www.pexels.com/photo/door-closed-with-padlock-in-close-up-546946/",
    "tier": "easy"
  },
  {
    "id": "whisk",
    "file": "02",
    "question": "Which utensil is in the foreground?",
    "correct": "Whisk",
    "options": [
      "Whisk",
      "Potato masher",
      "Strainer",
      "Tongs"
    ],
    "credit": "Pavel Danilyuk",
    "source": "https://www.pexels.com/photo/close-up-shot-of-a-whisk-6996346/",
    "tier": "medium"
  },
  {
    "id": "zipper",
    "file": "03",
    "question": "Which fastener is pictured?",
    "correct": "Zipper",
    "options": [
      "Zipper",
      "Hook-and-loop tape",
      "Buckle",
      "Press stud"
    ],
    "credit": "Dmitriy Steinke",
    "source": "https://www.pexels.com/photo/close-up-of-jeans-17720474/",
    "tier": "medium"
  },
  {
    "id": "owl",
    "file": "04",
    "question": "Which bird is pictured?",
    "correct": "Owl",
    "options": [
      "Owl",
      "Eagle",
      "Falcon",
      "Parrot"
    ],
    "credit": "Jean van der Meulen",
    "source": "https://www.pexels.com/photo/close-up-photo-of-an-owl-1526404/",
    "tier": "easy"
  },
  {
    "id": "pencil",
    "file": "06",
    "question": "Which writing instrument is pictured?",
    "correct": "Pencil",
    "options": [
      "Pencil",
      "Ballpoint pen",
      "Fountain pen",
      "Marker"
    ],
    "credit": "Creator unavailable in retrieved page",
    "source": "https://pixabay.com/close-up-macro-pencil-notebook-3054945/",
    "tier": "medium"
  },
  {
    "id": "keys",
    "file": "keys",
    "question": "What are these metal objects?",
    "correct": "Keys",
    "options": [
      "Keys",
      "Nails",
      "Screws",
      "Paper clips"
    ],
    "tier": "easy",
    "credit": "George Becker",
    "source": "https://www.pexels.com/photo/close-up-of-keys-333837/"
  },
  {
    "id": "pineapple",
    "file": "pineapple",
    "question": "Which fruit is pictured?",
    "correct": "Pineapple",
    "options": [
      "Pineapple",
      "Jackfruit",
      "Durian",
      "Dragon fruit"
    ],
    "tier": "easy",
    "credit": "Brett Sayles",
    "source": "https://www.pexels.com/photo/pineapple-fruit-near-pine-cones-1171174/"
  },
  {
    "id": "feather",
    "file": "feather",
    "question": "What is shown in this close-up?",
    "correct": "Feather",
    "options": [
      "Feather",
      "Fish scales",
      "Fabric",
      "Leaf"
    ],
    "tier": "hard",
    "credit": "Komal b",
    "source": "https://www.pexels.com/photo/macro-shot-of-vibrant-peacock-feather-close-up-36684028/"
  },
  {
    "id": "pinecone",
    "file": "pinecone",
    "question": "What are the brown objects on the moss?",
    "correct": "Pine cones",
    "options": [
      "Pine cones",
      "Walnuts",
      "Mushrooms",
      "Dried flowers"
    ],
    "tier": "medium",
    "credit": "Marian Florinel Condruz",
    "source": "https://www.pexels.com/photo/close-up-of-pine-cones-on-mossy-ground-30413660/"
  },
  {
    "id": "mushroom",
    "file": "mushroom",
    "question": "What is growing on the forest floor?",
    "correct": "Mushrooms",
    "options": [
      "Mushrooms",
      "Pine cones",
      "Acorns",
      "Stones"
    ],
    "tier": "medium",
    "credit": "Aleksandr Gorlov",
    "source": "https://www.pexels.com/photo/close-up-of-mushroom-13545633/"
  },
  {
    "id": "brush",
    "file": "brush",
    "question": "What object is being held?",
    "correct": "Brush",
    "options": [
      "Brush",
      "Sponge",
      "Loofah",
      "Comb"
    ],
    "tier": "easy",
    "credit": "Greta Hoffman",
    "source": "https://www.pexels.com/photo/close-up-photo-of-a-person-holding-a-brown-cleaning-brush-9475694/"
  },
  {
    "id": "coffee",
    "file": "coffee",
    "question": "What are these brown objects?",
    "correct": "Coffee beans",
    "options": [
      "Coffee beans",
      "Cocoa beans",
      "Peanuts",
      "Raisins"
    ],
    "tier": "medium",
    "credit": "Jonathan Borba",
    "source": "https://www.pexels.com/photo/close-up-of-coffee-beans-26711792/"
  },
  {
    "id": "sunflower",
    "file": "sunflower",
    "question": "Which flower is pictured?",
    "correct": "Sunflower",
    "options": [
      "Sunflower",
      "Daisy",
      "Chrysanthemum",
      "Marigold"
    ],
    "tier": "hard",
    "credit": "Tom Fisk",
    "source": "https://www.pexels.com/photo/close-up-of-a-sunflower-19757421/"
  }
];
const $=s=>document.querySelector(s),app=$('#app'),dialog=$('#dialog'),KEY='beat-ai-scores-v2',AIKEY='beat-ai-recordings-v1';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function read(k,fallback){try{return JSON.parse(localStorage.getItem(k))??fallback}catch{return fallback}}
let scores=read(KEY,[]);if(!Array.isArray(scores))scores=[];scores=scores.filter(s=>s&&typeof s.name==='string'&&Number.isFinite(s.points)&&Number.isFinite(s.time));
let recordings=read(AIKEY,null),rounds=[],answers=[],idx=0,nick='',stage='start',timer,deadline,started,locked=false,elapsed=0,resultId='',mode='practice';
function validAI(a){return a&&bank.every(q=>a[q.id]&&q.options.includes(a[q.id].answer)&&['model','testedOn','rawResponse'].every(k=>typeof a[q.id][k]==='string'&&a[q.id][k].trim()))}
if(!validAI(recordings))recordings=null;
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function clear(){clearInterval(timer);timer=null}function badge(){$('#mode').textContent=mode==='practice'?'PRACTICE · SIMULATED AI':'RECORDED AI'}
function start(){clear();stage='start';mode=recordings?'recorded':'practice';badge();app.innerHTML=`<section class="start"><div><div class="eyebrow">HUMAN INSTINCT. MACHINE VISION.</div><h1>Think you can<br><span>beat the AI?</span></h1><p>Four photographs. One surprise prediction. Choose your answers before the clock runs out, then watch the showdown.</p><p class="note">${mode==='practice'?'Practice version: AI answers are simulated to demonstrate the game. These are not real model results.':'The AI answers were recorded beforehand. The game works entirely offline.'}</p></div><form class="entry" id="entry"><div class="steps"><div><strong>5</strong><span>quick rounds</span></div><div><strong>10s</strong><span>per answer</span></div><div><strong>500</strong><span>points to win</span></div></div><label for="nickname">Your nickname</label><input id="nickname" type="text" maxlength="20" placeholder="How should we call you?" autocomplete="off" required><button class="primary" id="play">Let’s play</button><p class="note">100 points per correct answer. Answering time breaks ties. Mouse or keys 1–4.</p><p class="note">13-photo pool · five different images per game. Difficulty labels are provisional.</p></form></section>`;$('#entry').onsubmit=async e=>{e.preventDefault();nick=$('#nickname').value.trim();if(!nick){$('#nickname').focus();return}$('#play').disabled=true;try{await Promise.all(bank.map(q=>new Promise((res,rej)=>{const im=new Image;im.onload=res;im.onerror=rej;im.src=`${q.file}.jpg`;})));begin()}catch{app.innerHTML='<h2>A photo could not load.</h2><p>Keep the photos folder beside index.html, then reopen the game.</p><button onclick="start()">Try again</button>'}}}
function aiFor(q){if(mode==='recorded')return recordings[q.id].answer;return ['whisk','zipper'].includes(q.id)?bank.find(x=>x.id===q.id).options[1]:q.correct}
function selectRound(){const easy=shuffle(bank.filter(q=>q.tier==='easy')).slice(0,2),medium=shuffle(bank.filter(q=>q.tier==='medium')).slice(0,1),hard=shuffle(bank.filter(q=>q.tier==='hard')).slice(0,1);const four=shuffle([...easy,...medium,...hard]);return [...four,shuffle(bank.filter(q=>!four.includes(q)))[0]]}
function begin(){clear();rounds=selectRound().map(q=>({...q,options:shuffle(q.options)}));answers=[];idx=0;elapsed=0;stage='countdown';let n=3;app.innerHTML=`<div class="center"><div class="eyebrow">READY, ${esc(nick)}?</div><div class="count" id="count">3</div><p>Look closely. You have ten seconds.</p></div>`;timer=setInterval(()=>{n--;if(n===0){clear();showRound()}else $('#count').textContent=n},800)}
function showRound(){clear();stage='question';locked=false;const q=rounds[idx],bonus=idx===4;app.innerHTML=`<div class="roundtop"><span class="eyebrow">${bonus?'SURPRISE ROUND':'PERCEPTION ROUND'} · ${idx+1} / 5</span><span class="timer" id="seconds">10<span class="note">s</span></span></div><div class="track"><div id="bar" style="width:100%"></div></div><section class="arena"><div class="photo"><img src="${q.file}.jpg" alt="Challenge photograph"></div><div class="question"><div class="eyebrow">${bonus?'PREDICT THE '+(mode==='practice'?'SIMULATED ':'')+'AI':''}</div><h2>${bonus?'Did the AI get this right?':q.question}</h2>${bonus?`<p>The correct answer is <strong>${esc(q.correct)}</strong>.<br>Did the ${mode==='practice'?'simulated':'recorded'} AI identify it correctly?</p>`:''}<div class="answers">${(bonus?['Yes, it got it right','No, it got it wrong']:q.options).map((x,i)=>`<button class="answer" data-index="${i}"><span class="key">${i+1}</span>${esc(x)}</button>`).join('')}</div><p class="feedback" aria-live="polite" id="feedback">Choose one answer.</p></div></section>`;document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>answer(+b.dataset.index));started=performance.now();deadline=started+10000;timer=setInterval(()=>{const left=Math.max(0,deadline-performance.now());$('#seconds').innerHTML=Math.ceil(left/1000)+'<span class="note">s</span>';$('#bar').style.width=left/100+'%';if(left<=0)answer(null)},50)}
function answer(choice){if(stage!=='question'||locked)return;if(performance.now()>=deadline)choice=null;locked=true;clear();const q=rounds[idx],bonus=idx===4,ai=aiFor(q),value=choice===null?null:bonus?choice===0:q.options[choice],correct=choice!==null&&(bonus?value===(ai===q.correct):value===q.correct);elapsed+=Math.min(10000,performance.now()-started);answers.push({q,ai,value,correct,bonus});document.querySelectorAll('.answer').forEach(b=>{b.disabled=true;if(+b.dataset.index===choice)b.classList.add('locked')});$('#feedback').textContent=choice===null?'Time’s up. Next round…':'Answer locked. Save it for the showdown.';timer=setTimeout(()=>{idx++;idx<5?showRound():showdown(0)},650)}
function showdown(n){clear();stage='reveal';const a=answers[n];if(!a){finish();return}app.innerHTML=`<section class="arena reveal"><div class="photo"><img src="${a.q.file}.jpg" alt="${esc(a.q.correct)}"></div><div><div class="eyebrow">THE SHOWDOWN · ${n+1} / 5</div><h2>${esc(a.q.correct)}</h2><div class="comparison"><div class="scorebox"><span>${a.bonus?'YOUR PREDICTION':'YOU'}</span><strong class="${a.correct?'ok':'bad'}">${a.correct?'+100':'0'}</strong><span>${a.value===null?'No answer':a.bonus?a.value?'AI gets it right':'AI gets it wrong':esc(a.value)}</span></div><div class="scorebox"><span>${mode==='practice'?'SIMULATED AI':'RECORDED AI'}</span><strong class="${a.ai===a.q.correct?'ok':'bad'}">${a.ai===a.q.correct?'Right':'Wrong'}</strong><span>${esc(a.ai)}</span></div></div><p>${a.bonus?'Predicting the AI is a different skill from recognising the image.':'Correct answer: '+esc(a.q.correct)}</p><p class="note">${mode==='practice'?'Practice result only — no real AI was tested.':esc(recordings[a.q.id].model)+' · '+esc(recordings[a.q.id].testedOn)}</p><button id="next">${n===4?'See my score':'Next reveal'}</button><p class="note">Continues automatically in 4 seconds.</p></div></section>`;$('#next').onclick=()=>showdown(n+1);timer=setTimeout(()=>showdown(n+1),4000)}
function ranking(){return scores.filter(s=>s.mode===mode).sort((a,b)=>b.points-a.points||a.time-b.time)}
function table(){const all=ranking(),top=all.slice(0,10);return all.length?`<table class="board"><thead><tr><th>RANK</th><th>NICKNAME</th><th>POINTS</th><th>ANSWER TIME</th></tr></thead><tbody>${top.map((s,i)=>`<tr class="${s.id===resultId?'highlight':''}"><td>${i+1}</td><td>${esc(s.name)}</td><td>${s.points}</td><td>${(s.time/1000).toFixed(2)}s</td></tr>`).join('')}</tbody></table>`:'<p>The leaderboard is waiting for its first player.</p>'}
function saveScores(){try{localStorage.setItem(KEY,JSON.stringify(scores));return true}catch{return false}}
function finish(){clear();stage='result';resultId=Date.now()+'-'+Math.random();const points=answers.filter(a=>a.correct).length*100,human=answers.slice(0,4).filter(a=>a.correct).length,ai=answers.slice(0,4).filter(a=>a.ai===a.q.correct).length;scores.push({id:resultId,name:nick,points,time:elapsed,mode});const saved=saveScores(),position=ranking().findIndex(s=>s.id===resultId)+1;app.innerHTML=`<div class="center"><div class="eyebrow">${esc(nick)} · RANK #${position}</div><h2>${human>ai?'You take this round.':human===ai?'A tie. Sharp eyes on both sides.':'The AI takes this round.'}</h2><div class="bigscore">${points}<span class="note"> / 500</span></div><p>You ${human}/4 &nbsp; vs &nbsp; ${mode==='practice'?'simulated':'recorded'} AI ${ai}/4 · Prediction bonus ${answers[4].correct?100:0}</p><p class="note">${mode==='practice'?'Practice leaderboard · simulated AI results.':''} ${saved?'Saved on this browser.':'Browser storage unavailable. Scores last only while this page stays open; export them before closing.'}</p>${table()}<div class="actions"><button class="primary" id="again">Next player</button></div><p class="note">Returns to start in 25 seconds.</p></div>`;$('#again').onclick=start;timer=setTimeout(start,25000)}
function openDialog(content){$('#dialogBody').innerHTML=content;dialog.showModal()}
$('#creditsLink').onclick=()=>{if(['question','countdown','reveal'].includes(stage))return;openDialog(`<h2>Photo credits</h2><div class="credits">${bank.map(q=>`<p>${esc(q.correct)} · ${esc(q.credit)}<br><a href="${q.source}" target="_blank" rel="noopener">Source</a> · <a href="${q.id==='pencil'?'https://pixabay.com/service/license-summary/':'https://www.pexels.com/license/'}" target="_blank" rel="noopener">Licence</a></p>`).join('')}<p>Photographs displayed without cropping. Allianz-inspired colours; this prototype is not an official Allianz product.</p></div>`)};
$('#boardLink').onclick=()=>{if(['question','countdown','reveal'].includes(stage))return;openDialog(`<h2>${mode==='practice'?'Practice':'Booth'} leaderboard</h2>${table()}`)};
function download(name,data){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
$('#hostLink').onclick=()=>{if(['question','countdown','reveal'].includes(stage))return;openDialog(`<div class="host"><h2>Host settings</h2><p>Practice uses simulated answers. Import recorded results for all 13 images to enable booth mode. Do not label simulated results as genuine AI output.</p><button id="export">Export leaderboard</button><button id="template">Download AI template</button><p><a href="AI-testing.html" target="_blank" rel="noopener">Open guided ChatGPT testing</a></p><label for="import">Import recorded AI answers</label><input type="file" id="import" accept=".json"><p id="hostMsg" class="note"></p><button id="practice">Use practice mode</button><button id="reset">Clear leaderboard</button><p class="note">The 13-photo pool uses two easy, one medium and one harder candidate, then a prediction image. Trial difficulty before the convention. Host settings are not password protected.</p></div>`);$('#export').onclick=()=>download('beat-ai-leaderboard.json',scores);$('#template').onclick=()=>download('ai-recordings-template.json',Object.fromEntries(bank.map(q=>[q.id,{question:q.question,image:''+q.file+'.jpg',options:q.options,answer:'',model:'',testedOn:'',rawResponse:''}])));$('#import').onchange=async e=>{try{const a=JSON.parse(await e.target.files[0].text());if(!validAI(a))throw Error('Each image needs an answer from its options, model, test date and original response.');localStorage.setItem(AIKEY,JSON.stringify(a));recordings=a;dialog.close();start()}catch(err){$('#hostMsg').textContent='Could not import: '+err.message}};$('#practice').onclick=()=>{try{localStorage.removeItem(AIKEY)}catch{}recordings=null;dialog.close();start()};$('#reset').onclick=()=>{if(confirm('Delete all practice and booth scores from this browser? Export first if you need them.')){scores=[];saveScores();$('#hostMsg').textContent='Leaderboard cleared.'}}};
$('.close').onclick=()=>dialog.close();document.addEventListener('keydown',e=>{if(stage==='question'&&!dialog.open&&/^[1-4]$/.test(e.key)){const i=+e.key-1;if(i<(idx===4?2:4)){e.preventDefault();answer(i)}}});
if(document.modelContext?.registerTool)document.modelContext.registerTool({name:'get_game_status',description:'Read current game stage and leaderboard mode.',inputSchema:{type:'object',properties:{}},annotations:{readOnlyHint:true},execute:()=>({stage,mode,round:idx+1})});
start();
