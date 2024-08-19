// app/layout.js
import "./globals.css"; // Ensure you have global styles if needed

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
