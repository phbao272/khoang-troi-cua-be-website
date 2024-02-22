import fetch from "node-fetch";
import * as fs from "fs";

(async () => {
  let baseUrl;

  switch (process.env.VERCEL_GITHUB_COMMIT_REF) {
    case "master":
      baseUrl = "https://khoangtroicuabe.org";
      break;
    default:
      baseUrl = `https://ladakh-admin-git-${process.env.VERCEL_GITHUB_COMMIT_REF}-minhhuunguyen.vercel.app`;
  }

  const envVars = `
    NEXTAUTH_URL=${baseUrl}
  `;

  fs.writeFile(`.env.${process.env.NODE_ENV}`, envVars, (err) => {
    if (err) console.error(err);
    else
      console.log(`
        successfully executed: ${__filename}
        ${envVars}
      `);
  });
})().catch((err) => console.log(err));
