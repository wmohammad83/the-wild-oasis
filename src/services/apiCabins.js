import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Cabins could not be found");
    console.error(error);
  }
  return data;
}

export async function deleteCabin(id) {
  const { data ,error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);

    if (error) {
        throw new Error("Cabins could not be deleted");
        console.error(error);
      }
      return data;
}
