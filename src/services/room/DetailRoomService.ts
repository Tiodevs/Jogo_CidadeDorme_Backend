import prismaClient from "../../prisma";

class DetailRoomService {
    async execute(room_id: string) {

        const room = await prismaClient.room.findFirst({
            where: { id: room_id },
            include:{
                History: true,
                Players: true,
                Votes: true
            }
        })

        return room
    }
}

export { DetailRoomService }