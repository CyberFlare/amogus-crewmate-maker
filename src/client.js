import { createClient } from '@supabase/supabase-js'

const URL = "https://xgpxjmwkufuygeblxwpz.supabase.co"

const API_KEY = "sb_publishable_Nc6brd_LG2OTANp7DzlKuQ_2oXHB03N"

export const supabase = createClient(URL, API_KEY)

