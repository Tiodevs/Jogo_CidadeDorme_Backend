import { Request, Response, Router } from 'express'

// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'

// Controllers
// import { CreateUserController } from './controllers/user/CreateUserController'
// import { AuthUserController } from './controllers/user/AuthUserController'
// import { DetailUserController } from './controllers/user/DetailUserController'
// import { EditActiveUserController } from './controllers/user/EditActiveUserController'
// import { ListUserContoller } from './controllers/user/ListeUserController'
import { CreateRoomController } from './controllers/room/CreateRoomController'
import { ListRoomsController } from './controllers/room/ListRoomsController'
import { DetailRoomController } from './controllers/room/DetailRoomController'
const router = Router()

// Configuração do envio de arquivos
router.get('/', (req: Request, res: Response) => {
  return res.send(`
    <h1 style='font-family: sans-serif'>
        API ClassSysten!!! 👩‍🏫
    <h1>
  `)
})

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
router.post('/rooms', new CreateRoomController().handle); // Criar sala
router.get('/rooms/list', new ListRoomsController().handle);  // Listar todas as salas
router.post('/rooms/list', new DetailRoomController().handle);  // Listar sala por id


// Rotas para Jogadores
router.post('/players', new CreateRoomController().handle);         // Adicionar player
router.put('/players/life', new CreateRoomController().handle);     // Mudar a vida do jogador
router.put('/players/class', new CreateRoomController().handle);    // Mudar a classe do jogador

// Rotas para Histórico
router.post('/history', new CreateRoomController().handle); // Adicionar historia
router.get('/history', new CreateRoomController().handle);  // Listar historia

// Rotas para Votos
router.post('/votes', new CreateRoomController().handle);  // Adicionar voto 
router.get('/votes', new CreateRoomController().handle);   // Listar votos por dia

// Rotas de Controle do Jogo
router.post('/assignclasses', new CreateRoomController().handle); // Adicionar classes assim que começar o jogo


export { router }