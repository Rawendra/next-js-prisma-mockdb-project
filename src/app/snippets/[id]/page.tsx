import { db } from "@/db";
import React from "react";
import { notFound } from "next/navigation";
import { SnippetShowProps } from "@/customTypes/Types";
import { deleteSnippet } from "@/actions/editSnippet";
import Link from "next/link";

async function Snippet(props: SnippetShowProps) {
  const {
    params: { id },
  } = props;

  await new Promise((resolve) => setTimeout(resolve, 500));
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) {
    notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id));
  return (
    <div className="flex flex-col justify-center">
      <div className="flex m-4  items-center justify-between">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex ">
          <div>
            {" "}
            <Link
              href={`${id}/edit`}
              className="border p-2 rounded text-white bg-blue-500"
            >
              Edit
            </Link>
          </div>

          <form action={deleteSnippetAction}>
            <button
              type="submit"
              className="border p-2 rounded text-white bg-red-500"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-400">
        {snippet.code}
      </pre>
    </div>
  );
}

export default Snippet;
