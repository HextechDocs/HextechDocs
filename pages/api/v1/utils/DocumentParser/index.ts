import { parse } from "yaml";

interface ParseFileReturnInterface {
  metaTags: string;
  markdown: string;
}

/**
 * Parse data from the md provided from the string passed
 * @param data
 */
const parseFile = (data: string): ParseFileReturnInterface => {
  const metaTags = data.split("---")[1];
  const rawMarkdown = data.split("---")[2];

  const parsedMarkdown = parse(rawMarkdown);

  return {
    metaTags,
    markdown: parsedMarkdown,
  };
};

export default {
  parseFile,
};
