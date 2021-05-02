export const preventWidow = (value: string) =>
  value.replace(/\s(?=[^\s]*$)/g, '\u00a0');

/**
 * Funtion to prevent default behaviour when click an A tag.
 * Takes in an event (e) and a string (slug)
 */
import { navigate } from 'gatsby-link';
export const goToPage = (e: any, slug?: string | null) => {
  if (!slug) return;
  if (e.target.tagName === 'A') {
    e.preventDefault();
  } else {
    navigate(slug);
  }
};
