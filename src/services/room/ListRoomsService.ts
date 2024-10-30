import prismaClient from "../../prisma"

class ListRoomsService {
    async execute(){

        const rooms = prismaClient.room.findMany({
            include: {
                History: true,
                Players: true,
                Votes: true
            }
        }) 

        return rooms
    }
}

export {ListRoomsService}