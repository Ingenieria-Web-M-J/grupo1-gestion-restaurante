import prisma from "@/config/prisma";

const User = {
    User: {},
    Query: {
        getTokens: () => prisma.verificationToken.findMany(),
        getComida: () => prisma.material.findMany(),
        getComidaById: async (_, args:{id:string}) => await prisma.material.findUnique({where:{id:args.id}}),
        getMovement: () => prisma.inventoryMovement.findMany({include:{material:true}}),
    },
    Mutation: {
        createMaterial: async (_, args:{id: string, name: string, quantity:number, userId:string, description:string, price: number}) => prisma.material.create({data:{id:args.id, name:args.name, quantity:args.quantity, userId:args.userId, description:args.description, price:args.price}}),
        deleteMovement: async (_, args:{id:string}) => prisma.inventoryMovement.delete({where:{id:args.id}})
    }
};

export { User };

