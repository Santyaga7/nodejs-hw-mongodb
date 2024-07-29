import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf-8');
    const parseAllContacts = JSON.parse(allContacts);
    return parseAllContacts;
  } catch (error) {
    console.log('Error in getAllContacts: ', error);
  }
};

console.log(await getAllContacts());
