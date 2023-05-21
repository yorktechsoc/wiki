# Technical Theatre Wiki

This is the repository for the Technical Theatre Wiki, a collection of guides and resources for technical theatre at the University of York. The website is build using [MkDocs](https://www.mkdocs.org/), a static site generator for documentation. The decision was taken to use this instead of Docusaurus to allow for easier contribution from non-technical members of the society.

## Local Development / Contributing

To develop the Wiki to add new pages, edit existing pages, or fix typos, you will need to install MkDocs. This can be done using `pip`:

Firstly, create a virtual environment, activate it, and install the dependencies:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Then run the local development instance using:

```bash
mkdocs serve
```

This will start a local development server on port 8000. You can view the site by navigating to [localhost:8000](http://localhost:8000) in your browser.

## Deployment

The site is automatically built and deployed using [GitHub Actions](https://docs.github.com/en/actions) to [wiki.yorktechsoc.org](wiki.yorktechsoc.org). The site is built and deployed on every push to the `main` branch.

## With Thanks To

- Jamie Waters
- John Cherry
- Christopher Nethercott
