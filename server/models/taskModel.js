import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Task description is required"],
    },
    assignedMembers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", 
      required: true,
    }],
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
    status: {
      type: String,
      enum: ["Planned", "Completed", "In progress"],
      default: "Planned",
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskSchema);

export default Task;
