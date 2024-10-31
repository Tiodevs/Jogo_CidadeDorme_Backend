import prismaClient from "../../prisma"

interface UserRequest {
    history: string,
    day: any,
    roomId: string
}

class AddHistoryService {
    async execute({ history, day, roomId }: UserRequest) {

        // Verifica se tem algum campo vazio
        if (!history) {
            throw new Error("history não informado")
        }
        if (!day) {
            throw new Error("day não informado")
        }
        if (!roomId) {
            throw new Error("roomId não informado")
        }

        // Cria o player
        const historyCreate = await prismaClient.history.create({
            data: {
                history, 
                day, 
                roomId
            }
        })
        return historyCreate
    }
}

export { AddHistoryService }