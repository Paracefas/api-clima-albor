"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// routers import
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
// settings
app.set('port', process.env.PORT || 80);
//Middleware
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// routes
app.use('/api', index_1.default);
// listening
app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
