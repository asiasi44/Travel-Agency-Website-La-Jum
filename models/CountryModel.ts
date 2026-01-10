import mongoose, { Schema, Model, Document, ObjectId } from "mongoose";

export interface ICountry extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const countrySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

countrySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret: any) => {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  },
});

const Country: Model<ICountry> =
  mongoose.models.Country || mongoose.model<ICountry>("Country", countrySchema);

export default Country;
