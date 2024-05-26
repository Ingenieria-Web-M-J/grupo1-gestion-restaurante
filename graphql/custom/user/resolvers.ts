import prisma from "@/config/prisma";

const User = {
    User: {},
    Query: {
        getTokens: () => prisma.verificationToken.findMany(),
        getComida: () => prisma.material.findMany(),
        getComidaById: async (_, args:{id:string}) => await prisma.material.findUnique({where:{id:args.id}})
    },
};

export { User };

