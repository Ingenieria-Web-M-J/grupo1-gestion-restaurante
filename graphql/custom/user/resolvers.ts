import prisma from "@/config/prisma";

const User = {
    User: {},
    Query: {
        getTokens: () => prisma.verificationToken.findMany(),
    },
};

export {User};