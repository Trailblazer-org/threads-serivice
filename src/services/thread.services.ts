import threadsRepository from "../repository/threads.repository";
import { IThread } from "../types/entity";

const threadService = {
  createThread: async (dataThread: IThread) => {
    try {
      const {userId, title, content } = dataThread;
      if (!userId || !title || !content) {
        throw new Error("Title and content are required");
      }

      const newThread = await threadsRepository.create(dataThread);
      return newThread;
    } catch (error) {
      console.log(error);
    }
  },

  getAllThreads: async () => {
    try {
      const threads = await threadsRepository.getAll();
      return threads;
    } catch (error) {
      console.log(error);
    }
  },

  getThreadById: async (id: string) => {
    try {
      const thread = await threadsRepository.getById(id);
      return thread;
    } catch (error) {
      console.log(error);
    }
  },

  updateThread: async (id: string, dataThread: IThread) => {
    try {
      const { title, content } = dataThread;
      console.log(title, content, id)

      // if (!title || !content) {
      //   throw new Error("Title and content are required");
      // }

      const thread = await threadsRepository.update(id, dataThread);
      return thread;
    } catch (error) {
      console.log(error);
    }
  },

  deleteThread: async (id: string) => {
    try {
      const thread = await threadsRepository.delete(id);
      return thread;
    } catch (error) {
      console.log(error);
    }
  }
};

export default threadService;