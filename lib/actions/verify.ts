"use server"
import z from "zod"

import { PublishCommand } from "@aws-sdk/client-sns";
import { SNSClient } from "@aws-sdk/client-sns"
import crypto from "crypto";

const snsClient = new SNSClient({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ""
  }
});
const sendSMS = async (phoneNumber:string, message:string) => {
  const params = {
    Message: message,
    PhoneNumber: phoneNumber, // Must be in E.164 format: +[country_code][number]
    MessageAttributes: {
      'AWS.SNS.SMS.SenderID': {
        DataType: 'String',
        StringValue: 'YourBrand' // Sender ID (not supported in all countries)
      },
      'AWS.SNS.SMS.SMSType': {
        DataType: 'String',
        StringValue: 'Transactional' // or 'Promotional'
      }
    }
  };

  try {
  
    const response = await snsClient.send(new PublishCommand(params));
    console.log(response)
    console.log("MessageId:", response.MessageId);
    return response;
  } catch (error) {
    console.error("Error sending SMS:", error);
    throw error;
  }
};

export async function Verify({number}:{
number:string
}){

const phoneSchema = z
  .string()
  .regex(/^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/, { 
    message: 'Must be a valid phone number' 
  }); 
  const { success } = phoneSchema.safeParse(number);
  console.log(number)
  if(!success){
    console.log('Invalid Number');
    return 'Invalid Number'
  }
  const otp = crypto.randomInt(100000, 999999);
  const sms = await sendSMS(`+91${number}`, `your otp is ${otp}`);
  console.log(sms)
  return otp;
}







// Send to multiple different numbers


