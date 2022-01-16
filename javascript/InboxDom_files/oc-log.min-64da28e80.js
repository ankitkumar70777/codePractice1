!function(){"use strict";function e(e){if("object"!=typeof e)throw new Error("Logger needs options object");if("string"!=typeof e.url)throw new Error("Logger needs url");this._url=e.url,this._cors=!0===e.cors,this._baseLogData={},this._maxNumberOfLogs=1e3,"number"==typeof e.maxNumberOfLogs&&(this._maxNumberOfLogs=e.maxNumberOfLogs),this._numberOfLogsSent=0,"string"==typeof e.extraUid&&this.addLogData("extra_uid",e.extraUid)}var t=function(e){var t=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;if("function"!=typeof e&&("object"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var i,a,s=[];for(i in e)t.call(e,i)&&s.push(i);if(o)for(a=0;a<r;a++)t.call(e,n[a])&&s.push(n[a]);return s},o=function(e,o){var n=[];n="function"==typeof Object.keys?Object.keys(o):t(o);for(var r=0;r<n.length;r++)e[n[r]]=o[n[r]]},n=function(){return"undefined"!=typeof $&&$.hasOwnProperty("ajax")},r=function(e,t,o){try{n()&&i(e,t,o)}catch(r){}},i=function(e,t,o){var n=0,r={url:e,method:"POST",data:{data:o},xhrFields:{withCredentials:t}},i=function(){$.ajax(r).fail(function(e,t,o){n>=5||(n+=1,setTimeout(function(){i(r)},1e3*n))})};i()},a=function(e){if(void 0===e)return{};if(null===e)return{};var t={};if("undefined"!=typeof e.message&&(t.exception_message=e.message),"undefined"!=typeof e.name&&(t.exception_name=e.name),"undefined"!=typeof e.columnNumber&&(t.exception_column=e.columnNumber),"undefined"!=typeof e.lineNumber&&(t.exception_line=e.lineNumber),"undefined"!=typeof e.fileName&&(t.exception_file=e.fileName),"undefined"!=typeof e.stack){var o="no valid stack info";if("string"==typeof e.stack)o=e.stack;else try{o=JSON.stringify(e.stack)}catch(n){o="failed to create stack: "+n.message}t.exception_stack=o}return t},s=function(e,t,n){"string"!=typeof e&&(e="no valid message in log");var r={message:e};try{if(o(r,t),void 0===n);else if(null===n);else if("string"==typeof n)r.info=n;else if("number"==typeof n)r.info=n.toString();else if(n instanceof Error){var i=a(n);o(r,i)}else"object"==typeof n?o(r,n):r.info=JSON.stringify(n);try{r.page_url=window.location.href}catch(s){}}catch(s){r.info="message: "+e,r.message="exception in logger",r.exception_message=s.message,t.hasOwnProperty("job_id")&&(r.job_id=t.job_id),t.hasOwnProperty("extra_uid")&&(r.extra_uid=t.extra_uid)}return r};e.prototype.parseError=function(e){return a(e)},e.prototype.addLogData=function(e,t){this._baseLogData[e]=t},e.prototype.log=function(e,t,o){if(!(++this._numberOfLogsSent>this._maxNumberOfLogs))try{var n=s(e,this._baseLogData,t);void 0!==o&&(n.level=o),r(this._url,this._cors,n)}catch(i){}},e.prototype.debug=function(e,t){this.log(e,t,100)},e.prototype.info=function(e,t){this.log(e,t,200)},e.prototype.notice=function(e,t){this.log(e,t,250)},e.prototype.warning=function(e,t){this.log(e,t,300)},e.prototype.error=function(e,t){this.log(e,t,400)},e.prototype.critical=function(e,t){this.log(e,t,500)},e.prototype.alert=function(e,t){this.log(e,t,550)},e.prototype.emergency=function(e,t){this.log(e,t,600)};var c=function(e){var t=e;try{if(t=t.toLowerCase(),"script error."===(t=t.trim())||"script error"===t)return!1;if("access is denied."===t||"access is denied"===t)return!1}catch(o){}return!0},f={url:"/api/z",cors:!1,maxNumberOfLogs:500,extraUid:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}()};if("object"==typeof window.qgLoggerOptions){var p=window.qgLoggerOptions;"string"==typeof p.url&&(f.url=p.url),f.cors=!0===p.cors}var u=new e(f);!function(e){var t=window.onerror;window.onerror=function(o,n,r,i,a){try{if(c(o)){var s={};void 0!==a&&null!==a&&(s=e.parseError(a)),s.exception_message=o,void 0!==n&&(s.exception_source=n),void 0!==r&&(s.exception_line=r),void 0!==i&&(s.exception_column=i),e.error("Uncaught JS Exception",s)}}catch(f){e.error("onerror exception",f)}return"function"==typeof t&&t(o,n,r,i,a),!1}}(u),window.qgLogger=u}(),function(){function e(){var e={gtag:!1,adsby:!1,pb:!1,jq:!1,ashown:!1,au:0,pb_resp:0,pb_target:0,pb_render:0,pb_cpm:[],pb_t:[],pb_failed:!0,werb:!1,tainted:!1};if(window.jQuery&&(e.jq=!0),"undefined"!=typeof googletag&&"function"==typeof googletag.getVersion?e.gtag=!0:e.tainted=!0,"object"==typeof adsbygoogle?e.adsby=!0:e.tainted=!0,"undefined"!=typeof pbjs&&"string"==typeof pbjs.version?e.pb=!0:e.tainted=!0,"undefined"!=typeof ocWerb&&"boolean"==typeof ocWerb.prebidFailed?e.pb_failed=ocWerb.prebidFailed:e.pb_failed=!0,"object"==typeof ocWerb?(e.werb=!0,e.au=ocWerb.adUnits.length):e.tainted=!0,(!0===e.jq&&!1===e.tainted||"object"==typeof ocWerb&&!0===ocWerb.prebidFailed)&&$.each(ocWerb.adUnits,function(t,o){$("#"+o.div).height()>1?e.ashown=!0:!1===$("#"+o.div).parent().hasClass("hidden-lg")?e.tainted=!0:e.au--}),!1===e.tainted&&!0===e.pb&&(e.pb_resp=Object.keys(pbjs.getBidResponses()).length),!1===e.tainted&&!0===e.pb&&(e.pb_resp=Object.keys(pbjs.getBidResponses()).length),!1===e.tainted&&!0===e.jq&&!0===e.pb){var o=pbjs.getBidResponses();for(var n in o)if(o.hasOwnProperty(n))for(var r=o[n].bids,i=0;i<r.length;i++){var a=r[i];e.pb_cpm.push({c:a.cpm,n:a.bidder}),e.pb_t.push({t:a.timeToRespond,n:a.bidder}),"undefined"!=typeof a.status&&("targetingSet"===a.status&&e.pb_target++,"rendered"===a.status&&e.pb_render++)}}t("ocCheck",e)}var t=function(e,t){try{window.qgLogger.log(e,t)}catch(o){}};window.ocCheck={checkA:e}}();