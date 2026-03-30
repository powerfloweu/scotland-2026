# Wild Scotland — April 2–9, 2026

7-night road trip itinerary for 3 travellers: Budapest → Edinburgh → Scottish Highlands → Edinburgh.

**Route:** Edinburgh Airport → Culross → Pitlochry → House of Bruar → Glencoe → Glenfinnan → Glen Nevis → Eilean Donan Castle → Loch Lomond → Edinburgh

## Deploy to GitHub Pages

1. Create a new public repo named `scotland-2026`
2. Push this folder to the `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial itinerary"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/scotland-2026.git
   git push -u origin main
   ```
3. In the repo Settings → Pages → Source: **Deploy from branch** → `main` / `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/scotland-2026`

## File structure

```
scotland-2026/
├── index.html      ← main itinerary page
├── css/style.css   ← all styles (responsive + print)
├── js/map.js       ← Leaflet interactive map
└── README.md
```

No build step required — pure HTML/CSS/JS.
