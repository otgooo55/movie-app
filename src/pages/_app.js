import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NuqsAdapter>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Component {...pageProps} />;
          <Footer />
        </ThemeProvider>
      </NuqsAdapter>
    </div>
  );
}
