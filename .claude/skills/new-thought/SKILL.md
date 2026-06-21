---
description: Take raw text/notes from the user and turn them into a new thought post on the site. Use whenever the user dumps draft writing for a blog post / thought entry.
disable-model-invocation: true
---

# Format a new thought post

The user will hand you raw text/notes for a new thought. Format it into a `ThoughtPage` component, wire the route, and add an index entry. Three files change every time:

1. **Create** `src/pages/<ComponentName>.js` — the post itself
2. **Edit** `src/App.js` — add the import + route
3. **Edit** `src/data/thoughts.js` — add the index entry

## Naming

From the title, derive:
- **slug** — kebab-case, lowercase, no punctuation (e.g. `on-letting-go`)
- **component name** — PascalCase from the slug (e.g. `OnLettingGo`)
- **route path** — `/thoughts/<slug>`
- **file path** — `src/pages/<ComponentName>.js`

## The post file

Always use the shared `ThoughtPage` component. Don't reinvent the chrome.

```jsx
import ThoughtPage from '../components/ThoughtPage';

function OnLettingGo() {
    return (
        <ThoughtPage
            title="on letting go"
            date="May 2026"
            readTime="3 min read"
        >
            <p>First paragraph...</p>
            <p>Next paragraph...</p>

            <h2 className="thought-page__section">a section heading</h2>

            <p>More body...</p>

            <blockquote className="thought-page__quote">
                "A standout line gets pulled into a quote."
            </blockquote>

            <p>Closing thought.</p>
        </ThoughtPage>
    );
}

export default OnLettingGo;
```

### Body styling — only these primitives

| Element                    | Markup                                                          |
|----------------------------|------------------------------------------------------------------|
| Paragraph                  | `<p>text</p>`                                                    |
| Section heading            | `<h2 className="thought-page__section">heading</h2>`             |
| Pull quote                 | `<blockquote className="thought-page__quote">…</blockquote>`     |
| Inline code                | `<code>name</code>`                                              |
| Emphasis                   | `<em>text</em>` / `<strong>text</strong>`                        |

Don't introduce new classes, images, or embeds unless the user explicitly asks. Don't modify `ThoughtPage.js` or `ThoughtPage.css`.

### Title casing

Titles are lowercase to match the rest of the site (e.g. `on letting go`, not `On Letting Go`). Match the user's tone — if they hand you a title with caps, ask before lowering.

### Date

Format: `"Month YYYY"` (e.g. `"May 2026"`). Use the current date unless the user specifies otherwise.

### Read time

Estimate at ~200 words/minute. Round to the nearest minute, minimum `"1 min read"`. Format: `"<N> min read"`.

## Route registration

In `src/App.js`:
1. Add `import OnLettingGo from './pages/OnLettingGo';` near the other page imports.
2. Add `<Route path="/thoughts/on-letting-go" element={<OnLettingGo />} />` next to the existing `/thoughts` route.

## Index entry

In `src/data/thoughts.js`, push a new object onto the `thoughts` array:

```js
{
    slug: 'on-letting-go',
    title: 'on letting go',
    blurb: 'one-line description for the index card',
}
```

New posts go at the **top** of the array (most recent first).

### Writing the blurb

- Single line, lowercase to match the title.
- 4–12 words, under ~80 chars.
- Describe the angle, not just the topic ("why I stopped journaling" beats "thoughts on journaling").
- The user may give you a blurb; if not, draft one and confirm before saving.

## Formatting the raw text

When the user dumps a draft:
1. Split into paragraphs at natural breaks (blank lines, topic shifts).
2. Promote standalone short lines that read like headings to `<h2 className="thought-page__section">`.
3. Promote indented or quoted lines to `<blockquote className="thought-page__quote">`.
4. Wrap inline mentions of files / functions / commands in `<code>`.
5. Don't rewrite the user's prose. Fix obvious typos only — preserve voice.

## Checklist before reporting done

- [ ] Component file created and exports default
- [ ] Route registered in `App.js` (import + `<Route>`)
- [ ] Entry added to `src/data/thoughts.js` at the top
- [ ] Title, date, read time, blurb all set
- [ ] Body uses only the documented primitives
- [ ] No edits to `ThoughtPage.js` / `ThoughtPage.css`
