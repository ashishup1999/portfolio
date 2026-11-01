import { useEffect } from "react";

// The first render is a full page load, where the browser already starts at the
// top of the document. Later renders are client-side navigations, which need
// the new page announced: a unique title plus focus moved to the page heading.
let isFirstPage = true;

export const usePageMeta = (title: string) => {
  useEffect(() => {
    document.title = title;
    if (isFirstPage) {
      isFirstPage = false;
      return;
    }
    const heading = document.querySelector<HTMLElement>("main h1");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }, [title]);
};
