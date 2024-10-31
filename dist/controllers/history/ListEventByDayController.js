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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEventByDayController = void 0;
const ListEventByDayService_1 = require("../../services/history/ListEventByDayService");
class ListEventByDayController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { room_id, day } = req.body;
            const listEventByDayService = new ListEventByDayService_1.ListEventByDayService();
            const event = yield listEventByDayService.execute({
                room_id,
                day
            });
            return res.json(event);
        });
    }
}
exports.ListEventByDayController = ListEventByDayController;
