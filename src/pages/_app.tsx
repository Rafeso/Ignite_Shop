import { Header } from "@/components/Header";
import { CartContextProvider } from "@/contexts/CartContext";
import { globalStyles } from "@/styles/global";
import { Container } from "@styles/app";
import type { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
