import "./globals.css";

export const metadata = {
  title: "Claude Code Demo",
  description: "A demo app built entirely by Claude Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
