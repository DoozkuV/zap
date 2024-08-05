import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import type { Database } from '$lib/database.types';


export const supabase = createClient<Database>(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);

// https://www.makeuseof.com/next-js-upload-images-supabase-storage-bucket/
export async function uploadMenuItemPic(filePath: string, file: File) {

  const { data } = supabase
  .storage
  .from('images')
  .getPublicUrl(`${filePath}`)

  const fileUrl = `${data.publicUrl}/${filePath}`;

  const {error} = await supabase.storage.from('menu-item-pictures').upload(fileUrl, file);
  if (error) {
    console.log(error);
  }

  return {path: fileUrl }
}
