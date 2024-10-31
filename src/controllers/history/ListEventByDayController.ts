import { Request, Response } from 'express'
import { ListEventByDayService } from '../../services/history/ListEventByDayService'


class ListEventByDayController {
  async handle(req: Request, res: Response) {
    const {room_id, day} = req.body

    const listEventByDayService = new ListEventByDayService()

    const event = await listEventByDayService.execute({
        room_id, 
        day
    })

    return res.json(event)
  }
}

export { ListEventByDayController }