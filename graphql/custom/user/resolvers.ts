import prisma from "@/config/prisma";
import { Enum_MovementType, Enum_Movement_State } from "@prisma/client";

const User = {
    User: {},
    Query: {
        getTokens: () => prisma.verificationToken.findMany(),
        getComida: () => prisma.material.findMany(),
        getComidaById: async (_:never, args:{id:string}) => await prisma.material.findUnique({where:{id:args.id}}),
        getMovement: () => prisma.inventoryMovement.findMany({include:{material:true}}),
        getClientes: () => prisma.user.findMany({include:{role:true}}),
    },
    Mutation: {
        createPedido: async (_:never, args:{id: string, movementType: Enum_MovementType, quantity: number, materialId: string, userId: string, state: Enum_Movement_State}) => prisma.inventoryMovement.create({data:{id:args.id, movementType:args.movementType, quantity:args.quantity, materialId:args.materialId, userId:args.userId, state:args.state}}),
        createMaterial: async (_:never, args:{id: string, name: string, quantity:number, userId:string, description:string, price: number}) => prisma.material.create({data:{id:args.id, name:args.name, quantity:args.quantity, userId:args.userId, description:args.description, price:args.price}}),
        updateMaterial: async (_:never, args:{id: string, name: string, quantity:number, userId:string, description:string, price: number}) => prisma.material.update({where:{id:args.id}, data:{name:args.name, quantity:args.quantity, userId:args.userId, description:args.description, price:args.price}}),
        deleteMovement: async (_:never, args:{id:string}) => prisma.inventoryMovement.delete({where:{id:args.id}}),
        deleteUser: async (_:never, args:{id:string}) => prisma.user.delete({where:{id:args.id}}),
    }
};

export { User };

