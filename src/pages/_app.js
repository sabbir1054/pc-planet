import Footer from "@/Components/Footer";
import NavigationBar from "@/Components/NavigationBar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <NavigationBar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </SessionProvider>
    </>
  );
}
