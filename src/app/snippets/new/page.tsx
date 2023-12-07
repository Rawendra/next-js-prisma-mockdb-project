import { redirect } from "next/navigation";

import { db } from "../../../db";
function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("snippet", snippet);
    redirect("/");
  }
  return (
    <div className="container mx-auto pt-12 bg-green-100">
      <form action={createSnippet}>
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
