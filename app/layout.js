import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "PricePulse",
  description: "Track prices and get alerts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
