import { Request, Response } from "express";
import { IThread } from "../types/entity";
import threadService from "../services/thread.services";

const threadController = {
  handleCreateThread: async (req: Request, res: Response) => {
    try {
      const userId = (req as any).user.id;
      const { title, content } = req.body;
      console.log((req as any).user);
      const dataThread: IThread = {userId, title, content };
      const newThread = await threadService.createThread(dataThread);
      res.status(201).json(newThread);
    } catch (error) {
      res.status(500).json({error});
    } 
  },

  handleGetAllThread: async (req: Request, res: Response) => {
    try {
      const threads = await threadService.getAllThreads();
      res.status(200).json(threads);
    } catch (error) {
      res.status(500).json({error});
    }
  },

  handleGetThreadById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const thread = await threadService.getThreadById(id);
      res.status(200).json(thread);
    } catch (error) {
      res.status(500).json({error});
    }
  },

  handleUpdateThread: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userId = (req as any).user.id;
      const { title, content } = req.body;
      const dataThread: IThread = {userId, title, content };
      const thread = await threadService.updateThread(id, dataThread);
      res.status(200).json({message: "update succes", data: thread});
    } catch (error) {
      res.status(500).json({error});
    }
  },

  handleDeleteThread: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const thread = await threadService.deleteThread(id);
      res.status(200).json({message: "success", data: thread});
    } catch (error) {
      res.status(500).json({error});
    }
  },
};

export default threadController;
