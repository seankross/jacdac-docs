(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5023],{

/***/ 67396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccelerometerTheremin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2928);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95393);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69817);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92206);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87198);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94431);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31477);
/* harmony import */ var _components_hooks_usePlayTone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2058);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65063);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19640);














var TONE_DURATION = 50;
var TONE_THROTTLE = 100; // this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the accelerometer services,
// so it will render again and update the accelerometers array whenever the bus connects/disconnects
// an accelerometer

function AccelerometerTheremin() {
  var _usePlayTone = (0,_components_hooks_usePlayTone__WEBPACK_IMPORTED_MODULE_9__/* .usePlayTone */ .v)(),
      playTone = _usePlayTone.playTone,
      toggleBrowserAudio = _usePlayTone.toggleBrowserAudio,
      browserAudio = _usePlayTone.browserAudio; // identifiers for accessibility


  var sectionId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_11__/* .useId */ .Me)(); // useServices accepts a number of filters and returns any services that match
  // get all accelerometer + buzzer services
  // under the hood, it uses the bus and events.

  var accelerometers = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_ACCELEROMETER */ .QF7
  }); // create a state variable to hold the service selected as our accelerometer
  // when using setAccelService, React will render again this component

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      accelService = _useState[0],
      setAccelService = _useState[1]; // used to hold the value for the axis selected by the radio group. This is also used to set the axis of the accelerometer to sonify. Default value is X. meaning the X axis will be sonified by default.


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("x"),
      axisToSonify = _useState2[0],
      setAxisToSonify = _useState2[1]; //used to hold user selection of the property of the sound to vary. Default is the frequency.


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("frequency"),
      sonificationProperty = _useState3[0],
      setSonificationProperty = _useState3[1]; // event handeler for radio button selection change for axis to sonify


  var handleAccessChange = function handleAccessChange(event) {
    setAxisToSonify(event.target.value); // todo: make sure an Aria alert gets generated indecating the access that has been selected when streaming starts, or when radio button selection changes.
  }; //handler for property selection to sonify.


  var handelPropertySelectionChange = function handelPropertySelectionChange(event) {
    setSonificationProperty(event.target.value);
  }; // use a closure to capture accel variable
  // act as a toggle for the button the indicates streaming state.


  var handleSelectAccelerometerService = function handleSelectAccelerometerService(accel) {
    return function () {
      accelService == accel ? setAccelService(undefined) : setAccelService(accel);
    };
  }; // filter to only show accelerometers in dashboard


  var dashboardDeviceFilter = function dashboardDeviceFilter(d) {
    return d.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_ACCELEROMETER */ .QF7);
  }; // register for accelerometer data events


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // ?. checks that the callee is defined
    var unsubs = accelService === null || accelService === void 0 ? void 0 : accelService.readingRegister.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_UPDATE */ .rGZ, // don't trigger more than every 100ms
    (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .throttle */ .P2)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var volume, toneFrequencyOffset, _accelService$reading, x, y, z;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Audio controls"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "outlined",
    onClick: toggleBrowserAudio
  }, browserAudio ? "Stop browser audio" : "Start browser audio")), !accelerometers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Connect a device"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_ACCELEROMETER */ .QF7
  }))), !!accelerometers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Available accelerometers"
  }), accelerometers.map(function (accelerometer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      item: true,
      xs: 12,
      sm: 6,
      lg: 4,
      xl: 3,
      key: accelerometer.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      device: accelerometer.device,
      showAvatar: true,
      showMedia: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
      variant: "h5"
    }, (accelerometer === accelService ? "Streaming from " : "") + (accelerometer.device.physical ? "Physical " : "Virtual ") + ("Accelerometer " + accelerometer.friendlyName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
      component: "fieldset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
      component: "legend"
    }, "Select axis of the accelerometer to sonify"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
      "aria-label": "axis",
      name: "axisToSonify",
      value: axisToSonify,
      onChange: handleAccessChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
      value: "x",
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
      label: "X axis"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
      value: "y",
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
      label: "Y axis"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
      value: "z",
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
      label: "Z axis"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
      component: "legend"
    }, "Select property of the sound to change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
      "aria-label": "sonification property",
      name: "soundProperty",
      value: sonificationProperty,
      onChange: handelPropertySelectionChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
      value: "frequency",
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
      label: "buzzer frequency"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
      value: "volume",
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
      label: "buzzer volume"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
      variant: "outlined",
      onClick: handleSelectAccelerometerService(accelerometer)
    }, accelerometer === accelService ? "Stop streaming" : "Start streaming"))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    deviceFilter: dashboardDeviceFilter
  }));
}

/***/ })

}]);