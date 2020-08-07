---
title: This will be my fisrt post
tags:
  - 11ty
teaser: React, Vue, Svelte, Gatsby, Next, WTF!!!!!
date: 2020-06-24
---

This will be my first post...eventually

#### File Tree Test

<pre class="language-terminal" markdown="1">
git commit -m "warning, this commit will break it all"
</pre>

<div class="filename" markdown="1">
  file tree
</div>
<pre class="language-bash">
├── src/
│   ├── _css/
│   │   └── app.css
│   ├── _data/
│   │   ├── classes.js
│   │   ├── env.js
│   │   ├── navigation.js
│   │   └── site.js
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── 2-col.liquid
│   │   │   ├── base.liquid
│   │   │   ├── post.liquid
│   │   │   └── tania.liquid
│   │   ├── 11ty-series.html
│   │   ├── footer.html
│   │   ├── head.html
│   │   ├── header.html
│   │   ├── latest-posts.html
│   │   ├── navbar.html
│   │   └── style.min.css
│   ├── _utils/
│   │   ├── minify-html.js
│   │   └── minify-js.js
│   ├── assets/
│   │   ├── static/
│   │   │   └── logomark-light.png
│   │   └── style.css
│   ├── web/
│   │   ├── _11ty/
│   │   │   ├── _11ty.json
│   │   │   └── why-11ty.md
│   │   ├── _posts/
│   │   │   ├── _posts.json
│   │   │   ├── post1.md
│   │   │   └── post2.md
│   │   ├── blog.html
│   │   └── style-guide.html
│   ├── about.html
│   ├── index.html
│   ├── old-index.html
│   └── tags.njk
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── yarn.lock
</pre>

#### And finally... some code

```javascript
  function calcPrice (price, tax, discount) {
    tax = tax || 0.05
    discount = discount || 0

    return // math
  }
```
