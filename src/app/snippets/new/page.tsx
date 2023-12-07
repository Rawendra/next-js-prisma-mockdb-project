import React from "react";

function SnippetCreatePage() {
  return (
    <div className="container mx-auto pt-12 bg-green-100">
      <form>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        <button type="submit" className="rounded text-white p-2 bg-green-500">
          Create
        </button>
      </div>
    </form>
    </div>
  );
}

export default SnippetCreatePage;
