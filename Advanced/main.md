# Title Header (H1 header)


### Introduction (H3 header)

This is some placeholder text to show examples of Markdown formatting.
We have [a full article template](https://github.com/do-community/do-article-templates) you can use when writing a DigitalOcean article.
Please refer to our style and formatting guidelines for more detailed explanations: <https://do.co/style>


## Prerequisites (H2 header)

Before you begin this guide you'll need the following:

- Familiarity with [Markdown](https://daringfireball.net/projects/markdown/)


## Step 1 — Basic Markdown

This is _italics_, this is **bold**, this is __underline__, and this is ~~strikethrough~~.

- This is a list item.
- This list is unordered.

1. This is a list item.
2. This list is ordered.

> This is a quote.
>
> > This is a quote inside a quote.
>
> - This is a list in a quote.
> - Another item in the quote list.

Here's how to include an image with alt text and a title:

![Alt text for screen readers](https://i.kym-cdn.com/photos/images/original/001/704/393/8d2.png "Logo")

Use horizontal rules to break up long sections:

---

Rich transformations are also applied:

- On ellipsis: ...
- On quote pairs: "sammy", 'test'
- On dangling single quotes: it's
- On en/em dashes: a -- b, a --- b

<!-- Comments will be removed from the output -->

| Tables | are   | also  | supported | and    | will   | overflow | cleanly | if     | needed |
|--------|-------|-------|-----------|--------|--------|----------|---------|--------|--------|
| col 1  | col 2 | col 3 | col 4     | col 5  | col 6  | col 7    | col 8   | col 9  | col 10 |
| col 1  | col 2 | col 3 | col 4     | col 5  | col 6  | col 7    | col 8   | col 9  | col 10 |
| col 1  | col 2 | col 3 | col 4     | col 5  | col 6  | col 7    | col 8   | col 9  | col 10 |
| col 1  | col 2 | col 3 | col 4     | col 5  | col 6  | col 7    | col 8   | col 9  | col 10 |
| col 1  | col 2 | col 3 | col 4     | col 5  | col 6  | col 7    | col 8   | col 9  | col 10 |


## Step 2 — Code

This is `inline code`. This is a <^>variable<^>. This is an `in-line code <^>variable<^>`.

Here's a configuration file with a label:

```nginx
[label /etc/nginx/sites-available/default]
server {
    listen 80 <^>default_server<^>;
    . . .
}
```

Examples can have line numbers, and every code block has a 'Copy' button to copy just the code:

```line_numbers,js
const test = 'hello';
const other = 'world';
console.log(test, other);
```

Here's output from a command with a secondary label:

```
[secondary_label Output]
Could not connect to Redis at 127.0.0.1:6379: Connection refused
```

This is a non-root user command example:

```command
sudo apt-get update
sudo apt-get install python3
```

This is a root command example:

```super_user
adduser sammy
shutdown
```

This is a custom prefix command example:

```custom_prefix(mysql>)
FLUSH PRIVILEGES;
SELECT * FROM articles;
```

A custom prefix can contain a space by using `\s`:

```custom_prefix((my-server)\smysql>)
FLUSH PRIVILEGES;
SELECT * FROM articles;
```

Indicate where commands are being run with environments:

```command
[environment local]
ssh root@server_ip
```

```command
[environment second]
echo "Secondary server"
```

```command
[environment third]
echo "Tertiary server"
```

```command
[environment fourth]
echo "Quaternary server"
```

```command
[environment fifth]
echo "Quinary server"
```

And all of these can be combined together, with a language for syntax highlighting as well as a line prefix (line numbers, command, custom prefix, etc.), and even an environment and label:

```line_numbers,html
[environment second]
[label index.html]
<html>
<body>
<head>
  <title><^>My Title<^></title>
</head>
<body>
  . . .
</body>
</html>
```


## Step 3 — Callouts

Here is a note, a warning, some info and a draft note:

<$>[note]
**Note:** Use this for notes on a publication.
<$>

<$>[warning]
**Warning:** Use this to warn users.
<$>

<$>[info]
**Info:** Use this for product information.
<$>

<$>[draft]
**Draft:** Use this for notes in a draft publication.
<$>

A callout can also be given a label, which supports inline markdown as well:

<$>[note]
[label Labels support _inline_ **markdown**]
**Note:** Use this for notes on a publication.
<$>


You can also mention users by username:

@MattIPv4


## Step 4 — Layout

Columns allow you to customise the layout of your Markdown:

[column
Content inside a column is regular Markdown block content.

> Any block or inline syntax can be used, including quotes.
]

[column
Two or more columns adjacent to each other are needed to create a column layout.

On desktop the columns will be evenly distributed in a single row, on tablets they will wrap naturally, and on mobile they will be in a single stack.
]

[details Content can be hidden using `details`.
Inside the details block you can use any block or inline syntax.

You could hide the solution to a problem:
```js
// Write a message to console
console.log('Hello, world!');
```
]

[details open You can also have the details block open by default.
Pass `open` as the first argument to the summary section to do this.

_You can also pass `closed`, though this is the same as not passing anything before the summary._
]

## Step 5 — Embeds

### YouTube

Embedding a YouTube video (id, height, width):

[youtube iom_nhYQIYk 225 400]

_Both the width and height are optional, with the defaults being 480 and 270 respectively._\
_The width/height set are treated as maximums -- the video will scale down to fit the available space, maintaining the aspect ratio._

### Wistia

Embedding a Wistia video (id, height, width):

[wistia 7ld71zbvi6 225 400]

_As with the YouTube embed, both the width and height are optional and have the same defaults._\
_The same behaviour applies to the width/height set, with responsive scaling._

### DNS

Embedding DNS record lookups (hostname, record types...):

[dns digitalocean.com A AAAA]

### Glob

Demonstrating how glob matching works (pattern, tests...):

[glob **/*.js a/b.js c/d.js e.jsx f.md]

Glob embeds can also be written as multiple lines if needed:

[glob **/*.js
a/b.js
c/d.js
e.jsx
f.md]

### CodePen

To provide code examples, you could embed a CodePen with a username and pen ID:

[codepen MattCowley vwPzeX]

CodePen embeds can be customized with many flags after the username and ID:

- Pass any integer value to set a custom height for the embed (e.g. `[codepen MattCowley vwPzeX 512]`)
- Pass `dark` to switch the embed to using dark mode (e.g. `[codepen MattCowley vwPzeX dark]`)
- Pass `lazy` to enable lazy loading (click to run) for the embed (e.g. `[codepen MattCowley vwPzeX lazy]`)
- Pass one of `html`, `css`, or `js` to change the default tab that is shown (e.g. `[codepen MattCowley vwPzeX css]`)
- Pass `editable` to enable the user to edit the embed (e.g. `[codepen chriscoyier Yxzjdz editable]`)\
  _(Note: The embedded pen must be from a user with CodePen Pro for this to work)_

These flags can be combined in any order to create a custom CodePen embed.
For example, `[codepen MattCowley vwPzeX dark css 384]` would create a dark mode embed that shows the CSS tab by default, with a height of 384px.

### Glitch

Alternatively, you may want to embed a code example from Glitch with a project slug:

[glitch hello-digitalocean]

Similar to CodePen embeds, a set of optional flags can be passed as the slug to customize the embed:

- Pass any integer value to set a custom height for the embed (e.g. `[glitch hello-digitalocean 512]`)
- Pass `code` to show the project code by default in the embed (e.g. `[glitch hello-digitalocean code]`)
- Pass `notree` to hide the file tree by default when showing the project code (e.g. `[glitch hello-digitalocean code notree]`)
- Pass `path=...` to set a default file to show when showing the project code (e.g. `[glitch hello-digitalocean code path=src/app.jsx]`)
- Pass `highlights=...` to set lines to highlight when showing the project code (e.g. `[glitch hello-digitalocean code path=src/app.jsx highlights=15,25]`)
- Pass `noattr` to remove the author attribution from the embed (e.g. `[glitch hello-digitalocean noattr]`)

### Can I Use

If you're writing web-related content, you may want to embed a Can I Use table for a feature:

[caniuse css-grid]

Some optional flags can also be set for this embed:

- Pass `past=...` to set how many previous browser versions are listed (0-5) (e.g. `[caniuse css-grid past=5]`)
- Pass `future=...` to set how many future browser versions are listed (0-3) (e.g. `[caniuse css-grid future=3]`)
- Pass `accessible` to switch to the accessible color scheme by default (e.g. `[caniuse css-grid accessible]`)

### Asciinema

Embedding a terminal recording from Asciinema (id, cols, rows):

[asciinema 239367 50 20]


## Step 6 — Tutorials

Certain features of our Markdown engine are designed specifically for our tutorial content-types.
These may not be enabled in all contexts in the DigitalOcean community, but are enabled by default in the do-markdownit plugin.

[rsvp_button 1234 "Marketo RSVP buttons use the `rsvp_button` flag"]

[terminal ubuntu:focal Terminal buttons are behind the `terminal` flag]


## Conclusion

Please refer to our [writing guidelines](https://do.co/style) for more detailed explanations on our style and formatting.
