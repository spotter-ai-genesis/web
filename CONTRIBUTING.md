# Updating the site

Every change pushed to `main` is built and published automatically (about a minute; watch the
**Actions** tab). If a file is invalid, the build fails, the Actions tab says which file and field,
and the live site keeps its previous version.

You can do all of this in the GitHub web interface: open the folder, **Add file → Create new file**,
paste a template below, and **Commit changes**.

## Add a publication: `src/content/publications/firstauthor-year-keyword.md`

```markdown
---
title: "Paper title"
authors: "A. Author, B. Author, B. Nicolae"
venue: "SC '27"
year: 2027
url: "https://doi.org/..."     # optional
pdf: "https://..."             # optional
kind: project                  # project = SPOTTER-AI paper; related = background work
order: 10                      # optional; lower first among papers of the same year
---
```

## Add a person: `src/content/people/lastname.md`

```markdown
---
name: "Full Name"
institution: ORNL              # one of: ANL, ORNL, HPE, IIT
role: "Co-PI"                  # optional
photo: "lastname.jpg"          # optional: a square photo in public/people/; initials otherwise
url: "https://..."             # optional: profile page
order: 10                      # optional; lower is listed first within the institution
---
```

## Add or update a repository (Software page): `src/content/software/name.md`

Each file is one section of the Software page, in `order`.

```markdown
---
name: "repo-name"
repo: "https://github.com/spotter-ai-genesis/repo-name"
summary: "One sentence, shown large under the name."
order: 6
# diagram: connector   # optional: connector, flowcept, timm or clio
#                      # (drawings in src/components/software/; a new one needs a new component)
---

A few paragraphs of Markdown describing the repository.
```

## Images

Put them in `public/` (for example `public/img/sc26-booth.jpg`) and reference them in Markdown as
`![description](/web/img/sc26-booth.jpg)` (the `/web` prefix is the site's base path).
