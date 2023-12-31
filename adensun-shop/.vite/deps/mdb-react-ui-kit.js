import {
  require_warning
} from "./chunk-R2WMPALF.js";
import {
  createPopper,
  init_lib
} from "./chunk-VMX3I5C5.js";
import "./chunk-2FVWMBDX.js";
import {
  require_react_dom
} from "./chunk-OTY6O57J.js";
import {
  require_jsx_runtime
} from "./chunk-F7RKNM7B.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it2;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());

// node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-popper/lib/esm/Popper.js
var React4 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Manager.js
var React = __toESM(require_react());
var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();

// node_modules/react-popper/lib/esm/utils.js
var React2 = __toESM(require_react());
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React2.useLayoutEffect : React2.useEffect;

// node_modules/react-popper/lib/esm/usePopper.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
init_lib();
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React3.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React3.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React3.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React3.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React3.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper5 = options.createPopper || createPopper;
    var popperInstance = createPopper5(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/react-popper/lib/esm/Reference.js
var React5 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
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
    width,
    height
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
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
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
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
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
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
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
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
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
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
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/hide.js
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
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
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
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
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
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
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

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper5(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
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
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper2 = popperGenerator();

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper3 = popperGenerator({
  defaultModifiers
});

// node_modules/mdb-react-ui-kit/node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper4 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js
(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode(".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}")), document.head.appendChild(o);
    }
  } catch (d) {
    console.error("vite-plugin-css-injected-by-js", d);
  }
})();
var nt = import_react.default.forwardRef(
  ({ breakpoint: e, fluid: t, children: n, className: s, tag: r = "div", ...a }, c) => {
    const o = clsx_m_default(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, s);
    return (0, import_jsx_runtime.jsx)(r, { className: o, ...a, ref: c, children: n });
  }
);
var rt = import_react.default.forwardRef(
  ({
    center: e,
    children: t,
    className: n,
    end: s,
    lg: r,
    md: a,
    offsetLg: c,
    offsetMd: o,
    offsetSm: i,
    order: d,
    size: u,
    sm: m,
    start: f,
    tag: g = "div",
    xl: b,
    xxl: h,
    xs: v,
    ...D
  }, $) => {
    const B = clsx_m_default(
      u && `col-${u}`,
      v && `col-xs-${v}`,
      m && `col-sm-${m}`,
      a && `col-md-${a}`,
      r && `col-lg-${r}`,
      b && `col-xl-${b}`,
      h && `col-xxl-${h}`,
      !u && !v && !m && !a && !r && !b && !h ? "col" : "",
      d && `order-${d}`,
      f && "align-self-start",
      e && "align-self-center",
      s && "align-self-end",
      i && `offset-sm-${i}`,
      o && `offset-md-${o}`,
      c && `offset-lg-${c}`,
      n
    );
    return (0, import_jsx_runtime.jsx)(g, { className: B, ref: $, ...D, children: t });
  }
);
var at = import_react.default.forwardRef(
  ({ className: e, color: t = "primary", pill: n, light: s, dot: r, tag: a = "span", children: c, notification: o, ...i }, d) => {
    const u = clsx_m_default(
      "badge",
      s ? t && `badge-${t}` : t && `bg-${t}`,
      r && "badge-dot",
      n && "rounded-pill",
      o && "badge-notification",
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: u, ref: d, ...i, children: c });
  }
);
var Me = ({ ...e }) => {
  const [t, n] = (0, import_react.useState)(false), s = clsx_m_default("ripple-wave", t && "active");
  return (0, import_react.useEffect)(() => {
    const r = setTimeout(() => {
      n(true);
    }, 50);
    return () => {
      clearTimeout(r);
    };
  }, []), (0, import_jsx_runtime.jsx)("div", { className: s, ...e });
};
var $e = (...e) => {
  const t = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    e.forEach((n) => {
      n && (typeof n == "function" ? n(t.current) : n.current = t.current);
    });
  }, [e]), t;
};
var Re = import_react.default.forwardRef(
  ({
    className: e,
    rippleTag: t = "div",
    rippleCentered: n,
    rippleDuration: s = 500,
    rippleUnbound: r,
    rippleRadius: a = 0,
    rippleColor: c = "dark",
    children: o,
    onMouseDown: i,
    ...d
  }, u) => {
    const m = (0, import_react.useRef)(null), f = $e(u, m), g = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", b = [0, 0, 0], h = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], [v, D] = (0, import_react.useState)([]), [$, B] = (0, import_react.useState)(false), x = clsx_m_default(
      "ripple",
      "ripple-surface",
      r && "ripple-surface-unbound",
      $ && `ripple-surface-${c}`,
      e
    ), y = () => {
      if (h.find((E) => E === (c == null ? void 0 : c.toLowerCase())))
        return B(true);
      {
        const E = P(c).join(",");
        return `radial-gradient(circle, ${g.split("{{color}}").join(`${E}`)})`;
      }
    }, P = (T) => {
      const E = (M) => (M.length < 7 && (M = `#${M[1]}${M[1]}${M[2]}${M[2]}${M[3]}${M[3]}`), [parseInt(M.substr(1, 2), 16), parseInt(M.substr(3, 2), 16), parseInt(M.substr(5, 2), 16)]), R = (M) => {
        const S = document.body.appendChild(document.createElement("fictum")), j = "rgb(1, 2, 3)";
        return S.style.color = j, S.style.color !== j || (S.style.color = M, S.style.color === j || S.style.color === "") ? b : (M = getComputedStyle(S).color, document.body.removeChild(S), M);
      }, W = (M) => (M = M.match(/[.\d]+/g).map((S) => +Number(S)), M.length = 3, M);
      return T.toLowerCase() === "transparent" ? b : T[0] === "#" ? E(T) : (T.indexOf("rgb") === -1 && (T = R(T)), T.indexOf("rgb") === 0 ? W(T) : b);
    }, L = (T) => {
      const { offsetX: E, offsetY: R, height: W, width: M } = T, S = R <= W / 2, j = E <= M / 2, k = (X, Z) => Math.sqrt(X ** 2 + Z ** 2), _ = R === W / 2 && E === M / 2, V = {
        first: S === true && j === false,
        second: S === true && j === true,
        third: S === false && j === true,
        fourth: S === false && j === false
      }, Y = {
        topLeft: k(E, R),
        topRight: k(M - E, R),
        bottomLeft: k(E, W - R),
        bottomRight: k(M - E, W - R)
      };
      let U = 0;
      return _ || V.fourth ? U = Y.topLeft : V.third ? U = Y.topRight : V.second ? U = Y.bottomRight : V.first && (U = Y.bottomLeft), U * 2;
    }, F = (T) => {
      var U;
      const E = (U = f.current) == null ? void 0 : U.getBoundingClientRect(), R = T.clientX - E.left, W = T.clientY - E.top, M = E.height, S = E.width, j = {
        offsetX: n ? M / 2 : R,
        offsetY: n ? S / 2 : W,
        height: M,
        width: S
      }, k = {
        delay: s && s * 0.5,
        duration: s && s - s * 0.5
      }, _ = L(j), V = a || _ / 2, Y = {
        left: n ? `${S / 2 - V}px` : `${R - V}px`,
        top: n ? `${M / 2 - V}px` : `${W - V}px`,
        height: a ? `${a * 2}px` : `${_}px`,
        width: a ? `${a * 2}px` : `${_}px`,
        transitionDelay: `0s, ${k.delay}ms`,
        transitionDuration: `${s}ms, ${k.duration}ms`
      };
      return $ ? Y : { ...Y, backgroundImage: `${y()}` };
    }, A = (T) => {
      const E = F(T), R = v.concat(E);
      D(R), i && i(T);
    };
    return (0, import_react.useEffect)(() => {
      const T = setTimeout(() => {
        v.length > 0 && D(v.splice(1, v.length - 1));
      }, s);
      return () => {
        clearTimeout(T);
      };
    }, [s, v]), (0, import_jsx_runtime.jsxs)(t, { className: x, onMouseDown: (T) => A(T), ref: f, ...d, children: [
      o,
      v.map((T, E) => (0, import_jsx_runtime.jsx)(Me, { style: T }, E))
    ] });
  }
);
var ie = import_react.default.forwardRef(
  ({
    className: e,
    color: t = "primary",
    outline: n,
    children: s,
    rounded: r,
    disabled: a,
    floating: c,
    size: o,
    href: i,
    block: d,
    active: u,
    toggle: m,
    noRipple: f,
    tag: g = "button",
    role: b = "button",
    ...h
  }, v) => {
    const [D, $] = (0, import_react.useState)(u || false);
    let B;
    const x = t && ["light", "link"].includes(t) || n ? "dark" : "light";
    t !== "none" ? n ? t ? B = `btn-outline-${t}` : B = "btn-outline-primary" : t ? B = `btn-${t}` : B = "btn-primary" : B = "";
    const y = clsx_m_default(
      t !== "none" && "btn",
      B,
      r && "btn-rounded",
      c && "btn-floating",
      o && `btn-${o}`,
      `${(i || g !== "button") && a ? "disabled" : ""}`,
      d && "btn-block",
      D && "active",
      e
    );
    return i && g !== "a" && (g = "a"), ["hr", "img", "input"].includes(g) || f ? (0, import_jsx_runtime.jsx)(
      g,
      {
        className: y,
        onClick: m ? () => {
          $(!D);
        } : void 0,
        disabled: a && g === "button" ? true : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: s
      }
    ) : (0, import_jsx_runtime.jsx)(
      Re,
      {
        rippleTag: g,
        rippleColor: x,
        className: y,
        onClick: m ? () => {
          $(!D);
        } : void 0,
        disabled: a && g === "button" ? true : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: s
      }
    );
  }
);
var ot = import_react.default.forwardRef(
  ({ className: e, children: t, shadow: n, toolbar: s, size: r, vertical: a, tag: c = "div", role: o = "group", ...i }, d) => {
    let u;
    s ? u = "btn-toolbar" : a ? u = "btn-group-vertical" : u = "btn-group";
    const m = clsx_m_default(u, n && `shadow-${n}`, r && `btn-group-${r}`, e);
    return (0, import_jsx_runtime.jsx)(c, { className: m, ref: d, role: o, ...i, children: t });
  }
);
var ct = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", color: s, grow: r, size: a, ...c }, o) => {
    const i = clsx_m_default(
      `${r ? "spinner-grow" : "spinner-border"}`,
      s && `text-${s}`,
      `${a ? r ? "spinner-grow-" + a : "spinner-border-" + a : ""}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(n, { className: i, ref: o, ...c, children: t });
  }
);
var lt = import_react.default.forwardRef(
  ({ className: e, children: t, border: n, background: s, tag: r = "div", shadow: a, alignment: c, ...o }, i) => {
    const d = clsx_m_default(
      "card",
      n && `border border-${n}`,
      s && `bg-${s}`,
      a && `shadow-${a}`,
      c && `text-${c}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(r, { className: d, ref: i, ...o, children: t });
  }
);
var it = import_react.default.forwardRef(
  ({ className: e, children: t, border: n, background: s, tag: r = "div", ...a }, c) => {
    const o = clsx_m_default("card-header", n && `border-${n}`, s && `bg-${s}`, e);
    return (0, import_jsx_runtime.jsx)(r, { className: o, ...a, ref: c, children: t });
  }
);
var ut = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...s }, r) => {
    const a = clsx_m_default("card-subtitle", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var dt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...s }, r) => {
    const a = clsx_m_default("card-title", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var ft = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...s }, r) => {
    const a = clsx_m_default("card-text", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var mt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = clsx_m_default("card-body", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var pt = import_react.default.forwardRef(
  ({ className: e, children: t, border: n, background: s, tag: r = "div", ...a }, c) => {
    const o = clsx_m_default("card-footer", n && `border-${n}`, s && `bg-${s}`, e);
    return (0, import_jsx_runtime.jsx)(r, { className: o, ...a, ref: c, children: t });
  }
);
var gt = ({ className: e, children: t, overlay: n, position: s, fluid: r, ...a }) => {
  const c = clsx_m_default(s && `card-img-${s}`, r && "img-fluid", n && "card-img", e);
  return (0, import_jsx_runtime.jsx)("img", { className: c, ...a, children: t });
};
var bt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = clsx_m_default("card-img-overlay", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var vt = ({ className: e, children: t, ...n }) => {
  const s = clsx_m_default("card-link", e);
  return (0, import_jsx_runtime.jsx)("a", { className: s, ...n, children: t });
};
var ht = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = clsx_m_default("card-group", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var yt = import_react.default.forwardRef(
  ({ className: e, tag: t = "ul", horizontal: n, horizontalSize: s, light: r, numbered: a, children: c, small: o, ...i }, d) => {
    const u = clsx_m_default(
      "list-group",
      n && (s ? `list-group-horizontal-${s}` : "list-group-horizontal"),
      r && "list-group-light",
      a && "list-group-numbered",
      o && "list-group-small",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: u, ref: d, ...i, children: c });
  }
);
var Nt = import_react.default.forwardRef(
  ({ className: e, tag: t = "li", active: n, disabled: s, action: r, color: a, children: c, noBorders: o, ...i }, d) => {
    const u = t === "button", m = clsx_m_default(
      "list-group-item",
      n && "active",
      s && !u && "disabled",
      r && "list-group-item-action",
      a && `list-group-item-${a}`,
      o && "border-0",
      e
    );
    return (0, import_jsx_runtime.jsx)(t, { className: m, disabled: u && s, ref: d, ...i, children: c });
  }
);
var wt = ({
  className: e,
  children: t,
  disableMouseDown: n,
  tag: s = ie,
  tooltipTag: r = "div",
  options: a,
  placement: c = "top",
  title: o,
  wrapperProps: i,
  wrapperClass: d,
  onShow: u,
  onHide: m,
  onMouseEnter: f,
  onMouseLeave: g,
  ...b
}) => {
  const [h, v] = (0, import_react.useState)(null), [D, $] = (0, import_react.useState)(null), [B, x] = (0, import_react.useState)(false), [y, P] = (0, import_react.useState)(false), [L, F] = (0, import_react.useState)(false), [A, T] = (0, import_react.useState)(false), E = clsx_m_default("tooltip", L && "show", "fade", `bs-tooltip-${c}`, e), { styles: R, attributes: W } = usePopper(h, D, {
    placement: c,
    ...a
  });
  (0, import_react.useEffect)(() => {
    let k, _;
    return B || y ? (T(true), k = setTimeout(() => {
      F(true);
    }, 4)) : (F(false), _ = setTimeout(() => {
      T(false);
    }, 300)), () => {
      clearTimeout(k), clearTimeout(_);
    };
  }, [B, y]);
  const M = (k) => {
    u == null || u(k), !k.defaultPrevented && x(true), f == null || f(k);
  }, S = (k) => {
    m == null || m(k), !k.defaultPrevented && x(false), g == null || g(k);
  }, j = (0, import_react.useCallback)(
    (k) => {
      k.target === h ? P(true) : P(false);
    },
    [h]
  );
  return (0, import_react.useEffect)(() => {
    if (!n)
      return document.addEventListener("mousedown", j), () => {
        document.removeEventListener("mousedown", j);
      };
  }, [j, n]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      s,
      {
        className: d,
        onMouseEnter: M,
        onMouseLeave: S,
        ref: v,
        ...i,
        children: t
      }
    ),
    A && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        r,
        {
          ref: $,
          className: E,
          style: R.popper,
          ...W.popper,
          role: "tooltip",
          ...b,
          children: (0, import_jsx_runtime.jsx)("div", { className: "tooltip-inner", children: o })
        }
      ),
      document.body
    )
  ] });
};
var Tt = import_react.default.forwardRef(
  ({
    around: e,
    between: t,
    bottom: n,
    center: s,
    children: r,
    className: a,
    evenly: c,
    end: o,
    middle: i,
    start: d,
    tag: u = "div",
    top: m,
    ...f
  }, g) => {
    const b = clsx_m_default(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      n && "align-self-end",
      s && "justify-content-center",
      c && "justifty-content-evenly",
      o && "justify-content-end",
      i && "align-self-center",
      d && "justify-content-start",
      m && "align-self-start",
      a
    );
    return (0, import_jsx_runtime.jsx)(u, { className: b, ...f, ref: g, children: r });
  }
);
var Bt = ({
  animate: e,
  className: t,
  icon: n,
  fab: s,
  fas: r,
  fal: a,
  far: c,
  flag: o,
  spin: i,
  fixed: d,
  flip: u,
  list: m,
  size: f,
  pull: g,
  pulse: b,
  color: h,
  border: v,
  rotate: D,
  inverse: $,
  stack: B,
  iconType: x,
  children: y,
  ...P
}) => {
  let L;
  o ? L = "flag" : s ? L = "fab" : r ? L = "fas" : c ? L = "far" : a ? L = "fal" : L = "fa";
  const F = clsx_m_default(
    x ? `fa-${x}` : L,
    e && `fa-${e}`,
    o ? `flag-${o}` : n && `fa-${n}`,
    f && `fa-${f}`,
    h && `text-${h}`,
    v && "fa-border",
    D && `fa-rotate-${D}`,
    g && `fa-pull-${g}`,
    i && !e && "fa-spin",
    m && "fa-li",
    d && "fa-fw",
    b && !e && "fa-pulse",
    $ && "fa-inverse",
    u && `fa-flip-${u}`,
    B && `fa-stack-${B}`,
    t
  );
  return (0, import_jsx_runtime.jsx)("i", { className: F, ...P, children: y });
};
var Dt = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    tag: n = "p",
    variant: s,
    color: r,
    blockquote: a,
    note: c,
    noteColor: o,
    listUnStyled: i,
    listInLine: d,
    ...u
  }, m) => {
    const f = clsx_m_default(
      s && s,
      a && "blockquote",
      c && "note",
      r && `text-${r}`,
      o && `note-${o}`,
      i && "list-unstyled",
      d && "list-inline",
      e
    );
    return a && (n = "blockquote"), (i || d) && (n = "ul"), (0, import_jsx_runtime.jsx)(n, { className: f, ref: m, ...u, children: t });
  }
);
var Mt = import_react.default.forwardRef(
  ({ className: e, color: t, uppercase: n, bold: s, children: r, ...a }, c) => {
    const o = clsx_m_default(
      "breadcrumb",
      s && "font-weight-bold",
      t && `text-${t}`,
      n && "text-uppercase",
      e
    );
    return (0, import_jsx_runtime.jsx)("nav", { "aria-label": "breadcrumb", children: (0, import_jsx_runtime.jsx)("ol", { className: o, ref: c, ...a, children: r }) });
  }
);
var $t = import_react.default.forwardRef(
  ({ className: e, active: t, current: n = "page", children: s, ...r }, a) => {
    const c = clsx_m_default("breadcrumb-item", t && "active", e);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ref: a, "aria-current": t && n, ...r, children: s });
  }
);
var Ee = (e) => {
  if (e !== false)
    return `navbar-expand-${e}`;
};
var Rt = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    light: n,
    dark: s,
    scrolling: r,
    fixed: a,
    sticky: c,
    scrollingNavbarOffset: o,
    color: i,
    transparent: d,
    expand: u,
    tag: m = "nav",
    bgColor: f,
    ...g
  }, b) => {
    const [h, v] = (0, import_react.useState)(false), D = clsx_m_default(
      {
        "navbar-light": n,
        "navbar-dark": s,
        "scrolling-navbar": r || o,
        "top-nav-collapse": h,
        [`text-${i}`]: i && d ? h : i
      },
      a && `fixed-${a}`,
      c && "sticky-top",
      "navbar",
      u && Ee(u),
      f && `bg-${f}`,
      e
    ), $ = (0, import_react.useCallback)(() => {
      o && window.pageYOffset > o ? v(true) : v(false);
    }, [o]);
    return (0, import_react.useEffect)(() => ((r || o) && window.addEventListener("scroll", $), () => {
      window.removeEventListener("scroll", $);
    }), [$, r, o]), (0, import_jsx_runtime.jsx)(m, { className: D, role: "navigation", ...g, ref: b, children: t });
  }
);
var Et = import_react.default.forwardRef(
  ({ children: e, className: t = "", disabled: n = false, active: s = false, tag: r = "a", ...a }, c) => {
    const o = clsx_m_default("nav-link", n ? "disabled" : s ? "active" : "", t);
    return (0, import_jsx_runtime.jsx)(r, { "data-test": "nav-link", className: o, style: { cursor: "pointer" }, ref: c, ...a, children: e });
  }
);
var Ct = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "a", ...s }, r) => {
    const a = clsx_m_default("navbar-brand", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ref: r, ...s, children: t });
  }
);
var It = import_react.default.forwardRef(
  ({ children: e, className: t, active: n, text: s, tag: r = "li", ...a }, c) => {
    const o = clsx_m_default("nav-item", n && "active", s && "navbar-text", t);
    return (0, import_jsx_runtime.jsx)(r, { ...a, className: o, ref: c, children: e });
  }
);
var xt = import_react.default.forwardRef(
  ({ children: e, className: t, right: n, fullWidth: s = true, left: r, tag: a = "ul", ...c }, o) => {
    const i = clsx_m_default("navbar-nav", s && "w-100", n && "ms-auto", r && "me-auto", t);
    return (0, import_jsx_runtime.jsx)(a, { className: i, ref: o, ...c, children: e });
  }
);
var Lt = import_react.default.forwardRef(
  ({ children: e, className: t, tag: n = "button", ...s }, r) => {
    const a = clsx_m_default("navbar-toggler", t);
    return (0, import_jsx_runtime.jsx)(n, { ...s, className: a, ref: r, children: e });
  }
);
var kt = import_react.default.forwardRef(
  ({ children: e, bgColor: t, color: n, className: s, ...r }, a) => {
    const c = clsx_m_default(t && `bg-${t}`, n && `text-${n}`, s);
    return (0, import_jsx_runtime.jsx)("footer", { className: c, ...r, ref: a, children: e });
  }
);
var Ot = import_react.default.forwardRef(
  ({ children: e, size: t, circle: n, center: s, end: r, start: a, className: c, ...o }, i) => {
    const d = clsx_m_default(
      "pagination",
      s && "justify-content-center",
      n && "pagination-circle",
      r && "justify-content-end",
      t && `pagination-${t}`,
      a && "justify-content-start",
      c
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: d, ...o, ref: i, children: e });
  }
);
var At = import_react.default.forwardRef(
  ({ children: e, className: t, tag: n = "a", ...s }, r) => {
    const a = clsx_m_default("page-link", t);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: e });
  }
);
var Pt = import_react.default.forwardRef(
  ({ children: e, className: t, active: n, disabled: s, ...r }, a) => {
    const c = clsx_m_default("page-item", n && "active", s && "disabled", t);
    return (0, import_jsx_runtime.jsx)("li", { className: c, ...r, ref: a, children: e });
  }
);
var St = ({
  className: e,
  classNameResponsive: t,
  responsive: n,
  align: s,
  borderColor: r,
  bordered: a,
  borderless: c,
  children: o,
  color: i,
  hover: d,
  small: u,
  striped: m,
  ...f
}) => {
  const g = clsx_m_default(
    "table",
    s && `align-${s}`,
    r && `border-${r}`,
    a && "table-bordered",
    c && "table-borderless",
    i && `table-${i}`,
    d && "table-hover",
    u && "table-sm",
    m && "table-striped",
    e
  ), b = (0, import_react.useMemo)(() => (0, import_jsx_runtime.jsx)("table", { className: g, ...f, children: o }), [o, g, f]);
  if (n) {
    const h = clsx_m_default(
      typeof n == "string" ? `table-responsive-${n}` : "table-responsive",
      t
    );
    return (0, import_jsx_runtime.jsx)("div", { className: h, children: b });
  } else
    return b;
};
var Ft = ({ className: e, children: t, dark: n, light: s, ...r }) => {
  const a = clsx_m_default(n && "table-dark", s && "table-light", e);
  return (0, import_jsx_runtime.jsx)("thead", { className: a, ...r, children: t });
};
var Wt = ({ className: e, children: t, ...n }) => {
  const s = clsx_m_default(e);
  return (0, import_jsx_runtime.jsx)("tbody", { className: s, ...n, children: t });
};
var Ce = import_react.default.forwardRef(
  ({
    animated: e,
    children: t,
    className: n,
    style: s,
    tag: r = "div",
    valuenow: a,
    valuemax: c,
    striped: o,
    bgColor: i,
    valuemin: d,
    width: u,
    ...m
  }, f) => {
    const g = clsx_m_default(
      "progress-bar",
      i && `bg-${i}`,
      o && "progress-bar-striped",
      e && "progress-bar-animated",
      n
    ), b = { width: `${u}%`, ...s };
    return (0, import_jsx_runtime.jsx)(
      r,
      {
        className: g,
        style: b,
        ref: f,
        role: "progressbar",
        ...m,
        "aria-valuenow": Number(u) ?? a,
        "aria-valuemin": Number(d),
        "aria-valuemax": Number(c),
        children: t
      }
    );
  }
);
var Xt = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", height: s, style: r, ...a }, c) => {
    const o = clsx_m_default("progress", e), i = { height: `${s}px`, ...r };
    return (0, import_jsx_runtime.jsx)(n, { className: o, ref: c, style: i, ...a, children: import_react.default.Children.map(t, (d) => {
      if (!import_react.default.isValidElement(d) || d.type !== Ce) {
        console.error("Progress component only allows ProgressBar as child");
        return;
      } else
        return d;
    }) });
  }
);
var Ie = (e) => {
  const [t, n] = (0, import_react.useState)(false), s = (0, import_react.useMemo)(() => new IntersectionObserver(([r]) => {
    n(r.isIntersecting);
  }), []);
  return (0, import_react.useEffect)(() => {
    if (e.current)
      return s.observe(e.current), () => s.disconnect();
  }, [s, e]), t;
};
var _t = import_react.default.forwardRef(
  ({
    className: e,
    size: t,
    contrast: n,
    value: s,
    defaultValue: r,
    id: a,
    labelClass: c,
    wrapperClass: o,
    wrapperStyle: i,
    wrapperTag: d = "div",
    label: u,
    onChange: m,
    children: f,
    labelRef: g,
    labelStyle: b,
    type: h,
    onBlur: v,
    readonly: D = false,
    ...$
  }, B) => {
    var Y, U;
    const [x, y] = (0, import_react.useState)(s || r), [P, L] = (0, import_react.useState)(0), [F, A] = (0, import_react.useState)(false), T = (0, import_react.useRef)(null), E = Ie(T);
    (0, import_react.useImperativeHandle)(B, () => T.current);
    const R = (0, import_react.useRef)(null), W = g || R, M = clsx_m_default("form-outline", n && "form-white", o), S = clsx_m_default(
      "form-control",
      F && "active",
      h === "date" && "active",
      t && `form-control-${t}`,
      e
    ), j = clsx_m_default("form-label", c);
    (0, import_react.useEffect)(() => {
      if (!T.current)
        return;
      const { value: X } = T.current;
      X != "" ? A(true) : A(false);
    }, [(Y = T.current) == null ? void 0 : Y.value]), (0, import_react.useEffect)(() => {
      s !== void 0 && (s != "" ? A(true) : A(false));
    }, [s]), (0, import_react.useEffect)(() => {
      r !== void 0 && (r != "" ? A(true) : A(false));
    }, [r]);
    const k = (0, import_react.useCallback)(() => {
      var X;
      (X = W.current) != null && X.clientWidth && L(W.current.clientWidth * 0.8 + 8);
    }, [W]);
    (0, import_react.useEffect)(() => {
      k();
    }, [(U = W.current) == null ? void 0 : U.clientWidth, k, E]);
    const _ = (X) => {
      y(X.target.value), m == null || m(X);
    }, V = (0, import_react.useCallback)(
      (X) => {
        T.current && (x !== void 0 && x != "" || s !== void 0 && s != "" || T.current.value != "" ? A(true) : A(false), v && v(X));
      },
      [x, s, v]
    );
    return (0, import_jsx_runtime.jsxs)(d, { className: M, style: i, children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: h,
          readOnly: D,
          className: S,
          onBlur: V,
          onChange: _,
          onFocus: k,
          value: s,
          defaultValue: r,
          id: a,
          ref: T,
          ...$
        }
      ),
      u && (0, import_jsx_runtime.jsx)("label", { className: j, style: b, htmlFor: a, ref: W, children: u }),
      (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: P } }),
        (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
      ] }),
      f
    ] });
  }
);
var ue = ({
  className: e,
  inputRef: t,
  labelClass: n,
  wrapperClass: s,
  labelStyle: r,
  wrapperTag: a = "div",
  wrapperStyle: c,
  label: o,
  inline: i,
  btn: d,
  id: u,
  btnColor: m,
  disableWrapper: f,
  toggleSwitch: g,
  ...b
}) => {
  let h = "form-check-input", v = "form-check-label";
  d && (h = "btn-check", m ? v = `btn btn-${m}` : v = "btn btn-primary");
  const D = clsx_m_default(
    o && !d && "form-check",
    i && !d && "form-check-inline",
    g && "form-switch",
    s
  ), $ = clsx_m_default(h, e), B = clsx_m_default(v, n), x = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)("input", { className: $, id: u, ref: t, ...b }),
    o && (0, import_jsx_runtime.jsx)("label", { className: B, style: r, htmlFor: u, children: o })
  ] });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: f ? x : (0, import_jsx_runtime.jsx)(a, { style: c, className: D, children: x }) });
};
var jt = ({ ...e }) => (0, import_jsx_runtime.jsx)(ue, { type: "checkbox", ...e });
var Yt = ({ ...e }) => (0, import_jsx_runtime.jsx)(ue, { type: "radio", ...e });
var xe = ({
  className: e,
  children: t,
  show: n = false,
  id: s,
  navbar: r,
  tag: a = "div",
  collapseRef: c,
  style: o,
  onShow: i,
  onHide: d,
  ...u
}) => {
  const [m, f] = (0, import_react.useState)(false), [g, b] = (0, import_react.useState)(void 0), [h, v] = (0, import_react.useState)(false), D = clsx_m_default(
    h ? "collapsing" : "collapse",
    !h && m && "show",
    r && "navbar-collapse",
    e
  ), $ = (0, import_react.useRef)(null), B = c ?? $, x = (0, import_react.useCallback)(() => {
    m && b(void 0);
  }, [m]);
  return (0, import_react.useEffect)(() => {
    var y;
    g === void 0 && m && b((y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight);
  }, [g, m, B]), (0, import_react.useEffect)(() => {
    m !== n && (n ? i == null || i() : d == null || d(), f(n)), m && v(true);
    const y = setTimeout(() => {
      v(false);
    }, 350);
    return () => {
      clearTimeout(y);
    };
  }, [n, m, i, d]), (0, import_react.useEffect)(() => {
    var y;
    b(m ? (y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight : 0);
  }, [m, B, t]), (0, import_react.useEffect)(() => (window.addEventListener("resize", x), () => {
    window.removeEventListener("resize", x);
  }), [x]), (0, import_jsx_runtime.jsx)(a, { style: { height: g, ...o }, id: s, className: D, ...u, ref: B, children: t });
};
var ye = (0, import_react.createContext)(null);
var Le = ({
  children: e,
  isOpen: t = false,
  options: n,
  animation: s = true,
  dropup: r,
  dropright: a,
  dropleft: c,
  onHide: o,
  onShow: i
}) => {
  const [d, u] = (0, import_react.useState)(t), [m, f] = (0, import_react.useState)(null), [g, b] = (0, import_react.useState)(null), [h, v] = (0, import_react.useState)(-1);
  return (0, import_jsx_runtime.jsx)(
    ye.Provider,
    {
      value: {
        animation: s,
        activeIndex: h,
        isOpenState: d,
        setReferenceElement: f,
        setPopperElement: b,
        setActiveIndex: v,
        popperElement: g,
        setIsOpenState: u,
        referenceElement: m,
        onHide: o,
        onShow: i,
        dropup: r,
        options: n,
        dropright: a,
        dropleft: c
      },
      children: e
    }
  );
};
var ke = (e) => e instanceof HTMLElement;
var Oe = (e) => e instanceof Node;
var ne = () => {
  const e = (0, import_react.useContext)(ye);
  if (!e)
    throw new Error("Missing context data");
  return e;
};
var Ae = () => {
  const { isOpenState: e, setIsOpenState: t, setActiveIndex: n, popperElement: s, referenceElement: r, onHide: a } = ne(), c = (0, import_react.useCallback)(
    (o) => {
      a == null || a(o), !(!e || !Oe(o.target) || s && s.contains(o.target) || r && r.contains(o.target) || o.defaultPrevented) && (t(false), setTimeout(() => n(-1), 300));
    },
    [e, t, n, s, r, a]
  );
  (0, import_react.useEffect)(() => (document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c)), [c]);
};
var Pe = ({
  className: e,
  tag: t = "div",
  group: n,
  children: s,
  dropup: r,
  dropright: a,
  dropleft: c,
  ...o
}) => {
  Ae();
  const i = clsx_m_default(
    n ? "btn-group" : "dropdown",
    r && "dropup",
    a && "dropend",
    c && "dropstart",
    e
  );
  return (0, import_jsx_runtime.jsx)(t, { className: i, ...o, children: s });
};
var Vt = ({ animation: e, onHide: t, onShow: n, ...s }) => (0, import_jsx_runtime.jsx)(Le, { animation: e, onHide: t, onShow: n, ...s, children: (0, import_jsx_runtime.jsx)(Pe, { ...s }) });
var Se = ({
  childTag: e,
  children: t,
  disabled: n,
  link: s,
  divider: r,
  header: a,
  href: c = "#"
}) => {
  const o = clsx_m_default("dropdown-item", n && "disabled");
  return s ? e ? (0, import_jsx_runtime.jsx)(e, { className: o, children: t }) : (0, import_jsx_runtime.jsx)("a", { href: c, className: o, children: t }) : r ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-divider", children: t }) : (0, import_jsx_runtime.jsx)("hr", { className: "dropdown-divider" }) : a ? e ? (0, import_jsx_runtime.jsx)(e, { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)("h6", { className: "dropdown-header", children: t }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t });
};
var qt = ({
  onClick: e,
  tag: t = "li",
  childTag: n,
  children: s,
  style: r,
  link: a,
  divider: c,
  header: o,
  disabled: i,
  href: d,
  preventCloseOnClick: u,
  ...m
}) => {
  const { setIsOpenState: f, onHide: g, setActiveIndex: b } = ne();
  return (0, import_jsx_runtime.jsx)(t, { style: r, onClick: (v) => {
    g == null || g(v), e == null || e(v), !(i || u || v.defaultPrevented) && (setTimeout(() => b(-1), 300), f(false));
  }, ...m, children: (0, import_jsx_runtime.jsx)(
    Se,
    {
      link: a,
      divider: c,
      header: o,
      disabled: i,
      href: d,
      childTag: n,
      children: s
    }
  ) });
};
var pe = (e, t, n) => n === "up" ? e <= 0 ? t[t.length - 1].props.divider === true || t[t.length - 1].props.disabled === true : t[e - 1].props.divider === true || t[e - 1].props.disabled === true : e === t.length - 1 ? t[0].props.divider === true || t[0].props.disabled === true : t[e + 1].props.divider === true || t[e + 1].props.disabled === true;
var Fe = (e) => {
  const { activeIndex: t, isOpenState: n, setIsOpenState: s, setActiveIndex: r, onHide: a } = ne(), c = (0, import_react.useCallback)(
    (o) => {
      const i = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
      if (!(!Array.isArray(e) || !i.includes(o.key))) {
        if (ke(document.activeElement) && document.activeElement.blur(), o.key === "ArrowUp") {
          o.preventDefault();
          const d = pe(t, e, "up");
          if (t === 1) {
            r(d ? e.length - 1 : 0);
            return;
          }
          if (t <= 0) {
            r(d ? e.length - 2 : e.length - 1);
            return;
          }
          r((u) => d ? u - 2 : u - 1);
        }
        if (o.key === "ArrowDown" || o.key === "Tab") {
          o.preventDefault();
          const d = pe(t, e, "down");
          if (t === e.length - 2) {
            r((u) => d ? 0 : u + 1);
            return;
          }
          if (t === e.length - 1) {
            r(d ? 1 : 0);
            return;
          }
          r((u) => d ? u + 2 : u + 1);
        }
        if (o.key === "Enter") {
          const d = document.querySelector('[data-active="true"]'), u = d == null ? void 0 : d.firstElementChild;
          if (u)
            return u.click();
          if (a == null || a(o), o.defaultPrevented)
            return;
          s(false), setTimeout(() => r(-1), 300);
        }
        if (o.key === "Escape") {
          if (a == null || a(o), o.defaultPrevented)
            return;
          s(false), setTimeout(() => r(-1), 300);
        }
      }
    },
    [e, s, r, t, a]
  );
  (0, import_react.useEffect)(() => (n && document.addEventListener("keydown", c), () => {
    n && document.removeEventListener("keydown", c);
  }), [n, c]), (0, import_react.useEffect)(() => {
    const o = document.querySelector('[data-active="true"]'), i = o == null ? void 0 : o.firstElementChild;
    return i == null || i.focus(), () => i == null ? void 0 : i.blur();
  }, [t]);
};
var We = () => {
  const { isOpenState: e } = ne(), [t, n] = (0, import_react.useState)(false), [s, r] = (0, import_react.useState)(false), [a, c] = (0, import_react.useState)(e);
  return (0, import_react.useEffect)(() => {
    let o;
    return e || (r(true), n(false), o = setTimeout(() => {
      r(false), c(false);
    }, 300)), e && (n(true), r(false), c(true), o = setTimeout(() => {
      n(false);
    }, 300)), () => clearTimeout(o);
  }, [e]), { show: a, isFadeIn: t, isFadeOut: s };
};
var Gt = ({
  className: e,
  tag: t = "ul",
  children: n,
  style: s,
  dark: r,
  responsive: a = "",
  appendToBody: c = false,
  alwaysOpen: o,
  ...i
}) => {
  const {
    activeIndex: d,
    setPopperElement: u,
    isOpenState: m,
    animation: f,
    referenceElement: g,
    popperElement: b,
    options: h,
    dropleft: v,
    dropup: D,
    dropright: $
  } = ne(), { show: B, isFadeIn: x, isFadeOut: y } = We();
  Fe(n);
  const P = () => {
    if ($)
      return "right-start";
    if (v)
      return "left-start";
    const T = b && getComputedStyle(b).getPropertyValue("--mdb-position").trim() === "end";
    return D ? T ? "top-end" : "top-start" : T ? "bottom-end" : "bottom-start";
  }, { styles: L } = usePopper(g, b, {
    placement: P(),
    modifiers: [flip_default],
    ...h
  }), F = clsx_m_default(
    "dropdown-menu",
    r && "dropdown-menu-dark",
    m && "show",
    f && "animation",
    x && "fade-in",
    y && "fade-out",
    a && `dropdown-menu-${a}`,
    e
  );
  if (!B && !o)
    return null;
  const A = (0, import_jsx_runtime.jsx)(
    t,
    {
      className: F,
      style: { position: "absolute", zIndex: 1e3, ...L.popper, ...s },
      ref: u,
      ...i,
      children: import_react.Children.map(
        n,
        (T, E) => (0, import_react.cloneElement)(T, {
          tabIndex: 1,
          "data-active": d === E && true,
          className: clsx_m_default(d === E ? "active" : "", T.props.className)
        })
      )
    }
  );
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: c ? (0, import_react_dom.createPortal)(A, document.body) : A });
};
var Kt = ({
  className: e,
  tag: t = ie,
  children: n,
  onClick: s,
  split: r,
  ...a
}) => {
  const { setIsOpenState: c, setReferenceElement: o, isOpenState: i, setActiveIndex: d, onHide: u, onShow: m } = ne(), f = clsx_m_default("dropdown-toggle", r && "dropdown-toggle-split", e);
  return (0, import_jsx_runtime.jsx)(
    t,
    {
      onClick: (b) => {
        s == null || s(b), i ? u == null || u(b) : m == null || m(b), !b.defaultPrevented && (c((h) => !h), setTimeout(() => d(-1), 300));
      },
      ref: o,
      className: f,
      "aria-expanded": !!i,
      ...a,
      children: n
    }
  );
};
var Ut = ({
  className: e,
  btnClassName: t,
  btnChildren: n,
  children: s,
  tag: r = ie,
  onShow: a,
  onHide: c,
  popperTag: o = "div",
  isOpen: i,
  placement: d = "bottom",
  dismiss: u,
  options: m,
  poperStyle: f,
  onClick: g,
  ...b
}) => {
  const [h, v] = (0, import_react.useState)(), [D, $] = (0, import_react.useState)(), { styles: B, attributes: x } = usePopper(h, D, { placement: d, ...m }), [y, P] = (0, import_react.useState)(i ?? false), [L, F] = (0, import_react.useState)(false), [A, T] = (0, import_react.useState)(false), E = clsx_m_default(
    "popover fade",
    L && y && "show",
    `bs-popover-${d === "left" ? "start" : d === "right" ? "end" : d}`,
    e
  ), R = (M) => {
    y && !u ? c == null || c() : y || a == null || a(), u ? (T(true), P(true)) : P(!y), g && g(M);
  };
  (0, import_react.useEffect)(() => {
    i || P(false);
  }, [i]);
  const W = (0, import_react.useCallback)(
    (M) => {
      A && D && D !== null && y && h && h !== null && (h.contains(M.target) || (P(false), c == null || c()));
    },
    [A, y, D, h, c]
  );
  return (0, import_react.useEffect)(() => {
    const M = setTimeout(() => {
      F(y);
    }, 150);
    return () => {
      clearTimeout(M);
    };
  }, [y]), (0, import_react.useEffect)(() => (y && document.addEventListener("mousedown", W), () => {
    document.removeEventListener("mousedown", W);
  }), [W, y]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(r, { onClick: R, className: t, ...b, ref: v, children: n }),
    (L || y) && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        o,
        {
          className: E,
          ref: $,
          style: { ...B.popper, ...f },
          ...x.popper,
          children: s
        }
      ),
      document.body
    )
  ] });
};
var Jt = ({
  className: e,
  children: t,
  tag: n = "div",
  ...s
}) => {
  const r = clsx_m_default("popover-body", e);
  return (0, import_jsx_runtime.jsx)(n, { className: r, ...s, children: t });
};
var Qt = ({
  className: e,
  children: t,
  tag: n = "h3",
  ...s
}) => {
  const r = clsx_m_default("popover-header", e);
  return (0, import_jsx_runtime.jsx)(n, { className: r, ...s, children: t });
};
var Zt = ({
  animationDirection: e,
  appendToBody: t,
  backdrop: n = true,
  children: s,
  className: r,
  closeOnEsc: a = true,
  setShow: c,
  leaveHiddenModal: o = true,
  modalRef: i,
  onHide: d,
  onHidePrevented: u,
  onShow: m,
  show: f,
  staticBackdrop: g,
  nonInvasive: b = false,
  tag: h = "div",
  ...v
}) => {
  const [D, $] = (0, import_react.useState)(f), [B, x] = (0, import_react.useState)(f), [y, P] = (0, import_react.useState)(f), [L, F] = (0, import_react.useState)(false), [A, T] = (0, import_react.useState)(0), [E, R] = (0, import_react.useState)([]), W = (0, import_react.useRef)(null), M = i || W, S = clsx_m_default(
    "modal",
    L && "modal-static",
    e,
    "fade",
    B && "show",
    D && b && "modal-non-invasive-show",
    r
  ), j = clsx_m_default("modal-backdrop", "fade", D && "show"), k = (0, import_react.useCallback)(() => {
    x((X) => (X && (d == null || d()), false)), setTimeout(() => {
      $(false), c == null || c(false);
    }, 150), setTimeout(() => {
      P(false);
    }, 350);
  }, [d, c]), _ = (0, import_react.useCallback)(
    (X) => {
      b || B && X.target === M.current && (g ? (F(true), u == null || u(), setTimeout(() => {
        F(false);
      }, 300)) : k());
    },
    [B, M, g, k, u, b]
  ), V = (0, import_react.useCallback)(
    (X) => {
      B && X.key === "Tab" && (X.preventDefault(), T(A + 1)), a && B && X.key === "Escape" && (g ? (F(true), u == null || u(), setTimeout(() => {
        F(false);
      }, 300)) : k());
    },
    [B, a, A, g, k, u]
  );
  (0, import_react.useEffect)(() => {
    var z;
    const X = (z = M.current) == null ? void 0 : z.querySelectorAll(
      "button, a, input, select, textarea, [tabindex]"
    ), Z = Array.from(X).filter((C) => C.tabIndex !== -1).sort((C, O) => C.tabIndex === O.tabIndex ? 0 : O.tabIndex === null ? -1 : C.tabIndex === null ? 1 : C.tabIndex - O.tabIndex);
    R(Z), T(Z.length - 1);
  }, [M]), (0, import_react.useEffect)(() => {
    E && E.length > 0 && (A === E.length ? (E[0].focus(), T(0)) : E[A].focus());
  }, [A, E]), (0, import_react.useEffect)(() => {
    const X = () => {
      const z = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - z);
    }, Z = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;
    if (y && Z && !b) {
      const z = X();
      document.body.classList.add("modal-open"), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${z}px`;
    } else
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    return () => {
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    };
  }, [y, b]), (0, import_react.useEffect)(() => {
    f ? (m == null || m(), P(true), setTimeout(() => {
      $(true);
    }, 0), setTimeout(() => {
      x(true), c == null || c(true);
    }, 150)) : k();
  }, [f, k, c, m]), (0, import_react.useEffect)(() => {
    const X = (Z) => {
      Z.target.closest(".modal-dialog") || window.addEventListener("mouseup", _, { once: true });
    };
    return window.addEventListener("mousedown", X), window.addEventListener("keydown", V), () => {
      window.removeEventListener("mousedown", X), window.removeEventListener("keydown", V);
    };
  }, [V, _]);
  const Y = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || f || y) && import_react_dom.default.createPortal(
    (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      (0, import_jsx_runtime.jsx)(
        h,
        {
          className: S,
          ref: M,
          style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
          ...v,
          children: s
        }
      ),
      import_react_dom.default.createPortal(
        n && y && !b && (0, import_jsx_runtime.jsx)("div", { className: j }),
        document.body
      )
    ] }),
    document.body
  ) }), U = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (o || f || y) && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      h,
      {
        className: S,
        ref: M,
        style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
        ...v,
        children: s
      }
    ),
    import_react_dom.default.createPortal(
      n && y && !b && (0, import_jsx_runtime.jsx)("div", { onClick: k, className: j }),
      document.body
    )
  ] }) });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t ? Y : U });
};
var zt = import_react.default.forwardRef(
  ({ className: e, centered: t, children: n, size: s, scrollable: r, tag: a = "div", ...c }, o) => {
    const i = clsx_m_default(
      "modal-dialog",
      r && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      s && `modal-${s}`,
      e
    );
    return (0, import_jsx_runtime.jsx)(a, { className: i, ...c, ref: o, children: n });
  }
);
var Ht = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = clsx_m_default("modal-content", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var es = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = clsx_m_default("modal-header", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var ts = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...s }, r) => {
    const a = clsx_m_default("modal-title", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var ss = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = clsx_m_default("modal-body", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var ns = import_react.default.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = clsx_m_default("modal-footer", e);
    return (0, import_jsx_runtime.jsx)(n, { className: a, ...s, ref: r, children: t });
  }
);
var de = import_react.default.createContext({
  activeElement: null,
  setTargets: null
});
var rs = ({
  container: e = typeof window !== void 0 ? window : null,
  className: t,
  children: n,
  offset: s = 10,
  ...r
}) => {
  const a = clsx_m_default("sticky-top", t), [c, o] = (0, import_react.useState)(null), [i, d] = (0, import_react.useState)([]), u = e instanceof Window, m = (0, import_react.useCallback)(() => {
    var D, $, B;
    if (!i.length)
      return;
    const f = u ? window.pageYOffset : (D = e == null ? void 0 : e.current) == null ? void 0 : D.scrollTop, g = Number(s), b = ($ = i[i.length - 1]) == null ? void 0 : $.current, h = (B = i[0]) == null ? void 0 : B.current;
    f + g < h.offsetTop && o(null), i.forEach((x, y) => {
      var A;
      const P = (A = i[y + 1]) == null ? void 0 : A.current, L = x.current;
      if (f > L.offsetTop - g && f < (P == null ? void 0 : P.offsetTop) - g) {
        o(L);
        return;
      }
    }), f > b.offsetTop - g && o(b);
  }, [s, i, u, e]);
  return (0, import_react.useEffect)(() => {
    const f = u ? e : e == null ? void 0 : e.current;
    return m(), f == null || f.addEventListener("scroll", m), () => {
      f == null || f.removeEventListener("scroll", m);
    };
  }, [m, e, u]), (0, import_jsx_runtime.jsx)("div", { className: a, ...r, children: (0, import_jsx_runtime.jsx)("ul", { className: "nav flex-column nav-pills menu-sidebar", children: (0, import_jsx_runtime.jsx)(de.Provider, { value: { activeElement: c, setTargets: d }, children: n }) }) });
};
var as = ({
  className: e,
  collapsible: t,
  targetRef: n,
  children: s,
  subsections: r,
  onClick: a,
  onActivate: c,
  ...o
}) => {
  var h;
  const { activeElement: i, setTargets: d } = (0, import_react.useContext)(de), u = () => r == null ? void 0 : r.some((v) => v.current.id === (i == null ? void 0 : i.id)), m = (i == null ? void 0 : i.id) === ((h = n.current) == null ? void 0 : h.id), f = m || u();
  m && (c == null || c(i == null ? void 0 : i.id));
  const g = clsx_m_default("nav-link", t && "collapsible-scrollspy", f && "active", e), b = (v) => {
    const D = n == null ? void 0 : n.current;
    D == null || D.scrollIntoView({ behavior: "smooth" }), a == null || a(v);
  };
  return (0, import_react.useEffect)(() => {
    d((v) => [...v, n]);
  }, [d, n]), (0, import_jsx_runtime.jsx)("li", { className: "nav-item", style: { cursor: "pointer" }, children: (0, import_jsx_runtime.jsx)("a", { className: g, onClick: b, ...o, children: s }) });
};
var os = ({
  collapsible: e,
  className: t,
  children: n,
  style: s,
  ...r
}) => {
  const [a, c] = (0, import_react.useState)("0px"), { activeElement: o } = (0, import_react.useContext)(de), i = clsx_m_default("nav flex-column", t), d = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const m = () => e == null ? void 0 : e.some((g) => g.current.id === (o == null ? void 0 : o.id)), f = d.current;
    m() ? c(`${f == null ? void 0 : f.scrollHeight}px`) : c("0px");
  }, [o, e]);
  const u = {
    overflow: "hidden",
    height: a,
    transition: "height .5s ease",
    flexWrap: "nowrap",
    ...s
  };
  return (0, import_jsx_runtime.jsx)("ul", { className: i, ref: d, style: e ? u : s, ...r, children: n });
};
var cs = ({ ...e }) => (0, import_jsx_runtime.jsx)(ue, { type: "checkbox", toggleSwitch: true, ...e });
var Xe = ({ value: e, min: t = "0", max: n = "100", showThumb: s }) => {
  const r = Number(e), [a, c] = (0, import_react.useState)(
    (r || 0 - Number(t)) * 100 / (Number(n) - Number(t))
  ), o = clsx_m_default("thumb", s && "thumb-active");
  return (0, import_react.useEffect)(() => {
    c((Number(e) - Number(t)) * 100 / (Number(n) - Number(t)));
  }, [e, n, t]), (0, import_jsx_runtime.jsx)("span", { className: o, style: { left: `calc(${a}% + (${8 - a * 0.15}px))` }, children: (0, import_jsx_runtime.jsx)("span", { className: "thumb-value", children: e }) });
};
var ls = ({
  className: e,
  defaultValue: t = 0,
  disableTooltip: n,
  labelId: s,
  max: r,
  min: a,
  onMouseDown: c,
  onMouseUp: o,
  onTouchStart: i,
  onTouchEnd: d,
  onChange: u,
  labelClass: m,
  value: f,
  label: g,
  id: b,
  inputRef: h,
  ...v
}) => {
  const [D, $] = (0, import_react.useState)(t), [B, x] = (0, import_react.useState)(false), y = clsx_m_default("form-range", e), P = clsx_m_default("form-label", m);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    g && (0, import_jsx_runtime.jsx)("label", { className: P, id: s, htmlFor: b, children: g }),
    (0, import_jsx_runtime.jsxs)("div", { className: "range", children: [
      (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: "range",
          onMouseDown: (R) => {
            x(true), c && c(R);
          },
          onMouseUp: (R) => {
            x(false), o && o(R);
          },
          onTouchStart: (R) => {
            x(true), i && i(R);
          },
          onTouchEnd: (R) => {
            x(false), d && d(R);
          },
          onChange: (R) => {
            $(R.target.value), u && u(R);
          },
          className: y,
          value: f || D,
          id: b,
          min: a,
          max: r,
          ref: h,
          ...v
        }
      ),
      !n && (0, import_jsx_runtime.jsx)(Xe, { value: f || D, showThumb: B, min: a, max: r })
    ] })
  ] });
};
var is = ({ className: e, labelClass: t, labelStyle: n, inputRef: s, size: r, label: a, id: c, ...o }) => {
  const i = clsx_m_default("form-control", `form-control-${r}`, e), d = clsx_m_default("form-label", t);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    a && (0, import_jsx_runtime.jsx)("label", { className: d, style: n, htmlFor: c, children: a }),
    (0, import_jsx_runtime.jsx)("input", { className: i, type: "file", id: c, ref: s, ...o })
  ] });
};
var us = import_react.default.forwardRef(
  ({
    className: e,
    children: t,
    noBorder: n,
    textBefore: s,
    textAfter: r,
    noWrap: a,
    tag: c = "div",
    textTag: o = "span",
    textClass: i,
    size: d,
    textProps: u,
    ...m
  }, f) => {
    const g = clsx_m_default("input-group", a && "flex-nowrap", d && `input-group-${d}`, e), b = clsx_m_default("input-group-text", n && "border-0", i), h = (v) => (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: v && Array.isArray(v) ? v.map((D, $) => (0, import_jsx_runtime.jsx)(o, { className: b, ...u, children: D }, $)) : (0, import_jsx_runtime.jsx)(o, { className: b, ...u, children: v }) });
    return (0, import_jsx_runtime.jsxs)(c, { className: g, ref: f, ...m, children: [
      s && h(s),
      t,
      r && h(r)
    ] });
  }
);
var ds = import_react.default.forwardRef(
  ({ className: e, children: t, isValidated: n, onReset: s, onSubmit: r, noValidate: a = true, ...c }, o) => {
    const [i, d] = (0, import_react.useState)(n), u = clsx_m_default("needs-validation", i && "was-validated", e);
    return (0, import_jsx_runtime.jsx)(
      "form",
      {
        className: u,
        onSubmit: (g) => {
          g.preventDefault(), d(true), r && r(g);
        },
        onReset: (g) => {
          g.preventDefault(), d(false), s && s(g);
        },
        ref: o,
        noValidate: a,
        ...c,
        children: t
      }
    );
  }
);
var fs = import_react.default.forwardRef(
  ({ className: e, fill: t, pills: n, justify: s, children: r, ...a }, c) => {
    const o = clsx_m_default(
      "nav",
      n ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      s && "nav-justified",
      e
    );
    return (0, import_jsx_runtime.jsx)("ul", { className: o, ref: c, ...a, children: r });
  }
);
var ms = import_react.default.forwardRef(
  ({ className: e, children: t, style: n, tag: s = "li", ...r }, a) => {
    const c = clsx_m_default("nav-item", e);
    return (0, import_jsx_runtime.jsx)(s, { className: c, style: { cursor: "pointer", ...n }, role: "presentation", ref: a, ...r, children: t });
  }
);
var ps = import_react.default.forwardRef(
  ({ className: e, color: t, active: n, onShow: s, onHide: r, children: a, ...c }, o) => {
    const i = clsx_m_default("nav-link", n && "active", t && `bg-${t}`, e);
    return (0, import_react.useEffect)(() => {
      n ? s == null || s() : r == null || r();
    }, [n]), (0, import_jsx_runtime.jsx)("a", { className: i, ref: o, ...c, children: a });
  }
);
var gs = import_react.default.forwardRef(
  ({ className: e, tag: t = "div", children: n, ...s }, r) => {
    const a = clsx_m_default("tab-content", e);
    return (0, import_jsx_runtime.jsx)(t, { className: a, ref: r, ...s, children: n });
  }
);
var bs = import_react.default.forwardRef(
  ({ className: e, tag: t = "div", show: n, children: s, ...r }, a) => {
    const [c, o] = (0, import_react.useState)(false), i = clsx_m_default("tab-pane", "fade", c && "show", n && "active", e);
    return (0, import_react.useEffect)(() => {
      let d;
      return n ? d = setTimeout(() => {
        o(true);
      }, 100) : o(false), () => {
        clearTimeout(d);
      };
    }, [n]), (0, import_jsx_runtime.jsx)(t, { className: i, role: "tabpanel", ref: a, ...r, children: s });
  }
);
var fe = (0, import_react.createContext)({
  active: 0
});
var _e = ({ imagesCount: e, to: t }) => {
  const { active: n } = (0, import_react.useContext)(fe);
  return (0, import_jsx_runtime.jsx)("ol", { className: "carousel-indicators", children: Array.from(Array(e)).map((s, r) => (0, import_jsx_runtime.jsx)("li", { "data-mdb-target": r, className: clsx_m_default(n === r && "active"), onClick: () => t(r) }, r)) });
};
var je = ({ move: e }) => (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-prev", onClick: () => e("prev"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-prev-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Previous" })
  ] }),
  (0, import_jsx_runtime.jsxs)("a", { role: "button", className: "carousel-control-next", onClick: () => e("next"), children: [
    (0, import_jsx_runtime.jsx)("span", { className: "carousel-control-next-icon" }),
    (0, import_jsx_runtime.jsx)("span", { className: "visually-hidden", children: "Next" })
  ] })
] });
var Ye = (e) => {
  const t = getComputedStyle(e), n = getComputedStyle(e == null ? void 0 : e.parentNode);
  return t.display !== "none" && n.display !== "none" && t.visibility !== "hidden";
};
var Ve = (e) => Array.from(e == null ? void 0 : e.querySelectorAll(".carousel-item"));
var qe = (e) => e.offsetHeight;
var Ge = (e, t, n = true) => {
  if (!n) {
    ge(e);
    return;
  }
  const s = Ke(t);
  t.addEventListener("transitionend", () => ge(e), { once: true }), Je(t, s);
};
var ge = (e) => {
  typeof e == "function" && e();
};
var Ke = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), r = Number.parseFloat(n);
  return !s && !r ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * 1e3);
};
var Ue = (e) => {
  e.dispatchEvent(new Event("transitionend"));
};
var Je = (e, t) => {
  let n = false;
  const r = t + 5;
  function a() {
    n = true, e.removeEventListener("transitionend", a);
  }
  e.addEventListener("transitionend", a), setTimeout(() => {
    n || Ue(e);
  }, r);
};
var vs = ({
  fade: e = false,
  className: t,
  carouselInnerClassName: n,
  dark: s,
  children: r,
  interval: a = 5e3,
  keyboard: c = false,
  touch: o = true,
  showControls: i,
  showIndicators: d,
  onSlide: u,
  ...m
}) => {
  const f = (0, import_react.useRef)([]), g = (0, import_react.useRef)(null), b = (0, import_react.useRef)(0), h = (0, import_react.useRef)(false), [v, D] = (0, import_react.useState)(0), [$, B] = (0, import_react.useState)(0), [x, y] = (0, import_react.useState)({ initialX: 0, initialY: 0 }), [P, L] = (0, import_react.useState)(false), F = (0, import_react.useRef)(null), A = clsx_m_default("carousel", "slide", e && "carousel-fade", s && "carousel-dark", t), T = clsx_m_default("carousel-inner", n), E = (0, import_react.useCallback)(
    (C, O) => {
      if (O !== void 0)
        b.current = O, D(O);
      else {
        const J = v === $ - 1 ? 0 : v + 1, ee = v === 0 ? $ - 1 : v - 1;
        b.current = C === "next" ? J : ee, D(C === "next" ? J : ee);
      }
    },
    [v, $]
  ), R = (0, import_react.useCallback)(() => {
    g.current && (clearInterval(g.current), g.current = null);
  }, []), W = (0, import_react.useCallback)(
    (C, O, J) => {
      var me;
      if (!f.current || f.current.length < 2)
        return;
      L(true);
      const H = f.current[v], te = Boolean(g.current), ae = C === "next", oe = ae ? "carousel-item-start" : "carousel-item-end", ce = ae ? "carousel-item-next" : "carousel-item-prev";
      if (O.classList.contains("active")) {
        h.current = false;
        return;
      }
      E(C, J), !(!H || !O) && (h.current = true, te && R(), (me = F.current) != null && me.classList.contains("slide") ? (O.classList.add(ce), qe(O), H.classList.add(oe), O.classList.add(oe), Ge(() => {
        L(false), O.classList.remove(oe, ce), O.classList.add("active"), H.classList.remove("active", ce, oe), h.current = false;
      }, H, true)) : (H.classList.remove("active"), O.classList.add("active"), h.current = false));
    },
    [F, v, E, R]
  ), M = (C) => {
    h.current || (h.current = true, setTimeout(() => {
      h.current = false;
    }, C));
  }, S = (0, import_react.useCallback)(
    (C) => {
      const O = C === "prev", H = (b.current + (O ? -1 : 1)) % $, te = f.current;
      return H === -1 ? te[$ - 1] : te[H];
    },
    [$]
  ), j = (C) => {
    const O = b.current, J = C > O ? "next" : "prev", ee = f.current;
    return { direction: J, nextElement: ee[C] };
  }, k = (C) => {
    if (h.current || (M(700), C > $ - 1 || C < 0))
      return;
    const { direction: O, nextElement: J } = j(C);
    W(O, J, C);
  }, _ = (0, import_react.useCallback)(
    (C) => {
      if (h.current)
        return;
      M(600);
      const O = S(C);
      W(C, O);
    },
    [S, W]
  ), V = (0, import_react.useCallback)(() => {
    const { visibilityState: C, hidden: O } = document;
    if (C)
      return O || !Ye(F.current) ? void 0 : _("next");
    _("next");
  }, [F, _]), Y = (0, import_react.useCallback)(() => {
    var O, J;
    const C = (J = (O = r == null ? void 0 : r[v]) == null ? void 0 : O.props) == null ? void 0 : J.interval;
    g.current && (clearInterval(g.current), g.current = null), g.current = setInterval(V, C || a);
  }, [V, a, r, v]), U = (C) => {
    o && y({ initialX: C.touches[0].clientX, initialY: C.touches[0].clientY });
  }, X = (C) => {
    h.current = true;
    const { initialX: O, initialY: J } = x;
    if (!O || !J)
      return;
    const ee = C.touches[0].clientX, H = C.touches[0].clientY, te = O - ee, ae = J - H;
    Math.abs(te) > Math.abs(ae) && (te > 0 ? _("prev") : _("next")), y({ initialX: 0, initialY: 0 });
  }, Z = () => {
    h.current = false;
  }, z = (0, import_react.useCallback)(
    (C) => {
      switch (C.key) {
        case "ArrowLeft":
          C.preventDefault(), _("prev");
          break;
        case "ArrowRight":
          C.preventDefault(), _("next");
          break;
      }
    },
    [_]
  );
  return (0, import_react.useEffect)(() => {
    if (c)
      return window.addEventListener("keydown", z), () => {
        window.removeEventListener("keydown", z);
      };
  }, [z, c]), (0, import_react.useEffect)(() => {
    const C = F.current, O = Ve(C);
    f.current = O, B(O.length);
  }, [F]), (0, import_react.useEffect)(() => {
    P && (u == null || u());
  }, [P, u]), (0, import_react.useEffect)(() => (Y(), () => {
    R();
  }), [Y, R]), (0, import_jsx_runtime.jsx)(
    "div",
    {
      onTouchStart: U,
      onTouchMove: X,
      onTouchEnd: Z,
      onMouseEnter: R,
      onMouseLeave: Y,
      className: A,
      ref: F,
      ...m,
      children: (0, import_jsx_runtime.jsx)("div", { className: T, children: (0, import_jsx_runtime.jsxs)(fe.Provider, { value: { active: v }, children: [
        d && (0, import_jsx_runtime.jsx)(_e, { to: k, imagesCount: $ }),
        r,
        i && (0, import_jsx_runtime.jsx)(je, { move: _ })
      ] }) })
    }
  );
};
var hs = ({
  className: e,
  captionClassName: t,
  children: n,
  src: s,
  alt: r,
  itemId: a,
  video: c,
  ...o
}) => {
  const { active: i } = (0, import_react.useContext)(fe), d = (0, import_react.useRef)(true), u = (0, import_react.useRef)(null), m = clsx_m_default("carousel-caption d-none d-md-block", t);
  return (0, import_react.useEffect)(() => {
    if (d.current && i === a - 1) {
      const f = u.current;
      f == null || f.classList.add("active");
    }
    d.current = false;
  }, [i, a]), (0, import_jsx_runtime.jsxs)("div", { className: "carousel-item", ref: u, children: [
    c ? (0, import_jsx_runtime.jsx)("video", { className: e, autoPlay: true, loop: true, muted: true, ...o, children: (0, import_jsx_runtime.jsx)("source", { src: s, type: "video/mp4" }) }) : (0, import_jsx_runtime.jsx)("img", { className: e, src: s, alt: r, ...o }),
    (0, import_jsx_runtime.jsx)("div", { className: m, children: n })
  ] });
};
var Ne = import_react.default.createContext({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: false,
  initialActive: 0
});
var ys = import_react.default.forwardRef(
  ({ alwaysOpen: e, borderless: t, className: n, flush: s, initialActive: r = 0, tag: a = "div", children: c, onChange: o, ...i }, d) => {
    const u = clsx_m_default("accordion", s && "accordion-flush", t && "accordion-borderless", n), [m, f] = (0, import_react.useState)(r);
    return (0, import_react.useEffect)(() => {
      m && o && o(m);
    }, [o, m]), (0, import_jsx_runtime.jsx)(a, { className: u, ref: d, ...i, children: (0, import_jsx_runtime.jsx)(Ne.Provider, { value: { activeItem: m, setActiveItem: f, alwaysOpen: e, initialActive: r }, children: c }) });
  }
);
var Ns = import_react.default.forwardRef(
  ({
    className: e,
    bodyClassName: t,
    bodyStyle: n,
    headerClassName: s,
    collapseId: r,
    headerTitle: a,
    headerStyle: c,
    btnClassName: o,
    tag: i = "div",
    children: d,
    ...u
  }, m) => {
    const { activeItem: f, setActiveItem: g, alwaysOpen: b, initialActive: h } = (0, import_react.useContext)(Ne), [v, D] = (0, import_react.useState)(h), $ = clsx_m_default("accordion-item", e), B = clsx_m_default("accordion-header", s), x = clsx_m_default("accordion-body", t), y = clsx_m_default(
      "accordion-button",
      b ? r !== v && "collapsed" : r !== f && "collapsed",
      o
    ), P = (L) => {
      b ? D(L !== v ? L : 0) : g(L !== f ? L : 0);
    };
    return (0, import_jsx_runtime.jsxs)(i, { className: $, ref: m, ...u, children: [
      (0, import_jsx_runtime.jsx)("h2", { className: B, style: c, children: (0, import_jsx_runtime.jsx)("button", { onClick: () => P(r), className: y, type: "button", children: a }) }),
      (0, import_jsx_runtime.jsx)(
        xe,
        {
          id: r.toString(),
          show: b ? v === r : f === r,
          children: (0, import_jsx_runtime.jsx)("div", { className: x, style: n, children: d })
        }
      )
    ] });
  }
);
var ws = ({
  className: e,
  size: t,
  contrast: n,
  value: s,
  defaultValue: r,
  id: a,
  labelClass: c,
  wrapperClass: o,
  wrapperStyle: i,
  wrapperTag: d = "div",
  label: u,
  onChange: m,
  children: f,
  labelRef: g,
  labelStyle: b,
  inputRef: h,
  onBlur: v,
  readonly: D = false,
  ...$
}) => {
  var V;
  const B = (0, import_react.useRef)(null), x = (0, import_react.useRef)(null), y = g || B, P = h || x, [L, F] = (0, import_react.useState)(s || r), [A, T] = (0, import_react.useState)(0), [E, R] = (0, import_react.useState)(
    s !== void 0 && s.length > 0 || r !== void 0 && r.length > 0
  ), W = clsx_m_default("form-outline", n && "form-white", o), M = clsx_m_default("form-control", E && "active", t && `form-control-${t}`, e), S = clsx_m_default("form-label", c);
  (0, import_react.useEffect)(() => {
    var Y;
    y.current && ((Y = y.current) == null ? void 0 : Y.clientWidth) !== 0 && T(y.current.clientWidth * 0.8 + 8);
  }, [y, (V = y.current) == null ? void 0 : V.clientWidth]);
  const j = () => {
    y.current && T(y.current.clientWidth * 0.8 + 8);
  };
  (0, import_react.useEffect)(() => {
    s !== void 0 && (s.length > 0 ? R(true) : R(false));
  }, [s]), (0, import_react.useEffect)(() => {
    r !== void 0 && (r.length > 0 ? R(true) : R(false));
  }, [r]);
  const k = (Y) => {
    F(Y.currentTarget.value), m && m(Y);
  }, _ = (0, import_react.useCallback)(
    (Y) => {
      L !== void 0 && L.length > 0 || s !== void 0 && s.length > 0 ? R(true) : R(false), v && v(Y);
    },
    [L, s, v]
  );
  return (0, import_jsx_runtime.jsxs)(d, { className: W, style: { ...i }, children: [
    (0, import_jsx_runtime.jsx)(
      "textarea",
      {
        readOnly: D,
        className: M,
        onBlur: _,
        onChange: k,
        onFocus: j,
        defaultValue: r,
        value: s,
        id: a,
        ref: P,
        ...$
      }
    ),
    u && (0, import_jsx_runtime.jsx)("label", { className: S, style: b, htmlFor: a, ref: y, children: u }),
    (0, import_jsx_runtime.jsxs)("div", { className: "form-notch", children: [
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-leading" }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-middle", style: { width: A } }),
      (0, import_jsx_runtime.jsx)("div", { className: "form-notch-trailing" })
    ] }),
    f
  ] });
};
var Ts = ({
  children: e,
  invalid: t,
  feedback: n = "Looks good!",
  tooltip: s,
  tag: r = "div",
  ...a
}) => {
  const [c, o] = (0, import_react.useState)(null), i = (0, import_react.useRef)(null), d = clsx_m_default(
    t ? `invalid-${s ? "tooltip" : "feedback"}` : `valid-${s ? "tooltip" : "feedback"}`
  );
  return (0, import_react.useEffect)(() => {
    var m, f;
    const u = (f = (m = i.current) == null ? void 0 : m.querySelector("input, textarea")) == null ? void 0 : f.parentElement;
    u && o(u);
  }, []), (0, import_jsx_runtime.jsxs)(r, { ref: i, ...a, children: [
    c && (0, import_react_dom.createPortal)((0, import_jsx_runtime.jsx)("div", { className: d, children: n }), c),
    e
  ] });
};
export {
  ys as MDBAccordion,
  Ns as MDBAccordionItem,
  at as MDBBadge,
  Mt as MDBBreadcrumb,
  $t as MDBBreadcrumbItem,
  ie as MDBBtn,
  ot as MDBBtnGroup,
  lt as MDBCard,
  mt as MDBCardBody,
  pt as MDBCardFooter,
  ht as MDBCardGroup,
  it as MDBCardHeader,
  gt as MDBCardImage,
  vt as MDBCardLink,
  bt as MDBCardOverlay,
  ut as MDBCardSubTitle,
  ft as MDBCardText,
  dt as MDBCardTitle,
  vs as MDBCarousel,
  hs as MDBCarouselItem,
  jt as MDBCheckbox,
  rt as MDBCol,
  xe as MDBCollapse,
  nt as MDBContainer,
  Vt as MDBDropdown,
  qt as MDBDropdownItem,
  Gt as MDBDropdownMenu,
  Kt as MDBDropdownToggle,
  is as MDBFile,
  kt as MDBFooter,
  Bt as MDBIcon,
  _t as MDBInput,
  us as MDBInputGroup,
  yt as MDBListGroup,
  Nt as MDBListGroupItem,
  Zt as MDBModal,
  ss as MDBModalBody,
  Ht as MDBModalContent,
  zt as MDBModalDialog,
  ns as MDBModalFooter,
  es as MDBModalHeader,
  ts as MDBModalTitle,
  Rt as MDBNavbar,
  Ct as MDBNavbarBrand,
  It as MDBNavbarItem,
  Et as MDBNavbarLink,
  xt as MDBNavbarNav,
  Lt as MDBNavbarToggler,
  Ot as MDBPagination,
  Pt as MDBPaginationItem,
  At as MDBPaginationLink,
  Ut as MDBPopover,
  Jt as MDBPopoverBody,
  Qt as MDBPopoverHeader,
  Xt as MDBProgress,
  Ce as MDBProgressBar,
  Yt as MDBRadio,
  ls as MDBRange,
  Re as MDBRipple,
  Tt as MDBRow,
  rs as MDBScrollspy,
  as as MDBScrollspyLink,
  os as MDBScrollspySubList,
  ct as MDBSpinner,
  cs as MDBSwitch,
  St as MDBTable,
  Wt as MDBTableBody,
  Ft as MDBTableHead,
  fs as MDBTabs,
  gs as MDBTabsContent,
  ms as MDBTabsItem,
  ps as MDBTabsLink,
  bs as MDBTabsPane,
  ws as MDBTextArea,
  wt as MDBTooltip,
  Dt as MDBTypography,
  ds as MDBValidation,
  Ts as MDBValidationItem
};
//# sourceMappingURL=mdb-react-ui-kit.js.map
