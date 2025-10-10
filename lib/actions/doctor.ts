"use server"
import prisma from "../prisma"
export async function doctorList(){
    const data =  await prisma.verify.findMany({
        
    })
    console.log(data)
    return data;
}