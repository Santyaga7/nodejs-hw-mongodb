import fs from "fs/promises";

export async function readDataFromFile(path) {
  try {
    const rawData = await fs.readFile(path, "utf-8");
    if (rawData) {
      const parseData = JSON.parse(rawData);
      if (Array.isArray(parseData)) {
        return parseData;
      } else {
        console.log(
          "check file db.json it must be array of objects or empty array"
        );
      }
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}
export async function writeDataToFile(path, data) {
  try {
    await fs.writeFile(path, data);
  } catch (error) {
    console.log(error);
  }
}
