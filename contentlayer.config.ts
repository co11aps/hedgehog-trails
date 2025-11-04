import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
    draft: { type: "boolean", default: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, ""),
    },
  },
}));

export const Trail = defineDocumentType(() => ({
  name: "Trail",
  filePathPattern: `trails/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    region: { type: "string" },
    draft: { type: "boolean", default: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^trails\//, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Trail],
  mdx: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
  },
});
