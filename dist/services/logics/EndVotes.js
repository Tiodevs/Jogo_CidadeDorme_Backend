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
exports.EndVotes = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class EndVotes {
    execute(room_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield prisma_1.default.room.findFirst({
                where: { id: room_id }
            });
            if (!room)
                throw new Error("Sala não encontrada.");
            const votes = yield prisma_1.default.votes.findMany({
                where: {
                    day: room.Day,
                    roomId: room_id
                },
                include: {
                    player: true
                }
            });
            const voteCount = {};
            votes.forEach((vote) => {
                const playerId = vote.playerId;
                voteCount[playerId] = (voteCount[playerId] || 0) + 1;
            });
            let maxVotes = 0;
            let playerIdWithMostVotes = null;
            for (const playerId in voteCount) {
                if (voteCount[playerId] > maxVotes) {
                    maxVotes = voteCount[playerId];
                    playerIdWithMostVotes = playerId;
                }
            }
            if (playerIdWithMostVotes) {
                yield prisma_1.default.players.update({
                    where: { id: playerIdWithMostVotes },
                    data: {
                        life: 0,
                        Active: false
                    }
                });
            }
            // Retornar informações sobre o jogador que foi "eliminado"
            return {
                playerId: playerIdWithMostVotes,
                votes: maxVotes
            };
        });
    }
}
exports.EndVotes = EndVotes;
