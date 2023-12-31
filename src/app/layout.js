"use client";
import { Provider } from "react-redux";
import { useStore } from "../../redux/store";
//import "./globals.css";
import { Inter } from "next/font/google";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  const { store, persistor } = useStore();
  return (
    <html lang="en">
      <Head>
        <title>Employees app</title>
        <meta name="theme-color" content="#00649D"></meta>
        <link rel="icon" href="/Logo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>{children}</PersistGate>
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
