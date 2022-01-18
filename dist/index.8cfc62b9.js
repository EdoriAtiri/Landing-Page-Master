// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jWVwA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _glideModularEsm = require("@glidejs/glide/dist/glide.modular.esm");
var _glideModularEsmDefault = parcelHelpers.interopDefault(_glideModularEsm);
const form = document.getElementById('form'), email = document.getElementById('email'), warning = document.getElementById('warning'), openMenu = document.getElementById('menu-open'), closeMenu = document.getElementById('menu-close'), nav = document.getElementById('navbar');
new _glideModularEsmDefault.default('.glide', {
    type: 'carousel',
    autoplay: 2500,
    startAt: 0,
    focusAt: 1,
    perView: 3,
    hoverpause: true,
    keyboard: true,
    breakpoints: {
        1000: {
            perView: 2
        },
        800: {
            perView: 1
        }
    }
}).mount({
    Controls: _glideModularEsm.Controls,
    Breakpoints: _glideModularEsm.Breakpoints,
    Autoplay: _glideModularEsm.Autoplay,
    Keyboard: _glideModularEsm.Keyboard
});
// check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        warning.style.opacity = 0;
        email.style.borderColor = 'limegreen';
        setTimeout(()=>{
            input.value = '';
            email.style.borderColor = '';
        }, 5000);
    } else {
        warning.style.opacity = 1;
        setTimeout(()=>{
            warning.style.opacity = 0;
        }, 5000);
    }
}
// Open Nav Bar
function slideOut() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'inherit';
    nav.classList.add('flyIn');
}
// Close Nav Bar
function slideAway() {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'inherit';
    nav.classList.remove('flyIn');
}
// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkEmail(email);
});
openMenu.addEventListener('click', slideOut);
closeMenu.addEventListener('click', slideAway);

},{"@glidejs/glide/dist/glide.modular.esm":"5Zk4m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Zk4m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swipe", ()=>swipe
);
parcelHelpers.export(exports, "Images", ()=>images
);
parcelHelpers.export(exports, "Anchors", ()=>anchors
);
parcelHelpers.export(exports, "Controls", ()=>controls
);
parcelHelpers.export(exports, "Keyboard", ()=>keyboard
);
parcelHelpers.export(exports, "Autoplay", ()=>autoplay
);
parcelHelpers.export(exports, "Breakpoints", ()=>breakpoints
);
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */ var defaults = {
    /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */ type: 'slider',
    /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */ startAt: 0,
    /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */ perView: 1,
    /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */ focusAt: 0,
    /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */ gap: 10,
    /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */ autoplay: false,
    /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */ hoverpause: true,
    /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */ keyboard: true,
    /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */ bound: false,
    /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */ swipeThreshold: 80,
    /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */ dragThreshold: 120,
    /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */ perTouch: false,
    /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */ touchRatio: 0.5,
    /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */ touchAngle: 45,
    /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */ animationDuration: 400,
    /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */ rewind: true,
    /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */ rewindDuration: 800,
    /**
   * Easing function for the animation.
   *
   * @type {String}
   */ animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',
    /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */ throttle: 10,
    /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */ direction: 'ltr',
    /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */ peek: 0,
    /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */ breakpoints: {
    },
    /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */ classes: {
        direction: {
            ltr: 'glide--ltr',
            rtl: 'glide--rtl'
        },
        slider: 'glide--slider',
        carousel: 'glide--carousel',
        swipeable: 'glide--swipeable',
        dragging: 'glide--dragging',
        cloneSlide: 'glide__slide--clone',
        activeNav: 'glide__bullet--active',
        activeSlide: 'glide__slide--active',
        disabledArrow: 'glide__arrow--disabled'
    }
};
/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */ function warn(msg) {
    console.error("[Glide warn]: " + msg);
}
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
var createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var get = function get1(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) return undefined;
        else return get1(parent, property, receiver);
    } else if ("value" in desc) return desc.value;
    else {
        var getter = desc.get;
        if (getter === undefined) return undefined;
        return getter.call(receiver);
    }
};
var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn = function(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */ function toInt(value) {
    return parseInt(value);
}
/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */ function toFloat(value) {
    return parseFloat(value);
}
/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */ function isString(value) {
    return typeof value === 'string';
}
/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */ function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}
/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */ function isNumber(value) {
    return typeof value === 'number';
}
/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */ function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */ function isUndefined(value) {
    return typeof value === 'undefined';
}
/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */ function isArray(value) {
    return value.constructor === Array;
}
/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */ function mount(glide, extensions, events) {
    var components = {
    };
    for(var name in extensions)if (isFunction(extensions[name])) components[name] = extensions[name](glide, components, events);
    else warn('Extension must be a function');
    for(var _name in components)if (isFunction(components[_name].mount)) components[_name].mount();
    return components;
}
/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */ function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
}
/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */ function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function(r, k) {
        r[k] = obj[k];
        return r[k], r;
    }, {
    });
}
/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */ function mergeOptions(defaults1, settings) {
    var options = _extends({
    }, defaults1, settings);
    // `Object.assign` do not deeply merge objects, so we
    // have to do it manually for every nested object
    // in options. Although it does not look smart,
    // it's smaller and faster than some fancy
    // merging deep-merge algorithm script.
    if (settings.hasOwnProperty('classes')) {
        options.classes = _extends({
        }, defaults1.classes, settings.classes);
        if (settings.classes.hasOwnProperty('direction')) options.classes.direction = _extends({
        }, defaults1.classes.direction, settings.classes.direction);
    }
    if (settings.hasOwnProperty('breakpoints')) options.breakpoints = _extends({
    }, defaults1.breakpoints, settings.breakpoints);
    return options;
}
var EventsBus = function() {
    /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */ function EventsBus1() {
        var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        classCallCheck(this, EventsBus1);
        this.events = events;
        this.hop = events.hasOwnProperty;
    }
    /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */ createClass(EventsBus1, [
        {
            key: 'on',
            value: function on(event, handler) {
                if (isArray(event)) for(var i = 0; i < event.length; i++)this.on(event[i], handler);
                // Create the event's object if not yet created
                if (!this.hop.call(this.events, event)) this.events[event] = [];
                // Add the handler to queue
                var index = this.events[event].push(handler) - 1;
                // Provide handle back for removal of event
                return {
                    remove: function remove() {
                        delete this.events[event][index];
                    }
                };
            }
        },
        {
            key: 'emit',
            value: function emit(event, context) {
                if (isArray(event)) for(var i = 0; i < event.length; i++)this.emit(event[i], context);
                // If the event doesn't exist, or there's no handlers in queue, just leave
                if (!this.hop.call(this.events, event)) return;
                // Cycle through events queue, fire!
                this.events[event].forEach(function(item) {
                    item(context || {
                    });
                });
            }
        }
    ]);
    return EventsBus1;
}();
var Glide = function() {
    /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */ function Glide1(selector) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        classCallCheck(this, Glide1);
        this._c = {
        };
        this._t = [];
        this._e = new EventsBus();
        this.disabled = false;
        this.selector = selector;
        this.settings = mergeOptions(defaults, options);
        this.index = this.settings.startAt;
    }
    /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */ createClass(Glide1, [
        {
            key: 'mount',
            value: function mount$$1() {
                var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                this._e.emit('mount.before');
                if (isObject(extensions)) this._c = mount(this, extensions, this._e);
                else warn('You need to provide a object on `mount()`');
                this._e.emit('mount.after');
                return this;
            }
        },
        {
            key: 'mutate',
            value: function mutate() {
                var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                if (isArray(transformers)) this._t = transformers;
                else warn('You need to provide a array on `mutate()`');
                return this;
            }
        },
        {
            key: 'update',
            value: function update() {
                var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                this.settings = mergeOptions(this.settings, settings);
                if (settings.hasOwnProperty('startAt')) this.index = settings.startAt;
                this._e.emit('update');
                return this;
            }
        },
        {
            key: 'go',
            value: function go(pattern) {
                this._c.Run.make(pattern);
                return this;
            }
        },
        {
            key: 'move',
            value: function move(distance) {
                this._c.Transition.disable();
                this._c.Move.make(distance);
                return this;
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                this._e.emit('destroy');
                return this;
            }
        },
        {
            key: 'play',
            value: function play() {
                var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                if (interval) this.settings.autoplay = interval;
                this._e.emit('play');
                return this;
            }
        },
        {
            key: 'pause',
            value: function pause() {
                this._e.emit('pause');
                return this;
            }
        },
        {
            key: 'disable',
            value: function disable() {
                this.disabled = true;
                return this;
            }
        },
        {
            key: 'enable',
            value: function enable() {
                this.disabled = false;
                return this;
            }
        },
        {
            key: 'on',
            value: function on(event, handler) {
                this._e.on(event, handler);
                return this;
            }
        },
        {
            key: 'isType',
            value: function isType(name) {
                return this.settings.type === name;
            }
        },
        {
            key: 'settings',
            get: function get$$1() {
                return this._o;
            },
            set: function set$$1(o) {
                if (isObject(o)) this._o = o;
                else warn('Options must be an `object` instance.');
            }
        },
        {
            key: 'index',
            get: function get$$1() {
                return this._i;
            },
            set: function set$$1(i) {
                this._i = toInt(i);
            }
        },
        {
            key: 'type',
            get: function get$$1() {
                return this.settings.type;
            }
        },
        {
            key: 'disabled',
            get: function get$$1() {
                return this._d;
            },
            set: function set$$1(status) {
                this._d = !!status;
            }
        }
    ]);
    return Glide1;
}();
function Run(Glide2, Components, Events) {
    var Run1 = {
        /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */ mount: function mount() {
            this._o = false;
        },
        /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */ make: function make(move) {
            var _this = this;
            if (!Glide2.disabled) {
                Glide2.disable();
                this.move = move;
                Events.emit('run.before', this.move);
                this.calculate();
                Events.emit('run', this.move);
                Components.Transition.after(function() {
                    if (_this.isStart()) Events.emit('run.start', _this.move);
                    if (_this.isEnd()) Events.emit('run.end', _this.move);
                    if (_this.isOffset('<') || _this.isOffset('>')) {
                        _this._o = false;
                        Events.emit('run.offset', _this.move);
                    }
                    Events.emit('run.after', _this.move);
                    Glide2.enable();
                });
            }
        },
        /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */ calculate: function calculate() {
            var move = this.move, length = this.length;
            var steps = move.steps, direction = move.direction;
            var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;
            switch(direction){
                case '>':
                    if (steps === '>') Glide2.index = length;
                    else if (this.isEnd()) {
                        if (!(Glide2.isType('slider') && !Glide2.settings.rewind)) {
                            this._o = true;
                            Glide2.index = 0;
                        }
                    } else if (countableSteps) Glide2.index += Math.min(length - Glide2.index, -toInt(steps));
                    else Glide2.index++;
                    break;
                case '<':
                    if (steps === '<') Glide2.index = 0;
                    else if (this.isStart()) {
                        if (!(Glide2.isType('slider') && !Glide2.settings.rewind)) {
                            this._o = true;
                            Glide2.index = length;
                        }
                    } else if (countableSteps) Glide2.index -= Math.min(Glide2.index, toInt(steps));
                    else Glide2.index--;
                    break;
                case '=':
                    Glide2.index = steps;
                    break;
                default:
                    warn('Invalid direction pattern [' + direction + steps + '] has been used');
                    break;
            }
        },
        /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */ isStart: function isStart() {
            return Glide2.index === 0;
        },
        /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */ isEnd: function isEnd() {
            return Glide2.index === this.length;
        },
        /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */ isOffset: function isOffset(direction) {
            return this._o && this.move.direction === direction;
        }
    };
    define(Run1, 'move', {
        /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */ get: function get() {
            return this._m;
        },
        /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */ set: function set(value) {
            var step = value.substr(1);
            this._m = {
                direction: value.substr(0, 1),
                steps: step ? toInt(step) ? toInt(step) : step : 0
            };
        }
    });
    define(Run1, 'length', {
        /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */ get: function get() {
            var settings = Glide2.settings;
            var length = Components.Html.slides.length;
            // If the `bound` option is acitve, a maximum running distance should be
            // reduced by `perView` and `focusAt` settings. Running distance
            // should end before creating an empty space after instance.
            if (Glide2.isType('slider') && settings.focusAt !== 'center' && settings.bound) return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
            return length - 1;
        }
    });
    define(Run1, 'offset', {
        /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */ get: function get() {
            return this._o;
        }
    });
    return Run1;
}
/**
 * Returns a current time.
 *
 * @return {Number}
 */ function now() {
    return new Date().getTime();
}
/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */ function throttle(func, wait, options) {
    var timeout = void 0, context = void 0, args = void 0, result = void 0;
    var previous = 0;
    if (!options) options = {
    };
    var later = function later() {
        previous = options.leading === false ? 0 : now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    var throttled = function throttled() {
        var at = now();
        if (!previous && options.leading === false) previous = at;
        var remaining = wait - (at - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = at;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) timeout = setTimeout(later, remaining);
        return result;
    };
    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };
    return throttled;
}
var MARGIN_TYPE = {
    ltr: [
        'marginLeft',
        'marginRight'
    ],
    rtl: [
        'marginRight',
        'marginLeft'
    ]
};
function Gaps(Glide3, Components, Events) {
    var Gaps1 = {
        /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */ apply: function apply(slides) {
            for(var i = 0, len = slides.length; i < len; i++){
                var style = slides[i].style;
                var direction = Components.Direction.value;
                if (i !== 0) style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
                else style[MARGIN_TYPE[direction][0]] = '';
                if (i !== slides.length - 1) style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
                else style[MARGIN_TYPE[direction][1]] = '';
            }
        },
        /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */ remove: function remove(slides) {
            for(var i = 0, len = slides.length; i < len; i++){
                var style = slides[i].style;
                style.marginLeft = '';
                style.marginRight = '';
            }
        }
    };
    define(Gaps1, 'value', {
        /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */ get: function get() {
            return toInt(Glide3.settings.gap);
        }
    });
    define(Gaps1, 'grow', {
        /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */ get: function get() {
            return Gaps1.value * (Components.Sizes.length - 1);
        }
    });
    define(Gaps1, 'reductor', {
        /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */ get: function get() {
            var perView = Glide3.settings.perView;
            return Gaps1.value * (perView - 1) / perView;
        }
    });
    /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */ Events.on([
        'build.after',
        'update'
    ], throttle(function() {
        Gaps1.apply(Components.Html.wrapper.children);
    }, 30));
    /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */ Events.on('destroy', function() {
        Gaps1.remove(Components.Html.wrapper.children);
    });
    return Gaps1;
}
/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */ function siblings(node) {
    if (node && node.parentNode) {
        var n = node.parentNode.firstChild;
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== node) matched.push(n);
        return matched;
    }
    return [];
}
/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */ function exist(node) {
    if (node && node instanceof window.HTMLElement) return true;
    return false;
}
var TRACK_SELECTOR = '[data-glide-el="track"]';
function Html(Glide4, Components) {
    var Html1 = {
        /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */ mount: function mount() {
            this.root = Glide4.selector;
            this.track = this.root.querySelector(TRACK_SELECTOR);
            this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function(slide) {
                return !slide.classList.contains(Glide4.settings.classes.cloneSlide);
            });
        }
    };
    define(Html1, 'root', {
        /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */ get: function get() {
            return Html1._r;
        },
        /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */ set: function set(r) {
            if (isString(r)) r = document.querySelector(r);
            if (exist(r)) Html1._r = r;
            else warn('Root element must be a existing Html node');
        }
    });
    define(Html1, 'track', {
        /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */ get: function get() {
            return Html1._t;
        },
        /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */ set: function set(t) {
            if (exist(t)) Html1._t = t;
            else warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
        }
    });
    define(Html1, 'wrapper', {
        /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */ get: function get() {
            return Html1.track.children[0];
        }
    });
    return Html1;
}
function Peek(Glide5, Components, Events) {
    var Peek1 = {
        /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */ mount: function mount() {
            this.value = Glide5.settings.peek;
        }
    };
    define(Peek1, 'value', {
        /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */ get: function get() {
            return Peek1._v;
        },
        /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */ set: function set(value) {
            if (isObject(value)) {
                value.before = toInt(value.before);
                value.after = toInt(value.after);
            } else value = toInt(value);
            Peek1._v = value;
        }
    });
    define(Peek1, 'reductor', {
        /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */ get: function get() {
            var value = Peek1.value;
            var perView = Glide5.settings.perView;
            if (isObject(value)) return value.before / perView + value.after / perView;
            return value * 2 / perView;
        }
    });
    /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */ Events.on([
        'resize',
        'update'
    ], function() {
        Peek1.mount();
    });
    return Peek1;
}
function Move(Glide6, Components, Events) {
    var Move1 = {
        /**
     * Constructs move component.
     *
     * @returns {Void}
     */ mount: function mount() {
            this._o = 0;
        },
        /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */ make: function make() {
            var _this = this;
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            this.offset = offset;
            Events.emit('move', {
                movement: this.value
            });
            Components.Transition.after(function() {
                Events.emit('move.after', {
                    movement: _this.value
                });
            });
        }
    };
    define(Move1, 'offset', {
        /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */ get: function get() {
            return Move1._o;
        },
        /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */ set: function set(value) {
            Move1._o = !isUndefined(value) ? toInt(value) : 0;
        }
    });
    define(Move1, 'translate', {
        /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */ get: function get() {
            return Components.Sizes.slideWidth * Glide6.index;
        }
    });
    define(Move1, 'value', {
        /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */ get: function get() {
            var offset = this.offset;
            var translate = this.translate;
            if (Components.Direction.is('rtl')) return translate + offset;
            return translate - offset;
        }
    });
    /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */ Events.on([
        'build.before',
        'run'
    ], function() {
        Move1.make();
    });
    return Move1;
}
function Sizes(Glide7, Components, Events) {
    var Sizes1 = {
        /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */ setupSlides: function setupSlides() {
            var width = this.slideWidth + 'px';
            var slides = Components.Html.slides;
            for(var i = 0; i < slides.length; i++)slides[i].style.width = width;
        },
        /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */ setupWrapper: function setupWrapper(dimention) {
            Components.Html.wrapper.style.width = this.wrapperSize + 'px';
        },
        /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */ remove: function remove() {
            var slides = Components.Html.slides;
            for(var i = 0; i < slides.length; i++)slides[i].style.width = '';
            Components.Html.wrapper.style.width = '';
        }
    };
    define(Sizes1, 'length', {
        /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */ get: function get() {
            return Components.Html.slides.length;
        }
    });
    define(Sizes1, 'width', {
        /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */ get: function get() {
            return Components.Html.root.offsetWidth;
        }
    });
    define(Sizes1, 'wrapperSize', {
        /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */ get: function get() {
            return Sizes1.slideWidth * Sizes1.length + Components.Gaps.grow + Components.Clones.grow;
        }
    });
    define(Sizes1, 'slideWidth', {
        /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */ get: function get() {
            return Sizes1.width / Glide7.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
        }
    });
    /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */ Events.on([
        'build.before',
        'resize',
        'update'
    ], function() {
        Sizes1.setupSlides();
        Sizes1.setupWrapper();
    });
    /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */ Events.on('destroy', function() {
        Sizes1.remove();
    });
    return Sizes1;
}
function Build(Glide8, Components, Events) {
    var Build1 = {
        /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */ mount: function mount() {
            Events.emit('build.before');
            this.typeClass();
            this.activeClass();
            Events.emit('build.after');
        },
        /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */ typeClass: function typeClass() {
            Components.Html.root.classList.add(Glide8.settings.classes[Glide8.settings.type]);
        },
        /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */ activeClass: function activeClass() {
            var classes = Glide8.settings.classes;
            var slide = Components.Html.slides[Glide8.index];
            if (slide) {
                slide.classList.add(classes.activeSlide);
                siblings(slide).forEach(function(sibling) {
                    sibling.classList.remove(classes.activeSlide);
                });
            }
        },
        /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */ removeClasses: function removeClasses() {
            var classes = Glide8.settings.classes;
            Components.Html.root.classList.remove(classes[Glide8.settings.type]);
            Components.Html.slides.forEach(function(sibling) {
                sibling.classList.remove(classes.activeSlide);
            });
        }
    };
    /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */ Events.on([
        'destroy',
        'update'
    ], function() {
        Build1.removeClasses();
    });
    /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */ Events.on([
        'resize',
        'update'
    ], function() {
        Build1.mount();
    });
    /**
   * Swap active class of current slide:
   * - after each move to the new index
   */ Events.on('move.after', function() {
        Build1.activeClass();
    });
    return Build1;
}
function Clones(Glide9, Components, Events) {
    var Clones1 = {
        /**
     * Create pattern map and collect slides to be cloned.
     */ mount: function mount() {
            this.items = [];
            if (Glide9.isType('carousel')) this.items = this.collect();
        },
        /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */ collect: function collect() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var slides = Components.Html.slides;
            var _Glide$settings = Glide9.settings, perView = _Glide$settings.perView, classes = _Glide$settings.classes;
            var peekIncrementer = +!!Glide9.settings.peek;
            var part = perView + peekIncrementer;
            var start = slides.slice(0, part);
            var end = slides.slice(-part);
            for(var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++){
                for(var i = 0; i < start.length; i++){
                    var clone = start[i].cloneNode(true);
                    clone.classList.add(classes.cloneSlide);
                    items.push(clone);
                }
                for(var _i = 0; _i < end.length; _i++){
                    var _clone = end[_i].cloneNode(true);
                    _clone.classList.add(classes.cloneSlide);
                    items.unshift(_clone);
                }
            }
            return items;
        },
        /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */ append: function append() {
            var items = this.items;
            var _Components$Html = Components.Html, wrapper = _Components$Html.wrapper, slides = _Components$Html.slides;
            var half = Math.floor(items.length / 2);
            var prepend = items.slice(0, half).reverse();
            var append = items.slice(half, items.length);
            var width = Components.Sizes.slideWidth + 'px';
            for(var i = 0; i < append.length; i++)wrapper.appendChild(append[i]);
            for(var _i2 = 0; _i2 < prepend.length; _i2++)wrapper.insertBefore(prepend[_i2], slides[0]);
            for(var _i3 = 0; _i3 < items.length; _i3++)items[_i3].style.width = width;
        },
        /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */ remove: function remove() {
            var items = this.items;
            for(var i = 0; i < items.length; i++)Components.Html.wrapper.removeChild(items[i]);
        }
    };
    define(Clones1, 'grow', {
        /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */ get: function get() {
            return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones1.items.length;
        }
    });
    /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */ Events.on('update', function() {
        Clones1.remove();
        Clones1.mount();
        Clones1.append();
    });
    /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */ Events.on('build.before', function() {
        if (Glide9.isType('carousel')) Clones1.append();
    });
    /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */ Events.on('destroy', function() {
        Clones1.remove();
    });
    return Clones1;
}
var EventsBinder = function() {
    /**
   * Construct a EventsBinder instance.
   */ function EventsBinder1() {
        var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        classCallCheck(this, EventsBinder1);
        this.listeners = listeners;
    }
    /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */ createClass(EventsBinder1, [
        {
            key: 'on',
            value: function on(events, el, closure) {
                var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                if (isString(events)) events = [
                    events
                ];
                for(var i = 0; i < events.length; i++){
                    this.listeners[events[i]] = closure;
                    el.addEventListener(events[i], this.listeners[events[i]], capture);
                }
            }
        },
        {
            key: 'off',
            value: function off(events, el) {
                var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                if (isString(events)) events = [
                    events
                ];
                for(var i = 0; i < events.length; i++)el.removeEventListener(events[i], this.listeners[events[i]], capture);
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                delete this.listeners;
            }
        }
    ]);
    return EventsBinder1;
}();
function Resize(Glide10, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Resize1 = {
        /**
     * Initializes window bindings.
     */ mount: function mount() {
            this.bind();
        },
        /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on('resize', window, throttle(function() {
                Events.emit('resize');
            }, Glide10.settings.throttle));
        },
        /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off('resize', window);
        }
    };
    /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */ Events.on('destroy', function() {
        Resize1.unbind();
        Binder.destroy();
    });
    return Resize1;
}
var VALID_DIRECTIONS = [
    'ltr',
    'rtl'
];
var FLIPED_MOVEMENTS = {
    '>': '<',
    '<': '>',
    '=': '='
};
function Direction(Glide11, Components, Events) {
    var Direction1 = {
        /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */ mount: function mount() {
            this.value = Glide11.settings.direction;
        },
        /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */ resolve: function resolve(pattern) {
            var token = pattern.slice(0, 1);
            if (this.is('rtl')) return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
            return pattern;
        },
        /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */ is: function is(direction) {
            return this.value === direction;
        },
        /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */ addClass: function addClass() {
            Components.Html.root.classList.add(Glide11.settings.classes.direction[this.value]);
        },
        /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */ removeClass: function removeClass() {
            Components.Html.root.classList.remove(Glide11.settings.classes.direction[this.value]);
        }
    };
    define(Direction1, 'value', {
        /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */ get: function get() {
            return Direction1._v;
        },
        /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */ set: function set(value) {
            if (VALID_DIRECTIONS.indexOf(value) > -1) Direction1._v = value;
            else warn('Direction value must be `ltr` or `rtl`');
        }
    });
    /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */ Events.on([
        'destroy',
        'update'
    ], function() {
        Direction1.removeClass();
    });
    /**
   * Remount component:
   * - on update to reflect changes in direction value
   */ Events.on('update', function() {
        Direction1.mount();
    });
    /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */ Events.on([
        'build.before',
        'update'
    ], function() {
        Direction1.addClass();
    });
    return Direction1;
}
/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Rtl(Glide, Components) {
    return {
        /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            if (Components.Direction.is('rtl')) return -translate;
            return translate;
        }
    };
}
/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Gap(Glide12, Components) {
    return {
        /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            return translate + Components.Gaps.value * Glide12.index;
        }
    };
}
/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Grow(Glide, Components) {
    return {
        /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            return translate + Components.Clones.grow / 2;
        }
    };
}
/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Peeking(Glide13, Components) {
    return {
        /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            if (Glide13.settings.focusAt >= 0) {
                var peek = Components.Peek.value;
                if (isObject(peek)) return translate - peek.before;
                return translate - peek;
            }
            return translate;
        }
    };
}
/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function Focusing(Glide14, Components) {
    return {
        /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */ modify: function modify(translate) {
            var gap = Components.Gaps.value;
            var width = Components.Sizes.width;
            var focusAt = Glide14.settings.focusAt;
            var slideWidth = Components.Sizes.slideWidth;
            if (focusAt === 'center') return translate - (width / 2 - slideWidth / 2);
            return translate - slideWidth * focusAt - gap * focusAt;
        }
    };
}
/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */ function mutator(Glide15, Components, Events) {
    /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */ var TRANSFORMERS = [
        Gap,
        Grow,
        Peeking,
        Focusing
    ].concat(Glide15._t, [
        Rtl
    ]);
    return {
        /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */ mutate: function mutate(translate) {
            for(var i = 0; i < TRANSFORMERS.length; i++){
                var transformer = TRANSFORMERS[i];
                if (isFunction(transformer) && isFunction(transformer().modify)) translate = transformer(Glide15, Components, Events).modify(translate);
                else warn('Transformer should be a function that returns an object with `modify()` method');
            }
            return translate;
        }
    };
}
function Translate(Glide16, Components, Events) {
    var Translate1 = {
        /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */ set: function set(value) {
            var transform = mutator(Glide16, Components).mutate(value);
            Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
        },
        /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */ remove: function remove() {
            Components.Html.wrapper.style.transform = '';
        }
    };
    /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */ Events.on('move', function(context) {
        var gap = Components.Gaps.value;
        var length = Components.Sizes.length;
        var width = Components.Sizes.slideWidth;
        if (Glide16.isType('carousel') && Components.Run.isOffset('<')) {
            Components.Transition.after(function() {
                Events.emit('translate.jump');
                Translate1.set(width * (length - 1));
            });
            return Translate1.set(-width - gap * length);
        }
        if (Glide16.isType('carousel') && Components.Run.isOffset('>')) {
            Components.Transition.after(function() {
                Events.emit('translate.jump');
                Translate1.set(0);
            });
            return Translate1.set(width * length + gap * length);
        }
        return Translate1.set(context.movement);
    });
    /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */ Events.on('destroy', function() {
        Translate1.remove();
    });
    return Translate1;
}
function Transition(Glide17, Components, Events) {
    /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */ var disabled = false;
    var Transition1 = {
        /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */ compose: function compose(property) {
            var settings = Glide17.settings;
            if (!disabled) return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
            return property + ' 0ms ' + settings.animationTimingFunc;
        },
        /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */ set: function set() {
            var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
            Components.Html.wrapper.style.transition = this.compose(property);
        },
        /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */ remove: function remove() {
            Components.Html.wrapper.style.transition = '';
        },
        /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */ after: function after(callback) {
            setTimeout(function() {
                callback();
            }, this.duration);
        },
        /**
     * Enable transition.
     *
     * @return {Void}
     */ enable: function enable() {
            disabled = false;
            this.set();
        },
        /**
     * Disable transition.
     *
     * @return {Void}
     */ disable: function disable() {
            disabled = true;
            this.set();
        }
    };
    define(Transition1, 'duration', {
        /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */ get: function get() {
            var settings = Glide17.settings;
            if (Glide17.isType('slider') && Components.Run.offset) return settings.rewindDuration;
            return settings.animationDuration;
        }
    });
    /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */ Events.on('move', function() {
        Transition1.set();
    });
    /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */ Events.on([
        'build.before',
        'resize',
        'translate.jump'
    ], function() {
        Transition1.disable();
    });
    /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */ Events.on('run', function() {
        Transition1.enable();
    });
    /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */ Events.on('destroy', function() {
        Transition1.remove();
    });
    return Transition1;
}
/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */ var supportsPassive = false;
try {
    var opts = Object.defineProperty({
    }, 'passive', {
        get: function get() {
            supportsPassive = true;
        }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
} catch (e) {
}
var supportsPassive$1 = supportsPassive;
var START_EVENTS = [
    'touchstart',
    'mousedown'
];
var MOVE_EVENTS = [
    'touchmove',
    'mousemove'
];
var END_EVENTS = [
    'touchend',
    'touchcancel',
    'mouseup',
    'mouseleave'
];
var MOUSE_EVENTS = [
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseleave'
];
function swipe(Glide18, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;
    var capture = supportsPassive$1 ? {
        passive: true
    } : false;
    var Swipe = {
        /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */ mount: function mount() {
            this.bindSwipeStart();
        },
        /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */ start: function start(event) {
            if (!disabled && !Glide18.disabled) {
                this.disable();
                var swipe1 = this.touches(event);
                swipeSin = null;
                swipeStartX = toInt(swipe1.pageX);
                swipeStartY = toInt(swipe1.pageY);
                this.bindSwipeMove();
                this.bindSwipeEnd();
                Events.emit('swipe.start');
            }
        },
        /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */ move: function move(event) {
            if (!Glide18.disabled) {
                var _Glide$settings = Glide18.settings, touchAngle = _Glide$settings.touchAngle, touchRatio = _Glide$settings.touchRatio, classes = _Glide$settings.classes;
                var swipe2 = this.touches(event);
                var subExSx = toInt(swipe2.pageX) - swipeStartX;
                var subEySy = toInt(swipe2.pageY) - swipeStartY;
                var powEX = Math.abs(subExSx << 2);
                var powEY = Math.abs(subEySy << 2);
                var swipeHypotenuse = Math.sqrt(powEX + powEY);
                var swipeCathetus = Math.sqrt(powEY);
                swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);
                if (swipeSin * 180 / Math.PI < touchAngle) {
                    event.stopPropagation();
                    Components.Move.make(subExSx * toFloat(touchRatio));
                    Components.Html.root.classList.add(classes.dragging);
                    Events.emit('swipe.move');
                } else return false;
            }
        },
        /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */ end: function end(event) {
            if (!Glide18.disabled) {
                var settings = Glide18.settings;
                var swipe3 = this.touches(event);
                var threshold = this.threshold(event);
                var swipeDistance = swipe3.pageX - swipeStartX;
                var swipeDeg = swipeSin * 180 / Math.PI;
                var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);
                this.enable();
                if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
                    // While swipe is positive and greater than threshold move backward.
                    if (settings.perTouch) steps = Math.min(steps, toInt(settings.perTouch));
                    if (Components.Direction.is('rtl')) steps = -steps;
                    Components.Run.make(Components.Direction.resolve('<' + steps));
                } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
                    // While swipe is negative and lower than negative threshold move forward.
                    if (settings.perTouch) steps = Math.max(steps, -toInt(settings.perTouch));
                    if (Components.Direction.is('rtl')) steps = -steps;
                    Components.Run.make(Components.Direction.resolve('>' + steps));
                } else // While swipe don't reach distance apply previous transform.
                Components.Move.make();
                Components.Html.root.classList.remove(settings.classes.dragging);
                this.unbindSwipeMove();
                this.unbindSwipeEnd();
                Events.emit('swipe.end');
            }
        },
        /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */ bindSwipeStart: function bindSwipeStart() {
            var _this = this;
            var settings = Glide18.settings;
            if (settings.swipeThreshold) Binder.on(START_EVENTS[0], Components.Html.wrapper, function(event) {
                _this.start(event);
            }, capture);
            if (settings.dragThreshold) Binder.on(START_EVENTS[1], Components.Html.wrapper, function(event) {
                _this.start(event);
            }, capture);
        },
        /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */ unbindSwipeStart: function unbindSwipeStart() {
            Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
            Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
        },
        /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */ bindSwipeMove: function bindSwipeMove() {
            var _this2 = this;
            Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function(event) {
                _this2.move(event);
            }, Glide18.settings.throttle), capture);
        },
        /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */ unbindSwipeMove: function unbindSwipeMove() {
            Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
        },
        /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */ bindSwipeEnd: function bindSwipeEnd() {
            var _this3 = this;
            Binder.on(END_EVENTS, Components.Html.wrapper, function(event) {
                _this3.end(event);
            });
        },
        /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */ unbindSwipeEnd: function unbindSwipeEnd() {
            Binder.off(END_EVENTS, Components.Html.wrapper);
        },
        /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */ touches: function touches(event) {
            if (MOUSE_EVENTS.indexOf(event.type) > -1) return event;
            return event.touches[0] || event.changedTouches[0];
        },
        /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */ threshold: function threshold(event) {
            var settings = Glide18.settings;
            if (MOUSE_EVENTS.indexOf(event.type) > -1) return settings.dragThreshold;
            return settings.swipeThreshold;
        },
        /**
     * Enables swipe event.
     *
     * @return {self}
     */ enable: function enable() {
            disabled = false;
            Components.Transition.enable();
            return this;
        },
        /**
     * Disables swipe event.
     *
     * @return {self}
     */ disable: function disable() {
            disabled = true;
            Components.Transition.disable();
            return this;
        }
    };
    /**
   * Add component class:
   * - after initial building
   */ Events.on('build.after', function() {
        Components.Html.root.classList.add(Glide18.settings.classes.swipeable);
    });
    /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */ Events.on('destroy', function() {
        Swipe.unbindSwipeStart();
        Swipe.unbindSwipeMove();
        Swipe.unbindSwipeEnd();
        Binder.destroy();
    });
    return Swipe;
}
function images(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Images = {
        /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */ mount: function mount() {
            this.bind();
        },
        /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
        },
        /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off('dragstart', Components.Html.wrapper);
        },
        /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */ dragstart: function dragstart(event) {
            event.preventDefault();
        }
    };
    /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */ Events.on('destroy', function() {
        Images.unbind();
        Binder.destroy();
    });
    return Images;
}
function anchors(Glide, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */ var detached = false;
    /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */ var prevented = false;
    var Anchors = {
        /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */ mount: function mount() {
            /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */ this._a = Components.Html.wrapper.querySelectorAll('a');
            this.bind();
        },
        /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on('click', Components.Html.wrapper, this.click);
        },
        /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off('click', Components.Html.wrapper);
        },
        /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */ click: function click(event) {
            if (prevented) {
                event.stopPropagation();
                event.preventDefault();
            }
        },
        /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */ detach: function detach() {
            prevented = true;
            if (!detached) {
                for(var i = 0; i < this.items.length; i++){
                    this.items[i].draggable = false;
                    this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));
                    this.items[i].removeAttribute('href');
                }
                detached = true;
            }
            return this;
        },
        /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */ attach: function attach() {
            prevented = false;
            if (detached) {
                for(var i = 0; i < this.items.length; i++){
                    this.items[i].draggable = true;
                    this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
                }
                detached = false;
            }
            return this;
        }
    };
    define(Anchors, 'items', {
        /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */ get: function get() {
            return Anchors._a;
        }
    });
    /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */ Events.on('swipe.move', function() {
        Anchors.detach();
    });
    /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */ Events.on('swipe.end', function() {
        Components.Transition.after(function() {
            Anchors.attach();
        });
    });
    /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */ Events.on('destroy', function() {
        Anchors.attach();
        Anchors.unbind();
        Binder.destroy();
    });
    return Anchors;
}
var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
function controls(Glide19, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var capture = supportsPassive$1 ? {
        passive: true
    } : false;
    var Controls = {
        /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */ mount: function mount() {
            /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */ this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
            /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */ this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
            this.addBindings();
        },
        /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */ setActive: function setActive() {
            for(var i = 0; i < this._n.length; i++)this.addClass(this._n[i].children);
        },
        /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */ removeActive: function removeActive() {
            for(var i = 0; i < this._n.length; i++)this.removeClass(this._n[i].children);
        },
        /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */ addClass: function addClass(controls1) {
            var settings = Glide19.settings;
            var item = controls1[Glide19.index];
            if (item) {
                item.classList.add(settings.classes.activeNav);
                siblings(item).forEach(function(sibling) {
                    sibling.classList.remove(settings.classes.activeNav);
                });
            }
        },
        /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */ removeClass: function removeClass(controls2) {
            var item = controls2[Glide19.index];
            if (item) item.classList.remove(Glide19.settings.classes.activeNav);
        },
        /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */ addBindings: function addBindings() {
            for(var i = 0; i < this._c.length; i++)this.bind(this._c[i].children);
        },
        /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */ removeBindings: function removeBindings() {
            for(var i = 0; i < this._c.length; i++)this.unbind(this._c[i].children);
        },
        /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */ bind: function bind(elements) {
            for(var i = 0; i < elements.length; i++){
                Binder.on('click', elements[i], this.click);
                Binder.on('touchstart', elements[i], this.click, capture);
            }
        },
        /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */ unbind: function unbind(elements) {
            for(var i = 0; i < elements.length; i++)Binder.off([
                'click',
                'touchstart'
            ], elements[i]);
        },
        /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */ click: function click(event) {
            event.preventDefault();
            Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
        }
    };
    define(Controls, 'items', {
        /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */ get: function get() {
            return Controls._c;
        }
    });
    /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */ Events.on([
        'mount.after',
        'move.after'
    ], function() {
        Controls.setActive();
    });
    /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */ Events.on('destroy', function() {
        Controls.removeBindings();
        Controls.removeActive();
        Binder.destroy();
    });
    return Controls;
}
function keyboard(Glide20, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Keyboard = {
        /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */ mount: function mount() {
            if (Glide20.settings.keyboard) this.bind();
        },
        /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */ bind: function bind() {
            Binder.on('keyup', document, this.press);
        },
        /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */ unbind: function unbind() {
            Binder.off('keyup', document);
        },
        /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */ press: function press(event) {
            if (event.keyCode === 39) Components.Run.make(Components.Direction.resolve('>'));
            if (event.keyCode === 37) Components.Run.make(Components.Direction.resolve('<'));
        }
    };
    /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */ Events.on([
        'destroy',
        'update'
    ], function() {
        Keyboard.unbind();
    });
    /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */ Events.on('update', function() {
        Keyboard.mount();
    });
    /**
   * Destroy binder:
   * - on destroying to remove listeners
   */ Events.on('destroy', function() {
        Binder.destroy();
    });
    return Keyboard;
}
function autoplay(Glide21, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    var Autoplay = {
        /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */ mount: function mount() {
            this.start();
            if (Glide21.settings.hoverpause) this.bind();
        },
        /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */ start: function start() {
            var _this = this;
            if (Glide21.settings.autoplay) {
                if (isUndefined(this._i)) this._i = setInterval(function() {
                    _this.stop();
                    Components.Run.make('>');
                    _this.start();
                }, this.time);
            }
        },
        /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */ stop: function stop() {
            this._i = clearInterval(this._i);
        },
        /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */ bind: function bind() {
            var _this2 = this;
            Binder.on('mouseover', Components.Html.root, function() {
                _this2.stop();
            });
            Binder.on('mouseout', Components.Html.root, function() {
                _this2.start();
            });
        },
        /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */ unbind: function unbind() {
            Binder.off([
                'mouseover',
                'mouseout'
            ], Components.Html.root);
        }
    };
    define(Autoplay, 'time', {
        /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */ get: function get() {
            var autoplay1 = Components.Html.slides[Glide21.index].getAttribute('data-glide-autoplay');
            if (autoplay1) return toInt(autoplay1);
            return toInt(Glide21.settings.autoplay);
        }
    });
    /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */ Events.on([
        'destroy',
        'update'
    ], function() {
        Autoplay.unbind();
    });
    /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */ Events.on([
        'run.before',
        'pause',
        'destroy',
        'swipe.start',
        'update'
    ], function() {
        Autoplay.stop();
    });
    /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */ Events.on([
        'run.after',
        'play',
        'swipe.end'
    ], function() {
        Autoplay.start();
    });
    /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */ Events.on('update', function() {
        Autoplay.mount();
    });
    /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */ Events.on('destroy', function() {
        Binder.destroy();
    });
    return Autoplay;
}
/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */ function sortBreakpoints(points) {
    if (isObject(points)) return sortKeys(points);
    else warn('Breakpoints option must be an object');
    return {
    };
}
function breakpoints(Glide22, Components, Events) {
    /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */ var Binder = new EventsBinder();
    /**
   * Holds reference to settings.
   *
   * @type {Object}
   */ var settings = Glide22.settings;
    /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */ var points1 = sortBreakpoints(settings.breakpoints);
    /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */ var defaults2 = _extends({
    }, settings);
    var Breakpoints = {
        /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */ match: function match(points) {
            if (typeof window.matchMedia !== 'undefined') {
                for(var point in points)if (points.hasOwnProperty(point)) {
                    if (window.matchMedia('(max-width: ' + point + 'px)').matches) return points[point];
                }
            }
            return defaults2;
        }
    };
    /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */ _extends(settings, Breakpoints.match(points1));
    /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */ Binder.on('resize', window, throttle(function() {
        Glide22.settings = mergeOptions(settings, Breakpoints.match(points1));
    }, Glide22.settings.throttle));
    /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */ Events.on('update', function() {
        points1 = sortBreakpoints(points1);
        defaults2 = _extends({
        }, settings);
    });
    /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */ Events.on('destroy', function() {
        Binder.off('resize', window);
    });
    return Breakpoints;
}
var COMPONENTS = {
    Html: Html,
    Translate: Translate,
    Transition: Transition,
    Direction: Direction,
    Peek: Peek,
    Sizes: Sizes,
    Gaps: Gaps,
    Move: Move,
    Clones: Clones,
    Resize: Resize,
    Build: Build,
    Run: Run
};
var Glide$1 = function(_Core) {
    inherits(Glide$$1, _Core);
    function Glide$$1() {
        classCallCheck(this, Glide$$1);
        return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
    }
    createClass(Glide$$1, [
        {
            key: 'mount',
            value: function mount() {
                var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({
                }, COMPONENTS, extensions));
            }
        }
    ]);
    return Glide$$1;
}(Glide);
exports.default = Glide$1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["jWVwA","6rimH"], "6rimH", "parcelRequire2800")

//# sourceMappingURL=index.8cfc62b9.js.map
