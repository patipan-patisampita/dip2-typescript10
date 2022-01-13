import { model, Schema } from "mongoose";

interface User{
    name:string;
    dept:string;
    mobile:number;
}

const userSchema = new Schema<User>({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }

})
const UserModel = model<User>('User',userSchema);
export default UserModel;
