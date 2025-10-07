"use server"
import z from "zod"
export async function Verify({number}:{
number:string
}){
const phoneSchema = z
  .string()
  .regex(/^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/, { 
    message: 'Must be a valid phone number' 
  }); 
  const { success } = phoneSchema.safeParse(number);
  if(!success){
    console.log('Invalid Number');
    return 'Invalid Number'
  }
  return "valid number"
}