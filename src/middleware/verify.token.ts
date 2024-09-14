import {Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token; 

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);
        (req as any).user = decoded;
        console.log(decoded); 
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}