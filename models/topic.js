import mongoose ,{Schema} from "mongoose";

const topicSchema = new Schema({
    title: {
        type: String,
        required:true,
      },
      desc: {
        type: String,
        required:true,
 
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);
export default Topic;