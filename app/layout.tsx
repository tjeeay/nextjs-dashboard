import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-lt-installed="true"  // to prevent Hydration errors caused by LanguageTool extension: https://github.com/facebook/react/issues/24430
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
