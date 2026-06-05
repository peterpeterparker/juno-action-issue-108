import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      development: "auamu-4x777-77775-aaaaa-cai",
      production: "dtzsb-3qaaa-aaaal-asz4q-cai",
    },
    hosting: {
      source: "dist",
      predeploy: ["npm run build"],
    },
  },
});
