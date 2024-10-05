(function () {
    'use strict';

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }

    function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct.bind();
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }
        return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;
            if (typeof Class !== "function") {
                throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }

            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };
        return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
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
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
    }

    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function () {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
    }

    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
    }
    /*!
     * Bootstrap v5.3.0 (https://getbootstrap.com/)
     * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());
    })(this, function () {
        /**
         * --------------------------------------------------------------------------
         * Bootstrap dom/data.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var _KEY_TO_DIRECTION;
        var elementMap = new Map();
        var Data = {
            set: function set(element, key, instance) {
                if (!elementMap.has(element)) {
                    elementMap.set(element, new Map());
                }
                var instanceMap = elementMap.get(element);
                // make it clear we only want one instance per element
                // can be removed later when multiple key/instances are fine to be used
                if (!instanceMap.has(key) && instanceMap.size !== 0) {
                    // eslint-disable-next-line no-console
                    console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: " + Array.from(instanceMap.keys())[0] + ".");
                    return;
                }
                instanceMap.set(key, instance);
            },
            get: function get(element, key) {
                if (elementMap.has(element)) {
                    return elementMap.get(element).get(key) || null;
                }
                return null;
            },
            remove: function remove(element, key) {
                if (!elementMap.has(element)) {
                    return;
                }
                var instanceMap = elementMap.get(element);
                instanceMap.delete(key);
                // free up element references if there are no instances left for an element
                if (instanceMap.size === 0) {
                    elementMap.delete(element);
                }
            }
        };
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/index.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        var MAX_UID = 1000000;
        var MILLISECONDS_MULTIPLIER = 1000;
        var TRANSITION_END = 'transitionend';
        /**
         * Properly escape IDs selectors to handle weird IDs
         * @param {string} selector
         * @returns {string}
         */
        var parseSelector = function parseSelector(selector) {
            if (selector && window.CSS && window.CSS.escape) {
                // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
                selector = selector.replace(/#([^\s"#']+)/g, function (match, id) {
                    return "#" + CSS.escape(id);
                });
            }
            return selector;
        };
        // Shout-out Angus Croll (https://goo.gl/pxwQGp)
        var toType = function toType(object) {
            if (object === null || object === undefined) {
                return "" + object;
            }
            return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        /**
         * Public Util API
         */
        var getUID = function getUID(prefix) {
            do {
                prefix += Math.floor(Math.random() * MAX_UID);
            } while (document.getElementById(prefix));
            return prefix;
        };
        var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
            if (!element) {
                return 0;
            }
            // Get transition-duration of the element
            var _window$getComputedSt = window.getComputedStyle(element),
                transitionDuration = _window$getComputedSt.transitionDuration,
                transitionDelay = _window$getComputedSt.transitionDelay;
            var floatTransitionDuration = Number.parseFloat(transitionDuration);
            var floatTransitionDelay = Number.parseFloat(transitionDelay);
            // Return 0 if element or transition duration is not found
            if (!floatTransitionDuration && !floatTransitionDelay) {
                return 0;
            }
            // If multiple durations are defined, take the first
            transitionDuration = transitionDuration.split(',')[0];
            transitionDelay = transitionDelay.split(',')[0];
            return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        var triggerTransitionEnd = function triggerTransitionEnd(element) {
            element.dispatchEvent(new Event(TRANSITION_END));
        };
        var isElement$1 = function isElement$1(object) {
            if (!object || typeof object !== 'object') {
                return false;
            }
            if (typeof object.jquery !== 'undefined') {
                object = object[0];
            }
            return typeof object.nodeType !== 'undefined';
        };
        var getElement = function getElement(object) {
            // it's a jQuery object or a node element
            if (isElement$1(object)) {
                return object.jquery ? object[0] : object;
            }
            if (typeof object === 'string' && object.length > 0) {
                return document.querySelector(parseSelector(object));
            }
            return null;
        };
        var isVisible = function isVisible(element) {
            if (!isElement$1(element) || element.getClientRects().length === 0) {
                return false;
            }
            var elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
            // Handle `details` element as its content may falsie appear visible when it is closed
            var closedDetails = element.closest('details:not([open])');
            if (!closedDetails) {
                return elementIsVisible;
            }
            if (closedDetails !== element) {
                var summary = element.closest('summary');
                if (summary && summary.parentNode !== closedDetails) {
                    return false;
                }
                if (summary === null) {
                    return false;
                }
            }
            return elementIsVisible;
        };
        var isDisabled = function isDisabled(element) {
            if (!element || element.nodeType !== Node.ELEMENT_NODE) {
                return true;
            }
            if (element.classList.contains('disabled')) {
                return true;
            }
            if (typeof element.disabled !== 'undefined') {
                return element.disabled;
            }
            return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
        };
        var findShadowRoot = function findShadowRoot(element) {
            if (!document.documentElement.attachShadow) {
                return null;
            }
            // Can find the shadow root otherwise it'll return the document
            if (typeof element.getRootNode === 'function') {
                var root = element.getRootNode();
                return root instanceof ShadowRoot ? root : null;
            }
            if (element instanceof ShadowRoot) {
                return element;
            }
            // when we don't find a shadow root
            if (!element.parentNode) {
                return null;
            }
            return findShadowRoot(element.parentNode);
        };
        var noop = function noop() {};
        /**
         * Trick to restart an element's animation
         *
         * @param {HTMLElement} element
         * @return void
         *
         * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
         */
        var reflow = function reflow(element) {
            element.offsetHeight; // eslint-disable-line no-unused-expressions
        };
        var getjQuery = function getjQuery() {
            if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
                return window.jQuery;
            }
            return null;
        };
        var DOMContentLoadedCallbacks = [];
        var onDOMContentLoaded = function onDOMContentLoaded(callback) {
            if (document.readyState === 'loading') {
                // add listener on the first call when the document is in loading state
                if (!DOMContentLoadedCallbacks.length) {
                    document.addEventListener('DOMContentLoaded', function () {
                        for (var _i2 = 0, _DOMContentLoadedCall = DOMContentLoadedCallbacks; _i2 < _DOMContentLoadedCall.length; _i2++) {
                            var _callback = _DOMContentLoadedCall[_i2];
                            _callback();
                        }
                    });
                }
                DOMContentLoadedCallbacks.push(callback);
            } else {
                callback();
            }
        };
        var isRTL = function isRTL() {
            return document.documentElement.dir === 'rtl';
        };
        var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
            onDOMContentLoaded(function () {
                var $ = getjQuery();
                /* istanbul ignore if */
                if ($) {
                    var name = plugin.NAME;
                    var JQUERY_NO_CONFLICT = $.fn[name];
                    $.fn[name] = plugin.jQueryInterface;
                    $.fn[name].Constructor = plugin;
                    $.fn[name].noConflict = function () {
                        $.fn[name] = JQUERY_NO_CONFLICT;
                        return plugin.jQueryInterface;
                    };
                }
            });
        };
        var execute = function execute(possibleCallback, args, defaultValue) {
            if (args === void 0) {
                args = [];
            }
            if (defaultValue === void 0) {
                defaultValue = possibleCallback;
            }
            return typeof possibleCallback === 'function' ? possibleCallback.apply(void 0, args) : defaultValue;
        };
        var executeAfterTransition = function executeAfterTransition(callback, transitionElement, waitForTransition) {
            if (waitForTransition === void 0) {
                waitForTransition = true;
            }
            if (!waitForTransition) {
                execute(callback);
                return;
            }
            var durationPadding = 5;
            var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
            var called = false;
            var handler = function handler(_ref6) {
                var target = _ref6.target;
                if (target !== transitionElement) {
                    return;
                }
                called = true;
                transitionElement.removeEventListener(TRANSITION_END, handler);
                execute(callback);
            };
            transitionElement.addEventListener(TRANSITION_END, handler);
            setTimeout(function () {
                if (!called) {
                    triggerTransitionEnd(transitionElement);
                }
            }, emulatedDuration);
        };
        /**
         * Return the previous/next element of a list.
         *
         * @param {array} list    The list of elements
         * @param activeElement   The active element
         * @param shouldGetNext   Choose to get next or previous element
         * @param isCycleAllowed
         * @return {Element|elem} The proper element
         */
        var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
            var listLength = list.length;
            var index = list.indexOf(activeElement);
            // if the element does not exist in the list return an element
            // depending on the direction and if cycle is allowed
            if (index === -1) {
                return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
            }
            index += shouldGetNext ? 1 : -1;
            if (isCycleAllowed) {
                index = (index + listLength) % listLength;
            }
            return list[Math.max(0, Math.min(index, listLength - 1))];
        };
        /**
         * --------------------------------------------------------------------------
         * Bootstrap dom/event-handler.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        var stripNameRegex = /\..*/;
        var stripUidRegex = /::\d+$/;
        var eventRegistry = {}; // Events storage
        var uidEvent = 1;
        var customEvents = {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout'
        };
        var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
        /**
         * Private methods
         */
        function makeEventUid(element, uid) {
            return uid && uid + "::" + uidEvent++ || element.uidEvent || uidEvent++;
        }

        function getElementEvents(element) {
            var uid = makeEventUid(element);
            element.uidEvent = uid;
            eventRegistry[uid] = eventRegistry[uid] || {};
            return eventRegistry[uid];
        }

        function bootstrapHandler(element, fn) {
            return function handler(event) {
                hydrateObj(event, {
                    delegateTarget: element
                });
                if (handler.oneOff) {
                    EventHandler.off(element, event.type, fn);
                }
                return fn.apply(element, [event]);
            };
        }

        function bootstrapDelegationHandler(element, selector, fn) {
            return function handler(event) {
                var domElements = element.querySelectorAll(selector);
                for (var target = event.target; target && target !== this; target = target.parentNode) {
                    for (var _iterator = _createForOfIteratorHelperLoose(domElements), _step; !(_step = _iterator()).done;) {
                        var domElement = _step.value;
                        if (domElement !== target) {
                            continue;
                        }
                        hydrateObj(event, {
                            delegateTarget: target
                        });
                        if (handler.oneOff) {
                            EventHandler.off(element, event.type, selector, fn);
                        }
                        return fn.apply(target, [event]);
                    }
                }
            };
        }

        function findHandler(events, callable, delegationSelector) {
            if (delegationSelector === void 0) {
                delegationSelector = null;
            }
            return Object.values(events).find(function (event) {
                return event.callable === callable && event.delegationSelector === delegationSelector;
            });
        }

        function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
            var isDelegated = typeof handler === 'string';
            // TODO: tooltip passes `false` instead of selector, so we need to check
            var callable = isDelegated ? delegationFunction : handler || delegationFunction;
            var typeEvent = getTypeEvent(originalTypeEvent);
            if (!nativeEvents.has(typeEvent)) {
                typeEvent = originalTypeEvent;
            }
            return [isDelegated, callable, typeEvent];
        }

        function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
            if (typeof originalTypeEvent !== 'string' || !element) {
                return;
            }
            var _normalizeParameters = normalizeParameters(originalTypeEvent, handler, delegationFunction),
                isDelegated = _normalizeParameters[0],
                callable = _normalizeParameters[1],
                typeEvent = _normalizeParameters[2];
            // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
            // this prevents the handler from being dispatched the same way as mouseover or mouseout does
            if (originalTypeEvent in customEvents) {
                var wrapFunction = function wrapFunction(fn) {
                    return function (event) {
                        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                            return fn.call(this, event);
                        }
                    };
                };
                callable = wrapFunction(callable);
            }
            var events = getElementEvents(element);
            var handlers = events[typeEvent] || (events[typeEvent] = {});
            var previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
            if (previousFunction) {
                previousFunction.oneOff = previousFunction.oneOff && oneOff;
                return;
            }
            var uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
            var fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
            fn.delegationSelector = isDelegated ? handler : null;
            fn.callable = callable;
            fn.oneOff = oneOff;
            fn.uidEvent = uid;
            handlers[uid] = fn;
            element.addEventListener(typeEvent, fn, isDelegated);
        }

        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
            var fn = findHandler(events[typeEvent], handler, delegationSelector);
            if (!fn) {
                return;
            }
            element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
            delete events[typeEvent][fn.uidEvent];
        }

        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
            var storeElementEvent = events[typeEvent] || {};
            for (var _i3 = 0, _Object$entries = Object.entries(storeElementEvent); _i3 < _Object$entries.length; _i3++) {
                var _Object$entries$_i = _Object$entries[_i3],
                    handlerKey = _Object$entries$_i[0],
                    event = _Object$entries$_i[1];
                if (handlerKey.includes(namespace)) {
                    removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
                }
            }
        }

        function getTypeEvent(event) {
            // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
            event = event.replace(stripNameRegex, '');
            return customEvents[event] || event;
        }
        var EventHandler = {
            on: function on(element, event, handler, delegationFunction) {
                addHandler(element, event, handler, delegationFunction, false);
            },
            one: function one(element, event, handler, delegationFunction) {
                addHandler(element, event, handler, delegationFunction, true);
            },
            off: function off(element, originalTypeEvent, handler, delegationFunction) {
                if (typeof originalTypeEvent !== 'string' || !element) {
                    return;
                }
                var _normalizeParameters2 = normalizeParameters(originalTypeEvent, handler, delegationFunction),
                    isDelegated = _normalizeParameters2[0],
                    callable = _normalizeParameters2[1],
                    typeEvent = _normalizeParameters2[2];
                var inNamespace = typeEvent !== originalTypeEvent;
                var events = getElementEvents(element);
                var storeElementEvent = events[typeEvent] || {};
                var isNamespace = originalTypeEvent.startsWith('.');
                if (typeof callable !== 'undefined') {
                    // Simplest case: handler is passed, remove that listener ONLY.
                    if (!Object.keys(storeElementEvent).length) {
                        return;
                    }
                    removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
                    return;
                }
                if (isNamespace) {
                    for (var _i4 = 0, _Object$keys = Object.keys(events); _i4 < _Object$keys.length; _i4++) {
                        var elementEvent = _Object$keys[_i4];
                        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
                    }
                }
                for (var _i5 = 0, _Object$entries2 = Object.entries(storeElementEvent); _i5 < _Object$entries2.length; _i5++) {
                    var _Object$entries2$_i = _Object$entries2[_i5],
                        keyHandlers = _Object$entries2$_i[0],
                        event = _Object$entries2$_i[1];
                    var handlerKey = keyHandlers.replace(stripUidRegex, '');
                    if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
                    }
                }
            },
            trigger: function trigger(element, event, args) {
                if (typeof event !== 'string' || !element) {
                    return null;
                }
                var $ = getjQuery();
                var typeEvent = getTypeEvent(event);
                var inNamespace = event !== typeEvent;
                var jQueryEvent = null;
                var bubbles = true;
                var nativeDispatch = true;
                var defaultPrevented = false;
                if (inNamespace && $) {
                    jQueryEvent = $.Event(event, args);
                    $(element).trigger(jQueryEvent);
                    bubbles = !jQueryEvent.isPropagationStopped();
                    nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                    defaultPrevented = jQueryEvent.isDefaultPrevented();
                }
                var evt = hydrateObj(new Event(event, {
                    bubbles: bubbles,
                    cancelable: true
                }), args);
                if (defaultPrevented) {
                    evt.preventDefault();
                }
                if (nativeDispatch) {
                    element.dispatchEvent(evt);
                }
                if (evt.defaultPrevented && jQueryEvent) {
                    jQueryEvent.preventDefault();
                }
                return evt;
            }
        };

        function hydrateObj(obj, meta) {
            if (meta === void 0) {
                meta = {};
            }
            var _loop2 = function _loop2() {
                var _Object$entries3$_i = _Object$entries3[_i6],
                    key = _Object$entries3$_i[0],
                    value = _Object$entries3$_i[1];
                try {
                    obj[key] = value;
                } catch (_unused) {
                    Object.defineProperty(obj, key, {
                        configurable: true,
                        get: function get() {
                            return value;
                        }
                    });
                }
            };
            for (var _i6 = 0, _Object$entries3 = Object.entries(meta); _i6 < _Object$entries3.length; _i6++) {
                _loop2();
            }
            return obj;
        }
        /**
         * --------------------------------------------------------------------------
         * Bootstrap dom/manipulator.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        function normalizeData(value) {
            if (value === 'true') {
                return true;
            }
            if (value === 'false') {
                return false;
            }
            if (value === Number(value).toString()) {
                return Number(value);
            }
            if (value === '' || value === 'null') {
                return null;
            }
            if (typeof value !== 'string') {
                return value;
            }
            try {
                return JSON.parse(decodeURIComponent(value));
            } catch (_unused) {
                return value;
            }
        }

        function normalizeDataKey(key) {
            return key.replace(/[A-Z]/g, function (chr) {
                return "-" + chr.toLowerCase();
            });
        }
        var Manipulator = {
            setDataAttribute: function setDataAttribute(element, key, value) {
                element.setAttribute("data-bs-" + normalizeDataKey(key), value);
            },
            removeDataAttribute: function removeDataAttribute(element, key) {
                element.removeAttribute("data-bs-" + normalizeDataKey(key));
            },
            getDataAttributes: function getDataAttributes(element) {
                if (!element) {
                    return {};
                }
                var attributes = {};
                var bsKeys = Object.keys(element.dataset).filter(function (key) {
                    return key.startsWith('bs') && !key.startsWith('bsConfig');
                });
                for (var _iterator2 = _createForOfIteratorHelperLoose(bsKeys), _step2; !(_step2 = _iterator2()).done;) {
                    var key = _step2.value;
                    var pureKey = key.replace(/^bs/, '');
                    pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                    attributes[pureKey] = normalizeData(element.dataset[key]);
                }
                return attributes;
            },
            getDataAttribute: function getDataAttribute(element, key) {
                return normalizeData(element.getAttribute("data-bs-" + normalizeDataKey(key)));
            }
        };
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/config.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Class definition
         */
        var Config = /*#__PURE__*/ function () {
            function Config() {}
            var _proto = Config.prototype;
            _proto._getConfig = function _getConfig(config) {
                config = this._mergeConfigObj(config);
                config = this._configAfterMerge(config);
                this._typeCheckConfig(config);
                return config;
            };
            _proto._configAfterMerge = function _configAfterMerge(config) {
                return config;
            };
            _proto._mergeConfigObj = function _mergeConfigObj(config, element) {
                var jsonConfig = isElement$1(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse
                return _extends({}, this.constructor.Default, typeof jsonConfig === 'object' ? jsonConfig : {}, isElement$1(element) ? Manipulator.getDataAttributes(element) : {}, typeof config === 'object' ? config : {});
            };
            _proto._typeCheckConfig = function _typeCheckConfig(config, configTypes) {
                if (configTypes === void 0) {
                    configTypes = this.constructor.DefaultType;
                }
                for (var _i7 = 0, _Object$entries4 = Object.entries(configTypes); _i7 < _Object$entries4.length; _i7++) {
                    var _Object$entries4$_i = _Object$entries4[_i7],
                        property = _Object$entries4$_i[0],
                        expectedTypes = _Object$entries4$_i[1];
                    var value = config[property];
                    var valueType = isElement$1(value) ? 'element' : toType(value);
                    if (!new RegExp(expectedTypes).test(valueType)) {
                        throw new TypeError(this.constructor.NAME.toUpperCase() + ": Option \"" + property + "\" provided type \"" + valueType + "\" but expected type \"" + expectedTypes + "\".");
                    }
                }
            };
            _createClass(Config, null, [{
                key: "Default",
                get:
                    // Getters
                    function get() {
                        return {};
                    }
            }, {
                key: "DefaultType",
                get: function get() {
                    return {};
                }
            }, {
                key: "NAME",
                get: function get() {
                    throw new Error('You have to implement the static method "NAME", for each component!');
                }
            }]);
            return Config;
        }();
        /**
         * --------------------------------------------------------------------------
         * Bootstrap base-component.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var VERSION = '5.3.0';
        /**
         * Class definition
         */
        var BaseComponent = /*#__PURE__*/ function (_Config) {
            _inheritsLoose(BaseComponent, _Config);

            function BaseComponent(element, config) {
                var _this;
                _this = _Config.call(this) || this;
                element = getElement(element);
                if (!element) {
                    return _assertThisInitialized(_this);
                }
                _this._element = element;
                _this._config = _this._getConfig(config);
                Data.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this));
                return _this;
            }
            // Public
            var _proto2 = BaseComponent.prototype;
            _proto2.dispose = function dispose() {
                Data.remove(this._element, this.constructor.DATA_KEY);
                EventHandler.off(this._element, this.constructor.EVENT_KEY);
                for (var _iterator3 = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(this)), _step3; !(_step3 = _iterator3()).done;) {
                    var propertyName = _step3.value;
                    this[propertyName] = null;
                }
            };
            _proto2._queueCallback = function _queueCallback(callback, element, isAnimated) {
                if (isAnimated === void 0) {
                    isAnimated = true;
                }
                executeAfterTransition(callback, element, isAnimated);
            };
            _proto2._getConfig = function _getConfig(config) {
                config = this._mergeConfigObj(config, this._element);
                config = this._configAfterMerge(config);
                this._typeCheckConfig(config);
                return config;
            }
            // Static
            ;
            BaseComponent.getInstance = function getInstance(element) {
                return Data.get(getElement(element), this.DATA_KEY);
            };
            BaseComponent.getOrCreateInstance = function getOrCreateInstance(element, config) {
                if (config === void 0) {
                    config = {};
                }
                return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
            };
            BaseComponent.eventName = function eventName(name) {
                return "" + name + this.EVENT_KEY;
            };
            _createClass(BaseComponent, null, [{
                key: "VERSION",
                get: function get() {
                    return VERSION;
                }
            }, {
                key: "DATA_KEY",
                get: function get() {
                    return "bs." + this.NAME;
                }
            }, {
                key: "EVENT_KEY",
                get: function get() {
                    return "." + this.DATA_KEY;
                }
            }]);
            return BaseComponent;
        }(Config);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap dom/selector-engine.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        var getSelector = function getSelector(element) {
            var selector = element.getAttribute('data-bs-target');
            if (!selector || selector === '#') {
                var hrefAttribute = element.getAttribute('href');
                // The only valid content that could double as a selector are IDs or classes,
                // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
                // `document.querySelector` will rightfully complain it is invalid.
                // See https://github.com/twbs/bootstrap/issues/32273
                if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
                    return null;
                }
                // Just in case some CMS puts out a full URL with the anchor appended
                if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
                    hrefAttribute = "#" + hrefAttribute.split('#')[1];
                }
                selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
            }
            return parseSelector(selector);
        };
        var SelectorEngine = {
            find: function find(selector, element) {
                var _ref7;
                if (element === void 0) {
                    element = document.documentElement;
                }
                return (_ref7 = []).concat.apply(_ref7, Element.prototype.querySelectorAll.call(element, selector));
            },
            findOne: function findOne(selector, element) {
                if (element === void 0) {
                    element = document.documentElement;
                }
                return Element.prototype.querySelector.call(element, selector);
            },
            children: function children(element, selector) {
                var _ref8;
                return (_ref8 = []).concat.apply(_ref8, element.children).filter(function (child) {
                    return child.matches(selector);
                });
            },
            parents: function parents(element, selector) {
                var parents = [];
                var ancestor = element.parentNode.closest(selector);
                while (ancestor) {
                    parents.push(ancestor);
                    ancestor = ancestor.parentNode.closest(selector);
                }
                return parents;
            },
            prev: function prev(element, selector) {
                var previous = element.previousElementSibling;
                while (previous) {
                    if (previous.matches(selector)) {
                        return [previous];
                    }
                    previous = previous.previousElementSibling;
                }
                return [];
            },
            // TODO: this is now unused; remove later along with prev()
            next: function next(element, selector) {
                var next = element.nextElementSibling;
                while (next) {
                    if (next.matches(selector)) {
                        return [next];
                    }
                    next = next.nextElementSibling;
                }
                return [];
            },
            focusableChildren: function focusableChildren(element) {
                var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
                    return selector + ":not([tabindex^=\"-\"])";
                }).join(',');
                return this.find(focusables, element).filter(function (el) {
                    return !isDisabled(el) && isVisible(el);
                });
            },
            getSelectorFromElement: function getSelectorFromElement(element) {
                var selector = getSelector(element);
                if (selector) {
                    return SelectorEngine.findOne(selector) ? selector : null;
                }
                return null;
            },
            getElementFromSelector: function getElementFromSelector(element) {
                var selector = getSelector(element);
                return selector ? SelectorEngine.findOne(selector) : null;
            },
            getMultipleElementsFromSelector: function getMultipleElementsFromSelector(element) {
                var selector = getSelector(element);
                return selector ? SelectorEngine.find(selector) : [];
            }
        };
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/component-functions.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        var enableDismissTrigger = function enableDismissTrigger(component, method) {
            if (method === void 0) {
                method = 'hide';
            }
            var clickEvent = "click.dismiss" + component.EVENT_KEY;
            var name = component.NAME;
            EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"" + name + "\"]", function (event) {
                if (['A', 'AREA'].includes(this.tagName)) {
                    event.preventDefault();
                }
                if (isDisabled(this)) {
                    return;
                }
                var target = SelectorEngine.getElementFromSelector(this) || this.closest("." + name);
                var instance = component.getOrCreateInstance(target);
                // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
                instance[method]();
            });
        };
        /**
         * --------------------------------------------------------------------------
         * Bootstrap alert.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$f = 'alert';
        var DATA_KEY$a = 'bs.alert';
        var EVENT_KEY$b = "." + DATA_KEY$a;
        var EVENT_CLOSE = "close" + EVENT_KEY$b;
        var EVENT_CLOSED = "closed" + EVENT_KEY$b;
        var CLASS_NAME_FADE$5 = 'fade';
        var CLASS_NAME_SHOW$8 = 'show';
        /**
         * Class definition
         */
        var Alert = /*#__PURE__*/ function (_BaseComponent) {
            _inheritsLoose(Alert, _BaseComponent);

            function Alert() {
                return _BaseComponent.apply(this, arguments) || this;
            }
            var _proto3 = Alert.prototype;
            // Public
            _proto3.close = function close() {
                var _this2 = this;
                var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
                if (closeEvent.defaultPrevented) {
                    return;
                }
                this._element.classList.remove(CLASS_NAME_SHOW$8);
                var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
                this._queueCallback(function () {
                    return _this2._destroyElement();
                }, this._element, isAnimated);
            }
            // Private
            ;
            _proto3._destroyElement = function _destroyElement() {
                this._element.remove();
                EventHandler.trigger(this._element, EVENT_CLOSED);
                this.dispose();
            }
            // Static
            ;
            Alert.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Alert.getOrCreateInstance(this);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config](this);
                });
            };
            _createClass(Alert, null, [{
                key: "NAME",
                get:
                    // Getters
                    function get() {
                        return NAME$f;
                    }
            }]);
            return Alert;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        enableDismissTrigger(Alert, 'close');
        /**
         * jQuery
         */
        defineJQueryPlugin(Alert);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap button.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$e = 'button';
        var DATA_KEY$9 = 'bs.button';
        var EVENT_KEY$a = "." + DATA_KEY$9;
        var DATA_API_KEY$6 = '.data-api';
        var CLASS_NAME_ACTIVE$3 = 'active';
        var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
        var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$a + DATA_API_KEY$6;
        /**
         * Class definition
         */
        var Button = /*#__PURE__*/ function (_BaseComponent2) {
            _inheritsLoose(Button, _BaseComponent2);

            function Button() {
                return _BaseComponent2.apply(this, arguments) || this;
            }
            var _proto4 = Button.prototype;
            // Public
            _proto4.toggle = function toggle() {
                // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
                this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
            }
            // Static
            ;
            Button.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Button.getOrCreateInstance(this);
                    if (config === 'toggle') {
                        data[config]();
                    }
                });
            };
            _createClass(Button, null, [{
                key: "NAME",
                get:
                    // Getters
                    function get() {
                        return NAME$e;
                    }
            }]);
            return Button;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
            event.preventDefault();
            var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
            var data = Button.getOrCreateInstance(button);
            data.toggle();
        });
        /**
         * jQuery
         */
        defineJQueryPlugin(Button);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/swipe.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$d = 'swipe';
        var EVENT_KEY$9 = '.bs.swipe';
        var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$9;
        var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$9;
        var EVENT_TOUCHEND = "touchend" + EVENT_KEY$9;
        var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$9;
        var EVENT_POINTERUP = "pointerup" + EVENT_KEY$9;
        var POINTER_TYPE_TOUCH = 'touch';
        var POINTER_TYPE_PEN = 'pen';
        var CLASS_NAME_POINTER_EVENT = 'pointer-event';
        var SWIPE_THRESHOLD = 40;
        var Default$c = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        };
        var DefaultType$c = {
            endCallback: '(function|null)',
            leftCallback: '(function|null)',
            rightCallback: '(function|null)'
        };
        /**
         * Class definition
         */
        var Swipe = /*#__PURE__*/ function (_Config2) {
            _inheritsLoose(Swipe, _Config2);

            function Swipe(element, config) {
                var _this3;
                _this3 = _Config2.call(this) || this;
                _this3._element = element;
                if (!element || !Swipe.isSupported()) {
                    return _assertThisInitialized(_this3);
                }
                _this3._config = _this3._getConfig(config);
                _this3._deltaX = 0;
                _this3._supportPointerEvents = Boolean(window.PointerEvent);
                _this3._initEvents();
                return _this3;
            }
            // Getters
            var _proto5 = Swipe.prototype;
            // Public
            _proto5.dispose = function dispose() {
                EventHandler.off(this._element, EVENT_KEY$9);
            }
            // Private
            ;
            _proto5._start = function _start(event) {
                if (!this._supportPointerEvents) {
                    this._deltaX = event.touches[0].clientX;
                    return;
                }
                if (this._eventIsPointerPenTouch(event)) {
                    this._deltaX = event.clientX;
                }
            };
            _proto5._end = function _end(event) {
                if (this._eventIsPointerPenTouch(event)) {
                    this._deltaX = event.clientX - this._deltaX;
                }
                this._handleSwipe();
                execute(this._config.endCallback);
            };
            _proto5._move = function _move(event) {
                this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
            };
            _proto5._handleSwipe = function _handleSwipe() {
                var absDeltaX = Math.abs(this._deltaX);
                if (absDeltaX <= SWIPE_THRESHOLD) {
                    return;
                }
                var direction = absDeltaX / this._deltaX;
                this._deltaX = 0;
                if (!direction) {
                    return;
                }
                execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
            };
            _proto5._initEvents = function _initEvents() {
                var _this4 = this;
                if (this._supportPointerEvents) {
                    EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
                        return _this4._start(event);
                    });
                    EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
                        return _this4._end(event);
                    });
                    this._element.classList.add(CLASS_NAME_POINTER_EVENT);
                } else {
                    EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
                        return _this4._start(event);
                    });
                    EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
                        return _this4._move(event);
                    });
                    EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
                        return _this4._end(event);
                    });
                }
            };
            _proto5._eventIsPointerPenTouch = function _eventIsPointerPenTouch(event) {
                return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
            }
            // Static
            ;
            Swipe.isSupported = function isSupported() {
                return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
            };
            _createClass(Swipe, null, [{
                key: "Default",
                get: function get() {
                    return Default$c;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$c;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$d;
                }
            }]);
            return Swipe;
        }(Config);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap carousel.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$c = 'carousel';
        var DATA_KEY$8 = 'bs.carousel';
        var EVENT_KEY$8 = "." + DATA_KEY$8;
        var DATA_API_KEY$5 = '.data-api';
        var ARROW_LEFT_KEY$1 = 'ArrowLeft';
        var ARROW_RIGHT_KEY$1 = 'ArrowRight';
        var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
        var ORDER_NEXT = 'next';
        var ORDER_PREV = 'prev';
        var DIRECTION_LEFT = 'left';
        var DIRECTION_RIGHT = 'right';
        var EVENT_SLIDE = "slide" + EVENT_KEY$8;
        var EVENT_SLID = "slid" + EVENT_KEY$8;
        var EVENT_KEYDOWN$1 = "keydown" + EVENT_KEY$8;
        var EVENT_MOUSEENTER$1 = "mouseenter" + EVENT_KEY$8;
        var EVENT_MOUSELEAVE$1 = "mouseleave" + EVENT_KEY$8;
        var EVENT_DRAG_START = "dragstart" + EVENT_KEY$8;
        var EVENT_LOAD_DATA_API$3 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
        var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
        var CLASS_NAME_CAROUSEL = 'carousel';
        var CLASS_NAME_ACTIVE$2 = 'active';
        var CLASS_NAME_SLIDE = 'slide';
        var CLASS_NAME_END = 'carousel-item-end';
        var CLASS_NAME_START = 'carousel-item-start';
        var CLASS_NAME_NEXT = 'carousel-item-next';
        var CLASS_NAME_PREV = 'carousel-item-prev';
        var SELECTOR_ACTIVE = '.active';
        var SELECTOR_ITEM = '.carousel-item';
        var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
        var SELECTOR_ITEM_IMG = '.carousel-item img';
        var SELECTOR_INDICATORS = '.carousel-indicators';
        var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
        var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
        var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _KEY_TO_DIRECTION[ARROW_LEFT_KEY$1] = DIRECTION_RIGHT, _KEY_TO_DIRECTION[ARROW_RIGHT_KEY$1] = DIRECTION_LEFT, _KEY_TO_DIRECTION);
        var Default$b = {
            interval: 5000,
            keyboard: true,
            pause: 'hover',
            ride: false,
            touch: true,
            wrap: true
        };
        var DefaultType$b = {
            interval: '(number|boolean)',
            // TODO:v6 remove boolean support
            keyboard: 'boolean',
            pause: '(string|boolean)',
            ride: '(boolean|string)',
            touch: 'boolean',
            wrap: 'boolean'
        };
        /**
         * Class definition
         */
        var Carousel = /*#__PURE__*/ function (_BaseComponent3) {
            _inheritsLoose(Carousel, _BaseComponent3);

            function Carousel(element, config) {
                var _this5;
                _this5 = _BaseComponent3.call(this, element, config) || this;
                _this5._interval = null;
                _this5._activeElement = null;
                _this5._isSliding = false;
                _this5.touchTimeout = null;
                _this5._swipeHelper = null;
                _this5._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this5._element);
                _this5._addEventListeners();
                if (_this5._config.ride === CLASS_NAME_CAROUSEL) {
                    _this5.cycle();
                }
                return _this5;
            }
            // Getters
            var _proto6 = Carousel.prototype;
            // Public
            _proto6.next = function next() {
                this._slide(ORDER_NEXT);
            };
            _proto6.nextWhenVisible = function nextWhenVisible() {
                // FIXME TODO use `document.visibilityState`
                // Don't call next when the page isn't visible
                // or the carousel or its parent isn't visible
                if (!document.hidden && isVisible(this._element)) {
                    this.next();
                }
            };
            _proto6.prev = function prev() {
                this._slide(ORDER_PREV);
            };
            _proto6.pause = function pause() {
                if (this._isSliding) {
                    triggerTransitionEnd(this._element);
                }
                this._clearInterval();
            };
            _proto6.cycle = function cycle() {
                var _this6 = this;
                this._clearInterval();
                this._updateInterval();
                this._interval = setInterval(function () {
                    return _this6.nextWhenVisible();
                }, this._config.interval);
            };
            _proto6._maybeEnableCycle = function _maybeEnableCycle() {
                var _this7 = this;
                if (!this._config.ride) {
                    return;
                }
                if (this._isSliding) {
                    EventHandler.one(this._element, EVENT_SLID, function () {
                        return _this7.cycle();
                    });
                    return;
                }
                this.cycle();
            };
            _proto6.to = function to(index) {
                var _this8 = this;
                var items = this._getItems();
                if (index > items.length - 1 || index < 0) {
                    return;
                }
                if (this._isSliding) {
                    EventHandler.one(this._element, EVENT_SLID, function () {
                        return _this8.to(index);
                    });
                    return;
                }
                var activeIndex = this._getItemIndex(this._getActive());
                if (activeIndex === index) {
                    return;
                }
                var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
                this._slide(order, items[index]);
            };
            _proto6.dispose = function dispose() {
                if (this._swipeHelper) {
                    this._swipeHelper.dispose();
                }
                _BaseComponent3.prototype.dispose.call(this);
            }
            // Private
            ;
            _proto6._configAfterMerge = function _configAfterMerge(config) {
                config.defaultInterval = config.interval;
                return config;
            };
            _proto6._addEventListeners = function _addEventListeners() {
                var _this9 = this;
                if (this._config.keyboard) {
                    EventHandler.on(this._element, EVENT_KEYDOWN$1, function (event) {
                        return _this9._keydown(event);
                    });
                }
                if (this._config.pause === 'hover') {
                    EventHandler.on(this._element, EVENT_MOUSEENTER$1, function () {
                        return _this9.pause();
                    });
                    EventHandler.on(this._element, EVENT_MOUSELEAVE$1, function () {
                        return _this9._maybeEnableCycle();
                    });
                }
                if (this._config.touch && Swipe.isSupported()) {
                    this._addTouchEventListeners();
                }
            };
            _proto6._addTouchEventListeners = function _addTouchEventListeners() {
                var _this10 = this;
                for (var _iterator4 = _createForOfIteratorHelperLoose(SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)), _step4; !(_step4 = _iterator4()).done;) {
                    var img = _step4.value;
                    EventHandler.on(img, EVENT_DRAG_START, function (event) {
                        return event.preventDefault();
                    });
                }
                var endCallBack = function endCallBack() {
                    if (_this10._config.pause !== 'hover') {
                        return;
                    }
                    // If it's a touch-enabled device, mouseenter/leave are fired as
                    // part of the mouse compatibility events on first tap - the carousel
                    // would stop cycling until user tapped out of it;
                    // here, we listen for touchend, explicitly pause the carousel
                    // (as if it's the second time we tap on it, mouseenter compat event
                    // is NOT fired) and after a timeout (to allow for mouse compatibility
                    // events to fire) we explicitly restart cycling
                    _this10.pause();
                    if (_this10.touchTimeout) {
                        clearTimeout(_this10.touchTimeout);
                    }
                    _this10.touchTimeout = setTimeout(function () {
                        return _this10._maybeEnableCycle();
                    }, TOUCHEVENT_COMPAT_WAIT + _this10._config.interval);
                };
                var swipeConfig = {
                    leftCallback: function leftCallback() {
                        return _this10._slide(_this10._directionToOrder(DIRECTION_LEFT));
                    },
                    rightCallback: function rightCallback() {
                        return _this10._slide(_this10._directionToOrder(DIRECTION_RIGHT));
                    },
                    endCallback: endCallBack
                };
                this._swipeHelper = new Swipe(this._element, swipeConfig);
            };
            _proto6._keydown = function _keydown(event) {
                if (/input|textarea/i.test(event.target.tagName)) {
                    return;
                }
                var direction = KEY_TO_DIRECTION[event.key];
                if (direction) {
                    event.preventDefault();
                    this._slide(this._directionToOrder(direction));
                }
            };
            _proto6._getItemIndex = function _getItemIndex(element) {
                return this._getItems().indexOf(element);
            };
            _proto6._setActiveIndicatorElement = function _setActiveIndicatorElement(index) {
                if (!this._indicatorsElement) {
                    return;
                }
                var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
                activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
                activeIndicator.removeAttribute('aria-current');
                var newActiveIndicator = SelectorEngine.findOne("[data-bs-slide-to=\"" + index + "\"]", this._indicatorsElement);
                if (newActiveIndicator) {
                    newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
                    newActiveIndicator.setAttribute('aria-current', 'true');
                }
            };
            _proto6._updateInterval = function _updateInterval() {
                var element = this._activeElement || this._getActive();
                if (!element) {
                    return;
                }
                var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
                this._config.interval = elementInterval || this._config.defaultInterval;
            };
            _proto6._slide = function _slide(order, element) {
                var _this11 = this;
                if (element === void 0) {
                    element = null;
                }
                if (this._isSliding) {
                    return;
                }
                var activeElement = this._getActive();
                var isNext = order === ORDER_NEXT;
                var nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
                if (nextElement === activeElement) {
                    return;
                }
                var nextElementIndex = this._getItemIndex(nextElement);
                var triggerEvent = function triggerEvent(eventName) {
                    return EventHandler.trigger(_this11._element, eventName, {
                        relatedTarget: nextElement,
                        direction: _this11._orderToDirection(order),
                        from: _this11._getItemIndex(activeElement),
                        to: nextElementIndex
                    });
                };
                var slideEvent = triggerEvent(EVENT_SLIDE);
                if (slideEvent.defaultPrevented) {
                    return;
                }
                if (!activeElement || !nextElement) {
                    // Some weirdness is happening, so we bail
                    // TODO: change tests that use empty divs to avoid this check
                    return;
                }
                var isCycling = Boolean(this._interval);
                this.pause();
                this._isSliding = true;
                this._setActiveIndicatorElement(nextElementIndex);
                this._activeElement = nextElement;
                var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
                var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
                nextElement.classList.add(orderClassName);
                reflow(nextElement);
                activeElement.classList.add(directionalClassName);
                nextElement.classList.add(directionalClassName);
                var completeCallBack = function completeCallBack() {
                    nextElement.classList.remove(directionalClassName, orderClassName);
                    nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                    activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                    _this11._isSliding = false;
                    triggerEvent(EVENT_SLID);
                };
                this._queueCallback(completeCallBack, activeElement, this._isAnimated());
                if (isCycling) {
                    this.cycle();
                }
            };
            _proto6._isAnimated = function _isAnimated() {
                return this._element.classList.contains(CLASS_NAME_SLIDE);
            };
            _proto6._getActive = function _getActive() {
                return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            };
            _proto6._getItems = function _getItems() {
                return SelectorEngine.find(SELECTOR_ITEM, this._element);
            };
            _proto6._clearInterval = function _clearInterval() {
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
            };
            _proto6._directionToOrder = function _directionToOrder(direction) {
                if (isRTL()) {
                    return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
                }
                return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
            };
            _proto6._orderToDirection = function _orderToDirection(order) {
                if (isRTL()) {
                    return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
                }
                return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
            }
            // Static
            ;
            Carousel.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Carousel.getOrCreateInstance(this, config);
                    if (typeof config === 'number') {
                        data.to(config);
                        return;
                    }
                    if (typeof config === 'string') {
                        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                            throw new TypeError("No method named \"" + config + "\"");
                        }
                        data[config]();
                    }
                });
            };
            _createClass(Carousel, null, [{
                key: "Default",
                get: function get() {
                    return Default$b;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$b;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$c;
                }
            }]);
            return Carousel;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
            var target = SelectorEngine.getElementFromSelector(this);
            if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
                return;
            }
            event.preventDefault();
            var carousel = Carousel.getOrCreateInstance(target);
            var slideIndex = this.getAttribute('data-bs-slide-to');
            if (slideIndex) {
                carousel.to(slideIndex);
                carousel._maybeEnableCycle();
                return;
            }
            if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
                carousel.next();
                carousel._maybeEnableCycle();
                return;
            }
            carousel.prev();
            carousel._maybeEnableCycle();
        });
        EventHandler.on(window, EVENT_LOAD_DATA_API$3, function () {
            var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
            for (var _iterator5 = _createForOfIteratorHelperLoose(carousels), _step5; !(_step5 = _iterator5()).done;) {
                var carousel = _step5.value;
                Carousel.getOrCreateInstance(carousel);
            }
        });
        /**
         * jQuery
         */
        defineJQueryPlugin(Carousel);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap collapse.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$b = 'collapse';
        var DATA_KEY$7 = 'bs.collapse';
        var EVENT_KEY$7 = "." + DATA_KEY$7;
        var DATA_API_KEY$4 = '.data-api';
        var EVENT_SHOW$6 = "show" + EVENT_KEY$7;
        var EVENT_SHOWN$6 = "shown" + EVENT_KEY$7;
        var EVENT_HIDE$6 = "hide" + EVENT_KEY$7;
        var EVENT_HIDDEN$6 = "hidden" + EVENT_KEY$7;
        var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
        var CLASS_NAME_SHOW$7 = 'show';
        var CLASS_NAME_COLLAPSE = 'collapse';
        var CLASS_NAME_COLLAPSING = 'collapsing';
        var CLASS_NAME_COLLAPSED = 'collapsed';
        var CLASS_NAME_DEEPER_CHILDREN = ":scope ." + CLASS_NAME_COLLAPSE + " ." + CLASS_NAME_COLLAPSE;
        var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
        var WIDTH = 'width';
        var HEIGHT = 'height';
        var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
        var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
        var Default$a = {
            parent: null,
            toggle: true
        };
        var DefaultType$a = {
            parent: '(null|element)',
            toggle: 'boolean'
        };
        /**
         * Class definition
         */
        var Collapse = /*#__PURE__*/ function (_BaseComponent4) {
            _inheritsLoose(Collapse, _BaseComponent4);

            function Collapse(element, config) {
                var _this12;
                _this12 = _BaseComponent4.call(this, element, config) || this;
                _this12._isTransitioning = false;
                _this12._triggerArray = [];
                var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
                for (var _iterator6 = _createForOfIteratorHelperLoose(toggleList), _step6; !(_step6 = _iterator6()).done;) {
                    var elem = _step6.value;
                    var selector = SelectorEngine.getSelectorFromElement(elem);
                    var filterElement = SelectorEngine.find(selector).filter(function (foundElement) {
                        return foundElement === _this12._element;
                    });
                    if (selector !== null && filterElement.length) {
                        _this12._triggerArray.push(elem);
                    }
                }
                _this12._initializeChildren();
                if (!_this12._config.parent) {
                    _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown());
                }
                if (_this12._config.toggle) {
                    _this12.toggle();
                }
                return _this12;
            }
            // Getters
            var _proto7 = Collapse.prototype;
            // Public
            _proto7.toggle = function toggle() {
                if (this._isShown()) {
                    this.hide();
                } else {
                    this.show();
                }
            };
            _proto7.show = function show() {
                var _this13 = this;
                if (this._isTransitioning || this._isShown()) {
                    return;
                }
                var activeChildren = [];
                // find active children
                if (this._config.parent) {
                    activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(function (element) {
                        return element !== _this13._element;
                    }).map(function (element) {
                        return Collapse.getOrCreateInstance(element, {
                            toggle: false
                        });
                    });
                }
                if (activeChildren.length && activeChildren[0]._isTransitioning) {
                    return;
                }
                var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
                if (startEvent.defaultPrevented) {
                    return;
                }
                for (var _iterator7 = _createForOfIteratorHelperLoose(activeChildren), _step7; !(_step7 = _iterator7()).done;) {
                    var activeInstance = _step7.value;
                    activeInstance.hide();
                }
                var dimension = this._getDimension();
                this._element.classList.remove(CLASS_NAME_COLLAPSE);
                this._element.classList.add(CLASS_NAME_COLLAPSING);
                this._element.style[dimension] = 0;
                this._addAriaAndCollapsedClass(this._triggerArray, true);
                this._isTransitioning = true;
                var complete = function complete() {
                    _this13._isTransitioning = false;
                    _this13._element.classList.remove(CLASS_NAME_COLLAPSING);
                    _this13._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                    _this13._element.style[dimension] = '';
                    EventHandler.trigger(_this13._element, EVENT_SHOWN$6);
                };
                var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                var scrollSize = "scroll" + capitalizedDimension;
                this._queueCallback(complete, this._element, true);
                this._element.style[dimension] = this._element[scrollSize] + "px";
            };
            _proto7.hide = function hide() {
                var _this14 = this;
                if (this._isTransitioning || !this._isShown()) {
                    return;
                }
                var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
                if (startEvent.defaultPrevented) {
                    return;
                }
                var dimension = this._getDimension();
                this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_COLLAPSING);
                this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                for (var _iterator8 = _createForOfIteratorHelperLoose(this._triggerArray), _step8; !(_step8 = _iterator8()).done;) {
                    var trigger = _step8.value;
                    var element = SelectorEngine.getElementFromSelector(trigger);
                    if (element && !this._isShown(element)) {
                        this._addAriaAndCollapsedClass([trigger], false);
                    }
                }
                this._isTransitioning = true;
                var complete = function complete() {
                    _this14._isTransitioning = false;
                    _this14._element.classList.remove(CLASS_NAME_COLLAPSING);
                    _this14._element.classList.add(CLASS_NAME_COLLAPSE);
                    EventHandler.trigger(_this14._element, EVENT_HIDDEN$6);
                };
                this._element.style[dimension] = '';
                this._queueCallback(complete, this._element, true);
            };
            _proto7._isShown = function _isShown(element) {
                if (element === void 0) {
                    element = this._element;
                }
                return element.classList.contains(CLASS_NAME_SHOW$7);
            }
            // Private
            ;
            _proto7._configAfterMerge = function _configAfterMerge(config) {
                config.toggle = Boolean(config.toggle); // Coerce string values
                config.parent = getElement(config.parent);
                return config;
            };
            _proto7._getDimension = function _getDimension() {
                return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
            };
            _proto7._initializeChildren = function _initializeChildren() {
                if (!this._config.parent) {
                    return;
                }
                var children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
                for (var _iterator9 = _createForOfIteratorHelperLoose(children), _step9; !(_step9 = _iterator9()).done;) {
                    var element = _step9.value;
                    var selected = SelectorEngine.getElementFromSelector(element);
                    if (selected) {
                        this._addAriaAndCollapsedClass([element], this._isShown(selected));
                    }
                }
            };
            _proto7._getFirstLevelChildren = function _getFirstLevelChildren(selector) {
                var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                // remove children if greater depth
                return SelectorEngine.find(selector, this._config.parent).filter(function (element) {
                    return !children.includes(element);
                });
            };
            _proto7._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(triggerArray, isOpen) {
                if (!triggerArray.length) {
                    return;
                }
                for (var _iterator10 = _createForOfIteratorHelperLoose(triggerArray), _step10; !(_step10 = _iterator10()).done;) {
                    var element = _step10.value;
                    element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
                    element.setAttribute('aria-expanded', isOpen);
                }
            }
            // Static
            ;
            Collapse.jQueryInterface = function jQueryInterface(config) {
                var _config = {};
                if (typeof config === 'string' && /show|hide/.test(config)) {
                    _config.toggle = false;
                }
                return this.each(function () {
                    var data = Collapse.getOrCreateInstance(this, _config);
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"");
                        }
                        data[config]();
                    }
                });
            };
            _createClass(Collapse, null, [{
                key: "Default",
                get: function get() {
                    return Default$a;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$a;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$b;
                }
            }]);
            return Collapse;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
            // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
            if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
                event.preventDefault();
            }
            for (var _iterator11 = _createForOfIteratorHelperLoose(SelectorEngine.getMultipleElementsFromSelector(this)), _step11; !(_step11 = _iterator11()).done;) {
                var element = _step11.value;
                Collapse.getOrCreateInstance(element, {
                    toggle: false
                }).toggle();
            }
        });
        /**
         * jQuery
         */
        defineJQueryPlugin(Collapse);
        var top = 'top';
        var bottom = 'bottom';
        var right = 'right';
        var left = 'left';
        var auto = 'auto';
        var basePlacements = [top, bottom, right, left];
        var start = 'start';
        var end = 'end';
        var clippingParents = 'clippingParents';
        var viewport = 'viewport';
        var popper = 'popper';
        var reference = 'reference';
        var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function (acc, placement) {
            return acc.concat([placement + "-" + start, placement + "-" + end]);
        }, []);
        var placements = /*#__PURE__*/ [].concat(basePlacements, [auto]).reduce(function (acc, placement) {
            return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
        }, []); // modifiers that need to read the DOM
        var beforeRead = 'beforeRead';
        var read = 'read';
        var afterRead = 'afterRead'; // pure-logic modifiers
        var beforeMain = 'beforeMain';
        var main = 'main';
        var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
        var beforeWrite = 'beforeWrite';
        var write = 'write';
        var afterWrite = 'afterWrite';
        var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

        function getNodeName(element) {
            return element ? (element.nodeName || '').toLowerCase() : null;
        }

        function getWindow(node) {
            if (node == null) {
                return window;
            }
            if (node.toString() !== '[object Window]') {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }

        function isElement(node) {
            var OwnElement = getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }

        function isHTMLElement(node) {
            var OwnElement = getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }

        function isShadowRoot(node) {
            // IE 11 has no ShadowRoot
            if (typeof ShadowRoot === 'undefined') {
                return false;
            }
            var OwnElement = getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        // and applies them to the HTMLElements such as popper and arrow
        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach(function (name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name]; // arrow is optional + virtual elements
                if (!isHTMLElement(element) || !getNodeName(element)) {
                    return;
                } // Flow doesn't support to extend this property, but it's the most
                // effective way to apply styles to an HTMLElement
                // $FlowFixMe[cannot-write]
                Object.assign(element.style, style);
                Object.keys(attributes).forEach(function (name) {
                    var value = attributes[name];
                    if (value === false) {
                        element.removeAttribute(name);
                    } else {
                        element.setAttribute(name, value === true ? '' : value);
                    }
                });
            });
        }

        function effect$2(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0'
                },
                arrow: {
                    position: 'absolute'
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) {
                Object.assign(state.elements.arrow.style, initialStyles.arrow);
            }
            return function () {
                Object.keys(state.elements).forEach(function (name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
                    var style = styleProperties.reduce(function (style, property) {
                        style[property] = '';
                        return style;
                    }, {}); // arrow is optional + virtual elements
                    if (!isHTMLElement(element) || !getNodeName(element)) {
                        return;
                    }
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach(function (attribute) {
                        element.removeAttribute(attribute);
                    });
                });
            };
        } // eslint-disable-next-line import/no-unused-modules
        var applyStyles$1 = {
            name: 'applyStyles',
            enabled: true,
            phase: 'write',
            fn: applyStyles,
            effect: effect$2,
            requires: ['computeStyles']
        };

        function getBasePlacement(placement) {
            return placement.split('-')[0];
        }
        var max = Math.max;
        var min = Math.min;
        var round = Math.round;

        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
                return uaData.brands.map(function (item) {
                    return item.brand + "/" + item.version;
                }).join(' ');
            }
            return navigator.userAgent;
        }

        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }

        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) {
                includeScale = false;
            }
            if (isFixedStrategy === void 0) {
                isFixedStrategy = false;
            }
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && isHTMLElement(element)) {
                scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = isElement(element) ? getWindow(element) : window,
                visualViewport = _ref.visualViewport;
            var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width: width,
                height: height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x: x,
                y: y
            };
        }
        // means it doesn't take into account transforms.
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
            // Fixes https://github.com/popperjs/popper-core/issues/1223
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) {
                width = clientRect.width;
            }
            if (Math.abs(clientRect.height - height) <= 1) {
                height = clientRect.height;
            }
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width: width,
                height: height
            };
        }

        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
            if (parent.contains(child)) {
                return true;
            } // then fallback to custom implementation with Shadow DOM support
            else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) {
                        return true;
                    } // $FlowFixMe[prop-missing]: need a better way to handle this...
                    next = next.parentNode || next.host;
                } while (next);
            } // Give up, the result is false
            return false;
        }

        function getComputedStyle$1(element) {
            return getWindow(element).getComputedStyle(element);
        }

        function isTableElement(element) {
            return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
        }

        function getDocumentElement(element) {
            // $FlowFixMe[incompatible-return]: assume body is always available
            return ((isElement(element) ? element.ownerDocument :
                // $FlowFixMe[prop-missing]
                element.document) || window.document).documentElement;
        }

        function getParentNode(element) {
            if (getNodeName(element) === 'html') {
                return element;
            }
            return (
                // this is a quicker (but less type safe) way to save quite some bytes from the bundle
                // $FlowFixMe[incompatible-return]
                // $FlowFixMe[prop-missing]
                element.assignedSlot ||
                // step into the shadow DOM of the parent of a slotted node
                element.parentNode || (
                    // DOM Element detected
                    isShadowRoot(element) ? element.host : null) ||
                // ShadowRoot detected
                // $FlowFixMe[incompatible-call]: HTMLElement is a Node
                getDocumentElement(element) // fallback
            );
        }

        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) ||
                // https://github.com/popperjs/popper-core/issues/837
                getComputedStyle$1(element).position === 'fixed') {
                return null;
            }
            return element.offsetParent;
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
        // return the containing block
        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test(getUAString());
            var isIE = /Trident/i.test(getUAString());
            if (isIE && isHTMLElement(element)) {
                // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
                var elementCss = getComputedStyle$1(element);
                if (elementCss.position === 'fixed') {
                    return null;
                }
            }
            var currentNode = getParentNode(element);
            if (isShadowRoot(currentNode)) {
                currentNode = currentNode.host;
            }
            while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
                // create a containing block.
                // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
                if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
                    return currentNode;
                } else {
                    currentNode = currentNode.parentNode;
                }
            }
            return null;
        } // Gets the closest ancestor positioned element. Handles some edge cases,
        // such as table ancestors and cross browser bugs.
        function getOffsetParent(element) {
            var window = getWindow(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
                offsetParent = getTrueOffsetParent(offsetParent);
            }
            if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
                return window;
            }
            return offsetParent || getContainingBlock(element) || window;
        }

        function getMainAxisFromPlacement(placement) {
            return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
        }

        function within(min$1, value, max$1) {
            return max(min$1, min(value, max$1));
        }

        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }

        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }

        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }

        function expandToHashMap(value, keys) {
            return keys.reduce(function (hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }, {});
        }
        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
        };

        function arrow(_ref) {
            var _state$modifiersData$;
            var state = _ref.state,
                name = _ref.name,
                options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = getBasePlacement(state.placement);
            var axis = getMainAxisFromPlacement(basePlacement);
            var isVertical = [left, right].indexOf(basePlacement) >= 0;
            var len = isVertical ? 'height' : 'width';
            if (!arrowElement || !popperOffsets) {
                return;
            }
            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = getLayoutRect(arrowElement);
            var minProp = axis === 'y' ? top : left;
            var maxProp = axis === 'y' ? bottom : right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = getOffsetParent(arrowElement);
            var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
            // outside of the popper bounds
            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = within(min, center, max); // Prevents breaking syntax highlighting...
            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }

        function effect$1(_ref2) {
            var state = _ref2.state,
                options = _ref2.options;
            var _options$element = options.element,
                arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
            if (arrowElement == null) {
                return;
            } // CSS selector
            if (typeof arrowElement === 'string') {
                arrowElement = state.elements.popper.querySelector(arrowElement);
                if (!arrowElement) {
                    return;
                }
            }
            if (!contains(state.elements.popper, arrowElement)) {
                return;
            }
            state.elements.arrow = arrowElement;
        } // eslint-disable-next-line import/no-unused-modules
        var arrow$1 = {
            name: 'arrow',
            enabled: true,
            phase: 'main',
            fn: arrow,
            effect: effect$1,
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow']
        };

        function getVariation(placement) {
            return placement.split('-')[1];
        }
        var unsetSides = {
            top: 'auto',
            right: 'auto',
            bottom: 'auto',
            left: 'auto'
        }; // Round the offsets to the nearest suitable subpixel based on the DPR.
        // Zooming can change the DPR, but it seems to report a value that will
        // cleanly divide the values into the appropriate subpixels.
        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x,
                y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }

        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper,
                popperRect = _ref2.popperRect,
                placement = _ref2.placement,
                variation = _ref2.variation,
                offsets = _ref2.offsets,
                position = _ref2.position,
                gpuAcceleration = _ref2.gpuAcceleration,
                adaptive = _ref2.adaptive,
                roundOffsets = _ref2.roundOffsets,
                isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x,
                x = _offsets$x === void 0 ? 0 : _offsets$x,
                _offsets$y = offsets.y,
                y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
                x: x,
                y: y
            }) : {
                x: x,
                y: y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty('x');
            var hasY = offsets.hasOwnProperty('y');
            var sideX = left;
            var sideY = top;
            var win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = 'clientHeight';
                var widthProp = 'clientWidth';
                if (offsetParent === getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);
                    if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
                        heightProp = 'scrollHeight';
                        widthProp = 'scrollWidth';
                    }
                } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
                offsetParent = offsetParent;
                if (placement === top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
                        // $FlowFixMe[prop-missing]
                        offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === left || (placement === top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
                        // $FlowFixMe[prop-missing]
                        offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position: position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x: x,
                y: y
            }, getWindow(popper)) : {
                x: x,
                y: y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
        }

        function computeStyles(_ref5) {
            var state = _ref5.state,
                options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration,
                gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
                _options$adaptive = options.adaptive,
                adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
                _options$roundOffsets = options.roundOffsets,
                roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration: gpuAcceleration,
                isFixed: state.options.strategy === 'fixed'
            };
            if (state.modifiersData.popperOffsets != null) {
                state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                    offsets: state.modifiersData.popperOffsets,
                    position: state.options.strategy,
                    adaptive: adaptive,
                    roundOffsets: roundOffsets
                })));
            }
            if (state.modifiersData.arrow != null) {
                state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                    offsets: state.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: false,
                    roundOffsets: roundOffsets
                })));
            }
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                'data-popper-placement': state.placement
            });
        } // eslint-disable-next-line import/no-unused-modules
        var computeStyles$1 = {
            name: 'computeStyles',
            enabled: true,
            phase: 'beforeWrite',
            fn: computeStyles,
            data: {}
        };
        var passive = {
            passive: true
        };

        function effect(_ref) {
            var state = _ref.state,
                instance = _ref.instance,
                options = _ref.options;
            var _options$scroll = options.scroll,
                scroll = _options$scroll === void 0 ? true : _options$scroll,
                _options$resize = options.resize,
                resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) {
                scrollParents.forEach(function (scrollParent) {
                    scrollParent.addEventListener('scroll', instance.update, passive);
                });
            }
            if (resize) {
                window.addEventListener('resize', instance.update, passive);
            }
            return function () {
                if (scroll) {
                    scrollParents.forEach(function (scrollParent) {
                        scrollParent.removeEventListener('scroll', instance.update, passive);
                    });
                }
                if (resize) {
                    window.removeEventListener('resize', instance.update, passive);
                }
            };
        } // eslint-disable-next-line import/no-unused-modules
        var eventListeners = {
            name: 'eventListeners',
            enabled: true,
            phase: 'write',
            fn: function fn() {},
            effect: effect,
            data: {}
        };
        var hash$1 = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };

        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, function (matched) {
                return hash$1[matched];
            });
        }
        var hash = {
            start: 'end',
            end: 'start'
        };

        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, function (matched) {
                return hash[matched];
            });
        }

        function getWindowScroll(node) {
            var win = getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            };
        }

        function getWindowScrollBarX(element) {
            // If <html> has a CSS width greater than the viewport, then this will be
            // incorrect for RTL.
            // Popper 1 is broken in this case and never had a bug report so let's assume
            // it's not an issue. I don't think anyone ever specifies width on <html>
            // anyway.
            // Browsers where the left scrollbar doesn't cause an issue report `0` for
            // this (e.g. Edge 2019, IE11, Safari)
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }

        function getViewportRect(element, strategy) {
            var win = getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = isLayoutViewport();
                if (layoutViewport || !layoutViewport && strategy === 'fixed') {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width: width,
                height: height,
                x: x + getWindowScrollBarX(element),
                y: y
            };
        }
        // of the `<html>` and `<body>` rect bounds if horizontally scrollable
        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;
            if (getComputedStyle$1(body || html).direction === 'rtl') {
                x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
            }
            return {
                width: width,
                height: height,
                x: x,
                y: y
            };
        }

        function isScrollParent(element) {
            // Firefox wants us to check `-x` and `-y` variations as well
            var _getComputedStyle = getComputedStyle$1(element),
                overflow = _getComputedStyle.overflow,
                overflowX = _getComputedStyle.overflowX,
                overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }

        function getScrollParent(node) {
            if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
                // $FlowFixMe[incompatible-return]: assume body is always available
                return node.ownerDocument.body;
            }
            if (isHTMLElement(node) && isScrollParent(node)) {
                return node;
            }
            return getScrollParent(getParentNode(node));
        }
        /*
        given a DOM element, return the list of all scroll parents, up the list of ancesors
        until we get to the top window object. This list is what we attach scroll listeners
        to, because if any of these parent elements scroll, we'll need to re-calculate the
        reference element's position.
        */
        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) {
                list = [];
            }
            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow(scrollParent);
            var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList :
                // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
                updatedList.concat(listScrollParents(getParentNode(target)));
        }

        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }

        function getInnerBoundingClientRect(element, strategy) {
            var rect = getBoundingClientRect(element, false, strategy === 'fixed');
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }

        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        } // A "clipping parent" is an overflowable container with the characteristic of
        // clipping (or hiding) overflowing elements with a position different from
        // `initial`
        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
            if (!isElement(clipperElement)) {
                return [];
            } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
            return clippingParents.filter(function (clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
            });
        } // Gets the maximum area that the element is visible in due to any number of
        // clipping parents
        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = max(rect.top, accRect.top);
                accRect.right = min(rect.right, accRect.right);
                accRect.bottom = min(rect.bottom, accRect.bottom);
                accRect.left = max(rect.left, accRect.left);
                return accRect;
            }, getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }

        function computeOffsets(_ref) {
            var reference = _ref.reference,
                element = _ref.element,
                placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
                case top:
                    offsets = {
                        x: commonX,
                        y: reference.y - element.height
                    };
                    break;
                case bottom:
                    offsets = {
                        x: commonX,
                        y: reference.y + reference.height
                    };
                    break;
                case right:
                    offsets = {
                        x: reference.x + reference.width,
                        y: commonY
                    };
                    break;
                case left:
                    offsets = {
                        x: reference.x - element.width,
                        y: commonY
                    };
                    break;
                default:
                    offsets = {
                        x: reference.x,
                        y: reference.y
                    };
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === 'y' ? 'height' : 'width';
                switch (variation) {
                    case start:
                        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                        break;
                    case end:
                        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                        break;
                }
            }
            return offsets;
        }

        function detectOverflow(state, options) {
            if (options === void 0) {
                options = {};
            }
            var _options = options,
                _options$placement = _options.placement,
                placement = _options$placement === void 0 ? state.placement : _options$placement,
                _options$strategy = _options.strategy,
                strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
                _options$boundary = _options.boundary,
                boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
                _options$rootBoundary = _options.rootBoundary,
                rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
                _options$elementConte = _options.elementContext,
                elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
                _options$altBoundary = _options.altBoundary,
                altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
                _options$padding = _options.padding,
                padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: 'absolute',
                placement: placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
            // 0 or negative = within the clipping rect
            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach(function (key) {
                    var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
                    overflowOffsets[key] += offset[axis] * multiply;
                });
            }
            return overflowOffsets;
        }

        function computeAutoPlacement(state, options) {
            if (options === void 0) {
                options = {};
            }
            var _options = options,
                placement = _options.placement,
                boundary = _options.boundary,
                rootBoundary = _options.rootBoundary,
                padding = _options.padding,
                flipVariations = _options.flipVariations,
                _options$allowedAutoP = _options.allowedAutoPlacements,
                allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
            var variation = getVariation(placement);
            var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
                return getVariation(placement) === variation;
            }) : basePlacements;
            var allowedPlacements = placements$1.filter(function (placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            });
            if (allowedPlacements.length === 0) {
                allowedPlacements = placements$1;
            } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
            var overflows = allowedPlacements.reduce(function (acc, placement) {
                acc[placement] = detectOverflow(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding
                })[getBasePlacement(placement)];
                return acc;
            }, {});
            return Object.keys(overflows).sort(function (a, b) {
                return overflows[a] - overflows[b];
            });
        }

        function getExpandedFallbackPlacements(placement) {
            if (getBasePlacement(placement) === auto) {
                return [];
            }
            var oppositePlacement = getOppositePlacement(placement);
            return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
        }

        function flip(_ref) {
            var state = _ref.state,
                options = _ref.options,
                name = _ref.name;
            if (state.modifiersData[name]._skip) {
                return;
            }
            var _options$mainAxis = options.mainAxis,
                checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                _options$altAxis = options.altAxis,
                checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
                specifiedFallbackPlacements = options.fallbackPlacements,
                padding = options.padding,
                boundary = options.boundary,
                rootBoundary = options.rootBoundary,
                altBoundary = options.altBoundary,
                _options$flipVariatio = options.flipVariations,
                flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
                allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = getBasePlacement(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
                return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    padding: padding,
                    flipVariations: flipVariations,
                    allowedAutoPlacements: allowedAutoPlacements
                }) : placement);
            }, []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map();
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];
            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];
                var _basePlacement = getBasePlacement(placement);
                var isStartVariation = getVariation(placement) === start;
                var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
                var len = isVertical ? 'width' : 'height';
                var overflow = detectOverflow(state, {
                    placement: placement,
                    boundary: boundary,
                    rootBoundary: rootBoundary,
                    altBoundary: altBoundary,
                    padding: padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
                if (referenceRect[len] > popperRect[len]) {
                    mainVariationSide = getOppositePlacement(mainVariationSide);
                }
                var altVariationSide = getOppositePlacement(mainVariationSide);
                var checks = [];
                if (checkMainAxis) {
                    checks.push(overflow[_basePlacement] <= 0);
                }
                if (checkAltAxis) {
                    checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                }
                if (checks.every(function (check) {
                        return check;
                    })) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }
                checksMap.set(placement, checks);
            }
            if (makeFallbackChecks) {
                // `2` may be desired in some cases – research later
                var numberOfChecks = flipVariations ? 3 : 1;
                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find(function (placement) {
                        var checks = checksMap.get(placement);
                        if (checks) {
                            return checks.slice(0, _i).every(function (check) {
                                return check;
                            });
                        }
                    });
                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };
                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);
                    if (_ret === "break") break;
                }
            }
            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        } // eslint-disable-next-line import/no-unused-modules
        var flip$1 = {
            name: 'flip',
            enabled: true,
            phase: 'main',
            fn: flip,
            requiresIfExists: ['offset'],
            data: {
                _skip: false
            }
        };

        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) {
                preventedOffsets = {
                    x: 0,
                    y: 0
                };
            }
            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }

        function isAnySideFullyClipped(overflow) {
            return [top, right, bottom, left].some(function (side) {
                return overflow[side] >= 0;
            });
        }

        function hide(_ref) {
            var state = _ref.state,
                name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = detectOverflow(state, {
                elementContext: 'reference'
            });
            var popperAltOverflow = detectOverflow(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets: referenceClippingOffsets,
                popperEscapeOffsets: popperEscapeOffsets,
                isReferenceHidden: isReferenceHidden,
                hasPopperEscaped: hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                'data-popper-reference-hidden': isReferenceHidden,
                'data-popper-escaped': hasPopperEscaped
            });
        } // eslint-disable-next-line import/no-unused-modules
        var hide$1 = {
            name: 'hide',
            enabled: true,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: hide
        };

        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = getBasePlacement(placement);
            var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
            var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
                    placement: placement
                })) : offset,
                skidding = _ref[0],
                distance = _ref[1];
            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [left, right].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }

        function offset(_ref2) {
            var state = _ref2.state,
                options = _ref2.options,
                name = _ref2.name;
            var _options$offset = options.offset,
                offset = _options$offset === void 0 ? [0, 0] : _options$offset;
            var data = placements.reduce(function (acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }, {});
            var _data$state$placement = data[state.placement],
                x = _data$state$placement.x,
                y = _data$state$placement.y;
            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }
            state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules
        var offset$1 = {
            name: 'offset',
            enabled: true,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: offset
        };

        function popperOffsets(_ref) {
            var state = _ref.state,
                name = _ref.name;
            // Offsets are the actual position the popper needs to have to be
            // properly positioned near its reference element
            // This is the most basic placement, and will be adjusted by
            // the modifiers in the next step
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: 'absolute',
                placement: state.placement
            });
        } // eslint-disable-next-line import/no-unused-modules
        var popperOffsets$1 = {
            name: 'popperOffsets',
            enabled: true,
            phase: 'read',
            fn: popperOffsets,
            data: {}
        };

        function getAltAxis(axis) {
            return axis === 'x' ? 'y' : 'x';
        }

        function preventOverflow(_ref) {
            var state = _ref.state,
                options = _ref.options,
                name = _ref.name;
            var _options$mainAxis = options.mainAxis,
                checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
                _options$altAxis = options.altAxis,
                checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
                boundary = options.boundary,
                rootBoundary = options.rootBoundary,
                altBoundary = options.altBoundary,
                padding = options.padding,
                _options$tether = options.tether,
                tether = _options$tether === void 0 ? true : _options$tether,
                _options$tetherOffset = options.tetherOffset,
                tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                altBoundary: altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) {
                return;
            }
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === 'y' ? top : left;
                var altSide = mainAxis === 'y' ? bottom : right;
                var len = mainAxis === 'y' ? 'height' : 'width';
                var offset = popperOffsets[mainAxis];
                var min$1 = offset + overflow[mainSide];
                var max$1 = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
                // outside the reference bounds
                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
                // to include its full size in the calculation. If the reference is small
                // and near the edge of a boundary, the popper can overflow even if the
                // reference is not overflowing as well (e.g. virtual elements with no
                // width or height)
                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === 'x' ? top : left;
                var _altSide = mainAxis === 'x' ? bottom : right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === 'y' ? 'height' : 'width';
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules
        var preventOverflow$1 = {
            name: 'preventOverflow',
            enabled: true,
            phase: 'main',
            fn: preventOverflow,
            requiresIfExists: ['offset']
        };

        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }

        function getNodeScroll(node) {
            if (node === getWindow(node) || !isHTMLElement(node)) {
                return getWindowScroll(node);
            } else {
                return getHTMLElementScroll(node);
            }
        }

        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        } // Returns the composite rect of an element relative to its offsetParent.
        // Composite means it takes into account transforms as well as layout.
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) {
                isFixed = false;
            }
            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== 'body' ||
                    // https://github.com/popperjs/popper-core/issues/1078
                    isScrollParent(documentElement)) {
                    scroll = getNodeScroll(offsetParent);
                }
                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) {
                    offsets.x = getWindowScrollBarX(documentElement);
                }
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }

        function order(modifiers) {
            var map = new Map();
            var visited = new Set();
            var result = [];
            modifiers.forEach(function (modifier) {
                map.set(modifier.name, modifier);
            }); // On visiting object, check for its dependencies and visit them recursively
            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach(function (dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) {
                            sort(depModifier);
                        }
                    }
                });
                result.push(modifier);
            }
            modifiers.forEach(function (modifier) {
                if (!visited.has(modifier.name)) {
                    // check for visited object
                    sort(modifier);
                }
            });
            return result;
        }

        function orderModifiers(modifiers) {
            // order based on dependencies
            var orderedModifiers = order(modifiers); // order based on phase
            return modifierPhases.reduce(function (acc, phase) {
                return acc.concat(orderedModifiers.filter(function (modifier) {
                    return modifier.phase === phase;
                }));
            }, []);
        }

        function debounce(fn) {
            var pending;
            return function () {
                if (!pending) {
                    pending = new Promise(function (resolve) {
                        Promise.resolve().then(function () {
                            pending = undefined;
                            resolve(fn());
                        });
                    });
                }
                return pending;
            };
        }

        function mergeByName(modifiers) {
            var merged = modifiers.reduce(function (merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }, {}); // IE11 does not support Object.values
            return Object.keys(merged).map(function (key) {
                return merged[key];
            });
        }
        var DEFAULT_OPTIONS = {
            placement: 'bottom',
            modifiers: [],
            strategy: 'absolute'
        };

        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return !args.some(function (element) {
                return !(element && typeof element.getBoundingClientRect === 'function');
            });
        }

        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) {
                generatorOptions = {};
            }
            var _generatorOptions = generatorOptions,
                _generatorOptions$def = _generatorOptions.defaultModifiers,
                defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
                _generatorOptions$def2 = _generatorOptions.defaultOptions,
                defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) {
                    options = defaultOptions;
                }
                var state = {
                    placement: 'bottom',
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference: reference,
                        popper: popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state: state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        }; // Orders the modifiers based on their dependencies and `phase`
                        // properties
                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                        state.orderedModifiers = orderedModifiers.filter(function (m) {
                            return m.enabled;
                        });
                        runModifierEffects();
                        return instance.update();
                    },
                    // Sync update – it will always be executed, even if not necessary. This
                    // is useful for low frequency updates where sync behavior simplifies the
                    // logic.
                    // For high frequency updates (e.g. `resize` and `scroll` events), always
                    // prefer the async Popper#update method
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) {
                            return;
                        }
                        var _state$elements = state.elements,
                            reference = _state$elements.reference,
                            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                        // anymore
                        if (!areValidElements(reference, popper)) {
                            return;
                        } // Store the reference and popper rects to be read by modifiers
                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                            popper: getLayoutRect(popper)
                        }; // Modifiers have the ability to reset the current update cycle. The
                        // most common use case for this is the `flip` modifier changing the
                        // placement, which then needs to re-run all the modifiers, because the
                        // logic was previously ran for the previous placement and is therefore
                        // stale/incorrect
                        state.reset = false;
                        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                        // is filled with the initial data specified by the modifier. This means
                        // it doesn't persist and is fresh on each update.
                        // To ensure persistent data, use `${name}#persistent`
                        state.orderedModifiers.forEach(function (modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        });
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index],
                                fn = _state$orderedModifie.fn,
                                _state$orderedModifie2 = _state$orderedModifie.options,
                                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                                name = _state$orderedModifie.name;
                            if (typeof fn === 'function') {
                                state = fn({
                                    state: state,
                                    options: _options,
                                    name: name,
                                    instance: instance
                                }) || state;
                            }
                        }
                    },
                    // Async and optimistically optimized update – it will not be executed if
                    // not necessary (debounced to run at most once-per-tick)
                    update: debounce(function () {
                        return new Promise(function (resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        });
                    }),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) {
                    return instance;
                }
                instance.setOptions(options).then(function (state) {
                    if (!isDestroyed && options.onFirstUpdate) {
                        options.onFirstUpdate(state);
                    }
                }); // Modifiers have the ability to execute arbitrary code before the first
                // update cycle runs. They will be executed in the same order as the update
                // cycle. This is useful when a modifier adds some persistent data that
                // other modifiers need to use, but the modifier is run after the dependent
                // one.
                function runModifierEffects() {
                    state.orderedModifiers.forEach(function (_ref) {
                        var name = _ref.name,
                            _ref$options = _ref.options,
                            options = _ref$options === void 0 ? {} : _ref$options,
                            effect = _ref.effect;
                        if (typeof effect === 'function') {
                            var cleanupFn = effect({
                                state: state,
                                name: name,
                                instance: instance,
                                options: options
                            });
                            var noopFn = function noopFn() {};
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    });
                }

                function cleanupModifierEffects() {
                    effectCleanupFns.forEach(function (fn) {
                        return fn();
                    });
                    effectCleanupFns = [];
                }
                return instance;
            };
        }
        var createPopper$2 = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules
        var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
        var createPopper$1 = /*#__PURE__*/ popperGenerator({
            defaultModifiers: defaultModifiers$1
        }); // eslint-disable-next-line import/no-unused-modules
        var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
        var createPopper = /*#__PURE__*/ popperGenerator({
            defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules
        var Popper = /*#__PURE__*/ Object.freeze( /*#__PURE__*/ Object.defineProperty({
            __proto__: null,
            afterMain: afterMain,
            afterRead: afterRead,
            afterWrite: afterWrite,
            applyStyles: applyStyles$1,
            arrow: arrow$1,
            auto: auto,
            basePlacements: basePlacements,
            beforeMain: beforeMain,
            beforeRead: beforeRead,
            beforeWrite: beforeWrite,
            bottom: bottom,
            clippingParents: clippingParents,
            computeStyles: computeStyles$1,
            createPopper: createPopper,
            createPopperBase: createPopper$2,
            createPopperLite: createPopper$1,
            detectOverflow: detectOverflow,
            end: end,
            eventListeners: eventListeners,
            flip: flip$1,
            hide: hide$1,
            left: left,
            main: main,
            modifierPhases: modifierPhases,
            offset: offset$1,
            placements: placements,
            popper: popper,
            popperGenerator: popperGenerator,
            popperOffsets: popperOffsets$1,
            preventOverflow: preventOverflow$1,
            read: read,
            reference: reference,
            right: right,
            start: start,
            top: top,
            variationPlacements: variationPlacements,
            viewport: viewport,
            write: write
        }, Symbol.toStringTag, {
            value: 'Module'
        }));
        /**
         * --------------------------------------------------------------------------
         * Bootstrap dropdown.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$a = 'dropdown';
        var DATA_KEY$6 = 'bs.dropdown';
        var EVENT_KEY$6 = "." + DATA_KEY$6;
        var DATA_API_KEY$3 = '.data-api';
        var ESCAPE_KEY$2 = 'Escape';
        var TAB_KEY$1 = 'Tab';
        var ARROW_UP_KEY$1 = 'ArrowUp';
        var ARROW_DOWN_KEY$1 = 'ArrowDown';
        var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
        var EVENT_HIDE$5 = "hide" + EVENT_KEY$6;
        var EVENT_HIDDEN$5 = "hidden" + EVENT_KEY$6;
        var EVENT_SHOW$5 = "show" + EVENT_KEY$6;
        var EVENT_SHOWN$5 = "shown" + EVENT_KEY$6;
        var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
        var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$3;
        var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$3;
        var CLASS_NAME_SHOW$6 = 'show';
        var CLASS_NAME_DROPUP = 'dropup';
        var CLASS_NAME_DROPEND = 'dropend';
        var CLASS_NAME_DROPSTART = 'dropstart';
        var CLASS_NAME_DROPUP_CENTER = 'dropup-center';
        var CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
        var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
        var SELECTOR_DATA_TOGGLE_SHOWN = SELECTOR_DATA_TOGGLE$3 + "." + CLASS_NAME_SHOW$6;
        var SELECTOR_MENU = '.dropdown-menu';
        var SELECTOR_NAVBAR = '.navbar';
        var SELECTOR_NAVBAR_NAV = '.navbar-nav';
        var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
        var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
        var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
        var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
        var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
        var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
        var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
        var PLACEMENT_TOPCENTER = 'top';
        var PLACEMENT_BOTTOMCENTER = 'bottom';
        var Default$9 = {
            autoClose: true,
            boundary: 'clippingParents',
            display: 'dynamic',
            offset: [0, 2],
            popperConfig: null,
            reference: 'toggle'
        };
        var DefaultType$9 = {
            autoClose: '(boolean|string)',
            boundary: '(string|element)',
            display: 'string',
            offset: '(array|string|function)',
            popperConfig: '(null|object|function)',
            reference: '(string|element|object)'
        };
        /**
         * Class definition
         */
        var Dropdown = /*#__PURE__*/ function (_BaseComponent5) {
            _inheritsLoose(Dropdown, _BaseComponent5);

            function Dropdown(element, config) {
                var _this15;
                _this15 = _BaseComponent5.call(this, element, config) || this;
                _this15._popper = null;
                _this15._parent = _this15._element.parentNode; // dropdown wrapper
                // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
                _this15._menu = SelectorEngine.next(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.prev(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, _this15._parent);
                _this15._inNavbar = _this15._detectNavbar();
                return _this15;
            }
            // Getters
            var _proto8 = Dropdown.prototype;
            // Public
            _proto8.toggle = function toggle() {
                return this._isShown() ? this.hide() : this.show();
            };
            _proto8.show = function show() {
                if (isDisabled(this._element) || this._isShown()) {
                    return;
                }
                var relatedTarget = {
                    relatedTarget: this._element
                };
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
                if (showEvent.defaultPrevented) {
                    return;
                }
                this._createPopper();
                // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
                    for (var _iterator12 = _createForOfIteratorHelperLoose((_ref9 = []).concat.apply(_ref9, document.body.children)), _step12; !(_step12 = _iterator12()).done;) {
                        var _ref9;
                        var element = _step12.value;
                        EventHandler.on(element, 'mouseover', noop);
                    }
                }
                this._element.focus();
                this._element.setAttribute('aria-expanded', true);
                this._menu.classList.add(CLASS_NAME_SHOW$6);
                this._element.classList.add(CLASS_NAME_SHOW$6);
                EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
            };
            _proto8.hide = function hide() {
                if (isDisabled(this._element) || !this._isShown()) {
                    return;
                }
                var relatedTarget = {
                    relatedTarget: this._element
                };
                this._completeHide(relatedTarget);
            };
            _proto8.dispose = function dispose() {
                if (this._popper) {
                    this._popper.destroy();
                }
                _BaseComponent5.prototype.dispose.call(this);
            };
            _proto8.update = function update() {
                this._inNavbar = this._detectNavbar();
                if (this._popper) {
                    this._popper.update();
                }
            }
            // Private
            ;
            _proto8._completeHide = function _completeHide(relatedTarget) {
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
                if (hideEvent.defaultPrevented) {
                    return;
                }
                // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support
                if ('ontouchstart' in document.documentElement) {
                    for (var _iterator13 = _createForOfIteratorHelperLoose((_ref10 = []).concat.apply(_ref10, document.body.children)), _step13; !(_step13 = _iterator13()).done;) {
                        var _ref10;
                        var element = _step13.value;
                        EventHandler.off(element, 'mouseover', noop);
                    }
                }
                if (this._popper) {
                    this._popper.destroy();
                }
                this._menu.classList.remove(CLASS_NAME_SHOW$6);
                this._element.classList.remove(CLASS_NAME_SHOW$6);
                this._element.setAttribute('aria-expanded', 'false');
                Manipulator.removeDataAttribute(this._menu, 'popper');
                EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
            };
            _proto8._getConfig = function _getConfig(config) {
                config = _BaseComponent5.prototype._getConfig.call(this, config);
                if (typeof config.reference === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
                    // Popper virtual elements require a getBoundingClientRect method
                    throw new TypeError(NAME$a.toUpperCase() + ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method.");
                }
                return config;
            };
            _proto8._createPopper = function _createPopper() {
                if (typeof Popper === 'undefined') {
                    throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
                }
                var referenceElement = this._element;
                if (this._config.reference === 'parent') {
                    referenceElement = this._parent;
                } else if (isElement$1(this._config.reference)) {
                    referenceElement = getElement(this._config.reference);
                } else if (typeof this._config.reference === 'object') {
                    referenceElement = this._config.reference;
                }
                var popperConfig = this._getPopperConfig();
                this._popper = createPopper(referenceElement, this._menu, popperConfig);
            };
            _proto8._isShown = function _isShown() {
                return this._menu.classList.contains(CLASS_NAME_SHOW$6);
            };
            _proto8._getPlacement = function _getPlacement() {
                var parentDropdown = this._parent;
                if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
                    return PLACEMENT_RIGHT;
                }
                if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
                    return PLACEMENT_LEFT;
                }
                if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
                    return PLACEMENT_TOPCENTER;
                }
                if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
                    return PLACEMENT_BOTTOMCENTER;
                }
                // We need to trim the value because custom properties can also include spaces
                var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
                if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
                    return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
                }
                return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
            };
            _proto8._detectNavbar = function _detectNavbar() {
                return this._element.closest(SELECTOR_NAVBAR) !== null;
            };
            _proto8._getOffset = function _getOffset() {
                var _this16 = this;
                var offset = this._config.offset;
                if (typeof offset === 'string') {
                    return offset.split(',').map(function (value) {
                        return Number.parseInt(value, 10);
                    });
                }
                if (typeof offset === 'function') {
                    return function (popperData) {
                        return offset(popperData, _this16._element);
                    };
                }
                return offset;
            };
            _proto8._getPopperConfig = function _getPopperConfig() {
                var defaultBsPopperConfig = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: 'preventOverflow',
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: 'offset',
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                };
                // Disable Popper if we have a static display or Dropdown is in Navbar
                if (this._inNavbar || this._config.display === 'static') {
                    Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
                    defaultBsPopperConfig.modifiers = [{
                        name: 'applyStyles',
                        enabled: false
                    }];
                }
                return _extends({}, defaultBsPopperConfig, execute(this._config.popperConfig, [defaultBsPopperConfig]));
            };
            _proto8._selectMenuItem = function _selectMenuItem(_ref11) {
                var key = _ref11.key,
                    target = _ref11.target;
                var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(function (element) {
                    return isVisible(element);
                });
                if (!items.length) {
                    return;
                }
                // if target isn't included in items (e.g. when expanding the dropdown)
                // allow cycling to get the last item in case key equals ARROW_UP_KEY
                getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
            }
            // Static
            ;
            Dropdown.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Dropdown.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config]();
                });
            };
            Dropdown.clearMenus = function clearMenus(event) {
                if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
                    return;
                }
                var openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
                for (var _iterator14 = _createForOfIteratorHelperLoose(openToggles), _step14; !(_step14 = _iterator14()).done;) {
                    var toggle = _step14.value;
                    var context = Dropdown.getInstance(toggle);
                    if (!context || context._config.autoClose === false) {
                        continue;
                    }
                    var composedPath = event.composedPath();
                    var isMenuTarget = composedPath.includes(context._menu);
                    if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
                        continue;
                    }
                    // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                    if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
                        continue;
                    }
                    var relatedTarget = {
                        relatedTarget: context._element
                    };
                    if (event.type === 'click') {
                        relatedTarget.clickEvent = event;
                    }
                    context._completeHide(relatedTarget);
                }
            };
            Dropdown.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
                // If not an UP | DOWN | ESCAPE key => not a dropdown command
                // If input/textarea && if key is other than ESCAPE => not a dropdown command
                var isInput = /input|textarea/i.test(event.target.tagName);
                var isEscapeEvent = event.key === ESCAPE_KEY$2;
                var isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
                if (!isUpOrDownEvent && !isEscapeEvent) {
                    return;
                }
                if (isInput && !isEscapeEvent) {
                    return;
                }
                event.preventDefault();
                // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
                var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
                var instance = Dropdown.getOrCreateInstance(getToggleButton);
                if (isUpOrDownEvent) {
                    event.stopPropagation();
                    instance.show();
                    instance._selectMenuItem(event);
                    return;
                }
                if (instance._isShown()) {
                    // else is escape and we check if it is shown
                    event.stopPropagation();
                    instance.hide();
                    getToggleButton.focus();
                }
            };
            _createClass(Dropdown, null, [{
                key: "Default",
                get: function get() {
                    return Default$9;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$9;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$a;
                }
            }]);
            return Dropdown;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
            event.preventDefault();
            Dropdown.getOrCreateInstance(this).toggle();
        });
        /**
         * jQuery
         */
        defineJQueryPlugin(Dropdown);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/backdrop.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$9 = 'backdrop';
        var CLASS_NAME_FADE$4 = 'fade';
        var CLASS_NAME_SHOW$5 = 'show';
        var EVENT_MOUSEDOWN = "mousedown.bs." + NAME$9;
        var Default$8 = {
            className: 'modal-backdrop',
            clickCallback: null,
            isAnimated: false,
            isVisible: true,
            // if false, we use the backdrop helper without adding any element to the dom
            rootElement: 'body' // give the choice to place backdrop under different elements
        };
        var DefaultType$8 = {
            className: 'string',
            clickCallback: '(function|null)',
            isAnimated: 'boolean',
            isVisible: 'boolean',
            rootElement: '(element|string)'
        };
        /**
         * Class definition
         */
        var Backdrop = /*#__PURE__*/ function (_Config3) {
            _inheritsLoose(Backdrop, _Config3);

            function Backdrop(config) {
                var _this17;
                _this17 = _Config3.call(this) || this;
                _this17._config = _this17._getConfig(config);
                _this17._isAppended = false;
                _this17._element = null;
                return _this17;
            }
            // Getters
            var _proto9 = Backdrop.prototype;
            // Public
            _proto9.show = function show(callback) {
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }
                this._append();
                var element = this._getElement();
                if (this._config.isAnimated) {
                    reflow(element);
                }
                element.classList.add(CLASS_NAME_SHOW$5);
                this._emulateAnimation(function () {
                    execute(callback);
                });
            };
            _proto9.hide = function hide(callback) {
                var _this18 = this;
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }
                this._getElement().classList.remove(CLASS_NAME_SHOW$5);
                this._emulateAnimation(function () {
                    _this18.dispose();
                    execute(callback);
                });
            };
            _proto9.dispose = function dispose() {
                if (!this._isAppended) {
                    return;
                }
                EventHandler.off(this._element, EVENT_MOUSEDOWN);
                this._element.remove();
                this._isAppended = false;
            }
            // Private
            ;
            _proto9._getElement = function _getElement() {
                if (!this._element) {
                    var backdrop = document.createElement('div');
                    backdrop.className = this._config.className;
                    if (this._config.isAnimated) {
                        backdrop.classList.add(CLASS_NAME_FADE$4);
                    }
                    this._element = backdrop;
                }
                return this._element;
            };
            _proto9._configAfterMerge = function _configAfterMerge(config) {
                // use getElement() with the default "body" to get a fresh Element on each instantiation
                config.rootElement = getElement(config.rootElement);
                return config;
            };
            _proto9._append = function _append() {
                var _this19 = this;
                if (this._isAppended) {
                    return;
                }
                var element = this._getElement();
                this._config.rootElement.append(element);
                EventHandler.on(element, EVENT_MOUSEDOWN, function () {
                    execute(_this19._config.clickCallback);
                });
                this._isAppended = true;
            };
            _proto9._emulateAnimation = function _emulateAnimation(callback) {
                executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
            };
            _createClass(Backdrop, null, [{
                key: "Default",
                get: function get() {
                    return Default$8;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$8;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$9;
                }
            }]);
            return Backdrop;
        }(Config);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/focustrap.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$8 = 'focustrap';
        var DATA_KEY$5 = 'bs.focustrap';
        var EVENT_KEY$5 = "." + DATA_KEY$5;
        var EVENT_FOCUSIN$2 = "focusin" + EVENT_KEY$5;
        var EVENT_KEYDOWN_TAB = "keydown.tab" + EVENT_KEY$5;
        var TAB_KEY = 'Tab';
        var TAB_NAV_FORWARD = 'forward';
        var TAB_NAV_BACKWARD = 'backward';
        var Default$7 = {
            autofocus: true,
            trapElement: null // The element to trap focus inside of
        };
        var DefaultType$7 = {
            autofocus: 'boolean',
            trapElement: 'element'
        };
        /**
         * Class definition
         */
        var FocusTrap = /*#__PURE__*/ function (_Config4) {
            _inheritsLoose(FocusTrap, _Config4);

            function FocusTrap(config) {
                var _this20;
                _this20 = _Config4.call(this) || this;
                _this20._config = _this20._getConfig(config);
                _this20._isActive = false;
                _this20._lastTabNavDirection = null;
                return _this20;
            }
            // Getters
            var _proto10 = FocusTrap.prototype;
            // Public
            _proto10.activate = function activate() {
                var _this21 = this;
                if (this._isActive) {
                    return;
                }
                if (this._config.autofocus) {
                    this._config.trapElement.focus();
                }
                EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
                EventHandler.on(document, EVENT_FOCUSIN$2, function (event) {
                    return _this21._handleFocusin(event);
                });
                EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
                    return _this21._handleKeydown(event);
                });
                this._isActive = true;
            };
            _proto10.deactivate = function deactivate() {
                if (!this._isActive) {
                    return;
                }
                this._isActive = false;
                EventHandler.off(document, EVENT_KEY$5);
            }
            // Private
            ;
            _proto10._handleFocusin = function _handleFocusin(event) {
                var trapElement = this._config.trapElement;
                if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
                    return;
                }
                var elements = SelectorEngine.focusableChildren(trapElement);
                if (elements.length === 0) {
                    trapElement.focus();
                } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
                    elements[elements.length - 1].focus();
                } else {
                    elements[0].focus();
                }
            };
            _proto10._handleKeydown = function _handleKeydown(event) {
                if (event.key !== TAB_KEY) {
                    return;
                }
                this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
            };
            _createClass(FocusTrap, null, [{
                key: "Default",
                get: function get() {
                    return Default$7;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$7;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$8;
                }
            }]);
            return FocusTrap;
        }(Config);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/scrollBar.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
        var SELECTOR_STICKY_CONTENT = '.sticky-top';
        var PROPERTY_PADDING = 'padding-right';
        var PROPERTY_MARGIN = 'margin-right';
        /**
         * Class definition
         */
        var ScrollBarHelper = /*#__PURE__*/ function () {
            function ScrollBarHelper() {
                this._element = document.body;
            }
            // Public
            var _proto11 = ScrollBarHelper.prototype;
            _proto11.getWidth = function getWidth() {
                // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
                var documentWidth = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - documentWidth);
            };
            _proto11.hide = function hide() {
                var width = this.getWidth();
                this._disableOverFlow();
                // give padding to element to balance the hidden scrollbar width
                this._setElementAttributes(this._element, PROPERTY_PADDING, function (calculatedValue) {
                    return calculatedValue + width;
                });
                // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
                this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, function (calculatedValue) {
                    return calculatedValue + width;
                });
                this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, function (calculatedValue) {
                    return calculatedValue - width;
                });
            };
            _proto11.reset = function reset() {
                this._resetElementAttributes(this._element, 'overflow');
                this._resetElementAttributes(this._element, PROPERTY_PADDING);
                this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
                this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
            };
            _proto11.isOverflowing = function isOverflowing() {
                return this.getWidth() > 0;
            }
            // Private
            ;
            _proto11._disableOverFlow = function _disableOverFlow() {
                this._saveInitialAttribute(this._element, 'overflow');
                this._element.style.overflow = 'hidden';
            };
            _proto11._setElementAttributes = function _setElementAttributes(selector, styleProperty, callback) {
                var _this22 = this;
                var scrollbarWidth = this.getWidth();
                var manipulationCallBack = function manipulationCallBack(element) {
                    if (element !== _this22._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                        return;
                    }
                    _this22._saveInitialAttribute(element, styleProperty);
                    var calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
                    element.style.setProperty(styleProperty, callback(Number.parseFloat(calculatedValue)) + "px");
                };
                this._applyManipulationCallback(selector, manipulationCallBack);
            };
            _proto11._saveInitialAttribute = function _saveInitialAttribute(element, styleProperty) {
                var actualValue = element.style.getPropertyValue(styleProperty);
                if (actualValue) {
                    Manipulator.setDataAttribute(element, styleProperty, actualValue);
                }
            };
            _proto11._resetElementAttributes = function _resetElementAttributes(selector, styleProperty) {
                var manipulationCallBack = function manipulationCallBack(element) {
                    var value = Manipulator.getDataAttribute(element, styleProperty);
                    // We only want to remove the property if the value is `null`; the value can also be zero
                    if (value === null) {
                        element.style.removeProperty(styleProperty);
                        return;
                    }
                    Manipulator.removeDataAttribute(element, styleProperty);
                    element.style.setProperty(styleProperty, value);
                };
                this._applyManipulationCallback(selector, manipulationCallBack);
            };
            _proto11._applyManipulationCallback = function _applyManipulationCallback(selector, callBack) {
                if (isElement$1(selector)) {
                    callBack(selector);
                    return;
                }
                for (var _iterator15 = _createForOfIteratorHelperLoose(SelectorEngine.find(selector, this._element)), _step15; !(_step15 = _iterator15()).done;) {
                    var sel = _step15.value;
                    callBack(sel);
                }
            };
            return ScrollBarHelper;
        }();
        /**
         * --------------------------------------------------------------------------
         * Bootstrap modal.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$7 = 'modal';
        var DATA_KEY$4 = 'bs.modal';
        var EVENT_KEY$4 = "." + DATA_KEY$4;
        var DATA_API_KEY$2 = '.data-api';
        var ESCAPE_KEY$1 = 'Escape';
        var EVENT_HIDE$4 = "hide" + EVENT_KEY$4;
        var EVENT_HIDE_PREVENTED$1 = "hidePrevented" + EVENT_KEY$4;
        var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$4;
        var EVENT_SHOW$4 = "show" + EVENT_KEY$4;
        var EVENT_SHOWN$4 = "shown" + EVENT_KEY$4;
        var EVENT_RESIZE$1 = "resize" + EVENT_KEY$4;
        var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$4;
        var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$4;
        var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss" + EVENT_KEY$4;
        var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$4 + DATA_API_KEY$2;
        var CLASS_NAME_OPEN = 'modal-open';
        var CLASS_NAME_FADE$3 = 'fade';
        var CLASS_NAME_SHOW$4 = 'show';
        var CLASS_NAME_STATIC = 'modal-static';
        var OPEN_SELECTOR$1 = '.modal.show';
        var SELECTOR_DIALOG = '.modal-dialog';
        var SELECTOR_MODAL_BODY = '.modal-body';
        var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
        var Default$6 = {
            backdrop: true,
            focus: true,
            keyboard: true
        };
        var DefaultType$6 = {
            backdrop: '(boolean|string)',
            focus: 'boolean',
            keyboard: 'boolean'
        };
        /**
         * Class definition
         */
        var Modal = /*#__PURE__*/ function (_BaseComponent6) {
            _inheritsLoose(Modal, _BaseComponent6);

            function Modal(element, config) {
                var _this23;
                _this23 = _BaseComponent6.call(this, element, config) || this;
                _this23._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this23._element);
                _this23._backdrop = _this23._initializeBackDrop();
                _this23._focustrap = _this23._initializeFocusTrap();
                _this23._isShown = false;
                _this23._isTransitioning = false;
                _this23._scrollBar = new ScrollBarHelper();
                _this23._addEventListeners();
                return _this23;
            }
            // Getters
            var _proto12 = Modal.prototype;
            // Public
            _proto12.toggle = function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            };
            _proto12.show = function show(relatedTarget) {
                var _this24 = this;
                if (this._isShown || this._isTransitioning) {
                    return;
                }
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
                    relatedTarget: relatedTarget
                });
                if (showEvent.defaultPrevented) {
                    return;
                }
                this._isShown = true;
                this._isTransitioning = true;
                this._scrollBar.hide();
                document.body.classList.add(CLASS_NAME_OPEN);
                this._adjustDialog();
                this._backdrop.show(function () {
                    return _this24._showElement(relatedTarget);
                });
            };
            _proto12.hide = function hide() {
                var _this25 = this;
                if (!this._isShown || this._isTransitioning) {
                    return;
                }
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
                if (hideEvent.defaultPrevented) {
                    return;
                }
                this._isShown = false;
                this._isTransitioning = true;
                this._focustrap.deactivate();
                this._element.classList.remove(CLASS_NAME_SHOW$4);
                this._queueCallback(function () {
                    return _this25._hideModal();
                }, this._element, this._isAnimated());
            };
            _proto12.dispose = function dispose() {
                EventHandler.off(window, EVENT_KEY$4);
                EventHandler.off(this._dialog, EVENT_KEY$4);
                this._backdrop.dispose();
                this._focustrap.deactivate();
                _BaseComponent6.prototype.dispose.call(this);
            };
            _proto12.handleUpdate = function handleUpdate() {
                this._adjustDialog();
            }
            // Private
            ;
            _proto12._initializeBackDrop = function _initializeBackDrop() {
                return new Backdrop({
                    isVisible: Boolean(this._config.backdrop),
                    // 'static' option will be translated to true, and booleans will keep their value,
                    isAnimated: this._isAnimated()
                });
            };
            _proto12._initializeFocusTrap = function _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            };
            _proto12._showElement = function _showElement(relatedTarget) {
                var _this26 = this;
                // try to append dynamic modal
                if (!document.body.contains(this._element)) {
                    document.body.append(this._element);
                }
                this._element.style.display = 'block';
                this._element.removeAttribute('aria-hidden');
                this._element.setAttribute('aria-modal', true);
                this._element.setAttribute('role', 'dialog');
                this._element.scrollTop = 0;
                var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
                if (modalBody) {
                    modalBody.scrollTop = 0;
                }
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_SHOW$4);
                var transitionComplete = function transitionComplete() {
                    if (_this26._config.focus) {
                        _this26._focustrap.activate();
                    }
                    _this26._isTransitioning = false;
                    EventHandler.trigger(_this26._element, EVENT_SHOWN$4, {
                        relatedTarget: relatedTarget
                    });
                };
                this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
            };
            _proto12._addEventListeners = function _addEventListeners() {
                var _this27 = this;
                EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
                    if (event.key !== ESCAPE_KEY$1) {
                        return;
                    }
                    if (_this27._config.keyboard) {
                        _this27.hide();
                        return;
                    }
                    _this27._triggerBackdropTransition();
                });
                EventHandler.on(window, EVENT_RESIZE$1, function () {
                    if (_this27._isShown && !_this27._isTransitioning) {
                        _this27._adjustDialog();
                    }
                });
                EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, function (event) {
                    // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
                    EventHandler.one(_this27._element, EVENT_CLICK_DISMISS, function (event2) {
                        if (_this27._element !== event.target || _this27._element !== event2.target) {
                            return;
                        }
                        if (_this27._config.backdrop === 'static') {
                            _this27._triggerBackdropTransition();
                            return;
                        }
                        if (_this27._config.backdrop) {
                            _this27.hide();
                        }
                    });
                });
            };
            _proto12._hideModal = function _hideModal() {
                var _this28 = this;
                this._element.style.display = 'none';
                this._element.setAttribute('aria-hidden', true);
                this._element.removeAttribute('aria-modal');
                this._element.removeAttribute('role');
                this._isTransitioning = false;
                this._backdrop.hide(function () {
                    document.body.classList.remove(CLASS_NAME_OPEN);
                    _this28._resetAdjustments();
                    _this28._scrollBar.reset();
                    EventHandler.trigger(_this28._element, EVENT_HIDDEN$4);
                });
            };
            _proto12._isAnimated = function _isAnimated() {
                return this._element.classList.contains(CLASS_NAME_FADE$3);
            };
            _proto12._triggerBackdropTransition = function _triggerBackdropTransition() {
                var _this29 = this;
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
                if (hideEvent.defaultPrevented) {
                    return;
                }
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                var initialOverflowY = this._element.style.overflowY;
                // return if the following background transition hasn't yet completed
                if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
                    return;
                }
                if (!isModalOverflowing) {
                    this._element.style.overflowY = 'hidden';
                }
                this._element.classList.add(CLASS_NAME_STATIC);
                this._queueCallback(function () {
                    _this29._element.classList.remove(CLASS_NAME_STATIC);
                    _this29._queueCallback(function () {
                        _this29._element.style.overflowY = initialOverflowY;
                    }, _this29._dialog);
                }, this._dialog);
                this._element.focus();
            }
            /**
             * The following methods are used to handle overflowing modals
             */
            ;
            _proto12._adjustDialog = function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                var scrollbarWidth = this._scrollBar.getWidth();
                var isBodyOverflowing = scrollbarWidth > 0;
                if (isBodyOverflowing && !isModalOverflowing) {
                    var property = isRTL() ? 'paddingLeft' : 'paddingRight';
                    this._element.style[property] = scrollbarWidth + "px";
                }
                if (!isBodyOverflowing && isModalOverflowing) {
                    var _property = isRTL() ? 'paddingRight' : 'paddingLeft';
                    this._element.style[_property] = scrollbarWidth + "px";
                }
            };
            _proto12._resetAdjustments = function _resetAdjustments() {
                this._element.style.paddingLeft = '';
                this._element.style.paddingRight = '';
            }
            // Static
            ;
            Modal.jQueryInterface = function jQueryInterface(config, relatedTarget) {
                return this.each(function () {
                    var data = Modal.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config](relatedTarget);
                });
            };
            _createClass(Modal, null, [{
                key: "Default",
                get: function get() {
                    return Default$6;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$6;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$7;
                }
            }]);
            return Modal;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
            var _this30 = this;
            var target = SelectorEngine.getElementFromSelector(this);
            if (['A', 'AREA'].includes(this.tagName)) {
                event.preventDefault();
            }
            EventHandler.one(target, EVENT_SHOW$4, function (showEvent) {
                if (showEvent.defaultPrevented) {
                    // only register focus restorer if modal will actually get shown
                    return;
                }
                EventHandler.one(target, EVENT_HIDDEN$4, function () {
                    if (isVisible(_this30)) {
                        _this30.focus();
                    }
                });
            });
            // avoid conflict when clicking modal toggler while another one is open
            var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
            if (alreadyOpen) {
                Modal.getInstance(alreadyOpen).hide();
            }
            var data = Modal.getOrCreateInstance(target);
            data.toggle(this);
        });
        enableDismissTrigger(Modal);
        /**
         * jQuery
         */
        defineJQueryPlugin(Modal);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap offcanvas.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$6 = 'offcanvas';
        var DATA_KEY$3 = 'bs.offcanvas';
        var EVENT_KEY$3 = "." + DATA_KEY$3;
        var DATA_API_KEY$1 = '.data-api';
        var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$3 + DATA_API_KEY$1;
        var ESCAPE_KEY = 'Escape';
        var CLASS_NAME_SHOW$3 = 'show';
        var CLASS_NAME_SHOWING$1 = 'showing';
        var CLASS_NAME_HIDING = 'hiding';
        var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
        var OPEN_SELECTOR = '.offcanvas.show';
        var EVENT_SHOW$3 = "show" + EVENT_KEY$3;
        var EVENT_SHOWN$3 = "shown" + EVENT_KEY$3;
        var EVENT_HIDE$3 = "hide" + EVENT_KEY$3;
        var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$3;
        var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$3;
        var EVENT_RESIZE = "resize" + EVENT_KEY$3;
        var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$3 + DATA_API_KEY$1;
        var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$3;
        var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
        var Default$5 = {
            backdrop: true,
            keyboard: true,
            scroll: false
        };
        var DefaultType$5 = {
            backdrop: '(boolean|string)',
            keyboard: 'boolean',
            scroll: 'boolean'
        };
        /**
         * Class definition
         */
        var Offcanvas = /*#__PURE__*/ function (_BaseComponent7) {
            _inheritsLoose(Offcanvas, _BaseComponent7);

            function Offcanvas(element, config) {
                var _this31;
                _this31 = _BaseComponent7.call(this, element, config) || this;
                _this31._isShown = false;
                _this31._backdrop = _this31._initializeBackDrop();
                _this31._focustrap = _this31._initializeFocusTrap();
                _this31._addEventListeners();
                return _this31;
            }
            // Getters
            var _proto13 = Offcanvas.prototype;
            // Public
            _proto13.toggle = function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            };
            _proto13.show = function show(relatedTarget) {
                var _this32 = this;
                if (this._isShown) {
                    return;
                }
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                    relatedTarget: relatedTarget
                });
                if (showEvent.defaultPrevented) {
                    return;
                }
                this._isShown = true;
                this._backdrop.show();
                if (!this._config.scroll) {
                    new ScrollBarHelper().hide();
                }
                this._element.setAttribute('aria-modal', true);
                this._element.setAttribute('role', 'dialog');
                this._element.classList.add(CLASS_NAME_SHOWING$1);
                var completeCallBack = function completeCallBack() {
                    if (!_this32._config.scroll || _this32._config.backdrop) {
                        _this32._focustrap.activate();
                    }
                    _this32._element.classList.add(CLASS_NAME_SHOW$3);
                    _this32._element.classList.remove(CLASS_NAME_SHOWING$1);
                    EventHandler.trigger(_this32._element, EVENT_SHOWN$3, {
                        relatedTarget: relatedTarget
                    });
                };
                this._queueCallback(completeCallBack, this._element, true);
            };
            _proto13.hide = function hide() {
                var _this33 = this;
                if (!this._isShown) {
                    return;
                }
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
                if (hideEvent.defaultPrevented) {
                    return;
                }
                this._focustrap.deactivate();
                this._element.blur();
                this._isShown = false;
                this._element.classList.add(CLASS_NAME_HIDING);
                this._backdrop.hide();
                var completeCallback = function completeCallback() {
                    _this33._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
                    _this33._element.removeAttribute('aria-modal');
                    _this33._element.removeAttribute('role');
                    if (!_this33._config.scroll) {
                        new ScrollBarHelper().reset();
                    }
                    EventHandler.trigger(_this33._element, EVENT_HIDDEN$3);
                };
                this._queueCallback(completeCallback, this._element, true);
            };
            _proto13.dispose = function dispose() {
                this._backdrop.dispose();
                this._focustrap.deactivate();
                _BaseComponent7.prototype.dispose.call(this);
            }
            // Private
            ;
            _proto13._initializeBackDrop = function _initializeBackDrop() {
                var _this34 = this;
                var clickCallback = function clickCallback() {
                    if (_this34._config.backdrop === 'static') {
                        EventHandler.trigger(_this34._element, EVENT_HIDE_PREVENTED);
                        return;
                    }
                    _this34.hide();
                };
                // 'static' option will be translated to true, and booleans will keep their value
                var isVisible = Boolean(this._config.backdrop);
                return new Backdrop({
                    className: CLASS_NAME_BACKDROP,
                    isVisible: isVisible,
                    isAnimated: true,
                    rootElement: this._element.parentNode,
                    clickCallback: isVisible ? clickCallback : null
                });
            };
            _proto13._initializeFocusTrap = function _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            };
            _proto13._addEventListeners = function _addEventListeners() {
                var _this35 = this;
                EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
                    if (event.key !== ESCAPE_KEY) {
                        return;
                    }
                    if (_this35._config.keyboard) {
                        _this35.hide();
                        return;
                    }
                    EventHandler.trigger(_this35._element, EVENT_HIDE_PREVENTED);
                });
            }
            // Static
            ;
            Offcanvas.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Offcanvas.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config](this);
                });
            };
            _createClass(Offcanvas, null, [{
                key: "Default",
                get: function get() {
                    return Default$5;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$5;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$6;
                }
            }]);
            return Offcanvas;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
            var _this36 = this;
            var target = SelectorEngine.getElementFromSelector(this);
            if (['A', 'AREA'].includes(this.tagName)) {
                event.preventDefault();
            }
            if (isDisabled(this)) {
                return;
            }
            EventHandler.one(target, EVENT_HIDDEN$3, function () {
                // focus on trigger when it is closed
                if (isVisible(_this36)) {
                    _this36.focus();
                }
            });
            // avoid conflict when clicking a toggler of an offcanvas, while another is open
            var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
            if (alreadyOpen && alreadyOpen !== target) {
                Offcanvas.getInstance(alreadyOpen).hide();
            }
            var data = Offcanvas.getOrCreateInstance(target);
            data.toggle(this);
        });
        EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
            for (var _iterator16 = _createForOfIteratorHelperLoose(SelectorEngine.find(OPEN_SELECTOR)), _step16; !(_step16 = _iterator16()).done;) {
                var selector = _step16.value;
                Offcanvas.getOrCreateInstance(selector).show();
            }
        });
        EventHandler.on(window, EVENT_RESIZE, function () {
            for (var _iterator17 = _createForOfIteratorHelperLoose(SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')), _step17; !(_step17 = _iterator17()).done;) {
                var element = _step17.value;
                if (getComputedStyle(element).position !== 'fixed') {
                    Offcanvas.getOrCreateInstance(element).hide();
                }
            }
        });
        enableDismissTrigger(Offcanvas);
        /**
         * jQuery
         */
        defineJQueryPlugin(Offcanvas);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/sanitizer.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        // js-docs-start allow-list
        var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
        var DefaultAllowlist = {
            // Global attributes allowed on any supplied element below.
            '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
            a: ['target', 'href', 'title', 'rel'],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };
        // js-docs-end allow-list
        var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
        /**
         * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
         * contexts.
         *
         * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
         */
        // eslint-disable-next-line unicorn/better-regex
        var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
        var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
            var attributeName = attribute.nodeName.toLowerCase();
            if (allowedAttributeList.includes(attributeName)) {
                if (uriAttributes.has(attributeName)) {
                    return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
                }
                return true;
            }
            // Check if a regular expression validates the attribute.
            return allowedAttributeList.filter(function (attributeRegex) {
                return attributeRegex instanceof RegExp;
            }).some(function (regex) {
                return regex.test(attributeName);
            });
        };

        function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
            var _ref12;
            if (!unsafeHtml.length) {
                return unsafeHtml;
            }
            if (sanitizeFunction && typeof sanitizeFunction === 'function') {
                return sanitizeFunction(unsafeHtml);
            }
            var domParser = new window.DOMParser();
            var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
            var elements = (_ref12 = []).concat.apply(_ref12, createdDocument.body.querySelectorAll('*'));
            for (var _iterator18 = _createForOfIteratorHelperLoose(elements), _step18; !(_step18 = _iterator18()).done;) {
                var _ref13;
                var element = _step18.value;
                var elementName = element.nodeName.toLowerCase();
                if (!Object.keys(allowList).includes(elementName)) {
                    element.remove();
                    continue;
                }
                var attributeList = (_ref13 = []).concat.apply(_ref13, element.attributes);
                var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
                for (var _iterator19 = _createForOfIteratorHelperLoose(attributeList), _step19; !(_step19 = _iterator19()).done;) {
                    var attribute = _step19.value;
                    if (!allowedAttribute(attribute, allowedAttributes)) {
                        element.removeAttribute(attribute.nodeName);
                    }
                }
            }
            return createdDocument.body.innerHTML;
        }
        /**
         * --------------------------------------------------------------------------
         * Bootstrap util/template-factory.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$5 = 'TemplateFactory';
        var Default$4 = {
            allowList: DefaultAllowlist,
            content: {},
            // { selector : text ,  selector2 : text2 , }
            extraClass: '',
            html: false,
            sanitize: true,
            sanitizeFn: null,
            template: '<div></div>'
        };
        var DefaultType$4 = {
            allowList: 'object',
            content: 'object',
            extraClass: '(string|function)',
            html: 'boolean',
            sanitize: 'boolean',
            sanitizeFn: '(null|function)',
            template: 'string'
        };
        var DefaultContentType = {
            entry: '(string|element|function|null)',
            selector: '(string|element)'
        };
        /**
         * Class definition
         */
        var TemplateFactory = /*#__PURE__*/ function (_Config5) {
            _inheritsLoose(TemplateFactory, _Config5);

            function TemplateFactory(config) {
                var _this37;
                _this37 = _Config5.call(this) || this;
                _this37._config = _this37._getConfig(config);
                return _this37;
            }
            // Getters
            var _proto14 = TemplateFactory.prototype;
            // Public
            _proto14.getContent = function getContent() {
                var _this38 = this;
                return Object.values(this._config.content).map(function (config) {
                    return _this38._resolvePossibleFunction(config);
                }).filter(Boolean);
            };
            _proto14.hasContent = function hasContent() {
                return this.getContent().length > 0;
            };
            _proto14.changeContent = function changeContent(content) {
                this._checkContent(content);
                this._config.content = _extends({}, this._config.content, content);
                return this;
            };
            _proto14.toHtml = function toHtml() {
                var templateWrapper = document.createElement('div');
                templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
                for (var _i8 = 0, _Object$entries5 = Object.entries(this._config.content); _i8 < _Object$entries5.length; _i8++) {
                    var _Object$entries5$_i = _Object$entries5[_i8],
                        selector = _Object$entries5$_i[0],
                        text = _Object$entries5$_i[1];
                    this._setContent(templateWrapper, text, selector);
                }
                var template = templateWrapper.children[0];
                var extraClass = this._resolvePossibleFunction(this._config.extraClass);
                if (extraClass) {
                    var _template$classList;
                    (_template$classList = template.classList).add.apply(_template$classList, extraClass.split(' '));
                }
                return template;
            }
            // Private
            ;
            _proto14._typeCheckConfig = function _typeCheckConfig(config) {
                _Config5.prototype._typeCheckConfig.call(this, config);
                this._checkContent(config.content);
            };
            _proto14._checkContent = function _checkContent(arg) {
                for (var _i9 = 0, _Object$entries6 = Object.entries(arg); _i9 < _Object$entries6.length; _i9++) {
                    var _Object$entries6$_i = _Object$entries6[_i9],
                        selector = _Object$entries6$_i[0],
                        content = _Object$entries6$_i[1];
                    _Config5.prototype._typeCheckConfig.call(this, {
                        selector: selector,
                        entry: content
                    }, DefaultContentType);
                }
            };
            _proto14._setContent = function _setContent(template, content, selector) {
                var templateElement = SelectorEngine.findOne(selector, template);
                if (!templateElement) {
                    return;
                }
                content = this._resolvePossibleFunction(content);
                if (!content) {
                    templateElement.remove();
                    return;
                }
                if (isElement$1(content)) {
                    this._putElementInTemplate(getElement(content), templateElement);
                    return;
                }
                if (this._config.html) {
                    templateElement.innerHTML = this._maybeSanitize(content);
                    return;
                }
                templateElement.textContent = content;
            };
            _proto14._maybeSanitize = function _maybeSanitize(arg) {
                return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
            };
            _proto14._resolvePossibleFunction = function _resolvePossibleFunction(arg) {
                return execute(arg, [this]);
            };
            _proto14._putElementInTemplate = function _putElementInTemplate(element, templateElement) {
                if (this._config.html) {
                    templateElement.innerHTML = '';
                    templateElement.append(element);
                    return;
                }
                templateElement.textContent = element.textContent;
            };
            _createClass(TemplateFactory, null, [{
                key: "Default",
                get: function get() {
                    return Default$4;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$4;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$5;
                }
            }]);
            return TemplateFactory;
        }(Config);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap tooltip.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$4 = 'tooltip';
        var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
        var CLASS_NAME_FADE$2 = 'fade';
        var CLASS_NAME_MODAL = 'modal';
        var CLASS_NAME_SHOW$2 = 'show';
        var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
        var SELECTOR_MODAL = "." + CLASS_NAME_MODAL;
        var EVENT_MODAL_HIDE = 'hide.bs.modal';
        var TRIGGER_HOVER = 'hover';
        var TRIGGER_FOCUS = 'focus';
        var TRIGGER_CLICK = 'click';
        var TRIGGER_MANUAL = 'manual';
        var EVENT_HIDE$2 = 'hide';
        var EVENT_HIDDEN$2 = 'hidden';
        var EVENT_SHOW$2 = 'show';
        var EVENT_SHOWN$2 = 'shown';
        var EVENT_INSERTED = 'inserted';
        var EVENT_CLICK$1 = 'click';
        var EVENT_FOCUSIN$1 = 'focusin';
        var EVENT_FOCUSOUT$1 = 'focusout';
        var EVENT_MOUSEENTER = 'mouseenter';
        var EVENT_MOUSELEAVE = 'mouseleave';
        var AttachmentMap = {
            AUTO: 'auto',
            TOP: 'top',
            RIGHT: isRTL() ? 'left' : 'right',
            BOTTOM: 'bottom',
            LEFT: isRTL() ? 'right' : 'left'
        };
        var Default$3 = {
            allowList: DefaultAllowlist,
            animation: true,
            boundary: 'clippingParents',
            container: false,
            customClass: '',
            delay: 0,
            fallbackPlacements: ['top', 'right', 'bottom', 'left'],
            html: false,
            offset: [0, 6],
            placement: 'top',
            popperConfig: null,
            sanitize: true,
            sanitizeFn: null,
            selector: false,
            template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
            title: '',
            trigger: 'hover focus'
        };
        var DefaultType$3 = {
            allowList: 'object',
            animation: 'boolean',
            boundary: '(string|element)',
            container: '(string|element|boolean)',
            customClass: '(string|function)',
            delay: '(number|object)',
            fallbackPlacements: 'array',
            html: 'boolean',
            offset: '(array|string|function)',
            placement: '(string|function)',
            popperConfig: '(null|object|function)',
            sanitize: 'boolean',
            sanitizeFn: '(null|function)',
            selector: '(string|boolean)',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string'
        };
        /**
         * Class definition
         */
        var Tooltip = /*#__PURE__*/ function (_BaseComponent8) {
            _inheritsLoose(Tooltip, _BaseComponent8);

            function Tooltip(element, config) {
                var _this39;
                if (typeof Popper === 'undefined') {
                    throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
                }
                _this39 = _BaseComponent8.call(this, element, config) || this;
                // Private
                _this39._isEnabled = true;
                _this39._timeout = 0;
                _this39._isHovered = null;
                _this39._activeTrigger = {};
                _this39._popper = null;
                _this39._templateFactory = null;
                _this39._newContent = null;
                // Protected
                _this39.tip = null;
                _this39._setListeners();
                if (!_this39._config.selector) {
                    _this39._fixTitle();
                }
                return _this39;
            }
            // Getters
            var _proto15 = Tooltip.prototype;
            // Public
            _proto15.enable = function enable() {
                this._isEnabled = true;
            };
            _proto15.disable = function disable() {
                this._isEnabled = false;
            };
            _proto15.toggleEnabled = function toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            };
            _proto15.toggle = function toggle() {
                if (!this._isEnabled) {
                    return;
                }
                this._activeTrigger.click = !this._activeTrigger.click;
                if (this._isShown()) {
                    this._leave();
                    return;
                }
                this._enter();
            };
            _proto15.dispose = function dispose() {
                clearTimeout(this._timeout);
                EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                if (this._element.getAttribute('data-bs-original-title')) {
                    this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
                }
                this._disposePopper();
                _BaseComponent8.prototype.dispose.call(this);
            };
            _proto15.show = function show() {
                var _this40 = this;
                if (this._element.style.display === 'none') {
                    throw new Error('Please use show on visible elements');
                }
                if (!(this._isWithContent() && this._isEnabled)) {
                    return;
                }
                var showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
                var shadowRoot = findShadowRoot(this._element);
                var isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
                if (showEvent.defaultPrevented || !isInTheDom) {
                    return;
                }
                // TODO: v6 remove this or make it optional
                this._disposePopper();
                var tip = this._getTipElement();
                this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
                var container = this._config.container;
                if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                    container.append(tip);
                    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
                }
                this._popper = this._createPopper(tip);
                tip.classList.add(CLASS_NAME_SHOW$2);
                // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                if ('ontouchstart' in document.documentElement) {
                    for (var _iterator20 = _createForOfIteratorHelperLoose((_ref14 = []).concat.apply(_ref14, document.body.children)), _step20; !(_step20 = _iterator20()).done;) {
                        var _ref14;
                        var element = _step20.value;
                        EventHandler.on(element, 'mouseover', noop);
                    }
                }
                var complete = function complete() {
                    EventHandler.trigger(_this40._element, _this40.constructor.eventName(EVENT_SHOWN$2));
                    if (_this40._isHovered === false) {
                        _this40._leave();
                    }
                    _this40._isHovered = false;
                };
                this._queueCallback(complete, this.tip, this._isAnimated());
            };
            _proto15.hide = function hide() {
                var _this41 = this;
                if (!this._isShown()) {
                    return;
                }
                var hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
                if (hideEvent.defaultPrevented) {
                    return;
                }
                var tip = this._getTipElement();
                tip.classList.remove(CLASS_NAME_SHOW$2);
                // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support
                if ('ontouchstart' in document.documentElement) {
                    for (var _iterator21 = _createForOfIteratorHelperLoose((_ref15 = []).concat.apply(_ref15, document.body.children)), _step21; !(_step21 = _iterator21()).done;) {
                        var _ref15;
                        var element = _step21.value;
                        EventHandler.off(element, 'mouseover', noop);
                    }
                }
                this._activeTrigger[TRIGGER_CLICK] = false;
                this._activeTrigger[TRIGGER_FOCUS] = false;
                this._activeTrigger[TRIGGER_HOVER] = false;
                this._isHovered = null; // it is a trick to support manual triggering
                var complete = function complete() {
                    if (_this41._isWithActiveTrigger()) {
                        return;
                    }
                    if (!_this41._isHovered) {
                        _this41._disposePopper();
                    }
                    _this41._element.removeAttribute('aria-describedby');
                    EventHandler.trigger(_this41._element, _this41.constructor.eventName(EVENT_HIDDEN$2));
                };
                this._queueCallback(complete, this.tip, this._isAnimated());
            };
            _proto15.update = function update() {
                if (this._popper) {
                    this._popper.update();
                }
            }
            // Protected
            ;
            _proto15._isWithContent = function _isWithContent() {
                return Boolean(this._getTitle());
            };
            _proto15._getTipElement = function _getTipElement() {
                if (!this.tip) {
                    this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
                }
                return this.tip;
            };
            _proto15._createTipElement = function _createTipElement(content) {
                var tip = this._getTemplateFactory(content).toHtml();
                // TODO: remove this check in v6
                if (!tip) {
                    return null;
                }
                tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
                // TODO: v6 the following can be achieved with CSS only
                tip.classList.add("bs-" + this.constructor.NAME + "-auto");
                var tipId = getUID(this.constructor.NAME).toString();
                tip.setAttribute('id', tipId);
                if (this._isAnimated()) {
                    tip.classList.add(CLASS_NAME_FADE$2);
                }
                return tip;
            };
            _proto15.setContent = function setContent(content) {
                this._newContent = content;
                if (this._isShown()) {
                    this._disposePopper();
                    this.show();
                }
            };
            _proto15._getTemplateFactory = function _getTemplateFactory(content) {
                if (this._templateFactory) {
                    this._templateFactory.changeContent(content);
                } else {
                    this._templateFactory = new TemplateFactory(_extends({}, this._config, {
                        // the `content` var has to be after `this._config`
                        // to override config.content in case of popover
                        content: content,
                        extraClass: this._resolvePossibleFunction(this._config.customClass)
                    }));
                }
                return this._templateFactory;
            };
            _proto15._getContentForTemplate = function _getContentForTemplate() {
                var _ref16;
                return _ref16 = {}, _ref16[SELECTOR_TOOLTIP_INNER] = this._getTitle(), _ref16;
            };
            _proto15._getTitle = function _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
            }
            // Private
            ;
            _proto15._initializeOnDelegatedTarget = function _initializeOnDelegatedTarget(event) {
                return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
            };
            _proto15._isAnimated = function _isAnimated() {
                return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
            };
            _proto15._isShown = function _isShown() {
                return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
            };
            _proto15._createPopper = function _createPopper(tip) {
                var placement = execute(this._config.placement, [this, tip, this._element]);
                var attachment = AttachmentMap[placement.toUpperCase()];
                return createPopper(this._element, tip, this._getPopperConfig(attachment));
            };
            _proto15._getOffset = function _getOffset() {
                var _this42 = this;
                var offset = this._config.offset;
                if (typeof offset === 'string') {
                    return offset.split(',').map(function (value) {
                        return Number.parseInt(value, 10);
                    });
                }
                if (typeof offset === 'function') {
                    return function (popperData) {
                        return offset(popperData, _this42._element);
                    };
                }
                return offset;
            };
            _proto15._resolvePossibleFunction = function _resolvePossibleFunction(arg) {
                return execute(arg, [this._element]);
            };
            _proto15._getPopperConfig = function _getPopperConfig(attachment) {
                var _this43 = this;
                var defaultBsPopperConfig = {
                    placement: attachment,
                    modifiers: [{
                        name: 'flip',
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: 'offset',
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: 'preventOverflow',
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: 'arrow',
                        options: {
                            element: "." + this.constructor.NAME + "-arrow"
                        }
                    }, {
                        name: 'preSetPlacement',
                        enabled: true,
                        phase: 'beforeMain',
                        fn: function fn(data) {
                            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                            _this43._getTipElement().setAttribute('data-popper-placement', data.state.placement);
                        }
                    }]
                };
                return _extends({}, defaultBsPopperConfig, execute(this._config.popperConfig, [defaultBsPopperConfig]));
            };
            _proto15._setListeners = function _setListeners() {
                var _this44 = this;
                var triggers = this._config.trigger.split(' ');
                for (var _iterator22 = _createForOfIteratorHelperLoose(triggers), _step22; !(_step22 = _iterator22()).done;) {
                    var trigger = _step22.value;
                    if (trigger === 'click') {
                        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, function (event) {
                            var context = _this44._initializeOnDelegatedTarget(event);
                            context.toggle();
                        });
                    } else if (trigger !== TRIGGER_MANUAL) {
                        var eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                        var eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                        EventHandler.on(this._element, eventIn, this._config.selector, function (event) {
                            var context = _this44._initializeOnDelegatedTarget(event);
                            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                            context._enter();
                        });
                        EventHandler.on(this._element, eventOut, this._config.selector, function (event) {
                            var context = _this44._initializeOnDelegatedTarget(event);
                            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                            context._leave();
                        });
                    }
                }
                this._hideModalHandler = function () {
                    if (_this44._element) {
                        _this44.hide();
                    }
                };
                EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
            };
            _proto15._fixTitle = function _fixTitle() {
                var title = this._element.getAttribute('title');
                if (!title) {
                    return;
                }
                if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
                    this._element.setAttribute('aria-label', title);
                }
                this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
                this._element.removeAttribute('title');
            };
            _proto15._enter = function _enter() {
                var _this45 = this;
                if (this._isShown() || this._isHovered) {
                    this._isHovered = true;
                    return;
                }
                this._isHovered = true;
                this._setTimeout(function () {
                    if (_this45._isHovered) {
                        _this45.show();
                    }
                }, this._config.delay.show);
            };
            _proto15._leave = function _leave() {
                var _this46 = this;
                if (this._isWithActiveTrigger()) {
                    return;
                }
                this._isHovered = false;
                this._setTimeout(function () {
                    if (!_this46._isHovered) {
                        _this46.hide();
                    }
                }, this._config.delay.hide);
            };
            _proto15._setTimeout = function _setTimeout(handler, timeout) {
                clearTimeout(this._timeout);
                this._timeout = setTimeout(handler, timeout);
            };
            _proto15._isWithActiveTrigger = function _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(true);
            };
            _proto15._getConfig = function _getConfig(config) {
                var dataAttributes = Manipulator.getDataAttributes(this._element);
                for (var _i10 = 0, _Object$keys2 = Object.keys(dataAttributes); _i10 < _Object$keys2.length; _i10++) {
                    var dataAttribute = _Object$keys2[_i10];
                    if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
                        delete dataAttributes[dataAttribute];
                    }
                }
                config = _extends({}, dataAttributes, typeof config === 'object' && config ? config : {});
                config = this._mergeConfigObj(config);
                config = this._configAfterMerge(config);
                this._typeCheckConfig(config);
                return config;
            };
            _proto15._configAfterMerge = function _configAfterMerge(config) {
                config.container = config.container === false ? document.body : getElement(config.container);
                if (typeof config.delay === 'number') {
                    config.delay = {
                        show: config.delay,
                        hide: config.delay
                    };
                }
                if (typeof config.title === 'number') {
                    config.title = config.title.toString();
                }
                if (typeof config.content === 'number') {
                    config.content = config.content.toString();
                }
                return config;
            };
            _proto15._getDelegateConfig = function _getDelegateConfig() {
                var config = {};
                for (var _i11 = 0, _Object$entries7 = Object.entries(this._config); _i11 < _Object$entries7.length; _i11++) {
                    var _Object$entries7$_i = _Object$entries7[_i11],
                        key = _Object$entries7$_i[0],
                        value = _Object$entries7$_i[1];
                    if (this.constructor.Default[key] !== value) {
                        config[key] = value;
                    }
                }
                config.selector = false;
                config.trigger = 'manual';
                // In the future can be replaced with:
                // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
                // `Object.fromEntries(keysWithDifferentValues)`
                return config;
            };
            _proto15._disposePopper = function _disposePopper() {
                if (this._popper) {
                    this._popper.destroy();
                    this._popper = null;
                }
                if (this.tip) {
                    this.tip.remove();
                    this.tip = null;
                }
            }
            // Static
            ;
            Tooltip.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Tooltip.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config]();
                });
            };
            _createClass(Tooltip, null, [{
                key: "Default",
                get: function get() {
                    return Default$3;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$3;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$4;
                }
            }]);
            return Tooltip;
        }(BaseComponent);
        /**
         * jQuery
         */
        defineJQueryPlugin(Tooltip);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap popover.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$3 = 'popover';
        var SELECTOR_TITLE = '.popover-header';
        var SELECTOR_CONTENT = '.popover-body';
        var Default$2 = _extends({}, Tooltip.Default, {
            content: '',
            offset: [0, 8],
            placement: 'right',
            template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
            trigger: 'click'
        });
        var DefaultType$2 = _extends({}, Tooltip.DefaultType, {
            content: '(null|string|element|function)'
        });
        /**
         * Class definition
         */
        var Popover = /*#__PURE__*/ function (_Tooltip) {
            _inheritsLoose(Popover, _Tooltip);

            function Popover() {
                return _Tooltip.apply(this, arguments) || this;
            }
            var _proto16 = Popover.prototype;
            // Overrides
            _proto16._isWithContent = function _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            // Private
            ;
            _proto16._getContentForTemplate = function _getContentForTemplate() {
                var _ref17;
                return _ref17 = {}, _ref17[SELECTOR_TITLE] = this._getTitle(), _ref17[SELECTOR_CONTENT] = this._getContent(), _ref17;
            };
            _proto16._getContent = function _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            // Static
            ;
            Popover.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Popover.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config]();
                });
            };
            _createClass(Popover, null, [{
                key: "Default",
                get:
                    // Getters
                    function get() {
                        return Default$2;
                    }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$2;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$3;
                }
            }]);
            return Popover;
        }(Tooltip);
        /**
         * jQuery
         */
        defineJQueryPlugin(Popover);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap scrollspy.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$2 = 'scrollspy';
        var DATA_KEY$2 = 'bs.scrollspy';
        var EVENT_KEY$2 = "." + DATA_KEY$2;
        var DATA_API_KEY = '.data-api';
        var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
        var EVENT_CLICK = "click" + EVENT_KEY$2;
        var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY;
        var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
        var CLASS_NAME_ACTIVE$1 = 'active';
        var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
        var SELECTOR_TARGET_LINKS = '[href]';
        var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
        var SELECTOR_NAV_LINKS = '.nav-link';
        var SELECTOR_NAV_ITEMS = '.nav-item';
        var SELECTOR_LIST_ITEMS = '.list-group-item';
        var SELECTOR_LINK_ITEMS = SELECTOR_NAV_LINKS + ", " + SELECTOR_NAV_ITEMS + " > " + SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS;
        var SELECTOR_DROPDOWN = '.dropdown';
        var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
        var Default$1 = {
            offset: null,
            // TODO: v6 @deprecated, keep it for backwards compatibility reasons
            rootMargin: '0px 0px -25%',
            smoothScroll: false,
            target: null,
            threshold: [0.1, 0.5, 1]
        };
        var DefaultType$1 = {
            offset: '(number|null)',
            // TODO v6 @deprecated, keep it for backwards compatibility reasons
            rootMargin: 'string',
            smoothScroll: 'boolean',
            target: 'element',
            threshold: 'array'
        };
        /**
         * Class definition
         */
        var ScrollSpy = /*#__PURE__*/ function (_BaseComponent9) {
            _inheritsLoose(ScrollSpy, _BaseComponent9);

            function ScrollSpy(element, config) {
                var _this47;
                _this47 = _BaseComponent9.call(this, element, config) || this;
                // this._element is the observablesContainer and config.target the menu links wrapper
                _this47._targetLinks = new Map();
                _this47._observableSections = new Map();
                _this47._rootElement = getComputedStyle(_this47._element).overflowY === 'visible' ? null : _this47._element;
                _this47._activeTarget = null;
                _this47._observer = null;
                _this47._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                };
                _this47.refresh(); // initialize
                return _this47;
            }
            // Getters
            var _proto17 = ScrollSpy.prototype;
            // Public
            _proto17.refresh = function refresh() {
                this._initializeTargetsAndObservables();
                this._maybeEnableSmoothScroll();
                if (this._observer) {
                    this._observer.disconnect();
                } else {
                    this._observer = this._getNewObserver();
                }
                for (var _iterator23 = _createForOfIteratorHelperLoose(this._observableSections.values()), _step23; !(_step23 = _iterator23()).done;) {
                    var section = _step23.value;
                    this._observer.observe(section);
                }
            };
            _proto17.dispose = function dispose() {
                this._observer.disconnect();
                _BaseComponent9.prototype.dispose.call(this);
            }
            // Private
            ;
            _proto17._configAfterMerge = function _configAfterMerge(config) {
                // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
                config.target = getElement(config.target) || document.body;
                // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
                config.rootMargin = config.offset ? config.offset + "px 0px -30%" : config.rootMargin;
                if (typeof config.threshold === 'string') {
                    config.threshold = config.threshold.split(',').map(function (value) {
                        return Number.parseFloat(value);
                    });
                }
                return config;
            };
            _proto17._maybeEnableSmoothScroll = function _maybeEnableSmoothScroll() {
                var _this48 = this;
                if (!this._config.smoothScroll) {
                    return;
                }
                // unregister any previous listeners
                EventHandler.off(this._config.target, EVENT_CLICK);
                EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, function (event) {
                    var observableSection = _this48._observableSections.get(event.target.hash);
                    if (observableSection) {
                        event.preventDefault();
                        var root = _this48._rootElement || window;
                        var height = observableSection.offsetTop - _this48._element.offsetTop;
                        if (root.scrollTo) {
                            root.scrollTo({
                                top: height,
                                behavior: 'smooth'
                            });
                            return;
                        }
                        // Chrome 60 doesn't support `scrollTo`
                        root.scrollTop = height;
                    }
                });
            };
            _proto17._getNewObserver = function _getNewObserver() {
                var _this49 = this;
                var options = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin
                };
                return new IntersectionObserver(function (entries) {
                    return _this49._observerCallback(entries);
                }, options);
            }
            // The logic of selection
            ;
            _proto17._observerCallback = function _observerCallback(entries) {
                var _this50 = this;
                var targetElement = function targetElement(entry) {
                    return _this50._targetLinks.get("#" + entry.target.id);
                };
                var activate = function activate(entry) {
                    _this50._previousScrollData.visibleEntryTop = entry.target.offsetTop;
                    _this50._process(targetElement(entry));
                };
                var parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
                var userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = parentScrollTop;
                for (var _iterator24 = _createForOfIteratorHelperLoose(entries), _step24; !(_step24 = _iterator24()).done;) {
                    var entry = _step24.value;
                    if (!entry.isIntersecting) {
                        this._activeTarget = null;
                        this._clearActiveClass(targetElement(entry));
                        continue;
                    }
                    var entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    // if we are scrolling down, pick the bigger offsetTop
                    if (userScrollsDown && entryIsLowerThanPrevious) {
                        activate(entry);
                        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                        if (!parentScrollTop) {
                            return;
                        }
                        continue;
                    }
                    // if we are scrolling up, pick the smallest offsetTop
                    if (!userScrollsDown && !entryIsLowerThanPrevious) {
                        activate(entry);
                    }
                }
            };
            _proto17._initializeTargetsAndObservables = function _initializeTargetsAndObservables() {
                this._targetLinks = new Map();
                this._observableSections = new Map();
                var targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
                for (var _iterator25 = _createForOfIteratorHelperLoose(targetLinks), _step25; !(_step25 = _iterator25()).done;) {
                    var anchor = _step25.value;
                    // ensure that the anchor has an id and is not disabled
                    if (!anchor.hash || isDisabled(anchor)) {
                        continue;
                    }
                    var observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
                    // ensure that the observableSection exists & is visible
                    if (isVisible(observableSection)) {
                        this._targetLinks.set(decodeURI(anchor.hash), anchor);
                        this._observableSections.set(anchor.hash, observableSection);
                    }
                }
            };
            _proto17._process = function _process(target) {
                if (this._activeTarget === target) {
                    return;
                }
                this._clearActiveClass(this._config.target);
                this._activeTarget = target;
                target.classList.add(CLASS_NAME_ACTIVE$1);
                this._activateParents(target);
                EventHandler.trigger(this._element, EVENT_ACTIVATE, {
                    relatedTarget: target
                });
            };
            _proto17._activateParents = function _activateParents(target) {
                // Activate dropdown parents
                if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
                    SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
                    return;
                }
                for (var _iterator26 = _createForOfIteratorHelperLoose(SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)), _step26; !(_step26 = _iterator26()).done;) {
                    var listGroup = _step26.value;
                    // Set triggered links parents as active
                    // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                    for (var _iterator27 = _createForOfIteratorHelperLoose(SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)), _step27; !(_step27 = _iterator27()).done;) {
                        var item = _step27.value;
                        item.classList.add(CLASS_NAME_ACTIVE$1);
                    }
                }
            };
            _proto17._clearActiveClass = function _clearActiveClass(parent) {
                parent.classList.remove(CLASS_NAME_ACTIVE$1);
                var activeNodes = SelectorEngine.find(SELECTOR_TARGET_LINKS + "." + CLASS_NAME_ACTIVE$1, parent);
                for (var _iterator28 = _createForOfIteratorHelperLoose(activeNodes), _step28; !(_step28 = _iterator28()).done;) {
                    var node = _step28.value;
                    node.classList.remove(CLASS_NAME_ACTIVE$1);
                }
            }
            // Static
            ;
            ScrollSpy.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = ScrollSpy.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config]();
                });
            };
            _createClass(ScrollSpy, null, [{
                key: "Default",
                get: function get() {
                    return Default$1;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType$1;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME$2;
                }
            }]);
            return ScrollSpy;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
            for (var _iterator29 = _createForOfIteratorHelperLoose(SelectorEngine.find(SELECTOR_DATA_SPY)), _step29; !(_step29 = _iterator29()).done;) {
                var spy = _step29.value;
                ScrollSpy.getOrCreateInstance(spy);
            }
        });
        /**
         * jQuery
         */
        defineJQueryPlugin(ScrollSpy);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap tab.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME$1 = 'tab';
        var DATA_KEY$1 = 'bs.tab';
        var EVENT_KEY$1 = "." + DATA_KEY$1;
        var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
        var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
        var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
        var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
        var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1;
        var EVENT_KEYDOWN = "keydown" + EVENT_KEY$1;
        var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1;
        var ARROW_LEFT_KEY = 'ArrowLeft';
        var ARROW_RIGHT_KEY = 'ArrowRight';
        var ARROW_UP_KEY = 'ArrowUp';
        var ARROW_DOWN_KEY = 'ArrowDown';
        var CLASS_NAME_ACTIVE = 'active';
        var CLASS_NAME_FADE$1 = 'fade';
        var CLASS_NAME_SHOW$1 = 'show';
        var CLASS_DROPDOWN = 'dropdown';
        var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
        var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
        var NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
        var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
        var SELECTOR_OUTER = '.nav-item, .list-group-item';
        var SELECTOR_INNER = ".nav-link" + NOT_SELECTOR_DROPDOWN_TOGGLE + ", .list-group-item" + NOT_SELECTOR_DROPDOWN_TOGGLE + ", [role=\"tab\"]" + NOT_SELECTOR_DROPDOWN_TOGGLE;
        var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
        var SELECTOR_INNER_ELEM = SELECTOR_INNER + ", " + SELECTOR_DATA_TOGGLE;
        var SELECTOR_DATA_TOGGLE_ACTIVE = "." + CLASS_NAME_ACTIVE + "[data-bs-toggle=\"tab\"], ." + CLASS_NAME_ACTIVE + "[data-bs-toggle=\"pill\"], ." + CLASS_NAME_ACTIVE + "[data-bs-toggle=\"list\"]";
        /**
         * Class definition
         */
        var Tab = /*#__PURE__*/ function (_BaseComponent10) {
            _inheritsLoose(Tab, _BaseComponent10);

            function Tab(element) {
                var _this51;
                _this51 = _BaseComponent10.call(this, element) || this;
                _this51._parent = _this51._element.closest(SELECTOR_TAB_PANEL);
                if (!_this51._parent) {
                    return _assertThisInitialized(_this51);
                    // TODO: should throw exception in v6
                    // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
                }
                // Set up initial aria attributes
                _this51._setInitialAttributes(_this51._parent, _this51._getChildren());
                EventHandler.on(_this51._element, EVENT_KEYDOWN, function (event) {
                    return _this51._keydown(event);
                });
                return _this51;
            }
            // Getters
            var _proto18 = Tab.prototype;
            // Public
            _proto18.show = function show() {
                // Shows this elem and deactivate the active sibling if exists
                var innerElem = this._element;
                if (this._elemIsActive(innerElem)) {
                    return;
                }
                // Search for active tab on same parent to deactivate it
                var active = this._getActiveElem();
                var hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
                    relatedTarget: innerElem
                }) : null;
                var showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
                    relatedTarget: active
                });
                if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
                    return;
                }
                this._deactivate(active, innerElem);
                this._activate(innerElem, active);
            }
            // Private
            ;
            _proto18._activate = function _activate(element, relatedElem) {
                var _this52 = this;
                if (!element) {
                    return;
                }
                element.classList.add(CLASS_NAME_ACTIVE);
                this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section
                var complete = function complete() {
                    if (element.getAttribute('role') !== 'tab') {
                        element.classList.add(CLASS_NAME_SHOW$1);
                        return;
                    }
                    element.removeAttribute('tabindex');
                    element.setAttribute('aria-selected', true);
                    _this52._toggleDropDown(element, true);
                    EventHandler.trigger(element, EVENT_SHOWN$1, {
                        relatedTarget: relatedElem
                    });
                };
                this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
            };
            _proto18._deactivate = function _deactivate(element, relatedElem) {
                var _this53 = this;
                if (!element) {
                    return;
                }
                element.classList.remove(CLASS_NAME_ACTIVE);
                element.blur();
                this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too
                var complete = function complete() {
                    if (element.getAttribute('role') !== 'tab') {
                        element.classList.remove(CLASS_NAME_SHOW$1);
                        return;
                    }
                    element.setAttribute('aria-selected', false);
                    element.setAttribute('tabindex', '-1');
                    _this53._toggleDropDown(element, false);
                    EventHandler.trigger(element, EVENT_HIDDEN$1, {
                        relatedTarget: relatedElem
                    });
                };
                this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
            };
            _proto18._keydown = function _keydown(event) {
                if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
                    return;
                }
                event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
                event.preventDefault();
                var isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
                var nextActiveElement = getNextActiveElement(this._getChildren().filter(function (element) {
                    return !isDisabled(element);
                }), event.target, isNext, true);
                if (nextActiveElement) {
                    nextActiveElement.focus({
                        preventScroll: true
                    });
                    Tab.getOrCreateInstance(nextActiveElement).show();
                }
            };
            _proto18._getChildren = function _getChildren() {
                // collection of inner elements
                return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
            };
            _proto18._getActiveElem = function _getActiveElem() {
                var _this54 = this;
                return this._getChildren().find(function (child) {
                    return _this54._elemIsActive(child);
                }) || null;
            };
            _proto18._setInitialAttributes = function _setInitialAttributes(parent, children) {
                this._setAttributeIfNotExists(parent, 'role', 'tablist');
                for (var _iterator30 = _createForOfIteratorHelperLoose(children), _step30; !(_step30 = _iterator30()).done;) {
                    var child = _step30.value;
                    this._setInitialAttributesOnChild(child);
                }
            };
            _proto18._setInitialAttributesOnChild = function _setInitialAttributesOnChild(child) {
                child = this._getInnerElement(child);
                var isActive = this._elemIsActive(child);
                var outerElem = this._getOuterElement(child);
                child.setAttribute('aria-selected', isActive);
                if (outerElem !== child) {
                    this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
                }
                if (!isActive) {
                    child.setAttribute('tabindex', '-1');
                }
                this._setAttributeIfNotExists(child, 'role', 'tab');
                // set attributes to the related panel too
                this._setInitialAttributesOnTargetPanel(child);
            };
            _proto18._setInitialAttributesOnTargetPanel = function _setInitialAttributesOnTargetPanel(child) {
                var target = SelectorEngine.getElementFromSelector(child);
                if (!target) {
                    return;
                }
                this._setAttributeIfNotExists(target, 'role', 'tabpanel');
                if (child.id) {
                    this._setAttributeIfNotExists(target, 'aria-labelledby', "" + child.id);
                }
            };
            _proto18._toggleDropDown = function _toggleDropDown(element, open) {
                var outerElem = this._getOuterElement(element);
                if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
                    return;
                }
                var toggle = function toggle(selector, className) {
                    var element = SelectorEngine.findOne(selector, outerElem);
                    if (element) {
                        element.classList.toggle(className, open);
                    }
                };
                toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
                toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
                outerElem.setAttribute('aria-expanded', open);
            };
            _proto18._setAttributeIfNotExists = function _setAttributeIfNotExists(element, attribute, value) {
                if (!element.hasAttribute(attribute)) {
                    element.setAttribute(attribute, value);
                }
            };
            _proto18._elemIsActive = function _elemIsActive(elem) {
                return elem.classList.contains(CLASS_NAME_ACTIVE);
            }
            // Try to get the inner element (usually the .nav-link)
            ;
            _proto18._getInnerElement = function _getInnerElement(elem) {
                return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
            }
            // Try to get the outer element (usually the .nav-item)
            ;
            _proto18._getOuterElement = function _getOuterElement(elem) {
                return elem.closest(SELECTOR_OUTER) || elem;
            }
            // Static
            ;
            Tab.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Tab.getOrCreateInstance(this);
                    if (typeof config !== 'string') {
                        return;
                    }
                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                        throw new TypeError("No method named \"" + config + "\"");
                    }
                    data[config]();
                });
            };
            _createClass(Tab, null, [{
                key: "NAME",
                get: function get() {
                    return NAME$1;
                }
            }]);
            return Tab;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
            if (['A', 'AREA'].includes(this.tagName)) {
                event.preventDefault();
            }
            if (isDisabled(this)) {
                return;
            }
            Tab.getOrCreateInstance(this).show();
        });
        /**
         * Initialize on focus
         */
        EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
            for (var _iterator31 = _createForOfIteratorHelperLoose(SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)), _step31; !(_step31 = _iterator31()).done;) {
                var element = _step31.value;
                Tab.getOrCreateInstance(element);
            }
        });
        /**
         * jQuery
         */
        defineJQueryPlugin(Tab);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap toast.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        /**
         * Constants
         */
        var NAME = 'toast';
        var DATA_KEY = 'bs.toast';
        var EVENT_KEY = "." + DATA_KEY;
        var EVENT_MOUSEOVER = "mouseover" + EVENT_KEY;
        var EVENT_MOUSEOUT = "mouseout" + EVENT_KEY;
        var EVENT_FOCUSIN = "focusin" + EVENT_KEY;
        var EVENT_FOCUSOUT = "focusout" + EVENT_KEY;
        var EVENT_HIDE = "hide" + EVENT_KEY;
        var EVENT_HIDDEN = "hidden" + EVENT_KEY;
        var EVENT_SHOW = "show" + EVENT_KEY;
        var EVENT_SHOWN = "shown" + EVENT_KEY;
        var CLASS_NAME_FADE = 'fade';
        var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
        var CLASS_NAME_SHOW = 'show';
        var CLASS_NAME_SHOWING = 'showing';
        var DefaultType = {
            animation: 'boolean',
            autohide: 'boolean',
            delay: 'number'
        };
        var Default = {
            animation: true,
            autohide: true,
            delay: 5000
        };
        /**
         * Class definition
         */
        var Toast = /*#__PURE__*/ function (_BaseComponent11) {
            _inheritsLoose(Toast, _BaseComponent11);

            function Toast(element, config) {
                var _this55;
                _this55 = _BaseComponent11.call(this, element, config) || this;
                _this55._timeout = null;
                _this55._hasMouseInteraction = false;
                _this55._hasKeyboardInteraction = false;
                _this55._setListeners();
                return _this55;
            }
            // Getters
            var _proto19 = Toast.prototype;
            // Public
            _proto19.show = function show() {
                var _this56 = this;
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
                if (showEvent.defaultPrevented) {
                    return;
                }
                this._clearTimeout();
                if (this._config.animation) {
                    this._element.classList.add(CLASS_NAME_FADE);
                }
                var complete = function complete() {
                    _this56._element.classList.remove(CLASS_NAME_SHOWING);
                    EventHandler.trigger(_this56._element, EVENT_SHOWN);
                    _this56._maybeScheduleHide();
                };
                this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
                this._queueCallback(complete, this._element, this._config.animation);
            };
            _proto19.hide = function hide() {
                var _this57 = this;
                if (!this.isShown()) {
                    return;
                }
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
                if (hideEvent.defaultPrevented) {
                    return;
                }
                var complete = function complete() {
                    _this57._element.classList.add(CLASS_NAME_HIDE); // @deprecated
                    _this57._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
                    EventHandler.trigger(_this57._element, EVENT_HIDDEN);
                };
                this._element.classList.add(CLASS_NAME_SHOWING);
                this._queueCallback(complete, this._element, this._config.animation);
            };
            _proto19.dispose = function dispose() {
                this._clearTimeout();
                if (this.isShown()) {
                    this._element.classList.remove(CLASS_NAME_SHOW);
                }
                _BaseComponent11.prototype.dispose.call(this);
            };
            _proto19.isShown = function isShown() {
                return this._element.classList.contains(CLASS_NAME_SHOW);
            }
            // Private
            ;
            _proto19._maybeScheduleHide = function _maybeScheduleHide() {
                var _this58 = this;
                if (!this._config.autohide) {
                    return;
                }
                if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
                    return;
                }
                this._timeout = setTimeout(function () {
                    _this58.hide();
                }, this._config.delay);
            };
            _proto19._onInteraction = function _onInteraction(event, isInteracting) {
                switch (event.type) {
                    case 'mouseover':
                    case 'mouseout': {
                        this._hasMouseInteraction = isInteracting;
                        break;
                    }
                    case 'focusin':
                    case 'focusout': {
                        this._hasKeyboardInteraction = isInteracting;
                        break;
                    }
                }
                if (isInteracting) {
                    this._clearTimeout();
                    return;
                }
                var nextElement = event.relatedTarget;
                if (this._element === nextElement || this._element.contains(nextElement)) {
                    return;
                }
                this._maybeScheduleHide();
            };
            _proto19._setListeners = function _setListeners() {
                var _this59 = this;
                EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
                    return _this59._onInteraction(event, true);
                });
                EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
                    return _this59._onInteraction(event, false);
                });
                EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
                    return _this59._onInteraction(event, true);
                });
                EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
                    return _this59._onInteraction(event, false);
                });
            };
            _proto19._clearTimeout = function _clearTimeout() {
                clearTimeout(this._timeout);
                this._timeout = null;
            }
            // Static
            ;
            Toast.jQueryInterface = function jQueryInterface(config) {
                return this.each(function () {
                    var data = Toast.getOrCreateInstance(this, config);
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"");
                        }
                        data[config](this);
                    }
                });
            };
            _createClass(Toast, null, [{
                key: "Default",
                get: function get() {
                    return Default;
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType;
                }
            }, {
                key: "NAME",
                get: function get() {
                    return NAME;
                }
            }]);
            return Toast;
        }(BaseComponent);
        /**
         * Data API implementation
         */
        enableDismissTrigger(Toast);
        /**
         * jQuery
         */
        defineJQueryPlugin(Toast);
        /**
         * --------------------------------------------------------------------------
         * Bootstrap index.umd.js
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         * --------------------------------------------------------------------------
         */
        var index_umd = {
            Alert: Alert,
            Button: Button,
            Carousel: Carousel,
            Collapse: Collapse,
            Dropdown: Dropdown,
            Modal: Modal,
            Offcanvas: Offcanvas,
            Popover: Popover,
            ScrollSpy: ScrollSpy,
            Tab: Tab,
            Toast: Toast,
            Tooltip: Tooltip
        };
        return index_umd;
    });
    /*!
      Highlight.js v11.6.0 (git: bed790f3f3)
      (c) 2006-2022 undefined and other contributors
      License: BSD-3-Clause
     */
    var hljs = function () {
        var e = {
            exports: {}
        };

        function t(e) {
            return e instanceof Map ? e.clear = e.delete = e.set = function () {
                throw Error("map is read-only");
            } : e instanceof Set && (e.add = e.clear = e.delete = function () {
                throw Error("set is read-only");
            }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function (n) {
                var i = e[n];
                "object" != typeof i || Object.isFrozen(i) || t(i);
            }), e;
        }
        e.exports = t, e.exports.default = t;
        var n = /*#__PURE__*/ function () {
            function n(e) {
                void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
            }
            var _proto = n.prototype;
            _proto.ignoreMatch = function ignoreMatch() {
                this.isMatchIgnored = !0;
            };
            return n;
        }();

        function i(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
        }

        function r(e) {
            var n = Object.create(null);
            for (var _t in e) n[_t] = e[_t];
            for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                t[_key - 1] = arguments[_key];
            }
            return t.forEach(function (e) {
                for (var _t2 in e) n[_t2] = e[_t2];
            }), n;
        }
        var s = function s(e) {
            return !!e.scope || e.sublanguage && e.language;
        };
        var o = /*#__PURE__*/ function () {
            function o(e, t) {
                this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
            }
            var _proto2 = o.prototype;
            _proto2.addText = function addText(e) {
                this.buffer += i(e);
            };
            _proto2.openNode = function openNode(e) {
                if (!s(e)) return;
                var t = "";
                t = e.sublanguage ? "language-" + e.language : function (e, _ref) {
                    var t = _ref.prefix;
                    if (e.includes(".")) {
                        var _n = e.split(".");
                        return ["" + t + _n.shift()].concat(_n.map(function (e, t) {
                            return "" + e + "_".repeat(t + 1);
                        })).join(" ");
                    }
                    return "" + t + e;
                }(e.scope, {
                    prefix: this.classPrefix
                }), this.span(t);
            };
            _proto2.closeNode = function closeNode(e) {
                s(e) && (this.buffer += "</span>");
            };
            _proto2.value = function value() {
                return this.buffer;
            };
            _proto2.span = function span(e) {
                this.buffer += "<span class=\"" + e + "\">";
            };
            return o;
        }();
        var a = function a(e) {
            if (e === void 0) {
                e = {};
            }
            var t = {
                children: []
            };
            return Object.assign(t, e), t;
        };
        var c = /*#__PURE__*/ function () {
            function c() {
                this.rootNode = a(), this.stack = [this.rootNode];
            }
            var _proto3 = c.prototype;
            _proto3.add = function add(e) {
                this.top.children.push(e);
            };
            _proto3.openNode = function openNode(e) {
                var t = a({
                    scope: e
                });
                this.add(t), this.stack.push(t);
            };
            _proto3.closeNode = function closeNode() {
                if (this.stack.length > 1) return this.stack.pop();
            };
            _proto3.closeAllNodes = function closeAllNodes() {
                for (; this.closeNode(););
            };
            _proto3.toJSON = function toJSON() {
                return JSON.stringify(this.rootNode, null, 4);
            };
            _proto3.walk = function walk(e) {
                return this.constructor._walk(e, this.rootNode);
            };
            c._walk = function _walk(e, t) {
                var _this = this;
                return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(function (t) {
                    return _this._walk(e, t);
                }), e.closeNode(t)), e;
            };
            c._collapse = function _collapse(e) {
                "string" != typeof e && e.children && (e.children.every(function (e) {
                    return "string" == typeof e;
                }) ? e.children = [e.children.join("")] : e.children.forEach(function (e) {
                    c._collapse(e);
                }));
            };
            _createClass(c, [{
                key: "top",
                get: function get() {
                    return this.stack[this.stack.length - 1];
                }
            }, {
                key: "root",
                get: function get() {
                    return this.rootNode;
                }
            }]);
            return c;
        }();
        var l = /*#__PURE__*/ function (_c) {
            _inheritsLoose(l, _c);

            function l(e) {
                var _this2;
                _this2 = _c.call(this) || this, _this2.options = e;
                return _this2;
            }
            var _proto4 = l.prototype;
            _proto4.addKeyword = function addKeyword(e, t) {
                "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
            };
            _proto4.addText = function addText(e) {
                "" !== e && this.add(e);
            };
            _proto4.addSublanguage = function addSublanguage(e, t) {
                var n = e.root;
                n.sublanguage = !0, n.language = t, this.add(n);
            };
            _proto4.toHTML = function toHTML() {
                return new o(this, this.options).value();
            };
            _proto4.finalize = function finalize() {
                return !0;
            };
            return l;
        }(c);

        function g(e) {
            return e ? "string" == typeof e ? e : e.source : null;
        }

        function d(e) {
            return p("(?=", e, ")");
        }

        function u(e) {
            return p("(?:", e, ")*");
        }

        function h(e) {
            return p("(?:", e, ")?");
        }

        function p() {
            for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                e[_key2] = arguments[_key2];
            }
            return e.map(function (e) {
                return g(e);
            }).join("");
        }

        function f() {
            for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                e[_key3] = arguments[_key3];
            }
            var t = function (e) {
                var t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
            }(e);
            return "(" + (t.capture ? "" : "?:") + e.map(function (e) {
                return g(e);
            }).join("|") + ")";
        }

        function b(e) {
            return RegExp(e.toString() + "|").exec("").length - 1;
        }
        var m = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

        function E(e, _ref2) {
            var t = _ref2.joinWith;
            var n = 0;
            return e.map(function (e) {
                n += 1;
                var t = n;
                var i = g(e),
                    r = "";
                for (; i.length > 0;) {
                    var _e = m.exec(i);
                    if (!_e) {
                        r += i;
                        break;
                    }
                    r += i.substring(0, _e.index), i = i.substring(_e.index + _e[0].length), "\\" === _e[0][0] && _e[1] ? r += "\\" + (Number(_e[1]) + t) : (r += _e[0], "(" === _e[0] && n++);
                }
                return r;
            }).map(function (e) {
                return "(" + e + ")";
            }).join(t);
        }
        var x = "[a-zA-Z]\\w*",
            w = "[a-zA-Z_]\\w*",
            y = "\\b\\d+(\\.\\d+)?",
            _ = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            O = "\\b(0b[01]+)",
            v = {
                begin: "\\\\[\\s\\S]",
                relevance: 0
            },
            N = {
                scope: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [v]
            },
            k = {
                scope: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [v]
            },
            M = function M(e, t, n) {
                if (n === void 0) {
                    n = {};
                }
                var i = r({
                    scope: "comment",
                    begin: e,
                    end: t,
                    contains: []
                }, n);
                i.contains.push({
                    scope: "doctag",
                    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                    excludeBegin: !0,
                    relevance: 0
                });
                var s = f("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
                return i.contains.push({
                    begin: p(/[ ]+/, "(", s, /[.]?[:]?([.][ ]|[ ])/, "){3}")
                }), i;
            },
            S = M("//", "$"),
            R = M("/\\*", "\\*/"),
            j = M("#", "$");
        var A = Object.freeze({
            __proto__: null,
            MATCH_NOTHING_RE: /\b\B/,
            IDENT_RE: x,
            UNDERSCORE_IDENT_RE: w,
            NUMBER_RE: y,
            C_NUMBER_RE: _,
            BINARY_NUMBER_RE: O,
            RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG: function SHEBANG(e) {
                if (e === void 0) {
                    e = {};
                }
                var t = /^#![ ]*\//;
                return e.binary && (e.begin = p(t, /.*\b/, e.binary, /\b.*/)), r({
                    scope: "meta",
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    "on:begin": function onBegin(e, t) {
                        0 !== e.index && t.ignoreMatch();
                    }
                }, e);
            },
            BACKSLASH_ESCAPE: v,
            APOS_STRING_MODE: N,
            QUOTE_STRING_MODE: k,
            PHRASAL_WORDS_MODE: {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },
            COMMENT: M,
            C_LINE_COMMENT_MODE: S,
            C_BLOCK_COMMENT_MODE: R,
            HASH_COMMENT_MODE: j,
            NUMBER_MODE: {
                scope: "number",
                begin: y,
                relevance: 0
            },
            C_NUMBER_MODE: {
                scope: "number",
                begin: _,
                relevance: 0
            },
            BINARY_NUMBER_MODE: {
                scope: "number",
                begin: O,
                relevance: 0
            },
            REGEXP_MODE: {
                begin: /(?=\/[^/\n]*\/)/,
                contains: [{
                    scope: "regexp",
                    begin: /\//,
                    end: /\/[gimuy]*/,
                    illegal: /\n/,
                    contains: [v, {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [v]
                    }]
                }]
            },
            TITLE_MODE: {
                scope: "title",
                begin: x,
                relevance: 0
            },
            UNDERSCORE_TITLE_MODE: {
                scope: "title",
                begin: w,
                relevance: 0
            },
            METHOD_GUARD: {
                begin: "\\.\\s*[a-zA-Z_]\\w*",
                relevance: 0
            },
            END_SAME_AS_BEGIN: function END_SAME_AS_BEGIN(e) {
                return Object.assign(e, {
                    "on:begin": function onBegin(e, t) {
                        t.data._beginMatch = e[1];
                    },
                    "on:end": function onEnd(e, t) {
                        t.data._beginMatch !== e[1] && t.ignoreMatch();
                    }
                });
            }
        });

        function I(e, t) {
            "." === e.input[e.index - 1] && t.ignoreMatch();
        }

        function T(e, t) {
            void 0 !== e.className && (e.scope = e.className, delete e.className);
        }

        function L(e, t) {
            t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = I, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
        }

        function B(e, t) {
            Array.isArray(e.illegal) && (e.illegal = f.apply(void 0, e.illegal));
        }

        function D(e, t) {
            if (e.match) {
                if (e.begin || e.end) throw Error("begin & end are not supported with match");
                e.begin = e.match, delete e.match;
            }
        }

        function H(e, t) {
            void 0 === e.relevance && (e.relevance = 1);
        }
        var P = function P(e, t) {
                if (!e.beforeMatch) return;
                if (e.starts) throw Error("beforeMatch cannot be used with starts");
                var n = Object.assign({}, e);
                Object.keys(e).forEach(function (t) {
                    delete e[t];
                }), e.keywords = n.keywords, e.begin = p(n.beforeMatch, d(n.begin)), e.starts = {
                    relevance: 0,
                    contains: [Object.assign(n, {
                        endsParent: !0
                    })]
                }, e.relevance = 0, delete n.beforeMatch;
            },
            C = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

        function $(e, t, n) {
            if (n === void 0) {
                n = "keyword";
            }
            var i = Object.create(null);
            return "string" == typeof e ? r(n, e.split(" ")) : Array.isArray(e) ? r(n, e) : Object.keys(e).forEach(function (n) {
                Object.assign(i, $(e[n], t, n));
            }), i;

            function r(e, n) {
                t && (n = n.map(function (e) {
                    return e.toLowerCase();
                })), n.forEach(function (t) {
                    var n = t.split("|");
                    i[n[0]] = [e, U(n[0], n[1])];
                });
            }
        }

        function U(e, t) {
            return t ? Number(t) : function (e) {
                return C.includes(e.toLowerCase());
            }(e) ? 0 : 1;
        }
        var z = {},
            K = function K(e) {
                console.error(e);
            },
            W = function W(e) {
                var _console;
                for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                    t[_key4 - 1] = arguments[_key4];
                }
                (_console = console).log.apply(_console, ["WARN: " + e].concat(t));
            },
            X = function X(e, t) {
                z[e + "/" + t] || (console.log("Deprecated as of " + e + ". " + t), z[e + "/" + t] = !0);
            },
            G = Error();

        function Z(e, t, _ref3) {
            var n = _ref3.key;
            var i = 0;
            var r = e[n],
                s = {},
                o = {};
            for (var _e2 = 1; _e2 <= t.length; _e2++) o[_e2 + i] = r[_e2], s[_e2 + i] = !0, i += b(t[_e2 - 1]);
            e[n] = o, e[n]._emit = s, e[n]._multi = !0;
        }

        function F(e) {
            ((function (e) {
                e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope, delete e.scope);
            }))(e), "string" == typeof e.beginScope && (e.beginScope = {
                    _wrap: e.beginScope
                }), "string" == typeof e.endScope && (e.endScope = {
                    _wrap: e.endScope
                }),
                function (e) {
                    if (Array.isArray(e.begin)) {
                        if (e.skip || e.excludeBegin || e.returnBegin) throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), G;
                        if ("object" != typeof e.beginScope || null === e.beginScope) throw K("beginScope must be object"), G;
                        Z(e, e.begin, {
                            key: "beginScope"
                        }), e.begin = E(e.begin, {
                            joinWith: ""
                        });
                    }
                }(e),
                function (e) {
                    if (Array.isArray(e.end)) {
                        if (e.skip || e.excludeEnd || e.returnEnd) throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"), G;
                        if ("object" != typeof e.endScope || null === e.endScope) throw K("endScope must be object"), G;
                        Z(e, e.end, {
                            key: "endScope"
                        }), e.end = E(e.end, {
                            joinWith: ""
                        });
                    }
                }(e);
        }

        function V(e) {
            function t(t, n) {
                return RegExp(g(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
            }
            var n = /*#__PURE__*/ function () {
                function n() {
                    this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
                }
                var _proto5 = n.prototype;
                _proto5.addRule = function addRule(e, t) {
                    t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += b(e) + 1;
                };
                _proto5.compile = function compile() {
                    0 === this.regexes.length && (this.exec = function () {
                        return null;
                    });
                    var e = this.regexes.map(function (e) {
                        return e[1];
                    });
                    this.matcherRe = t(E(e, {
                        joinWith: "|"
                    }), !0), this.lastIndex = 0;
                };
                _proto5.exec = function exec(e) {
                    this.matcherRe.lastIndex = this.lastIndex;
                    var t = this.matcherRe.exec(e);
                    if (!t) return null;
                    var _n2 = t.findIndex(function (e, t) {
                            return t > 0 && void 0 !== e;
                        }),
                        i = this.matchIndexes[_n2];
                    return t.splice(0, _n2), Object.assign(t, i);
                };
                return n;
            }();
            var i = /*#__PURE__*/ function () {
                function i() {
                    this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
                }
                var _proto6 = i.prototype;
                _proto6.getMatcher = function getMatcher(e) {
                    if (this.multiRegexes[e]) return this.multiRegexes[e];
                    var t = new n();
                    return this.rules.slice(e).forEach(function (_ref4) {
                        var e = _ref4[0],
                            n = _ref4[1];
                        return t.addRule(e, n);
                    }), t.compile(), this.multiRegexes[e] = t, t;
                };
                _proto6.resumingScanAtSamePosition = function resumingScanAtSamePosition() {
                    return 0 !== this.regexIndex;
                };
                _proto6.considerAll = function considerAll() {
                    this.regexIndex = 0;
                };
                _proto6.addRule = function addRule(e, t) {
                    this.rules.push([e, t]), "begin" === t.type && this.count++;
                };
                _proto6.exec = function exec(e) {
                    var t = this.getMatcher(this.regexIndex);
                    t.lastIndex = this.lastIndex;
                    var n = t.exec(e);
                    if (this.resumingScanAtSamePosition())
                        if (n && n.index === this.lastIndex);
                        else {
                            var _t3 = this.getMatcher(0);
                            _t3.lastIndex = this.lastIndex + 1, n = _t3.exec(e);
                        }
                    return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
                };
                return i;
            }();
            if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
            return e.classNameAliases = r(e.classNameAliases || {}),
                function n(s, o) {
                    var _ref5;
                    var a = s;
                    if (s.isCompiled) return a;
                    [T, D, F, P].forEach(function (e) {
                        return e(s, o);
                    }), e.compilerExtensions.forEach(function (e) {
                        return e(s, o);
                    }), s.__beforeBegin = null, [L, B, H].forEach(function (e) {
                        return e(s, o);
                    }), s.isCompiled = !0;
                    var c = null;
                    return "object" == typeof s.keywords && s.keywords.$pattern && (s.keywords = Object.assign({}, s.keywords), c = s.keywords.$pattern, delete s.keywords.$pattern), c = c || /\w+/, s.keywords && (s.keywords = $(s.keywords, e.case_insensitive)), a.keywordPatternRe = t(c, !0), o && (s.begin || (s.begin = /\B|\b/), a.beginRe = t(a.begin), s.end || s.endsWithParent || (s.end = /\B|\b/), s.end && (a.endRe = t(a.end)), a.terminatorEnd = g(a.end) || "", s.endsWithParent && o.terminatorEnd && (a.terminatorEnd += (s.end ? "|" : "") + o.terminatorEnd)), s.illegal && (a.illegalRe = t(s.illegal)), s.contains || (s.contains = []), s.contains = (_ref5 = []).concat.apply(_ref5, s.contains.map(function (e) {
                        return function (e) {
                            return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function (t) {
                                return r(e, {
                                    variants: null
                                }, t);
                            })), e.cachedVariants ? e.cachedVariants : q(e) ? r(e, {
                                starts: e.starts ? r(e.starts) : null
                            }) : Object.isFrozen(e) ? r(e) : e;
                        }("self" === e ? s : e);
                    })), s.contains.forEach(function (e) {
                        n(e, a);
                    }), s.starts && n(s.starts, o), a.matcher = function (e) {
                        var t = new i();
                        return e.contains.forEach(function (e) {
                            return t.addRule(e.begin, {
                                rule: e,
                                type: "begin"
                            });
                        }), e.terminatorEnd && t.addRule(e.terminatorEnd, {
                            type: "end"
                        }), e.illegal && t.addRule(e.illegal, {
                            type: "illegal"
                        }), t;
                    }(a), a;
                }(e);
        }

        function q(e) {
            return !!e && (e.endsWithParent || q(e.starts));
        }
        var J = /*#__PURE__*/ function (_Error) {
            _inheritsLoose(J, _Error);

            function J(e, t) {
                var _this3;
                _this3 = _Error.call(this, e) || this, _this3.name = "HTMLInjectionError", _this3.html = t;
                return _this3;
            }
            return J;
        }( /*#__PURE__*/ _wrapNativeSuper(Error));
        var Y = i,
            Q = r,
            ee = Symbol("nomatch");
        var te = function (t) {
            var i = Object.create(null),
                r = Object.create(null),
                s = [];
            var o = !0;
            var a = "Could not find the language '{}', did you forget to load/include a language module?",
                c = {
                    disableAutodetect: !0,
                    name: "Plain text",
                    contains: []
                };
            var g = {
                ignoreUnescapedHTML: !1,
                throwUnescapedHTML: !1,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: l
            };

            function b(e) {
                return g.noHighlightRe.test(e);
            }

            function m(e, t, n) {
                var i = "",
                    r = "";
                "object" == typeof t ? (i = e, n = t.ignoreIllegals, r = t.language) : (X("10.7.0", "highlight(lang, code, ...args) has been deprecated."), X("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), r = e, i = t), void 0 === n && (n = !0);
                var s = {
                    code: i,
                    language: r
                };
                k("before:highlight", s);
                var o = s.result ? s.result : E(s.language, s.code, n);
                return o.code = s.code, k("after:highlight", o), o;
            }

            function E(e, t, r, s) {
                var c = Object.create(null);

                function l() {
                    if (!N.keywords) return void M.addText(S);
                    var e = 0;
                    N.keywordPatternRe.lastIndex = 0;
                    var t = N.keywordPatternRe.exec(S),
                        n = "";
                    for (; t;) {
                        n += S.substring(e, t.index);
                        var _r = y.case_insensitive ? t[0].toLowerCase() : t[0],
                            _s = (i = _r, N.keywords[i]);
                        if (_s) {
                            var _e3 = _s[0],
                                _i = _s[1];
                            if (M.addText(n), n = "", c[_r] = (c[_r] || 0) + 1, c[_r] <= 7 && (R += _i), _e3.startsWith("_")) n += t[0];
                            else {
                                var _n3 = y.classNameAliases[_e3] || _e3;
                                M.addKeyword(t[0], _n3);
                            }
                        } else n += t[0];
                        e = N.keywordPatternRe.lastIndex, t = N.keywordPatternRe.exec(S);
                    }
                    var i;
                    n += S.substring(e), M.addText(n);
                }

                function d() {
                    null != N.subLanguage ? function () {
                        if ("" === S) return;
                        var e = null;
                        if ("string" == typeof N.subLanguage) {
                            if (!i[N.subLanguage]) return void M.addText(S);
                            e = E(N.subLanguage, S, !0, k[N.subLanguage]), k[N.subLanguage] = e._top;
                        } else e = x(S, N.subLanguage.length ? N.subLanguage : null);
                        N.relevance > 0 && (R += e.relevance), M.addSublanguage(e._emitter, e.language);
                    }() : l(), S = "";
                }

                function u(e, t) {
                    var n = 1;
                    var i = t.length - 1;
                    for (; n <= i;) {
                        if (!e._emit[n]) {
                            n++;
                            continue;
                        }
                        var _i2 = y.classNameAliases[e[n]] || e[n],
                            _r2 = t[n];
                        _i2 ? M.addKeyword(_r2, _i2) : (S = _r2, l(), S = ""), n++;
                    }
                }

                function h(e, t) {
                    return e.scope && "string" == typeof e.scope && M.openNode(y.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (M.addKeyword(S, y.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), S = "") : e.beginScope._multi && (u(e.beginScope, t), S = "")), N = Object.create(e, {
                        parent: {
                            value: N
                        }
                    }), N;
                }

                function p(e, t, i) {
                    var r = function (e, t) {
                        var n = e && e.exec(t);
                        return n && 0 === n.index;
                    }(e.endRe, i);
                    if (r) {
                        if (e["on:end"]) {
                            var _i3 = new n(e);
                            e["on:end"](t, _i3), _i3.isMatchIgnored && (r = !1);
                        }
                        if (r) {
                            for (; e.endsParent && e.parent;) e = e.parent;
                            return e;
                        }
                    }
                    if (e.endsWithParent) return p(e.parent, t, i);
                }

                function f(e) {
                    return 0 === N.matcher.regexIndex ? (S += e[0], 1) : (I = !0, 0);
                }

                function b(e) {
                    var n = e[0],
                        i = t.substring(e.index),
                        r = p(N, e, i);
                    if (!r) return ee;
                    var s = N;
                    N.endScope && N.endScope._wrap ? (d(), M.addKeyword(n, N.endScope._wrap)) : N.endScope && N.endScope._multi ? (d(), u(N.endScope, e)) : s.skip ? S += n : (s.returnEnd || s.excludeEnd || (S += n), d(), s.excludeEnd && (S = n));
                    do {
                        N.scope && M.closeNode(), N.skip || N.subLanguage || (R += N.relevance), N = N.parent;
                    } while (N !== r.parent);
                    return r.starts && h(r.starts, e), s.returnEnd ? 0 : n.length;
                }
                var m = {};

                function w(i, s) {
                    var a = s && s[0];
                    if (S += i, null == a) return d(), 0;
                    if ("begin" === m.type && "end" === s.type && m.index === s.index && "" === a) {
                        if (S += t.slice(s.index, s.index + 1), !o) {
                            var _t4 = Error("0 width match regex (" + e + ")");
                            throw _t4.languageName = e, _t4.badRule = m.rule, _t4;
                        }
                        return 1;
                    }
                    if (m = s, "begin" === s.type) return function (e) {
                        var t = e[0],
                            i = e.rule,
                            r = new n(i),
                            s = [i.__beforeBegin, i["on:begin"]];
                        for (var _i4 = 0, _s2 = s; _i4 < _s2.length; _i4++) {
                            var _n4 = _s2[_i4];
                            if (_n4 && (_n4(e, r), r.isMatchIgnored)) return f(t);
                        }
                        return i.skip ? S += t : (i.excludeBegin && (S += t), d(), i.returnBegin || i.excludeBegin || (S = t)), h(i, e), i.returnBegin ? 0 : t.length;
                    }(s);
                    if ("illegal" === s.type && !r) {
                        var _e4 = Error('Illegal lexeme "' + a + '" for mode "' + (N.scope || "<unnamed>") + '"');
                        throw _e4.mode = N, _e4;
                    }
                    if ("end" === s.type) {
                        var _e5 = b(s);
                        if (_e5 !== ee) return _e5;
                    }
                    if ("illegal" === s.type && "" === a) return 1;
                    if (A > 1e5 && A > 3 * s.index) throw Error("potential infinite loop, way more iterations than matches");
                    return S += a, a.length;
                }
                var y = O(e);
                if (!y) throw K(a.replace("{}", e)), Error('Unknown language: "' + e + '"');
                var _ = V(y);
                var v = "",
                    N = s || _;
                var k = {},
                    M = new g.__emitter(g);
                (function () {
                    var e = [];
                    for (var _t5 = N; _t5 !== y; _t5 = _t5.parent) _t5.scope && e.unshift(_t5.scope);
                    e.forEach(function (e) {
                        return M.openNode(e);
                    });
                })();
                var S = "",
                    R = 0,
                    j = 0,
                    A = 0,
                    I = !1;
                try {
                    for (N.matcher.considerAll();;) {
                        A++, I ? I = !1 : N.matcher.considerAll(), N.matcher.lastIndex = j;
                        var _e6 = N.matcher.exec(t);
                        if (!_e6) break;
                        var _n5 = w(t.substring(j, _e6.index), _e6);
                        j = _e6.index + _n5;
                    }
                    return w(t.substring(j)), M.closeAllNodes(), M.finalize(), v = M.toHTML(), {
                        language: e,
                        value: v,
                        relevance: R,
                        illegal: !1,
                        _emitter: M,
                        _top: N
                    };
                } catch (n) {
                    if (n.message && n.message.includes("Illegal")) return {
                        language: e,
                        value: Y(t),
                        illegal: !0,
                        relevance: 0,
                        _illegalBy: {
                            message: n.message,
                            index: j,
                            context: t.slice(j - 100, j + 100),
                            mode: n.mode,
                            resultSoFar: v
                        },
                        _emitter: M
                    };
                    if (o) return {
                        language: e,
                        value: Y(t),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: n,
                        _emitter: M,
                        _top: N
                    };
                    throw n;
                }
            }

            function x(e, t) {
                t = t || g.languages || Object.keys(i);
                var n = function (e) {
                        var t = {
                            value: Y(e),
                            illegal: !1,
                            relevance: 0,
                            _top: c,
                            _emitter: new g.__emitter(g)
                        };
                        return t._emitter.addText(e), t;
                    }(e),
                    r = t.filter(O).filter(N).map(function (t) {
                        return E(t, e, !1);
                    });
                r.unshift(n);
                var s = r.sort(function (e, t) {
                        if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                        if (e.language && t.language) {
                            if (O(e.language).supersetOf === t.language) return 1;
                            if (O(t.language).supersetOf === e.language) return -1;
                        }
                        return 0;
                    }),
                    o = s[0],
                    a = s[1],
                    l = o;
                return l.secondBest = a, l;
            }

            function w(e) {
                var t = null;
                var n = function (e) {
                    var t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    var n = g.languageDetectRe.exec(t);
                    if (n) {
                        var _t6 = O(n[1]);
                        return _t6 || (W(a.replace("{}", n[1])), W("Falling back to no-highlight mode for this block.", e)), _t6 ? n[1] : "no-highlight";
                    }
                    return t.split(/\s+/).find(function (e) {
                        return b(e) || O(e);
                    });
                }(e);
                if (b(n)) return;
                if (k("before:highlightElement", {
                        el: e,
                        language: n
                    }), e.children.length > 0 && (g.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), g.throwUnescapedHTML)) throw new J("One of your code blocks includes unescaped HTML.", e.innerHTML);
                t = e;
                var i = t.textContent,
                    s = n ? m(i, {
                        language: n,
                        ignoreIllegals: !0
                    }) : x(i);
                e.innerHTML = s.value,
                    function (e, t, n) {
                        var i = t && r[t] || n;
                        e.classList.add("hljs"), e.classList.add("language-" + i);
                    }(e, n, s.language), e.result = {
                        language: s.language,
                        re: s.relevance,
                        relevance: s.relevance
                    }, s.secondBest && (e.secondBest = {
                        language: s.secondBest.language,
                        relevance: s.secondBest.relevance
                    }), k("after:highlightElement", {
                        el: e,
                        result: s,
                        text: i
                    });
            }
            var y = !1;

            function _() {
                "loading" !== document.readyState ? document.querySelectorAll(g.cssSelector).forEach(w) : y = !0;
            }

            function O(e) {
                return e = (e || "").toLowerCase(), i[e] || i[r[e]];
            }

            function v(e, _ref6) {
                var t = _ref6.languageName;
                "string" == typeof e && (e = [e]), e.forEach(function (e) {
                    r[e.toLowerCase()] = t;
                });
            }

            function N(e) {
                var t = O(e);
                return t && !t.disableAutodetect;
            }

            function k(e, t) {
                var n = e;
                s.forEach(function (e) {
                    e[n] && e[n](t);
                });
            }
            "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function () {
                y && _();
            }, !1), Object.assign(t, {
                highlight: m,
                highlightAuto: x,
                highlightAll: _,
                highlightElement: w,
                highlightBlock: function highlightBlock(e) {
                    return X("10.7.0", "highlightBlock will be removed entirely in v12.0"), X("10.7.0", "Please use highlightElement now."), w(e);
                },
                configure: function configure(e) {
                    g = Q(g, e);
                },
                initHighlighting: function initHighlighting() {
                    _(), X("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
                },
                initHighlightingOnLoad: function initHighlightingOnLoad() {
                    _(), X("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
                },
                registerLanguage: function registerLanguage(e, n) {
                    var r = null;
                    try {
                        r = n(t);
                    } catch (t) {
                        if (K("Language definition for '{}' could not be registered.".replace("{}", e)), !o) throw t;
                        K(t), r = c;
                    }
                    r.name || (r.name = e), i[e] = r, r.rawDefinition = n.bind(null, t), r.aliases && v(r.aliases, {
                        languageName: e
                    });
                },
                unregisterLanguage: function unregisterLanguage(e) {
                    delete i[e];
                    for (var _i5 = 0, _Object$keys = Object.keys(r); _i5 < _Object$keys.length; _i5++) {
                        var _t7 = _Object$keys[_i5];
                        r[_t7] === e && delete r[_t7];
                    }
                },
                listLanguages: function listLanguages() {
                    return Object.keys(i);
                },
                getLanguage: O,
                registerAliases: v,
                autoDetection: N,
                inherit: Q,
                addPlugin: function addPlugin(e) {
                    ((function (e) {
                        e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = function (t) {
                            e["before:highlightBlock"](Object.assign({
                                block: t.el
                            }, t));
                        }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = function (t) {
                            e["after:highlightBlock"](Object.assign({
                                block: t.el
                            }, t));
                        });
                    }))(e), s.push(e);
                }
            }), t.debugMode = function () {
                o = !1;
            }, t.safeMode = function () {
                o = !0;
            }, t.versionString = "11.6.0", t.regex = {
                concat: p,
                lookahead: d,
                either: f,
                optional: h,
                anyNumberOfTimes: u
            };
            for (var _t8 in A) "object" == typeof A[_t8] && e.exports(A[_t8]);
            return Object.assign(t, A), t;
        }({});
        return te;
    }();
    "object" == typeof exports && "undefined" != typeof module && (module.exports = hljs); /*! `json` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var a = ["true", "false", "null"],
                    n = {
                        scope: "literal",
                        beginKeywords: a.join(" ")
                    };
                return {
                    name: "JSON",
                    keywords: {
                        literal: a
                    },
                    contains: [{
                        className: "attr",
                        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                        relevance: 1.01
                    }, {
                        match: /[{}[\],:]/,
                        className: "punctuation",
                        relevance: 0
                    }, e.QUOTE_STRING_MODE, n, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    illegal: "\\S"
                };
            };
        }();
        hljs.registerLanguage("json", e);
    })(); /*! `diff` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var a = e.regex;
                return {
                    name: "Diff",
                    aliases: ["patch"],
                    contains: [{
                        className: "meta",
                        relevance: 10,
                        match: a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
                    }, {
                        className: "comment",
                        variants: [{
                            begin: a.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                            end: /$/
                        }, {
                            match: /^\*{15}$/
                        }]
                    }, {
                        className: "addition",
                        begin: /^\+/,
                        end: /$/
                    }, {
                        className: "deletion",
                        begin: /^-/,
                        end: /$/
                    }, {
                        className: "addition",
                        begin: /^!/,
                        end: /$/
                    }]
                };
            };
        }();
        hljs.registerLanguage("diff", e);
    })(); /*! `sql` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var r = e.regex,
                    t = e.COMMENT("--", "$"),
                    n = ["true", "false", "unknown"],
                    a = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"],
                    i = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"],
                    s = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"],
                    o = i,
                    c = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter(function (e) {
                        return !i.includes(e);
                    }),
                    l = {
                        begin: r.concat(/\b/, r.either.apply(r, o), /\s*\(/),
                        relevance: 0,
                        keywords: {
                            built_in: o
                        }
                    };
                return {
                    name: "SQL",
                    case_insensitive: !0,
                    illegal: /[{}]|<\//,
                    keywords: {
                        $pattern: /\b[\w\.]+/,
                        keyword: function (e, _temp) {
                            var _ref7 = _temp === void 0 ? {} : _temp,
                                r = _ref7.exceptions,
                                t = _ref7.when;
                            var n = t;
                            return r = r || [], e.map(function (e) {
                                return e.match(/\|\d+$/) || r.includes(e) ? e : n(e) ? e + "|0" : e;
                            });
                        }(c, {
                            when: function when(e) {
                                return e.length < 3;
                            }
                        }),
                        literal: n,
                        type: a,
                        built_in: ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"]
                    },
                    contains: [{
                        begin: r.either.apply(r, s),
                        relevance: 0,
                        keywords: {
                            $pattern: /[\w\.]+/,
                            keyword: c.concat(s),
                            literal: n,
                            type: a
                        }
                    }, {
                        className: "type",
                        begin: r.either("double precision", "large object", "with timezone", "without timezone")
                    }, l, {
                        className: "variable",
                        begin: /@[a-z0-9]+/
                    }, {
                        className: "string",
                        variants: [{
                            begin: /'/,
                            end: /'/,
                            contains: [{
                                begin: /''/
                            }]
                        }]
                    }, {
                        begin: /"/,
                        end: /"/,
                        contains: [{
                            begin: /""/
                        }]
                    }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, t, {
                        className: "operator",
                        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                        relevance: 0
                    }]
                };
            };
        }();
        hljs.registerLanguage("sql", e);
    })(); /*! `ruby` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = e.regex,
                    a = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
                    s = n.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
                    i = n.concat(s, /(::\w+)*/),
                    r = {
                        "variable.constant": ["__FILE__", "__LINE__"],
                        "variable.language": ["self", "super"],
                        keyword: ["alias", "and", "attr_accessor", "attr_reader", "attr_writer", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "include", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield"],
                        built_in: ["proc", "lambda"],
                        literal: ["true", "false", "nil"]
                    },
                    c = {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    },
                    t = {
                        begin: "#<",
                        end: ">"
                    },
                    b = [e.COMMENT("#", "$", {
                        contains: [c]
                    }), e.COMMENT("^=begin", "^=end", {
                        contains: [c],
                        relevance: 10
                    }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)],
                    l = {
                        className: "subst",
                        begin: /#\{/,
                        end: /\}/,
                        keywords: r
                    },
                    d = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE, l],
                        variants: [{
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /`/,
                            end: /`/
                        }, {
                            begin: /%[qQwWx]?\(/,
                            end: /\)/
                        }, {
                            begin: /%[qQwWx]?\[/,
                            end: /\]/
                        }, {
                            begin: /%[qQwWx]?\{/,
                            end: /\}/
                        }, {
                            begin: /%[qQwWx]?</,
                            end: />/
                        }, {
                            begin: /%[qQwWx]?\//,
                            end: /\//
                        }, {
                            begin: /%[qQwWx]?%/,
                            end: /%/
                        }, {
                            begin: /%[qQwWx]?-/,
                            end: /-/
                        }, {
                            begin: /%[qQwWx]?\|/,
                            end: /\|/
                        }, {
                            begin: /\B\?(\\\d{1,3})/
                        }, {
                            begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                        }, {
                            begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
                        }, {
                            begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                        }, {
                            begin: /\B\?\\(c|C-)[\x20-\x7e]/
                        }, {
                            begin: /\B\?\\?\S/
                        }, {
                            begin: n.concat(/<<[-~]?'?/, n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                            contains: [e.END_SAME_AS_BEGIN({
                                begin: /(\w+)/,
                                end: /(\w+)/,
                                contains: [e.BACKSLASH_ESCAPE, l]
                            })]
                        }]
                    },
                    g = "[0-9](_?[0-9])*",
                    o = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: "\\b([1-9](_?[0-9])*|0)(\\.(" + g + "))?([eE][+-]?(" + g + ")|r)?i?\\b"
                        }, {
                            begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                        }, {
                            begin: "\\b0(_?[0-7])+r?i?\\b"
                        }]
                    },
                    _ = {
                        variants: [{
                            match: /\(\)/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /(?=\))/,
                            excludeBegin: !0,
                            endsParent: !0,
                            keywords: r
                        }]
                    },
                    u = [d, {
                        variants: [{
                            match: [/class\s+/, i, /\s+<\s+/, i]
                        }, {
                            match: [/class\s+/, i]
                        }],
                        scope: {
                            2: "title.class",
                            4: "title.class.inherited"
                        },
                        keywords: r
                    }, {
                        relevance: 0,
                        match: [i, /\.new[ (]/],
                        scope: {
                            1: "title.class"
                        }
                    }, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, {
                        match: [/def/, /\s+/, a],
                        scope: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [_]
                    }, {
                        begin: e.IDENT_RE + "::"
                    }, {
                        className: "symbol",
                        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                        relevance: 0
                    }, {
                        className: "symbol",
                        begin: ":(?!\\s)",
                        contains: [d, {
                            begin: a
                        }],
                        relevance: 0
                    }, o, {
                        className: "variable",
                        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
                    }, {
                        className: "params",
                        begin: /\|/,
                        end: /\|/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        keywords: r
                    }, {
                        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                        keywords: "unless",
                        contains: [{
                            className: "regexp",
                            contains: [e.BACKSLASH_ESCAPE, l],
                            illegal: /\n/,
                            variants: [{
                                begin: "/",
                                end: "/[a-z]*"
                            }, {
                                begin: /%r\{/,
                                end: /\}[a-z]*/
                            }, {
                                begin: "%r\\(",
                                end: "\\)[a-z]*"
                            }, {
                                begin: "%r!",
                                end: "![a-z]*"
                            }, {
                                begin: "%r\\[",
                                end: "\\][a-z]*"
                            }]
                        }].concat(t, b),
                        relevance: 0
                    }].concat(t, b);
                l.contains = u, _.contains = u;
                var w = [{
                    begin: /^\s*=>/,
                    starts: {
                        end: "$",
                        contains: u
                    }
                }, {
                    className: "meta.prompt",
                    begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                    starts: {
                        end: "$",
                        keywords: r,
                        contains: u
                    }
                }];
                return b.unshift(t), {
                    name: "Ruby",
                    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                    keywords: r,
                    illegal: /\/\*/,
                    contains: [e.SHEBANG({
                        binary: "ruby"
                    })].concat(w).concat(b).concat(u)
                };
            };
        }();
        hljs.registerLanguage("ruby", e);
    })(); /*! `yaml` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = "true false yes no null",
                    a = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
                    s = {
                        className: "string",
                        relevance: 0,
                        variants: [{
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /\S+/
                        }],
                        contains: [e.BACKSLASH_ESCAPE, {
                            className: "template-variable",
                            variants: [{
                                begin: /\{\{/,
                                end: /\}\}/
                            }, {
                                begin: /%\{/,
                                end: /\}/
                            }]
                        }]
                    },
                    i = e.inherit(s, {
                        variants: [{
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /[^\s,{}[\]]+/
                        }]
                    }),
                    l = {
                        end: ",",
                        endsWithParent: !0,
                        excludeEnd: !0,
                        keywords: n,
                        relevance: 0
                    },
                    t = {
                        begin: /\{/,
                        end: /\}/,
                        contains: [l],
                        illegal: "\\n",
                        relevance: 0
                    },
                    g = {
                        begin: "\\[",
                        end: "\\]",
                        contains: [l],
                        illegal: "\\n",
                        relevance: 0
                    },
                    b = [{
                        className: "attr",
                        variants: [{
                            begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"
                        }, {
                            begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
                        }, {
                            begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
                        }]
                    }, {
                        className: "meta",
                        begin: "^---\\s*$",
                        relevance: 10
                    }, {
                        className: "string",
                        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
                    }, {
                        begin: "<%[%=-]?",
                        end: "[%-]?%>",
                        subLanguage: "ruby",
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0
                    }, {
                        className: "type",
                        begin: "!\\w+!" + a
                    }, {
                        className: "type",
                        begin: "!<" + a + ">"
                    }, {
                        className: "type",
                        begin: "!" + a
                    }, {
                        className: "type",
                        begin: "!!" + a
                    }, {
                        className: "meta",
                        begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
                    }, {
                        className: "meta",
                        begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
                    }, {
                        className: "bullet",
                        begin: "-(?=[ ]|$)",
                        relevance: 0
                    }, e.HASH_COMMENT_MODE, {
                        beginKeywords: n,
                        keywords: {
                            literal: n
                        }
                    }, {
                        className: "number",
                        begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
                    }, {
                        className: "number",
                        begin: e.C_NUMBER_RE + "\\b",
                        relevance: 0
                    }, t, g, s],
                    r = [].concat(b);
                return r.pop(), r.push(i), l.contains = r, {
                    name: "YAML",
                    case_insensitive: !0,
                    aliases: ["yml"],
                    contains: b
                };
            };
        }();
        hljs.registerLanguage("yaml", e);
    })(); /*! `xml` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var a = e.regex,
                    n = a.concat(/(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/, a.optional(/(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*:/), /(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*/),
                    s = {
                        className: "symbol",
                        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
                    },
                    t = {
                        begin: /\s/,
                        contains: [{
                            className: "keyword",
                            begin: /#?[a-z_][a-z1-9_-]+/,
                            illegal: /\n/
                        }]
                    },
                    i = e.inherit(t, {
                        begin: /\(/,
                        end: /\)/
                    }),
                    c = e.inherit(e.APOS_STRING_MODE, {
                        className: "string"
                    }),
                    l = e.inherit(e.QUOTE_STRING_MODE, {
                        className: "string"
                    }),
                    r = {
                        endsWithParent: !0,
                        illegal: /</,
                        relevance: 0,
                        contains: [{
                            className: "attr",
                            begin: /(?:[\x2D\.0-:A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])+/,
                            relevance: 0
                        }, {
                            begin: /=\s*/,
                            relevance: 0,
                            contains: [{
                                className: "string",
                                endsParent: !0,
                                variants: [{
                                    begin: /"/,
                                    end: /"/,
                                    contains: [s]
                                }, {
                                    begin: /'/,
                                    end: /'/,
                                    contains: [s]
                                }, {
                                    begin: /[^\s"'=<>`]+/
                                }]
                            }]
                        }]
                    };
                return {
                    name: "HTML, XML",
                    aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                    case_insensitive: !0,
                    unicodeRegex: !0,
                    contains: [{
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        relevance: 10,
                        contains: [t, l, c, i, {
                            begin: /\[/,
                            end: /\]/,
                            contains: [{
                                className: "meta",
                                begin: /<![a-z]/,
                                end: />/,
                                contains: [t, i, l, c]
                            }]
                        }]
                    }, e.COMMENT(/<!--/, /-->/, {
                        relevance: 10
                    }), {
                        begin: /<!\[CDATA\[/,
                        end: /\]\]>/,
                        relevance: 10
                    }, s, {
                        className: "meta",
                        end: /\?>/,
                        variants: [{
                            begin: /<\?xml/,
                            relevance: 10,
                            contains: [l]
                        }, {
                            begin: /<\?[a-z][a-z0-9]+/
                        }]
                    }, {
                        className: "tag",
                        begin: /<style(?=\s|>)/,
                        end: />/,
                        keywords: {
                            name: "style"
                        },
                        contains: [r],
                        starts: {
                            end: /<\/style>/,
                            returnEnd: !0,
                            subLanguage: ["css", "xml"]
                        }
                    }, {
                        className: "tag",
                        begin: /<script(?=\s|>)/,
                        end: />/,
                        keywords: {
                            name: "script"
                        },
                        contains: [r],
                        starts: {
                            end: /<\/script>/,
                            returnEnd: !0,
                            subLanguage: ["javascript", "handlebars", "xml"]
                        }
                    }, {
                        className: "tag",
                        begin: /<>|<\/>/
                    }, {
                        className: "tag",
                        begin: a.concat(/</, a.lookahead(a.concat(n, a.either(/\/>/, />/, /\s/)))),
                        end: /\/?>/,
                        contains: [{
                            className: "name",
                            begin: n,
                            relevance: 0,
                            starts: r
                        }]
                    }, {
                        className: "tag",
                        begin: a.concat(/<\//, a.lookahead(a.concat(n, />/))),
                        contains: [{
                            className: "name",
                            begin: n,
                            relevance: 0
                        }, {
                            begin: />/,
                            relevance: 0,
                            endsParent: !0
                        }]
                    }]
                };
            };
        }();
        hljs.registerLanguage("xml", e);
    })(); /*! `markdown` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = {
                        begin: /<\/?[A-Za-z_]/,
                        end: ">",
                        subLanguage: "xml",
                        relevance: 0
                    },
                    a = {
                        variants: [{
                            begin: /\[.+?\]\[.*?\]/,
                            relevance: 0
                        }, {
                            begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                            relevance: 2
                        }, {
                            begin: e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                            relevance: 2
                        }, {
                            begin: /\[.+?\]\([./?&#].*?\)/,
                            relevance: 1
                        }, {
                            begin: /\[.*?\]\(.*?\)/,
                            relevance: 0
                        }],
                        returnBegin: !0,
                        contains: [{
                            match: /\[(?=\])/
                        }, {
                            className: "string",
                            relevance: 0,
                            begin: "\\[",
                            end: "\\]",
                            excludeBegin: !0,
                            returnEnd: !0
                        }, {
                            className: "link",
                            relevance: 0,
                            begin: "\\]\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "symbol",
                            relevance: 0,
                            begin: "\\]\\[",
                            end: "\\]",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }]
                    },
                    i = {
                        className: "strong",
                        contains: [],
                        variants: [{
                            begin: /_{2}/,
                            end: /_{2}/
                        }, {
                            begin: /\*{2}/,
                            end: /\*{2}/
                        }]
                    },
                    s = {
                        className: "emphasis",
                        contains: [],
                        variants: [{
                            begin: /\*(?!\*)/,
                            end: /\*/
                        }, {
                            begin: /_(?!_)/,
                            end: /_/,
                            relevance: 0
                        }]
                    },
                    c = e.inherit(i, {
                        contains: []
                    }),
                    t = e.inherit(s, {
                        contains: []
                    });
                i.contains.push(t), s.contains.push(c);
                var g = [n, a];
                return [i, s, c, t].forEach(function (e) {
                    e.contains = e.contains.concat(g);
                }), g = g.concat(i, s), {
                    name: "Markdown",
                    aliases: ["md", "mkdown", "mkd"],
                    contains: [{
                        className: "section",
                        variants: [{
                            begin: "^#{1,6}",
                            end: "$",
                            contains: g
                        }, {
                            begin: "(?=^.+?\\n[=-]{2,}$)",
                            contains: [{
                                begin: "^[=-]*$"
                            }, {
                                begin: "^",
                                end: "\\n",
                                contains: g
                            }]
                        }]
                    }, n, {
                        className: "bullet",
                        begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                        end: "\\s+",
                        excludeEnd: !0
                    }, i, s, {
                        className: "quote",
                        begin: "^>\\s+",
                        contains: g,
                        end: "$"
                    }, {
                        className: "code",
                        variants: [{
                            begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
                        }, {
                            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                        }, {
                            begin: "```",
                            end: "```+[ ]*$"
                        }, {
                            begin: "~~~",
                            end: "~~~+[ ]*$"
                        }, {
                            begin: "`.+?`"
                        }, {
                            begin: "(?=^( {4}|\\t))",
                            contains: [{
                                begin: "^( {4}|\\t)",
                                end: "(\\n)$"
                            }],
                            relevance: 0
                        }]
                    }, {
                        begin: "^[-\\*]{3,}",
                        end: "$"
                    }, a, {
                        begin: /^\[[^\n]+\]:/,
                        returnBegin: !0,
                        contains: [{
                            className: "symbol",
                            begin: /\[/,
                            end: /\]/,
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "link",
                            begin: /:\s*/,
                            end: /$/,
                            excludeBegin: !0
                        }]
                    }]
                };
            };
        }();
        hljs.registerLanguage("markdown", e);
    })(); /*! `dos` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var r = e.COMMENT(/^\s*@?rem\b/, /$/, {
                    relevance: 10
                });
                return {
                    name: "Batch file (DOS)",
                    aliases: ["bat", "cmd"],
                    case_insensitive: !0,
                    illegal: /\/\*/,
                    keywords: {
                        keyword: ["if", "else", "goto", "for", "in", "do", "call", "exit", "not", "exist", "errorlevel", "defined", "equ", "neq", "lss", "leq", "gtr", "geq"],
                        built_in: ["prn", "nul", "lpt3", "lpt2", "lpt1", "con", "com4", "com3", "com2", "com1", "aux", "shift", "cd", "dir", "echo", "setlocal", "endlocal", "set", "pause", "copy", "append", "assoc", "at", "attrib", "break", "cacls", "cd", "chcp", "chdir", "chkdsk", "chkntfs", "cls", "cmd", "color", "comp", "compact", "convert", "date", "dir", "diskcomp", "diskcopy", "doskey", "erase", "fs", "find", "findstr", "format", "ftype", "graftabl", "help", "keyb", "label", "md", "mkdir", "mode", "more", "move", "path", "pause", "print", "popd", "pushd", "promt", "rd", "recover", "rem", "rename", "replace", "restore", "rmdir", "shift", "sort", "start", "subst", "time", "title", "tree", "type", "ver", "verify", "vol", "ping", "net", "ipconfig", "taskkill", "xcopy", "ren", "del"]
                    },
                    contains: [{
                        className: "variable",
                        begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
                    }, {
                        className: "function",
                        begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
                        end: "goto:eof",
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                        }), r]
                    }, {
                        className: "number",
                        begin: "\\b\\d+",
                        relevance: 0
                    }, r]
                };
            };
        }();
        hljs.registerLanguage("dos", e);
    })(); /*! `accesslog` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = e.regex,
                    a = ["GET", "POST", "HEAD", "PUT", "DELETE", "CONNECT", "OPTIONS", "PATCH", "TRACE"];
                return {
                    name: "Apache Access Log",
                    contains: [{
                        className: "number",
                        begin: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,
                        relevance: 5
                    }, {
                        className: "number",
                        begin: /\b\d+\b/,
                        relevance: 0
                    }, {
                        className: "string",
                        begin: n.concat(/"/, n.either.apply(n, a)),
                        end: /"/,
                        keywords: a,
                        illegal: /\n/,
                        relevance: 5,
                        contains: [{
                            begin: /HTTP\/[12]\.\d'/,
                            relevance: 5
                        }]
                    }, {
                        className: "string",
                        begin: /\[\d[^\]\n]{8,}\]/,
                        illegal: /\n/,
                        relevance: 1
                    }, {
                        className: "string",
                        begin: /\[/,
                        end: /\]/,
                        illegal: /\n/,
                        relevance: 0
                    }, {
                        className: "string",
                        begin: /"Mozilla\/\d\.\d \(/,
                        end: /"/,
                        illegal: /\n/,
                        relevance: 3
                    }, {
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        illegal: /\n/,
                        relevance: 0
                    }]
                };
            };
        }();
        hljs.registerLanguage("accesslog", e);
    })(); /*! `vim` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                return {
                    name: "Vim Script",
                    keywords: {
                        $pattern: /[!#@\w]+/,
                        keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
                        built_in: "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"
                    },
                    illegal: /;/,
                    contains: [e.NUMBER_MODE, {
                        className: "string",
                        begin: "'",
                        end: "'",
                        illegal: "\\n"
                    }, {
                        className: "string",
                        begin: /"(\\"|\n\\|[^"\n])*"/
                    }, e.COMMENT('"', "$"), {
                        className: "variable",
                        begin: /[bwtglsav]:[\w\d_]+/
                    }, {
                        begin: [/\b(?:function|function!)/, /\s+/, e.IDENT_RE],
                        className: {
                            1: "keyword",
                            3: "title"
                        },
                        end: "$",
                        relevance: 0,
                        contains: [{
                            className: "params",
                            begin: "\\(",
                            end: "\\)"
                        }]
                    }, {
                        className: "symbol",
                        begin: /<[\w-]+>/
                    }]
                };
            };
        }();
        hljs.registerLanguage("vim", e);
    })(); /*! `php` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var t = e.regex,
                    a = /(?![A-Za-z0-9])(?![$])/,
                    r = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, a),
                    n = t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, a),
                    o = {
                        scope: "variable",
                        match: "\\$+" + r
                    },
                    c = {
                        scope: "subst",
                        variants: [{
                            begin: /\$\w+/
                        }, {
                            begin: /\{\$/,
                            end: /\}/
                        }]
                    },
                    i = e.inherit(e.APOS_STRING_MODE, {
                        illegal: null
                    }),
                    s = "[ \t\n]",
                    l = {
                        scope: "string",
                        variants: [e.inherit(e.QUOTE_STRING_MODE, {
                            illegal: null,
                            contains: e.QUOTE_STRING_MODE.contains.concat(c)
                        }), i, e.END_SAME_AS_BEGIN({
                            begin: /<<<[ \t]*(\w+)\n/,
                            end: /[ \t]*(\w+)\b/,
                            contains: e.QUOTE_STRING_MODE.contains.concat(c)
                        })]
                    },
                    _ = {
                        scope: "number",
                        variants: [{
                            begin: "\\b0[bB][01]+(?:_[01]+)*\\b"
                        }, {
                            begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
                        }, {
                            begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
                        }, {
                            begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                        }],
                        relevance: 0
                    },
                    d = ["false", "null", "true"],
                    p = ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"],
                    b = ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"],
                    E = {
                        keyword: p,
                        literal: function (e) {
                            var t = [];
                            return e.forEach(function (e) {
                                t.push(e), e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase());
                            }), t;
                        }(d),
                        built_in: b
                    },
                    u = function u(e) {
                        return e.map(function (e) {
                            return e.replace(/\|\d+$/, "");
                        });
                    },
                    g = {
                        variants: [{
                            match: [/new/, t.concat(s, "+"), t.concat("(?!", u(b).join("\\b|"), "\\b)"), n],
                            scope: {
                                1: "keyword",
                                4: "title.class"
                            }
                        }]
                    },
                    h = t.concat(r, "\\b(?!\\()"),
                    m = {
                        variants: [{
                            match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), h],
                            scope: {
                                2: "variable.constant"
                            }
                        }, {
                            match: [/::/, /class/],
                            scope: {
                                2: "variable.language"
                            }
                        }, {
                            match: [n, t.concat(/::/, t.lookahead(/(?!class\b)/)), h],
                            scope: {
                                1: "title.class",
                                3: "variable.constant"
                            }
                        }, {
                            match: [n, t.concat("::", t.lookahead(/(?!class\b)/))],
                            scope: {
                                1: "title.class"
                            }
                        }, {
                            match: [n, /::/, /class/],
                            scope: {
                                1: "title.class",
                                3: "variable.language"
                            }
                        }]
                    },
                    I = {
                        scope: "attr",
                        match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
                    },
                    f = {
                        relevance: 0,
                        begin: /\(/,
                        end: /\)/,
                        keywords: E,
                        contains: [I, o, m, e.C_BLOCK_COMMENT_MODE, l, _, g]
                    },
                    O = {
                        relevance: 0,
                        match: [/\b/, t.concat("(?!fn\\b|function\\b|", u(p).join("\\b|"), "|", u(b).join("\\b|"), "\\b)"), r, t.concat(s, "*"), t.lookahead(/(?=\()/)],
                        scope: {
                            3: "title.function.invoke"
                        },
                        contains: [f]
                    };
                f.contains.push(O);
                var v = [I, m, e.C_BLOCK_COMMENT_MODE, l, _, g];
                return {
                    case_insensitive: !1,
                    keywords: E,
                    contains: [{
                        begin: t.concat(/#\[\s*/, n),
                        beginScope: "meta",
                        end: /]/,
                        endScope: "meta",
                        keywords: {
                            literal: d,
                            keyword: ["new", "array"]
                        },
                        contains: [{
                            begin: /\[/,
                            end: /]/,
                            keywords: {
                                literal: d,
                                keyword: ["new", "array"]
                            },
                            contains: ["self"].concat(v)
                        }].concat(v, [{
                            scope: "meta",
                            match: n
                        }])
                    }, e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
                        contains: [{
                            scope: "doctag",
                            match: "@[A-Za-z]+"
                        }]
                    }), {
                        match: /__halt_compiler\(\);/,
                        keywords: "__halt_compiler",
                        starts: {
                            scope: "comment",
                            end: e.MATCH_NOTHING_RE,
                            contains: [{
                                match: /\?>/,
                                scope: "meta",
                                endsParent: !0
                            }]
                        }
                    }, {
                        scope: "meta",
                        variants: [{
                            begin: /<\?php/,
                            relevance: 10
                        }, {
                            begin: /<\?=/
                        }, {
                            begin: /<\?/,
                            relevance: .1
                        }, {
                            begin: /\?>/
                        }]
                    }, {
                        scope: "variable.language",
                        match: /\$this\b/
                    }, o, O, m, {
                        match: [/const/, /\s/, r],
                        scope: {
                            1: "keyword",
                            3: "variable.constant"
                        }
                    }, g, {
                        scope: "function",
                        relevance: 0,
                        beginKeywords: "fn function",
                        end: /[;{]/,
                        excludeEnd: !0,
                        illegal: "[$%\\[]",
                        contains: [{
                            beginKeywords: "use"
                        }, e.UNDERSCORE_TITLE_MODE, {
                            begin: "=>",
                            endsParent: !0
                        }, {
                            scope: "params",
                            begin: "\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: E,
                            contains: ["self", o, m, e.C_BLOCK_COMMENT_MODE, l, _]
                        }]
                    }, {
                        scope: "class",
                        variants: [{
                            beginKeywords: "enum",
                            illegal: /[($"]/
                        }, {
                            beginKeywords: "class interface trait",
                            illegal: /[:($"]/
                        }],
                        relevance: 0,
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [{
                            beginKeywords: "extends implements"
                        }, e.UNDERSCORE_TITLE_MODE]
                    }, {
                        beginKeywords: "namespace",
                        relevance: 0,
                        end: ";",
                        illegal: /[.']/,
                        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                            scope: "title.class"
                        })]
                    }, {
                        beginKeywords: "use",
                        relevance: 0,
                        end: ";",
                        contains: [{
                            match: /\b(as|const|function)\b/,
                            scope: "keyword"
                        }, e.UNDERSCORE_TITLE_MODE]
                    }, l, _]
                };
            };
        }();
        hljs.registerLanguage("php", e);
    })(); /*! `javascript` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            var e = "[A-Za-z$_][0-9A-Za-z$_]*",
                n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
                a = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                t = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
                s = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                r = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
                c = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
                i = [].concat(r, t, s);
            return function (o) {
                var l = o.regex,
                    b = e,
                    d = {
                        begin: /<[A-Za-z0-9\\._:-]+/,
                        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                        isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
                            var a = e[0].length + e.index,
                                t = e.input[a];
                            if ("<" === t || "," === t) return void n.ignoreMatch();
                            var s;
                            ">" === t && (function (e, _ref8) {
                                var n = _ref8.after;
                                var a = "</" + e[0].slice(1);
                                return -1 !== e.input.indexOf(a, n);
                            }(e, {
                                after: a
                            }) || n.ignoreMatch()), (s = e.input.substring(a).match(/^\s+extends\s+/)) && 0 === s.index && n.ignoreMatch();
                        }
                    },
                    g = {
                        $pattern: e,
                        keyword: n,
                        literal: a,
                        built_in: i,
                        "variable.language": c
                    },
                    u = "\\.([0-9](_?[0-9])*)",
                    m = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
                    E = {
                        className: "number",
                        variants: [{
                            begin: "(\\b(" + m + ")((" + u + ")|\\.)?|(" + u + "))[eE][+-]?([0-9](_?[0-9])*)\\b"
                        }, {
                            begin: "\\b(" + m + ")\\b((" + u + ")\\b|\\.)?|(" + u + ")\\b"
                        }, {
                            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                        }, {
                            begin: "\\b0[0-7]+n?\\b"
                        }],
                        relevance: 0
                    },
                    A = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: g,
                        contains: []
                    },
                    y = {
                        begin: "html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [o.BACKSLASH_ESCAPE, A],
                            subLanguage: "xml"
                        }
                    },
                    N = {
                        begin: "css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [o.BACKSLASH_ESCAPE, A],
                            subLanguage: "css"
                        }
                    },
                    _ = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [o.BACKSLASH_ESCAPE, A]
                    },
                    f = {
                        className: "comment",
                        variants: [o.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                            relevance: 0,
                            contains: [{
                                begin: "(?=@[A-Za-z]+)",
                                relevance: 0,
                                contains: [{
                                    className: "doctag",
                                    begin: "@[A-Za-z]+"
                                }, {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: b + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0
                                }]
                            }]
                        }), o.C_BLOCK_COMMENT_MODE, o.C_LINE_COMMENT_MODE]
                    },
                    h = [o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, y, N, _, E];
                A.contains = h.concat({
                    begin: /\{/,
                    end: /\}/,
                    keywords: g,
                    contains: ["self"].concat(h)
                });
                var v = [].concat(f, A.contains),
                    p = v.concat([{
                        begin: /\(/,
                        end: /\)/,
                        keywords: g,
                        contains: ["self"].concat(v)
                    }]),
                    S = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: g,
                        contains: p
                    },
                    w = {
                        variants: [{
                            match: [/class/, /\s+/, b, /\s+/, /extends/, /\s+/, l.concat(b, "(", l.concat(/\./, b), ")*")],
                            scope: {
                                1: "keyword",
                                3: "title.class",
                                5: "keyword",
                                7: "title.class.inherited"
                            }
                        }, {
                            match: [/class/, /\s+/, b],
                            scope: {
                                1: "keyword",
                                3: "title.class"
                            }
                        }]
                    },
                    R = {
                        relevance: 0,
                        match: l.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                        className: "title.class",
                        keywords: {
                            _: [].concat(t, s)
                        }
                    },
                    O = {
                        variants: [{
                            match: [/function/, /\s+/, b, /(?=\s*\()/]
                        }, {
                            match: [/function/, /\s*(?=\()/]
                        }],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        label: "func.def",
                        contains: [S],
                        illegal: /%/
                    },
                    k = {
                        match: l.concat(/\b/, (I = [].concat(r, ["super"]), l.concat("(?!", I.join("|"), ")")), b, l.lookahead(/\(/)),
                        className: "title.function",
                        relevance: 0
                    };
                var I;
                var x = {
                        begin: l.concat(/\./, l.lookahead(l.concat(b, /(?![0-9A-Za-z$_(])/))),
                        end: b,
                        excludeBegin: !0,
                        keywords: "prototype",
                        className: "property",
                        relevance: 0
                    },
                    T = {
                        match: [/get|set/, /\s+/, b, /(?=\()/],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [{
                            begin: /\(\)/
                        }, S]
                    },
                    C = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + o.UNDERSCORE_IDENT_RE + ")\\s*=>",
                    M = {
                        match: [/const|var|let/, /\s+/, b, /\s*/, /=\s*/, /(async\s*)?/, l.lookahead(C)],
                        keywords: "async",
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [S]
                    };
                return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: g,
                    exports: {
                        PARAMS_CONTAINS: p,
                        CLASS_REFERENCE: R
                    },
                    illegal: /#(?![$_A-z])/,
                    contains: [o.SHEBANG({
                        label: "shebang",
                        binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, y, N, _, f, E, R, {
                        className: "attr",
                        begin: b + l.lookahead(":"),
                        relevance: 0
                    }, M, {
                        begin: "(" + o.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        relevance: 0,
                        contains: [f, o.REGEXP_MODE, {
                            className: "function",
                            begin: C,
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: o.UNDERSCORE_IDENT_RE,
                                    relevance: 0
                                }, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {
                                    begin: /\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    keywords: g,
                                    contains: p
                                }]
                            }]
                        }, {
                            begin: /,/,
                            relevance: 0
                        }, {
                            match: /\s+/,
                            relevance: 0
                        }, {
                            variants: [{
                                begin: "<>",
                                end: "</>"
                            }, {
                                match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                            }, {
                                begin: d.begin,
                                "on:begin": d.isTrulyOpeningTag,
                                end: d.end
                            }],
                            subLanguage: "xml",
                            contains: [{
                                begin: d.begin,
                                end: d.end,
                                skip: !0,
                                contains: ["self"]
                            }]
                        }]
                    }, O, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + o.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0,
                        label: "func.def",
                        contains: [S, o.inherit(o.TITLE_MODE, {
                            begin: b,
                            className: "title.function"
                        })]
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, x, {
                        match: "\\$" + b,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/],
                        className: {
                            1: "title.function"
                        },
                        contains: [S]
                    }, k, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, w, T, {
                        match: /\$[(.]/
                    }]
                };
            };
        }();
        hljs.registerLanguage("javascript", e);
    })(); /*! `ini` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = e.regex,
                    a = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: /([+-]+)?[\d]+_[\d_]+/
                        }, {
                            begin: e.NUMBER_RE
                        }]
                    },
                    s = e.COMMENT();
                s.variants = [{
                    begin: /;/,
                    end: /$/
                }, {
                    begin: /#/,
                    end: /$/
                }];
                var i = {
                        className: "variable",
                        variants: [{
                            begin: /\$[\w\d"][\w\d_]*/
                        }, {
                            begin: /\$\{(.*?)\}/
                        }]
                    },
                    t = {
                        className: "literal",
                        begin: /\bon|off|true|false|yes|no\b/
                    },
                    r = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE],
                        variants: [{
                            begin: "'''",
                            end: "'''",
                            relevance: 10
                        }, {
                            begin: '"""',
                            end: '"""',
                            relevance: 10
                        }, {
                            begin: '"',
                            end: '"'
                        }, {
                            begin: "'",
                            end: "'"
                        }]
                    },
                    l = {
                        begin: /\[/,
                        end: /\]/,
                        contains: [s, t, i, r, a, "self"],
                        relevance: 0
                    },
                    c = n.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
                return {
                    name: "TOML, also INI",
                    aliases: ["toml"],
                    case_insensitive: !0,
                    illegal: /\S/,
                    contains: [s, {
                        className: "section",
                        begin: /\[+/,
                        end: /\]+/
                    }, {
                        begin: n.concat(c, "(\\s*\\.\\s*", c, ")*", n.lookahead(/\s*=\s*[^#\s]/)),
                        className: "attr",
                        starts: {
                            end: /$/,
                            contains: [s, l, t, i, r, a]
                        }
                    }]
                };
            };
        }();
        hljs.registerLanguage("ini", e);
    })(); /*! `css` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            var e = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
                i = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
                r = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
                t = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
                o = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
            return function (n) {
                var a = n.regex,
                    l = function (e) {
                        return {
                            IMPORTANT: {
                                scope: "meta",
                                begin: "!important"
                            },
                            BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                            HEXCOLOR: {
                                scope: "number",
                                begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
                            },
                            FUNCTION_DISPATCH: {
                                className: "built_in",
                                begin: /[\w-]+(?=\()/
                            },
                            ATTRIBUTE_SELECTOR_MODE: {
                                scope: "selector-attr",
                                begin: /\[/,
                                end: /\]/,
                                illegal: "$",
                                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                            },
                            CSS_NUMBER_MODE: {
                                scope: "number",
                                begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                                relevance: 0
                            },
                            CSS_VARIABLE: {
                                className: "attr",
                                begin: /--[A-Za-z][A-Za-z0-9_-]*/
                            }
                        };
                    }(n),
                    s = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE];
                return {
                    name: "CSS",
                    case_insensitive: !0,
                    illegal: /[=|'\$]/,
                    keywords: {
                        keyframePosition: "from to"
                    },
                    classNameAliases: {
                        keyframePosition: "selector-tag"
                    },
                    contains: [l.BLOCK_COMMENT, {
                        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
                    }, l.CSS_NUMBER_MODE, {
                        className: "selector-id",
                        begin: /#[A-Za-z0-9_-]+/,
                        relevance: 0
                    }, {
                        className: "selector-class",
                        begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                        relevance: 0
                    }, l.ATTRIBUTE_SELECTOR_MODE, {
                        className: "selector-pseudo",
                        variants: [{
                            begin: ":(" + r.join("|") + ")"
                        }, {
                            begin: ":(:)?(" + t.join("|") + ")"
                        }]
                    }, l.CSS_VARIABLE, {
                        className: "attribute",
                        begin: "\\b(" + o.join("|") + ")\\b"
                    }, {
                        begin: /:/,
                        end: /[;}{]/,
                        contains: [l.BLOCK_COMMENT, l.HEXCOLOR, l.IMPORTANT, l.CSS_NUMBER_MODE].concat(s, [{
                            begin: /(url|data-uri)\(/,
                            end: /\)/,
                            relevance: 0,
                            keywords: {
                                built_in: "url data-uri"
                            },
                            contains: [].concat(s, [{
                                className: "string",
                                begin: /[^)]/,
                                endsWithParent: !0,
                                excludeEnd: !0
                            }])
                        }, l.FUNCTION_DISPATCH])
                    }, {
                        begin: a.lookahead(/@/),
                        end: "[{;]",
                        relevance: 0,
                        illegal: /:/,
                        contains: [{
                            className: "keyword",
                            begin: /@-?\w[\w]*(-\w+)*/
                        }, {
                            begin: /\s/,
                            endsWithParent: !0,
                            excludeEnd: !0,
                            relevance: 0,
                            keywords: {
                                $pattern: /[a-z-]+/,
                                keyword: "and or not only",
                                attribute: i.join(" ")
                            },
                            contains: [{
                                begin: /[a-z-]+(?=:)/,
                                className: "attribute"
                            }].concat(s, [l.CSS_NUMBER_MODE])
                        }]
                    }, {
                        className: "selector-tag",
                        begin: "\\b(" + e.join("|") + ")\\b"
                    }]
                };
            };
        }();
        hljs.registerLanguage("css", e);
    })(); /*! `nginx` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = e.regex,
                    a = {
                        className: "variable",
                        variants: [{
                            begin: /\$\d+/
                        }, {
                            begin: /\$\{\w+\}/
                        }, {
                            begin: n.concat(/[$@]/, e.UNDERSCORE_IDENT_RE)
                        }]
                    },
                    s = {
                        endsWithParent: !0,
                        keywords: {
                            $pattern: /[a-z_]{2,}|\/dev\/poll/,
                            literal: ["on", "off", "yes", "no", "true", "false", "none", "blocked", "debug", "info", "notice", "warn", "error", "crit", "select", "break", "last", "permanent", "redirect", "kqueue", "rtsig", "epoll", "poll", "/dev/poll"]
                        },
                        relevance: 0,
                        illegal: "=>",
                        contains: [e.HASH_COMMENT_MODE, {
                            className: "string",
                            contains: [e.BACKSLASH_ESCAPE, a],
                            variants: [{
                                begin: /"/,
                                end: /"/
                            }, {
                                begin: /'/,
                                end: /'/
                            }]
                        }, {
                            begin: "([a-z]+):/",
                            end: "\\s",
                            endsWithParent: !0,
                            excludeEnd: !0,
                            contains: [a]
                        }, {
                            className: "regexp",
                            contains: [e.BACKSLASH_ESCAPE, a],
                            variants: [{
                                begin: "\\s\\^",
                                end: "\\s|\\{|;",
                                returnEnd: !0
                            }, {
                                begin: "~\\*?\\s+",
                                end: "\\s|\\{|;",
                                returnEnd: !0
                            }, {
                                begin: "\\*(\\.[a-z\\-]+)+"
                            }, {
                                begin: "([a-z\\-]+\\.)+\\*"
                            }]
                        }, {
                            className: "number",
                            begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                        }, {
                            className: "number",
                            begin: "\\b\\d+[kKmMgGdshdwy]?\\b",
                            relevance: 0
                        }, a]
                    };
                return {
                    name: "Nginx config",
                    aliases: ["nginxconf"],
                    contains: [e.HASH_COMMENT_MODE, {
                        beginKeywords: "upstream location",
                        end: /;|\{/,
                        contains: s.contains,
                        keywords: {
                            section: "upstream location"
                        }
                    }, {
                        className: "section",
                        begin: n.concat(e.UNDERSCORE_IDENT_RE + n.lookahead(/\s+\{/)),
                        relevance: 0
                    }, {
                        begin: n.lookahead(e.UNDERSCORE_IDENT_RE + "\\s"),
                        end: ";|\\{",
                        contains: [{
                            className: "attribute",
                            begin: e.UNDERSCORE_IDENT_RE,
                            starts: s
                        }],
                        relevance: 0
                    }],
                    illegal: "[^\\s\\}\\{]"
                };
            };
        }();
        hljs.registerLanguage("nginx", e);
    })(); /*! `php-template` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var n = function () {
            return function (n) {
                return {
                    name: "PHP template",
                    subLanguage: "xml",
                    contains: [{
                        begin: /<\?(php|=)?/,
                        end: /\?>/,
                        subLanguage: "php",
                        contains: [{
                            begin: "/\\*",
                            end: "\\*/",
                            skip: !0
                        }, {
                            begin: 'b"',
                            end: '"',
                            skip: !0
                        }, {
                            begin: "b'",
                            end: "'",
                            skip: !0
                        }, n.inherit(n.APOS_STRING_MODE, {
                            illegal: null,
                            className: null,
                            contains: null,
                            skip: !0
                        }), n.inherit(n.QUOTE_STRING_MODE, {
                            illegal: null,
                            className: null,
                            contains: null,
                            skip: !0
                        })]
                    }]
                };
            };
        }();
        hljs.registerLanguage("php-template", n);
    })(); /*! `apache` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = {
                    className: "number",
                    begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
                };
                return {
                    name: "Apache config",
                    aliases: ["apacheconf"],
                    case_insensitive: !0,
                    contains: [e.HASH_COMMENT_MODE, {
                        className: "section",
                        begin: /<\/?/,
                        end: />/,
                        contains: [n, {
                            className: "number",
                            begin: /:\d{1,5}/
                        }, e.inherit(e.QUOTE_STRING_MODE, {
                            relevance: 0
                        })]
                    }, {
                        className: "attribute",
                        begin: /\w+/,
                        relevance: 0,
                        keywords: {
                            _: ["order", "deny", "allow", "setenv", "rewriterule", "rewriteengine", "rewritecond", "documentroot", "sethandler", "errordocument", "loadmodule", "options", "header", "listen", "serverroot", "servername"]
                        },
                        starts: {
                            end: /$/,
                            relevance: 0,
                            keywords: {
                                literal: "on off all deny allow"
                            },
                            contains: [{
                                className: "meta",
                                begin: /\s\[/,
                                end: /\]$/
                            }, {
                                className: "variable",
                                begin: /[\$%]\{/,
                                end: /\}/,
                                contains: ["self", {
                                    className: "number",
                                    begin: /[$%]\d+/
                                }]
                            }, n, {
                                className: "number",
                                begin: /\b\d+/
                            }, e.QUOTE_STRING_MODE]
                        }
                    }],
                    illegal: /\S/
                };
            };
        }();
        hljs.registerLanguage("apache", e);
    })(); /*! `bash` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var s = e.regex,
                    t = {},
                    n = {
                        begin: /\$\{/,
                        end: /\}/,
                        contains: ["self", {
                            begin: /:-/,
                            contains: [t]
                        }]
                    };
                Object.assign(t, {
                    className: "variable",
                    variants: [{
                        begin: s.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
                    }, n]
                });
                var a = {
                        className: "subst",
                        begin: /\$\(/,
                        end: /\)/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    i = {
                        begin: /<<-?\s*(?=\w+)/,
                        starts: {
                            contains: [e.END_SAME_AS_BEGIN({
                                begin: /(\w+)/,
                                end: /(\w+)/,
                                className: "string"
                            })]
                        }
                    },
                    c = {
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, t, a]
                    };
                a.contains.push(c);
                var o = {
                        begin: /\$\(\(/,
                        end: /\)\)/,
                        contains: [{
                            begin: /\d+#[0-9a-f]+/,
                            className: "number"
                        }, e.NUMBER_MODE, t]
                    },
                    r = e.SHEBANG({
                        binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
                        relevance: 10
                    }),
                    l = {
                        className: "function",
                        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                        returnBegin: !0,
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: /\w[\w\d_]*/
                        })],
                        relevance: 0
                    };
                return {
                    name: "Bash",
                    aliases: ["sh"],
                    keywords: {
                        $pattern: /\b[a-z][a-z0-9._-]+\b/,
                        keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
                        literal: ["true", "false"],
                        built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
                    },
                    contains: [r, e.SHEBANG(), l, o, e.HASH_COMMENT_MODE, i, {
                        match: /(\/[a-z._-]+)+/
                    }, c, {
                        className: "",
                        begin: /\\"/
                    }, {
                        className: "string",
                        begin: /'/,
                        end: /'/
                    }, t]
                };
            };
        }();
        hljs.registerLanguage("bash", e);
    })(); /*! `http` grammar compiled for Highlight.js 11.6.0 */
    (function () {
        var e = function () {
            return function (e) {
                var n = "HTTP/(2|1\\.[01])",
                    a = {
                        className: "attribute",
                        begin: e.regex.concat("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"),
                        starts: {
                            contains: [{
                                className: "punctuation",
                                begin: /: /,
                                relevance: 0,
                                starts: {
                                    end: "$",
                                    relevance: 0
                                }
                            }]
                        }
                    },
                    s = [a, {
                        begin: "\\n\\n",
                        starts: {
                            subLanguage: [],
                            endsWithParent: !0
                        }
                    }];
                return {
                    name: "HTTP",
                    aliases: ["https"],
                    illegal: /\S/,
                    contains: [{
                        begin: "^(?=" + n + " \\d{3})",
                        end: /$/,
                        contains: [{
                            className: "meta",
                            begin: n
                        }, {
                            className: "number",
                            begin: "\\b\\d{3}\\b"
                        }],
                        starts: {
                            end: /\b\B/,
                            illegal: /\S/,
                            contains: s
                        }
                    }, {
                        begin: "(?=^[A-Z]+ (.*?) " + n + "$)",
                        end: /$/,
                        contains: [{
                            className: "string",
                            begin: " ",
                            end: " ",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "meta",
                            begin: n
                        }, {
                            className: "keyword",
                            begin: "[A-Z]+"
                        }],
                        starts: {
                            end: /\b\B/,
                            illegal: /\S/,
                            contains: s
                        }
                    }, e.inherit(a, {
                        relevance: 0
                    })]
                };
            };
        }();
        hljs.registerLanguage("http", e);
    })();
    // Enhanced PHP syntax highlighter by me
    hljs.registerLanguage("php", function (hljs) {
        var regex = hljs.regex;
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        var NOT_PERL_ETC = /(?![A-Za-z0-9])(?![$])/;
        var IDENT_RE = regex.concat(/[a-zA-Z_\x7f-\xff\\][a-zA-Z0-9_\x7f-\xff\\]*/, NOT_PERL_ETC);
        // Will not detect camelCase classes
        var PASCAL_CASE_CLASS_NAME_RE = regex.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, NOT_PERL_ETC);
        var VARIABLE = {
            scope: 'variable',
            match: '\\$+' + IDENT_RE
        };
        var PREPROCESSOR = {
            scope: 'meta',
            variants: [{
                    begin: /<\?php/,
                    relevance: 10
                },
                // boost for obvious PHP
                {
                    begin: /<\?=/
                },
                // less relevant per PSR-1 which says not to use short-tags
                {
                    begin: /<\?/,
                    relevance: 0.1
                }, {
                    begin: /\?>/
                } // end php tag
            ]
        };
        var SUBST = {
            scope: 'subst',
            variants: [{
                begin: /\$\w+/
            }, {
                begin: /\{\$/,
                end: /\}/
            }]
        };
        var SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, {
            illegal: null
        });
        var DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null,
            contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
        });
        var HEREDOC = hljs.END_SAME_AS_BEGIN({
            begin: /<<<[ \t]*(\w+)\n/,
            end: /[ \t]*(\w+)\b/,
            contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
        });
        // list of valid whitespaces because non-breaking space might be part of a IDENT_RE
        var WHITESPACE = '[ \t\n]';
        var STRING = {
            scope: 'string',
            variants: [DOUBLE_QUOTED, SINGLE_QUOTED, HEREDOC]
        };
        var NUMBER = {
            scope: 'number',
            variants: [{
                    begin: "\\b0[bB][01]+(?:_[01]+)*\\b"
                },
                // Binary w/ underscore support
                {
                    begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
                },
                // Octals w/ underscore support
                {
                    begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
                },
                // Hex w/ underscore support
                // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
                {
                    begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                }
            ],
            relevance: 0
        };
        var LITERALS = ["false", "null", "true"];
        var KWS = [
            // Magic constants:
            // <https://www.php.net/manual/en/language.constants.predefined.php>
            "__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__",
            // Function that look like language construct or language construct that look like function:
            // List of keywords that may not require parenthesis
            "die", "echo", "exit", "include", "include_once", "print", "require", "require_once",
            // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
            // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
            // Other keywords:
            // <https://www.php.net/manual/en/reserved.php>
            // <https://www.php.net/manual/en/language.types.type-juggling.php>
            "abstract", "and", "array", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "function", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "never", "new", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"
        ];
        var BUILT_INS = [
            // Standard PHP library:
            // <https://www.php.net/manual/en/book.spl.php>
            "Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError",
            // Reserved interfaces:
            // <https://www.php.net/manual/en/reserved.interfaces.php>
            "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap",
            // Reserved classes:
            // <https://www.php.net/manual/en/reserved.classes.php>
            "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"
        ];
        /** Dual-case keywords
         *
         * ["then","FILE"] =>
         *     ["then", "THEN", "FILE", "file"]
         *
         * @param {string[]} items */
        var dualCase = function dualCase(items) {
            /** @type string[] */
            var result = [];
            items.forEach(function (item) {
                result.push(item);
                if (item.toLowerCase() === item) {
                    result.push(item.toUpperCase());
                } else {
                    result.push(item.toLowerCase());
                }
            });
            return result;
        };
        var KEYWORDS = {
            keyword: KWS,
            literal: dualCase(LITERALS),
            built_in: BUILT_INS
        };
        /**
         * @param {string[]} items */
        var normalizeKeywords = function normalizeKeywords(items) {
            return items.map(function (item) {
                return item.replace(/\|\d+$/, "");
            });
        };
        var CONSTRUCTOR_CALL = {
            variants: [{
                match: [/new/, regex.concat(WHITESPACE, "+"),
                    // to prevent built ins from being confused as the class constructor call
                    regex.concat("(?!", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"), PASCAL_CASE_CLASS_NAME_RE
                ],
                scope: {
                    1: "keyword",
                    4: "title.class"
                }
            }]
        };
        var CONSTANT_REFERENCE = regex.concat(IDENT_RE, "\\b(?!\\()");
        var LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON = {
            variants: [{
                match: [regex.concat(/::/, regex.lookahead(/(?!class\b)/)), CONSTANT_REFERENCE],
                scope: {
                    2: "variable.constant"
                }
            }, {
                match: [/::/, /class/],
                scope: {
                    2: "variable.language"
                }
            }, {
                match: [PASCAL_CASE_CLASS_NAME_RE, regex.concat(/::/, regex.lookahead(/(?!class\b)/)), CONSTANT_REFERENCE],
                scope: {
                    1: "title.class",
                    3: "variable.constant"
                }
            }, {
                match: [PASCAL_CASE_CLASS_NAME_RE, regex.concat("::", regex.lookahead(/(?!class\b)/))],
                scope: {
                    1: "title.class"
                }
            }, {
                match: [PASCAL_CASE_CLASS_NAME_RE, /::/, /class/],
                scope: {
                    1: "title.class",
                    3: "variable.language"
                }
            }]
        };
        var NAMED_ARGUMENT = {
            scope: 'attr',
            match: regex.concat(IDENT_RE, regex.lookahead(':'), regex.lookahead(/(?!::)/))
        };
        var PARAMS_MODE = {
            relevance: 0,
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: [NAMED_ARGUMENT, VARIABLE, LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON, hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER, CONSTRUCTOR_CALL]
        };
        var FUNCTION_INVOKE = {
            relevance: 0,
            match: [/\b/,
                // to prevent keywords from being confused as the function title
                regex.concat("(?!fn\\b|function\\b|", normalizeKeywords(KWS).join("\\b|"), "|", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"), IDENT_RE, regex.concat(WHITESPACE, "*"), regex.lookahead(/(?=\()/)
            ],
            scope: {
                3: "title.function.invoke"
            },
            contains: [PARAMS_MODE]
        };
        PARAMS_MODE.contains.push(FUNCTION_INVOKE);
        var ATTRIBUTE_CONTAINS = [NAMED_ARGUMENT, LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON, hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER, CONSTRUCTOR_CALL];
        var ATTRIBUTES = {
            begin: regex.concat(/#\[\s*/, PASCAL_CASE_CLASS_NAME_RE),
            beginScope: "meta",
            end: /]/,
            endScope: "meta",
            keywords: {
                literal: LITERALS,
                keyword: ['new', 'array']
            },
            contains: [{
                begin: /\[/,
                end: /]/,
                keywords: {
                    literal: LITERALS,
                    keyword: ['new', 'array']
                },
                contains: ['self'].concat(ATTRIBUTE_CONTAINS)
            }].concat(ATTRIBUTE_CONTAINS, [{
                scope: 'meta',
                match: PASCAL_CASE_CLASS_NAME_RE
            }])
        };
        return {
            case_insensitive: false,
            keywords: KEYWORDS,
            contains: [ATTRIBUTES, hljs.HASH_COMMENT_MODE, hljs.COMMENT('//', '$'), hljs.COMMENT('/\\*', '\\*/', {
                    contains: [{
                        scope: 'doctag',
                        match: '@[A-Za-z]+'
                    }]
                }), {
                    match: /__halt_compiler\(\);/,
                    keywords: '__halt_compiler',
                    starts: {
                        scope: "comment",
                        end: hljs.MATCH_NOTHING_RE,
                        contains: [{
                            match: /\?>/,
                            scope: "meta",
                            endsParent: true
                        }]
                    }
                }, PREPROCESSOR, {
                    scope: 'variable.language',
                    match: /\$this\b/
                }, VARIABLE, FUNCTION_INVOKE, LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON, {
                    match: [/const/, /\s/, IDENT_RE],
                    scope: {
                        1: "keyword",
                        3: "variable.constant"
                    }
                }, CONSTRUCTOR_CALL, {
                    scope: 'function',
                    relevance: 0,
                    beginKeywords: 'fn function',
                    end: /[;{]/,
                    excludeEnd: true,
                    illegal: '[$%\\[]',
                    contains: [{
                        beginKeywords: 'use'
                    }, hljs.UNDERSCORE_TITLE_MODE, {
                        begin: '=>',
                        // No markup, just a relevance booster
                        endsParent: true
                    }, {
                        scope: 'params',
                        begin: '\\(',
                        end: '\\)',
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS,
                        contains: ['self', VARIABLE, LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON, hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER]
                    }]
                }, {
                    scope: 'class',
                    variants: [{
                        beginKeywords: "enum",
                        illegal: /[($"]/
                    }, {
                        beginKeywords: "class interface trait",
                        illegal: /[:($"]/
                    }],
                    relevance: 0,
                    end: /\{/,
                    excludeEnd: true,
                    contains: [{
                        beginKeywords: 'extends implements'
                    }, hljs.UNDERSCORE_TITLE_MODE]
                },
                // both use and namespace still use "old style" rules (vs multi-match)
                // because the namespace name can include `\` and we still want each
                // element to be treated as its own *individual* title
                {
                    beginKeywords: 'namespace',
                    relevance: 0,
                    end: ';',
                    illegal: /[.']/,
                    contains: [hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {
                        scope: "title.class"
                    })]
                }, {
                    beginKeywords: 'use',
                    relevance: 0,
                    end: ';',
                    contains: [
                        // TODO: title.function vs title.class
                        {
                            match: /\b(as|const|function)\b/,
                            scope: "keyword"
                        },
                        // TODO: could be title.class or title.function
                        hljs.UNDERSCORE_TITLE_MODE
                    ]
                },
                STRING, NUMBER
            ]
        };
    });
    document.querySelectorAll('pre>code:not(.txt)').forEach(function (element) {
        var content = element.textContent.replace(/<[?]xml\s[^>]+[?]>/gi, "");
        if (element.classList.contains('html') && element.classList.contains('php') && (/[?]>/.test(content) || /<[?](php|=)\s/.test(content))) {
            element.classList.add('php-template');
            element.classList.remove('html');
            element.classList.remove('php');
        }
        hljs.highlightElement(element);
    });
    document.querySelectorAll('.is-lazy').forEach(function (lazy) {
        var image = lazy.querySelector('img');
        if (image) {
            image.addEventListener('load', function () {
                this.style.opacity = 1;
                this._container.style.backgroundImage = 'none';
            });
            image._container = lazy;
            image.src = image.src; // <https://stackoverflow.com/a/12355031/1163000>
        }
    });
})();