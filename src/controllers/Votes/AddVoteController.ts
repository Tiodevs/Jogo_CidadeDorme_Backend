import { Request, Response } from "express"
import { AddVoteService } from "../../services/votes/AddVoteService"

export class AddVoteController {
    async handle(req: Request, res: Response) {

        const { day, playerId, roomId } = req.body

        console.log(day, playerId, roomId)
        


        const addVoteService = new AddVoteService()

        const vote = await addVoteService.execute({
            day, playerId, roomId
        })

        return res.json(vote)
    }
}