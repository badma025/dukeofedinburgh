import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../components/Login";
import { auth } from "../utils/firebase";
import Loading from "../components/Loading";

export default function MyApp({ Component, ...pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (!user) return <Login />;

  if (loading) return <Loading />;

  return <Component {...pageProps} />;
}
