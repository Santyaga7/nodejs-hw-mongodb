import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const countParsecontacts = JSON.parse(contacts).length;
    return countParsecontacts;
  } catch (error) {
    console.error('Error in countContacts: ', error);
  }
};

console.log(await countContacts());
