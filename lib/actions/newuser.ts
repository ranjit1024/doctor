"use server"
import { getServerSession } from "next-auth";
import { authOption } from "../auth";
import prisma from "../prisma";
export async function newUser() {
    const session = await getServerSession(authOption);
    const find = await prisma.user.findFirst({
        where:{
            email:session?.user?.email || ""
        }
    })
    if(!find){
        await prisma.user.create({
            data:{
                email:session?.user?.email || "",
                name:session?.user?.name || ""
            }
        })
        return "user Exits"
    }

}