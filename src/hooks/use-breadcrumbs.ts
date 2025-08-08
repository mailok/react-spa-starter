import { useMatches } from "react-router";
import type { ReactNode } from "react";


type HandleWithCrumb = Record<string, unknown> & {
  crumb?: ReactNode;
};


function isHandleWithCrumb(handle: unknown): handle is HandleWithCrumb {
  return (
    handle !== null &&
    typeof handle === "object" &&
    "crumb" in handle
  );
}

export function useBreadcrumbs(): ReactNode[] {
  const matches = useMatches();
  return matches
    .filter((match) => isHandleWithCrumb(match.handle))
    .map(match => (match.handle as HandleWithCrumb).crumb);
}