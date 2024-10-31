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
exports.AssignClassesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// Função para embaralhar o array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Função para editar a categoria do jogador
function EditClass(userId, category) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.default.players.update({
            where: { id: userId },
            data: {
                category: category
            }
        });
        console.log(`Jogador ${userId} recebeu a classe: ${category}`);
    });
}
// Serviço para distribuir classes aleatoriamente
class AssignClassesService {
    execute(room_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield prisma_1.default.room.findFirst({
                where: { id: room_id },
                include: { Players: true }
            });
            if (!room)
                throw new Error("Sala não encontrada.");
            // Criando o array de classes com base nas contagens da sala
            let classes = [
                ...Array(room.CountPerson).fill("CIDADÃO"),
                ...Array(room.CountPolice).fill("POLÍCIA"),
                ...Array(room.CountKiller).fill("ASSASSINO"),
                ...Array(room.CountHealer).fill("CURANDEIRO")
            ];
            // Embaralhar as classes para aleatoriedade
            classes = shuffle(classes);
            // Atribuir uma classe para cada jogador
            const updates = room.Players.map((player, index) => {
                const category = classes[index] || "CIDADÃO"; // Se faltar, usa CIDADÃO
                return EditClass(player.id, category);
            });
            // Executar todas as atualizações
            yield Promise.all(updates);
            console.log("Classes atribuídas com sucesso.");
            return room;
        });
    }
}
exports.AssignClassesService = AssignClassesService;
