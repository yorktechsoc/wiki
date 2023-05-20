# Technical Theatre Wiki

This is the repository for the Technical Theatre Wiki, a collection of guides and resources for technical theatre at the University of York. The website is build using [Docasaurus](https://docusaurus.io/), a static site generator for documentation websites.

## Local Development / Contributing

In order to contribute to the wiki, you will need to have [Node.js](https://nodejs.org/en/) installed. Once you have done this, you can clone the repository and install the dependencies:

```bash
npm install
```

You can then run the development server:

```bash
npm run start
```

This will start a local development server at `http://localhost:3000`. You can then make changes to the website and see them reflected in real time.

## Deployment

The site is automatically built and deployed using [GitHub Actions](https://docs.github.com/en/actions) to [wiki.yorktechsoc.org](wiki.yorktechsoc.org). The site is built and deployed on every push to the `main` branch.
