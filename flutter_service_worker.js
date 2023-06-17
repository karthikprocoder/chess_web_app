'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4a50081776f286d74a95d78d8310662c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "cc9d5e449501a8a7a68f37c4e06514a2",
".git/logs/HEAD": "54fc67372c769a77d15c24731731c5ac",
".git/logs/refs/remotes/origin/master": "67c58d2a3f891d34f8746f0ff6392d8d",
".git/logs/refs/heads/master": "54fc67372c769a77d15c24731731c5ac",
".git/index": "cee027d354bca4641c40167ac756083a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b2/946e0ee9e427d2a44133bb6f131b6a4e38e3ea": "3e78037371bd8da5a038e529841558aa",
".git/objects/69/d557910a3fb6f721d9c8ab7a30f9b2a1efa751": "defac977137b7ecab6fb11a81816fee3",
".git/objects/ff/aa5a4daf59a91bd01413b3da41ca04722ce7d8": "f592a3de790b585dce77b56ab9e2cfbf",
".git/objects/6c/b31174b2f87072eebb88fa758f952fcf60af1d": "0e096214cdb77eef2788c624bcdb1cf2",
".git/objects/6c/9225eea58cd25a98317b07e2166308570ccf9b": "f97560eccea495417a6ac3d9c0da84d6",
".git/objects/77/afcaa49abb3b98d58ee8a4a1f67545737c76b6": "91f68a1b107937c9a25efa2d8d78d1a0",
".git/objects/82/cce2158953c4e0047c3bb8cb5ecc3278bcee85": "e08a4b34673220b0d6a3587943994cad",
".git/objects/df/0e6ebca3dfd638b8f5182ffff9497352ecc11d": "5519dc64e8697a57d407ba47ed3db498",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/fe/9f78fa47ee605d378f0b67d8ac757cb607e9eb": "277b6b8f327472ce122a1b55f08e34f1",
".git/objects/25/242a5b2967ca02e347518458c0d2a1eac7449f": "b71e03197c0a140dab7384e5a3967e61",
".git/objects/ca/2948ff2e6a0141b24b148f76623972b7585958": "9c482d5a96065e5b1cdadf6112e19e66",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/9c/dc4bf9cb7396922b8a20bf0270596f0092fb42": "15e44ca253efd73b530c1fb37fd362f3",
".git/objects/51/795e9815fbf9cbbbe9b9ded2cc51cb3a2d43d7": "a687073003aadbef139880ac9793082d",
".git/objects/51/dd9957968951c0ce022d94cde90b09b7d0ec09": "b57ec3e1ca404485f3e72c6891c8294e",
".git/objects/45/3cb32355348ceadcc41e5c371130e7be1dc45e": "f6f8f80a7c411c6de99f6af1bea6e39a",
".git/objects/e5/15212e51645e3801477007c207168b9aeb3aa8": "4e72770c73e55e80da4eaf0fa21d02fb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/09/739ff4850475be350b81fcb7a720938574c6a8": "65412e9078353a65d4866ab01851d358",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a1/12bc5bb78dcd0ca8096c0fa63e114717eed40d": "b214ed25685659e92c803c42095dd702",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/0f/f3347ed3363bb1ee6e2e841da0fc363a37b615": "edb681436c17a8e65da43b5a309dede2",
".git/objects/0f/e64ecc4c3e16c11dfb29c33bb83b0d1ad435f3": "acd9ba023d5a071dae64441e1acadaf2",
".git/objects/0f/435042b2981f64ac30c3a8e96d9ee63c6a87b6": "0d6b3812a832a3ce3964d4cad3149598",
".git/objects/50/3ffa45ecd8022725486dd0cdea0d7a78eb6da8": "314a190297c80757b680a8031415599d",
".git/objects/e6/78ff7658d22cfc57c9276a914d52f2b1617b5e": "28c577b0d26924cf8f2fb94132d92e22",
".git/objects/c7/1b93fa57db7f501dfb97edf069b23ec056228a": "ee9c27c38dfe378fac857fb63d724140",
".git/objects/73/f7e9b502542770792d82883a0ff5a1101420fa": "95c562f2ddc64aa9397d4df75caf6766",
".git/objects/94/f8d650f256a6918a824862dd3d1393e94edb83": "7ede9b1204b8d2db9119bafb5a46fdb1",
".git/objects/15/19a6fd7328592afbea6c63a94455ded1864614": "244182463f7ebb2a41f1e1d072502148",
".git/objects/e2/d73bcc72559c001abb1072512df839bbf30b91": "acc5fc75167ed33f7ead0e130fa60e03",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f7/9cf1dcf7e7f8ab70852d3a86334fb0f018be37": "09f277f8323d4d51d733cc1be764d7e4",
".git/objects/49/959a0c0f2bf126cae645379b088647d56cbd69": "dd01e1f218a151d486f2b0aa0f40de86",
".git/objects/4f/e1c0e7adc917639948cd3d7d68bb6d3fb29976": "56f195e9dabb1b549932d3728062edaf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/4e/00c7a37a9920394327755edb5c55f4530b47aa": "ca984c9c07ba9bfd94bb2b365e7d7634",
".git/objects/cd/115d1c49cce76cfe8e02744b97b7b043f47d56": "011e4936534cad6f08566e59be41a926",
".git/objects/e0/6f7a991fe8ad4b86a272f90e4ae2a2c18a5ede": "ac82b4373454dcfca3d7f4bdeb5d24d8",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/55/fe9d10a37b7dcc6c6cb78fa2b98b4a1b6d0e94": "22631dd7c8ed98cccb6836b164a3f5ea",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/76/496fa3545fdd4c565525ae6b200611b8cdce48": "72f8895f57e0f981dd13b593d559a2f8",
".git/objects/ad/1b3f57f97edf4520cc03ce99d79c43decdc786": "af41594fb3baa6dca9448d723604f1be",
".git/objects/9b/7c32e0e1527b3ae9e9ad37fc2d027a9d850d1c": "fb3d8474aa4ffbf42f740c39663b6ba8",
".git/objects/20/3b8ee86dac4cf5fe466e2e00f321950098f16c": "d29b382abd01275be720bda264ffd588",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/62/190c034f31d42418e9df23e20ae7f4db845ea4": "3428b281106e400c832767fb68b36485",
".git/objects/0b/e69d0427ce4cb761a414b089a125006a77df29": "f370e7cb3a0fb14e4a9e61e19c591de2",
".git/objects/d0/3a5cd199e703ecfd7b8b4ebf2533f92d072976": "746db2123e90cc2f3f4398cfb95572da",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/c1/8a11aa3af201116786ed9cde6c70154184ac13": "b0fb15fe4e197d8f2278ee960f0f1727",
".git/objects/07/8370a3d94b7a594f7f372e2eebec2a188b08e9": "68b53cbedd538d339584b0ed2cce5a47",
".git/objects/67/dec0c1a2377af89bbfc1be1398465c7dabce92": "a012d36f53748bc7c3a7d137d256f137",
".git/objects/67/8fad1d191a70cb27c3e434ae1622adf25a3d10": "8ce625027cfd8fc690b70d2ad192f420",
".git/objects/2b/d4c3b9715efb035a3baee5703a63693d746601": "9a638ed144de51c3b1a8342d2e5f6049",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b4/bdfc2c06754208f5eb937e52fa7bd0dd451031": "31ac8aca4e788118640458ce3834c989",
".git/objects/a6/5a7c46f49bfcb62f07ab947caa1a4f92f4fe4d": "8db81ef14f2c05580194572cb1f98d16",
".git/objects/26/dae01cf054534b4f5c56ac60f334a7ab575f10": "6e4445819eaa3a78a20d7ae576ebbffb",
".git/objects/8f/b657f7612cb9442f0bfcf12b1c962cb46c7ac8": "f415c9dc5469951d689fcb6665f597b6",
".git/objects/47/0f0f56a24f87076e44d55e8a3a9cccc545ea19": "9f8d32cd138bf285f966076b5f580866",
".git/COMMIT_EDITMSG": "949d4bb6f708c3b773f558e827d9fc21",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/refs/remotes/origin/master": "f58193629fe6b7dae4f2c160d0e0212e",
".git/refs/heads/master": "f58193629fe6b7dae4f2c160d0e0212e",
"assets/lib/images/white-bishop.png": "c27e31d7d318892a14cadf96463a9482",
"assets/lib/images/white-queen.png": "1d62309d0ccbfaab56606efc24fec02b",
"assets/lib/images/black-pawn.png": "800d32248538595c71629477f6fd0261",
"assets/lib/images/white-king.png": "cdacd0011c84ca887f49ec0a69cacc90",
"assets/lib/images/black-king.png": "e1af0182ece5aec38ffce98900c3d698",
"assets/lib/images/black-rook.png": "5a1f36e848025302a012c08586e64942",
"assets/lib/images/black-bishop.png": "5e6a139ce814566a20a0fc6536841b4e",
"assets/lib/images/black-knight.png": "ec20e682dbf38f3f0200d30dde78b08e",
"assets/lib/images/white-rook.png": "0c86eacbc10f2788b35bd7c6fc01bbf9",
"assets/lib/images/black-queen.png": "2afa0995398fd2e7a2b8da9de5aadaf8",
"assets/lib/images/white-knight.png": "f7b5a14ac9e07bf2fbe2c3eb1b3cda46",
"assets/lib/images/white-pawn.png": "1468896ae1719efec4b07b01e29e331f",
"assets/assets/sounds/premove.mp3": "5ea6b79325eaec350d04c42c48806653",
"assets/assets/sounds/game-start.mp3": "a402c50e14d38e1abc1e392c7e49a62d",
"assets/assets/sounds/tenseconds.mp3": "a17222f26e20540dbe58f9a40ffab0dc",
"assets/assets/sounds/game-end.mp3": "267166c809a10aa72a1af82e79813534",
"assets/assets/sounds/notify.mp3": "1ca271535cc745b6facaff0c844c44de",
"assets/assets/sounds/promote.mp3": "6bc11a38e0ff1d5668a84241be594c4f",
"assets/assets/sounds/capture.mp3": "a2b149c4f98d37bd7863462fdc4539b0",
"assets/assets/sounds/castle.mp3": "b3cc873a1330cfc5334d80ab016dfe2f",
"assets/assets/sounds/move-self.mp3": "d9502a4de53f50cbb0147e25d2c172b2",
"assets/assets/sounds/move-check.mp3": "74550551237086437b3d4621d2a6bef8",
"assets/AssetManifest.bin": "8068715cd44d8e8bd75447ac5ff281ca",
"assets/AssetManifest.smcbin": "8068715cd44d8e8bd75447ac5ff281ca",
"assets/fonts/MaterialIcons-Regular.otf": "a77de83a20781a4e22e0c4c04220975f",
"assets/AssetManifest.json": "a4e2d879ad574144ed74e097cd4b8f45",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/NOTICES": "2ea23d754721f8cfd15b2bc0cc2c3f58",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"manifest.json": "3520935da8f1ce0355f3556599b1ee77",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "d054a2200608031218ac24ce4725487e",
"/": "d054a2200608031218ac24ce4725487e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "5e76ea9abf493358e15e6aa66bcadb5e"};
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
