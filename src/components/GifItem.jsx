
export const GifItem = ({title, url}) => {

   return (

        <div className = "card">

            <img className="card img" src=  {url}  alt= {title}  />
            <div className="card p"> {title} </div>

        </div>

   ) 

}