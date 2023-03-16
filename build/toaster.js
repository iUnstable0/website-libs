"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_hot_toast_1 = require("react-hot-toast");
class lib_toaster {
    static multiToast(action, toasts) {
        for (let i = 0; i < toasts.length - 1; i++) {
            // @ts-ignore
            react_hot_toast_1.toast[action](toasts[i]);
        }
        return toasts[toasts.length - 1];
    }
}
exports.default = lib_toaster;
