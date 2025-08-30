import Link from "next/link";
import { memo } from "react";
import GoBack from "../go-back/GoBack";
import HeaderBtn from "../headerbtn/HeaderBtn";
import { CircleUserRound, CookingPot, MessageCircle, ShoppingCart, } from "lucide-react";
import Links from "../links/Links";

const Header = () => {
  return (
    <>
      <div className="w-full bg-white h-[80px]">
        <nav className="container flex items-center h-full justify-between">
          <HeaderBtn />
          <ul className="flex gap-[2rem] max-[555px]:hidden">
            <li className="hover:text-blue-500 duration-300">
              <Link href="/"><ShoppingCart /></Link>
            </li>
            <li className="hover:text-blue-500 duration-300">
              <Link href="/recipes"><CookingPot /></Link>
            </li>
            <li className="hover:text-blue-500 duration-300">
              <Link href="/user"><CircleUserRound /></Link>
            </li>
            <li className="hover:text-blue-500 duration-300">
              <Link href="/comments"><MessageCircle /></Link>
            </li>
          </ul>
          <GoBack />
        </nav>
      </div>
      <Links/>
    </>
  );
};

export default memo(Header);
