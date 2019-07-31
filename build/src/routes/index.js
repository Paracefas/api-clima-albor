"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getCurrent_1 = __importDefault(require("../getCurrent"));
const WeatherMap_1 = __importDefault(require("../WeatherMap"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send('<h1>Api-Clima | Home</h1>');
});
router.get('/:lat&:lon&:key', async (req, res) => {
    const { lat, lon, key } = req.params;
    res.json(await getCurrent_1.default(key, new WeatherMap_1.default(lat, lon)));
});
exports.default = router;
