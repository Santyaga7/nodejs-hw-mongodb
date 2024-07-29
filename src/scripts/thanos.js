import { PATH_DB } from "../constants/contacts.js";
import { readDataFromFile, writeDataToFile } from "../utils/rwToFile.js";

export const thanos = async () => {
  const dbContacts = await readDataFromFile(PATH_DB);
  const half = dbContacts.length / 2;
  while (dbContacts.length > half) {
    dbContacts.splice(getRandomInt(dbContacts.length), 1);
  }
  const contacts = JSON.stringify(dbContacts);
  writeDataToFile(PATH_DB, contacts);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

await thanos();
