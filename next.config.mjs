import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isGithubActions && repoName ? `/${repoName}` : undefined;

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  output: isGithubActions ? "export" : undefined,
  trailingSlash: isGithubActions,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
});
