"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateKey(key) {
    return new Promise((resolve, reject) => {
        if (key !== (process.env.ALBOR_KEY || 0)) {
            reject(new Error('Invalid albor key.'));
        }
        resolve();
    });
}
exports.default = validateKey;
