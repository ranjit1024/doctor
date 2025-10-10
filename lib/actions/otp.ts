"use server"
import prisma from "../prisma"
import { authOption } from "../auth";
import { getServerSession } from "next-auth";
export async function verifyNumber({number}:{number:string}) {
    const session = await getServerSession(authOption) 
    const userExist =  await prisma.user.findFirst({
        where:{
            email:session?.user?.email || ""
        }
    })
    if(userExist){
        await prisma.verify.create({
            data:{
                email:userExist.email,
                mobilenumber:number,
                verify:true
            }
        })
        return true;
    }
    return false;
}

export async function isVerified() {
    const session = await getServerSession(authOption) 
     const userExist =  await prisma.user.findFirst({
        where:{
            email:session?.user?.email || ""
        }
    })
    
    if(userExist){
        const isVerified = await prisma.verify.findFirst({
            where:{
                email:userExist.email,
                verify:true
            }
        })
        console.log(isVerified)
        if(isVerified){
            return true;
        }
        return false
    }
    return false;
}