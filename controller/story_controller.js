import { v4 as uuidv4 } from 'uuid';
import express from "express";
import {Sprint, Story, User} from "../model/sprint.js"
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json(Story)
})
router.post("/", (req, res, next) => {
    let uuid = uuidv4()
    let req_status = ''
    if (req.body.status === "") {
        req_status = "to_do"
    } else {
        req_status = req.body.status
    }
    Story.push({
        "story_id": uuid, //uuid
        "title": req.body.title, // string
        "priority": req.body.priority, //high, midum, low
        "story_point": req.body.story_point, // number
        "assigned_to": '', // take user input to assign
        "status": req_status, // lane - to do , inprogress, complete, in review, in qa
        "sprint_id": req.body.sprint_id
    })
    let stry = Story.filter(s => uuid === s.story_id)
    res.json(stry)
})

router.get("/:story_id", (req, res, next) => {
    const story = Story.filter(story => story.story_id === req.params.story_id)
    res.json(story)
})

router.patch("/:story_id", (req, res, next) => {
    const story = Story.filter(story => story.story_id === req.params.story_id)
    story.status = req.body.status
    res.json(story)
})


router.get("/:lane", (req, res, next) => {
    const story = Story.filter(story => story.status === req.params.lane)
    res.json(story)
})

export default router
