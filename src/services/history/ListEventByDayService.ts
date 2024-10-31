import prismaClient from "../../prisma";

interface UserRequest {
    room_id: string,
    day: any,
}

class ListEventByDayService {
    async execute({room_id, day}: UserRequest){

        const history = await prismaClient.history.findMany({
            where: { 
                roomId: room_id,
                day: day
            },
            // include:{
            //     room: true
            // }
        })

        return history
    }
}

export { ListEventByDayService }