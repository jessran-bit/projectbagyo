# Operation Bagyo - Online Edition

A 20-minute classroom simulation game for PROJECM covering Project Charter, WBS, Budgeting, and Risk Management.

## Deploy to GitHub Pages (5 minutes)

### Step 1: Create a GitHub repo
1. Go to [github.com](https://github.com) and log in
2. Click **New repository**
3. Name it: `bagyo-online` (or anything you like)
4. Set to **Public**
5. Click **Create repository**

### Step 2: Upload the files
1. On the new repo page, click **Add file → Upload files**
2. Drag ALL files from this folder:
   - `index.html`
   - `team.html`
   - `instructor.html`
   - `game-data.js`
   - `style.css`
3. Click **Commit changes**

### Step 3: Enable GitHub Pages
1. Go to **Settings** (in your repo)
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select `main` branch, folder `/root`
4. Click **Save**
5. Wait 1-2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/bagyo-online/`

---

## How to Run the Class Game

### Before class
- Deploy the site (takes 5 min, do it once)
- Write the 6 team links on the board or share via chat:
  - Team A: `https://your-site.github.io/bagyo-online/team.html?team=A`
  - Team B: `https://your-site.github.io/bagyo-online/team.html?team=B`
  - Team C: `https://your-site.github.io/bagyo-online/team.html?team=C`
  - Team D: `https://your-site.github.io/bagyo-online/team.html?team=D`
  - Team E: `https://your-site.github.io/bagyo-online/team.html?team=E`
  - Team F: `https://your-site.github.io/bagyo-online/team.html?team=F`
- Open instructor dashboard: `.../instructor.html`

### In class (20 minutes)
1. Divide 45 students into 6 groups (7-8 per group)
2. One student per group opens their team link
3. Click **Start Timer** on instructor dashboard
4. Teams complete Rounds 1, 2A, 2B, and 3 in sequence
5. Click **Show Final Scores** when done

### Same WiFi sync
The app uses BroadcastChannel API. If all devices are on the same WiFi network (or same computer), the instructor dashboard will show live team progress. If teams are on different networks, progress tracking won't sync - but scoring still works locally.

---

## Scoring Reference (Max 21 Points)

| Section | Points | What earns points |
|---------|--------|-------------------|
| Round 1A - Charter | 3 | 1 pt per field filled (WHAT, WHEN, HOW MUCH) |
| Round 1B - Priority Matrix | 2 | 1 pt all marked, 1 pt matches scenario exactly |
| Round 1C - Feasibility | 2 | 1 pt for 2+ checks, 1 pt if consistent with constraints |
| Round 2A - WBS Sort | 5 | Based on correct placements (12=5pts, 10=4pts, 8=3pts...) |
| Round 2B - Budget | 5 | 5pts if within PHP 1,900M-2,200M range, 3pts within 15%, 1pt any total |
| Round 3 - Anomaly | 4 | NEGOTIATE+PHP+constraint=4, NEGOTIATE+one=3, ACCEPT+PHP=2, any=1 |

---

## WBS Answer Key (Quick Reference)

**VALID tiles (8):**
1. Payload Integration - Level 2 Work Package - PHP 280M-340M
2. Satellite Assembly - Level 1 Major Deliverable - PHP 600M-750M
3. Ground Station Setup - Level 1 Major Deliverable - PHP 150M-200M
4. Launch Preparation - Level 2 Work Package - PHP 90M-130M
5. Software Development - Level 2 Work Package - PHP 200M-270M
6. Testing & Validation - Level 2 Work Package - PHP 120M-180M
7. Mission Operations - Level 1 Major Deliverable - PHP 400M-500M
8. Antenna Installation - Level 2 Work Package - PHP 60M-90M

**DISCARD tiles (4 red herrings):**
9. Team Lunch Budget
10. Morale & Wellness Program
11. Office Renovation
12. Social Media Campaign

---

## File Structure

```
bagyo-online/
├── index.html        # Landing page with all team links
├── team.html         # Team game screen (?team=A through ?team=F)
├── instructor.html   # Instructor dashboard
├── game-data.js      # All game content (scenarios, tiles, anomalies, scoring)
├── style.css         # Shared visual design
└── README.md         # This file
```

---

## Technical Notes

- **No server required** - fully static, works on GitHub Pages
- **State saved in browser** - teams can reload without losing progress
- **BroadcastChannel sync** - works on same WiFi; gracefully degrades if not available
- **Mobile friendly** - one student per team can use their phone
- **PHP currency throughout** - all budget figures in Philippine Pesos (Millions)
