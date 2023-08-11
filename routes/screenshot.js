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


screenshotRouter.get("/get", async (req, res) => {
    try {
      const screenshots = await ScreenShot.find();
      res.status(200).json(screenshots);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  
)


module.exports = screenshotRouter;
