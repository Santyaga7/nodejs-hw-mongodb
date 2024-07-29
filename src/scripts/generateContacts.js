import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, createFakeContact);
  try {
    const existContacts = await fs.readFile(PATH_DB, 'utf-8');
    const newData = [...JSON.parse(existContacts), ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error in generateContacts: ', error);
  }
};

generateContacts(5);

// const generateContacts = async (number) => {
//   const newContacts = Array.from({ length: number }, createFakeContact);
//   try {
//     const existData = await fs.readFile(PATH_DB, 'utf-8');
//     const newData = [...JSON.parse(existData), ...newContacts];
//     await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
//   } catch (error) {
//     console.error('Error in generateContacts: ', error);
//   }
// };

// generateContacts(5);
