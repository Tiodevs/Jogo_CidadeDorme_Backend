import { Request, Response } from "express"
import { CreateRoomService } from "../../services/room/CreateRoomService"

export class CreateRoomController {
    async handle(req: Request, res: Response) {

        const { CountHealer, CountKiller, CountPolice, CountPerson } = req.body


        const createRoomService = new CreateRoomService()

        const room = await createRoomService.execute({
            CountHealer,
            CountKiller,
            CountPolice,
            CountPerson
        })

        return res.json(room)
    }
}