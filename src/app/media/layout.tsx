import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Media Gallery",
  description: "Photo and media gallery of the Ministry of Women Affairs & Social Welfare, Imo State Government.",
  path: "/media",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
