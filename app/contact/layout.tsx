import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Lion Inn & Suites in Chetwynd, BC. Contact us for reservations, inquiries, or any questions about your stay. Call 250-788-9990 or email thelionsuites@gmail.com.",
  openGraph: {
    title: "Contact Us | The Lion Inn & Suites",
    description:
      "Get in touch for reservations and inquiries. Call 250-788-9990 or email us.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
