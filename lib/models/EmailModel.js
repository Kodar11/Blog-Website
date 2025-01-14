// import mongoose from "mongoose";

// const Schema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     date:{
//         type:Date,
//         default:Date.now()
//     }
// })

// const EmailModel = mongoose.model.email || mongoose.model('email',Schema);

// export default EmailModel;

import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Use the existing model if it exists, otherwise create a new one
const EmailModel = mongoose.models.Email || mongoose.model('Email', EmailSchema);

export default EmailModel;
