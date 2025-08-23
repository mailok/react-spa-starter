

/**
 * Generates an array of page numbers and ellipsis ("...") for pagination controls.
 *
 * @param totalPages - The total number of available pages.
 * @param currentPage - The current active page (1-based index).
 * @returns An array containing page numbers and, if needed, ellipsis ("...") as separators.
 * 
 * @example
 * // Few pages (≤ 5 pages): shows all pages
 * getPageNumbers(4, 2);
 * // Returns: [1, 2, 3, 4]
 * 
 * @example
 * // Current page at the beginning: shows first pages + ellipsis + last page
 * getPageNumbers(10, 2);
 * // Returns: [1, 2, 3, 4, "...", 10]
 * 
 * @example
 * // Current page in the middle: shows first + ellipsis + surrounding + ellipsis + last
 * getPageNumbers(15, 8);
 * // Returns: [1, "...", 7, 8, 9, "...", 15]
 * 
 * @example
 * // Current page near the end: shows first + ellipsis + last pages
 * getPageNumbers(12, 11);
 * // Returns: [1, "...", 8, 9, 10, 11, 12]
 */
export function getPageNumbers(totalPages: number, currentPage: number) {
  const pages = [];
  const maxVisiblePages = 5;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
      );
    }
  }

  return pages;
};