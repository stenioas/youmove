module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\\\",\\\"amount\\\":100},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\\\",\\\"amount\\\":50},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\\\",\\\"amount\\\":90},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\\\",\\\"amount\\\":140},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\\\",\\\"amount\\\":90}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NoYWxsZW5nZXMuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./challenges.json\n");

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallegensProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallegensProvider\", function() { return ChallegensProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\nvar _jsxFileName = \"/home/stenio/Projetos-WEB/Rocketseat/NLW4/React/moveit-next/src/contexts/ChallengesContext.tsx\";\n\n\nconst ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallegensProvider({\n  children\n}) {\n  const {\n    0: level,\n    1: setLevel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1);\n  const {\n    0: currentExperience,\n    1: setCurrentExperience\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: challengesCompleted,\n    1: setChallengesCompleted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: activeChallenge,\n    1: setActiveChallenge\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Notification.requestPermission();\n  }, []);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n    new Audio('/notification.mp3').play();\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo desafio 🎉', {\n        body: `Valendo ${challenge.amount} xp!`\n      });\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    const {\n      amount\n    } = activeChallenge;\n    let finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level,\n      currentExperience,\n      challengesCompleted,\n      levelUp,\n      startNewChallenge,\n      activeChallenge,\n      resetChallenge,\n      experienceToNextLevel,\n      completeChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2ViMjgiXSwibmFtZXMiOlsiQ2hhbGxlbmdlc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlZ2Vuc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbCIsInNldExldmVsIiwidXNlU3RhdGUiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBd0JPLE1BQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsQ0FBNEI7QUFBRUM7QUFBRixDQUE1QixFQUFtRTtBQUN4RSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q0Ysc0RBQVEsQ0FBQyxDQUFELENBQTFEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLG1CQUFEO0FBQUEsT0FBc0JDO0FBQXRCLE1BQWdESixzREFBUSxDQUFDLENBQUQsQ0FBOUQ7QUFFQSxRQUFNO0FBQUEsT0FBQ0ssZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q04sc0RBQVEsQ0FBQyxJQUFELENBQXREO0FBRUEsUUFBTU8scUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNYLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUI7QUFFQVkseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLGdCQUFZLENBQUNDLGlCQUFiO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCZCxZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFFRCxXQUFTZ0IsaUJBQVQsR0FBNkI7QUFDM0IsVUFBTUMsb0JBQW9CLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUFXUixJQUFJLENBQUNTLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUE1QjtBQUVBVCxzQkFBa0IsQ0FBQ2MsU0FBRCxDQUFsQjtBQUVBLFFBQUlDLEtBQUosQ0FBVSxtQkFBVixFQUErQkMsSUFBL0I7O0FBRUEsUUFBSVgsWUFBWSxDQUFDWSxVQUFiLEtBQTRCLFNBQWhDLEVBQTJDO0FBQ3pDLFVBQUlaLFlBQUosQ0FBaUIsaUJBQWpCLEVBQW9DO0FBQ2xDYSxZQUFJLEVBQUcsV0FBVUosU0FBUyxDQUFDSyxNQUFPO0FBREEsT0FBcEM7QUFHRDtBQUNGOztBQUVELFdBQVNDLGNBQVQsR0FBMEI7QUFDeEJwQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBRUQsV0FBU3FCLGlCQUFULEdBQTZCO0FBQzNCLFFBQUksQ0FBQ3RCLGVBQUwsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxVQUFNO0FBQUVvQjtBQUFGLFFBQWFwQixlQUFuQjtBQUVBLFFBQUl1QixlQUFlLEdBQUczQixpQkFBaUIsR0FBR3dCLE1BQTFDOztBQUVBLFFBQUlHLGVBQWUsSUFBSXJCLHFCQUF2QixFQUE4QztBQUM1Q3FCLHFCQUFlLEdBQUdBLGVBQWUsR0FBR3JCLHFCQUFwQztBQUNBTSxhQUFPO0FBQ1I7O0FBRURYLHdCQUFvQixDQUFDMEIsZUFBRCxDQUFwQjtBQUNBdEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixTQUFLLEVBQUU7QUFDakNMLFdBRGlDO0FBRWpDRyx1QkFGaUM7QUFHakNFLHlCQUhpQztBQUlqQ1UsYUFKaUM7QUFLakNDLHVCQUxpQztBQU1qQ1QscUJBTmlDO0FBT2pDcUIsb0JBUGlDO0FBUWpDbkIsMkJBUmlDO0FBU2pDb0I7QUFUaUMsS0FBbkM7QUFBQSxjQVlHOUI7QUFaSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZWdlbnNDb250ZXh0RGF0YSB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZWdlbnNDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVnZW5zUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuICB9LCBbXSlcbiAgXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XG5cbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XG5cbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIPCfjoknLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH0geHAhYFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcbiAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XG5cbiAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XG5cbiAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xuICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgbGV2ZWxVcCgpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgIGxldmVsLFxuICAgICAgY3VycmVudEV4cGVyaWVuY2UsXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgbGV2ZWxVcCxcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgcmVzZXRDaGFsbGVuZ2UsXG4gICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\nvar _jsxFileName = \"/home/stenio/Projetos-WEB/Rocketseat/NLW4/React/moveit-next/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallegensProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UscUVBQUMsOEVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcblxuaW1wb3J0IHsgQ2hhbGxlZ2Vuc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlZ2Vuc1Byb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2hhbGxlZ2Vuc1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });