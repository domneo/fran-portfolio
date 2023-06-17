import { Template, defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const twoColumnBlock: Template = {
  name: "twoColumn",
  label: "Two Column Content",
  fields: [
    {
      type: "rich-text",
      name: "col1",
      label: "Column 1",
    },
    {
      type: "rich-text",
      name: "col2",
      label: "Column 2",
    },
  ],
};
const threeColumnBlock: Template = {
  name: "threeColumn",
  label: "Three Column Content",
  fields: [
    {
      type: "rich-text",
      name: "col1",
      label: "Column 1",
    },
    {
      type: "rich-text",
      name: "col2",
      label: "Column 2",
    },
    {
      type: "rich-text",
      name: "col3",
      label: "Column 3",
    },
  ],
};
const section: Template = {
  name: "section",
  label: "Section",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Content",
      templates: [twoColumnBlock, threeColumnBlock],
    },
  ],
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
};

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
        name: "global",
        label: "Global",
        path: "content/global",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "siteTitle",
            label: "Site Title",
            required: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            required: true,
          },
          {
            type: "object",
            name: "menu",
            label: "Menu",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL/Path",
              },
              {
                type: "boolean",
                name: "openInNewWindow",
                label: "Open in new window",
              },
            ],
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
          },
          {
            type: "object",
            name: "contactLinks",
            label: "Contact Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL/Path",
              },
              {
                type: "boolean",
                name: "openInNewWindow",
                label: "Open in new window",
              },
            ],
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
          },
          {
            type: "object",
            name: "footerCredits",
            label: "Footer Credits",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL/Path",
              },
              {
                type: "boolean",
                name: "openInNewWindow",
                label: "Open in new window",
              },
            ],
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
      },
      {
        name: "home",
        label: "Home",
        path: "content/home",
        format: "mdx",
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
                templates: [
                  {
                    name: "ParagraphLight",
                    label: "Paragraph (Light)",
                    fields: [
                      {
                        type: "rich-text",
                        name: "content",
                        label: "Content",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: "works",
        label: "Works",
        path: "content/works",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "postList",
            label: "Post List",
            list: true,
            fields: [
              {
                type: "string",
                name: "url",
                label: "URL/Path",
              },
              {
                type: "number",
                name: "index",
                label: "Index",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "object",
                name: "skills",
                label: "Skills",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                    required: true,
                  },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
              {
                type: "boolean",
                name: "comingSoon",
                label: "Coming soon",
              },
            ],
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "works") {
              return "/works";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: "works_posts",
        label: "Works Posts",
        path: "content/works_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "sections",
            label: "Sections",
            templates: [section],
          },
        ],
        ui: {
          router: ({ document }) => {
            // navigate to the post that was clicked
            return `/works/${document._sys.filename}`;
          },
        },
      },
      {
        name: "caseStudies",
        label: "Case Studies",
        path: "content/caseStudies",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "postList",
            label: "Post List",
            list: true,
            fields: [
              {
                type: "string",
                name: "url",
                label: "URL/Path",
              },
              {
                type: "number",
                name: "index",
                label: "Index",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "object",
                name: "skills",
                label: "Skills",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                    required: true,
                  },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
              {
                type: "boolean",
                name: "comingSoon",
                label: "Coming soon",
              },
            ],
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "caseStudies") {
              return "/case-studies";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: "caseStudies_posts",
        label: "Case Studies Posts",
        path: "content/caseStudies_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "sections",
            label: "Sections",
            templates: [section],
          },
        ],
        ui: {
          router: ({ document }) => {
            // navigate to the post that was clicked
            return `/case-studies/${document._sys.filename}`;
          },
        },
      },
    ],
  },
});
