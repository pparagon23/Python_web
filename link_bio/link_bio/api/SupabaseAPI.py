import os
import dotenv 
from supabase import create_client, Client

## Cliente para conectarse a supabase 

class SupabaseAPI:
    dotenv.load_dotenv()
    SUPABASE_URL=os.environ.get("SUPABASE_URL")
    SUPABASE_KEY=os.environ.get("SUPABASE_KEY")
    supabase: Client = create_client(SUPABASE_URL,SUPABASE_KEY)
    
    def __init__(self) -> None:
        self.supabase: Client = None
    
    def create_client (self):
        if self.supabase is None:
            self.supabase = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)
    
    def featured(self) -> list:
        
        if self.supabase is None:
            self.create_client()
            
        response=self.supabase.table("featured").select("*").execute()
        featured_data=[]
        if len(response.data)>0:
            for featured_items in response.data:
                featured_data.append(featured_items)
        print(featured_data)    ## ver datos de la Base       
        return featured_data        