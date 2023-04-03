'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/index": "64e5b25dc689ce2528dce712178462d6",
".git/COMMIT_EDITMSG": "8d3eb59044cbda1429cc896957c15e2f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "33fdbf07a4804e804234926542820a48",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/2a/a7828af0e5183bf2c3165eb10a65a4ca48d68d": "cba0b6f57bee4c6cf709d232f3e01eab",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/22/aa27a9a463b7d5e1f6271cb6bdf2ac62967a30": "f61e6f8cabd63b31cb5385d859baf5a0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/76/28f067291f3be70f480e67e8da0f4c41165ffa": "41ed5720f6b3e3b8bbce4cc4b1f678d9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/18/0d4b7af7557dc5c5a8da1aae73d74b0e6d26b2": "6c194ab049ea65e5fd6b9679e5594b46",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/d7/f7e69a5a9181f15a4ab89b5999b5018e6cb6fd": "77f55138992f099eec948a8b2a3ea1f3",
".git/objects/cd/7bd6004df5b2b01ff0431fa34dd1740667fff0": "15a2c63f3624d1efc3ff64f017b29771",
".git/objects/30/fc314eca7dbf56816af882a1d660947644fe3a": "381c812d81796527d891156006981a13",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/87/3f5465ffe6d9050543caf43d1a96f22e092810": "547fa3ebe5f5cdef1054751df69c6d9c",
".git/objects/87/89a547251ef1d53c92bbf222873bc194de8fd9": "0fcec6335b05dcecd72e92082f5aedfd",
".git/objects/35/b7c7f00c746d0cf543841ec6da6f2e4413205b": "665cc4f2728da1c668ffce258397a6cc",
".git/objects/77/a14ecfbd9ddcb1d4ae0320aa52664d644a6701": "3b8bb00e346feaf1356a9b1c1110f5b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e8/9b0b79a2910f0ac309a1845a9f733bcb568792": "7ad6d35ba087d81aa193a0d68c73e251",
".git/objects/9c/634f636c82209188b3ae1c76954d96118b7304": "c8ab59b155a6961a14d71cdc8b1fe4d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fb916944a1069275b3136d292a2568317927b2": "fe0f467e59a82dfc4a1d868167316712",
".git/objects/20/7ca012a81eda8f0f818c5a41208cb8cea851a4": "09e47634a1dca16d403782f7547b5ba3",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/50/85fee9d95c0dafd4f1d8582404a6300bd48cab": "e81051273556448d7c0666f06ea6a637",
".git/objects/50/1fe723686d84318d2ec202508fc80872208324": "dd0b5a8367202b13c779b3e07ad9ae86",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/5d/c2d3ad4bb5a74dde86877bb35b7ccbd10b9d4e": "1d76d51489439a5fa6f172e13d74613f",
".git/objects/3c/d47a0292ca724a605fcf1dd923eac1faff1ca6": "4a114f73579003d21568f9fd3db746f3",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/45/ee83d6c295b8ed0fda9f8152b10f82a8593dcb": "72e7d2f11b835c315e58b093f0ce6b99",
".git/objects/23/5b27568ea00002ce852407bc7905bb28f5624d": "507bced7e47807cdf8947ae2f2f5ced5",
".git/objects/80/6ee48ceb1b5b7d46c106dbc5c83f3a2a442953": "8c377c9f3f5e5fa1ccf7c6322ecf1bcb",
".git/objects/9d/007e95922f48112389472afbace4e465ae8b3c": "5450697947bf6da00943d75c953329ea",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c82d72833ebffa779afcaa25774f758de5fac4": "663a9e4ff00921bb1fd4561d6ac46ded",
".git/objects/31/37b999e3afc1c586944028afdbf4d23e12a37c": "411b4f10347ea8329eb935f2c99109c8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/00/43508aaa422701afcbeab7a1b014c5c1fd7a95": "71d9a5375400cc436652c9b96b0526fb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/05/4b9b506030f094cf14cdb69228c13ae1f85582": "ae897c34707e319017753705c7a51b50",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/logs/HEAD": "ee570d4040dda5ee3eedf194cd1a921e",
".git/logs/refs/heads/master": "524e1860d7ba3411d7b2c04faeaf88fa",
".git/logs/refs/remotes/origin/master": "03f78415c85b47e7adf0f2e1dfdd2458",
".git/refs/heads/master": "4b4946b2cdc897afef131df1dd6e3db3",
".git/refs/remotes/origin/master": "4b4946b2cdc897afef131df1dd6e3db3",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "0ccb5bd88f69fede77e41bd20e050c8f",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "e212f84086965da44a6c84f3d9a683a4",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "f018d93c4bd9b0bbdfb82ae61ebf8da4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "5bfdccef795165b1f9ab9a3193b2aca1",
"assets/assets/icons/app_store.svg": "b3585491d0c29eb6539856880e56cf59",
"assets/assets/icons/play_store.svg": "d6189119c763da3045991960f0fbe593",
"assets/assets/icons/apple.svg": "b739c88ae82171b55dd52b58b6345197",
"assets/assets/icons/loading.gif": "b87162bfea587d85a304df32cacb2bc2",
"assets/FontManifest.json": "739d28a220cddaab3c1a1093653dda34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "e3d034526b409a33c2172334c0fe158f",
"version.json": "009c9e65172e010890f7f65fde438006",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"splash/img/dark-2x.png": "fe414dcc20a6353efee8b8da747eaa4e",
"splash/img/light-1x.png": "020adbbc6a697c85ccf55fed3683addd",
"splash/img/light-3x.png": "bbcb2b88fad6e743e89ea46983c1fd19",
"splash/img/dark-1x.png": "020adbbc6a697c85ccf55fed3683addd",
"splash/img/light-4x.png": "4e8c4864d97b6192ac6b354d92c22cff",
"splash/img/dark-3x.png": "bbcb2b88fad6e743e89ea46983c1fd19",
"splash/img/light-2x.png": "fe414dcc20a6353efee8b8da747eaa4e",
"splash/img/dark-4x.png": "4e8c4864d97b6192ac6b354d92c22cff",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"index.html": "0a071b532784f93f2db4851d84ba0b4f",
"/": "0a071b532784f93f2db4851d84ba0b4f",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js": "b81ae8d7ea1d0413939d7f50e7f7d764"
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
