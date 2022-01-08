import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";
import Image from "next/image";

function Login() {
  const signIn = async () => {
    await signInWithPopup(auth, provider)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid place-items-center ">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        alt=""
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-700">
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
