import "./globals.css";

export const metadata = {
  title: "Business Plan - GenesisLab",
  description: "Créez votre business plan étape par étape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
