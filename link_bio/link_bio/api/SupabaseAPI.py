import os
import dotenv 
from supabase import create_client, Client
from link_bio.model.Featured import Featured

## Cliente para conectarse a supabase 

class SupabaseAPI:
    dotenv.load_dotenv()
    SUPABASE_URL=os.environ.get("SUPABASE_URL")
    SUPABASE_KEY=os.environ.get("SUPABASE_KEY")
    #supabase: Client = create_client(SUPABASE_URL,SUPABASE_KEY)
    
    def __init__(self) -> None:
        if self.SUPABASE_URL != None and self.SUPABASE_KEY != None :
            self.supabase: Client = create_client(
                  self.SUPABASE_URL, self.SUPABASE_KEY
                  )
    
    def create_client (self):
        if self.supabase is None:
            self.supabase = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)
    
    def featured(self) -> list[Featured]:
            ## query con limite y ascendente o descendente con True o Falso
        response=self.supabase.table("featured").select("*").order("init_date",desc=True).limit(2).execute()
        featured_data=[]
        if len(response.data)>0:
            for featured_items in response.data:
                featured_data.append(
                    Featured(
                        title=featured_items["title"],
                        image=featured_items["image"],
                        url=featured_items["url"]
                        )
                    )
        print(featured_data)    ## ver datos de la Base       
        return featured_data        