import { ModeToggle } from "@/app/components/ModeToggle";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export default async function Navbar() {
  // get all of our pages
  const pages = await getPages();
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Kaem<span className="text-primary">Blog</span>
      </Link>
      <div className="flex gap-10 text-m">
        {pages.map((page) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
