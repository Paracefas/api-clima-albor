"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const validations_1 = __importDefault(require("../validations"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send('<h1>Api-Clima | Home</h1>');
});
router.get('/:lat&:lon&:key', async (req, res) => {
    const { lat, lon, key } = req.params;
    try {
        await validations_1.default(key);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`;
        const result = await cross_fetch_1.default(url);
        const resJson = await result.json();
        res.json(resJson);
    }
    catch (e) {
        console.error(e);
        res.end();
    }
});
exports.default = router;
