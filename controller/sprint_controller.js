import { v4 as uuidv4 } from 'uuid';
import express from "express";
import {Sprint, Story, User} from "../model/sprint.js"

const router = express.Router()

router.get("/", (req, res, next) => {
    res.json(Sprint)    
});

router.post('/', (req, res, next) => {
    let uuid = uuidv4()
    Sprint.push({
        "sprint_id" : uuid,
        "sprint_name" : req.body.sprint_name,
    })
    console.log(Sprint)
    let sprnt = Sprint.filter(s => uuid === s.sprint_id)
    res.json(sprnt)
});

router.post('/:sprint', (req, res, next) => {
    let sprint_stories = Story.filter(st => st.sprint_id === req.params.sprint)
    console.log(sprint_stories)
    res.json(sprint_stories)
});


router.post('/:sprint/:lane', (req, res, next) => {
    let sprint_story_lane = Story.filter(st => st.sprint_id === req.params.sprint && st.status === req.params.lane)
    console.log(sprint_story_lane)
    res.json(sprint_story_lane)
});
export default router

