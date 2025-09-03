import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FastOCR" },
    {
      name: "description",
      content:
        "FastOCR is an online tool which extract text from images from almost any languages.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
