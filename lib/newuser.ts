"use server"
import { getServerSession } from "next-auth";
import { authOption } from "./auth";
import prisma from "./prisma";
export async function newUser() {
    const session = await getServerSession(authOption);
    const user =  await prisma.user.create({
        data:{
            email:session?.user?.email || "",
            name:session?.user?.name || ""
        }
    })
}