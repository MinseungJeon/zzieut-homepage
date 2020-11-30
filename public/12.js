(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/recruit/recruitContent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service/recruit/recruitContent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.json */ "./resources/js/components/service/recruit/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/components/service/recruit/content.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["isSelected"],
  data: function data() {
    return {
      propsIsSelected: this.isSelected,
      content: {}
    };
  },
  watch: {
    isSelected: function isSelected() {
      if (this.isSelected === 1) {
        this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.server;
      }

      if (this.isSelected === 2) {
        this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.ios;
      }

      if (this.isSelected === 3) {
        this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.android;
      }
    }
  },
  updated: function updated() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/recruit/recruitContent.vue?vue&type=template&id=26d940f1&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service/recruit/recruitContent.vue?vue&type=template&id=26d940f1& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c(
        "div",
        [
          _c("h1", [_vm._v("팀소개")]),
          _vm._v(" "),
          _vm._l(_vm.content.team, function(text) {
            return _c("ul", { key: text }, [_c("li", [_vm._v(_vm._s(text))])])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("h1", [_vm._v("주요 업무")]),
          _vm._v(" "),
          _vm._l(_vm.content.work, function(text) {
            return _c("ul", { key: text }, [_c("li", [_vm._v(_vm._s(text))])])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("h1", [_vm._v("우대 사항")]),
          _vm._v(" "),
          _vm._l(_vm.content.qualification, function(text) {
            return _c("ul", { key: text }, [_c("li", [_vm._v(_vm._s(text))])])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/service/recruit/content.json":
/*!**************************************************************!*\
  !*** ./resources/js/components/service/recruit/content.json ***!
  \**************************************************************/
/*! exports provided: server, ios, android, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"server\":{\"team\":[\"Between 서버 팀은 2000만 유저의 트래픽을 견뎌내는 안정적이고 확장성 있는 서버를 만듭니다.\",\"Between 서버는 아래의 기술들로 만들어집니다.\"],\"work\":[\"Between의 백엔드 시스템 개발\",\"2000만 유저의 트래픽을 견뎌내는 안정적이고 확정성 있는 서버를 개발\"],\"qualification\":[\"잘 하는 프로그래밍 언어가 하나 이상 있으신 분\",\"새로운 것을 배우고 익히는 것에 두려움이 없으신 분\"],\"treatment\":[\"확장성 있는 서버 아키텍처에 대한 이해\",\"Java, Python, Scala 를 이용한 개발 경험\"]},\"ios\":{\"team\":[\"iosios\",\"iosios\"],\"work\":[\"iosios\",\"iosios\"],\"qualification\":[\"iosios\",\"iosios\"],\"treatment\":[\"iosios\",\"iosios\"]},\"android\":{\"team\":[\"android\",\"android\"],\"work\":[\"android\",\"android\"],\"qualification\":[\"android\",\"android\"],\"treatment\":[\"android\",\"android\"]}}");

/***/ }),

/***/ "./resources/js/components/service/recruit/recruitContent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/service/recruit/recruitContent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recruitContent_vue_vue_type_template_id_26d940f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recruitContent.vue?vue&type=template&id=26d940f1& */ "./resources/js/components/service/recruit/recruitContent.vue?vue&type=template&id=26d940f1&");
/* harmony import */ var _recruitContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recruitContent.vue?vue&type=script&lang=js& */ "./resources/js/components/service/recruit/recruitContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _recruitContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recruitContent_vue_vue_type_template_id_26d940f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recruitContent_vue_vue_type_template_id_26d940f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/service/recruit/recruitContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/service/recruit/recruitContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/service/recruit/recruitContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recruitContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recruitContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/recruit/recruitContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recruitContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/service/recruit/recruitContent.vue?vue&type=template&id=26d940f1&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/service/recruit/recruitContent.vue?vue&type=template&id=26d940f1& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recruitContent_vue_vue_type_template_id_26d940f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recruitContent.vue?vue&type=template&id=26d940f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/recruit/recruitContent.vue?vue&type=template&id=26d940f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recruitContent_vue_vue_type_template_id_26d940f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recruitContent_vue_vue_type_template_id_26d940f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);