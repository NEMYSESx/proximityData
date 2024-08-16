import { db } from "../services/db";
import { Request, Response } from "express";

export const delData = async (req: Request, res: Response) => {
  const { socketId } = req.body as { socketId: string };

  if (!socketId) {
    return res.status(400).json({ error: "socketId is required" });
  }

  try {
    const result = await db.user.delete({
      where: {
        socketId: socketId,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error deleting the data", error);
    res.status(500).json({ error: "Error deleting the data" });
  }
};
