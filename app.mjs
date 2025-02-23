// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Automated Data Pipelines: A Code-First Guide",
  description:
    "A detailed guide for developing data models as code following good engineering practices",
  editThisNote: {
    url: "https://github.com/rothsandro/eleventy-notes/edit/{{branch}}/{{file}}",
  },
  customProperties: {
    properties: [
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    links: [
      {
        url: "https://github.com/acivitillo/eleventy-notes/",
        label: "GitHub",
        icon: "github",
      },
      {
        url: "#",
        label: "Workshops",
        icon: "notebook-pen",
      },
    ],
    sections: [
      {
        label: "Getting Started",
        groups: [
          {
            query: createNotesQuery({
              //pattern: "^/[^/]+$",
              pattern: "^/Start/",
            }),
          },
        ],
      },
      {
        label: "Data Flow",
        groups: [
          {
            label: "Storage Layers",
            query: createNotesQuery({
              pattern: "^/Storage/",
              tree: {
                expanded: false,
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
          {
            label: "Orchestration and Observability",
            query: createNotesQuery({
              pattern: "^/Orchestration/",
              tree: {
                expanded: false,
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
          {
            label: "Data Governance",
            query: createNotesQuery({
              pattern: "^/Governance/",
              tree: {
                expanded: false,
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
        ],
      },
    ],
  }
});
