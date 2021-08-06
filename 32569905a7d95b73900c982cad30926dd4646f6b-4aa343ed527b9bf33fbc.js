"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7537],{

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80453);




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ 88880:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 74195:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": function() { return /* binding */ FileSystemProvider; },
  "Z": function() { return /* binding */ components_FileSystemContext; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/fs/fs.ts
var fs = __webpack_require__(31396);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(85061);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5991);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(41788);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncIterator.js
function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator];
    if (method == null && Symbol.iterator) method = iterable[Symbol.iterator];
  }

  if (method == null) method = iterable["@@asyncIterator"];
  if (method == null) method = iterable["@@iterator"];
  if (method == null) throw new TypeError("Object is not async iterable");
  return method.call(iterable);
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/node.ts
var node = __webpack_require__(60154);
;// CONCATENATED MODULE: ./src/components/fs/fsdom.ts









var FILE_SYSTEM_NODE = "fs";
var FILE_SYSTEM_DIRECTORY_NODE = "directory";
var FILE_SYSTEM_FILE_NODE = "file";
var FileSystemNode = /*#__PURE__*/function (_JDNode) {
  (0,inheritsLoose/* default */.Z)(FileSystemNode, _JDNode);

  function FileSystemNode() {
    return _JDNode.apply(this, arguments) || this;
  }

  return FileSystemNode;
}(node/* JDNode */.z);
var FileSystem = /*#__PURE__*/function (_FileSystemNode) {
  (0,inheritsLoose/* default */.Z)(FileSystem, _FileSystemNode);

  function FileSystem() {
    return _FileSystemNode.call(this) || this;
  }

  var _proto = FileSystem.prototype;

  _proto.createWorkingDirectory = /*#__PURE__*/function () {
    var _createWorkingDirectory = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(name, filename, content) {
      var handle, fileHandle;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.root.handle.getDirectoryHandle(name, {
                create: true
              });

            case 2:
              handle = _context.sent;

              if (!filename) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return handle.getFileHandle(filename, {
                create: true
              });

            case 6:
              fileHandle = _context.sent;
              _context.next = 9;
              return (0,fs/* writeFileText */.$8)(fileHandle, content);

            case 9:
              _context.next = 11;
              return this.root.sync();

            case 11:
              this.workingDirectory = this.root.directories.find(function (d) {
                return d.name === name;
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createWorkingDirectory(_x, _x2, _x3) {
      return _createWorkingDirectory.apply(this, arguments);
    }

    return createWorkingDirectory;
  }();

  (0,createClass/* default */.Z)(FileSystem, [{
    key: "id",
    get: function get() {
      return FILE_SYSTEM_NODE;
    }
  }, {
    key: "nodeKind",
    get: function get() {
      return FILE_SYSTEM_NODE;
    }
  }, {
    key: "name",
    get: function get() {
      return FILE_SYSTEM_NODE;
    }
  }, {
    key: "friendlyName",
    get: function get() {
      return this.name;
    }
  }, {
    key: "qualifiedName",
    get: function get() {
      return this.name;
    }
  }, {
    key: "parent",
    get: function get() {
      return undefined;
    }
  }, {
    key: "children",
    get: function get() {
      return [this.root];
    }
  }, {
    key: "root",
    get: function get() {
      return this._root;
    },
    set: function set(d) {
      if (d !== this._root) {
        this._root = d;
        this._workingDirectory = undefined;
        this._workingFile = undefined;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "workingDirectory",
    get: function get() {
      return this._workingDirectory;
    },
    set: function set(d) {
      if (d !== this._workingDirectory) {
        this._workingDirectory = d;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "workingFile",
    get: function get() {
      return this._workingFile;
    },
    set: function set(d) {
      if (d !== this._workingFile) {
        var _this$_workingFile;

        this._workingFile = d;
        this._workingDirectory = (_this$_workingFile = this._workingFile) === null || _this$_workingFile === void 0 ? void 0 : _this$_workingFile.parentDirectory;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }]);

  return FileSystem;
}(FileSystemNode);
var FileSystemFile = /*#__PURE__*/function (_FileSystemNode2) {
  (0,inheritsLoose/* default */.Z)(FileSystemFile, _FileSystemNode2);

  function FileSystemFile(_parent, handle) {
    var _this;

    _this = _FileSystemNode2.call(this) || this;
    _this._parent = _parent;
    _this.handle = handle;
    return _this;
  }

  var _proto2 = FileSystemFile.prototype;

  _proto2.textAsync = /*#__PURE__*/function () {
    var _textAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.sync();

            case 2:
              return _context2.abrupt("return", this._text);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function textAsync() {
      return _textAsync.apply(this, arguments);
    }

    return textAsync;
  }();

  _proto2.write = /*#__PURE__*/function () {
    var _write = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(text) {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,fs/* writeFileText */.$8)(this.handle, text);

            case 2:
              if (this._text !== text) {
                this._text = text; // don't signal
                // this.emit(CHANGE)
              }

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function write(_x4) {
      return _write.apply(this, arguments);
    }

    return write;
  }();

  _proto2.sync = /*#__PURE__*/function () {
    var _sync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      var text;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,fs/* readFileText */.ue)(this.handle);

            case 2:
              text = _context4.sent;

              if (text !== this._text) {
                this._text = text;
                this.emit(constants/* CHANGE */.Ver);
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function sync() {
      return _sync.apply(this, arguments);
    }

    return sync;
  }();

  (0,createClass/* default */.Z)(FileSystemFile, [{
    key: "id",
    get: function get() {
      return this.parent.id + "/" + this.name;
    }
  }, {
    key: "nodeKind",
    get: function get() {
      return FILE_SYSTEM_FILE_NODE;
    }
  }, {
    key: "qualifiedName",
    get: function get() {
      return this.id;
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    }
  }, {
    key: "parentDirectory",
    get: function get() {
      return this._parent;
    }
  }, {
    key: "children",
    get: function get() {
      return [];
    }
  }, {
    key: "name",
    get: function get() {
      return this.handle.name;
    }
  }, {
    key: "text",
    get: function get() {
      if (this._text === undefined) this.sync();
      return this._text;
    }
  }]);

  return FileSystemFile;
}(FileSystemNode);

function sortHandles(handles) {
  handles.sort(function (l, r) {
    return l.name.localeCompare(r.name);
  });
  return handles;
}

var FileSystemDirectory = /*#__PURE__*/function (_FileSystemNode3) {
  (0,inheritsLoose/* default */.Z)(FileSystemDirectory, _FileSystemNode3);

  function FileSystemDirectory(_parent, handle) {
    var _this2;

    _this2 = _FileSystemNode3.call(this) || this;
    _this2._directories = [];
    _this2._files = [];
    _this2._parent = _parent;
    _this2.handle = handle;

    _this2.sync();

    return _this2;
  }

  var _proto3 = FileSystemDirectory.prototype;

  _proto3.directory = function directory(name, options) {
    var _this3 = this;

    var existing = this._directories.find(function (f) {
      return f.name === name;
    });

    if (existing) return existing;

    if (options !== null && options !== void 0 && options.create) {
      // create file in the background
      this.handle.getDirectoryHandle(name, {
        create: true
      }).then(function (nf) {
        var nfn = new FileSystemDirectory(_this3, nf);

        _this3._directories.push(nfn);

        _this3._directories.sort(function (l, r) {
          return l.name.localeCompare(r.name);
        });

        _this3.emitPropagated(constants/* CHANGE */.Ver);
      });
    } // no file yet


    return undefined;
  };

  _proto3.fileAsync = /*#__PURE__*/function () {
    var _fileAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee5(name, options) {
      var f, _handle;

      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              f = this._files.find(function (f) {
                return f.name === name;
              });

              if (!(!f && options !== null && options !== void 0 && options.create)) {
                _context5.next = 9;
                break;
              }

              _context5.next = 4;
              return this.handle.getFileHandle(name, {
                create: true
              });

            case 4:
              _handle = _context5.sent;
              f = new FileSystemFile(this, _handle);

              this._files.push(f);

              this._files.sort(function (l, r) {
                return l.name.localeCompare(r.name);
              });

              this.emitPropagated(constants/* CHANGE */.Ver);

            case 9:
              return _context5.abrupt("return", f);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function fileAsync(_x5, _x6) {
      return _fileAsync.apply(this, arguments);
    }

    return fileAsync;
  }();

  _proto3.file = function file(name, options) {
    var existing = this._files.find(function (f) {
      return f.name === name;
    });

    if (!existing) {
      if (options !== null && options !== void 0 && options.create) this.fileAsync(name, options);
    }

    return existing;
  };

  _proto3.sync = /*#__PURE__*/function () {
    var _sync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee6() {
      var _this4 = this;

      var values, files, directories, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, entry, changed, patched, _patched;

      return regenerator_default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              values = this.handle.values();
              files = [];
              directories = [];

              if (!values) {
                _context6.next = 37;
                break;
              }

              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _context6.prev = 6;
              _iterator = _asyncIterator(values);

            case 8:
              _context6.next = 10;
              return _iterator.next();

            case 10:
              _step = _context6.sent;
              _iteratorNormalCompletion = _step.done;
              _context6.next = 14;
              return _step.value;

            case 14:
              _value = _context6.sent;

              if (_iteratorNormalCompletion) {
                _context6.next = 21;
                break;
              }

              entry = _value;
              if (entry.kind === "directory") directories.push(entry);else if (entry.kind === "file") files.push(entry);

            case 18:
              _iteratorNormalCompletion = true;
              _context6.next = 8;
              break;

            case 21:
              _context6.next = 27;
              break;

            case 23:
              _context6.prev = 23;
              _context6.t0 = _context6["catch"](6);
              _didIteratorError = true;
              _iteratorError = _context6.t0;

            case 27:
              _context6.prev = 27;
              _context6.prev = 28;

              if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                _context6.next = 32;
                break;
              }

              _context6.next = 32;
              return _iterator.return();

            case 32:
              _context6.prev = 32;

              if (!_didIteratorError) {
                _context6.next = 35;
                break;
              }

              throw _iteratorError;

            case 35:
              return _context6.finish(32);

            case 36:
              return _context6.finish(27);

            case 37:
              sortHandles(files);
              sortHandles(directories); // did the files change?

              changed = false;

              if (this._files.map(function (f) {
                return f.name;
              }).join() !== files.map(function (f) {
                return f.name;
              }).join()) {
                // some of the file changed
                patched = files.map(function (f) {
                  var oldf = _this4._files.find(function (oldf) {
                    return oldf.name === f.name;
                  });

                  return oldf || new FileSystemFile(_this4, f);
                });
                this._files = patched;
                changed = true;
              }

              if (this._directories.map(function (f) {
                return f.name;
              }).join() !== directories.map(function (f) {
                return f.name;
              }).join()) {
                // some of the file changed
                _patched = directories.map(function (f) {
                  var oldf = _this4._directories.find(function (oldf) {
                    return oldf.name === f.name;
                  });

                  return oldf || new FileSystemDirectory(_this4, f);
                });
                this._directories = _patched;
                changed = true;
              }

              if (changed) this.emitPropagated(constants/* CHANGE */.Ver);

            case 43:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[6, 23, 27, 37], [28,, 32, 36]]);
    }));

    function sync() {
      return _sync2.apply(this, arguments);
    }

    return sync;
  }();

  (0,createClass/* default */.Z)(FileSystemDirectory, [{
    key: "id",
    get: function get() {
      var _this$_parent;

      return (((_this$_parent = this._parent) === null || _this$_parent === void 0 ? void 0 : _this$_parent.id) || "") + "/" + this.name;
    }
  }, {
    key: "nodeKind",
    get: function get() {
      return FILE_SYSTEM_DIRECTORY_NODE;
    }
  }, {
    key: "qualifiedName",
    get: function get() {
      return this.id;
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    }
  }, {
    key: "children",
    get: function get() {
      return [].concat((0,toConsumableArray/* default */.Z)(this._directories), (0,toConsumableArray/* default */.Z)(this._files));
    }
  }, {
    key: "name",
    get: function get() {
      return this.handle.name;
    }
  }, {
    key: "directories",
    get: function get() {
      return this._directories.slice(0) || [];
    }
  }, {
    key: "files",
    get: function get() {
      return this._files.slice(0) || [];
    }
  }]);

  return FileSystemDirectory;
}(FileSystemNode);
;// CONCATENATED MODULE: ./src/components/FileSystemContext.tsx





var FileSystemContext = /*#__PURE__*/(0,react.createContext)({
  fileSystem: undefined,
  showDirectoryPicker: undefined
});
FileSystemContext.displayName = "fs";
/* harmony default export */ var components_FileSystemContext = (FileSystemContext); // eslint-disable-next-line react/prop-types

function FileSystemProvider(props) {
  var _this = this;

  var children = props.children;
  var fileSystem = (0,react.useMemo)(function () {
    return (0,fs/* fileSystemHandleSupported */.ou)() && new FileSystem();
  }, []);
  var supported = !!fileSystem;
  var showDirectoryPicker = supported ? /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(options) {
      var _fileSystem$root, handle;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return window.showDirectoryPicker(options);

            case 3:
              handle = _context.sent;
              if (handle !== ((_fileSystem$root = fileSystem.root) === null || _fileSystem$root === void 0 ? void 0 : _fileSystem$root.handle)) fileSystem.root = new FileSystemDirectory(_this, handle);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.debug(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }() : undefined;
  return /*#__PURE__*/react.createElement(FileSystemContext.Provider, {
    value: {
      fileSystem: fileSystem,
      showDirectoryPicker: showDirectoryPicker
    }
  }, children);
}

/***/ }),

/***/ 31396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ou": function() { return /* binding */ fileSystemHandleSupported; },
/* harmony export */   "$8": function() { return /* binding */ writeFileText; },
/* harmony export */   "ue": function() { return /* binding */ readFileText; },
/* harmony export */   "U5": function() { return /* binding */ importCSVFilesIntoWorkspace; }
/* harmony export */ });
/* unused harmony exports listDirectories, listFiles, fileOpen, importFiles */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function fileSystemHandleSupported() {
  return typeof window !== "undefined" && !!window.showDirectoryPicker;
}
function writeFileText(_x, _x2) {
  return _writeFileText.apply(this, arguments);
}

function _writeFileText() {
  _writeFileText = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(fileHandle, content) {
    var file;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fileHandle.createWritable({
              keepExistingData: false
            });

          case 2:
            file = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return file.write(content);

          case 6:
            _context.prev = 6;
            _context.prev = 7;
            _context.next = 10;
            return file.close();

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](7);
            console.debug("file close error", {
              e: _context.t0
            });

          case 15:
            return _context.finish(6);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3,, 6, 16], [7, 12]]);
  }));
  return _writeFileText.apply(this, arguments);
}

function readFileText(_x3) {
  return _readFileText.apply(this, arguments);
}

function _readFileText() {
  _readFileText = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(fileHandle) {
    var file;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fileHandle.getFile();

          case 2:
            file = _context2.sent;
            _context2.prev = 3;
            _context2.next = 6;
            return file.text();

          case 6:
            return _context2.abrupt("return", _context2.sent);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            console.debug("file read error", {
              e: _context2.t0
            });
            return _context2.abrupt("return", undefined);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 9]]);
  }));
  return _readFileText.apply(this, arguments);
}

function listDirectories(_x4) {
  return _listDirectories.apply(this, arguments);
}

function _listDirectories() {
  _listDirectories = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(directory) {
    var values, r, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, entry;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            values = directory === null || directory === void 0 ? void 0 : directory.values();
            r = [];

            if (!values) {
              _context3.next = 36;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context3.prev = 5;
            _iterator = _asyncIterator(values);

          case 7:
            _context3.next = 9;
            return _iterator.next();

          case 9:
            _step = _context3.sent;
            _iteratorNormalCompletion = _step.done;
            _context3.next = 13;
            return _step.value;

          case 13:
            _value = _context3.sent;

            if (_iteratorNormalCompletion) {
              _context3.next = 20;
              break;
            }

            entry = _value;
            if (entry.kind === "directory") r.push(entry);

          case 17:
            _iteratorNormalCompletion = true;
            _context3.next = 7;
            break;

          case 20:
            _context3.next = 26;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context3.t0;

          case 26:
            _context3.prev = 26;
            _context3.prev = 27;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context3.next = 31;
              break;
            }

            _context3.next = 31;
            return _iterator.return();

          case 31:
            _context3.prev = 31;

            if (!_didIteratorError) {
              _context3.next = 34;
              break;
            }

            throw _iteratorError;

          case 34:
            return _context3.finish(31);

          case 35:
            return _context3.finish(26);

          case 36:
            return _context3.abrupt("return", r);

          case 37:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 22, 26, 36], [27,, 31, 35]]);
  }));
  return _listDirectories.apply(this, arguments);
}

function listFiles(_x5, _x6) {
  return _listFiles.apply(this, arguments);
}

function _listFiles() {
  _listFiles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(directory, extension) {
    var values, r, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, entry;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            values = directory === null || directory === void 0 ? void 0 : directory.values();
            r = [];

            if (!values) {
              _context4.next = 36;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context4.prev = 5;
            _iterator2 = _asyncIterator(values);

          case 7:
            _context4.next = 9;
            return _iterator2.next();

          case 9:
            _step2 = _context4.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context4.next = 13;
            return _step2.value;

          case 13:
            _value2 = _context4.sent;

            if (_iteratorNormalCompletion2) {
              _context4.next = 20;
              break;
            }

            entry = _value2;
            if (entry.kind === "file") r.push(entry);

          case 17:
            _iteratorNormalCompletion2 = true;
            _context4.next = 7;
            break;

          case 20:
            _context4.next = 26;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](5);
            _didIteratorError2 = true;
            _iteratorError2 = _context4.t0;

          case 26:
            _context4.prev = 26;
            _context4.prev = 27;

            if (!(!_iteratorNormalCompletion2 && _iterator2.return != null)) {
              _context4.next = 31;
              break;
            }

            _context4.next = 31;
            return _iterator2.return();

          case 31:
            _context4.prev = 31;

            if (!_didIteratorError2) {
              _context4.next = 34;
              break;
            }

            throw _iteratorError2;

          case 34:
            return _context4.finish(31);

          case 35:
            return _context4.finish(26);

          case 36:
            if (extension) r = r.filter(function (f) {
              return f.name.endsWith(extension);
            });
            return _context4.abrupt("return", r);

          case 38:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 22, 26, 36], [27,, 31, 35]]);
  }));
  return _listFiles.apply(this, arguments);
}

function fileOpen(_x7) {
  return _fileOpen.apply(this, arguments);
}

function _fileOpen() {
  _fileOpen = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(options) {
    var accept, files;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }

            accept = {};

            if (options.mimeTypes) {
              Object.keys(options.mimeTypes).map(function (mimeType) {
                accept[mimeType] = options.mimeTypes[mimeType];
              });
            } else {
              accept["*/*"] = options.extensions || [];
            }

            _context5.next = 5;
            return window.showOpenFilePicker({
              types: [{
                description: options.description || "",
                accept: accept
              }],
              multiple: options.multiple || false,
              excludeAcceptAllOption: true
            });

          case 5:
            files = _context5.sent;
            console.debug("open file picker", {
              files: files
            });
            return _context5.abrupt("return", files);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fileOpen.apply(this, arguments);
}

function importFiles(_x8, _x9) {
  return _importFiles.apply(this, arguments);
}

function _importFiles() {
  _importFiles = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(directory, files) {
    var _iterator3, _step3, file, content, to;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!directory || !(files !== null && files !== void 0 && files.length))) {
              _context6.next = 2;
              break;
            }

            return _context6.abrupt("return");

          case 2:
            _iterator3 = _createForOfIteratorHelperLoose(files);

          case 3:
            if ((_step3 = _iterator3()).done) {
              _context6.next = 16;
              break;
            }

            file = _step3.value;
            console.debug("importing " + file.name + " -> " + directory.name);
            _context6.next = 8;
            return readFileText(file);

          case 8:
            content = _context6.sent;
            _context6.next = 11;
            return directory.getFileHandle(file.name, {
              create: true
            });

          case 11:
            to = _context6.sent;
            _context6.next = 14;
            return writeFileText(to, content);

          case 14:
            _context6.next = 3;
            break;

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _importFiles.apply(this, arguments);
}

function importCSVFilesIntoWorkspace(_x10) {
  return _importCSVFilesIntoWorkspace.apply(this, arguments);
}

function _importCSVFilesIntoWorkspace() {
  _importCSVFilesIntoWorkspace = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(directory) {
    var _mimeTypes;

    var files;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return fileOpen({
              multiple: true,
              mimeTypes: (_mimeTypes = {}, _mimeTypes["text/csv"] = [".csv"], _mimeTypes)
            });

          case 2:
            files = _context7.sent;
            _context7.next = 5;
            return importFiles(directory, files);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _importCSVFilesIntoWorkspace.apply(this, arguments);
}

/***/ })

}]);