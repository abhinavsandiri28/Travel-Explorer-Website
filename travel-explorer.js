// ----- DATA: Scenic destinations with multiple photos -----
const DESTINATIONS = [
  {id:1,name:'Paris',country:'France',region:'europe',desc:'City of Light — iconic museums, cafes, and the Eiffel Tower.',photos:[
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60',
    'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
    'https://media.istockphoto.com/id/182911166/photo/cafe-in-paris.webp?a=1&b=1&s=612x612&w=0&k=20&c=mvmB8sgPj1jIfEc11LztfQfUnLSZS-EBqMdN6GqtxNY='
  ]},
  {id:2,name:'New York',country:'USA',region:'americas',desc:'The city that never sleeps — skyscrapers, Broadway, and Central Park.',photos:[
    'https://images.unsplash.com/photo-1543716091-a840c05249ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D',
    'https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.webp?a=1&b=1&s=612x612&w=0&k=20&c=_SUGlu3k3ciiBKDteysFjq20IFfMUrrMnmrgFQ9bdG8=',
    'https://images.unsplash.com/photo-1556807044-eaf2e0eecb6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyhttps://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60Y2h8MjB8fG5ld3lvcmt8ZW58MHx8MHx8fDA%3Dcom/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=60'
  ]},
  {id:3,name:'Tokyo',country:'Japan',region:'asia',desc:'Blend of ultramodern and traditional — sushi, shrines, neon-lit districts.',photos:[
    'https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW8lMjBjaXR5fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9reW8lMjBjaXR5fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1552444991-4e240da8ff8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9reW8lMjBjaXR5fGVufDB8fDB8fHww'
  ]},
  {id:4,name:'Cape Town',country:'South Africa',region:'africa',desc:'Stunning coastlines, Table Mountain, and vineyards.',photos:[
    'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1529528070131-eda9f3e90919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D',
    'https://media.istockphoto.com/id/2200922582/photo/highway-light-trails-leading-to-the-vibrant-lit-up-city-of-cape-town-at-night-south-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=yAl9TWc9VfGR-q5Stf1f1qodEG46nVCpDgHOWqhXnOw='
  ]},
  {id:5,name:'Sydney',country:'Australia',region:'oceania',desc:'Harbour city — Opera House, beaches, and wildlife experiences.',photos:[
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=60',
    'https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3lkbmV5fGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1697730224601-a3c867ac1886?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D'
  ]},
  {id:6,name:'Rio de Janeiro',country:'Brazil',region:'americas',desc:'Famous for Christ the Redeemer, Copacabana Beach, and Carnival.',photos:[
    'https://media.istockphoto.com/id/608540602/photo/aerial-panorama-of-botafogo-bay-rio-de-janeiro.webp?a=1&b=1&s=612x612&w=0&k=20&c=WdPWJurLe3mQP57is0X4ztU1vyDlZrco-V0DE3b-E_I=',
    'https://images.unsplash.com/photo-1551620832-e2af54f6f0b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJpbyUyMGRlJTIwamFuZWlyb3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww'
  ]},
  {id:7,name:'Rome',country:'Italy',region:'europe',desc:'Historic capital — Colosseum, Roman Forum, and Vatican City.',photos:[
    'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/622806180/photo/colosseum-in-rome-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=diwu8kQrIqc51Ae1Zn3kIBtvgRSc3pCwajTKV0KVRFw=',
    'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=60'
  ]},
  {id:8,name:'Dubai',country:'UAE',region:'asia',desc:'Luxury shopping, ultramodern architecture, and desert adventures.',photos:[
    'https://media.istockphoto.com/id/183371461/photo/city-lights-in-dubai-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=w1Ctywo-WPcV3ronyQDVCbwq5Hb2J1DI4QwSHsnnZwQ=',
    'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1YmFpfGVufDB8fDB8fHww'
  ]}
];






// ----- UI refs -----
const results = document.getElementById('results');
const searchInput = document.getElementById('searchInput');
const filterRegion = document.getElementById('filterRegion');
const quickList = document.getElementById('quickList');

// ----- render list -----
function renderList(items){
  results.innerHTML = '';
  if(items.length === 0){ results.innerHTML = '<p style="color:var(--muted)">No destinations found.</p>'; return }
  items.forEach(dest => {
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `
      <img src="${dest.photos[0]}" alt="${dest.name}" loading="lazy">
      <div class="info">
        <h3>${dest.name}, ${dest.country}</h3>
        <p>${dest.desc}</p>
        <div class="tags"><span class="tag">${dest.region.toUpperCase()}</span><span class="tag">Photos: ${dest.photos.length}</span></div>
      </div>`;
    el.addEventListener('click',()=>openModal(dest));
    results.appendChild(el);
  })
}

// ----- modal -----
const modal = document.getElementById('modal');
const gallery = document.getElementById('gallery');
const modalTitle = document.getElementById('modalTitle');
document.getElementById('closeModal').addEventListener('click',closeModal);
modal.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(); })

function openModal(dest){
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  modalTitle.textContent = `${dest.name}, ${dest.country}`;
  gallery.innerHTML = '';
  dest.photos.forEach(src=>{
    const img = document.createElement('img'); img.src = src; img.loading='lazy'; gallery.appendChild(img);
  })
}
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }

// ----- search & filter -----
function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  const region = filterRegion.value;
  const filtered = DESTINATIONS.filter(d=>{
    const matchQ = !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q);
    const matchR = !region || d.region===region;
    return matchQ && matchR;
  });
  renderList(filtered);
}
searchInput.addEventListener('input',applyFilters); filterRegion.addEventListener('change',applyFilters);

// ----- quick picks -----
function renderQuick(){
  quickList.innerHTML = '';
  DESTINATIONS.slice(0,3).forEach(d=>{
    const b = document.createElement('button');
    b.textContent = d.name; b.style.cssText='display:block;width:100%;text-align:left;padding:8px;border-radius:8px;margin-bottom:8px;background:transparent;border:1px solid rgba(255,255,255,0.03);color:inherit;cursor:pointer';
    b.addEventListener('click',()=>{searchInput.value = d.name; applyFilters();});
    quickList.appendChild(b);
  })
}

// ----- weather -----
const getWeatherBtn = document.getElementById('getWeather');
const cityInput = document.getElementById('cityInput');
const weatherBox = document.getElementById('weatherBox');
const wTemp = document.getElementById('wTemp');
const wDesc = document.getElementById('wDesc');
const wHum = document.getElementById('wHum');
const wWind = document.getElementById('wWind');
const wIcon = document.getElementById('wIcon');

const OPENWEATHER_API_KEY = 'e854d020b09aef279059333192f5af7b';

async function fetchWeather(city){
  if(!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY==='YOUR_OPENWEATHER_API_KEY'){
    alert('Please replace YOUR_OPENWEATHER_API_KEY in the code with your OpenWeatherMap API key to fetch real weather.');
    return;
  }
  try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${OPENWEATHER_API_KEY}`);
    if(!res.ok) throw new Error('City not found');
    const data = await res.json();
    wTemp.textContent = Math.round(data.main.temp) + '°C';
    wDesc.textContent = data.weather[0].description;
    wHum.textContent = data.main.humidity;
    wWind.textContent = data.wind.speed;
    wIcon.textContent = emojiForWeather(data.weather[0].main);
    weatherBox.style.display = 'block';
  }catch(err){
    alert('Weather fetch failed: ' + err.message);
  }
}

function emojiForWeather(main){
  const map = {Clear:'☀️', Clouds:'☁️', Rain:'🌧️', Drizzle:'🌦️', Thunderstorm:'⛈️', Snow:'❄️', Mist:'🌫️'};
  return map[main] || '🌤️';
}
getWeatherBtn.addEventListener('click',()=>{ const c = cityInput.value.trim(); if(c) fetchWeather(c); else alert('Enter a city name'); });

// ----- initial render -----
renderList(DESTINATIONS);
renderQuick();
