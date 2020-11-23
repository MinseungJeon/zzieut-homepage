(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/MainBanner.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/MainBanner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MainBanner",
  data: function data() {
    var imageList = [{
      id: 1,
      imgSrc: "https://images.unsplash.com/photo-1580508158643-4bf9f8da03c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    }, {
      id: 2,
      imgSrc: "https://images.unsplash.com/photo-1549921613-8db30562bad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }, {
      id: 3,
      imgSrc: "https://images.unsplash.com/photo-1516959512470-53955cd40f40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80"
    }];
    return {
      currentIndex: 0,
      lastIndex: imageList.length - 1,
      imageList: imageList
    };
  },
  methods: {
    startRotation: function startRotation() {
      this.lastIndex = this.currentIndex;
      this.currentIndex = this.currentIndex + 1;

      if (this.currentIndex >= this.imageList.length) {
        this.currentIndex = 0;
      }
    },
    sliderHandler: function sliderHandler(idx) {
      console.log(idx);
      this.activeIndex = idx;

      if (idx === 0) {
        this.lastIndex = this.imageList.length - 1;
      }

      if (idx !== 0) {
        this.lastIndex = idx - 1;
      }

      console.log(this.imageList);
      console.log(this.activeIndex);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.setInterval = setInterval(function () {
      _this.startRotation();
    }, 3000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.setInterval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/MainBanner.vue?vue&type=template&id=546753b4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/MainBanner.vue?vue&type=template&id=546753b4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mainBanner" }, [
    _c(
      "div",
      { staticClass: "sliderContainer" },
      _vm._l(_vm.imageList, function(img, index) {
        return _c("div", {
          key: img.id,
          class: { active: index === _vm.currentIndex },
          style: {
            backgroundImage: "url(" + img.imgSrc + ")",
            zIndex:
              "" +
              (index === _vm.currentIndex ? 3 : index === _vm.lastIndex ? 2 : 1)
          }
        })
      }),
      0
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.imageList.length, function(index) {
        return _c("li", {
          key: index,
          class: { active: index === _vm.currentIndex + 1 },
          on: {
            click: function($event) {
              return _vm.sliderHandler(index - 1)
            }
          }
        })
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("내가 원하는 그곳을 "),
      _c("span", [_vm._v("찜")]),
      _vm._v("하다.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/companyInfo/MainBanner.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/companyInfo/MainBanner.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainBanner_vue_vue_type_template_id_546753b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainBanner.vue?vue&type=template&id=546753b4& */ "./resources/js/components/companyInfo/MainBanner.vue?vue&type=template&id=546753b4&");
/* harmony import */ var _MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBanner.vue?vue&type=script&lang=js& */ "./resources/js/components/companyInfo/MainBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainBanner_vue_vue_type_template_id_546753b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainBanner_vue_vue_type_template_id_546753b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/companyInfo/MainBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/companyInfo/MainBanner.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/MainBanner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/MainBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/companyInfo/MainBanner.vue?vue&type=template&id=546753b4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/MainBanner.vue?vue&type=template&id=546753b4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_template_id_546753b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainBanner.vue?vue&type=template&id=546753b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/MainBanner.vue?vue&type=template&id=546753b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_template_id_546753b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_template_id_546753b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);