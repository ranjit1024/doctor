"use server"
import prisma from "../prisma"
export async function doctorList(){
    const data =  await prisma.doctor.findMany({
        
    })
    console.log(data)
    return data;
}