import { Request, Response } from 'express'
import { DetailRoomService } from '../../services/room/DetailRoomService'


class DetailRoomController {
  async handle(req: Request, res: Response) {
    const {room_id} = req.body

    const detailRoomService = new DetailRoomService()

    const room = await detailRoomService.execute(room_id)

    return res.json(room)
  }
}

export { DetailRoomController }