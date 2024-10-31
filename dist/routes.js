"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Controllers
// import { CreateUserController } from './controllers/user/CreateUserController'
// import { AuthUserController } from './controllers/user/AuthUserController'
// import { DetailUserController } from './controllers/user/DetailUserController'
// import { EditActiveUserController } from './controllers/user/EditActiveUserController'
// import { ListUserContoller } from './controllers/user/ListeUserController'
const CreateRoomController_1 = require("./controllers/room/CreateRoomController");
const ListRoomsController_1 = require("./controllers/room/ListRoomsController");
const DetailRoomController_1 = require("./controllers/room/DetailRoomController");
const AddPlayerController_1 = require("./controllers/player/AddPlayerController");
const AssignClassesController_1 = require("./controllers/logics/AssignClassesController");
const EditLifePlayerController_1 = require("./controllers/player/EditLifePlayerController");
const AddEventController_1 = require("./controllers/history/AddEventController");
const ListEventByDayController_1 = require("./controllers/history/ListEventByDayController");
const AddVoteController_1 = require("./controllers/votes/AddVoteController");
const EndVotesController_1 = require("./controllers/logics/EndVotesController");
const router = (0, express_1.Router)();
exports.router = router;
// Configuração do envio de arquivos
router.get('/', (req, res) => {
    return res.send(`
    <h1 style='font-family: sans-serif'>
        API ClassSysten!!! 👩‍🏫
    <h1>
  `);
});
// // Cria um novo usuario
// router.post('/users', new CreateUserController().handle)
// // Pega todos os usuarios e seus cursos
// router.get('/users', isAuthenticated, new ListUserContoller().handle)
// // Desativa um usuario
// router.post('/users/edit', isAuthenticated, new EditActiveUserController().handle)
// // Faz a altenticação de login do usuario
// router.post('/login', new AuthUserController().handle)
// // Pega os detalhes do usuario logado
// router.get('/me', isAuthenticated, new DetailUserController().handle)
// Rotas para Salas
router.post('/rooms', new CreateRoomController_1.CreateRoomController().handle); // Criar sala
router.get('/rooms/list', new ListRoomsController_1.ListRoomsController().handle); // Listar todas as salas
router.post('/rooms/list', new DetailRoomController_1.DetailRoomController().handle); // Listar sala por id
// Rotas para Jogadores
router.post('/players', new AddPlayerController_1.AddPlayerController().handle); // Adicionar player
router.put('/players/life', new EditLifePlayerController_1.EditLifePlayerController().handle); // Mudar a vida do jogador
// Rotas para Histórico
router.post('/history', new AddEventController_1.AddHistoryController().handle); // Adicionar historia
router.post('/history/list', new ListEventByDayController_1.ListEventByDayController().handle); // Listar historia
// Rotas para Votos
router.post('/votes', new AddVoteController_1.AddVoteController().handle); // Adicionar voto 
// Rotas de Controle do Jogo
router.post('/assignclasses', new AssignClassesController_1.AssignClassesController().handle); // Adicionar classes assim que começar o jogo
router.post('/endvotes', new EndVotesController_1.EndVotesController().handle); // Listar votos por dia
