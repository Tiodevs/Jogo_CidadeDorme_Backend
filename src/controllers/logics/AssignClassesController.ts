import { Request, Response } from "express"
import { AssignClassesService } from "../../services/logics/AssignClassesService"

export class AssignClassesController {
    async handle(req: Request, res: Response) {
        const { room_id } = req.body


        const assignClassesService = new AssignClassesService()

        const assignClasses = await assignClassesService.execute(
            room_id
        )

        return res.json(assignClasses)

    }

}

