import { Request, Response } from "express"
import { EditLifePlayerService } from "../../services/player/EditLifePlayerService"

export class EditLifePlayerController {
    async handle(req: Request, res: Response) {

        const { user_id, life } = req.body


        const editLifePlayerService = new EditLifePlayerService()

        const player = await editLifePlayerService.execute({
            user_id, 
            life
        })

        return res.json(player)
    }
}