import {
  Row_default
} from "./chunk-MXLHW2RL.js";
import {
  FloatingLabel_default,
  FormCheckInput_default,
  FormCheck_default,
  FormControl_default,
  FormFloating_default,
  FormGroup_default,
  FormLabel_default,
  FormSelect_default,
  FormText_default,
  Form_default,
  forEach,
  map
} from "./chunk-6RSEOFKN.js";
import {
  Col_default,
  useCol
} from "./chunk-U7DNEBCT.js";
import {
  require_warning
} from "./chunk-R2WMPALF.js";
import {
  arrow_default,
  computeStyles_default,
  eventListeners_default,
  flip_default,
  hide_default,
  init_arrow,
  init_computeStyles,
  init_createPopper,
  init_enums,
  init_eventListeners,
  init_flip,
  init_hide,
  init_offset,
  init_popperOffsets,
  init_preventOverflow,
  offset_default,
  popperGenerator,
  popperOffsets_default,
  preventOverflow_default
} from "./chunk-2FVWMBDX.js";
import {
  Container_default
} from "./chunk-3Q6IRK54.js";
import {
  AbstractModalHeader_default,
  BootstrapModalManager_default,
  CloseButton_default,
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  Fade_default,
  ModalBody_default,
  ModalContext_default,
  ModalDialog_default,
  ModalFooter_default,
  ModalHeader_default,
  ModalTitle_default,
  Modal_default,
  Modal_default2,
  NoopTransition_default,
  TransitionWrapper_default,
  _objectWithoutPropertiesLoose,
  addEventListener_default,
  contains,
  css_default,
  dataAttr,
  dataProp,
  divWithClassName_default,
  getSharedManager,
  hasClass,
  isEscKey,
  listen_default,
  ownerDocument,
  qsa,
  renderTransition,
  safeFindDOMNode,
  transitionEndListener,
  triggerBrowserReflow,
  useCallbackRef,
  useCommittedRef_default,
  useEventCallback,
  useIsomorphicEffect_default,
  useMergedRefs_default,
  useMounted,
  usePrevious,
  useWaitForDOMRef,
  useWillUnmount,
  useWindow
} from "./chunk-DNFDC725.js";
import {
  createWithBsPrefix,
  require_prop_types
} from "./chunk-EYRPVJRA.js";
import {
  require_react_dom
} from "./chunk-OTY6O57J.js";
import "./chunk-KEE3L4NC.js";
import {
  Button_default,
  Button_default2,
  useButtonProps
} from "./chunk-HBPHSUFT.js";
import {
  DEFAULT_BREAKPOINTS,
  DEFAULT_MIN_BREAKPOINT,
  ThemeProvider_default,
  require_classnames,
  useBootstrapBreakpoints,
  useBootstrapMinBreakpoint,
  useBootstrapPrefix,
  useIsRTL
} from "./chunk-PIYJDONE.js";
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

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant5 = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant5;
  }
});

// node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var require_createChainableTypeChecker = __commonJS({
  "node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createChainableTypeChecker;
    function createChainableTypeChecker(validate) {
      function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;
        if (props[propName] == null) {
          if (isRequired) {
            return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
          }
          return null;
        }
        for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
          args[_key - 6] = arguments[_key];
        }
        return validate.apply(void 0, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    module.exports = exports["default"];
  }
});

// node_modules/prop-types-extra/lib/all.js
var require_all = __commonJS({
  "node_modules/prop-types-extra/lib/all.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = all2;
    var _createChainableTypeChecker = require_createChainableTypeChecker();
    var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function all2() {
      for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }
      function allPropTypes() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var error = null;
        validators.forEach(function(validator) {
          if (error != null) {
            return;
          }
          var result = validator.apply(void 0, args);
          if (result != null) {
            error = result;
          }
        });
        return error;
      }
      return (0, _createChainableTypeChecker2.default)(allPropTypes);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-bootstrap/esm/Accordion.js
var import_classnames7 = __toESM(require_classnames());
var React10 = __toESM(require_react());
var import_react8 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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

// node_modules/uncontrollable/lib/esm/hook.js
var import_react = __toESM(require_react());

// node_modules/uncontrollable/lib/esm/utils.js
var import_invariant = __toESM(require_browser());
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}

// node_modules/uncontrollable/lib/esm/hook.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0, import_react.useRef)(propValue !== void 0);
  var _useState = (0, import_react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp2 = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react.useCallback)(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler)
      handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function(result, fieldName) {
    var _extends2;
    var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_react2 = __toESM(require_react());

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_invariant2 = __toESM(require_browser());

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_classnames3 = __toESM(require_classnames());
var React6 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_classnames2 = __toESM(require_classnames());
var React4 = __toESM(require_react());
var import_react4 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Collapse.js
var import_classnames = __toESM(require_classnames());
var import_react3 = __toESM(require_react());

// node_modules/react-bootstrap/esm/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.filter((f) => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }
    if (acc === null)
      return f;
    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
var createChainedFunction_default = createChainedFunction;

// node_modules/react-bootstrap/esm/Collapse.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css_default(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css_default(elem, margins[1]), 10);
}
var collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};
var Collapse = import_react3.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = "height",
  in: inProp = false,
  timeout = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  const computedDimension = typeof dimension === "function" ? dimension() : dimension;
  const handleEnter = (0, import_react3.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = "0";
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0, import_react3.useMemo)(() => createChainedFunction_default((elem) => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0, import_react3.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  const handleExit = (0, import_react3.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0, import_react3.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return (0, import_jsx_runtime.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    in: inProp,
    timeout,
    mountOnEnter,
    unmountOnExit,
    appear,
    children: (state, innerProps) => import_react3.default.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
    })
  });
});
var Collapse_default = Collapse;

// node_modules/react-bootstrap/esm/AccordionContext.js
var React3 = __toESM(require_react());
function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
var context = React3.createContext({});
context.displayName = "AccordionContext";
var AccordionContext_default = context;

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var AccordionCollapse = React4.forwardRef(({
  as: Component2 = "div",
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0, import_react4.useContext)(AccordionContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-collapse");
  return (0, import_jsx_runtime2.jsx)(Collapse_default, {
    ref,
    in: isAccordionItemSelected(activeEventKey, eventKey),
    ...props,
    className: (0, import_classnames2.default)(className, bsPrefix),
    children: (0, import_jsx_runtime2.jsx)(Component2, {
      children: React4.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = "AccordionCollapse";
var AccordionCollapse_default = AccordionCollapse;

// node_modules/react-bootstrap/esm/AccordionItemContext.js
var React5 = __toESM(require_react());
var context2 = React5.createContext({
  eventKey: ""
});
context2.displayName = "AccordionItemContext";
var AccordionItemContext_default = context2;

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var AccordionBody = React6.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-body");
  const {
    eventKey
  } = (0, import_react5.useContext)(AccordionItemContext_default);
  return (0, import_jsx_runtime3.jsx)(AccordionCollapse_default, {
    eventKey,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    children: (0, import_jsx_runtime3.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames3.default)(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = "AccordionBody";
var AccordionBody_default = AccordionBody;

// node_modules/react-bootstrap/esm/AccordionButton.js
var React7 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_classnames4 = __toESM(require_classnames());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = (0, import_react6.useContext)(AccordionContext_default);
  return (e) => {
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null ? void 0 : onSelect(eventKeyPassed, e);
    onClick == null ? void 0 : onClick(e);
  };
}
var AccordionButton = React7.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "button",
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-button");
  const {
    eventKey
  } = (0, import_react6.useContext)(AccordionItemContext_default);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0, import_react6.useContext)(AccordionContext_default);
  if (Component2 === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime4.jsx)(Component2, {
    ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: (0, import_classnames4.default)(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && "collapsed")
  });
});
AccordionButton.displayName = "AccordionButton";
var AccordionButton_default = AccordionButton;

// node_modules/react-bootstrap/esm/AccordionHeader.js
var import_classnames5 = __toESM(require_classnames());
var React8 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var AccordionHeader = React8.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "h2",
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-header");
  return (0, import_jsx_runtime5.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames5.default)(className, bsPrefix),
    children: (0, import_jsx_runtime5.jsx)(AccordionButton_default, {
      onClick,
      children
    })
  });
});
AccordionHeader.displayName = "AccordionHeader";
var AccordionHeader_default = AccordionHeader;

// node_modules/react-bootstrap/esm/AccordionItem.js
var import_classnames6 = __toESM(require_classnames());
var React9 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var AccordionItem = React9.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-item");
  const contextValue = (0, import_react7.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return (0, import_jsx_runtime6.jsx)(AccordionItemContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime6.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames6.default)(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = "AccordionItem";
var AccordionItem_default = AccordionItem;

// node_modules/react-bootstrap/esm/Accordion.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var Accordion = React10.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "accordion");
  const contextValue = (0, import_react8.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return (0, import_jsx_runtime7.jsx)(AccordionContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime7.jsx)(Component2, {
      ref,
      ...controlledProps,
      className: (0, import_classnames7.default)(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = "Accordion";
var Accordion_default = Object.assign(Accordion, {
  Button: AccordionButton_default,
  Collapse: AccordionCollapse_default,
  Item: AccordionItem_default,
  Header: AccordionHeader_default,
  Body: AccordionBody_default
});

// node_modules/react-bootstrap/esm/Alert.js
var import_classnames8 = __toESM(require_classnames());
var React12 = __toESM(require_react());

// node_modules/@restart/ui/esm/Anchor.js
var React11 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useEventListener.js
var import_react9 = __toESM(require_react());
function useEventListener(eventTarget, event, listener, capture = false) {
  const handler = useEventCallback(listener);
  (0, import_react9.useEffect)(() => {
    const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return () => target.removeEventListener(event, handler, capture);
  }, [eventTarget]);
}

// node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react10 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useInterval.js
var import_react11 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useRafInterval.js
var import_react12 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergeState.js
var import_react13 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useImage.js
var import_react14 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react15 = __toESM(require_react());

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded = ["onKeyDown"];
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
var Anchor = React11.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref(props.href) || props.role === "button") {
    return (0, import_jsx_runtime8.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return (0, import_jsx_runtime8.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

// node_modules/react-bootstrap/esm/Alert.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var DivStyledAsH4 = divWithClassName_default("h4");
DivStyledAsH4.displayName = "DivStyledAsH4";
var AlertHeading = createWithBsPrefix("alert-heading", {
  Component: DivStyledAsH4
});
var AlertLink = createWithBsPrefix("alert-link", {
  Component: Anchor_default
});
var Alert = React12.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show = true,
    closeLabel = "Close alert",
    closeVariant,
    className,
    children,
    variant = "primary",
    onClose,
    dismissible,
    transition = Fade_default,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: "onClose"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "alert");
  const handleClose = useEventCallback((e) => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade_default : transition;
  const alert = (0, import_jsx_runtime10.jsxs)("div", {
    role: "alert",
    ...!Transition ? props : void 0,
    ref,
    className: (0, import_classnames8.default)(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && (0, import_jsx_runtime9.jsx)(CloseButton_default, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition)
    return show ? alert : null;
  return (0, import_jsx_runtime9.jsx)(Transition, {
    unmountOnExit: true,
    ...props,
    ref: void 0,
    in: show,
    children: alert
  });
});
Alert.displayName = "Alert";
var Alert_default = Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
});

// node_modules/react-bootstrap/esm/Anchor.js
var Anchor_default2 = Anchor_default;

// node_modules/react-bootstrap/esm/Badge.js
var import_classnames9 = __toESM(require_classnames());
var React13 = __toESM(require_react());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var Badge = React13.forwardRef(({
  bsPrefix,
  bg = "primary",
  pill = false,
  text,
  className,
  as: Component2 = "span",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "badge");
  return (0, import_jsx_runtime11.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames9.default)(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = "Badge";
var Badge_default = Badge;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_classnames11 = __toESM(require_classnames());
var React15 = __toESM(require_react());

// node_modules/react-bootstrap/esm/BreadcrumbItem.js
var import_classnames10 = __toESM(require_classnames());
var React14 = __toESM(require_react());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var BreadcrumbItem = React14.forwardRef(({
  bsPrefix,
  active = false,
  children,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "li",
  linkAs: LinkComponent = Anchor_default,
  linkProps = {},
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb-item");
  return (0, import_jsx_runtime12.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames10.default)(prefix, className, {
      active
    }),
    "aria-current": active ? "page" : void 0,
    children: active ? children : (0, import_jsx_runtime12.jsx)(LinkComponent, {
      ...linkProps,
      href,
      title,
      target,
      children
    })
  });
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbItem_default = BreadcrumbItem;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var Breadcrumb = React15.forwardRef(({
  bsPrefix,
  className,
  listProps = {},
  children,
  label = "breadcrumb",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "nav",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb");
  return (0, import_jsx_runtime13.jsx)(Component2, {
    "aria-label": label,
    className,
    ref,
    ...props,
    children: (0, import_jsx_runtime13.jsx)("ol", {
      ...listProps,
      className: (0, import_classnames11.default)(prefix, listProps == null ? void 0 : listProps.className),
      children
    })
  });
});
Breadcrumb.displayName = "Breadcrumb";
var Breadcrumb_default = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem_default
});

// node_modules/react-bootstrap/esm/ButtonGroup.js
var import_classnames12 = __toESM(require_classnames());
var React16 = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var ButtonGroup = React16.forwardRef(({
  bsPrefix,
  size,
  vertical = false,
  className,
  role = "group",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...rest
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-group");
  let baseClass = prefix;
  if (vertical)
    baseClass = `${prefix}-vertical`;
  return (0, import_jsx_runtime14.jsx)(Component2, {
    ...rest,
    ref,
    role,
    className: (0, import_classnames12.default)(className, baseClass, size && `${prefix}-${size}`)
  });
});
ButtonGroup.displayName = "ButtonGroup";
var ButtonGroup_default = ButtonGroup;

// node_modules/react-bootstrap/esm/ButtonToolbar.js
var import_classnames13 = __toESM(require_classnames());
var React17 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var ButtonToolbar = React17.forwardRef(({
  bsPrefix,
  className,
  role = "toolbar",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-toolbar");
  return (0, import_jsx_runtime15.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames13.default)(className, prefix),
    role
  });
});
ButtonToolbar.displayName = "ButtonToolbar";
var ButtonToolbar_default = ButtonToolbar;

// node_modules/react-bootstrap/esm/Card.js
var import_classnames16 = __toESM(require_classnames());
var React21 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardImg.js
var import_classnames14 = __toESM(require_classnames());
var React18 = __toESM(require_react());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var CardImg = React18.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    variant,
    as: Component2 = "img",
    ...props
  }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, "card-img");
    return (0, import_jsx_runtime16.jsx)(Component2, {
      ref,
      className: (0, import_classnames14.default)(variant ? `${prefix}-${variant}` : prefix, className),
      ...props
    });
  }
);
CardImg.displayName = "CardImg";
var CardImg_default = CardImg;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_classnames15 = __toESM(require_classnames());
var React20 = __toESM(require_react());
var import_react16 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardHeaderContext.js
var React19 = __toESM(require_react());
var context3 = React19.createContext(null);
context3.displayName = "CardHeaderContext";
var CardHeaderContext_default = context3;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var CardHeader = React20.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = (0, import_react16.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return (0, import_jsx_runtime17.jsx)(CardHeaderContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime17.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames15.default)(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// node_modules/react-bootstrap/esm/Card.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var DivStyledAsH6 = divWithClassName_default("h6");
var CardBody = createWithBsPrefix("card-body");
var CardTitle = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});
var CardSubtitle = createWithBsPrefix("card-subtitle", {
  Component: DivStyledAsH6
});
var CardLink = createWithBsPrefix("card-link", {
  Component: "a"
});
var CardText = createWithBsPrefix("card-text", {
  Component: "p"
});
var CardFooter = createWithBsPrefix("card-footer");
var CardImgOverlay = createWithBsPrefix("card-img-overlay");
var Card = React21.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body = false,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return (0, import_jsx_runtime18.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames16.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? (0, import_jsx_runtime18.jsx)(CardBody, {
      children
    }) : children
  });
});
Card.displayName = "Card";
var Card_default = Object.assign(Card, {
  Img: CardImg_default,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader_default,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});

// node_modules/react-bootstrap/esm/CardGroup.js
var CardGroup_default = createWithBsPrefix("card-group");

// node_modules/@restart/hooks/esm/useUpdateEffect.js
var import_react17 = __toESM(require_react());
function useUpdateEffect(fn, deps) {
  const isFirst = (0, import_react17.useRef)(true);
  (0, import_react17.useEffect)(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}
var useUpdateEffect_default = useUpdateEffect;

// node_modules/@restart/hooks/esm/useTimeout.js
var import_react18 = __toESM(require_react());
var MAX_DELAY_MS = 2 ** 31 - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  const delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(() => setChainedTimeout(handleRef, fn, timeoutAtMs), MAX_DELAY_MS);
}
function useTimeout() {
  const isMounted = useMounted();
  const handleRef = (0, import_react18.useRef)();
  useWillUnmount(() => clearTimeout(handleRef.current));
  return (0, import_react18.useMemo)(() => {
    const clear = () => clearTimeout(handleRef.current);
    function set(fn, delayMs = 0) {
      if (!isMounted())
        return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set,
      clear
    };
  }, []);
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_classnames18 = __toESM(require_classnames());
var React23 = __toESM(require_react());
var import_react19 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CarouselCaption.js
var CarouselCaption_default = createWithBsPrefix("carousel-caption");

// node_modules/react-bootstrap/esm/CarouselItem.js
var import_classnames17 = __toESM(require_classnames());
var React22 = __toESM(require_react());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var CarouselItem = React22.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = (0, import_classnames17.default)(className, useBootstrapPrefix(bsPrefix, "carousel-item"));
  return (0, import_jsx_runtime19.jsx)(Component2, {
    ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = "CarouselItem";
var CarouselItem_default = CarouselItem;

// node_modules/react-bootstrap/esm/Carousel.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var SWIPE_THRESHOLD = 40;
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== "none" && elementStyle.visibility !== "hidden" && getComputedStyle(element.parentNode).display !== "none";
}
var Carousel = React23.forwardRef(({
  defaultActiveIndex = 0,
  ...uncontrolledProps
}, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    bsPrefix,
    slide = true,
    fade = false,
    controls = true,
    indicators = true,
    indicatorLabels = [],
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval = 5e3,
    keyboard = true,
    onKeyDown,
    pause = "hover",
    onMouseOver,
    onMouseOut,
    wrap = true,
    touch = true,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon = (0, import_jsx_runtime20.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-prev-icon"
    }),
    prevLabel = "Previous",
    nextIcon = (0, import_jsx_runtime20.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-next-icon"
    }),
    nextLabel = "Next",
    variant,
    className,
    children,
    ...props
  } = useUncontrolled({
    defaultActiveIndex,
    ...uncontrolledProps
  }, {
    activeIndex: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const nextDirectionRef = (0, import_react19.useRef)(null);
  const [direction, setDirection] = (0, import_react19.useState)("next");
  const [paused, setPaused] = (0, import_react19.useState)(false);
  const [isSliding, setIsSliding] = (0, import_react19.useState)(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = (0, import_react19.useState)(activeIndex || 0);
  (0, import_react19.useEffect)(() => {
    if (!isSliding && activeIndex !== renderedActiveIndex) {
      if (nextDirectionRef.current) {
        setDirection(nextDirectionRef.current);
      } else {
        setDirection((activeIndex || 0) > renderedActiveIndex ? "next" : "prev");
      }
      if (slide) {
        setIsSliding(true);
      }
      setRenderedActiveIndex(activeIndex || 0);
    }
  }, [activeIndex, isSliding, renderedActiveIndex, slide]);
  (0, import_react19.useEffect)(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval;
  forEach(children, (child, index) => {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef_default(activeChildInterval);
  const prev = (0, import_react19.useCallback)((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = "prev";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]);
  const next = useEventCallback((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = "next";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = (0, import_react19.useRef)();
  (0, import_react19.useImperativeHandle)(ref, () => ({
    element: elementRef.current,
    prev,
    next
  }));
  const nextWhenVisible = useEventCallback(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === "next" ? "start" : "end";
  useUpdateEffect_default(() => {
    if (slide) {
      return;
    }
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = (0, import_react19.useCallback)((node) => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = (0, import_react19.useCallback)(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = (0, import_react19.useCallback)((event) => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
        default:
      }
    }
    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = (0, import_react19.useCallback)((event) => {
    if (pause === "hover") {
      setPaused(true);
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = (0, import_react19.useCallback)((event) => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = (0, import_react19.useRef)(0);
  const touchDeltaXRef = (0, import_react19.useRef)(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = (0, import_react19.useCallback)((event) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === "hover") {
      setPaused(true);
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = (0, import_react19.useCallback)((event) => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = (0, import_react19.useCallback)((event) => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === "hover") {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || void 0);
    }
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = (0, import_react19.useRef)();
  (0, import_react19.useEffect)(() => {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return void 0;
    }
    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : void 0);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = (0, import_react19.useMemo)(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => (event) => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return (0, import_jsx_runtime21.jsxs)(Component2, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: (0, import_classnames18.default)(className, prefix, slide && "slide", fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && (0, import_jsx_runtime20.jsx)("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => (0, import_jsx_runtime20.jsx)("button", {
        type: "button",
        "data-bs-target": "",
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? "active" : void 0,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : void 0,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), (0, import_jsx_runtime20.jsx)("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? (0, import_jsx_runtime20.jsx)(TransitionWrapper_default, {
          in: isActive,
          onEnter: isActive ? handleEnter : void 0,
          onEntered: isActive ? handleEntered : void 0,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => React23.cloneElement(child, {
            ...innerProps,
            className: (0, import_classnames18.default)(child.props.className, isActive && status !== "entered" && orderClassName, (status === "entered" || status === "exiting") && "active", (status === "entering" || status === "exiting") && directionalClassName)
          })
        }) : React23.cloneElement(child, {
          className: (0, import_classnames18.default)(child.props.className, isActive && "active")
        });
      })
    }), controls && (0, import_jsx_runtime21.jsxs)(import_jsx_runtime22.Fragment, {
      children: [(wrap || activeIndex !== 0) && (0, import_jsx_runtime21.jsxs)(Anchor_default, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && (0, import_jsx_runtime20.jsx)("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && (0, import_jsx_runtime21.jsxs)(Anchor_default, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && (0, import_jsx_runtime20.jsx)("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = "Carousel";
var Carousel_default = Object.assign(Carousel, {
  Caption: CarouselCaption_default,
  Item: CarouselItem_default
});

// node_modules/react-bootstrap/esm/Dropdown.js
var import_classnames22 = __toESM(require_classnames());
var React37 = __toESM(require_react());
var import_react33 = __toESM(require_react());

// node_modules/@restart/ui/esm/Dropdown.js
var import_react29 = __toESM(require_react());
var React30 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/uncontrollable/lib/esm/index.js
var import_react20 = __toESM(require_react());
function useUncontrolledProp2(propValue, defaultValue, handler) {
  const wasPropRef = (0, import_react20.useRef)(propValue !== void 0);
  const [stateValue, setState] = (0, import_react20.useState)(defaultValue);
  const isProp2 = propValue !== void 0;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react20.useCallback)((...args) => {
    const [value, ...rest] = args;
    let returnValue = handler == null ? void 0 : handler(value, ...rest);
    setState(value);
    return returnValue;
  }, [handler])];
}

// node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react21 = __toESM(require_react());
function useForceUpdate() {
  const [, dispatch] = (0, import_react21.useReducer)((state) => !state, false);
  return dispatch;
}

// node_modules/@restart/ui/esm/DropdownContext.js
var React24 = __toESM(require_react());
var DropdownContext = React24.createContext(null);
var DropdownContext_default = DropdownContext;

// node_modules/@restart/ui/esm/DropdownMenu.js
var import_react25 = __toESM(require_react());
var React25 = __toESM(require_react());

// node_modules/@restart/ui/esm/usePopper.js
var import_react23 = __toESM(require_react());

// node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
  for (key of iter.keys()) {
    if (dequal(key, tar))
      return key;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!bar.has(tmp))
          return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp)
            return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len))
          ;
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len])
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/@restart/hooks/esm/useSafeState.js
var import_react22 = __toESM(require_react());
function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], (0, import_react22.useCallback)((nextState) => {
    if (!isMounted())
      return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var useSafeState_default = useSafeState;

// node_modules/@restart/ui/esm/popper.js
init_arrow();
init_computeStyles();
init_eventListeners();
init_flip();
init_hide();
init_offset();
init_popperOffsets();
init_preventOverflow();
init_enums();

// node_modules/@popperjs/core/lib/popper-base.js
init_createPopper();

// node_modules/@restart/ui/esm/popper.js
var createPopper2 = popperGenerator({
  defaultModifiers: [hide_default, popperOffsets_default, computeStyles_default, eventListeners_default, offset_default, flip_default, preventOverflow_default, arrow_default]
});

// node_modules/@restart/ui/esm/usePopper.js
var _excluded2 = ["enabled", "placement", "strategy", "modifiers"];
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false,
  phase: "afterWrite",
  fn: () => void 0
};
var ariaDescribedByModifier = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;
    if ("removeAttribute" in reference) {
      const ids = (reference.getAttribute("aria-describedby") || "").split(",").filter((id) => id.trim() !== popper.id);
      if (!ids.length)
        reference.removeAttribute("aria-describedby");
      else
        reference.setAttribute("aria-describedby", ids.join(","));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;
    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper.id && role === "tooltip" && "setAttribute" in reference) {
      const ids = reference.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper.id) !== -1) {
        return;
      }
      reference.setAttribute("aria-describedby", ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = "bottom",
    strategy = "absolute",
    modifiers = EMPTY_MODIFIERS
  } = _ref, config = _objectWithoutPropertiesLoose3(_ref, _excluded2);
  const prevModifiers = (0, import_react23.useRef)(modifiers);
  const popperInstanceRef = (0, import_react23.useRef)();
  const update = (0, import_react23.useCallback)(() => {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = (0, import_react23.useCallback)(() => {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = useSafeState_default((0, import_react23.useState)({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = (0, import_react23.useMemo)(() => ({
    name: "updateStateModifier",
    enabled: true,
    phase: "write",
    requires: ["computeStyles"],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach((element) => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = (0, import_react23.useMemo)(() => {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }
    return prevModifiers.current;
  }, [modifiers]);
  (0, import_react23.useEffect)(() => {
    if (!popperInstanceRef.current || !enabled)
      return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  (0, import_react23.useEffect)(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return void 0;
    }
    popperInstanceRef.current = createPopper2(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = void 0;
        setState((s) => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    };
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
var usePopper_default = usePopper;

// node_modules/@restart/ui/esm/useClickOutside.js
var import_react24 = __toESM(require_react());
var import_warning = __toESM(require_warning());
var noop = () => {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = (ref) => ref && ("current" in ref ? ref.current : ref);
var InitialTriggerEvents = {
  click: "mousedown",
  mouseup: "mousedown",
  pointerup: "pointerdown"
};
function useClickOutside(ref, onClickOutside = noop, {
  disabled,
  clickTrigger = "click"
} = {}) {
  const preventMouseClickOutsideRef = (0, import_react24.useRef)(false);
  const waitingForTrigger = (0, import_react24.useRef)(false);
  const handleMouseCapture = (0, import_react24.useCallback)((e) => {
    const currentTarget = getRefTarget(ref);
    (0, import_warning.default)(!!currentTarget, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node");
    preventMouseClickOutsideRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains(currentTarget, e.target) || waitingForTrigger.current;
    waitingForTrigger.current = false;
  }, [ref]);
  const handleInitialMouse = useEventCallback((e) => {
    const currentTarget = getRefTarget(ref);
    if (currentTarget && contains(currentTarget, e.target)) {
      waitingForTrigger.current = true;
    }
  });
  const handleMouse = useEventCallback((e) => {
    if (!preventMouseClickOutsideRef.current) {
      onClickOutside(e);
    }
  });
  (0, import_react24.useEffect)(() => {
    var _ownerWindow$event, _ownerWindow$parent;
    if (disabled || ref == null)
      return void 0;
    const doc = ownerDocument(getRefTarget(ref));
    const ownerWindow = doc.defaultView || window;
    let currentEvent = (_ownerWindow$event = ownerWindow.event) != null ? _ownerWindow$event : (_ownerWindow$parent = ownerWindow.parent) == null ? void 0 : _ownerWindow$parent.event;
    let removeInitialTriggerListener = null;
    if (InitialTriggerEvents[clickTrigger]) {
      removeInitialTriggerListener = listen_default(doc, InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
    }
    const removeMouseCaptureListener = listen_default(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = listen_default(doc, clickTrigger, (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    let mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map((el) => listen_default(el, "mousemove", noop));
    }
    return () => {
      removeInitialTriggerListener == null ? void 0 : removeInitialTriggerListener();
      removeMouseCaptureListener();
      removeMouseListener();
      mobileSafariHackListeners.forEach((remove) => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleInitialMouse, handleMouse]);
}
var useClickOutside_default = useClickOutside;

// node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js
function toModifierMap(modifiers) {
  const result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }
  modifiers == null ? void 0 : modifiers.forEach((m) => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map2 = {}) {
  if (Array.isArray(map2))
    return map2;
  return Object.keys(map2).map((k) => {
    map2[k].name = k;
    return map2[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$eventListe, _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? "fixed" : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents,
        options: (_modifiers$eventListe = modifiers.eventListeners) == null ? void 0 : _modifiers$eventListe.options
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

// node_modules/@restart/ui/esm/DropdownMenu.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var _excluded3 = ["children"];
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var noop2 = () => {
};
function useDropdownMenu(options = {}) {
  const context6 = (0, import_react25.useContext)(DropdownContext_default);
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const hasShownRef = (0, import_react25.useRef)(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context6
  } = options;
  const show = (context6 == null ? void 0 : context6.show) == null ? !!options.show : context6.show;
  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }
  const handleClose = (e) => {
    context6 == null ? void 0 : context6.toggle(false, e);
  };
  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context6 || {};
  const popper = usePopper_default(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement: placementOverride || placement || "bottom-start",
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop2,
    "aria-labelledby": toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context6 == null ? void 0 : context6.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  useClickOutside_default(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
var defaultProps = {
  usePopper: true
};
function DropdownMenu(_ref) {
  let {
    children
  } = _ref, options = _objectWithoutPropertiesLoose4(_ref, _excluded3);
  const [props, meta] = useDropdownMenu(options);
  return (0, import_jsx_runtime24.jsx)(import_jsx_runtime23.Fragment, {
    children: children(props, meta)
  });
}
DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.defaultProps = defaultProps;
var DropdownMenu_default = DropdownMenu;

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_react27 = __toESM(require_react());
var React26 = __toESM(require_react());

// node_modules/@react-aria/ssr/dist/import.mjs
var import_react26 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0,
  isSSR: false
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react26.default).createContext($b5e257d569688ac6$var$defaultContext);
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
  let cur = (0, import_react26.useContext)($b5e257d569688ac6$var$SSRContext);
  let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
  let [isSSR, setIsSSR] = (0, import_react26.useState)(true);
  let value = (0, import_react26.useMemo)(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
    current: 0,
    isSSR
  }), [
    cur,
    counter,
    isSSR
  ]);
  if (typeof document !== "undefined")
    (0, import_react26.useLayoutEffect)(() => {
      setIsSSR(false);
    }, []);
  return (0, import_react26.default).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
    value
  }, props.children);
}
var $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
  if (typeof (0, import_react26.default)["useId"] === "function") {
    if (!$b5e257d569688ac6$var$warnedAboutSSRProvider) {
      console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
      $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
    }
    return (0, import_react26.default).createElement((0, import_react26.default).Fragment, null, props.children);
  }
  return (0, import_react26.default).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react26.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react26.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react26.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react26.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react26.default).useId();
  let [didSSR] = (0, import_react26.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react26.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react26.default)["useSyncExternalStore"] === "function")
    return (0, import_react26.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  let cur = (0, import_react26.useContext)($b5e257d569688ac6$var$SSRContext);
  return cur.isSSR;
}

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var isRoleMenu = (el) => {
  var _el$getAttribute;
  return ((_el$getAttribute = el.getAttribute("role")) == null ? void 0 : _el$getAttribute.toLowerCase()) === "menu";
};
var noop3 = () => {
};
function useDropdownToggle() {
  const id = $b5e257d569688ac6$export$619500959fc48b26();
  const {
    show = false,
    toggle = noop3,
    setToggle,
    menuElement
  } = (0, import_react27.useContext)(DropdownContext_default) || {};
  const handleClick = (0, import_react27.useCallback)((e) => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || noop3,
    onClick: handleClick,
    "aria-expanded": !!show
  };
  if (menuElement && isRoleMenu(menuElement)) {
    props["aria-haspopup"] = true;
  }
  return [props, {
    show,
    toggle
  }];
}
function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return (0, import_jsx_runtime26.jsx)(import_jsx_runtime25.Fragment, {
    children: children(props, meta)
  });
}
DropdownToggle.displayName = "DropdownToggle";
var DropdownToggle_default = DropdownToggle;

// node_modules/@restart/ui/esm/DropdownItem.js
var React29 = __toESM(require_react());
var import_react28 = __toESM(require_react());

// node_modules/@restart/ui/esm/SelectableContext.js
var React27 = __toESM(require_react());
var SelectableContext = React27.createContext(null);
var makeEventKey = (eventKey, href = null) => {
  if (eventKey != null)
    return String(eventKey);
  return href || null;
};
var SelectableContext_default = SelectableContext;

// node_modules/@restart/ui/esm/NavContext.js
var React28 = __toESM(require_react());
var NavContext = React28.createContext(null);
NavContext.displayName = "NavContext";
var NavContext_default = NavContext;

// node_modules/@restart/ui/esm/DropdownItem.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var _excluded4 = ["eventKey", "disabled", "onClick", "active", "as"];
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = (0, import_react28.useContext)(SelectableContext_default);
  const navContext = (0, import_react28.useContext)(NavContext_default);
  const {
    activeKey
  } = navContext || {};
  const eventKey = makeEventKey(key, href);
  const isActive = active == null && key != null ? makeEventKey(activeKey) === eventKey : active;
  const handleClick = useEventCallback((event) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(event);
    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    "aria-disabled": disabled || void 0,
    "aria-selected": isActive,
    [dataAttr("dropdown-item")]: ""
  }, {
    isActive
  }];
}
var DropdownItem = React29.forwardRef((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component2 = Button_default
  } = _ref, props = _objectWithoutPropertiesLoose5(_ref, _excluded4);
  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime27.jsx)(Component2, Object.assign({}, props, {
    ref
  }, dropdownItemProps));
});
DropdownItem.displayName = "DropdownItem";
var DropdownItem_default = DropdownItem;

// node_modules/@restart/ui/esm/Dropdown.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
function useRefWithUpdate() {
  const forceUpdate = useForceUpdate();
  const ref = (0, import_react29.useRef)(null);
  const attachRef = (0, import_react29.useCallback)((element) => {
    ref.current = element;
    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr("dropdown-item")}]`,
  focusFirstItemOnShow,
  placement = "bottom-start",
  children
}) {
  const window2 = useWindow();
  const [show, onToggle] = useUncontrolledProp2(rawShow, defaultShow, rawOnToggle);
  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = usePrevious(show);
  const lastSourceEvent = (0, import_react29.useRef)(null);
  const focusInDropdown = (0, import_react29.useRef)(false);
  const onSelectCtx = (0, import_react29.useContext)(SelectableContext_default);
  const toggle = (0, import_react29.useCallback)((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = useEventCallback((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, "select");
    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context6 = (0, import_react29.useMemo)(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);
  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(menuElement.ownerDocument.activeElement);
  }
  const focusToggle = useEventCallback(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = useEventCallback(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;
    if (focusType == null) {
      focusType = menuRef.current && isRoleMenu(menuRef.current) ? "keyboard" : false;
    }
    if (focusType === false || focusType === "keyboard" && !/^key.+$/.test(type)) {
      return;
    }
    const first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus)
      first.focus();
  });
  (0, import_react29.useEffect)(() => {
    if (show)
      maybeFocusFirst();
    else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    }
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0, import_react29.useEffect)(() => {
    lastSourceEvent.current = null;
  });
  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current)
      return null;
    const items = qsa(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };
  useEventListener((0, import_react29.useCallback)(() => window2.document, [window2]), "keydown", (event) => {
    var _menuRef$current, _toggleRef$current;
    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target);
    const isInput = /input|textarea/i.test(target.tagName);
    if (isInput && (key === " " || key !== "Escape" && fromMenu || key === "Escape" && target.type === "search")) {
      return;
    }
    if (!fromMenu && !fromToggle) {
      return;
    }
    if (key === "Tab" && (!menuRef.current || !show)) {
      return;
    }
    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };
    switch (key) {
      case "ArrowUp": {
        const next = getNextFocusedChild(target, -1);
        if (next && next.focus)
          next.focus();
        event.preventDefault();
        return;
      }
      case "ArrowDown":
        event.preventDefault();
        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus)
            next.focus();
        }
        return;
      case "Tab":
        addEventListener_default(target.ownerDocument, "keyup", (e) => {
          var _menuRef$current2;
          if (e.key === "Tab" && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;
      case "Escape":
        if (key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
        }
        onToggle(false, meta);
        break;
      default:
    }
  });
  return (0, import_jsx_runtime28.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: (0, import_jsx_runtime28.jsx)(DropdownContext_default.Provider, {
      value: context6,
      children
    })
  });
}
Dropdown.displayName = "Dropdown";
Dropdown.Menu = DropdownMenu_default;
Dropdown.Toggle = DropdownToggle_default;
Dropdown.Item = DropdownItem_default;
var Dropdown_default = Dropdown;

// node_modules/react-bootstrap/esm/DropdownContext.js
var React31 = __toESM(require_react());
var DropdownContext2 = React31.createContext({});
DropdownContext2.displayName = "DropdownContext";
var DropdownContext_default2 = DropdownContext2;

// node_modules/react-bootstrap/esm/DropdownItem.js
var import_classnames19 = __toESM(require_classnames());
var React32 = __toESM(require_react());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var DropdownItem2 = React32.forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component2 = Anchor_default,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-item");
  const [dropdownItemProps, meta] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime29.jsx)(Component2, {
    ...props,
    ...dropdownItemProps,
    ref,
    className: (0, import_classnames19.default)(className, prefix, meta.isActive && "active", disabled && "disabled")
  });
});
DropdownItem2.displayName = "DropdownItem";
var DropdownItem_default2 = DropdownItem2;

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_classnames20 = __toESM(require_classnames());
var React35 = __toESM(require_react());
var import_react31 = __toESM(require_react());
var import_warning2 = __toESM(require_warning());

// node_modules/react-bootstrap/esm/InputGroupContext.js
var React33 = __toESM(require_react());
var context4 = React33.createContext(null);
context4.displayName = "InputGroupContext";
var InputGroupContext_default = context4;

// node_modules/react-bootstrap/esm/NavbarContext.js
var React34 = __toESM(require_react());
var context5 = React34.createContext(null);
context5.displayName = "NavbarContext";
var NavbarContext_default = context5;

// node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js
var import_invariant3 = __toESM(require_browser());
var import_react30 = __toESM(require_react());
function useWrappedRefWithWarning(ref, componentName) {
  if (false)
    return ref;
  const warningRef = (0, import_react30.useCallback)((refValue) => {
    !(refValue == null || !refValue.isReactComponent) ? true ? (0, import_invariant3.default)(false, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. Use \`React.forwardRef\` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element`) : (0, import_invariant3.default)(false) : void 0;
  }, [componentName]);
  return useMergedRefs_default(warningRef, ref);
}

// node_modules/react-bootstrap/esm/types.js
var import_prop_types = __toESM(require_prop_types());
var alignDirection = import_prop_types.default.oneOf(["start", "end"]);
var alignPropType = import_prop_types.default.oneOfType([alignDirection, import_prop_types.default.shape({
  sm: alignDirection
}), import_prop_types.default.shape({
  md: alignDirection
}), import_prop_types.default.shape({
  lg: alignDirection
}), import_prop_types.default.shape({
  xl: alignDirection
}), import_prop_types.default.shape({
  xxl: alignDirection
}), import_prop_types.default.object]);

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? "top-end" : "top-start";
  const topEnd = isRTL ? "top-start" : "top-end";
  const bottomStart = isRTL ? "bottom-end" : "bottom-start";
  const bottomEnd = isRTL ? "bottom-start" : "bottom-end";
  const leftStart = isRTL ? "right-start" : "left-start";
  const leftEnd = isRTL ? "right-end" : "left-end";
  const rightStart = isRTL ? "left-start" : "right-start";
  const rightEnd = isRTL ? "left-end" : "right-end";
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === "up")
    placement = alignEnd ? topEnd : topStart;
  else if (dropDirection === "end")
    placement = alignEnd ? rightEnd : rightStart;
  else if (dropDirection === "start")
    placement = alignEnd ? leftEnd : leftStart;
  else if (dropDirection === "down-centered")
    placement = "bottom";
  else if (dropDirection === "up-centered")
    placement = "top";
  return placement;
}
var DropdownMenu2 = React35.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip = true,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = (0, import_react31.useContext)(NavbarContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-menu");
  const {
    align: contextAlign,
    drop,
    isRTL
  } = (0, import_react31.useContext)(DropdownContext_default2);
  align = align || contextAlign;
  const isInputGroup = (0, import_react31.useContext)(InputGroupContext_default);
  const alignClasses = [];
  if (align) {
    if (typeof align === "object") {
      const keys = Object.keys(align);
      true ? (0, import_warning2.default)(keys.length === 1, "There should only be 1 breakpoint when passing an object to `align`") : void 0;
      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint];
        alignEnd = direction === "start";
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === "end") {
      alignEnd = true;
    }
  }
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs_default(useWrappedRefWithWarning(ref, "DropdownMenu"), menuProps.ref);
  useIsomorphicEffect_default(() => {
    if (show)
      popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup)
    return null;
  if (typeof Component2 !== "string") {
    menuProps.show = show;
    menuProps.close = () => toggle == null ? void 0 : toggle(false);
    menuProps.align = align;
  }
  let style = props.style;
  if (popper != null && popper.placement) {
    style = {
      ...props.style,
      ...menuProps.style
    };
    props["x-placement"] = popper.placement;
  }
  return (0, import_jsx_runtime30.jsx)(Component2, {
    ...props,
    ...menuProps,
    style,
    ...(alignClasses.length || isNavbar) && {
      "data-bs-popper": "static"
    },
    className: (0, import_classnames20.default)(className, prefix, show && "show", alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu2.displayName = "DropdownMenu";
var DropdownMenu_default2 = DropdownMenu2;

// node_modules/react-bootstrap/esm/DropdownToggle.js
var import_classnames21 = __toESM(require_classnames());
var React36 = __toESM(require_react());
var import_react32 = __toESM(require_react());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var DropdownToggle2 = React36.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = Button_default2,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-toggle");
  const dropdownContext = (0, import_react32.useContext)(DropdownContext_default);
  if (childBsPrefix !== void 0) {
    props.bsPrefix = childBsPrefix;
  }
  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = useMergedRefs_default(toggleProps.ref, useWrappedRefWithWarning(ref, "DropdownToggle"));
  return (0, import_jsx_runtime31.jsx)(Component2, {
    className: (0, import_classnames21.default)(className, prefix, split && `${prefix}-split`, (dropdownContext == null ? void 0 : dropdownContext.show) && "show"),
    ...toggleProps,
    ...props
  });
});
DropdownToggle2.displayName = "DropdownToggle";
var DropdownToggle_default2 = DropdownToggle2;

// node_modules/react-bootstrap/esm/Dropdown.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var DropdownHeader = createWithBsPrefix("dropdown-header", {
  defaultProps: {
    role: "heading"
  }
});
var DropdownDivider = createWithBsPrefix("dropdown-divider", {
  Component: "hr",
  defaultProps: {
    role: "separator"
  }
});
var DropdownItemText = createWithBsPrefix("dropdown-item-text", {
  Component: "span"
});
var Dropdown2 = React37.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop = "down",
    show,
    className,
    align = "start",
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    navbar: _4,
    autoClose = true,
    ...props
  } = useUncontrolled(pProps, {
    show: "onToggle"
  });
  const isInputGroup = (0, import_react33.useContext)(InputGroupContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown");
  const isRTL = useIsRTL();
  const isClosingPermitted = (source) => {
    if (autoClose === false)
      return source === "click";
    if (autoClose === "inside")
      return source !== "rootClose";
    if (autoClose === "outside")
      return source !== "select";
    return true;
  };
  const handleToggle = useEventCallback((nextShow, meta) => {
    if (meta.originalEvent.currentTarget === document && (meta.source !== "keydown" || meta.originalEvent.key === "Escape"))
      meta.source = "rootClose";
    if (isClosingPermitted(meta.source))
      onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === "end";
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = (0, import_react33.useMemo)(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  const directionClasses = {
    down: prefix,
    "down-centered": `${prefix}-center`,
    up: "dropup",
    "up-centered": "dropup-center dropup",
    end: "dropend",
    start: "dropstart"
  };
  return (0, import_jsx_runtime32.jsx)(DropdownContext_default2.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime32.jsx)(Dropdown_default, {
      placement,
      show,
      onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : (0, import_jsx_runtime32.jsx)(Component2, {
        ...props,
        ref,
        className: (0, import_classnames22.default)(className, show && "show", directionClasses[drop])
      })
    })
  });
});
Dropdown2.displayName = "Dropdown";
var Dropdown_default2 = Object.assign(Dropdown2, {
  Toggle: DropdownToggle_default2,
  Menu: DropdownMenu_default2,
  Item: DropdownItem_default2,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
});

// node_modules/react-bootstrap/esm/DropdownButton.js
var React38 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: import_prop_types2.default.string,
  /** An `href` passed to the Toggle component */
  href: import_prop_types2.default.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: import_prop_types2.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types2.default.node.isRequired,
  /** Disables both Buttons  */
  disabled: import_prop_types2.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types2.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types2.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types2.default.string,
  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: import_prop_types2.default.oneOf(["dark"]),
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types2.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types2.default.string,
  /** @ignore */
  variant: import_prop_types2.default.string,
  /** @ignore */
  size: import_prop_types2.default.string
};
var DropdownButton = React38.forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime34.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  children: [(0, import_jsx_runtime33.jsx)(DropdownToggle_default2, {
    id,
    href,
    size,
    variant,
    disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), (0, import_jsx_runtime33.jsx)(DropdownMenu_default2, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    variant: menuVariant,
    flip,
    children
  })]
}));
DropdownButton.displayName = "DropdownButton";
DropdownButton.propTypes = propTypes;
var DropdownButton_default = DropdownButton;

// node_modules/react-bootstrap/esm/Image.js
var import_classnames23 = __toESM(require_classnames());
var React39 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var propTypes2 = {
  /**
   * @default 'img'
   */
  bsPrefix: import_prop_types3.default.string,
  /**
   * Sets image as fluid image.
   */
  fluid: import_prop_types3.default.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: import_prop_types3.default.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: import_prop_types3.default.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: import_prop_types3.default.bool
};
var Image2 = React39.forwardRef(({
  bsPrefix,
  className,
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "img");
  return (0, import_jsx_runtime35.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref,
    ...props,
    className: (0, import_classnames23.default)(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image2.displayName = "Image";
var Image_default = Image2;

// node_modules/react-bootstrap/esm/FigureImage.js
var import_classnames24 = __toESM(require_classnames());
var React40 = __toESM(require_react());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var FigureImage = React40.forwardRef(({
  className,
  fluid = true,
  ...props
}, ref) => (0, import_jsx_runtime36.jsx)(Image_default, {
  ref,
  ...props,
  fluid,
  className: (0, import_classnames24.default)(className, "figure-img")
}));
FigureImage.displayName = "FigureImage";
FigureImage.propTypes = propTypes2;
var FigureImage_default = FigureImage;

// node_modules/react-bootstrap/esm/FigureCaption.js
var FigureCaption = createWithBsPrefix("figure-caption", {
  Component: "figcaption"
});
var FigureCaption_default = FigureCaption;

// node_modules/react-bootstrap/esm/Figure.js
var Figure = createWithBsPrefix("figure", {
  Component: "figure"
});
var Figure_default = Object.assign(Figure, {
  Image: FigureImage_default,
  Caption: FigureCaption_default
});

// node_modules/react-bootstrap/esm/InputGroup.js
var import_classnames25 = __toESM(require_classnames());
var React41 = __toESM(require_react());
var import_react34 = __toESM(require_react());
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var InputGroupText = createWithBsPrefix("input-group-text", {
  Component: "span"
});
var InputGroupCheckbox = (props) => (0, import_jsx_runtime37.jsx)(InputGroupText, {
  children: (0, import_jsx_runtime37.jsx)(FormCheckInput_default, {
    type: "checkbox",
    ...props
  })
});
var InputGroupRadio = (props) => (0, import_jsx_runtime37.jsx)(InputGroupText, {
  children: (0, import_jsx_runtime37.jsx)(FormCheckInput_default, {
    type: "radio",
    ...props
  })
});
var InputGroup = React41.forwardRef(({
  bsPrefix,
  size,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
  const contextValue = (0, import_react34.useMemo)(() => ({}), []);
  return (0, import_jsx_runtime37.jsx)(InputGroupContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime37.jsx)(Component2, {
      ref,
      ...props,
      className: (0, import_classnames25.default)(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && "has-validation")
    })
  });
});
InputGroup.displayName = "InputGroup";
var InputGroup_default = Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

// node_modules/react-bootstrap/esm/ListGroup.js
var import_classnames27 = __toESM(require_classnames());
var React46 = __toESM(require_react());
var import_warning4 = __toESM(require_warning());

// node_modules/@restart/ui/esm/Nav.js
var React44 = __toESM(require_react());
var import_react36 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabContext.js
var React42 = __toESM(require_react());
var TabContext = React42.createContext(null);
var TabContext_default = TabContext;

// node_modules/@restart/ui/esm/NavItem.js
var React43 = __toESM(require_react());
var import_react35 = __toESM(require_react());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var _excluded5 = ["as", "active", "eventKey"];
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0, import_react35.useContext)(SelectableContext_default);
  const navContext = (0, import_react35.useContext)(NavContext_default);
  const tabContext = (0, import_react35.useContext)(TabContext_default);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === "tablist")
      props.role = "tab";
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);
    props[dataAttr("event-key")] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter))
      props["aria-controls"] = contextControlledId;
  }
  if (props.role === "tab") {
    props["aria-selected"] = isActive;
    if (!isActive) {
      props.tabIndex = -1;
    }
    if (disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
  }
  props.onClick = useEventCallback((e) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(e);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
var NavItem = React43.forwardRef((_ref, ref) => {
  let {
    as: Component2 = Button_default,
    active,
    eventKey
  } = _ref, options = _objectWithoutPropertiesLoose6(_ref, _excluded5);
  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));
  props[dataAttr("active")] = meta.isActive;
  return (0, import_jsx_runtime38.jsx)(Component2, Object.assign({}, options, props, {
    ref
  }));
});
NavItem.displayName = "NavItem";
var NavItem_default = NavItem;

// node_modules/@restart/ui/esm/Nav.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var _excluded6 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var noop4 = () => {
};
var EVENT_KEY_ATTR = dataAttr("event-key");
var Nav = React44.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose7(_ref, _excluded6);
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = (0, import_react36.useRef)(false);
  const parentOnSelect = (0, import_react36.useContext)(SelectableContext_default);
  const tabContext = (0, import_react36.useContext)(TabContext_default);
  let getControlledId, getControllerId;
  if (tabContext) {
    role = role || "tablist";
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }
  const listNode = (0, import_react36.useRef)(null);
  const getNextActiveTab = (offset) => {
    const currentListNode = listNode.current;
    if (!currentListNode)
      return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector("[aria-selected=true]");
    if (!activeChild || activeChild !== document.activeElement)
      return null;
    const index = items.indexOf(activeChild);
    if (index === -1)
      return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length)
      nextIndex = 0;
    if (nextIndex < 0)
      nextIndex = items.length - 1;
    return items[nextIndex];
  };
  const handleSelect = (key, event) => {
    if (key == null)
      return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!tabContext) {
      return;
    }
    let nextActiveChild;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextActiveChild = getNextActiveTab(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild)
      return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };
  (0, import_react36.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }
    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs_default(ref, listNode);
  return (0, import_jsx_runtime39.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: (0, import_jsx_runtime39.jsx)(NavContext_default.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop4,
        getControllerId: getControllerId || noop4
      },
      children: (0, import_jsx_runtime39.jsx)(Component2, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role
      }))
    })
  });
});
Nav.displayName = "Nav";
var Nav_default = Object.assign(Nav, {
  Item: NavItem_default
});

// node_modules/react-bootstrap/esm/ListGroupItem.js
var import_classnames26 = __toESM(require_classnames());
var React45 = __toESM(require_react());
var import_warning3 = __toESM(require_warning());
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var ListGroupItem = React45.forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });
  if (disabled && props.tabIndex === void 0) {
    props.tabIndex = -1;
    props["aria-disabled"] = true;
  }
  const Component2 = as || (action ? props.href ? "a" : "button" : "div");
  true ? (0, import_warning3.default)(as || !(!action && props.href), "`action=false` and `href` should not be used together.") : void 0;
  return (0, import_jsx_runtime40.jsx)(Component2, {
    ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: (0, import_classnames26.default)(className, bsPrefix, meta.isActive && "active", disabled && "disabled", variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = "ListGroupItem";
var ListGroupItem_default = ListGroupItem;

// node_modules/react-bootstrap/esm/ListGroup.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var ListGroup = React46.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = "div",
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "list-group");
  let horizontalVariant;
  if (horizontal) {
    horizontalVariant = horizontal === true ? "horizontal" : `horizontal-${horizontal}`;
  }
  true ? (0, import_warning4.default)(!(horizontal && variant === "flush"), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return (0, import_jsx_runtime41.jsx)(Nav_default, {
    ref,
    ...controlledProps,
    as,
    className: (0, import_classnames27.default)(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = "ListGroup";
var ListGroup_default = Object.assign(ListGroup, {
  Item: ListGroupItem_default
});

// node_modules/react-bootstrap/esm/Nav.js
var import_classnames29 = __toESM(require_classnames());
var import_all = __toESM(require_all());
var React48 = __toESM(require_react());
var import_react37 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavItem.js
var NavItem_default2 = createWithBsPrefix("nav-item");

// node_modules/react-bootstrap/esm/NavLink.js
var import_classnames28 = __toESM(require_classnames());
var React47 = __toESM(require_react());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var NavLink = React47.forwardRef(({
  bsPrefix,
  className,
  as: Component2 = Anchor_default,
  active,
  eventKey,
  disabled = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    disabled,
    ...props
  });
  return (0, import_jsx_runtime42.jsx)(Component2, {
    ...props,
    ...navItemProps,
    ref,
    disabled,
    className: (0, import_classnames28.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
var NavLink_default = NavLink;

// node_modules/react-bootstrap/esm/Nav.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var Nav2 = React48.forwardRef((uncontrolledProps, ref) => {
  const {
    as = "div",
    bsPrefix: initialBsPrefix,
    variant,
    fill = false,
    justify = false,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0, import_react37.useContext)(NavbarContext_default);
  const cardHeaderContext = (0, import_react37.useContext)(CardHeaderContext_default);
  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }
  return (0, import_jsx_runtime43.jsx)(Nav_default, {
    as,
    ref,
    activeKey,
    className: (0, import_classnames29.default)(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav2.displayName = "Nav";
var Nav_default2 = Object.assign(Nav2, {
  Item: NavItem_default2,
  Link: NavLink_default
});

// node_modules/react-bootstrap/esm/Navbar.js
var import_classnames35 = __toESM(require_classnames());
var React56 = __toESM(require_react());
var import_react44 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavbarBrand.js
var import_classnames30 = __toESM(require_classnames());
var React49 = __toESM(require_react());
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var NavbarBrand = React49.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-brand");
  const Component2 = as || (props.href ? "a" : "span");
  return (0, import_jsx_runtime44.jsx)(Component2, {
    ...props,
    ref,
    className: (0, import_classnames30.default)(className, bsPrefix)
  });
});
NavbarBrand.displayName = "NavbarBrand";
var NavbarBrand_default = NavbarBrand;

// node_modules/react-bootstrap/esm/NavbarCollapse.js
var React50 = __toESM(require_react());
var import_react38 = __toESM(require_react());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var NavbarCollapse = React50.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-collapse");
  const context6 = (0, import_react38.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime45.jsx)(Collapse_default, {
    in: !!(context6 && context6.expanded),
    ...props,
    children: (0, import_jsx_runtime45.jsx)("div", {
      ref,
      className: bsPrefix,
      children
    })
  });
});
NavbarCollapse.displayName = "NavbarCollapse";
var NavbarCollapse_default = NavbarCollapse;

// node_modules/react-bootstrap/esm/NavbarToggle.js
var import_classnames31 = __toESM(require_classnames());
var React51 = __toESM(require_react());
var import_react39 = __toESM(require_react());
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var NavbarToggle = React51.forwardRef(({
  bsPrefix,
  className,
  children,
  label = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "button",
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-toggler");
  const {
    onToggle,
    expanded
  } = (0, import_react39.useContext)(NavbarContext_default) || {};
  const handleClick = useEventCallback((e) => {
    if (onClick)
      onClick(e);
    if (onToggle)
      onToggle();
  });
  if (Component2 === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime46.jsx)(Component2, {
    ...props,
    ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, import_classnames31.default)(className, bsPrefix, !expanded && "collapsed"),
    children: children || (0, import_jsx_runtime46.jsx)("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = "NavbarToggle";
var NavbarToggle_default = NavbarToggle;

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var React55 = __toESM(require_react());
var import_react43 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_classnames34 = __toESM(require_classnames());

// node_modules/@restart/hooks/esm/useMediaQuery.js
var import_react40 = __toESM(require_react());
var matchersByWindow = /* @__PURE__ */ new WeakMap();
var getMatcher = (query, targetWindow) => {
  if (!query || !targetWindow)
    return void 0;
  const matchers = matchersByWindow.get(targetWindow) || /* @__PURE__ */ new Map();
  matchersByWindow.set(targetWindow, matchers);
  let mql = matchers.get(query);
  if (!mql) {
    mql = targetWindow.matchMedia(query);
    mql.refCount = 0;
    matchers.set(mql.media, mql);
  }
  return mql;
};
function useMediaQuery(query, targetWindow = typeof window === "undefined" ? void 0 : window) {
  const mql = getMatcher(query, targetWindow);
  const [matches, setMatches] = (0, import_react40.useState)(() => mql ? mql.matches : false);
  useIsomorphicEffect_default(() => {
    let mql2 = getMatcher(query, targetWindow);
    if (!mql2) {
      return setMatches(false);
    }
    let matchers = matchersByWindow.get(targetWindow);
    const handleChange = () => {
      setMatches(mql2.matches);
    };
    mql2.refCount++;
    mql2.addListener(handleChange);
    handleChange();
    return () => {
      mql2.removeListener(handleChange);
      mql2.refCount--;
      if (mql2.refCount <= 0) {
        matchers == null ? void 0 : matchers.delete(mql2.media);
      }
      mql2 = void 0;
    };
  }, [query]);
  return matches;
}

// node_modules/@restart/hooks/esm/useBreakpoint.js
var import_react41 = __toESM(require_react());
function createBreakpointHook(breakpointValues) {
  const names = Object.keys(breakpointValues);
  function and(query, next) {
    if (query === next) {
      return next;
    }
    return query ? `${query} and ${next}` : next;
  }
  function getNext(breakpoint) {
    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
  }
  function getMaxQuery(breakpoint) {
    const next = getNext(breakpoint);
    let value = breakpointValues[next];
    if (typeof value === "number")
      value = `${value - 0.2}px`;
    else
      value = `calc(${value} - 0.2px)`;
    return `(max-width: ${value})`;
  }
  function getMinQuery(breakpoint) {
    let value = breakpointValues[breakpoint];
    if (typeof value === "number") {
      value = `${value}px`;
    }
    return `(min-width: ${value})`;
  }
  function useBreakpoint2(breakpointOrMap, direction, window2) {
    let breakpointMap;
    if (typeof breakpointOrMap === "object") {
      breakpointMap = breakpointOrMap;
      window2 = direction;
      direction = true;
    } else {
      direction = direction || true;
      breakpointMap = {
        [breakpointOrMap]: direction
      };
    }
    let query = (0, import_react41.useMemo)(() => Object.entries(breakpointMap).reduce((query2, [key, direction2]) => {
      if (direction2 === "up" || direction2 === true) {
        query2 = and(query2, getMinQuery(key));
      }
      if (direction2 === "down" || direction2 === true) {
        query2 = and(query2, getMaxQuery(key));
      }
      return query2;
    }, ""), [JSON.stringify(breakpointMap)]);
    return useMediaQuery(query, window2);
  }
  return useBreakpoint2;
}
var useBreakpoint = createBreakpointHook({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
var useBreakpoint_default = useBreakpoint;

// node_modules/react-bootstrap/esm/Offcanvas.js
var React54 = __toESM(require_react());
var import_react42 = __toESM(require_react());

// node_modules/react-bootstrap/esm/OffcanvasBody.js
var OffcanvasBody_default = createWithBsPrefix("offcanvas-body");

// node_modules/react-bootstrap/esm/OffcanvasToggling.js
var import_classnames32 = __toESM(require_classnames());
var React52 = __toESM(require_react());
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var transitionStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
var OffcanvasToggling = React52.forwardRef(({
  bsPrefix,
  className,
  children,
  in: inProp = false,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  return (0, import_jsx_runtime47.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    in: inProp,
    mountOnEnter,
    unmountOnExit,
    appear,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => React52.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames32.default)(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.displayName = "OffcanvasToggling";
var OffcanvasToggling_default = OffcanvasToggling;

// node_modules/react-bootstrap/esm/OffcanvasHeader.js
var import_classnames33 = __toESM(require_classnames());
var React53 = __toESM(require_react());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var OffcanvasHeader = React53.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-header");
  return (0, import_jsx_runtime48.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames33.default)(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
OffcanvasHeader.displayName = "OffcanvasHeader";
var OffcanvasHeader_default = OffcanvasHeader;

// node_modules/react-bootstrap/esm/OffcanvasTitle.js
var DivStyledAsH52 = divWithClassName_default("h5");
var OffcanvasTitle_default = createWithBsPrefix("offcanvas-title", {
  Component: DivStyledAsH52
});

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
function DialogTransition(props) {
  return (0, import_jsx_runtime49.jsx)(OffcanvasToggling_default, {
    ...props
  });
}
function BackdropTransition(props) {
  return (0, import_jsx_runtime49.jsx)(Fade_default, {
    ...props
  });
}
var Offcanvas = React54.forwardRef(({
  bsPrefix,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
  placement = "start",
  responsive,
  /* BaseModal props */
  show = false,
  backdrop = true,
  keyboard = true,
  scroll = false,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  renderStaticNode = false,
  ...props
}, ref) => {
  const modalManager = (0, import_react42.useRef)();
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  const {
    onToggle
  } = (0, import_react42.useContext)(NavbarContext_default) || {};
  const [showOffcanvas, setShowOffcanvas] = (0, import_react42.useState)(false);
  const hideResponsiveOffcanvas = useBreakpoint_default(responsive || "xs", "up");
  (0, import_react42.useEffect)(() => {
    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
  }, [show, responsive, hideResponsiveOffcanvas]);
  const handleHide = useEventCallback(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0, import_react42.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    if (scroll) {
      if (!modalManager.current)
        modalManager.current = new BootstrapModalManager_default({
          handleContainerOverflow: false
        });
      return modalManager.current;
    }
    return getSharedManager();
  }
  const handleEnter = (node, ...args) => {
    if (node)
      node.style.visibility = "visible";
    onEnter == null ? void 0 : onEnter(node, ...args);
  };
  const handleExited = (node, ...args) => {
    if (node)
      node.style.visibility = "";
    onExited == null ? void 0 : onExited(...args);
  };
  const renderBackdrop = (0, import_react42.useCallback)((backdropProps) => (0, import_jsx_runtime49.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames34.default)(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);
  const renderDialog = (dialogProps) => (0, import_jsx_runtime49.jsx)("div", {
    ...dialogProps,
    ...props,
    className: (0, import_classnames34.default)(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children
  });
  return (0, import_jsx_runtime51.jsxs)(import_jsx_runtime50.Fragment, {
    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), (0, import_jsx_runtime49.jsx)(ModalContext_default.Provider, {
      value: modalContext,
      children: (0, import_jsx_runtime49.jsx)(Modal_default, {
        show: showOffcanvas,
        ref,
        backdrop,
        container,
        keyboard,
        autoFocus,
        enforceFocus: enforceFocus && !scroll,
        restoreFocus,
        restoreFocusOptions,
        onEscapeKeyDown,
        onShow,
        onHide: handleHide,
        onEnter: handleEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited: handleExited,
        manager: getModalManager(),
        transition: DialogTransition,
        backdropTransition: BackdropTransition,
        renderBackdrop,
        renderDialog
      })
    })]
  });
});
Offcanvas.displayName = "Offcanvas";
var Offcanvas_default = Object.assign(Offcanvas, {
  Body: OffcanvasBody_default,
  Header: OffcanvasHeader_default,
  Title: OffcanvasTitle_default
});

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var NavbarOffcanvas = React55.forwardRef((props, ref) => {
  const context6 = (0, import_react43.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime52.jsx)(Offcanvas_default, {
    ref,
    show: !!(context6 != null && context6.expanded),
    ...props,
    renderStaticNode: true
  });
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
var NavbarOffcanvas_default = NavbarOffcanvas;

// node_modules/react-bootstrap/esm/Navbar.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var NavbarText = createWithBsPrefix("navbar-text", {
  Component: "span"
});
var Navbar = React56.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand = true,
    variant = "light",
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "nav",
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect = false,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: "onToggle"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "navbar");
  const handleCollapse = (0, import_react44.useCallback)((...args) => {
    onSelect == null ? void 0 : onSelect(...args);
    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]);
  if (controlledProps.role === void 0 && Component2 !== "nav") {
    controlledProps.role = "navigation";
  }
  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === "string")
    expandClass = `${expandClass}-${expand}`;
  const navbarContext = (0, import_react44.useMemo)(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded,
    expand
  }), [bsPrefix, expanded, expand, onToggle]);
  return (0, import_jsx_runtime53.jsx)(NavbarContext_default.Provider, {
    value: navbarContext,
    children: (0, import_jsx_runtime53.jsx)(SelectableContext_default.Provider, {
      value: handleCollapse,
      children: (0, import_jsx_runtime53.jsx)(Component2, {
        ref,
        ...controlledProps,
        className: (0, import_classnames35.default)(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.displayName = "Navbar";
var Navbar_default = Object.assign(Navbar, {
  Brand: NavbarBrand_default,
  Collapse: NavbarCollapse_default,
  Offcanvas: NavbarOffcanvas_default,
  Text: NavbarText,
  Toggle: NavbarToggle_default
});

// node_modules/react-bootstrap/esm/NavDropdown.js
var import_classnames36 = __toESM(require_classnames());
var React57 = __toESM(require_react());
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var NavDropdown = React57.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  const navItemPrefix = useBootstrapPrefix(void 0, "nav-item");
  return (0, import_jsx_runtime55.jsxs)(Dropdown_default2, {
    ref,
    ...props,
    className: (0, import_classnames36.default)(className, navItemPrefix),
    children: [(0, import_jsx_runtime54.jsx)(Dropdown_default2.Toggle, {
      id,
      eventKey: null,
      active,
      disabled,
      childBsPrefix: bsPrefix,
      as: NavLink_default,
      children: title
    }), (0, import_jsx_runtime54.jsx)(Dropdown_default2.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent,
      variant: menuVariant,
      children
    })]
  });
});
NavDropdown.displayName = "NavDropdown";
var NavDropdown_default = Object.assign(NavDropdown, {
  Item: Dropdown_default2.Item,
  ItemText: Dropdown_default2.ItemText,
  Divider: Dropdown_default2.Divider,
  Header: Dropdown_default2.Header
});

// node_modules/react-bootstrap/esm/Overlay.js
var React62 = __toESM(require_react());
var import_react48 = __toESM(require_react());
var import_classnames39 = __toESM(require_classnames());

// node_modules/@restart/ui/esm/Overlay.js
var React58 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_react46 = __toESM(require_react());

// node_modules/@restart/ui/esm/useRootClose.js
var import_react45 = __toESM(require_react());
var noop5 = () => {
};
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger
} = {}) {
  const onClose = onRootClose || noop5;
  useClickOutside_default(ref, onClose, {
    disabled,
    clickTrigger
  });
  const handleKeyUp = useEventCallback((e) => {
    if (isEscKey(e)) {
      onClose(e);
    }
  });
  (0, import_react45.useEffect)(() => {
    if (disabled || ref == null)
      return void 0;
    const doc = ownerDocument(getRefTarget(ref));
    let currentEvent = (doc.defaultView || window).event;
    const removeKeyupListener = listen_default(doc, "keyup", (e) => {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    return () => {
      removeKeyupListener();
    };
  }, [ref, disabled, handleKeyUp]);
}
var useRootClose_default = useRootClose;

// node_modules/@restart/ui/esm/Overlay.js
var Overlay = React58.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition,
    runTransition
  } = props;
  const [rootElement, attachRef] = useCallbackRef();
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const mergedRef = useMergedRefs_default(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = (0, import_react46.useState)(!props.show);
  const popper = usePopper_default(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));
  if (props.show && exited) {
    setExited(false);
  }
  const handleHidden = (...args) => {
    setExited(true);
    if (props.onExited) {
      props.onExited(...args);
    }
  };
  const mountOverlay = props.show || !exited;
  useRootClose_default(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  const {
    onExit,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = props;
  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });
  child = renderTransition(Transition, runTransition, {
    in: !!props.show,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: child,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered
  });
  return container ? import_react_dom.default.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
var Overlay_default = Overlay;

// node_modules/react-bootstrap/esm/useOverlayOffset.js
var import_react47 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Popover.js
var import_classnames37 = __toESM(require_classnames());
var React60 = __toESM(require_react());

// node_modules/react-bootstrap/esm/PopoverHeader.js
var PopoverHeader_default = createWithBsPrefix("popover-header");

// node_modules/react-bootstrap/esm/PopoverBody.js
var PopoverBody_default = createWithBsPrefix("popover-body");

// node_modules/react-bootstrap/esm/helpers.js
var React59 = __toESM(require_react());
function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;
  if (placement === "left") {
    bsDirection = isRTL ? "end" : "start";
  } else if (placement === "right") {
    bsDirection = isRTL ? "start" : "end";
  }
  return bsDirection;
}

// node_modules/react-bootstrap/esm/getInitialPopperStyles.js
function getInitialPopperStyles(position = "absolute") {
  return {
    position,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}

// node_modules/react-bootstrap/esm/Popover.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var Popover = React60.forwardRef(({
  bsPrefix,
  placement = "right",
  className,
  style,
  children,
  body,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "popover");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return (0, import_jsx_runtime57.jsxs)("div", {
    ref,
    role: "tooltip",
    style: computedStyle,
    "x-placement": primaryPlacement,
    className: (0, import_classnames37.default)(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [(0, import_jsx_runtime56.jsx)("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? (0, import_jsx_runtime56.jsx)(PopoverBody_default, {
      children
    }) : children]
  });
});
var Popover_default = Object.assign(Popover, {
  Header: PopoverHeader_default,
  Body: PopoverBody_default,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
});

// node_modules/react-bootstrap/esm/Tooltip.js
var import_classnames38 = __toESM(require_classnames());
var React61 = __toESM(require_react());
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var Tooltip = React61.forwardRef(({
  bsPrefix,
  placement = "right",
  className,
  style,
  children,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tooltip");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return (0, import_jsx_runtime59.jsxs)("div", {
    ref,
    style: computedStyle,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, import_classnames38.default)(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [(0, import_jsx_runtime58.jsx)("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), (0, import_jsx_runtime58.jsx)("div", {
      className: `${bsPrefix}-inner`,
      children
    })]
  });
});
Tooltip.displayName = "Tooltip";
var Tooltip_default = Object.assign(Tooltip, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
});

// node_modules/react-bootstrap/esm/useOverlayOffset.js
function useOverlayOffset(customOffset) {
  const overlayRef = (0, import_react47.useRef)(null);
  const popoverClass = useBootstrapPrefix(void 0, "popover");
  const tooltipClass = useBootstrapPrefix(void 0, "tooltip");
  const offset = (0, import_react47.useMemo)(() => ({
    name: "offset",
    options: {
      offset: () => {
        if (customOffset) {
          return customOffset;
        }
        if (overlayRef.current) {
          if (hasClass(overlayRef.current, popoverClass)) {
            return Popover_default.POPPER_OFFSET;
          }
          if (hasClass(overlayRef.current, tooltipClass)) {
            return Tooltip_default.TOOLTIP_OFFSET;
          }
        }
        return [0, 0];
      }
    }
  }), [customOffset, popoverClass, tooltipClass]);
  return [overlayRef, [offset]];
}

// node_modules/react-bootstrap/esm/Overlay.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;
  props.ref = ref.__wrapped || (ref.__wrapped = (r) => ref(safeFindDOMNode(r)));
  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = (r) => aRef(safeFindDOMNode(r)));
}
var Overlay2 = React62.forwardRef(({
  children: overlay,
  transition = Fade_default,
  popperConfig = {},
  rootClose = false,
  placement = "top",
  show: outerShow = false,
  ...outerProps
}, outerRef) => {
  const popperRef = (0, import_react48.useRef)({});
  const [firstRenderedState, setFirstRenderedState] = (0, import_react48.useState)(null);
  const [ref, modifiers] = useOverlayOffset(outerProps.offset);
  const mergedRef = useMergedRefs_default(outerRef, ref);
  const actualTransition = transition === true ? Fade_default : transition || void 0;
  const handleFirstUpdate = useEventCallback((state) => {
    setFirstRenderedState(state);
    popperConfig == null ? void 0 : popperConfig.onFirstUpdate == null ? void 0 : popperConfig.onFirstUpdate(state);
  });
  useIsomorphicEffect_default(() => {
    if (firstRenderedState) {
      popperRef.current.scheduleUpdate == null ? void 0 : popperRef.current.scheduleUpdate();
    }
  }, [firstRenderedState]);
  (0, import_react48.useEffect)(() => {
    if (!outerShow) {
      setFirstRenderedState(null);
    }
  }, [outerShow]);
  return (0, import_jsx_runtime60.jsx)(Overlay_default, {
    ...outerProps,
    ref: mergedRef,
    popperConfig: {
      ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || []),
      onFirstUpdate: handleFirstUpdate
    },
    transition: actualTransition,
    rootClose,
    placement,
    show: outerShow,
    children: (overlayProps, {
      arrowProps,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;
      wrapRefs(overlayProps, arrowProps);
      const updatedPlacement = popperObj == null ? void 0 : popperObj.placement;
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement: updatedPlacement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false,
        strategy: popperConfig.strategy
      });
      const hasDoneInitialMeasure = !!firstRenderedState;
      if (typeof overlay === "function")
        return overlay({
          ...overlayProps,
          placement: updatedPlacement,
          show,
          ...!transition && show && {
            className: "show"
          },
          popper,
          arrowProps,
          hasDoneInitialMeasure
        });
      return React62.cloneElement(overlay, {
        ...overlayProps,
        placement: updatedPlacement,
        arrowProps,
        popper,
        hasDoneInitialMeasure,
        className: (0, import_classnames39.default)(overlay.props.className, !transition && show && "show"),
        style: {
          ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay2.displayName = "Overlay";
var Overlay_default2 = Overlay2;

// node_modules/react-bootstrap/esm/OverlayTrigger.js
var React63 = __toESM(require_react());
var import_react49 = __toESM(require_react());
var import_warning5 = __toESM(require_warning());
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
function normalizeDelay(delay) {
  return delay && typeof delay === "object" ? delay : {
    show: delay,
    hide: delay
  };
}
function handleMouseOverOut(handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];
  if ((!related || related !== target) && !contains(target, related)) {
    handler(...args);
  }
}
function OverlayTrigger({
  trigger = ["hover", "focus"],
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf("auto") !== -1,
  ...props
}) {
  const triggerNodeRef = (0, import_react49.useRef)(null);
  const mergedRef = useMergedRefs_default(triggerNodeRef, children.ref);
  const timeout = useTimeout();
  const hoverStateRef = (0, import_react49.useRef)("");
  const [show, setShow] = useUncontrolledProp(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== "function" ? React63.Children.only(children).props : {};
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const handleShow = (0, import_react49.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = "show";
    if (!delay.show) {
      setShow(true);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "show")
        setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = (0, import_react49.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = "hide";
    if (!delay.hide) {
      setShow(false);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === "hide")
        setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = (0, import_react49.useCallback)((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = (0, import_react49.useCallback)((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = (0, import_react49.useCallback)((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = (0, import_react49.useCallback)((...args) => {
    handleMouseOverOut(handleShow, args, "fromElement");
  }, [handleShow]);
  const handleMouseOut = (0, import_react49.useCallback)((...args) => {
    handleMouseOverOut(handleHide, args, "toElement");
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };
  if (triggers.indexOf("click") !== -1) {
    triggerProps.onClick = handleClick;
  }
  if (triggers.indexOf("focus") !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }
  if (triggers.indexOf("hover") !== -1) {
    true ? (0, import_warning5.default)(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }
  return (0, import_jsx_runtime63.jsxs)(import_jsx_runtime62.Fragment, {
    children: [typeof children === "function" ? children(triggerProps) : (0, import_react49.cloneElement)(children, triggerProps), (0, import_jsx_runtime61.jsx)(Overlay_default2, {
      ...props,
      show,
      onHide: handleHide,
      flip,
      placement,
      popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
}
var OverlayTrigger_default = OverlayTrigger;

// node_modules/react-bootstrap/esm/PageItem.js
var import_classnames40 = __toESM(require_classnames());
var React64 = __toESM(require_react());
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var PageItem = React64.forwardRef(({
  active = false,
  disabled = false,
  className,
  style,
  activeLabel = "(current)",
  children,
  linkStyle,
  linkClassName,
  ...props
}, ref) => {
  const Component2 = active || disabled ? "span" : Anchor_default;
  return (0, import_jsx_runtime64.jsx)("li", {
    ref,
    style,
    className: (0, import_classnames40.default)(className, "page-item", {
      active,
      disabled
    }),
    children: (0, import_jsx_runtime65.jsxs)(Component2, {
      className: (0, import_classnames40.default)("page-link", linkClassName),
      style: linkStyle,
      ...props,
      children: [children, active && activeLabel && (0, import_jsx_runtime64.jsx)("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.displayName = "PageItem";
var PageItem_default = PageItem;
function createButton(name, defaultValue, label = name) {
  const Button = React64.forwardRef(({
    children,
    ...props
  }, ref) => (0, import_jsx_runtime65.jsxs)(PageItem, {
    ...props,
    ref,
    children: [(0, import_jsx_runtime64.jsx)("span", {
      "aria-hidden": "true",
      children: children || defaultValue
    }), (0, import_jsx_runtime64.jsx)("span", {
      className: "visually-hidden",
      children: label
    })]
  }));
  Button.displayName = name;
  return Button;
}
var First = createButton("First", "«");
var Prev = createButton("Prev", "‹", "Previous");
var Ellipsis = createButton("Ellipsis", "…", "More");
var Next = createButton("Next", "›");
var Last = createButton("Last", "»");

// node_modules/react-bootstrap/esm/Pagination.js
var import_classnames41 = __toESM(require_classnames());
var React65 = __toESM(require_react());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var Pagination = React65.forwardRef(({
  bsPrefix,
  className,
  size,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "pagination");
  return (0, import_jsx_runtime66.jsx)("ul", {
    ref,
    ...props,
    className: (0, import_classnames41.default)(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
  });
});
Pagination.displayName = "Pagination";
var Pagination_default = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem_default,
  Next,
  Last
});

// node_modules/react-bootstrap/esm/Placeholder.js
var React67 = __toESM(require_react());

// node_modules/react-bootstrap/esm/usePlaceholder.js
var import_classnames42 = __toESM(require_classnames());
function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "placeholder");
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return {
    ...colProps,
    className: (0, import_classnames42.default)(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)
  };
}

// node_modules/react-bootstrap/esm/PlaceholderButton.js
var React66 = __toESM(require_react());
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var PlaceholderButton = React66.forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime67.jsx)(Button_default2, {
    ...placeholderProps,
    ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = "PlaceholderButton";
var PlaceholderButton_default = PlaceholderButton;

// node_modules/react-bootstrap/esm/Placeholder.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var Placeholder = React67.forwardRef(({
  as: Component2 = "span",
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime68.jsx)(Component2, {
    ...placeholderProps,
    ref
  });
});
Placeholder.displayName = "Placeholder";
var Placeholder_default = Object.assign(Placeholder, {
  Button: PlaceholderButton_default
});

// node_modules/react-bootstrap/esm/ProgressBar.js
var import_classnames43 = __toESM(require_classnames());
var React68 = __toESM(require_react());
var import_react50 = __toESM(require_react());
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var ROUND_PRECISION = 1e3;
function getPercentage(now, min, max) {
  const percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
function renderProgressBar({
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  className,
  style,
  variant,
  bsPrefix,
  ...props
}, ref) {
  return (0, import_jsx_runtime69.jsx)("div", {
    ref,
    ...props,
    role: "progressbar",
    className: (0, import_classnames43.default)(className, `${bsPrefix}-bar`, {
      [`bg-${variant}`]: variant,
      [`${bsPrefix}-bar-animated`]: animated,
      [`${bsPrefix}-bar-striped`]: animated || striped
    }),
    style: {
      width: `${getPercentage(now, min, max)}%`,
      ...style
    },
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max,
    children: visuallyHidden ? (0, import_jsx_runtime69.jsx)("span", {
      className: "visually-hidden",
      children: label
    }) : label
  });
}
var ProgressBar = React68.forwardRef(({
  isChild = false,
  ...rest
}, ref) => {
  const props = {
    min: 0,
    max: 100,
    animated: false,
    visuallyHidden: false,
    striped: false,
    ...rest
  };
  props.bsPrefix = useBootstrapPrefix(props.bsPrefix, "progress");
  if (isChild) {
    return renderProgressBar(props, ref);
  }
  const {
    min,
    now,
    max,
    label,
    visuallyHidden,
    striped,
    animated,
    bsPrefix,
    variant,
    className,
    children,
    ...wrapperProps
  } = props;
  return (0, import_jsx_runtime69.jsx)("div", {
    ref,
    ...wrapperProps,
    className: (0, import_classnames43.default)(className, bsPrefix),
    children: children ? map(children, (child) => (0, import_react50.cloneElement)(child, {
      isChild: true
    })) : renderProgressBar({
      min,
      now,
      max,
      label,
      visuallyHidden,
      striped,
      animated,
      bsPrefix,
      variant
    }, ref)
  });
});
ProgressBar.displayName = "ProgressBar";
var ProgressBar_default = ProgressBar;

// node_modules/react-bootstrap/esm/Ratio.js
var import_classnames44 = __toESM(require_classnames());
var React69 = __toESM(require_react());
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
function toPercent(num) {
  if (num <= 0)
    return "100%";
  if (num < 1)
    return `${num * 100}%`;
  return `${num}%`;
}
var Ratio = React69.forwardRef(({
  bsPrefix,
  className,
  children,
  aspectRatio = "1x1",
  style,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "ratio");
  const isCustomRatio = typeof aspectRatio === "number";
  return (0, import_jsx_runtime70.jsx)("div", {
    ref,
    ...props,
    style: {
      ...style,
      ...isCustomRatio && {
        "--bs-aspect-ratio": toPercent(aspectRatio)
      }
    },
    className: (0, import_classnames44.default)(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
    children: React69.Children.only(children)
  });
});
var Ratio_default = Ratio;

// node_modules/react-bootstrap/esm/Spinner.js
var import_classnames45 = __toESM(require_classnames());
var React70 = __toESM(require_react());
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var Spinner = React70.forwardRef(({
  bsPrefix,
  variant,
  animation = "border",
  size,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "spinner");
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return (0, import_jsx_runtime71.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames45.default)(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = "Spinner";
var Spinner_default = Spinner;

// node_modules/react-bootstrap/esm/SplitButton.js
var React71 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var propTypes3 = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   * @required
   */
  id: import_prop_types4.default.string,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: import_prop_types4.default.string,
  /** An `href` passed to the non-toggle Button */
  href: import_prop_types4.default.string,
  /** An anchor `target` passed to the non-toggle Button */
  target: import_prop_types4.default.string,
  /** An `onClick` handler passed to the non-toggle Button */
  onClick: import_prop_types4.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types4.default.node.isRequired,
  /** A `type` passed to the non-toggle Button */
  type: import_prop_types4.default.string,
  /** Disables both Buttons  */
  disabled: import_prop_types4.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types4.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types4.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types4.default.string,
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types4.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types4.default.string,
  /** @ignore */
  variant: import_prop_types4.default.string,
  /** @ignore */
  size: import_prop_types4.default.string
};
var SplitButton = React71.forwardRef(({
  id,
  bsPrefix,
  size,
  variant,
  title,
  type = "button",
  toggleLabel = "Toggle dropdown",
  children,
  onClick,
  href,
  target,
  menuRole,
  renderMenuOnMount,
  rootCloseEvent,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime73.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  as: ButtonGroup_default,
  children: [(0, import_jsx_runtime72.jsx)(Button_default2, {
    size,
    variant,
    disabled: props.disabled,
    bsPrefix,
    href,
    target,
    onClick,
    type,
    children: title
  }), (0, import_jsx_runtime72.jsx)(Dropdown_default2.Toggle, {
    split: true,
    id,
    size,
    variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix,
    children: (0, import_jsx_runtime72.jsx)("span", {
      className: "visually-hidden",
      children: toggleLabel
    })
  }), (0, import_jsx_runtime72.jsx)(Dropdown_default2.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    flip,
    children
  })]
}));
SplitButton.propTypes = propTypes3;
SplitButton.displayName = "SplitButton";
var SplitButton_default = SplitButton;

// node_modules/react-bootstrap/esm/SSRProvider.js
var SSRProvider_default = $b5e257d569688ac6$export$9f8ac96af4b1b2ae;

// node_modules/react-bootstrap/esm/Stack.js
var import_classnames46 = __toESM(require_classnames());
var React72 = __toESM(require_react());

// node_modules/react-bootstrap/esm/createUtilityClasses.js
var import_prop_types5 = __toESM(require_prop_types());
function createUtilityClassName(utilityValues, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = DEFAULT_MIN_BREAKPOINT) {
  const classes = [];
  Object.entries(utilityValues).forEach(([utilName, utilValue]) => {
    if (utilValue != null) {
      if (typeof utilValue === "object") {
        breakpoints.forEach((brkPoint) => {
          const bpValue = utilValue[brkPoint];
          if (bpValue != null) {
            const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
            classes.push(`${utilName}${infix}-${bpValue}`);
          }
        });
      } else {
        classes.push(`${utilName}-${utilValue}`);
      }
    }
  });
  return classes;
}

// node_modules/react-bootstrap/esm/Stack.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var Stack = React72.forwardRef(({
  as: Component2 = "div",
  bsPrefix,
  className,
  direction,
  gap,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, direction === "horizontal" ? "hstack" : "vstack");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  return (0, import_jsx_runtime74.jsx)(Component2, {
    ...props,
    ref,
    className: (0, import_classnames46.default)(className, bsPrefix, ...createUtilityClassName({
      gap
    }, breakpoints, minBreakpoint))
  });
});
Stack.displayName = "Stack";
var Stack_default = Stack;

// node_modules/react-bootstrap/esm/Tab.js
var import_prop_types6 = __toESM(require_prop_types());
var React77 = __toESM(require_react());

// node_modules/react-bootstrap/esm/TabContainer.js
var React75 = __toESM(require_react());

// node_modules/@restart/ui/esm/Tabs.js
var React74 = __toESM(require_react());
var import_react52 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabPanel.js
var React73 = __toESM(require_react());
var import_react51 = __toESM(require_react());
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var _excluded7 = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var _excluded22 = ["activeKey", "getControlledId", "getControllerId"];
var _excluded32 = ["as"];
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = "tabpanel",
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref, props = _objectWithoutPropertiesLoose8(_ref, _excluded7);
  const context6 = (0, import_react51.useContext)(TabContext_default);
  if (!context6)
    return [Object.assign({}, props, {
      role
    }), {
      eventKey,
      isActive: active,
      mountOnEnter,
      transition,
      unmountOnExit,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    }];
  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context6, rest = _objectWithoutPropertiesLoose8(context6, _excluded22);
  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    "aria-labelledby": getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
var TabPanel = React73.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (_ref2, ref) => {
    let {
      as: Component2 = "div"
    } = _ref2, props = _objectWithoutPropertiesLoose8(_ref2, _excluded32);
    const [tabPanelProps, {
      isActive,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      mountOnEnter,
      unmountOnExit,
      transition: Transition = NoopTransition_default
    }] = useTabPanel(props);
    return (0, import_jsx_runtime75.jsx)(TabContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime75.jsx)(SelectableContext_default.Provider, {
        value: null,
        children: (0, import_jsx_runtime75.jsx)(Transition, {
          in: isActive,
          onEnter,
          onEntering,
          onEntered,
          onExit,
          onExiting,
          onExited,
          mountOnEnter,
          unmountOnExit,
          children: (0, import_jsx_runtime75.jsx)(Component2, Object.assign({}, tabPanelProps, {
            ref,
            hidden: !isActive,
            "aria-hidden": !isActive
          }))
        })
      })
    });
  }
);
TabPanel.displayName = "TabPanel";
var TabPanel_default = TabPanel;

// node_modules/@restart/ui/esm/Tabs.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var Tabs = (props) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp2(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $b5e257d569688ac6$export$619500959fc48b26(userId);
  const generateChildId = (0, import_react52.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0, import_react52.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: (key) => generateChildId(key, "tabpane"),
    getControllerId: (key) => generateChildId(key, "tab")
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return (0, import_jsx_runtime76.jsx)(TabContext_default.Provider, {
    value: tabContext,
    children: (0, import_jsx_runtime76.jsx)(SelectableContext_default.Provider, {
      value: onSelect || null,
      children
    })
  });
};
Tabs.Panel = TabPanel_default;
var Tabs_default = Tabs;

// node_modules/react-bootstrap/esm/getTabTransitionComponent.js
function getTabTransitionComponent(transition) {
  if (typeof transition === "boolean") {
    return transition ? Fade_default : NoopTransition_default;
  }
  return transition;
}

// node_modules/react-bootstrap/esm/TabContainer.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime());
var TabContainer = ({
  transition,
  ...props
}) => (0, import_jsx_runtime77.jsx)(Tabs_default, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
var TabContainer_default = TabContainer;

// node_modules/react-bootstrap/esm/TabContent.js
var TabContent_default = createWithBsPrefix("tab-content");

// node_modules/react-bootstrap/esm/TabPane.js
var import_classnames47 = __toESM(require_classnames());
var React76 = __toESM(require_react());
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var TabPane = React76.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component2 = "div",
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = Fade_default
  }] = useTabPanel({
    ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, "tab-pane");
  return (0, import_jsx_runtime78.jsx)(TabContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime78.jsx)(SelectableContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime78.jsx)(Transition, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: (0, import_jsx_runtime78.jsx)(Component2, {
          ...rest,
          ref,
          className: (0, import_classnames47.default)(className, prefix, isActive && "active")
        })
      })
    })
  });
});
TabPane.displayName = "TabPane";
var TabPane_default = TabPane;

// node_modules/react-bootstrap/esm/Tab.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var import_jsx_runtime80 = __toESM(require_jsx_runtime());
var propTypes4 = {
  eventKey: import_prop_types6.default.oneOfType([import_prop_types6.default.string, import_prop_types6.default.number]),
  /**
   * Content for the tab title.
   */
  title: import_prop_types6.default.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: import_prop_types6.default.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: import_prop_types6.default.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: import_prop_types6.default.object
};
var Tab = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
  return (0, import_jsx_runtime80.jsx)(import_jsx_runtime79.Fragment, {});
};
Tab.propTypes = propTypes4;
var Tab_default = Object.assign(Tab, {
  Container: TabContainer_default,
  Content: TabContent_default,
  Pane: TabPane_default
});

// node_modules/react-bootstrap/esm/Table.js
var import_classnames48 = __toESM(require_classnames());
var React78 = __toESM(require_react());
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var Table = React78.forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "table");
  const classes = (0, import_classnames48.default)(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-${typeof striped === "string" ? `striped-${striped}` : "striped"}`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);
  const table = (0, import_jsx_runtime81.jsx)("table", {
    ...props,
    className: classes,
    ref
  });
  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;
    if (typeof responsive === "string") {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }
    return (0, import_jsx_runtime81.jsx)("div", {
      className: responsiveClass,
      children: table
    });
  }
  return table;
});
var Table_default = Table;

// node_modules/react-bootstrap/esm/Tabs.js
var React79 = __toESM(require_react());
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var import_jsx_runtime83 = __toESM(require_jsx_runtime());
function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, (child) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}
function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    tabAttrs,
    id
  } = child.props;
  if (title == null) {
    return null;
  }
  return (0, import_jsx_runtime82.jsx)(NavItem_default2, {
    as: "li",
    role: "presentation",
    children: (0, import_jsx_runtime82.jsx)(NavLink_default, {
      as: "button",
      type: "button",
      eventKey,
      disabled,
      id,
      className: tabClassName,
      ...tabAttrs,
      children: title
    })
  });
}
var Tabs2 = (props) => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter = false,
    unmountOnExit = false,
    variant = "tabs",
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  return (0, import_jsx_runtime83.jsxs)(Tabs_default, {
    id,
    activeKey,
    onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter,
    unmountOnExit,
    children: [(0, import_jsx_runtime82.jsx)(Nav_default2, {
      ...controlledProps,
      role: "tablist",
      as: "ul",
      variant,
      children: map(children, renderTab)
    }), (0, import_jsx_runtime82.jsx)(TabContent_default, {
      children: map(children, (child) => {
        const childProps = {
          ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        delete childProps.tabAttrs;
        return (0, import_jsx_runtime82.jsx)(TabPane_default, {
          ...childProps
        });
      })
    })]
  });
};
Tabs2.displayName = "Tabs";
var Tabs_default2 = Tabs2;

// node_modules/react-bootstrap/esm/Toast.js
var React83 = __toESM(require_react());
var import_react54 = __toESM(require_react());
var import_classnames50 = __toESM(require_classnames());

// node_modules/react-bootstrap/esm/ToastFade.js
var React80 = __toESM(require_react());
var import_jsx_runtime84 = __toESM(require_jsx_runtime());
var fadeStyles = {
  [ENTERING]: "showing",
  [EXITING]: "showing show"
};
var ToastFade = React80.forwardRef((props, ref) => (0, import_jsx_runtime84.jsx)(Fade_default, {
  ...props,
  ref,
  transitionClasses: fadeStyles
}));
ToastFade.displayName = "ToastFade";
var ToastFade_default = ToastFade;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_classnames49 = __toESM(require_classnames());
var React82 = __toESM(require_react());
var import_react53 = __toESM(require_react());

// node_modules/react-bootstrap/esm/ToastContext.js
var React81 = __toESM(require_react());
var ToastContext = React81.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {
  }
});
var ToastContext_default = ToastContext;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_jsx_runtime85 = __toESM(require_jsx_runtime());
var import_jsx_runtime86 = __toESM(require_jsx_runtime());
var ToastHeader = React82.forwardRef(({
  bsPrefix,
  closeLabel = "Close",
  closeVariant,
  closeButton = true,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-header");
  const context6 = (0, import_react53.useContext)(ToastContext_default);
  const handleClick = useEventCallback((e) => {
    context6 == null ? void 0 : context6.onClose == null ? void 0 : context6.onClose(e);
  });
  return (0, import_jsx_runtime86.jsxs)("div", {
    ref,
    ...props,
    className: (0, import_classnames49.default)(bsPrefix, className),
    children: [children, closeButton && (0, import_jsx_runtime85.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = "ToastHeader";
var ToastHeader_default = ToastHeader;

// node_modules/react-bootstrap/esm/ToastBody.js
var ToastBody_default = createWithBsPrefix("toast-body");

// node_modules/react-bootstrap/esm/Toast.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime());
var Toast = React83.forwardRef(({
  bsPrefix,
  className,
  transition: Transition = ToastFade_default,
  show = true,
  animation = true,
  delay = 5e3,
  autohide = false,
  onClose,
  bg,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast");
  const delayRef = (0, import_react54.useRef)(delay);
  const onCloseRef = (0, import_react54.useRef)(onClose);
  (0, import_react54.useEffect)(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = useTimeout();
  const autohideToast = !!(autohide && show);
  const autohideFunc = (0, import_react54.useCallback)(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0, import_react54.useEffect)(() => {
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = (0, import_react54.useMemo)(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition && animation);
  const toast = (0, import_jsx_runtime87.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames50.default)(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return (0, import_jsx_runtime87.jsx)(ToastContext_default.Provider, {
    value: toastContext,
    children: hasAnimation && Transition ? (0, import_jsx_runtime87.jsx)(Transition, {
      in: show,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = "Toast";
var Toast_default = Object.assign(Toast, {
  Body: ToastBody_default,
  Header: ToastHeader_default
});

// node_modules/react-bootstrap/esm/ToastContainer.js
var import_classnames51 = __toESM(require_classnames());
var React84 = __toESM(require_react());
var import_jsx_runtime88 = __toESM(require_jsx_runtime());
var positionClasses = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0"
};
var ToastContainer = React84.forwardRef(({
  bsPrefix,
  position,
  containerPosition,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component2 = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-container");
  return (0, import_jsx_runtime88.jsx)(Component2, {
    ref,
    ...props,
    className: (0, import_classnames51.default)(bsPrefix, position && positionClasses[position], containerPosition && `position-${containerPosition}`, className)
  });
});
ToastContainer.displayName = "ToastContainer";
var ToastContainer_default = ToastContainer;

// node_modules/react-bootstrap/esm/ToggleButton.js
var import_classnames52 = __toESM(require_classnames());
var React85 = __toESM(require_react());
var import_jsx_runtime89 = __toESM(require_jsx_runtime());
var import_jsx_runtime90 = __toESM(require_jsx_runtime());
var import_jsx_runtime91 = __toESM(require_jsx_runtime());
var noop6 = () => void 0;
var ToggleButton = React85.forwardRef(({
  bsPrefix,
  name,
  className,
  checked,
  type,
  onChange,
  value,
  disabled,
  id,
  inputRef,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "btn-check");
  return (0, import_jsx_runtime91.jsxs)(import_jsx_runtime90.Fragment, {
    children: [(0, import_jsx_runtime89.jsx)("input", {
      className: bsPrefix,
      name,
      type,
      value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange || noop6,
      id
    }), (0, import_jsx_runtime89.jsx)(Button_default2, {
      ...props,
      ref,
      className: (0, import_classnames52.default)(className, disabled && "disabled"),
      type: void 0,
      role: void 0,
      as: "label",
      htmlFor: id
    })]
  });
});
ToggleButton.displayName = "ToggleButton";
var ToggleButton_default = ToggleButton;

// node_modules/react-bootstrap/esm/ToggleButtonGroup.js
var React86 = __toESM(require_react());
var import_invariant4 = __toESM(require_browser());
var import_jsx_runtime92 = __toESM(require_jsx_runtime());
var ToggleButtonGroup = React86.forwardRef((props, ref) => {
  const {
    children,
    type = "radio",
    name,
    value,
    onChange,
    vertical = false,
    ...controlledProps
  } = useUncontrolled(props, {
    value: "onChange"
  });
  const getValues = () => value == null ? [] : [].concat(value);
  const handleToggle = (inputVal, event) => {
    if (!onChange) {
      return;
    }
    const values = getValues();
    const isActive = values.indexOf(inputVal) !== -1;
    if (type === "radio") {
      if (!isActive)
        onChange(inputVal, event);
      return;
    }
    if (isActive) {
      onChange(values.filter((n) => n !== inputVal), event);
    } else {
      onChange([...values, inputVal], event);
    }
  };
  !(type !== "radio" || !!name) ? true ? (0, import_invariant4.default)(false, 'A `name` is required to group the toggle buttons when the `type` is set to "radio"') : (0, import_invariant4.default)(false) : void 0;
  return (0, import_jsx_runtime92.jsx)(ButtonGroup_default, {
    ...controlledProps,
    ref,
    vertical,
    children: map(children, (child) => {
      const values = getValues();
      const {
        value: childVal,
        onChange: childOnChange
      } = child.props;
      const handler = (e) => handleToggle(childVal, e);
      return React86.cloneElement(child, {
        type,
        name: child.name || name,
        checked: values.indexOf(childVal) !== -1,
        onChange: createChainedFunction_default(childOnChange, handler)
      });
    })
  });
});
var ToggleButtonGroup_default = Object.assign(ToggleButtonGroup, {
  Button: ToggleButton_default
});
export {
  Accordion_default as Accordion,
  AccordionButton_default as AccordionButton,
  AccordionCollapse_default as AccordionCollapse,
  AccordionContext_default as AccordionContext,
  Alert_default as Alert,
  Anchor_default2 as Anchor,
  Badge_default as Badge,
  Breadcrumb_default as Breadcrumb,
  BreadcrumbItem_default as BreadcrumbItem,
  Button_default2 as Button,
  ButtonGroup_default as ButtonGroup,
  ButtonToolbar_default as ButtonToolbar,
  Card_default as Card,
  CardGroup_default as CardGroup,
  CardImg_default as CardImg,
  Carousel_default as Carousel,
  CarouselItem_default as CarouselItem,
  CloseButton_default as CloseButton,
  Col_default as Col,
  Collapse_default as Collapse,
  Container_default as Container,
  Dropdown_default2 as Dropdown,
  DropdownButton_default as DropdownButton,
  Fade_default as Fade,
  Figure_default as Figure,
  FloatingLabel_default as FloatingLabel,
  Form_default as Form,
  FormCheck_default as FormCheck,
  FormControl_default as FormControl,
  FormFloating_default as FormFloating,
  FormGroup_default as FormGroup,
  FormLabel_default as FormLabel,
  FormSelect_default as FormSelect,
  FormText_default as FormText,
  Image_default as Image,
  InputGroup_default as InputGroup,
  ListGroup_default as ListGroup,
  ListGroupItem_default as ListGroupItem,
  Modal_default2 as Modal,
  ModalBody_default as ModalBody,
  ModalDialog_default as ModalDialog,
  ModalFooter_default as ModalFooter,
  ModalHeader_default as ModalHeader,
  ModalTitle_default as ModalTitle,
  Nav_default2 as Nav,
  NavDropdown_default as NavDropdown,
  NavItem_default2 as NavItem,
  NavLink_default as NavLink,
  Navbar_default as Navbar,
  NavbarBrand_default as NavbarBrand,
  Offcanvas_default as Offcanvas,
  OffcanvasBody_default as OffcanvasBody,
  OffcanvasHeader_default as OffcanvasHeader,
  OffcanvasTitle_default as OffcanvasTitle,
  Overlay_default2 as Overlay,
  OverlayTrigger_default as OverlayTrigger,
  PageItem_default as PageItem,
  Pagination_default as Pagination,
  Placeholder_default as Placeholder,
  PlaceholderButton_default as PlaceholderButton,
  Popover_default as Popover,
  PopoverBody_default as PopoverBody,
  PopoverHeader_default as PopoverHeader,
  ProgressBar_default as ProgressBar,
  Ratio_default as Ratio,
  Row_default as Row,
  SSRProvider_default as SSRProvider,
  Spinner_default as Spinner,
  SplitButton_default as SplitButton,
  Stack_default as Stack,
  Tab_default as Tab,
  TabContainer_default as TabContainer,
  TabContent_default as TabContent,
  TabPane_default as TabPane,
  Table_default as Table,
  Tabs_default2 as Tabs,
  ThemeProvider_default as ThemeProvider,
  Toast_default as Toast,
  ToastBody_default as ToastBody,
  ToastContainer_default as ToastContainer,
  ToastHeader_default as ToastHeader,
  ToggleButton_default as ToggleButton,
  ToggleButtonGroup_default as ToggleButtonGroup,
  Tooltip_default as Tooltip,
  useAccordionButton
};
//# sourceMappingURL=react-bootstrap.js.map
