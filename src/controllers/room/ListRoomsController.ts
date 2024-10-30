import { Request, Response } from "express";
import { ListRoomsService } from "../../services/room/ListRoomsService";

export class ListRoomsController{
    async handle(req: Request, res: Response){

        const listRoomsService = new ListRoomsService()

        const rooms = await listRoomsService.execute()
        
        res.json(rooms)
    }
}