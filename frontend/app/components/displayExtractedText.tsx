import { Textarea } from "./ui/textarea";
import { useExtractStore } from "store/store";

export function DisplayExtractedText() {
  const value = useExtractStore((state) => state.value);
  const setText = useExtractStore((state) => state.setText);

  return (
    <div className="flex flex-row w-full justify-center text-center p-5">
      {value && (
        <Textarea
          className="w-full max-w-[600px] h-[400px] sm:h-[300px]"
          value={value}
          onChange={(e) => setText(e.target.value)}
        />
      )}
    </div>
  );
}
