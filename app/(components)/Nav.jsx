import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-neutral-400 text-gray-100 ">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My site</div>
        <div className="flex gap-10">
          <Link href="/"> Home</Link>
          <Link href="/Createuser">CreateUser</Link>
          <Link href="/ClientMember"> ClientMember</Link>
          <Link href="/Member"> Member</Link>
          <Link href="/Public"> Public</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout </Link>
          ) : (
            <Link href="/api/auth/signin"> Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
