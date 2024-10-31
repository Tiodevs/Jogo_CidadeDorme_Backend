import prismaClient from "../../prisma";


class EndVotes {
  async execute(room_id: string) {

    const room = await prismaClient.room.findFirst({
      where: { id: room_id },
      include: { Players: true }
    });

    if (!room) throw new Error("Sala não encontrada.");

    
    return room;
  }
}

export { EndVotes };
