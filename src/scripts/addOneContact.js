import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async (number) => {
  try {
    const existContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const updateContacts = [...existContacts, createFakeContact()];
    await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
  } catch (error) {
    console.error('Error in addOneContact: ', error);
  }
};

addOneContact();
