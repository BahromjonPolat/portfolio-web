'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "23c97a6fecf585f83faea568789a0bd1",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"favicon.png": "e08e92f5d6da922ba3dd8db8913619c6",
"icons/Icon-192.png": "55d739b921034e671c173ef408a3960b",
"icons/Icon-maskable-192.png": "55d739b921034e671c173ef408a3960b",
"icons/Icon-maskable-512.png": "3d6ba26cac4f61c00f74c4b65fc1859c",
"icons/Icon-512.png": "3d6ba26cac4f61c00f74c4b65fc1859c",
"main.dart.js": "5d1488a85f7875f02b6c08fc7828afa6",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c00941d6b6a95f03e0c0c3f9230c442a",
".git/config": "693f4a5667152838ed680fdcbd793d31",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "36bd946fabbae12a84aa901febfb847c",
".git/refs/remotes/origin/master": "36bd946fabbae12a84aa901febfb847c",
".git/COMMIT_EDITMSG": "1290673b3371fa7db7cf50a95e8a3520",
".git/index": "7a20bb05f0c1f1519a1927f2063a2231",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/ORIG_HEAD": "a5269666a842cc0bed136bb9be39a448",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "2b1a5f36ebe173ac9e3f3addbe9c3e2b",
".git/logs/refs/heads/master": "2b1a5f36ebe173ac9e3f3addbe9c3e2b",
".git/logs/refs/remotes/origin/master": "07fb5a01e092696e3e487bfce2409c24",
".git/objects/f3/285643820777cb4988b6ea7fc6bd43a89831da": "65d02aca055b9168cf0598970decb637",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/0f/49add00350877267bd6c57d6ffd45d54965516": "bf7f7e9b7ef7aeb665fe2387e20fa9d0",
".git/objects/34/245b00c981ba974de9b6bb9df1c23156ca5dd4": "aafd84ecf272d576d982c18d5a01bdea",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/46/94f0b4c7eb21826cbf46ea0c26e4ef1ceec862": "d993b2b4e80d71c94aa824205fe87076",
".git/objects/46/1168b53fa2977b5e6fa58399c09ed024133d8a": "919b31bf5a3540c837446a5ec657dc70",
".git/objects/44/9d346e99295be5573702b09a1a8505514de89c": "e101df4d5a3f9a68d4ac950902a44d6c",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/8b/5eb333d6526694928b026daf58fac325601d01": "941abaa0a552bd480c4a96bfaf45278e",
".git/objects/07/e5c5d519fd82b6c1cf363c9d4fc3af0089c44e": "c0561e043cf16007ba25d12b17e64b48",
".git/objects/9c/b3ad6ebc131b41db92232bdfe5e8ee54581060": "cb3e6931ecca8f4646475e19c5c36be0",
".git/objects/7e/f7777e80965ea9bbcb8dba4727fe998288bb04": "e2d5124c5e3f06f866854bab6c15de36",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/af/fa4b95b526d5157239270200fd75326b56bec4": "752f2de48b55296c348c257f87cd0553",
".git/objects/b9/b2ef2048842a812cb543e9852272dde019a97d": "47a606f7ce0234106646fbabb8ce48d9",
".git/objects/9e/537874472e63d6a018f13010db2e2482c61c48": "64d3505a84edc5a178808cb53d897060",
".git/objects/9e/92125d5b0b26ed3fba27b5923142a96da3b19f": "dc05a15a959fe4de9a00bc1ec0213d7e",
".git/objects/81/518ecd0b488b42eea6bb742f1c2a2661a3a479": "51fb6a881739267c314d4a3a7b756c4c",
".git/objects/81/e676625cad776a7ad2d0ab0affc097e7f06540": "841862203e112d58332b24d96dd9a7b2",
".git/objects/pack/pack-0fa0d5193c8e598a708c7d29490adafbd200e3c2.pack": "007b659204753d03ea12d2b659fbbc41",
".git/objects/pack/pack-0fa0d5193c8e598a708c7d29490adafbd200e3c2.idx": "44562b005be18d0dcff6393a3ac0f64b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/1e/7c15c2e0cd2b156a46c8827f5acfd52f582f26": "5fdb8d4e22072d389dbae29f2ce4cb3b",
".git/objects/cc/aba1a86ca13fa394bfc3fa511bc5be0a20bb18": "8cc46accc2a7993da7a897c24d70cdd6",
".git/objects/ff/945a7735779ab103ae2c34513fba7423d3828a": "edf1b9efd1d1f1b429d965d04d76053f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/41/1b127a240d9fc66f66eb1cb66eca3b825def38": "5602f649a6805e12d1eb67e8a3f27b5a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/4c/b4dd23579040aa25a35f7069006e43fbd67773": "ced9670471160621d3cd986b283f2e14",
".git/objects/3c/faa883298e72be33a56e3bf8c1ef19316b96f4": "320bf782e63f13bc1594cbc273f13fc0",
".git/objects/ca/c776675bd1419ecaeb6eaa6970916604795f05": "7319ecd644e842f722aa61fd37fe3233",
".git/objects/a6/05f7cc29b588b1e75d37d51ee99d0f4635d6fe": "6d3030a9bda7c4d121fb42038b8b8584",
".git/objects/7c/e734ba5565533824cdac915de6bbed05e97deb": "804097af01966ef6eb0cf83d25eee3c2",
".git/objects/31/9502abf2b1dd1cc2627dfd88cb9b90964f5565": "0f4fd68c12fc4a7f66a36ce4309acbd8",
".git/objects/3e/163ab7fcf9c9208bc2bf70bb2f80933ce2ba5d": "eeb7ab6fb798fa4c2f7332a55d3ed52e",
".git/objects/55/e0b1a5533e4d1474be0ed37b5c7935dafef6c0": "3b9f6458b5f87e624b965c0e632fdc16",
".git/objects/c9/c546f2bbd9494e349637cbc335679363a6e324": "fbd6f3def306757db5adb8cf89b992dd",
".git/objects/99/0c19c67da32d61d0fc88dd5e912b4e6729245d": "80c3ef1cd63749c70b03e28f80cebe8e",
".git/objects/ed/557f5c3222a3adb155e95eebec458143df73b5": "82bf5db93c2fe53e743e00397e4fe28c",
".git/objects/72/bcc3c521c7ea352f406eecc51e6c3cf2e9de03": "55e35407b00fe6123c17f5d4e5e5c130",
".git/objects/f5/42f383c9e2b11358a0acd8683551f48c6187ee": "bf190563591bf05643ac0edf3637588a",
".git/objects/87/6b69bc93d7bc2f47724669e0fc051dbf6f0fc1": "9404813ae2136667e167a09e9310f299",
".git/objects/26/2c9050304bb26c9719a3f0c8f476766c66d185": "869509eb6bccb09a14f16897c24514ab",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/b1/aab2dd04ffe34b74d868f8bd7baa0a9015ab83": "8c5da0f54672f79c1359812ca50a18ac",
".git/objects/f1/fd7842d698e1dac0d681e696284178d7773552": "7e3e989753d97095caee7b469717c83d",
".git/objects/d5/3a2655d4f29ceb524095b012210aafcd4d7d98": "ba97bffdd08c4024073c0cfef322a282",
".git/objects/5e/a9b960d288f77482d69cd79887788b927b9f2e": "3f362a050c2d6acf4b2a782dd2031075",
".git/objects/24/2b29e18c3f0359e74688583376dfe80e916b0b": "8f4fb422c0592f6cba362f360d72ce82",
".git/objects/dc/c19f65e765de67b5c9ec07b8e4d6470595f985": "c4b5cb881423a28f99e759787a0c5e0f",
".git/objects/eb/7433739a6d2c3f8e8f521271c77c7162e10f2d": "6e9c64ae982fd20b80d104ddf3e0be42",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/8e/4eda99e47d668ee901343cd0115e29d7a7eccc": "cb3fe1786a10d51cfdc508606377f3c9",
".git/objects/5a/e32abf28553804d82386cad58f55b42e26a4ea": "d06f8bb0b0a02e9e2f9406bccb3b533e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/65/7bba0204966dafceddba2afdfbf5f19067653a": "f145403690475cf8f42e4013ecf8f54b",
".git/objects/a9/2135ef4e4fd3146ba6494eeabc0de7cf0bd0a9": "b24689f65066fb34036534d40fd74f7f",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/9f/ae8222a0e99ca09cc19c7b04591450b94611bd": "e2835fddf5752b63588425719af1b184",
".git/objects/30/275679704cf7ad990e02b14b14ae5b45d48f79": "b163c7097c88250c99b3a0302f4c6f6d",
".git/objects/d8/7368a8a3afe952036202716236bb1d341f9940": "fa7e958d84a86751de4871a62002f83e",
".git/objects/50/1fe723686d84318d2ec202508fc80872208324": "dd0b5a8367202b13c779b3e07ad9ae86",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7ca012a81eda8f0f818c5a41208cb8cea851a4": "09e47634a1dca16d403782f7547b5ba3",
".git/objects/40/dbb719e1c64cda8431076bc2928ab5a26abff0": "07f1ce2760e5b9ec309a86d53b4c4d98",
".git/objects/98/db0f973e150507ba792d49ee9fd02c84397440": "bc077e6220d49ea7ae07fec33f918169",
".git/objects/b8/101895da16bab1b2e3f133c9ddee3e616aac61": "62d7a381bf2b321eaafa0007b056a16d",
".git/objects/b8/c306d917a69e623a3c223174e88e0a181a4d72": "263563aade9c70d69d793784ba96c944",
".git/objects/fd/e352b3c0a4a2b15ff8c61d7b6ec1ed01138245": "f68a2ab7a0aa4b7edaa17adce5916e67",
".git/objects/ac/3f7054b98904dda464cd3c3019e6bdb36fb9cd": "53113fbfd61937193c90a3864d693d3b",
".git/objects/84/dea5dc9de4fd870f5bea54932128e335de4b98": "05ef03e14a63f8d05d46ff850603d04e",
".git/objects/84/314ce333a9aab8f3093820eb58b99dfd2b5ea1": "79ccfea1d59847aba9311ce280d43c61",
".git/objects/71/b91779d3a30a102beb469c6465f114f28ba55b": "fb9072d22000edb6d3f9c224648bcb8b",
".git/objects/6d/a04df3b738fd2a7ce59135a71ade9ffd05392d": "2fb3cd37f5e39c8c12f775295a7d637c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/28486b104eb420efd9d3e09eb861e27b360df4": "2076c2964383e8e78bfeec32b8b84568",
".git/objects/28/47d432df094cd96c184a295ca81ccb017d3799": "60bd7709c1ae963180fea4594f3b0c27",
".git/objects/86/8f0623112401b921578e53b16aee0649a2ec99": "60d378aec9f8c600eba2d2cd7eabf672",
".git/objects/86/8384ce5b05a17b99f5fb76f9027b82cc973603": "a1dc73c64304303543bc1d6e6c625e8a",
".git/objects/80/23accf288284853598e92ff5c6029e935e1e26": "c5370ba4ea3080021ec9ab03009dd19e",
".git/objects/b3/267326de87426d922f894d02777b935d05b81f": "6b855eedc12779c2ef168bb3130efb02",
".git/objects/7d/d169466c126c72035ead9b7af538e2e2d83698": "3d45766e12884266e31282253915d00e",
".git/objects/89/87d800613f02363aa9fe6b59596642e25bca7d": "ff37c144fe9a1afa1189ab3e021558b2",
".git/objects/c2/30dffdcfb2aebe85797bfcafafb75bf48bd996": "48ccb52aa87902a59f9416b0c28f10e7",
".git/objects/76/28f067291f3be70f480e67e8da0f4c41165ffa": "41ed5720f6b3e3b8bbce4cc4b1f678d9",
".git/FETCH_HEAD": "14bfd09da234e6b30bad00d42ddff26a",
"Dockerfile": "04757ba2dd832519e34c5565bba06357",
"assets/AssetManifest.json": "4c0748f0291033d8c79a1d63bfb0441e",
"assets/AssetManifest.bin": "dcaebdbfd2c367f32a9a0a215f4ec1c4",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "3c9e93ee4d11e53f5b5d48cc0d8d90b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "99fbc87e1e60a978569b6ca9b6e256d1",
"assets/AssetManifest.bin.json": "6a6e8060020679c650f341b4668b7bb7",
"assets/fonts/MaterialIcons-Regular.otf": "0e01a1548a6c3deb7654646cb8b6916c",
"assets/FontManifest.json": "739d28a220cddaab3c1a1093653dda34",
"assets/assets/icons/linkedin.svg": "672306d0ea8f7bfcba1db3d492c0a87e",
"assets/assets/icons/github.svg": "3940d359d98749b1f2e3a3304511b787",
"assets/assets/icons/apple.svg": "b739c88ae82171b55dd52b58b6345197",
"assets/assets/icons/loading.gif": "b87162bfea587d85a304df32cacb2bc2",
"assets/assets/icons/facebook.svg": "d1ed5794f198bf1ecc2ec0a33bef32b0",
"assets/assets/icons/telegram.svg": "74893127b3eda0e588efb7f86f2f3fe9",
"assets/assets/icons/git.svg": "1140cd1c0bebac84da16864dfad787a5",
"assets/assets/icons/play_store.svg": "d6189119c763da3045991960f0fbe593",
"assets/assets/icons/windows.svg": "ed55e2d736ec5b554a268e908b092b36",
"assets/assets/icons/kotlin.svg": "936569dc1a36ee936f7a653101794533",
"assets/assets/icons/instagram.svg": "95987f5281bbf18aa2a7b09183b1ecc3",
"assets/assets/icons/app_store.svg": "b3585491d0c29eb6539856880e56cf59",
"assets/assets/icons/devices.svg": "2dfd12f7a682581c490587e1535abf65",
"assets/assets/files/Bahromjon-Polats-resume.pdf": "efa9ef5aed90b1ea88fceb3a10cd42c8",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "5bfdccef795165b1f9ab9a3193b2aca1",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "e212f84086965da44a6c84f3d9a683a4",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "f018d93c4bd9b0bbdfb82ae61ebf8da4",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"index.html": "41932fd3d42066e6d1e9185f44857cc0",
"/": "41932fd3d42066e6d1e9185f44857cc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
