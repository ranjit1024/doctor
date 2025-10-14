"use server"
import { email } from "zod";
import prisma from "../prisma"
export async function doctorList(){
    const data =  await prisma.doctor.findMany({
        
    })
    console.log(data)
    return data;
}
export async function doctorData(id:string) {
    const data = await prisma.doctor.findFirst({
        where:{
            id:id
        }
    })
    return data;
}
export async function doctorTime(email:string) {
    const data = await prisma.limit.findMany({
        where:{
            email:email
        }
    })
    return data;
}