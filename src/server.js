import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './services/contacts.js';
const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get(
    '/contacts/:contactId',
    async (req, res, next) => {
      const contacts = await getContactById(
        req.params.contactId,
      );
      console.log(contacts);
      if (!contacts)
        return res.json({
          message: 'Contact not found',
        });

      res.json({
        status: 200,
        message: `Successfully found contact with id ${req.params.contactId}`,
        data: contacts,
      });
    },
  );

  app.use((req, res, next) => {
    res.status(404).send({
      message: 'Contact not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
