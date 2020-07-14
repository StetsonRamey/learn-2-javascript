---
title: Why did I choose 11ty
teaser: React, Vue, Svelte, Gatsby, Next, WTF!!!!!
date: 2020-06-24
---

My website has been open source for as long as it has existed. Originally, it was a WordPress site, but only the layout was out there for everyone to see since the data was saved in a database. Once I moved to Gatsby, I kept all the images and posts in a content directory. This was way better, as my content is all conveniently stored in one easy-to-save folder and the posts are all in beautiful markdown.

However, people often like my layout and want to use it, so they clone and deploy this site. Sometimes they will just leave up all the posts and images and update the name and image. Although I subscribe to the Zenhabits Uncopyright philosophy towards content - my content is out there for the world to see and do what they want with it, and it doesn't bother me - I don't think I should make it quite so easy to just clone everything I've written in a moment. If you're going to plagiarize, you should at least have to do a bit of work.

So I decided to store my content in a private git submodule. If you go to the repo for this site now, you'll see a folder that looks like content @ <hash>. If you click on it, you'll be taken to a 404 page. If I click on it, I'll be taken to a separate, private repo that contains all my images and posts.

![Image](/../assets/static/dan-meyers-rGXKsc9hZtU-unsplash.jpg)

### Git Submodules

[Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) allow you to keep a git repository as a subdirectory of another git repository.

This could be useful if you have a lot of projects within a project. One example of this is the Dracula code theme repo. Every folder is a git submodule. This allows people to add a new theme for a new program by creating their own repo, and the owner of the parent repository only needs to reference the child repos. You can tell they're all submodules because of the @ <hash> after each subdirectory name.

Before doing anything with submodules, I would recommend running this command to update the config and set submodule.recurse to true, which allows git clone and git pull to automatically update submodules.

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
