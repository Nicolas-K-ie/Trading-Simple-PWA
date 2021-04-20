// Service Worker
// With this strategy the content is added on the fly , if the user doesn't go in the page it will be not cached

// Cache name
const pwaCache = "pwa-cache-1";

// Static assets to cache on install
const staticCache = [
  "/",
  "index.html",
  "/icons/icon-72.png", // In chrome, the manifest doesn'want of my icons but firefox yes
  "/icons/icon-96.png",
  "/icons/icon-128.png",
  "/icons/icon-144.png",
  "/icons/icon-152.png",
  "/icons/icon-180.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/calendar.html",
  "/comm1.html",
  "/comm2.html",
  "/comm3.html",
  "/comm4.html",
  "/comm5.html",
  "/comm6.html",
  "/comm7.html",
  "/commandments.html",
  "/contact.html",
  "/journal.html",
  "/js/journal.js",
  "/node_modules/chart.js/dist/Chart.js", //in case the user wants use the graph offline
  "/css/style.css",
  "/login.html",
  "/price.html",
  "/screener.html",
  "/img/thumb.png",
  "/img/calendar.png",
  "/img/chart.png",
  "/img/email.png",
  "/img/login.png",
  "/img/logo_colored.png",
  "/img/menu.png",
  "/img/notebook.png",
  "/img/path837.png",
  "/img/placeholder.png",
  "/img/radar.png",
  "/img/stones.png",
  "/img/star0.png",
  "/img/star1.png",
  "/img/star2.png",
  "/img/star3.png",
  "/data.json",
  "/eco.json",
  "/js/priceChart.js"

];
// SW fetch handler with different caching strategies
self.addEventListener("fetch", (e) => {
//4. Cache with Network Update
//   e.respondWith(
//     caches.open(pwaCache).then( (cache) => {
  
//       // Return from cache
//       return cache.match(e.request).then( (res) => {
  
//         // Update
//         let updatedRes = fetch(e.request).then( (newRes) => {
//           // Cache new response
//           cache.put(e.request, newRes.clone());
//           return newRes;
//         });
  
//         return res || updatedRes;
//       })
//     })
//   );
// });
  // 5. Cache & Network Race with offline content
  let firstResponse = new Promise((resolve, reject) => {

    // Track rejections
    let firstRejectionReceived = false;
    let rejectOnce = () => {
      if (firstRejectionReceived) {

        if (e.request.url.match('/img/thumb.png')) {
          resolve(caches.match('/img/placeholder.png'));
        } else {
          reject('No response received.')
        }
      } else {
        firstRejectionReceived = true;
      }
    };

    // Try Network
    fetch(e.request).then( (res) => {
      // Check res ok
      res.ok ? resolve(res) : rejectOnce();
    }).catch(rejectOnce);

    // Try Cache
    caches.match(e.request).then( (res) => {
      // Check cache found
      res ? resolve(res) : rejectOnce();
    }).catch(rejectOnce);

  });
  e.respondWith(firstResponse);
// 4. Cache with Network Update
  // e.respondWith(
  //   caches.open(pwaCache).then( (cache) => {
  //
  //     // Return from cache
  //     return cache.match(e.request).then( (res) => {
  //
  //       // Update
  //       let updatedRes = fetch(e.request).then( (newRes) => {
  //         // Cache new response
  //         cache.put(e.request, newRes.clone());
  //         return newRes;
  //       });
  //
  //       return res || updatedRes;
  //     })
  //   })
  // );

// SW install and cache static assets
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(pwaCache).then((cache) => cache.addAll(staticCache)));
  console.log("New cache ready.");
});

// SW Activate and cache cleanup
self.addEventListener("activate", (e) => {
  let cacheCleaned = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== pwaCache) return caches.delete(key);
    });
  });
  e.waitUntil(cacheCleaned);
})})
