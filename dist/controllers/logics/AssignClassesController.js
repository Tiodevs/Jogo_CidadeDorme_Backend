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
exports.AssignClassesController = void 0;
const AssignClassesService_1 = require("../../services/logics/AssignClassesService");
class AssignClassesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { room_id } = req.body;
            const assignClassesService = new AssignClassesService_1.AssignClassesService();
            const assignClasses = yield assignClassesService.execute(room_id);
            return res.json(assignClasses);
        });
    }
}
exports.AssignClassesController = AssignClassesController;
