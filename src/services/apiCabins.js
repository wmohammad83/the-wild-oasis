import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Cabins could not be found");
    console.error(error);
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://hoejqdlibyhxlkekbtqm.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg

  // 1. create a new cabin
  const { data, error } = await supabase.from("cabins").insert({...newCabin, image: imagePath});

  if (error) {
    throw new Error("Cabins could not be created");
    console.error(error);
  }

  // 2. upload the image
  const { error: storageError} = await supabase.storage
  .from("cabin-images")
  .upload(imageName, newCabin.image);

  // 3. delete the cabin if the image upload failed
  if(storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded and the cabin was not created");
    console.error(storageError);
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabins could not be deleted");
    console.error(error);
  }
  return data;
}
