import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.game.create({
    data: {
      date: "2023-08-21T19:00:00Z",

      firstTeamCountryCode: "BR",

      secondTeamCountryCode: "AR",
    },
  });

}

main();
