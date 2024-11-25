import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Navbar() {
  const sesstion = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm ">
      <nav className="flex justify-between item-center">
        <Link href="/">
          <Image
            src="http://placehold.co/144x30"
            alt="logo"
            width={144}
            height={30}
          />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {sesstion && sesstion?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">signOut</button>
              </form>
              <Link href={`user/${sesstion?.user?.id}`}>
                <span>{sesstion?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
