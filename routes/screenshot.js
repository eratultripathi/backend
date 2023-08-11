const express = require("express");

const ScreenShot = require("../models/screenshot.js")
const screenshotRouter = express.Router();




screenshotRouter.post("/create", async (req, res) => {
 
    const  screenshot = req.body
    let screenload = {
        ...screenshot ,

    }
    const screen = await new ScreenShot(screenload)
    screen.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: "something went wrong" })
        }
        return res.status(201).send(success)
    })
})

module.exports = screenshotRouter;
