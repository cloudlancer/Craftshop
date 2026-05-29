import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "402 - Limit Exceeded",
  description: "This deployment has been suspended due to a billing issue.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SiteLockedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
