import type { AppProps } from "next/app";
import { FirebaseAppProvider } from "reactfire";

import Dashboard from "../components/Dashboard";

import "./reactflow.css";

const firebaseConfig = {
  apiKey: "AIzaSyBb93dTreseJ1tmeT2TB1bSHcImY0H7YXA",
  authDomain: "dashboard-c7358.firebaseapp.com",
  projectId: "dashboard-c7358",
  storageBucket: "dashboard-c7358.appspot.com",
  messagingSenderId: "862655535001",
  appId: "1:862655535001:web:3313bee6b9a72fa1bce508",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </FirebaseAppProvider>
  );
}
