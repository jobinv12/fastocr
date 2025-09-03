import { Input } from "./ui/input";
import { useCallback, useState, use } from "react";
import { useDropzone } from "react-dropzone";
import { IoIosClose } from "react-icons/io";
import { Button } from "./ui/button";
import { Form, type ActionFunctionArgs } from "react-router";
import { useExtractStore } from "store/store";
import { useLanguageStore } from "store/langStore";

export function FileUploader() {
  const [files, setFiles] = useState<File | null>(null);
  const { addText, clearText } = useExtractStore();
  const { langCode } = useLanguageStore();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const image = acceptedFiles[0];
      setFiles(image);

      const formData = await new FormData();
      formData.append("file", image);
      formData.append("lang-code", langCode);

      try {
        const response = await fetch("http://localhost:8081/v1/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          console.log("error from server");
        }

        const result = await response.json();
        console.log(result.data);

        addText(result.data);
      } catch (error) {
        console.log("client error");
      }
    },
    [files]
  );

  const removeImage = () => {
    setFiles(null);
    clearText();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".png", ".jpg"],
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <Form method="POST">
      {langCode && (
        <div
          {...getRootProps({
            className:
              "flex flex-col p-10 w-full justify-center text-center gap-5 border-3 border-dashed",
          })}
        >
          <Input {...getInputProps({ name: "file" })} />

          {isDragActive ? (
            <p>Drop your file here</p>
          ) : (
            <p>Drag and drop your file or click to select files</p>
          )}
        </div>
      )}
      {files && files?.size > 0 && (
        <div className="flex justify-center">
          <div className="relative inline-block">
            <Button
              className="absolute top-0 right-0 rounded-full max-w-1 max-h-1 text-white hover:bg-white"
              variant="ghost"
              onClick={removeImage}
            >
              <IoIosClose />
            </Button>
            <img
              src={URL.createObjectURL(files)}
              alt={files.name}
              className="max-h-24 max-w-24"
            />
          </div>
        </div>
      )}
    </Form>
  );
}
