import mongoose, { Schema, Model, Document, ObjectId } from "mongoose";

export interface ILocation extends Document {
  city: String;
  country: String;
  createdAt: Date;
  updatedAt: Date;
}

const locationSchema = new Schema(
  {
    city: {
      type: String,
      unique: true,
      required: true,
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Country",
    },
  },
  { timestamps: true },
);

locationSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret: any) => {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  },
});

const Location: Model<ILocation> =
  mongoose.models.Location ||
  mongoose.model<ILocation>("Location", locationSchema);

export default Location;
