import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location & Directions",
  description:
    "Find The Lion Inn & Suites at 5132 46th Ave, Chetwynd, BC. Get directions, learn about nearby attractions, and discover our convenient location at the gateway to Peace River Country and the Rocky Mountain Foothills.",
  openGraph: {
    title: "Location & Directions | The Lion Inn & Suites",
    description:
      "Find us in Chetwynd, BC - your gateway to Peace River Country and the Rocky Mountain Foothills.",
  },
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
