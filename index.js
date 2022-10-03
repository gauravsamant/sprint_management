// amul.garg@knolskape.com
import express from "express";
// import {Sprint, Story, User} from "./model/sprint"
import SprintApp  from "./controller/sprint_controller.js"
import StoryApp from "./controller/story_controller.js" 

const App = express();
App.use(express.json())
// const router = app.router()
App.use("/api/v1/sprint", SprintApp)
App.use("/api/v1/story", StoryApp)

App.get("/", (req, res, next) => {
    res.send("request recieved")
})
App.listen(3000, () => {
    console.log("listenting on port 3000")
});