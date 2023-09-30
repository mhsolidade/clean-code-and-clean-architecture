// @ts-nocheck
import express from "express";
import Ride from "./Ride";

const app = express();
app.use(express.json())


app.post("/calculete_ride", function(req, res){
    try {
        const ride = new Ride()
        for (const segment of req.body.segments) {
            ride.addSegment(segment.distance, new Date(segment.date))
        }
        return res.json({ price: ride.calculate() });
    } catch (e) {
        console.log(e.message);
        res.status(422).send(e.message);
    }
});

app.listen(3000);
