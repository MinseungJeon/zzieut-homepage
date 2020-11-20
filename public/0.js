(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyInfoData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyInfoData */ "./resources/js/components/companyInfo/CompanyInfoData.js");
/* harmony import */ var _MainBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBanner */ "./resources/js/components/companyInfo/MainBanner.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "main-banner": _MainBanner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {},
  data: function data() {
    return {
      companyInfos: _objectSpread({}, _CompanyInfoData__WEBPACK_IMPORTED_MODULE_0__["data"].companyProfile),
      members: _objectSpread({}, _CompanyInfoData__WEBPACK_IMPORTED_MODULE_0__["data"].members),
      contactInfo: _objectSpread({}, _CompanyInfoData__WEBPACK_IMPORTED_MODULE_0__["data"].contact),
      brandMission: _objectSpread({}, _CompanyInfoData__WEBPACK_IMPORTED_MODULE_0__["data"].brandMission),
      history: _objectSpread({}, _CompanyInfoData__WEBPACK_IMPORTED_MODULE_0__["data"].history)
    };
  }
});

/***/ }),

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MainBanner",
  data: function data() {
    return {
      currentIndex: 0,
      imgList: [{
        id: 1,
        imgSrc: "https://images.unsplash.com/photo-1580508158643-4bf9f8da03c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      }, {
        id: 2,
        imgSrc: "https://images.unsplash.com/photo-1549921613-8db30562bad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      }, {
        id: 3,
        imgSrc: "https://images.unsplash.com/photo-1516959512470-53955cd40f40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80"
      }]
    };
  },
  methods: {
    startRotation: function startRotation() {
      var _this = this;

      setInterval(function () {
        if (_this.currentIndex === 3) {
          _this.currentIndex = 0;
        }

        _this.currentIndex = _this.currentIndex + 1;
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "CompanyInfo" },
    [
      _c("main-banner"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "brandMission" }, [
        _c("h3", [_vm._v("Brand mission")]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "wrapper" }, [
          _c(
            "ul",
            _vm._l(_vm.brandMission, function(mission) {
              return _c("li", { key: mission.id }, [
                _c("span", {
                  domProps: { innerHTML: _vm._s("" + mission.head) }
                }),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(mission.description) +
                      "\n                    "
                  )
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "companyProfile" }, [
        _c("h3", [_vm._v("COMPANY PROFILE")]),
        _vm._v(" "),
        _c("div", { staticClass: "wrapper" }, [
          _c(
            "table",
            _vm._l(_vm.companyInfos, function(companyInfo) {
              return _c("tr", { key: companyInfo.head }, [
                _c("th", [_vm._v(_vm._s(companyInfo.head))]),
                _vm._v(" "),
                _c("td", {
                  domProps: { innerHTML: _vm._s("" + companyInfo.description) }
                })
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "history" }, [
        _c("h3", [_vm._v("History")]),
        _vm._v(" "),
        _c("div", { staticClass: "wrapper" }, [
          _c(
            "ul",
            _vm._l(_vm.history, function(story) {
              return _c("li", { key: story.year }, [
                _c("span", [_vm._v(_vm._s(story.year))]),
                _vm._v(" "),
                _c(
                  "table",
                  _vm._l(story.historyList, function(list) {
                    return _c("tr", { key: list.month }, [
                      _c("td", [_vm._v(_vm._s(list.month))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(list.description))])
                    ])
                  }),
                  0
                )
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "members" }, [
        _c("h3", [_vm._v("MEMBERS")]),
        _vm._v(" "),
        _c("div", { staticClass: "wrapper" }, [
          _c(
            "ul",
            _vm._l(_vm.members, function(member) {
              return _c("li", { key: member.name }, [
                _c("p", [
                  _c("span", [_vm._v(_vm._s(member.name))]),
                  _vm._v(
                    " " + _vm._s(member.position) + "\n                    "
                  )
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "contact" }, [
        _c("h3", [_vm._v("CONTACT US")]),
        _vm._v(" "),
        _c("div", { staticClass: "wrapper" }, [
          _c(
            "table",
            _vm._l(_vm.contactInfo, function(contact) {
              return _c("tr", { key: contact.head }, [
                _c("th", [_vm._v(_vm._s(contact.head))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(contact.description) +
                      "\n                    "
                  )
                ])
              ])
            }),
            0
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "vision" }, [
      _c("h3", [_vm._v("VISION")]),
      _vm._v(" "),
      _c("div", { staticClass: "contents" }, [
        _c("div", [
          _c("p", [
            _vm._v(
              "\n                    Let's help people\n                    "
            ),
            _c("span", [_vm._v("Play & Rest Better")])
          ])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("span", [_vm._v("01")]),
            _vm._v(" "),
            _c("p", [_vm._v("By making it convenient and accessible")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("span", [_vm._v("02")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                        By providing Inspiring\n                        "
              ),
              _c("br"),
              _vm._v(
                "\n                        content on how/where to play\n                    "
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n            개개인 취향과 성향을 기반으로 나만을 위한 취향저격 콘텐츠를\n            추천해주는"
      ),
      _c("br"),
      _vm._v("\n            여가생활 필수 어플, "),
      _c("span", { staticClass: "point" }, [_vm._v("찜")])
    ])
  }
]
render._withStripped = true



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
    _c("img", {
      attrs: { src: "" + _vm.imgList[_vm.currentIndex].imgSrc, alt: "" }
    }),
    _vm._v(" "),
    _vm._m(0)
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

/***/ "./resources/js/components/companyInfo/CompanyInfo.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/companyInfo/CompanyInfo.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyInfo_vue_vue_type_template_id_6f64456c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true& */ "./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true&");
/* harmony import */ var _CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyInfo_vue_vue_type_template_id_6f64456c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyInfo_vue_vue_type_template_id_6f64456c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f64456c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/companyInfo/CompanyInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_template_id_6f64456c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/CompanyInfo.vue?vue&type=template&id=6f64456c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_template_id_6f64456c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInfo_vue_vue_type_template_id_6f64456c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/companyInfo/CompanyInfoData.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/companyInfo/CompanyInfoData.js ***!
  \****************************************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = {
  brandMission: [{
    id: 1,
    head: "여가 경험을 공유하는 <span class='point'>공간</span>",
    description: "내가 기록한 여가 경험을 나에겐 추억이, 누군가에겐 영감이 되는 곳"
  }, {
    id: 2,
    head: "혼자가 아닌 누군가와 함께 한다는 <span class='point'>즐거움</span>",
    description: "내가 기록한 여가 경험을 나에겐 추억이, 누군가에겐 영감이 되는 곳"
  }, {
    id: 3,
    head: "우리가 함께 만드는 <span class='point'>경험 지도</span>",
    description: "우리의 경험을 모아 최대 규모의 공유 지도를 만드는 것"
  }],
  companyProfile: [{
    head: "Company Name",
    description: "ZziEut <span>찌읏</span>"
  }, {
    head: "CEO",
    description: "Moon Seong-soo <span>문성수</span>"
  }, {
    head: "Main Services",
    description: "Zzim, TsuRoop, ZzimStore <span>찜, 츄릅, 찜스토어</span>"
  }, {
    head: "Main Business",
    description: "SNS Commerce Solutions, Fashion Design Platform, SI, Agency"
  }],
  history: [{
    year: 2020,
    historyList: [{
      month: "12",
      description: "'찜' 국민 여가생활 필수 어플"
    }, {
      month: "11",
      description: "수많은 여가정보 중 내 취향만 골라서 쏙쏙 ONLY FOR YOU!"
    }, {
      month: "10",
      description: "내가 찜 하고 싶은 그것"
    }, {
      month: "09",
      description: "개개인 취향과 성향을 기반으로 나만을 위한 취향저격 콘텐츠 추천"
    }, {
      month: "08",
      description: "나와 친구의 공통 취향"
    }]
  }, {
    year: 2019,
    historyList: [{
      month: "12",
      description: "이 친구랑 나는 뭘 하고 놀면 좋을까? 공통 취향에 기반한 추천까지"
    }, {
      month: "11",
      description: "다른 사람들은 뭐하면서 놀까"
    }, {
      month: "10",
      description: "나랑 비슷한 성향의 다양한 사람들과 공유하고, 소통하고, 영감도 얻고"
    }, {
      month: "09",
      description: "내 친구 소식 무엇?"
    }, {
      month: "08",
      description: "내 친구들이 가고 싶어하거나 다녀온 곳들이 한 눈에"
    }]
  }],
  members: [{
    name: "문성수",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "Founder/CEO"
  }, {
    name: "최민석",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "Co-founder/COO"
  }, {
    name: "이지수",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "Contents-manager"
  }, {
    name: "박주호",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "iOS, Swift Developer"
  }, {
    name: "한혁종",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "SI Developer"
  }, {
    name: "심재우",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "Web Front-end Developer"
  }, {
    name: "김성진",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "UI/UX Designer"
  }, {
    name: "장유정",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    position: "Full-stack Developer"
  }],
  contact: [{
    head: "Address",
    description: "8-12, Dongsomoonro 23-gil, Seongbuk-gu, Seoul, Republic of Korea (Jian Building, 4th floor)"
  }, {
    head: "Direction",
    description: "7 minutes walk from exit 7 of Sungsin Women's University Station"
  }, {
    head: "Phone",
    description: "070-4905-2942"
  }, {
    head: "Email",
    description: "kkotkkio@zzieut.com"
  }]
};

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