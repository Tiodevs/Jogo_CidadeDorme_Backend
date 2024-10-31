import { Request, Response } from "express"
import { EndVotes } from "../../services/logics/EndVotes"

export class EndVotesController {
    async handle(req: Request, res: Response) {
        const { room_id } = req.body


        const endVotes = new EndVotes()

        const endVotesres = await endVotes.execute(
            room_id
        )

        return res.json(endVotesres)

    }

}

