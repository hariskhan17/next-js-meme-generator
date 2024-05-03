import Link from 'next/link'
export default async function Dashboard() {

  const res= await  fetch('https://api.imgflip.com/get_memes')
  const response = await res.json()


    return (
        <>

        <h2>Dashbaord</h2>
       
         <div className='memeSec'>
        {response.data.memes.map((item, index)=>{
           
return (
<div  className='memeBox'  key={index}>
    <h2>{item.id}</h2>
    <h2>{item.name}</h2>
    <img src={item.url} width={item.width} height={item.height}/>
<h2>{item.name}</h2>
<Link href={`meme-detail?url=${item.url}`}>Select This Meme</Link>
</div>
)

        } )}
           </div>  
        </>

    )
}