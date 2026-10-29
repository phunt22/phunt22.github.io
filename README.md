# Will Hunt's portfolio

## Resume

The editable resume lives at `resume/Resume.tex`. Its PDF is generated at
`src/assets/Resume.pdf` and is intentionally not committed.

Install a LaTeX compiler once (Tectonic is the smallest option on macOS):

```bash
brew install tectonic
```

Then build just the resume with:

```bash
npm run resume:build
```

`npm start`, `npm run build`, and `npm run deploy` also compile the resume
before running, so the website always uses the latest LaTeX source.
