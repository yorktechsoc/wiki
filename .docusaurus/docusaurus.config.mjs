/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "York TechSoc Wiki",
  "tagline": "Live Event Design, Install and Operation",
  "url": "https://wiki.yorktechsoc.org",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "yorktechsoc",
  "projectName": "wiki",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/workspaces/wiki/sidebars.js",
          "path": "src/docs"
        },
        "theme": {
          "customCss": "/workspaces/wiki/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "announcementBar": {
      "id": "wip",
      "content": "We're having a bit of a makeover! Please excuse us whilst we update our website.",
      "backgroundColor": "#fafbfc",
      "textColor": "#091E42",
      "isCloseable": false
    },
    "navbar": {
      "title": "York TechSoc Wiki",
      "logo": {
        "alt": "York TechSoc Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "label": "Guides",
          "type": "doc",
          "docId": "/category/guides",
          "position": "left"
        },
        {
          "label": "RAMS",
          "type": "doc",
          "docId": "/category/RAMS",
          "position": "left"
        },
        {
          "label": "AdamRMS",
          "href": "www.dash.adam-rms.com",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Social Media",
          "items": [
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/yorktechsoc/"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/uoytechsoc/"
            },
            {
              "label": "Slack",
              "href": "https://join.slack.com/t/yorktechsoc/shared_invite/zt-1df8p8flv-fqj2an8oJEx0n50Bjz~g~Q"
            }
          ]
        },
        {
          "title": "With Thanks to",
          "items": [
            {
              "label": "YUSU",
              "href": "https://yusu.org/"
            },
            {
              "label": "YUFUND",
              "href": "https://www.york.ac.uk/york-unlimited/"
            },
            {
              "label": "UoY AV",
              "to": "https://www.york.ac.uk/about/departments/support-and-admin/estates-and-campus-services/audio-visual/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 York TechSoc"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
