import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const messageData = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(messageData);
      res.status(200).json(message);
    } catch (e) {
      if (e instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", field: e.errors[0].path.join(".") });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return httpServer;
}
