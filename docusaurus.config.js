// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "York TechSoc Wiki",
  tagline: "Live Event Design, Install and Operation",
  url: "https://wiki.yorktechsoc.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yorktechsoc", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "src/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "wip",
        content:
          "This is our internal wiki site, you may be looking for <a href='https://yorktechsoc.org'>our main site</a>",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "York TechSoc Wiki",
        logo: {
          alt: "York TechSoc Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Guides",
            type: "doc",
            docId: "/category/guides",
            position: "left",
          },
          {
            label: "RAMS",
            type: "doc",
            docId: "/category/rams",
            position: "left",
          },
          {
            label: "AdamRMS",
            href: "https://www.dash.adam-rms.com",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social Media",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/yorktechsoc/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/uoytechsoc/",
              },
              {
                label: "Slack",
                href: "https://join.slack.com/t/yorktechsoc/shared_invite/zt-1df8p8flv-fqj2an8oJEx0n50Bjz~g~Q",
              },
            ],
          },
          {
            title: "With Thanks to",
            items: [
              {
                label: "YUSU",
                href: "https://yusu.org/",
              },
              {
                label: "YuFund",
                href: "https://www.york.ac.uk/york-unlimited/",
              },
              {
                label: "UoY AV",
                to: "https://www.york.ac.uk/about/departments/support-and-admin/estates-and-campus-services/audio-visual/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} York TechSoc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
