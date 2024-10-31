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
exports.EndVotesController = void 0;
const EndVotes_1 = require("../../services/logics/EndVotes");
class EndVotesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { room_id } = req.body;
            const endVotes = new EndVotes_1.EndVotes();
            const endVotesres = yield endVotes.execute(room_id);
            return res.json(endVotesres);
        });
    }
}
exports.EndVotesController = EndVotesController;
