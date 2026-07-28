import { useEffect } from 'react';

// Sets the document title and meta description for a page, restoring the
// previous values when the page unmounts.
const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousTitle = document.title;
    const previousDescription = meta?.content;

    document.title = title;
    if (meta && description) {
      meta.content = description;
    }

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) {
        meta.content = previousDescription;
      }
    };
  }, [title, description]);
};

export default usePageMeta;
