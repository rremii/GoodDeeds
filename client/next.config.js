/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      displayName: true,
      ssr: true
    }
  }
}

module.exports = nextConfig
