/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Clock = function (_React$Component) {
	    _inherits(Clock, _React$Component);

	    function Clock(props) {
	        _classCallCheck(this, Clock);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clock).call(this, props));

	        _this.state = {
	            time: new Date()
	        };
	        return _this;
	    }

	    _createClass(Clock, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            this.interval = setInterval(function () {
	                return _this2.setState({
	                    time: new Date()
	                });
	            }, 1000);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            clearInterval(this.interval);
	        }
	    }, {
	        key: "_getXYForHand",
	        value: function _getXYForHand(length, interval, time) {
	            return {
	                x: 50 + length * Math.cos(time / interval * 2 * Math.PI - .5 * Math.PI),
	                y: 50 + length * Math.sin(time / interval * 2 * Math.PI - .5 * Math.PI)
	            };
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var seconds = this.state.time.getSeconds();
	            var minutes = this.state.time.getMinutes();
	            var hours = this.state.time.getHours();

	            var secondHand = this._getXYForHand(45, 60, seconds);
	            var minuteHand = this._getXYForHand(40, 60, minutes + seconds / 60);
	            var hourHand = this._getXYForHand(35, 12, (hours + minutes / 60) % 12);

	            return React.createElement(
	                "svg",
	                { viewBox: "0 0 100 100" },
	                React.createElement("circle", { cx: "50", cy: "50", r: "45", fill: "#fff", stroke: "#000" }),
	                React.createElement("line", { x1: "50", y1: "50", x2: secondHand.x, y2: secondHand.y, stroke: "#000" }),
	                React.createElement("line", { x1: "50", y1: "50", x2: minuteHand.x, y2: minuteHand.y, stroke: "#000" }),
	                React.createElement("line", { x1: "50", y1: "50", x2: hourHand.x, y2: hourHand.y, stroke: "#000" })
	            );
	        }
	    }]);

	    return Clock;
	}(React.Component);

	ReactDOM.render(React.createElement(Clock, null), document.getElementById("clock"));

/***/ }
/******/ ]);