"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let translations = new Map();
const en = [
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Mist',
    'Smoke',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado',
    'Clear',
    'Clouds',
];
const es = [
    'Tormenta electrica',
    'Llovizna',
    'Lluvia',
    'Nieve',
    'Niebla',
    'Neblina',
    'Polvo',
    'Niebla',
    'Arena',
    'Polvo',
    'Ceniza',
    'Chubasco',
    'Tornado',
    'Despejado',
    'Nublado'
];
for (let key of en) {
    translations.set(key, es[en.indexOf(key)]);
}
exports.default = translations;
