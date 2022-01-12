import mongoose,{ connect } from "mongoose";

function connects(){
    return connect("mongodb://localhost:27017/mydb")
    .then(()=>{
        console.log("db connect");
    }).catch((error:any)=>{
        console.log(error);
    });
}
export default connects;