import prismaClient from "../../prisma"

interface UserRequest {
    name: string
    roomId: string
}

class AddPlayerService {
    async execute({ name, roomId }: UserRequest) {

        // Verifica se tem algum campo vazio
        if (!name) {
            throw new Error("name não informado")
        }
        if (!roomId) {
            throw new Error("roomId não informado")
        }

        // Cria o player
        const player = await prismaClient.players.create({
            data: {
                name, 
                roomId
            },
            select: {
                id: true,
                name: true,
                roomId: true,
            }
        })
        return player
    }
}

export { AddPlayerService }