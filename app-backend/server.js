console.log("hello its aman");
const express=require("express"); 
const errorHandler = require("./middleware/errorhandler");
const jsonErrorHandler = require("./middleware/errorhandler");
const dotenv=require("dotenv").config();
const app=express();
app.use(express.json());
const port=process.env.PORT;
app.use(jsonErrorHandler);
app.listen(port,()=>{
    console.log(`the server is running on ${port} `);
})
app.use("/api/contacts",require("./routes/contactroutes"));
