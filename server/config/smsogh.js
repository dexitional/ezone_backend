"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SMS 
const axios_1 = __importDefault(require("axios"));
//var axios = require('axios');
module.exports = function (phone, msg, from = 'EC-UCC') {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            text: msg,
            type: 0,
            sender: from,
            destinations: phone,
        };
        const url = `https://api.smsonlinegh.com/v5/message/sms/send`;
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Host": "api.smsonlinegh.com",
                "Authorization": `key ${process.env.SMS_API_KEY}`
            }
        };
        const res = yield axios_1.default.post(url, data, options);
        const resp = yield res.data;
        console.log(resp);
        if (res.status == 200 && resp.handshake.id == 0 && resp.handshake.label == 'HSHK_OK')
            return resp.data;
        return null;
    });
};
