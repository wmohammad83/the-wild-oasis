import supabase from "./supabase";

export async function getCabins() {
const { data, error } = await supabase
.from('cabins')
.select('*')

if(error) {
    throw new Error("Cabins could not be found")
    console.error(error)
}

return data;
}