# next-modal

## Notes from creating this repository

**Start dev:**

```
npm run dev
```

This article is shows the steps to create a modal with Next.js:

https://devrecipes.net/modal-component-with-next-js/

Next.js using SSR, the page first renders on the server side, the app does not have access to the window.document object. There is not an index.html file to create a div to attach a modal to. Need to create or edit a \_document.tsx file to include:

```
<div id="modal-root" />
```

Install react-icons:

```
npm i react-icons
```
