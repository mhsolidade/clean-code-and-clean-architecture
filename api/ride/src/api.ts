// @ts-nocheck
import express from "express";
import { calculete } from "./RideCalculator";

const app = express();
app.use(express.json())


app.post("/calculete_ride", function(req, res){
    const price = calculete(req.body.segments)
    return res.json({ price });
});

app.listen(3000);
