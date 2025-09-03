import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="fixed flex flex-row inset-x-0 bottom-0 p-4 text-center justify-center gap-2">
      <Link to={"/"}>
        <p className="hover:underline">Contribute on Github</p>
      </Link>
    </footer>
  );
}
