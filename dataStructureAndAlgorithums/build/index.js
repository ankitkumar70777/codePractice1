"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var world = 'world';
function hello(who) {
    if (who === void 0) { who = world; }
    console.log("Hello ".concat(who, "! "));
}
exports.hello = hello;
