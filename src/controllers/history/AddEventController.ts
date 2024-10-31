import { Request, Response } from "express"
import { AddHistoryService } from "../../services/history/AddHistoryService"

export class AddHistoryController {
    async handle(req: Request, res: Response) {

        const { history, day, roomId } = req.body


        const addHistoryService = new AddHistoryService()

        const historyres = await addHistoryService.execute({
            history, 
            day, 
            roomId
        })

        return res.json(historyres)
    }
}