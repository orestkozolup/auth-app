import mongoose from "mongoose";

// An interface that describes properties required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
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
});

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs)

const User = mongoose.model<any, UserModel>("User", userSchema);

export { User };