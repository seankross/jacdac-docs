(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5023],{

/***/ 52353:
/***/ (function(module) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

module.exports = bytesToUuid;

/***/ }),

/***/ 30237:
/***/ (function(module) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/***/ }),

/***/ 19056:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var rng = __webpack_require__(30237);

var bytesToUuid = __webpack_require__(52353);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

/***/ }),

/***/ 49383:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AccelerometerTheremin; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(31690);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(69817);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js + 1 modules
var RadioGroup = __webpack_require__(92206);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(48086);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Radio/Radio.js + 4 modules
var Radio = __webpack_require__(87198);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
// EXTERNAL MODULE: ./src/components/hooks/usePlayTone.tsx
var usePlayTone = __webpack_require__(2058);
// EXTERNAL MODULE: ./src/components/dashboard/Dashboard.tsx + 3 modules
var Dashboard = __webpack_require__(65063);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/modules/MessageBlock.js

var offScreenStyle = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  padding: 0,
  width: '1px',
  position: 'absolute'
};

var MessageBlock = function MessageBlock(_ref) {
  var message = _ref.message,
      ariaLive = _ref['aria-live'];
  return react.createElement('div', {
    style: offScreenStyle,
    role: 'log',
    'aria-live': ariaLive
  }, message ? message : '');
};

/* harmony default export */ var modules_MessageBlock = (MessageBlock);
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/modules/Announcer.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}




var Announcer = function (_Component) {
  _inherits(Announcer, _Component);

  function Announcer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Announcer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      assertiveMessage1: '',
      assertiveMessage2: '',
      politeMessage1: '',
      politeMessage2: '',
      oldPolitemessage: '',
      oldPoliteMessageId: '',
      oldAssertiveMessage: '',
      oldAssertiveMessageId: '',
      setAlternatePolite: false,
      setAlternateAssertive: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Announcer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var oldPolitemessage = state.oldPolitemessage,
        oldPoliteMessageId = state.oldPoliteMessageId,
        oldAssertiveMessage = state.oldAssertiveMessage,
        oldAssertiveMessageId = state.oldAssertiveMessageId;
    var politeMessage = nextProps.politeMessage,
        politeMessageId = nextProps.politeMessageId,
        assertiveMessage = nextProps.assertiveMessage,
        assertiveMessageId = nextProps.assertiveMessageId;

    if (oldPolitemessage !== politeMessage || oldPoliteMessageId !== politeMessageId) {
      return {
        politeMessage1: state.setAlternatePolite ? '' : politeMessage,
        politeMessage2: state.setAlternatePolite ? politeMessage : '',
        oldPolitemessage: politeMessage,
        oldPoliteMessageId: politeMessageId,
        setAlternatePolite: !state.setAlternatePolite
      };
    }

    if (oldAssertiveMessage !== assertiveMessage || oldAssertiveMessageId !== assertiveMessageId) {
      return {
        assertiveMessage1: state.setAlternateAssertive ? '' : assertiveMessage,
        assertiveMessage2: state.setAlternateAssertive ? assertiveMessage : '',
        oldAssertiveMessage: assertiveMessage,
        oldAssertiveMessageId: assertiveMessageId,
        setAlternateAssertive: !state.setAlternateAssertive
      };
    }

    return null;
  };

  Announcer.prototype.render = function render() {
    var _state = this.state,
        assertiveMessage1 = _state.assertiveMessage1,
        assertiveMessage2 = _state.assertiveMessage2,
        politeMessage1 = _state.politeMessage1,
        politeMessage2 = _state.politeMessage2;
    return react.createElement('div', null, react.createElement(modules_MessageBlock, {
      'aria-live': 'assertive',
      message: assertiveMessage1
    }), react.createElement(modules_MessageBlock, {
      'aria-live': 'assertive',
      message: assertiveMessage2
    }), react.createElement(modules_MessageBlock, {
      'aria-live': 'polite',
      message: politeMessage1
    }), react.createElement(modules_MessageBlock, {
      'aria-live': 'polite',
      message: politeMessage2
    }));
  };

  return Announcer;
}(react.Component);

/* harmony default export */ var modules_Announcer = (Announcer);
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/modules/AnnouncerContext.js

var AnnouncerContext_AnnouncerContext = react.createContext({
  announceAssertive: logContextWarning,
  announcePolite: logContextWarning
});

function logContextWarning() {
  console.warn('Announcement failed, LiveAnnouncer context is missing');
}

/* harmony default export */ var modules_AnnouncerContext = (AnnouncerContext_AnnouncerContext);
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/modules/LiveAnnouncer.js
function LiveAnnouncer_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function LiveAnnouncer_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function LiveAnnouncer_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}





var LiveAnnouncer = function (_Component) {
  LiveAnnouncer_inherits(LiveAnnouncer, _Component);

  function LiveAnnouncer(props) {
    LiveAnnouncer_classCallCheck(this, LiveAnnouncer);

    var _this = LiveAnnouncer_possibleConstructorReturn(this, _Component.call(this, props));

    _this.announcePolite = function (message, id) {
      _this.setState({
        announcePoliteMessage: message,
        politeMessageId: id ? id : ''
      });
    };

    _this.announceAssertive = function (message, id) {
      _this.setState({
        announceAssertiveMessage: message,
        assertiveMessageId: id ? id : ''
      });
    };

    _this.state = {
      announcePoliteMessage: '',
      politeMessageId: '',
      announceAssertiveMessage: '',
      assertiveMessageId: '',
      updateFunctions: {
        announcePolite: _this.announcePolite,
        announceAssertive: _this.announceAssertive
      }
    };
    return _this;
  }

  LiveAnnouncer.prototype.render = function render() {
    var _state = this.state,
        announcePoliteMessage = _state.announcePoliteMessage,
        politeMessageId = _state.politeMessageId,
        announceAssertiveMessage = _state.announceAssertiveMessage,
        assertiveMessageId = _state.assertiveMessageId,
        updateFunctions = _state.updateFunctions;
    return react.createElement(modules_AnnouncerContext.Provider, {
      value: updateFunctions
    }, this.props.children, react.createElement(modules_Announcer, {
      assertiveMessage: announceAssertiveMessage,
      assertiveMessageId: assertiveMessageId,
      politeMessage: announcePoliteMessage,
      politeMessageId: politeMessageId
    }));
  };

  return LiveAnnouncer;
}(react.Component);

/* harmony default export */ var modules_LiveAnnouncer = (LiveAnnouncer);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(19056);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/modules/AnnouncerMessage.js
function AnnouncerMessage_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function AnnouncerMessage_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function AnnouncerMessage_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}





var AnnouncerMessage = function (_Component) {
  AnnouncerMessage_inherits(AnnouncerMessage, _Component);

  function AnnouncerMessage() {
    var _temp, _this, _ret;

    AnnouncerMessage_classCallCheck(this, AnnouncerMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = AnnouncerMessage_possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.announce = function () {
      var _this$props = _this.props,
          message = _this$props.message,
          ariaLive = _this$props['aria-live'],
          announceAssertive = _this$props.announceAssertive,
          announcePolite = _this$props.announcePolite;

      if (ariaLive === 'assertive') {
        announceAssertive(message || '', v4_default()());
      }

      if (ariaLive === 'polite') {
        announcePolite(message || '', v4_default()());
      }
    }, _temp), AnnouncerMessage_possibleConstructorReturn(_this, _ret);
  }

  AnnouncerMessage.prototype.componentDidMount = function componentDidMount() {
    this.announce();
  };

  AnnouncerMessage.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var message = this.props.message;

    if (message !== prevProps.message) {
      this.announce();
    }
  };

  AnnouncerMessage.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props = this.props,
        clearOnUnmount = _props.clearOnUnmount,
        announceAssertive = _props.announceAssertive,
        announcePolite = _props.announcePolite;

    if (clearOnUnmount === true || clearOnUnmount === 'true') {
      announceAssertive('');
      announcePolite('');
    }
  };

  AnnouncerMessage.prototype.render = function render() {
    return null;
  };

  return AnnouncerMessage;
}(react.Component);

AnnouncerMessage.propTypes =  false ? 0 : {};
/* harmony default export */ var modules_AnnouncerMessage = (AnnouncerMessage);
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/modules/LiveMessage.js
var _extends = Object.assign || function (target) {
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





var LiveMessage = function LiveMessage(props) {
  return react.createElement(modules_AnnouncerContext.Consumer, null, function (contextProps) {
    return react.createElement(modules_AnnouncerMessage, _extends({}, contextProps, props));
  });
};

/* harmony default export */ var modules_LiveMessage = (LiveMessage);
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/modules/LiveMessenger.js



var LiveMessenger = function LiveMessenger(_ref) {
  var children = _ref.children;
  return React.createElement(AnnouncerContext.Consumer, null, function (contextProps) {
    return children(contextProps);
  });
};

/* harmony default export */ var modules_LiveMessenger = ((/* unused pure expression or super */ null && (LiveMessenger)));
;// CONCATENATED MODULE: ./node_modules/react-aria-live/es/index.js






;// CONCATENATED MODULE: ./src/pages/tools/accelerometer-theremin.tsx















var TONE_DURATION = 50;
var TONE_THROTTLE = 100; // this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the accelerometer services,
// so it will render again and update the accelerometers array whenever the bus connects/disconnects
// an accelerometer

function AccelerometerTheremin() {
  var _usePlayTone = (0,usePlayTone/* usePlayTone */.v)(),
      playTone = _usePlayTone.playTone,
      toggleBrowserAudio = _usePlayTone.toggleBrowserAudio,
      browserAudio = _usePlayTone.browserAudio; // identifiers for accessibility


  var sectionId = (0,react_use_id_hook_esm/* useId */.Me)(); // useServices accepts a number of filters and returns any services that match
  // get all accelerometer + buzzer services
  // under the hood, it uses the bus and events.

  var accelerometers = (0,useServices/* default */.Z)({
    serviceClass: constants/* SRV_ACCELEROMETER */.QF7
  }); // create a state variable to hold the service selected as our accelerometer
  // when using setAccelService, React will render again this component

  var _useState = (0,react.useState)(),
      accelService = _useState[0],
      setAccelService = _useState[1]; // used to hold the value for the axis selected by the radio group. This is also used to set the axis of the accelerometer to sonify. Default value is X. meaning the X axis will be sonified by default.


  var _useState2 = (0,react.useState)("x"),
      axisToSonify = _useState2[0],
      setAxisToSonify = _useState2[1]; //used to hold user selection of the property of the sound to vary. Default is the frequency.


  var _useState3 = (0,react.useState)("frequency"),
      sonificationProperty = _useState3[0],
      setSonificationProperty = _useState3[1];

  var _useState4 = (0,react.useState)(""),
      srAnnouncement = _useState4[0],
      setSRAnnouncement = _useState4[1]; // event handeler for radio button selection change for axis to sonify


  var handleAccessChange = function handleAccessChange(event) {
    setAxisToSonify(event.target.value);
    setSRAnnouncement("changing " + sonificationProperty + " based on " + event.target.value + " of accelerometer."); // using the value that is being set in the previous line results in the value pre-update being announced. I suspect this has to do with how react re-renders. using event.target.value to mittegate this.
    // in progress: make sure an Aria alert gets generated indecating the access that has been selected when streaming starts, or when radio button selection changes.
  }; //handler for property selection to sonify.


  var handelPropertySelectionChange = function handelPropertySelectionChange(event) {
    setSonificationProperty(event.target.value);
    setSRAnnouncement("changing " + event.target.value + " based on " + axisToSonify + " of accelerometer.");
  }; // use a closure to capture accel variable
  // act as a toggle for the button the indicates streaming state.


  var handleSelectAccelerometerService = function handleSelectAccelerometerService(accel) {
    return function () {
      setSRAnnouncement(''); // clearing the live region for the text to be announced when streaming starts. I don't have a good feeling about this approach.

      accelService == accel ? setAccelService(undefined) : setAccelService(accel);

      if (accelService !== accel) {
        setSRAnnouncement("changing " + sonificationProperty + " based on " + axisToSonify + " of accelerometer."); // to investigate: this announcement does not happen after the user changes the selection of the axis and hits the start streaming button. hitting stop streaming and then start streaming however announces that axis being sonified and the property.
      } else {
        setSRAnnouncement('');
      }
    };
  }; // filter to only show accelerometers in dashboard


  var dashboardDeviceFilter = function dashboardDeviceFilter(d) {
    return d.hasService(constants/* SRV_ACCELEROMETER */.QF7);
  }; // register for accelerometer data events


  (0,react.useEffect)(function () {
    // ?. checks that the callee is defined
    var unsubs = accelService === null || accelService === void 0 ? void 0 : accelService.readingRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, // don't trigger more than every 100ms
    (0,utils/* throttle */.P2)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var volume, toneFrequencyOffset, _accelService$reading, x, y, z;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // get x acceleration data
              // const [x] = accelService.readingRegister.unpackedValue
              // get all acceleration data
              volume = 1;
              toneFrequencyOffset = 0;
              _accelService$reading = accelService.readingRegister.unpackedValue, x = _accelService$reading[0], y = _accelService$reading[1], z = _accelService$reading[2];

              if (sonificationProperty == "frequency") {
                if (axisToSonify == "x") {
                  toneFrequencyOffset = x;
                } else if (axisToSonify == "y") {
                  toneFrequencyOffset = y;
                } else {
                  toneFrequencyOffset = z;
                }
              } else {
                if (axisToSonify == "x") {
                  volume = Math.abs(x) * 99 / 100.0;
                } else if (axisToSonify == "y") {
                  volume = Math.abs(y) * 99 / 100.0;
                } else {
                  volume = Math.abs(z) * 99 / 100.0;
                }
              }

              _context.next = 6;
              return playTone(1000 + toneFrequencyOffset * 1000, TONE_DURATION, volume);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), TONE_THROTTLE)); // cleanup callback

    return function () {
      return unsubs === null || unsubs === void 0 ? void 0 : unsubs();
    };
  }, [accelService, playTone]); // re-register if accelerometers, buzzers change

  return /*#__PURE__*/react.createElement(modules_LiveAnnouncer, null, /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Audio controls"
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "outlined",
    onClick: toggleBrowserAudio
  }, browserAudio ? "Stop browser audio" : "Start browser audio"), /*#__PURE__*/react.createElement(modules_LiveMessage, {
    message: srAnnouncement,
    "aria-live": "assertive"
  })), !accelerometers.length && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Connect a device"
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_ACCELEROMETER */.QF7
  }))), !!accelerometers.length && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Available accelerometers"
  }), accelerometers.map(function (accelerometer) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      xs: 12,
      sm: 6,
      lg: 4,
      xl: 3,
      key: accelerometer.id
    }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
      device: accelerometer.device,
      showAvatar: true,
      showMedia: true
    }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "h5"
    }, (accelerometer === accelService ? "Streaming from " : "") + (accelerometer.device.physical ? "Physical " : "Virtual ") + ("Accelerometer " + accelerometer.friendlyName))), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(FormControl/* default */.Z, {
      component: "fieldset"
    }, /*#__PURE__*/react.createElement(FormLabel/* default */.Z, {
      component: "legend"
    }, "Select axis of the accelerometer to sonify"), /*#__PURE__*/react.createElement(RadioGroup/* default */.Z, {
      "aria-label": "axis",
      name: "axisToSonify",
      value: axisToSonify,
      onChange: handleAccessChange
    }, /*#__PURE__*/react.createElement(FormControlLabel/* default */.Z, {
      value: "x",
      control: /*#__PURE__*/react.createElement(Radio/* default */.Z, null),
      label: "X axis"
    }), /*#__PURE__*/react.createElement(FormControlLabel/* default */.Z, {
      value: "y",
      control: /*#__PURE__*/react.createElement(Radio/* default */.Z, null),
      label: "Y axis"
    }), /*#__PURE__*/react.createElement(FormControlLabel/* default */.Z, {
      value: "z",
      control: /*#__PURE__*/react.createElement(Radio/* default */.Z, null),
      label: "Z axis"
    })), /*#__PURE__*/react.createElement(FormLabel/* default */.Z, {
      component: "legend"
    }, "Select property of the sound to change"), /*#__PURE__*/react.createElement(RadioGroup/* default */.Z, {
      "aria-label": "sonification property",
      name: "soundProperty",
      value: sonificationProperty,
      onChange: handelPropertySelectionChange
    }, /*#__PURE__*/react.createElement(FormControlLabel/* default */.Z, {
      value: "frequency",
      control: /*#__PURE__*/react.createElement(Radio/* default */.Z, null),
      label: "buzzer frequency"
    }), /*#__PURE__*/react.createElement(FormControlLabel/* default */.Z, {
      value: "volume",
      control: /*#__PURE__*/react.createElement(Radio/* default */.Z, null),
      label: "buzzer volume"
    }))), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
      variant: "outlined",
      onClick: handleSelectAccelerometerService(accelerometer)
    }, accelerometer === accelService ? "Stop streaming" : "Start streaming"))));
  })))), /*#__PURE__*/react.createElement(Dashboard/* default */.Z, {
    deviceFilter: dashboardDeviceFilter
  })));
}

/***/ })

}]);