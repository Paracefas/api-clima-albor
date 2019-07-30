"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validations_1 = __importDefault(require("./validations"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
async function getCurrent(alborKey, api) {
    try {
        await validations_1.default(alborKey);
        const result = await cross_fetch_1.default(api.call());
        return await result.json();
    }
    catch (e) {
        console.error(e);
        return e;
    }
}
exports.default = getCurrent;
