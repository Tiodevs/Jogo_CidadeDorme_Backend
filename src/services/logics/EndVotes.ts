import prismaClient from "../../prisma";

class EndVotes {
  async execute(room_id: string) {

    const room = await prismaClient.room.findFirst({
      where: { id: room_id }
    });

    if (!room) throw new Error("Sala não encontrada.");

    const votes = await prismaClient.votes.findMany({
      where:{
        day: room.Day,
        roomId: room_id
      },
      include:{
        player: true
      }
    })

    const voteCount: { [key: string]: number } = {};

    votes.forEach((vote) => {
      const playerId = vote.playerId;
      voteCount[playerId] = (voteCount[playerId] || 0) + 1;
    });

    let maxVotes = 0;
    let playerIdWithMostVotes = null;

    for (const playerId in voteCount) {
      if (voteCount[playerId] > maxVotes) {
        maxVotes = voteCount[playerId];
        playerIdWithMostVotes = playerId;
      }
    }

    if (playerIdWithMostVotes) {
      await prismaClient.players.update({
        where: { id: playerIdWithMostVotes },
        data: {
          life: 0,
          Active: false
        }
      });
    }

    // Retornar informações sobre o jogador que foi "eliminado"
    return {
      playerId: playerIdWithMostVotes,
      votes: maxVotes
    };
  }
}

export { EndVotes };
