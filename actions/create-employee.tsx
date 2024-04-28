"use server";
import {z} from "zod";
import employeeSchema from "@/schemas";
import db from "@/lib/db";

const createEmployee=async(values: z.infer<typeof employeeSchema>)=>{

    const validated=employeeSchema.safeParse(values);

    if(!validated.success){
        return
            {error : "Invalid values"}
        
    }
    const employee = await db.employee.create(
        {
            data:{
                firstname: validated.data.firstname,
                lastname: validated.data.lastname,
                email: validated.data.email,
                phonenumber: validated.data.phonenumber
            
            }
        }
    )

}

export default createEmployee