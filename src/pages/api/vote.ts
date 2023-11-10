import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import creds from "@/configs/test-ktcb-209d01421a8f.json";
import { NextApiRequest, NextApiResponse } from "next";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

const jwt = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: SCOPES,
});

const doc = new GoogleSpreadsheet(
  "1X3AS8rXmyEn3lBhz65S36jlgwN26kDPsXZBWPnx2_kE",
  jwt
);

interface UsersRowData {
  name: string;
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method, body } = req;

    console.log(method);

    switch (method) {
      case "POST": {
        await doc.loadInfo();

        const sheet = doc.sheetsByTitle["TEST_1"];

        // const sheet = await doc.addSheet({
        //   headerValues: ["name", "email", "phone_number", "content"],
        //   title: "TEST_1",
        // });

        console.log("sheet name", sheet.title);

        await sheet.addRow(
          {
            ...body,
          },
          {
            insert: true,
          }
        );

        return res.status(200).json({ message: "A ok!" });
      }
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
}
