import React, { useState } from "react";
import axios from "axios";

const VisqaApp = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/visqa",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.result);
    } catch (error) {
      console.error("Error fetching the result:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Visual Question Answering
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full flex justify-center">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Uploaded Preview"
                className="w-full h-64 object-contain border border-gray-300"
              />
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image:
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-end justify-between">
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Question:
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your question here"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Compute
              </button>
            </div>
          </div>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 shadow-md">
            <p className="font-bold">Result:</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisqaApp;
