(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{329:function(n,t,e){var o=e(330);"string"==typeof o&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(28)(o,i);o.locals&&(n.exports=o.locals)},330:function(n,t,e){(n.exports=e(24)(!1)).push([n.i,".pop-up__container {\n  width: 50%;\n  height: 50px;\n  border: 1px solid black;\n  border-radius: 2px;\n  position: absolute;\n  right: 10px;\n  bottom: 20px;\n  z-index: 100;\n}\n\n.pop-up__container-button-container {\n  width: inherit;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.pop-up__container-button-container-button {\n  width: 23px;\n  height: 23px;\n  border: 1px solid black;\n  border-radius: 1px;\n}\n\n.pop-up__container-message-container {\n  height: inherit;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pop-up__container-message-container-message {\n  font-size: 16px;\n  padding: 10px;\n}\n\n@media screen and (min-width: 500px) {\n  .pop-up__container {\n    width: 20%;\n  }\n}\n",""])},331:function(n,t,e){"use strict";e.r(t),e.d(t,"popUp",(function(){return a}));var o=e(5);e(329);function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var a=new(function(){function n(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),"object"===i(n.instance)?n.instance:(n.instance=this,this)}var t,e,a;return t=n,(e=[{key:"render",value:function(){var n=this;return this.popUpContainer=Object(o.a)("div",{cass:"pop-up__container"}),this.messageContainer=Object(o.a)("div",{class:"pop-up__container-message-container"}),this.closeButtonContainer=Object(o.a)("div",{class:"pop-up__container-button-container"}),this.popUpMessage=Object(o.a)("p",{class:"pop-up__container-message-container-message"},"Downloading error. Please try again."),this.popUpCloseButton=Object(o.a)("button",{class:"pop-up__container-button-container-button"},"x"),this.popUpCloseButton.addEventListener("click",(function(){n.popUpContainer.remove()})),this.messageContainer.append(this.popUpMessage),this.closeButtonContainer.append(this.popUpCloseButton),this.popUpContainer.append(this.closeButtonContainer,this.messageContainer),this.popUpContainer}}])&&p(t.prototype,e),a&&p(t,a),n}())}}]);
//# sourceMappingURL=1.index.js.map