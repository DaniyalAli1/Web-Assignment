import { z } from "zod";

const employeeSchema = z.object({
    firstname: z.string().min(2, {
        message: "Firstname must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Lastname must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    phonenumber: z.string().min(2, {
        message: "Phone number must be at least 11 characters.",
    }),
});

export default employeeSchema