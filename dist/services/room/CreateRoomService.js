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
exports.CreateRoomService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateRoomService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ CountHealer, CountKiller, CountPolice, CountPerson }) {
            // Verifica se tem algum campo vazio
            if (!CountHealer) {
                throw new Error("CountHealer incorreto");
            }
            if (!CountKiller) {
                throw new Error("CountKiller não informado");
            }
            if (!CountPolice) {
                throw new Error("CountPolice não informada");
            }
            if (!CountPerson) {
                throw new Error("CountPerson não informada");
            }
            // Cria o room
            const room = yield prisma_1.default.room.create({
                data: {
                    CountHealer,
                    CountKiller,
                    CountPolice,
                    CountPerson
                },
                select: {
                    CountHealer: true,
                    CountKiller: true,
                    CountPolice: true,
                    CountPerson: true,
                    id: true
                }
            });
            return room;
        });
    }
}
exports.CreateRoomService = CreateRoomService;
