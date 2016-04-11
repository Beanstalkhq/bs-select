/*!
 * cp-select
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.5.12
 */
!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={exports:{},id:o,loaded:!1};return e[o].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=(n(1),n(2));o.module("cp-select",[]),n(3)},function(e,t){e.exports=$},function(e,t){e.exports=angular},function(e,t,n){"use strict";var o=n(2),l=n(4),i=n(5);n(6),o.module("cp-select").directive("cpSelect",["$timeout",function(e){return{restrict:"E",transclude:!0,scope:{collection:"=",placeholder:"@",keyModel:"@",transparent:"@",appendText:"@",autosizeInput:"@"},require:"ng-Model",template:i,link:function(e,t,n,o){function i(t){return l.find(e.collection,{key:t})}function s(t){p+=String.fromCharCode(t);var n=r(p);n>-1&&(e.selectedIndex=n,e.showDialog?d(e.collection[e.selectedIndex]):e.updateModel(e.collection[e.selectedIndex])),u=setTimeout(function(){p=""},1e3)}function c(t){if(!t)return-1;var n=l.has(t,"value");return l.findIndex(e.collection,function(e){return n?t.key===e.key:t===e})}function r(t){return t=t.toLowerCase(),l.findIndex(e.collection,function(e){return 0===a(e).toLowerCase().indexOf(t)})}function a(e){return l.isString(e.value)?e.value:e}function d(n){var o=c(n),l=e.collection.length-o;o>5&&6>l?e.collection.length<11?e.dialogStyle={top:-2+(36*o*-1-20)+"px"}:(e.dialogStyle={top:-226-36*(5-l)+"px"},setTimeout(function(){t.find(".cp-select__menu").scrollTop(36*o-180)})):o>5?(e.dialogStyle={top:"-203px"},setTimeout(function(){t.find(".cp-select__menu").scrollTop(36*o-180)})):e.dialogStyle={top:-2+(36*o*-1-20)+"px"}}var u,p="";e.placeholder=e.placeholder||"";var f=!l.isUndefined(n.keyModel);e.appendText=e.appendText?e.appendText+" ":"",e.showDialog=!1,e.selectedIndex=null,e.isString=l.isString,o.$render=function(){var n=o.$viewValue?a(o.$viewValue):"";f&&(n=i(n),n=n?n.value:""),n=l.isString(n)&&n.length>0?n:e.placeholder,t.find(".cp-select__selected").text(e.appendText+""+n)},e.updateModel=function(n){f&&(n=n.key),o.$setViewValue(n),o.$render(),e.closeDialog(),setTimeout(function(){t.find("input").focus()})},e.focusSelect=function(){t.find(".cp-select").addClass("+focus")},n.$observe("disabled",function(t){l.has(n,"ngDisabled")?e.disabled=t:e.disabled=l.has(n,"disabled")}),e.keyDown=function(t){var n=t.which,i=o.$viewValue;9!==n&&t.preventDefault(),13===n?e.updateModel(e.collection[e.selectedIndex]):38===n?(e.showDialog=!0,e.selectedIndex=l.isNull(e.selectedIndex)?c(i):e.selectedIndex-1,e.selectedIndex<0&&(e.selectedIndex=0),d(e.collection[e.selectedIndex])):40===n?(e.showDialog=!0,e.selectedIndex=l.isNull(e.selectedIndex)?c(i):e.selectedIndex+1,e.selectedIndex>e.collection.length-1&&(e.selectedIndex=e.collection.length-1),d(e.collection[e.selectedIndex])):27===n?e.closeDialog():s(t.which)},e.toggleDialog=function(){var n=o.$viewValue;e.showDialog?(e.showDialog=!1,t.find("input").focus()):(e.selectedIndex=null,n&&d(n),e.showDialog=!0,t.find("input").focus())},e.onBlur=function(n){t.find(".cp-select").removeClass("+focus"),e.closeDialog()},e.closeDialog=function(t){e.showDialog=!1}}}}])},function(e,t){e.exports=_},function(e,t){e.exports='<input class=cp-select__hidden-input ng-disabled=disabled ng-focus=focusSelect() ng-blur=onBlur($event) ng-keydown=keyDown($event)><div class=cp-select ng-click="!disabled && toggleDialog()" ng-class="{\'cp-select-transparent\': transparent, \'+disabled\': disabled, \'cps-form-control-resize\': autosizeInput}"><div class=cp-select__selected></div><div class=cp-select__icon></div></div><ul ng-style=dialogStyle class="cp-select__menu cps-dropdown-menu" role=menu ng-if=showDialog><li ng-mousedown=updateModel(item) ng-repeat="item in ::collection" ng-class="{\'+selected\': (selectedIndex === $index)}"><a>{{appendText}} {{isString(item.value) ? item.value : item}}</a></li></ul>'},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.id,o,""]]);n(9)(o,{})},function(e,t,n){t=e.exports=n(8)(),t.push([e.id,"cp-select{position:relative;height:32px;font-size:12px}.cp-select{border-radius:2px;box-shadow:0 1px 4px 0 rgba(0,0,0,.26);display:inline-block;padding:8px 14px;color:#AFAFAF;background-color:#fff;cursor:pointer;width:100%;height:32px}.cp-select-transparent{border-radius:0;box-shadow:none;background:rgba(0,0,0,0);color:#000}.cps-has-error .cp-select{box-shadow:0 1px 4px 0 #FE996C}.cp-select.\\+disabled{cursor:not-allowed;background-color:#F9F9F9;opacity:1;border:1px dashed #CFCFCF}.cp-select.\\+focus{box-shadow:0 0 0 2px rgba(76,175,80,.3)}.cp-select__selected{width:calc(100% - 15px);display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cp-select__icon{display:inline-block;border-color:#AFAFAF transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;float:right;position:relative;top:6px}cp-select .cp-select__menu{display:block;max-height:400px;overflow:auto;position:absolute;font-size:12px}cp-select .cp-select__menu li{height:36px!important}cp-select .cp-select__menu li>a{height:33px}cp-select .cp-select__menu li.\\+selected>a{color:#333;text-decoration:none;background-color:#f7f7f7}.cp-select__hidden-input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],l=d[o.id];if(l){l.refs++;for(var i=0;i<l.parts.length;i++)l.parts[i](o.parts[i]);for(;i<o.parts.length;i++)l.parts.push(s(o.parts[i],t))}else{for(var c=[],i=0;i<o.parts.length;i++)c.push(s(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:c}}}}function l(e){for(var t=[],n={},o=0;o<e.length;o++){var l=e[o],i=l[0],s=l[1],c=l[2],r=l[3],a={css:s,media:c,sourceMap:r};n[i]?n[i].parts.push(a):t.push(n[i]={id:i,parts:[a]})}return t}function i(){var e=document.createElement("style"),t=f();return e.type="text/css",t.appendChild(e),e}function s(e,t){var n,o,l;if(t.singleton){var s=g++;n=h||(h=i()),o=r.bind(null,n,s,!1),l=r.bind(null,n,s,!0)}else n=i(),o=a.bind(null,n),l=function(){n.parentNode.removeChild(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else l()}}function c(e,t,n){var o=["/** >>"+t+" **/","/** "+t+"<< **/"],l=e.lastIndexOf(o[0]),i=n?o[0]+n+o[1]:"";if(e.lastIndexOf(o[0])>=0){var s=e.lastIndexOf(o[1])+o[1].length;return e.slice(0,l)+i+e.slice(s)}return e+i}function r(e,t,n,o){var l=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=c(e.styleSheet.cssText,t,l);else{var i=document.createTextNode(l),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,l=t.sourceMap;if(l&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(l))+" */",n='@import url("data:text/css;base64,'+btoa(n)+'")'}catch(i){}if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var n=l(e);return o(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var c=n[s],r=d[c.id];r.refs--,i.push(r)}if(e){var a=l(e);o(a,t)}for(var s=0;s<i.length;s++){var r=i[s];if(0===r.refs){for(var u=0;u<r.parts.length;u++)r.parts[u]();delete d[r.id]}}}}}]);
//# sourceMappingURL=cp-select.js.map