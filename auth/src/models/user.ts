import mongoose from "mongoose";
import { Password } from "../services/password"

// An interface that describes properties required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// Describes props that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// Describes the props that a User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  // add here extra props like createdAt, updatedAt, etc.
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret.password;
      delete ret.__v;
      delete ret._id
    }
  }
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }

  done();
})

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs)

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };