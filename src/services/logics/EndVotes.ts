import prismaClient from "../../prisma";

class EndVotes {
  async execute(room_id: string) {
    const room = await prismaClient.room.findFirst({
      where: { id: room_id }
    });

    if (!room) throw new Error("Sala não encontrada.");

    const votes = await prismaClient.votes.findMany({
      where: {
        day: room.Day,
        roomId: room_id
      },
      include: {
        player: true
      }
    });

    const voteCount: { [key: string]: number } = {};

    // Contagem dos votos para cada jogador
    votes.forEach((vote) => {
      const playerId = vote.playerId;
      voteCount[playerId] = (voteCount[playerId] || 0) + 1;
    });

    // Encontrar o número máximo de votos
    let maxVotes = 0;
    for (const count of Object.values(voteCount)) {
      if (count > maxVotes) {
        maxVotes = count;
      }
    }

    // Encontrar todos os jogadores com o número máximo de votos
    const playersWithMaxVotes = Object.keys(voteCount).filter(
      playerId => voteCount[playerId] === maxVotes
    );

    // Se houver apenas um jogador com o número máximo de votos, eliminá-lo
    let playerIdWithMostVotes = null;

    if (playersWithMaxVotes.length === 1) {
      playerIdWithMostVotes = playersWithMaxVotes[0];
      await prismaClient.players.update({
        where: { id: playerIdWithMostVotes },
        data: {
          life: 0,
          Active: false
        }
      });
      console.log("Player com mais votos", playerIdWithMostVotes);
    } else {
      console.log("Empate: Nenhum jogador será eliminado.");
    }

    // Avançar o dia no jogo
    const newDay = room.Day + 1;

    await prismaClient.room.update({
      where: {
        id: room_id
      },
      data: {
        Day: newDay
      }
    });

    // Retornar informações sobre o jogador eliminado (ou nulo se houver empate)
    return {
      playerId: playerIdWithMostVotes,
      votes: maxVotes,
      tie: playersWithMaxVotes.length > 1 // Indica se houve empate
    };
  }
}

export { EndVotes };
