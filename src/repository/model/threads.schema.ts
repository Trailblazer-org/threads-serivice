import {model, Schema} from "mongoose";

const threadSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
});

export const ThreadModel = model('Thread', threadSchema);