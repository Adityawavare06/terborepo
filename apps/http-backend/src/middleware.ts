import { NextFunction, Request , Response } from "express";
import {JWT_SECRET} from  "./config"

import  jwt, { decode, JwtPayload }  from "jsonwebtoken";

export function Middleware(req : Request, res:Response , next : NextFunction) {

    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token,JWT_SECRET);
    

    if((decode as JwtPayload).userId) {
        //ts-ignore   TODO : fix this 
                 req.userId= decoded.userId;
                 next(); 
    }else {
        res.status(403).json({
            message : "user not  valid"
            
        })
    }

}
