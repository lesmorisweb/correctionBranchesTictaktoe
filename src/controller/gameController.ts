import { Request, Response } from "express";

let board = new Array(10).fill(null);

export function playGame (req:Request, res: Response) {
    const { character, pos } = req.body;
    const position = Number(pos);

    if (!character || character.length !== 1 || isNaN(position) || position < 0 || position >= 10) {
        return res.status(400).json('Invalid input');
    }
    if (board[position] !== null) {
        return res.status(400).json('Position already taken');
    }

    board[position] = character;

    for (let i = 0; i <= 7; i++) {
        if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
            return res.status(200).json('Win');
        }
    }

    if (board.every(cell => cell !== null)) {
        board.fill(null);
        return res.status(205).send('Board reset');
    }

    res.status(201).send('Character placed');
};
