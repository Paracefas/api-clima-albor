"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validations_1 = __importDefault(require("./validations"));
async function getCurrent(alborKey, api) {
    try {
        await validations_1.default(alborKey);
        return await api.call();
    }
    catch (e) {
        console.error(e);
        return e;
    }
}
exports.default = getCurrent;
