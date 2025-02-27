import { Router } from "express"
import { playGame } from "../controller/gameController"

const router= Router()

router.post("/play", (req: any, res: any) => playGame(req, res))

export default router