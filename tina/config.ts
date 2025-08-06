import { Collection, Template, defineConfig } from "tinacms";

//
// TEMPLATES
//
const generateSpacer = (): Template => ({
  name: "spacer",
  label: "Spacer",
  fields: [
    {
      type: "string",
      name: "size",
      label: "Size",
      description: 'Allowed values: "sm" | "md" | "lg" | "xl"',
    },
  ],
});
const generateDivider = (): Template => ({
  name: "divider",
  label: "Divider",
  fields: [
    {
      type: "string",
      name: "label",
      label: "This is a null field because I must put something",
    },
  ],
});
const generateImageWithCaption = (): Template => ({
  name: "imageWithCaption",
  label: "Image With Caption",
  fields: [
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      description:
        "A simple description of the image. Serves as fallback for accessibility.",
    },
    {
      type: "string",
      name: "caption",
      label: "Caption",
      description: "Image caption visible on the page.",
    },
    {
      type: "boolean",
      name: "enableZoom",
      label: "Enable Zoom",
      description: "Enabling zoom will show a zoom button for the image.",
    },
  ],
});
const generateImageSlider = (): Template => ({
  name: "imageSlider",
  label: "Image Slider",
  fields: [
    {
      type: "object",
      list: true,
      name: "slides",
      label: "Slides",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          description:
            "A simple description of the image. Serves as fallback for accessibility.",
        },
        {
          type: "string",
          name: "caption",
          label: "Caption",
          description: "Image caption visible on the page.",
        },
        {
          type: "boolean",
          name: "enableZoom",
          label: "Enable Zoom",
          description: "Enabling zoom will show a zoom button for the image.",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
    },
  ],
});
const generateRichTextContent = (): Template => ({
  name: "richTextContent",
  label: "Rich text content",
  fields: [
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      templates: [generateSpacer()],
    },
  ],
});
const generateImpactItem = (): Template => ({
  name: "impactItem",
  label: "Impact Item",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
  ],
});
const generateImpact = (): Template => ({
  name: "impact",
  label: "Impact",
  fields: [
    {
      type: "object",
      list: true,
      name: "items",
      label: "Items",
      templates: [generateImpactItem()],
    },
  ],
});
const generateHeader = (): Template => ({
  name: "header",
  label: "Header",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "overview",
      label: "Overview",
    },
  ],
});
const generateOneColumnBlock = (): Template => ({
  name: "oneColumn",
  label: "One Column Content",
  fields: [
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      templates: [generateSpacer(), generateDivider()],
    },
  ],
});
const generateTwoColumnBlock_1_1 = (): Template => ({
  name: "twoColumn_1_1",
  label: "Two Column Content (1:1)",
  fields: [
    {
      type: "rich-text",
      name: "col1",
      label: "Column 1",
      templates: [generateSpacer(), generateDivider()],
    },
    {
      type: "rich-text",
      name: "col2",
      label: "Column 2",
      templates: [generateSpacer(), generateDivider()],
    },
  ],
});
const generateTwoColumnBlock_1_2 = (): Template => ({
  name: "twoColumn_1_2",
  label: "Two Column Content (1:2)",
  fields: [
    {
      type: "rich-text",
      name: "col1",
      label: "Column 1",
      templates: [generateSpacer(), generateDivider()],
    },
    {
      type: "rich-text",
      name: "col2",
      label: "Column 2",
      templates: [generateSpacer(), generateDivider()],
    },
  ],
});
const generateThreeColumnBlock_1_1_1 = (): Template => ({
  name: "threeColumn_1_1_1",
  label: "Three Column Content (1:1:1)",
  fields: [
    {
      type: "rich-text",
      name: "col1",
      label: "Column 1",
      templates: [generateSpacer(), generateDivider()],
    },
    {
      type: "rich-text",
      name: "col2",
      label: "Column 2",
      templates: [generateSpacer(), generateDivider()],
    },
    {
      type: "rich-text",
      name: "col3",
      label: "Column 3",
      templates: [generateSpacer(), generateDivider()],
    },
  ],
});
const generateSection = (): Template => ({
  name: "section",
  label: "Section",
  fields: [
    {
      type: "string",
      name: "anchorId",
      label: "Anchor ID",
      description:
        "ID for anchor links. Leave blank if you don't want the section to be included in the section links.",
      ui: {
        validate: (value: string) => {
          if (value && !value?.match(/^[a-zA-Z0-9_]*$/)) {
            return "Only alphanumeric characters and underscores allowed.";
          }
        },
      },
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      description:
        "Sticky section title appearing at the start of each section. Also serves as a label/name to help you identify each section in the list of sections.",
    },
    {
      type: "boolean",
      name: "showSectionTitle",
      label: "Show section title",
      description:
        "You may choose to hide the section title if you require a section without the sticky title.",
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Content",
      description:
        "Build the post content using a variety of one, two, or three column blocks, spacers, and dividers.",
      templates: [
        generateSpacer(),
        generateDivider(),
        generateImpact(),
        generateRichTextContent(),
        generateImageWithCaption(),
        generateImageSlider(),

        generateOneColumnBlock(),
        generateTwoColumnBlock_1_1(),
        generateTwoColumnBlock_1_2(),
        generateThreeColumnBlock_1_1_1(),
      ],
    },
  ],
  ui: {
    defaultItem: {
      showSectionTitle: true,
    },
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
});

//
// COLLECTIONS
//
const globalCollection: Collection = {
  name: "global",
  label: "Global",
  path: "content/global",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "siteTitle",
      label: "Site Title",
      description:
        "The title for your site. Appears in browser tabs and as the title in search engine results.",
    },
    {
      type: "string",
      name: "siteDescription",
      label: "Site Description",
      description:
        "A short description for your site. Appears in search engine results. Recommended to be 160 characters or less.",
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
        },
        {
          type: "string",
          name: "url",
          label: "URL/Path",
          description:
            'Either a full URL for external links, or the path to a page in your site (e.g. "/works/fortress").',
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
        },
        {
          type: "string",
          name: "url",
          label: "URL/Path",
          description:
            'Either a full URL for external links, or the path to a page in your site (e.g. "/works/fortress").',
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
        },
        {
          type: "string",
          name: "url",
          label: "URL/Path",
          description:
            'Either a full URL for external links, or the path to a page in your site (e.g. "/works/fortress").',
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
};
const homeCollection: Collection = {
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
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
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
};
const worksCollection: Collection = {
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
          description:
            'Either a full URL for external links, or the path to a page in your site (e.g. "/works/fortress").',
        },
        {
          type: "number",
          name: "index",
          label: "Index",
          description: "The post number.",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
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
};
const worksPostsCollection: Collection = {
  name: "works_posts",
  label: "Works Posts",
  path: "content/works_posts",
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
      list: true,
      name: "sections",
      label: "Sections",
      templates: [
        generateSection(),
        generateImpact(),
        generateHeader(),
        generateSpacer(),
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      return `/works/${document._sys.filename}`;
    },
  },
};
const caseStudiesCollection: Collection = {
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
          description:
            'Either a full URL for external links, or the path to a page in your site (e.g. "/works/fortress").',
        },
        {
          type: "number",
          name: "index",
          label: "Index",
          description: "The post number.",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
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
};
const caseStudiesPostsCollection: Collection = {
  name: "caseStudies_posts",
  label: "Case Studies Posts",
  path: "content/caseStudies_posts",
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
      list: true,
      name: "sections",
      label: "Sections",
      templates: [
        generateSection(),
        generateImpact(),
        generateHeader(),
        generateSpacer(),
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      return `/case-studies/${document._sys.filename}`;
    },
  },
};

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io

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
      globalCollection,
      homeCollection,
      worksCollection,
      worksPostsCollection,
      caseStudiesCollection,
      caseStudiesPostsCollection,
    ],
  },
});
