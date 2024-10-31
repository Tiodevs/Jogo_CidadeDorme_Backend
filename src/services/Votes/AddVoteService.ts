import prismaClient from "../../prisma"

interface UserRequest {
    day: any
    roomId: string
    playerId: string
}

class AddVoteService {
    async execute({ day, playerId, roomId }: UserRequest) {

        // Verifica se tem algum campo vazio
        if (!day) {
            throw new Error("day não informado")
        }
        if (!playerId) {
            throw new Error("playerId não informado")
        }

        // Cria o player
        const votes = await prismaClient.votes.create({
            data: {
                day, 
                playerId, 
                roomId
            }
        })
        return votes
    }
}

export { AddVoteService }