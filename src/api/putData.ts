import { Request, Response } from "express";
import { db } from "../services/db";

export const putData = async (req: Request, res: Response) => {
  const { name, socketId } = req.body as {
    name: string;
    socketId: string;
  };

  try {
    await db.user.create({
      data: {
        name,
        socketId,
      },
    });
    console.log("Data sent to backend...");
    res.status(201).json({ message: "Data successfully created" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "An error occurred while creating data" });
  }
};
