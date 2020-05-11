import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema(
    {
        firstName:{
            type:String,
            required: 'Enter the firstname please'
        },
        lastName:{
            type:String,
            required : 'Enter the lastName please'
        },
        email:{
            type:String
        },
        compagny :{
            type :String
        },
        phone : {
            type : Number
        },
        created_date:{
            type : Date ,
            default : Date.now
        }
    }
)