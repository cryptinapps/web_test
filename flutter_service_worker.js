'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "24cb2e3626c81512493e1d55e75d3d12",
"splash/img/light-background.png": "45199576e81635a334c434f6c1146f73",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "d427ebd72d2bad5b78875c0824c1b0e6",
"index.html": "dc35dfc3d5181ae282df6971d8b8dc1d",
"/": "dc35dfc3d5181ae282df6971d8b8dc1d",
"main.dart.js": "a8c2e3987ed0607c3c199e1af54eb684",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "660b8b0c9427deae2e3906294fd4ca8d",
"icons/Icon-192.png": "2023d0edb95c03bc4d7e919a60e8c0b3",
"icons/Icon-maskable-192.png": "2023d0edb95c03bc4d7e919a60e8c0b3",
"icons/Icon-maskable-512.png": "242d375a741ae941b7ab3e7f41d0cfaa",
"icons/Icon-512.png": "242d375a741ae941b7ab3e7f41d0cfaa",
"manifest.json": "aab0c36da273801329580cd9506591f7",
"assets/AssetManifest.json": "69fa8439838fbaf046918f6e68a30cd4",
"assets/NOTICES": "393f916e619cc6be82a718132517686f",
"assets/FontManifest.json": "0f5480536f79e819f68386d6cf824824",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/ic_share.svg": "24f62a2299cd7829b4540039fffef3fc",
"assets/assets/images/adaptive_icon.png": "5e7102975c49a77a68bcd27b836e9fcb",
"assets/assets/images/ic_profile.svg": "799d7b43587c5fae0cbe875ca87eb472",
"assets/assets/images/bg_splash.png": "2cfad7e3866fb1333553dc92c659a59b",
"assets/assets/images/login_img.svg": "5516b3554a9020c005a695594e54146a",
"assets/assets/images/ic_privacy.svg": "2a53bcced4590ae7c1446820d76f861f",
"assets/assets/images/mail_sent.svg": "f4afdef773ea2b6b08f667fb4f5fe7bf",
"assets/assets/images/ic_home.svg": "1e565fe254a1b5033025c2a76c8a6cff",
"assets/assets/images/ic_premium.svg": "4525822dcd5b41ffcd4a08e1624754b0",
"assets/assets/images/ic_eth.svg": "70942041ee409fe9733101bce7a4e7a2",
"assets/assets/images/ic_about.svg": "0fc970db0da53acbe1ac1d0aa4011dec",
"assets/assets/images/placeholder_large.png": "25487b994e1ffa56d1b5de55ea6faafe",
"assets/assets/images/ic_plans.svg": "3a024f7a8c31aaed74fe7d682faa914a",
"assets/assets/images/placeholder.png": "e358d81acbc9fcf3e7b2ace28bea72e8",
"assets/assets/images/ic_add_img.svg": "b5e5155b3c0d0557be595993c5716884",
"assets/assets/images/ic_matic.svg": "7d2465b1a0271be1120e0e972db1d60b",
"assets/assets/images/logo.png": "9dea600163cf6ca0e7847f4448744bf5",
"assets/assets/images/logo_only.png": "313dfa218e083653e1470fc75fbf664d",
"assets/assets/images/market_up.svg": "06e64900562b0b00e9d950b1427721b6",
"assets/assets/images/ic_wallet.svg": "7d4119a4c39c980468b2fb26b36488e5",
"assets/assets/images/ic_email.svg": "09449d8fee35bdc2e691975d29ac5fbc",
"assets/assets/images/profile_placeholder.jpeg": "c91163805026924c82593ebea2f5d064",
"assets/assets/images/ic_xrp.svg": "cd4458a1fba6d326a17064de36d0e0de",
"assets/assets/images/launcher_icon_android.png": "0b348b422dbc14185ff20ed7e028d4ce",
"assets/assets/images/ic_edit_profile.svg": "847429a354cba1609b73bc45b18afee6",
"assets/assets/images/launcher_icon.png": "ae16f01cfbdc2b78cfc5c82b76b6d2ae",
"assets/assets/images/ic_btc2.svg": "96e6ffa72c00522932647458dbcdc9b2",
"assets/assets/images/dotted_border.png": "40f79432cdc5c670afa0bfe1ed5229e9",
"assets/assets/images/ic_tether.svg": "7efb9729da9b39641762a51505e8fb6a",
"assets/assets/images/ic_fund.svg": "128f0d90ec4454079149234431ce352d",
"assets/assets/images/market_down.svg": "7d1c4d7c0db44e32eb984af227785f86",
"assets/assets/images/logo.svg": "5e3dcf29e9812cda3e20b3a56c0468fb",
"assets/assets/images/ic_telegram.svg": "53f9f0c1a3d2d21c2996dc0168b7c252",
"assets/assets/images/native_splash.png": "45199576e81635a334c434f6c1146f73",
"assets/assets/images/ic_featured.svg": "691b2144120abd297121742e729ad460",
"assets/assets/images/ic_logout.svg": "d19d51721b999cde18b4be2bd25cfb38",
"assets/assets/images/ic_api.svg": "63b8e610370c8896eaa601c36661c19d",
"assets/assets/images/ic_btc.svg": "b697e89c62864c6f420c439c940029d4",
"assets/assets/lottie/success.json": "e1bb1741df24cd6b3433f4081d09c2f9",
"assets/assets/fonts/ProximaNova-Semibold.otf": "f14eee643541cf03a10f26c944cc29f5",
"assets/assets/fonts/ProximaNova-Bold.otf": "187608336918c9f3d2d2fd47c86ea4d7",
"assets/assets/fonts/ProximaNova-Medium.otf": "4f1d4a561dd694e9b735dd47492dd5ac",
"assets/assets/fonts/ProximaNova-Regular.otf": "bf9f5d50c1b928ff21436517a1a95ad9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
