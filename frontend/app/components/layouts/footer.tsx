import { CodeXmlIcon } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="fixed flex flex-row inset-x-0 bottom-0 p-4 text-center justify-center gap-2">
      <Link to={"/"}>
        <p className="flex flex-row gap-2">
          Made with by <CodeXmlIcon /> by Human.
        </p>
      </Link>
    </footer>
  );
}
