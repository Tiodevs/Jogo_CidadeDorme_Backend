import prismaClient from "../../prisma";

// Função para embaralhar o array
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para editar a categoria do jogador
async function EditClass(userId: string, category: string) {
  await prismaClient.players.update({
    where: { id: userId },
    data: {
      category: category
    }
  });

  console.log(`Jogador ${userId} recebeu a classe: ${category}`);
}

// Serviço para distribuir classes aleatoriamente
class AssignClassesService {
  async execute(room_id: string) {
    const room = await prismaClient.room.findFirst({
      where: { id: room_id },
      include: { Players: true }
    });

    if (!room) throw new Error("Sala não encontrada.");

    // Criando o array de classes com base nas contagens da sala
    let classes = [
      ...Array(room.CountPerson).fill("CIDADÃO"),
      ...Array(room.CountPolice).fill("POLÍCIA"),
      ...Array(room.CountKiller).fill("ASSASSINO"),
      ...Array(room.CountHealer).fill("CURANDEIRO")
    ];

    // Embaralhar as classes para aleatoriedade
    classes = shuffle(classes);

    // Atribuir uma classe para cada jogador
    const updates = room.Players.map((player, index) => {
      const category = classes[index] || "CIDADÃO"; // Se faltar, usa CIDADÃO
      return EditClass(player.id, category);
    });

    // Executar todas as atualizações
    await Promise.all(updates);

    console.log("Classes atribuídas com sucesso.");
    return room;
  }
}

export { AssignClassesService };
