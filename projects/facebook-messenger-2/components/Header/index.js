import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  PlayIcon,
  FlagIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

function Header() {
  const logOut = () => {
    signOut(auth);
  };
  const [user] = useAuthState(auth);
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          height={40}
          width={40}
          alt=""
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none 
            flex-shrink placeholder-gray-500 "
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* centre */}
      <div className="flex justify-center flex-grow">
        {/* icons */}
        <div className="flex space-x-6 sm:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-7 justify-end">
        {/* profile pic */}
        <Image
          src={user?.photoURL}
          onClick={logOut}
          className="rounded-full cursor-pointer"
          width="40"
          height="40"
          layout="fixed"
          alt="Log out"
        />
        <p
          className="whitespace-nowrap font-semibold pr-3
        ">
          {user?.displayName}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
