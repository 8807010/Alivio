/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_mobileNav.js":
/*!******************************!*\
  !*** ./src/js/_mobileNav.js ***!
  \******************************/
/***/ (() => {

const mobileNavButton = document.querySelector('.header__burger');
const mobileNavIcon = document.querySelector('.header__burger-icon');
const mobileNav = document.querySelector('.mobile-nav');
mobileNavButton.addEventListener('click', function () {
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

/***/ }),

/***/ "./src/js/_preloader.js":
/*!******************************!*\
  !*** ./src/js/_preloader.js ***!
  \******************************/
/***/ (() => {

const preloader = window.document.getElementById("preloader");
{
  if (preloader) {
    let show_content = window.setTimeout(() => preloader.style.display = "none", 2000);
  }
}

/***/ }),

/***/ "./src/js/_video.js":
/*!**************************!*\
  !*** ./src/js/_video.js ***!
  \**************************/
/***/ (() => {

const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');
videoBtn.addEventListener('click', function () {
  function toggleOverlay(event) {
    if (event.type === 'mouseleave') {
      videoOverlay.classList.add('hidden');
    } else {
      videoOverlay.classList.remove('hidden');
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoBtnIcon.src = './img/story/pause-white.svg';
    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;
  } else {
    videoFile.pause();
    videoBtnIcon.src = './img/story/play-white.svg';
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobileNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mobileNav.js */ "./src/js/_mobileNav.js");
/* harmony import */ var _mobileNav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mobileNav_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_video.js */ "./src/js/_video.js");
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_video_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_preloader.js */ "./src/js/_preloader.js");
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_preloader_js__WEBPACK_IMPORTED_MODULE_2__);
// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';



})();

/******/ })()
;
//# sourceMappingURL=main.js.map