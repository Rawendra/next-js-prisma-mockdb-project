import React from "react";

function SnippetCreatePage() {
  return (
    <div className="container mx-auto pt-12 bg-blue-100">
      <form>
        <h3 className="font-bold-m3">Create a Snipppet </h3>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              id="id"
              className="border rounded p-2 w-full"
            ></input>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              id="code"
              className="border rounded p-2 w-full"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="rounded text-white p-2 bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SnippetCreatePage;
