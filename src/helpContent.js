export const CHANGELOG = [
  {
    "date": "2026-11-02",
    "title": "srez first release",
    "items": [
      "Updated for Territorial.io 2.16.67.",
      "Includes automation, opening presets, shipping tools and a simplified toolbox."
    ]
  }
];

export const GUIDE = [
  {
    "id": "start",
    "title": "First steps",
    "html": "\n        <p>The site opens with the main client in the full view.</p>\n        <ul>\n          <li><strong>Tools</strong> (top-left) opens automation, opening presets, shipping, display and help.</li>\n          <li>Drag the Tools button or the toolbox header to move them.</li>\n          <li><kbd>F2</kbd> toggles Tools. <kbd>Esc</kbd> closes most panels.</li>\n        </ul>\n      "
  },
  {
    "id": "automation",
    "title": "Automation",
    "html": "\n        <p>Tools → Automation controls the current client.</p>\n        <ul>\n          <li><strong>All On / All Off</strong>: opening, infinite expansion and bot attack together.</li>\n          <li><strong>Opening / Infinite</strong>: toggle each strategy.</li>\n          <li><strong>Bot mode</strong>: Off, V20 Reserve, Land Max or Messiah.</li>\n          <li><strong>Bot send</strong>: percentage of troops used per bot attack.</li>\n          <li><strong>Bot rate</strong>: attacks per cycle.</li>\n        </ul>\n      "
  },
  {
    "id": "opening",
    "title": "Opening presets",
    "html": "\n        <p>Tools → Opening edits the opening strategy JSON and tick offset.</p>\n        <ul>\n          <li><strong>Validate</strong> checks the strategy without applying it.</li>\n          <li><strong>Apply &amp; Restart</strong> saves and restarts opening automation in-game without reloading.</li>\n          <li>Save, load and delete named presets. <strong>Load default</strong> restores the bundled strategy.</li>\n        </ul>\n        <p>FX Settings opens the full settings window; saving there reloads the page.</p>\n      "
  },
  {
    "id": "display",
    "title": "Display",
    "html": "\n        <ul>\n          <li>Spawn point names, name size, team tags and clan spawn highlighting.</li>\n          <li>Ship routes, duplicate IP highlighting, density display style and tick number.</li>\n          <li>Spawn markers are shown during spawn selection.</li>\n        </ul>\n      "
  },
  {
    "id": "shipping",
    "title": "Shipping",
    "html": "\n        <p>Tools → Shipping controls the ship tools.</p>\n        <ul>\n          <li><strong>Ship routes</strong>: draw route lines and troop badges.</li>\n          <li><strong>Ship progress</strong>: show a percentage next to each ship (independent of routes).</li>\n          <li><strong>Ship panel</strong>: show the panel under the left leaderboard.</li>\n          <li><strong>Auto recall blocked</strong>: recall my ship when a stronger enemy is ahead.</li>\n          <li><strong>Auto intercept</strong>: fire at eligible attackers automatically; the panel Auto checkbox is the same setting.</li>\n        </ul>\n        <p>The panel lists my ships with troops/progress and their attackers. Attacker names are red below 10% of my total troops, purple otherwise. The shield button on an attacker row queues an intercept.</p>\n        <p class=\"fx-help-tip\">Interception waits until the enemy is in the last 10% of its route and sends 105% of its troops; if my total troops are not enough it is skipped. The red X appears on my ship when a stronger enemy is on the path ahead.</p>\n      "
  },
  {
    "id": "chat",
    "title": "Lobby chat",
    "html": "\n        <p>The lobby chat input has a <strong>Unicode</strong> button next to Send. It converts the English letters, digits and punctuation in the box to fullwidth Unicode characters, then you press Send as usual.</p>\n        <p class=\"fx-help-tip\">The conversion is local; it only changes the text in the chat input. Emoji and non-ASCII text are left unchanged.</p>\n      "
  },
  {
    "id": "troubleshooting",
    "title": "Updates and troubleshooting",
    "html": "\n        <ul>\n          <li>The host page owns the service worker and the update prompt. If the UI looks stale, reload twice or clear site data for the page.</li>\n          <li>The build pins a verified game script. Do not run <code>npm run build</code> unless you are updating game compatibility.</li>\n        </ul>\n      "
  }
];
