"use server";
import { SnippetType } from "@/customTypes/Types";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export const handleEdit = async (props: SnippetType) => {
  const { id, code } = props;

  await db.snippet.update({
    where: { id: id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  console.log("deleting id", id);
  await db.snippet.delete({ where: { id } }); 
  redirect("/");
};

export async function createSnippet(
  formState: { message: String },
  formData: FormData
) {

  const title = formData.get("title") 
  const code = formData.get("code") 

  if(typeof title !=='string' || title.length<3){
    return {
      message: "Title must be longer than 3 characters",
    };
  }

  if(typeof code !=='string' || code.length<6){
    return {
      message: "Code must be longer than 6 characters",
    };
  }


  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log("snippet", snippet);
  redirect("/");
}
