import Card from "../Card";

function LoaderCards () {
  const arr = [
    {id: false, title:"", price:"", image:"", category:""},
    {id: false, title:"", price:"", image:"", category:""},
    {id: false, title:"", price:"", image:"", category:""},
    {id: false, title:"", price:"", image:"", category:""},
    {id: false, title:"", price:"", image:"", category:""},
    {id: false, title:"", price:"", image:"", category:""},
    {id: false, title:"", price:"", image:"", category:""},
    {id: false, title:"", price:"", image:"", category:""}
  ]

  return(
    <div className='grid py-3 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      <>
        {arr.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </>  
    </div>
  )
}

export default LoaderCards;