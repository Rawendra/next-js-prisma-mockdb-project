import React from "react";
import { db } from "@/db";
import { SnippetShowProps } from "@/customTypes/Types";
import { notFound } from "next/navigation";
import { Editor } from "@monaco-editor/react";
import CusomEditor from "@/components/CusomEditor";
async function EditSnippet(props: SnippetShowProps) {
  const {
    params: { id },
  } = props;

  await new Promise((resolve) => setTimeout(resolve, 500));
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) {
    notFound();
  }

  return (
    <div className="">
      Snippet Title: {snippet.title}
      <CusomEditor snippet={snippet} />
      {/* <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
      /> */}
    </div>
  );
}

export default EditSnippet;
