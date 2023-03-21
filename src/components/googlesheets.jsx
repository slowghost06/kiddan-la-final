import { GoogleSpreadsheet } from "google-spreadsheet";
import { CLIENT_EMAIL, PRIVATE_KEY } from "../../package.json";
export async function GetSheetData(
  SPREADSHEET_ID,
  type = "notwork",
  offset = null,
  limit = null
) {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = await doc.sheetsById["0"];
    const rows = await sheet.getRows();
    const categories = rows.map((ele) => {
      return ele._rawData[5];
    });
    if (type === "work") {
      rows.reverse();
    }
    if (offset == null && limit == null) {
      const result = {
        rows: rows,
        categories: categories
      };
      return result;
    }
    const result = {
      rows: rows.slice(offset, offset + limit),
      categories: categories
    };
    return result;
  } catch (e) {
    console.error("Error: ", e);
  }
}

export async function GetCategories(SPREADSHEET_ID) {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = await doc.sheetsById["0"];
    const rows = await sheet.getRows();
    const categories = rows.map((ele) => {
      return ele._rawData[5];
    });
    return categories;
  } catch (e) {
    console.error("Error: ", e);
  }
}
