# Dagster Website

Local Development
---
```bash
yarn
yarn dev
```
If you want to test anything in prod mode locally
```bash
yarn build
yarn start
```


Writing Posts with MDX
---

Create a markdown file in `/pages/blog/<filename>.mdx`. 

It will be picked up by the blog infra. 
- It can be accessed through the url path `/blog/<filename>`
- It will be listed on the blog feed page `/blog` when the status is 'published'.

### Metadata in Frontmatter
We support frontmatter in markdown so you can specify meta information about the post at the beginning of the file, such as
```
---
layout: 'BlogPost'
status: 'published'
title: 'Dagster: The Data Orchestrator'
excerpt: 'Dagster is a new type of workflow engine: a data orchestrator. Moving beyond just managing the ordering and physical execution of data computations, Dagster introduces a new primitive: a data-aware, typed, self-describing, logical orchestration graph.
coverImage: https://user-images.githubusercontent.com/609349/57987382-7e294500-7a35-11e9-9c6a-f73e0f1d3a1c.png
date: '2020-08-22'
authors: ['id-1', 'id-2']
tags: ['dagster']
---
```
#### Available Settings

Details in [here](https://github.com/dagster-io/dagster-website/blob/master/components/MdxMetadata.ts)

- `layout`: the layout of the page, currently support [`BlogPost`](https://github.com/dagster-io/dagster-website/blob/master/components/layouts/BlogPost.tsx)
- `status`: 
	+ `published`: the post will be shown on the blog feed list `dagster.io/blog`
	+ `draft`: the post won't be shown on the feed but still accessible via the url. This is useful for previews.
- `title`: the title of the post, which will be the H1 title of the post and will be shown in the feed list.
- `excerpt`: a short description of the post that will be shown in the feed list and in the description when shared in social media.
- `date`: the post date in `YYYY-MM-DD` format
- `authors`: a list of author ids, see details in the 'Authors' section below.
- `coverImage` (optional): the src of the image that will be shown in the feed list
- `tags` (optional): a list of tags



### Available Components
Details in [here](https://github.com/dagster-io/dagster-website/blob/master/components)

- We use [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) as typographic defaults. 
- [LinkPreview](https://github.com/dagster-io/dagster-website/blob/master/components/LinkPreview.tsx): auto preview external links as embeded cards. source: https://embed.ly/code
```
<LinkPreview url="https://twitter.com/BigDataBorat/status/306596352991830016" />
```
- Welcome to write custom components!


### Authors
- If the author doesn't exist in the system, add an entry in [editor.json](https://github.com/dagster-io/dagster-website/blob/master/components/editors.json). Feel free to name the `id` and specify the `url` you would like to be linked to.
- Use the `id` field in `authors` in the frontmatter of the post. Note: the id has to exist editor.json, otherwise it will error out.
- The editors listed in `authors` will be shown in the post page.
