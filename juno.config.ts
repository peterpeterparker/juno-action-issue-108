import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      development: "auamu-4x777-77775-aaaaa-cai",
      production: "<PROD_SATELLITE_ID>",
    },
    hosting: {
      source: "dist",
      predeploy: ["npm run build"],
    },
  },
});
