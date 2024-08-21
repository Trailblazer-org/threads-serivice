import { ThreadModel } from "./model/threads.schema";
import { IThread } from "../types/entity";

const threadsRepository = {
  create: async (dataThread: IThread) => {
    try {
      const { title, content } = dataThread;
      const thread = new ThreadModel({
        title,
        content,
      });
      const newThread = await thread.save();
      return newThread;
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async () => {
    try {
      const threads = await ThreadModel.find();
      return threads;
    } catch (error) {
      console.log(error);
    }
  },

  getById: async (id: string) => {
    try {
      const thread = await ThreadModel.findById(id);
      return thread;
    } catch (error) {
      console.log(error);
    }
  },

  update: async (id: string, dataThread: IThread) => {
    try {
      const { title, content } = dataThread;
      console.log(title, content, id)
      const thread = await ThreadModel.findByIdAndUpdate(
        { _id: id },
        { title, content },
        { new: true }
      );
      console.log(thread)
      return thread;
    } catch (error) {
      console.error(error);
    }
  },

  delete: async (id: string) => {
    try {
      const thread = await ThreadModel.findByIdAndDelete(id);
      return thread;
    } catch (error) {
      console.error(error);
    }
  }
};

export default threadsRepository;
