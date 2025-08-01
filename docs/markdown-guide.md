---
sidebar_label: 'Markdown Guide'
sidebar_position: 4
---

# Markdown Guide

Markdown is a lightweight markup language for creating formatted text using a plain-text editor. Below is a comprehensive guide to Markdown syntax.

---

## Headings

Use `#` for headings. The number of `#` symbols indicates the heading level.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

---

## Emphasis

- *Italic*: `*italic*` or `_italic_`
- **Bold**: `**bold**` or `__bold__`
- ***Bold and Italic***: `***bold and italic***`

---

## Lists

### Unordered List

```markdown
- Item 1
- Item 2
    - Subitem 2.1
    - Subitem 2.2
* Item 3
```

### Ordered List

```markdown
1. First item
2. Second item
     1. Subitem 2.1
     2. Subitem 2.2
3. Third item
```

---

## Links

```markdown
[Link Text](https://example.com)
```

[Link Text](https://example.com)

---

## Images

```markdown
![Alt Text](https://example.com/image.png)
```

![Alt Text](https://example.com/image.png)

---

## Blockquotes

```markdown
> This is a blockquote.
>> Nested blockquote.
```

> This is a blockquote.
>> Nested blockquote.

---

## Code

### Inline Code

`` `inline code` ``

### Code Block

<pre>
```js
// Example in JavaScript(js)
console.log('Hello, world!');
```
</pre>

---

## Horizontal Rule

```
---
```

---

## Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Data     |
| Row 2    | Data     |
```

| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Data     |
| Row 2    | Data     |


---

## Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
```

- [x] Completed task
- [ ] Incomplete task

---

## Escaping Characters

Use `\` before special characters to escape them.

```markdown
\*Not italic\*
```

\*Not italic\*

---

## Footnotes

```markdown
Here is a footnote reference.[^1]

[^1]: Here is the footnote.
```

---

## Strikethrough

```markdown
~~Strikethrough~~
```

~~Strikethrough~~

---

## Emoji

```markdown
:smile: :rocket:
```

:smile: :rocket:

---

## HTML in Markdown

You can use raw HTML for advanced formatting:

```html
<b>Bold HTML</b>
```

<b>Bold HTML</b>

---

## Resources

```markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
```

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

---

## Embedding YouTube Videos

You can add a clickable link to a YouTube video:

```markdown
[![Watch the video](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)
```

[![Watch the video](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Embedding YouTube Videos Inline

If your site supports raw HTML in Markdown (like Docusaurus does), you can embed a YouTube video directly:

```html
<iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

<iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
