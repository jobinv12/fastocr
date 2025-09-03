import { DisplayExtractedText } from "~/components/displayExtractedText";
import { FileUploader } from "~/components/fileuploader";
import { LangSelect } from "~/components/langSelect";
import { TitleText } from "~/components/titleText";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-18 pb-4">
      <TitleText />
      <LangSelect />
      <FileUploader />
      <DisplayExtractedText />
    </main>
  );
}
