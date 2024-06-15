import * as yup from "yup"

export const  contactusSchema= yup.object({
userName:yup.string().min(2).max(25).required("Name field cant't be empty") ,
userMail:yup.string().email().required("Email filed can't be empty"),
userMsg:yup.string().min(10).max(200).required("Message filed cant be empty")
})

// userName: "",
// userMail: "",
// userMsg: ""