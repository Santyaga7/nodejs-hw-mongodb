import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);
    if (parseData.length > 0) {
      parseData.pop();
      fs.writeFile(PATH_DB, JSON.stringify(parseData, null, 2));
    } else {
      return;
    }
  } catch (error) {
    console.error('Error in removeLastContact: ', error);
  }
};

removeLastContact();
