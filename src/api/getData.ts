import { Request, Response } from "express";
import { db } from "../services/db";

export const getData = async (req: Request, res: Response) => {
  const { socketId } = req.body as { socketId: string };

  try {
    const response = await db.user.findFirst({
      where: {
        socketId: socketId,
      },
    });
    return res.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching data." });
  }
};
