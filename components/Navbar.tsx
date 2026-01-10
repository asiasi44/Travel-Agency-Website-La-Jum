import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-24 py-8 items-center ">
      <Link className="flex font-extrabold text-[24px]" href={"/"}>
        <div>La</div>
        <div className="text-sky-500">Jum</div>
      </Link>
      <div className="flex gap-8 text-sm text-gray-500">
        <div>Destinations</div>
        <div>Packages</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-sky-400 text-white px-4 py-1 rounded-sm">
          Contact Us
        </div>
        <Link href={"/admin"} className="bg-gray-200 py-1 px-4 rounded-sm">
          Admin Page
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
