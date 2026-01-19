'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "df9425c15cfdc365352a3d02401c5cfe",
"version.json": "b20b91381a8059cc7e4cd10cd17cb6af",
"index.html": "6564de6b126dbd7a240445352e59d4f6",
"/": "6564de6b126dbd7a240445352e59d4f6",
"main.dart.js": "6860b16a33642cb49f3cd2556e9c86d0",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "122a207b6b2c4dcce8240cd1e65308eb",
"icons/Icon-192.png": "297014e096e6085cb9c8d72cfb091fa1",
"icons/Icon-maskable-192.png": "297014e096e6085cb9c8d72cfb091fa1",
"icons/Icon-maskable-512.png": "8657be61d41b4a10039db5c51cf947c5",
"icons/Icon-512.png": "8657be61d41b4a10039db5c51cf947c5",
"manifest.json": "bebac5c76846d20728c93d03aa75f060",
"assets/NOTICES": "48af332c1d19001358d3cf6049c5b286",
"assets/FontManifest.json": "7543db78433901846076836ffabcd9b3",
"assets/AssetManifest.bin.json": "fb8f7d6c6e58e5bad0839a43283348da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "1f32ec5b0f697374189f91fbe4c301de",
"assets/fonts/MaterialIcons-Regular.otf": "816e93d118d487f0cd96816f5c6d9a89",
"assets/assets/png/uya.png": "7850752bae4d15e80ad53d133a386b30",
"assets/assets/png/klikster.png": "83d01a721b7c9c143c3e936f1b5ebfa7",
"assets/assets/png/NWO.png": "ae590ec4c645a93ed0bb02bb41681b84",
"assets/assets/png/Navi_Mig.png": "481708cc0d964798b152a605a31acc65",
"assets/assets/png/TaxFilr.png": "40146fe9d06be4ea061cea5c063dde51",
"assets/assets/png/iDoor.png": "36cd1333955d00ad4b1c413f90b075d9",
"assets/assets/png/Vouch_Driver.png": "8fe3337aac8b0d7d49d17b9c207074ab",
"assets/assets/png/dotsignage.png": "311ff0f2f93365af2a734ed99d4ac0ec",
"assets/assets/png/logo1.png": "fd0475f8f1e0ebb89f6fa26c02c37f2f",
"assets/assets/png/logo.png": "82160e1defd90cf420e56ebb6109f2ce",
"assets/assets/png/apps_image/tf5.png": "e9687e04cf19aae80676d86a86dbb78a",
"assets/assets/png/apps_image/uya5.png": "2970aafedf0c069ab84bb804ce5d16bc",
"assets/assets/png/apps_image/nm2.png": "5c21e066dbf918a898388eeb51a485b8",
"assets/assets/png/apps_image/pr4.png": "faec73df183c476eadfb240e27b397ba",
"assets/assets/png/apps_image/nm3.png": "3b929375e13532a280883ddbde97351d",
"assets/assets/png/apps_image/uya4.png": "e2dad58f80a4e9c3dd60916155770d6e",
"assets/assets/png/apps_image/tf4.png": "0a717bc80b88b3c1e42e39fb619b2313",
"assets/assets/png/apps_image/tf6.png": "510d0f30b0f73104230f771af4732965",
"assets/assets/png/apps_image/uya6.png": "a37f170e305858959cd874134c2083fa",
"assets/assets/png/apps_image/nm1.png": "83bc956c2fc3af20867d3e5433d97f1f",
"assets/assets/png/apps_image/uya3.png": "e2513372e5b39d63d7d31332ef3bec53",
"assets/assets/png/apps_image/tf3.png": "078cd72757d657cf41aa50059973d325",
"assets/assets/png/apps_image/nm4.png": "96d1ebe82ed0ec60a8b078d7012c7def",
"assets/assets/png/apps_image/pr2.png": "b4c62d10d1af00d20359c1a4c69ae889",
"assets/assets/png/apps_image/pr3.png": "30ce496d04aeb14c1e0b77dd989efa3d",
"assets/assets/png/apps_image/tf2.png": "d68ec85a25a5d6b2385910766a4dd38e",
"assets/assets/png/apps_image/uya2.png": "23e505e939fc701b975f83ee0381ba74",
"assets/assets/png/apps_image/pr1.png": "21ba2a15b6c47cc011ab8fa7fd49c97b",
"assets/assets/png/apps_image/tf1.png": "573d462850509a8c7e96155117e2e1e3",
"assets/assets/png/apps_image/uya1.png": "a8fa9235024553eef6d17c230cc03536",
"assets/assets/png/apps_image/cb3.png": "b9c6f33f7ea87594e5845f57ade303bb",
"assets/assets/png/apps_image/kl1.png": "e0c9fcfaaa63ffdbe41d5697667537c1",
"assets/assets/png/apps_image/dp1.png": "251cecf81028a393dd10e46cdcee61d6",
"assets/assets/png/apps_image/cb2.png": "ce21feaecc6923d16c718bde70fd9349",
"assets/assets/png/apps_image/dp3.png": "89ad213313ba3c8e4019b3aae3467fb2",
"assets/assets/png/apps_image/kl2.png": "bb7fe0c82aae552a3a0b96cd4dad18b2",
"assets/assets/png/apps_image/kl3.png": "d52f538dfed4604a9b6f8476891b04fa",
"assets/assets/png/apps_image/dp2.png": "07b18dea8a2985c395098a6dadb56cc1",
"assets/assets/png/apps_image/cb1.png": "f3f6e6d0461fdebb3e14ebcc9334f1d2",
"assets/assets/png/apps_image/dp6.png": "e50b5a53aa4bfd40c3699b4be86af641",
"assets/assets/png/apps_image/kl7.png": "684e0a180f6e22020a8aba9f0fbdcde5",
"assets/assets/png/apps_image/kl6.png": "4a4537aa7887c3176897537a75bbdb82",
"assets/assets/png/apps_image/cb4.png": "689d0c894e9df45be5003c8b529237dc",
"assets/assets/png/apps_image/dp5.png": "787156e8655cff563e296a09f4fe403c",
"assets/assets/png/apps_image/kl4.png": "b05dddeea4d8a2ed53e5d940e26b6b29",
"assets/assets/png/apps_image/kl5.png": "24ed218e2ce70e4a363e54b2bf51c49f",
"assets/assets/png/apps_image/dp4.png": "1d13424c9644ec1d84a06a7097fd630a",
"assets/assets/png/apps_image/ds5.png": "af15bda33267107cbb4c3889a59f11ae",
"assets/assets/png/apps_image/kl8.png": "863e03b99f82b123ee97877eafe6c9eb",
"assets/assets/png/apps_image/ds4.png": "9c64d03e198b82eab87e6d71b097e179",
"assets/assets/png/apps_image/ds3.png": "1fb69b487441363da42ed484097c86a4",
"assets/assets/png/apps_image/ds2.png": "95dd21986c4361ace3154753d5cfc671",
"assets/assets/png/apps_image/ds1.png": "fdbf513cc88b3a84a7451e784a2ea376",
"assets/assets/png/apps_image/id2.png": "1175fb4062ccd70cfcc34d376d87bb74",
"assets/assets/png/apps_image/nw5.png": "cb924bb86c145f4dc7b8d8de1528e8a5",
"assets/assets/png/apps_image/nw4.png": "d6e67591a50c4bdda14a6d0d0f4d30ba",
"assets/assets/png/apps_image/id3.png": "b92f23c4cbba24318757542655351e7b",
"assets/assets/png/apps_image/id1.png": "95152904dcabd291a971e4aa899e28f6",
"assets/assets/png/apps_image/bm4.png": "f5575aac7813d7752816b22557bf5ec7",
"assets/assets/png/apps_image/nw3.png": "de2c398a1c9217f1d7f3aee357052501",
"assets/assets/png/apps_image/nw2.png": "0ec68971def297d258ed9b634f062cf4",
"assets/assets/png/apps_image/bm1.png": "409eafef6cc78bfbf6019a118dcc17c1",
"assets/assets/png/apps_image/bm3.png": "1d77dbfe3a74004715bb63691dce4eff",
"assets/assets/png/apps_image/nw1.png": "d1b4741ce173b14704c6b64c84d8b899",
"assets/assets/png/apps_image/bm2.png": "d39fa6a3ee2a5c166c00c4b72c37c878",
"assets/assets/png/dp.png": "a68866715f0d38a0db74bc61270c2ebe",
"assets/assets/png/Cranebrainz.png": "35c0f8e9c989220675d18801ce52b834",
"assets/assets/png/Priority_Report.png": "fbed7a3be8e85310d66d283b5034d07c",
"assets/assets/png/Bagel_Market.png": "f668612ddd596a73658edb34adecf398",
"assets/assets/gifs/stars.gif": "e9f15adefe7df38f40488fa514f5bb2f",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
