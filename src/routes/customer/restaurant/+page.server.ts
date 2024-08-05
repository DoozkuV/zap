import { supabase } from "$lib/supabaseClient";
import "$lib/database.types"

export async function load() {
    const { data, error } = await supabase.from("menuitems").select();

    return {data, error};
}
