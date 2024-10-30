import prismaClient from "../../prisma"

interface UserRequest {
    user_id: string
    life: number
}

class EditLifePlayerService {
    async execute({ user_id, life }: UserRequest) {

        // Verifica se tem algum campo vazio
        if (!user_id) {
            throw new Error("user_id não informado")
        }
        if (!life) {
            throw new Error("life não informado")
        }

        // Cria o player
        const player = await prismaClient.players.update({
            where: { id: user_id },
            data: {
                life: life
            }
        })
        return player
    }
}

export { EditLifePlayerService }