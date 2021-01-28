const router = require('express').Router();
const zendesk = require('node-zendesk');
require("dotenv").config();
const ticketModel = require('../models/ticketsModel');



const client = zendesk.createClient({
    username: process.env.ZEN_USER,
    token: process.env.ZEN_TOKEN,
    remoteUri: "https://gdfi5250.zendesk.com/api/v2/"
});




router.get("/test", async(req, res) =>{
    const ticket = await ticketModel.find();
    res.json(ticket);
});

router.post("/generate", async(req, res) =>{
    let{ ticketDate } = req.body;
    let query = `created_at>${ticketDate}`;

    if(!ticketDate)
        return res.status(400).json({msg: "Date field required!!!"});

    client.search.query(query, function (err, req, result){
        if(err){
                console.log(err)
                return;
                }
        res.json(result.slice(3))

        });
})

module.exports = router;