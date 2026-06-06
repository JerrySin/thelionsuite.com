import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of The Lion Inn & Suites in Chetwynd, BC. View our contemporary suites, full kitchenettes, amenities, and beautiful property surrounded by the Rocky Mountain Foothills.",
  openGraph: {
    title: "Photo Gallery | The Lion Inn & Suites",
    description:
      "Browse photos of our contemporary suites and beautiful property in Chetwynd, BC.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
