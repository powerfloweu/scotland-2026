const map = L.map('trip-map').setView([56.5, -4.4], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:18}).addTo(map);

function dot(color,size){
  return L.divIcon({
    html:`<div style="background:${color};width:${size}px;height:${size}px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,.45)"></div>`,
    iconSize:[size,size],iconAnchor:[size/2,size/2],className:''
  });
}

const stops=[
  {lat:55.9508,lng:-3.3615,c:'#c07b28',s:16,l:'Edinburgh Airport',d:'Arrive midnight Apr 2/3 · Premier Inn · pick up car morning of Apr 3'},
  {lat:56.0552,lng:-3.6298,c:'#8c2020',s:14,l:'Culross',d:'Apr 3 · Historic medieval village · Outlander filming location · FREE'},
  {lat:56.7047,lng:-3.7350,c:'#1f5a8a',s:13,l:'Pitlochry — Macnaughtons & Amor Tweed',d:'Apr 3 · Heritage tweed shops on the A9 · Macnaughtons est. 1835'},
  {lat:56.7709,lng:-3.9293,c:'#1f5a8a',s:16,l:'House of Bruar',d:"Apr 3 · Scotland's premier tweed & cashmere store · Sale Barn for bargains · on A9"},
  {lat:56.7739,lng:-3.9343,c:'#24503e',s:13,l:'Falls of Bruar',d:'Apr 3 · Free gorge walk next to House of Bruar · 1–1.5 hrs'},
  {lat:56.1022,lng:-4.6362,c:'#24503e',s:13,l:'Luss — Loch Lomond',d:'Apr 6 afternoon stop on drive south · scenic'},
  {lat:56.6678,lng:-4.9866,c:'#6b3fa0',s:14,l:'Three Sisters Viewpoint',d:'Apr 4 · Harry Potter: Prisoner of Azkaban · FREE'},
  {lat:56.6540,lng:-4.9948,c:'#24503e',s:14,l:'Hidden Valley (Lost Valley)',d:'Apr 4 · Hike 2.5–3 hrs · FREE'},
  {lat:56.6646,lng:-5.0566,c:'#c07b28',s:13,l:'Ballachulish Hotel',d:'Apr 3–4 · 2 nights · loch & mountain views · FISH restaurant'},
  {lat:56.8762,lng:-5.4318,c:'#6b3fa0',s:16,l:'Glenfinnan Viaduct',d:'Apr 5 · Harry Potter: Hogwarts Express · arrive early!'},
  {lat:56.7969,lng:-5.0036,c:'#24503e',s:14,l:'Glen Nevis — Steall Falls',d:'Apr 5 · Gorge walk 2–3 hrs · FREE trail'},
  {lat:57.2739,lng:-5.5162,c:'#8c2020',s:16,l:'Eilean Donan Castle',d:'Apr 6 · Open 10am–3pm · book ahead · ~€12/person'},
  {lat:55.9441,lng:-3.1618,c:'#24503e',s:14,l:"Arthur's Seat",d:'Apr 8 · Edinburgh hike 2–3 hrs · FREE'},
  {lat:55.9467,lng:-3.1921,c:'#6b3fa0',s:13,l:'Greyfriars Kirkyard',d:'Apr 8 · Harry Potter · Tom Riddle gravestone · FREE'},
  {lat:55.9487,lng:-3.1948,c:'#1f5a8a',s:13,l:"W. Armstrong & Son — Vintage Tweed",d:"Apr 8 & 9 · Edinburgh's oldest vintage shop (1840) · Grassmarket · Harris Tweed from ~£45"},
  {lat:55.9490,lng:-3.1962,c:'#1f5a8a',s:13,l:'Tartan Weaving Mill',d:'Apr 8 · Right next to Edinburgh Castle · working looms · 5 floors of tweed & cashmere · FREE entry'},
  {lat:55.9486,lng:-3.1999,c:'#8c2020',s:14,l:'Edinburgh Castle',d:'Apr 8 · ~€21/person · book ahead'},
  {lat:55.9488,lng:-3.1956,c:'#c07b28',s:13,l:'The Witchery Restaurant',d:'Apr 8 · Farewell dinner · book ahead'},
];

stops.forEach(s=>{
  L.marker([s.lat,s.lng],{icon:dot(s.c,s.s)})
   .addTo(map)
   .bindPopup(`<strong>${s.l}</strong><br><span style="color:#666">${s.d}</span>`);
});

// Driving route — approximate waypoints
const route=[
  [55.9508,-3.3615],// Airport
  [56.0552,-3.6298],// Culross
  [56.1500,-3.5000],// M90 north
  [56.4000,-3.7000],// A9 north (Perth area)
  [56.7047,-3.7350],// Pitlochry
  [56.7709,-3.9293],// House of Bruar
  [56.5000,-4.2000],// A9/A85 west toward Glencoe
  [56.3800,-4.9000],// A82 north
  [56.6678,-4.9866],// Three Sisters
  [56.6540,-4.9948],// Hidden Valley
  [56.6646,-5.0566],// Glencoe hostel
  [56.8200,-5.1000],// Fort William area
  [56.8762,-5.4318],// Glenfinnan
  [56.8200,-5.1000],// back to Fort William
  [56.7969,-5.0036],// Glen Nevis
  [57.0000,-5.2000],// north via A87
  [57.2739,-5.5162],// Eilean Donan
  [57.0000,-5.1000],// south via A87
  [56.6678,-4.9866],// through Glencoe again
  [56.1022,-4.6362],// Luss stop overnight
  [55.9500,-3.2000],// Edinburgh
  [55.9441,-3.1618],// Arthur's Seat
  [55.9467,-3.1921],// Greyfriars
  [55.9486,-3.1999],// Edinburgh Castle
  [55.9508,-3.3615],// back to airport
];

L.polyline(route,{color:'#c07b28',weight:2.5,opacity:0.55,dashArray:'7 5'}).addTo(map);

// Legend
const leg=L.control({position:'bottomright'});
leg.onAdd=()=>{
  const d=L.DomUtil.create('div');
  d.style.cssText='background:white;padding:10px 13px;border-radius:8px;font-size:11px;font-family:sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.15);line-height:2;';
  d.innerHTML=[
    ['#c07b28','Hotel / Transport'],
    ['#6b3fa0','Harry Potter'],
    ['#24503e','Hiking / Nature'],
    ['#8c2020','Castle / History'],
    ['#1f5a8a','Tweed'],
  ].map(([c,l])=>`<div><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c};margin-right:6px;vertical-align:middle"></span>${l}</div>`).join('');
  return d;
};
leg.addTo(map);
