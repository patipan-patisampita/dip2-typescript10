import { Document, model, Schema } from "mongoose";

export interface UserDocument extends Document {
    name: string;
    dept: string;
    // mobile: string;
    // age:string;
}

interface User {
    name: string;
    dept: string;
    // mobile: string;
    // age:string;
}

const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    // mobile: {
    //     type: String,
    //     required: true
    // },
    // age: {
    //     type: String,
    //     required: true
    // }
})
const UserModel = model<User>('User', userSchema);
export default UserModel;
