import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    
    const [categories, setCategories] = useState(['prueba']);

    const addCategory = (onNewCategory) => {

        //if(categories.includes(onNewCategory) ) return;
        setCategories([onNewCategory])
        



    }
 

    return (
        <>
            <h1>GifExpertApp</h1>
            
            
            <AddCategory onNewCategory = {addCategory} />

        
            
            {categories.map (category => 

                <GifGrid
                    key={category}
                    category={category}
                />
            )}

                
           
        </>
    )

}