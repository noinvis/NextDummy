"use client"
import { CircleUserRound, CookingPot, MessageCircle, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { memo } from "react";
import Link from "next/link";

const Links = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `${
      pathname === path
        ? "duration-300 text-blue-500 rounded-[10px] drop-shadow-red-700"
        : "text-[#A1A1A1]"
    } text-[20px]`;
  return (
    <div className="gap-3 hidden max-[555px]:flex max-[555px]:fixed max-[555px]:bottom-0 max-[555px]:left-0 max-[555px]:w-full max-[555px]:justify-evenly max-[555px]:bg-black dark:max-[555px]:bg-white max-[555px]:py-4 z-30">
        <Link href="/" className={linkClasses("/")}>
          <ShoppingCart />
        </Link>
        <Link href="/recipes" className={linkClasses("/recipes")}>
          <CookingPot />
        </Link>
        <Link href="/user" className={linkClasses("/user")}>
          <CircleUserRound />
        </Link>
        <Link href="/comments" className={linkClasses("/comments")}>
          <MessageCircle />
        </Link>
      </div>
  );
};

export default memo(Links);
