import { Request, Response, Router } from 'express'

// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'

// Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { EditActiveUserController } from './controllers/user/EditActiveUserController'
import { ListUserContoller } from './controllers/user/ListeUserController'
const router = Router()

// Configuração do envio de arquivos
router.get('/', (req: Request, res: Response) => {
  return res.send(`
    <h1 style='font-family: sans-serif'>
        API ClassSysten!!! 👩‍🏫
    <h1>
  `)
})

// Cria um novo usuario
router.post('/users', new CreateUserController().handle)
// Pega todos os usuarios e seus cursos
router.get('/users', isAuthenticated, new ListUserContoller().handle)
// Desativa um usuario
router.post('/users/edit', isAuthenticated, new EditActiveUserController().handle)
// Faz a altenticação de login do usuario
router.post('/login', new AuthUserController().handle)
// Pega os detalhes do usuario logado
router.get('/me', isAuthenticated, new DetailUserController().handle)


// Rotas para Salas
router.post('/rooms', ); // Criar sala
router.get('/rooms', );  // Listar todas as salas
router.get('/rooms', );  // Listar sala por id


// Rotas para Jogadores
router.post('/players',);         // Adicionar player
router.put('/players/life',);     // Mudar a vida do jogador
router.put('/players/class',);    // Mudar a classe do jogador

// Rotas para Histórico
router.post('/history', ); // Adicionar historia
router.get('/history', );  // Listar historia

// Rotas para Votos
router.post('/votes', );  // Adicionar voto 
router.get('/votes', );   // Listar votos por dia

// Rotas de Controle do Jogo
router.post('/assignclasses',); // Adicionar classes assim que começar o jogo


export { router }