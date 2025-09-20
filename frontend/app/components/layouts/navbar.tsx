export function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 mt-2 py-1 px-4 bg-white/40 backdrop-blur-[5px] border rounded-full border-neutral-400/20">
      <div className="flex flex-row text-5xl font-bold font-drifline">
        <p className="text-blue-950">Fast</p>
        <p className="text-orange-600">OCR</p>
      </div>
    </nav>
  );
}
