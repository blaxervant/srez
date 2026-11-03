function currentBuildVersion() {
  const script = Array.from(document.scripts).find((item) => /(^|\/)host\.bundle\.js\?\d+/.test(item.src));
  if (script) {
    try {
      const stamp = new URL(script.src, location.href).search.replace(/^\?/, "");
      if (stamp) return stamp;
    } catch (_error) {}
  }
  return String(Date.now());
}

const buildVersion = currentBuildVersion();

function frameUrl(page, extra = {}) {
  const url = new URL(page, location.href);
  url.searchParams.set("v", buildVersion);
  const hostParams = new URLSearchParams(location.search);
  for (const key of ["relay", "lang"]) {
    const value = hostParams.get(key);
    if (value !== null) url.searchParams.set(key, value);
  }
  for (const [key, value] of Object.entries(extra)) url.searchParams.set(key, value);
  return url.href;
}

async function forceReload() {
  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }
  } catch (_error) {}
  const url = new URL(location.href);
  url.searchParams.set("v", String(Date.now()));
  location.replace(url.href);
}

function requestFullscreen() {
  if (document.fullscreenElement !== null || !document.fullscreenEnabled) return;
  document.documentElement
    .requestFullscreen({ navigationUI: "hide" })
    .catch((error) => console.warn("Could not enter fullscreen mode:", error));
}

function getTopUrl() {
  return location.href.split("#")[0];
}

window.__fxHost = {
  music: null,
  requestFullscreen,
  forceReload,
  getTopUrl,
  tabMode: null,
};

const mainFrame = document.createElement("iframe");
mainFrame.id = "fxMainFrame";
mainFrame.title = "srez";
mainFrame.allow = "autoplay; fullscreen";
mainFrame.src = frameUrl("client.html", { host: "1" }) + (location.hash || "");
document.body.appendChild(mainFrame);

window.addEventListener("hashchange", () => {
  try {
    mainFrame.contentWindow.location.hash = location.hash;
  } catch (_error) {}
});

export { mainFrame, frameUrl, buildVersion };
