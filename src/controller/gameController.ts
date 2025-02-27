import { Request, Response } from "express";

let board = new Array(10).fill(null);

export function playGame (req:Request, res: Response):void {
    const { character, pos } = req.body;
    const position = Number(pos);

    if (!character || character.length !== 1 || isNaN(position) || position < 0 || position >= 10) {
        res.status(400).json('Invalid input');
        return;
    }
    if (board[position] !== null) {
        res.status(400).json('Position already taken');
        return;
    }

    board[position] = character;

    for (let i = 0; i <= 7; i++) {
        if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
        res.status(200).json('Win');
        return;
        }
    }

    if (board.every(cell => cell !== null)) {
        board.fill(null);
        res.status(205).json('Board reset');
        return;
    }

    res.status(201).json(board);
};
