import { notFound } from "next/navigation";

/**
 * This page handles the multilingual prefix redirection for 404 pages.
 * Without this page, the 404 page cannot trigger redirection when the multilingual prefix does not match.
 */
export default function Page() {
  notFound();
}
