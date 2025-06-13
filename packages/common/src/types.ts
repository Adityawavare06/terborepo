import {z} from "zod" ;

export const CreatedUserSchema =z.object({
    username:z.string().min(3).max(20),
    password :z.string(),
    name: z.string()
})

export const SinginSchema = z.object({
       username:z.string().min(3).max(20),
    password :z.string(),
})


export const  CreateRoomSchema = z.object({
       username:z.string().min(3).max(20),
    password :z.string(), 
})