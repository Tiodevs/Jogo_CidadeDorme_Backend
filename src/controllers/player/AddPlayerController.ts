import { Request, Response } from "express"
import { AddPlayerService } from "../../services/player/AddPlayerService"

export class AddPlayerController {
    async handle(req: Request, res: Response) {

        const { name, roomId } = req.body


        const addPlayerService = new AddPlayerService()

        const player = await addPlayerService.execute({
            name, 
            roomId
        })

        return res.json(player)
    }
}