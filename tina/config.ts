import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c04a881b-510b-4c1d-aeb0-88e625711ed6", // Get this from tina.io
  token: "5e89711f6ed0e28d25c34d04cb30e540769c1c12", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        fields: [
          {
            type: "string",
            name: "header",
            label: "Header",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "about",
            label: "About",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
              {
                type: "rich-text",
                name: "body",
                label: "Body",
                required: true,
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => {
            // navigate to the home page
            if (document._sys.filename === "content") {
              return "/";
            }
            return undefined;
          },
        },
      },
    ],
  },
});
