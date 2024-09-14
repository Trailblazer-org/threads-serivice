import threadController from "../controllers/threads.controller";
import express from 'express';
import { verifyToken } from "../middleware/verify.token";

export const ThreadRoutes = express.Router();

ThreadRoutes.post('/',verifyToken, threadController.handleCreateThread);
ThreadRoutes.get('/', threadController.handleGetAllThread);
ThreadRoutes.get('/:id', threadController.handleGetThreadById);
ThreadRoutes.put('/:id', threadController.handleUpdateThread);
ThreadRoutes.delete('/:id', threadController.handleDeleteThread);