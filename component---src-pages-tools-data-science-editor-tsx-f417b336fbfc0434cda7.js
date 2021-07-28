(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1323],{

/***/ 30321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 18 modules
var BlockContext = __webpack_require__(19054);
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 4 modules
var BlockEditor = __webpack_require__(81753);
// EXTERNAL MODULE: ./src/components/fs/FileTabs.tsx + 2 modules
var FileTabs = __webpack_require__(69469);
// EXTERNAL MODULE: ./src/components/blockly/dsl/datadsl.ts
var datadsl = __webpack_require__(73595);
// EXTERNAL MODULE: ./src/components/blockly/dsl/chartdsl.ts
var chartdsl = __webpack_require__(57611);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
;// CONCATENATED MODULE: ./src/components/data-science/DSBlockEditor.tsx










var DS_EDITOR_ID = "ds";
var DS_SOURCE_STORAGE_KEY = "tools:dseditor";
var DS_NEW_FILE_CONTENT = JSON.stringify({
  editor: DS_EDITOR_ID,
  xml: ""
});

function DSEditorWithContext() {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspaceFileHandle = _useContext.workspaceFileHandle,
      setWorkspaceFileHandle = _useContext.setWorkspaceFileHandle;

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, !!setWorkspaceFileHandle && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FileTabs/* default */.Z, {
    storageKey: DS_SOURCE_STORAGE_KEY,
    selectedFileHandle: workspaceFileHandle,
    onFileHandleSelected: setWorkspaceFileHandle,
    onFileHandleCreated: setWorkspaceFileHandle,
    newFileContent: DS_NEW_FILE_CONTENT
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, {
    editorId: DS_EDITOR_ID
  })), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null));
}

function DSBlockEditor() {
  var dsls = (0,react.useMemo)(function () {
    return [datadsl/* default */.Z, chartdsl/* default */.Z, fieldsdsl/* default */.Z];
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: DS_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(DSEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/tools/data-science-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(DSBlockEditor, null);
}

/***/ })

}]);