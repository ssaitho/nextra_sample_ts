import type { AppProps } from "next/app";
import "./style.css";
import "@ssaitho/nextra-theme-docs/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
