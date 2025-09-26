export function GetStarted() {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <h2 className="font-bold text-3xl mb-6">🚀 Get Started</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="p-6 rounded-2xl bg-white w-64">
          <p className="font-bold text-xl mb-2">Step 1</p>
          <p className="text-gray-700">
            Choose your <span className="font-semibold">target language</span>{" "}
            from the dropdown menu.
          </p>
        </div>

        <div className="p-6 rounded-2xl  bg-white w-64">
          <p className="font-bold text-xl mb-2">Step 2</p>
          <p className="text-gray-700">
            Upload your image by{" "}
            <span className="font-semibold">drag & drop</span> or click to
            browse files.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white w-64">
          <p className="font-bold text-xl mb-2">Step 3</p>
          <p className="text-gray-700">
            Our system will <span className="font-semibold">process</span> the
            image and display the extracted text.
          </p>
        </div>
      </div>
    </div>
  );
}
