"use client";
import React, { useState } from "react";
import { CustomEditorProps } from "@/customTypes/Types";
import { Editor } from "@monaco-editor/react";
import { handleEdit } from "@/actions/editSnippet";
function CusomEditor(props: CustomEditorProps) {
  const [_code, setCode] = useState("");
  const {
    snippet: { code, id },
  } = props;

  const editSnippetAction = handleEdit.bind(null, {
    id,
    code: _code,
  });
  const handleChange = (value: string = "") => {
    setCode(value);
    console.log(value);
  };
  return (
    <div>
      {" "}
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        onChange={handleChange}
        defaultValue={code}
      />{" "}
      <form action={editSnippetAction}>
        <button className="p-2 border rounded bg-blue-500 text-white" type={"submit"}>Save</button>
      </form>
    </div>
  );
}

export default CusomEditor;
