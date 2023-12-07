"use server";
import { SnippetType } from "@/customTypes/Types";
import { db } from "@/db";
import { redirect } from "next/navigation";

export const handleEdit = async (props: SnippetType) => {
  const { id, code } = props;

  await db.snippet.update({
    where: { id: id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
};
