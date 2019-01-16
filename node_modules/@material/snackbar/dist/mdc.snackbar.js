/*!
 Material Components for the Web
 Copyright (c) 2019 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["snackbar"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["snackbar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @template F
 */

var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbar", function() { return MDCSnackbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_dom_ponyfill__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var SURFACE_SELECTOR = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].SURFACE_SELECTOR,
    LABEL_SELECTOR = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].LABEL_SELECTOR,
    ACTION_SELECTOR = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].ACTION_SELECTOR,
    DISMISS_SELECTOR = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].DISMISS_SELECTOR,
    OPENING_EVENT = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].OPENING_EVENT,
    OPENED_EVENT = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].OPENED_EVENT,
    CLOSING_EVENT = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].CLOSING_EVENT,
    CLOSED_EVENT = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].CLOSED_EVENT;

var MDCSnackbar = function (_MDCComponent) {
  _inherits(MDCSnackbar, _MDCComponent);

  _createClass(MDCSnackbar, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSnackbar(root);
    }
  }]);

  function MDCSnackbar() {
    var _ref;

    _classCallCheck(this, MDCSnackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {!HTMLElement} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCSnackbar.__proto__ || Object.getPrototypeOf(MDCSnackbar)).call.apply(_ref, [this].concat(args)));

    _this.surfaceEl_;

    /** @type {!HTMLElement} */
    _this.labelEl_;

    /** @type {!HTMLElement} */
    _this.actionEl_;

    /** @type {function(!HTMLElement, !HTMLElement=): void} */
    _this.announce_;

    /** @private {!Function} */
    _this.handleKeyDown_;

    /** @private {!Function} */
    _this.handleSurfaceClick_;
    return _this;
  }

  /**
   * @param {function(): function(!HTMLElement, !HTMLElement=):void} announceFactory
   */


  _createClass(MDCSnackbar, [{
    key: 'initialize',
    value: function initialize() {
      var announceFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return __WEBPACK_IMPORTED_MODULE_3__util__["announce"];
      };

      this.announce_ = announceFactory();
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var _this2 = this;

      this.surfaceEl_ = /** @type {!HTMLElement} */this.root_.querySelector(SURFACE_SELECTOR);
      this.labelEl_ = /** @type {!HTMLElement} */this.root_.querySelector(LABEL_SELECTOR);
      this.actionEl_ = /** @type {!HTMLElement} */this.root_.querySelector(ACTION_SELECTOR);

      this.handleKeyDown_ = function (evt) {
        return _this2.foundation_.handleKeyDown(evt);
      };
      this.handleSurfaceClick_ = function (evt) {
        if (_this2.isActionButton_(evt.target)) {
          _this2.foundation_.handleActionButtonClick(evt);
        } else if (_this2.isActionIcon_(evt.target)) {
          _this2.foundation_.handleActionIconClick(evt);
        }
      };

      this.registerKeyDownHandler_(this.handleKeyDown_);
      this.registerSurfaceClickHandler_(this.handleSurfaceClick_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCSnackbar.prototype.__proto__ || Object.getPrototypeOf(MDCSnackbar.prototype), 'destroy', this).call(this);
      this.deregisterKeyDownHandler_(this.handleKeyDown_);
      this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_);
    }
  }, {
    key: 'open',
    value: function open() {
      this.foundation_.open();
    }

    /**
     * @param {string=} reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */

  }, {
    key: 'close',
    value: function close() {
      var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this.foundation_.close(reason);
    }

    /**
     * @return {!MDCSnackbarFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      /* eslint brace-style: "off" */
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        announce: function announce() {
          return _this3.announce_(_this3.labelEl_);
        },
        notifyOpening: function notifyOpening() {
          return _this3.emit(OPENING_EVENT, {});
        },
        notifyOpened: function notifyOpened() {
          return _this3.emit(OPENED_EVENT, {});
        },
        notifyClosing: function notifyClosing(reason) {
          return _this3.emit(CLOSING_EVENT, reason ? { reason: reason } : {});
        },
        notifyClosed: function notifyClosed(reason) {
          return _this3.emit(CLOSED_EVENT, reason ? { reason: reason } : {});
        }
      });
    }

    /**
     * @return {number}
     */

  }, {
    key: 'registerKeyDownHandler_',


    /**
     * @param {!Function} handler
     * @private
     */
    value: function registerKeyDownHandler_(handler) {
      this.listen('keydown', handler);
    }

    /**
     * @param {!Function} handler
     * @private
     */

  }, {
    key: 'deregisterKeyDownHandler_',
    value: function deregisterKeyDownHandler_(handler) {
      this.unlisten('keydown', handler);
    }

    /**
     * @param {!Function} handler
     * @private
     */

  }, {
    key: 'registerSurfaceClickHandler_',
    value: function registerSurfaceClickHandler_(handler) {
      this.surfaceEl_.addEventListener('click', handler);
    }

    /**
     * @param {!Function} handler
     * @private
     */

  }, {
    key: 'deregisterSurfaceClickHandler_',
    value: function deregisterSurfaceClickHandler_(handler) {
      this.surfaceEl_.removeEventListener('click', handler);
    }

    /**
     * @param {!Element} target
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isActionButton_',
    value: function isActionButton_(target) {
      return Boolean(__WEBPACK_IMPORTED_MODULE_4__material_dom_ponyfill__["closest"](target, ACTION_SELECTOR));
    }

    /**
     * @param {!Element} target
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isActionIcon_',
    value: function isActionIcon_(target) {
      return Boolean(__WEBPACK_IMPORTED_MODULE_4__material_dom_ponyfill__["closest"](target, DISMISS_SELECTOR));
    }
  }, {
    key: 'timeoutMs',
    get: function get() {
      return this.foundation_.getTimeoutMs();
    }

    /**
     * @param {number} timeoutMs
     */
    ,
    set: function set(timeoutMs) {
      this.foundation_.setTimeoutMs(timeoutMs);
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'closeOnEscape',
    get: function get() {
      return this.foundation_.getCloseOnEscape();
    }

    /**
     * @param {boolean} closeOnEscape
     */
    ,
    set: function set(closeOnEscape) {
      this.foundation_.setCloseOnEscape(closeOnEscape);
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isOpen',
    get: function get() {
      return this.foundation_.isOpen();
    }

    /**
     * @return {string}
     */

  }, {
    key: 'labelText',
    get: function get() {
      return this.labelEl_.textContent;
    }

    /**
     * @param {string} labelText
     */
    ,
    set: function set(labelText) {
      this.labelEl_.textContent = labelText;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'actionButtonText',
    get: function get() {
      return this.actionEl_.textContent;
    }

    /**
     * @param {string} actionButtonText
     */
    ,
    set: function set(actionButtonText) {
      this.actionEl_.textContent = actionButtonText;
    }
  }]);

  return MDCSnackbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);



/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(51);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: ["error", {"argsIgnorePattern": "evt", "varsIgnorePattern": "Adapter$"}] */





var OPENING = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING,
    OPEN = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPEN,
    CLOSING = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING;
var REASON_ACTION = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].REASON_ACTION,
    REASON_DISMISS = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].REASON_DISMISS;

var MDCSnackbarFoundation = function (_MDCFoundation) {
  _inherits(MDCSnackbarFoundation, _MDCFoundation);

  _createClass(MDCSnackbarFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
    }

    /**
     * @return {!MDCSnackbarAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSnackbarAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          announce: function announce() {},
          notifyOpening: function notifyOpening() {},
          notifyOpened: function notifyOpened() {},
          notifyClosing: function notifyClosing() /* reason: string */{},
          notifyClosed: function notifyClosed() /* reason: string */{}
        }
      );
    }

    /**
     * @param {!MDCSnackbarAdapter=} adapter
     */

  }]);

  function MDCSnackbarFoundation(adapter) {
    _classCallCheck(this, MDCSnackbarFoundation);

    /** @private {boolean} */
    var _this = _possibleConstructorReturn(this, (MDCSnackbarFoundation.__proto__ || Object.getPrototypeOf(MDCSnackbarFoundation)).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;

    /** @private {number} */
    _this.animationFrame_ = 0;

    /** @private {number} */
    _this.animationTimer_ = 0;

    /** @private {number} */
    _this.autoDismissTimer_ = 0;

    /** @private {number} */
    _this.autoDismissTimeoutMs_ = __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].DEFAULT_AUTO_DISMISS_TIMEOUT_MS;

    /** @private {boolean} */
    _this.closeOnEscape_ = true;
    return _this;
  }

  _createClass(MDCSnackbarFoundation, [{
    key: 'destroy',
    value: function destroy() {
      this.clearAutoDismissTimer_();
      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = 0;
      clearTimeout(this.animationTimer_);
      this.animationTimer_ = 0;
      this.adapter_.removeClass(OPENING);
      this.adapter_.removeClass(OPEN);
      this.adapter_.removeClass(CLOSING);
    }
  }, {
    key: 'open',
    value: function open() {
      var _this2 = this;

      this.clearAutoDismissTimer_();
      this.isOpen_ = true;
      this.adapter_.notifyOpening();
      this.adapter_.removeClass(CLOSING);
      this.adapter_.addClass(OPENING);
      this.adapter_.announce();

      // Wait a frame once display is no longer "none", to establish basis for animation
      this.runNextAnimationFrame_(function () {
        _this2.adapter_.addClass(OPEN);

        _this2.animationTimer_ = setTimeout(function () {
          _this2.handleAnimationTimerEnd_();
          _this2.adapter_.notifyOpened();
          _this2.autoDismissTimer_ = setTimeout(function () {
            _this2.close(REASON_DISMISS);
          }, _this2.getTimeoutMs());
        }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].SNACKBAR_ANIMATION_OPEN_TIME_MS);
      });
    }

    /**
     * @param {string=} reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */

  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!this.isOpen_) {
        // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
        return;
      }

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = 0;
      this.clearAutoDismissTimer_();

      this.isOpen_ = false;
      this.adapter_.notifyClosing(reason);
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING);
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPEN);
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING);

      clearTimeout(this.animationTimer_);
      this.animationTimer_ = setTimeout(function () {
        _this3.handleAnimationTimerEnd_();
        _this3.adapter_.notifyClosed(reason);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].SNACKBAR_ANIMATION_CLOSE_TIME_MS);
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     * @return {number}
     */

  }, {
    key: 'getTimeoutMs',
    value: function getTimeoutMs() {
      return this.autoDismissTimeoutMs_;
    }

    /**
     * @param {number} timeoutMs
     */

  }, {
    key: 'setTimeoutMs',
    value: function setTimeoutMs(timeoutMs) {
      // Use shorter variable names to make the code more readable
      var minValue = __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].MIN_AUTO_DISMISS_TIMEOUT_MS;
      var maxValue = __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].MAX_AUTO_DISMISS_TIMEOUT_MS;

      if (timeoutMs <= maxValue && timeoutMs >= minValue) {
        this.autoDismissTimeoutMs_ = timeoutMs;
      } else {
        throw new Error('timeoutMs must be an integer in the range ' + minValue + '\u2013' + maxValue + ', but got \'' + timeoutMs + '\'');
      }
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'getCloseOnEscape',
    value: function getCloseOnEscape() {
      return this.closeOnEscape_;
    }

    /**
     * @param {boolean} closeOnEscape
     */

  }, {
    key: 'setCloseOnEscape',
    value: function setCloseOnEscape(closeOnEscape) {
      this.closeOnEscape_ = closeOnEscape;
    }

    /**
     * @param {!KeyboardEvent} evt
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(evt) {
      if (this.getCloseOnEscape() && (evt.key === 'Escape' || evt.keyCode === 27)) {
        this.close(REASON_DISMISS);
      }
    }

    /**
     * @param {!MouseEvent} evt
     */

  }, {
    key: 'handleActionButtonClick',
    value: function handleActionButtonClick(evt) {
      this.close(REASON_ACTION);
    }

    /**
     * @param {!MouseEvent} evt
     */

  }, {
    key: 'handleActionIconClick',
    value: function handleActionIconClick(evt) {
      this.close(REASON_DISMISS);
    }

    /** @private */

  }, {
    key: 'clearAutoDismissTimer_',
    value: function clearAutoDismissTimer_() {
      clearTimeout(this.autoDismissTimer_);
      this.autoDismissTimer_ = 0;
    }

    /** @private */

  }, {
    key: 'handleAnimationTimerEnd_',
    value: function handleAnimationTimerEnd_() {
      this.animationTimer_ = 0;
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING);
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING);
    }

    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     * @param {Function} callback
     * @private
     */

  }, {
    key: 'runNextAnimationFrame_',
    value: function runNextAnimationFrame_(callback) {
      var _this4 = this;

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = requestAnimationFrame(function () {
        _this4.animationFrame_ = 0;
        clearTimeout(_this4.animationTimer_);
        _this4.animationTimer_ = setTimeout(callback, 0);
      });
    }
  }]);

  return MDCSnackbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSnackbarFoundation);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Snackbar. Provides an interface for managing:
 * - CSS classes
 * - Event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCSnackbarAdapter = function () {
  function MDCSnackbarAdapter() {
    _classCallCheck(this, MDCSnackbarAdapter);
  }

  _createClass(MDCSnackbarAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
  }, {
    key: "announce",
    value: function announce() {}
  }, {
    key: "notifyOpening",
    value: function notifyOpening() {}
  }, {
    key: "notifyOpened",
    value: function notifyOpened() {}

    /**
     * @param {string} reason
     */

  }, {
    key: "notifyClosing",
    value: function notifyClosing(reason) {}

    /**
     * @param {string} reason
     */

  }, {
    key: "notifyClosed",
    value: function notifyClosed(reason) {}
  }]);

  return MDCSnackbarAdapter;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (MDCSnackbarAdapter);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announce", function() { return announce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(51);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ARIA_LIVE_DELAY_MS = __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */].ARIA_LIVE_DELAY_MS;
var ARIA_LIVE_LABEL_TEXT_ATTR = __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_LIVE_LABEL_TEXT_ATTR;

/**
 * @param {!HTMLElement} ariaEl
 * @param {!HTMLElement=} labelEl
 */

function announce(ariaEl) {
  var labelEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ariaEl;

  var priority = ariaEl.getAttribute('aria-live');
  var labelText = labelEl.textContent.trim(); // Ignore `&nbsp;` (see below)
  if (!labelText) {
    return;
  }

  // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.
  ariaEl.setAttribute('aria-live', 'off');

  // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
  // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
  // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
  // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
  // so screen readers won't announce the second message unless we first clear `textContent`.
  //
  // We have to clear the label text two different ways to make it work in all browsers and screen readers:
  //
  //   1. `textContent = ''` is required for IE11 + JAWS
  //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
  //
  // All other browser/screen reader combinations support both methods.
  //
  // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
  // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
  //
  // This technique has been tested in:
  //
  //   * JAWS 2019:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * NVDA 2018:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * ChromeVox 53
  labelEl.textContent = '';
  labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>';

  // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
  // CSS generated content is normally announced by screen readers
  // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
  // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.
  labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);

  setTimeout(function () {
    // Allow screen readers to announce changes to the DOM again.
    ariaEl.setAttribute('aria-live', priority);

    // Remove the message from the ::before pseudo-element.
    labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR);

    // Restore the original label text, which will be announced by screen readers.
    labelEl.textContent = labelText;
  }, ARIA_LIVE_DELAY_MS);
}



/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var cssClasses = {
  OPENING: 'mdc-snackbar--opening',
  OPEN: 'mdc-snackbar--open',
  CLOSING: 'mdc-snackbar--closing'
};

var strings = {
  SURFACE_SELECTOR: '.mdc-snackbar__surface',
  LABEL_SELECTOR: '.mdc-snackbar__label',
  ACTION_SELECTOR: '.mdc-snackbar__action',
  DISMISS_SELECTOR: '.mdc-snackbar__dismiss',

  OPENING_EVENT: 'MDCSnackbar:opening',
  OPENED_EVENT: 'MDCSnackbar:opened',
  CLOSING_EVENT: 'MDCSnackbar:closing',
  CLOSED_EVENT: 'MDCSnackbar:closed',

  REASON_ACTION: 'action',
  REASON_DISMISS: 'dismiss',

  ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text'
};

var numbers = {
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,

  // These variables need to be kept in sync with the values in _variables.scss.
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,

  /**
   * Number of milliseconds to wait between temporarily clearing the label text
   * in the DOM and subsequently restoring it. This is necessary to force IE 11
   * to pick up the `aria-live` content change and announce it to the user.
   */
  ARIA_LIVE_DELAY_MS: 1000
};



/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element}
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;
  while (el) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {boolean}
 */
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}



/***/ })

/******/ });
});
//# sourceMappingURL=mdc.snackbar.js.map