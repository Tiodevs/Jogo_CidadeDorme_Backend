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
exports.AddPlayerController = void 0;
const AddPlayerService_1 = require("../../services/player/AddPlayerService");
class AddPlayerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, roomId } = req.body;
            const addPlayerService = new AddPlayerService_1.AddPlayerService();
            const player = yield addPlayerService.execute({
                name,
                roomId
            });
            return res.json(player);
        });
    }
}
exports.AddPlayerController = AddPlayerController;
