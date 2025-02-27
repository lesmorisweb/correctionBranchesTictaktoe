import { Router } from "express"
import { playGame } from "../controller/gameController"

const router= Router()

router.post("/play", playGame)

export default router