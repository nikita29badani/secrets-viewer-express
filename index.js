import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const app=express();
const port=3000;

const config={
    headers:{Authorization: `Bearer ${token}`}
}

app.use(express.static("public"))

app.get("/",async(req,res)=>{
    try{
    const result=await axios.get("https://secrets-api.appbrewery.com/random",config)
    const response=result.data
    res.render("index.ejs",{
        secret: response.secret,
        user: response.username
    })}
    catch(error){
        res.status(404).send(error.message)
    }
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})

