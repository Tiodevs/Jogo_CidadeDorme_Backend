import prismaClient from "../../prisma"

interface UserRequest {
    CountHealer: number
    CountKiller: number
    CountPolice: number
    CountPerson: number
}

class CreateRoomService {
    async execute({ CountHealer, CountKiller, CountPolice, CountPerson }: UserRequest) {

        // Verifica se tem algum campo vazio
        if (!CountHealer) {
            throw new Error("CountHealer incorreto")
        }
        if (!CountKiller) {
            throw new Error("CountKiller não informado")
        }
        if (!CountPolice) {
            throw new Error("CountPolice não informada")
        }
        if (!CountPerson) {
            throw new Error("CountPerson não informada")
        }

        // Cria o room
        const room = await prismaClient.room.create({
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
        })
        return room
    }
}

export { CreateRoomService }