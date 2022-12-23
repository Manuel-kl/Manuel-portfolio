<template>
  <nav id="app"></nav>
  <router-view/>
</template>

<style>
:root {
    --background-color: #181818;
    --font-family-nav: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    --navbar: #eee;
    --navbar-color: #bbb;
    --navbar-color-hover: white;
    --navbar-height-large: 80px;
    --navbar-height-small: 60px;
    /*  */
    --card-background-color: var(--gray-9);
    --star: var(--rainbow-5);
    --year: var(--rainbow-4);
    --font-color-heading: white;
    --font-color-heading3: white;
    --font-color-base: var(--gray-2);
    --font-color-muted: var(--gray-5);
    --font-color-bright: white;
    --border-color: var(--gray-7);
    --border-color-hover: var(--gray-6);
    --button-background-color: var(--gray-8);
    --post-time-color: var(--rainbow-4);
    --card-time-color: var(--pink);
    --project-time-color: var(--star);
    --link: #9ca0fa;
    --link-hover-color: #222;
    --blockquote-background: rgba(120, 120, 240, 0.05);
    --marker: #e77cc7;
    --file-background: #161616;
    --inline-code-background-color: rgba(0, 0, 0, 0.2);
    --highlight-color: var(--rainbow-4);
    --theme-button-background: var(--gray-8);
    --theme-button-background-hover: var(--gray-7);
    --theme-button-border: var(--gray-7);
    --theme-button-border-hover: var(--gray-6);
    --theme-button-color: var(--gray-0);
    --theme-button-color-hover: white;
    --category-link: var(--font-color-muted);
    --scrollbar-color: var(--gray-65);
    --scrollbar-track: var(--gray-7);
    --code-font-color: #b3b9c5;
    --code-background-color: #131313;
    --code-border-color: var(--gray-7);
    --terminal-background-color: #111;
    --terminal-color: white;
    --terminal-bar: -webkit-linear-gradient(top, #282828, #222);
    --terminal-border: var(--border-color);
    --terminal-accent: var(--gray-6);
    --string: var(--rainbow-4);
    --variable: var(--rainbow-2);
    --property: #b3b9c5;
    --number: #fca369;
    --operator: #637187;
    --punctuation: #c7cdd7;
    --comment: #777c85;
    --function: #28e3e6;
    --keyword: var(--rainbow-1);
    --attribute: #fed06d;
    --class: var(--rainbow-2);
    --tag: var(--rainbow-3);
    --error: #b0292c;
    --code-link-hover: var(--link-hover-color);
    --highlight-code-color: rgb(116, 207, 136, 0.1);
}

* {
    padding: 0;
    margin: 0;
}

:root {
    --gray-0: #f9f9f9;
    --gray-05: #f6f6f6;
    --gray-1: #eee;
    --gray-2: #e6e6e6;
    --gray-3: #ddd;
    --gray-4: #bbb;
    --gray-5: #999;
    --gray-6: #666;
    --gray-65: #555;
    --gray-7: #2c2c2c;
    --gray-8: #252525;
    --gray-9: #1f1f1f;
    --gray-10: #181818;
    --green: #14ae73;
    --green-1: #95cd7f;
    --green-2: #73b18a;
    --green-3: #4d8994;
    --green-4: #30619d;
    --green-5: #30379d;
    --red: #f34646;
    --red-1: #fdd94a;
    --red-2: #e0a944;
    --red-3: #d37d36;
    --red-4: #cd583c;
    --red-5: #ab2e3f;
    --blue: #07a7e6;
    --blue-1: #70bdee;
    --blue-2: #618be1;
    --blue-3: #5b5ed5;
    --blue-4: #623ac6;
    --blue-5: #58119f;
    --rainbow-1: #ff67f7;
    --rainbow-2: #936df9;
    --rainbow-3: #59abf7;
    --rainbow-4: #5eddac;
    --rainbow-5: #f6cd5d;
    --orange: #ff7e22;
    --yellow: #fca62a;
    --pink: #f57ad0;
    --purple: #673ece;
    --indigo: #5a43f1;
    --indigo-dark: #4509cf;
    --indigo-light: #969bf6;
    --indigo-muted: #f1f2fd;
    --font-family-base: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    --font-family-monospace: Menlo, "IBM Plex Mono", Menlo, monospace;
    --font-family-heading: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    --font-color-base: var(--gray-7);
    --font-color-muted: var(--gray-6);
    --font-color-heading: var(--gray-8);
    --font-color-heading3: var(--gray-7);
    --font-color-bright: var(--gray-9);
    --font-color-hero-heading: var(--gray-0);
    --border-color: var(--gray-3);
    --border-color-hover: var(--gray-6);
    --border-radius: 6px;
    --card-background-color: var(--gray-0);
    --button-background-color: var(--gray-05);
    --marker: var(--pink);
    --link: var(--indigo);
    --link-hover-color: var(--indigo-muted);
    --year: var(--green);
    --star: var(--yellow);
    --post-time-color: var(--gray-6);
    --card-time-color: var(--gray-5);
    --project-time-color: var(--font-color-muted);
    --highlight-color: var(--green);
    --blockquote-background: var(--indigo-muted);
    --file-background: #eee;
    --inline-code-background-color: var(--gray-0);
    --theme-button-background: var(--gray-1);
    --theme-button-background-hover: var(--gray-2);
    --theme-button-border: var(--gray-3);
    --theme-button-border-hover: var(--gray-5);
    --theme-button-color: var(--gray-7);
    --theme-button-color-hover: var(--gray-9);
    --category-link: #dd4eb2;
    --scrollbar-color: var(--gray-3);
    --scrollbar-track: var(--gray-4);
    --content-width: 1160px;
    --content-width--small: 560px;
    --content-width--medium: 700px;
}
</style>
