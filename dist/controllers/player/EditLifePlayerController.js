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
exports.EditLifePlayerController = void 0;
const EditLifePlayerService_1 = require("../../services/player/EditLifePlayerService");
class EditLifePlayerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id, life } = req.body;
            const editLifePlayerService = new EditLifePlayerService_1.EditLifePlayerService();
            const player = yield editLifePlayerService.execute({
                user_id,
                life
            });
            return res.json(player);
        });
    }
}
exports.EditLifePlayerController = EditLifePlayerController;
