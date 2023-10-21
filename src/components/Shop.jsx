const storeItems = [
    {
        title:"Tom Ford Lost Cherry",
        price:"400$",
        url:"https://valorya.by/wp-content/uploads/2021/02/375x500.51411.jpg"
    },
    {
        title:"Mancerra Sicily",
        price:"200$",
        url:"https://cdn21vek.by/img/galleries/6698/921/sicily_mancera_01_6107c4d5eb33c.jpeg"
    }
]

export function Shop(){
    return(
        <>
            <h1>Pafume store</h1>
            {
                storeItems.map((item)=>{
                    return (
                        <div>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <img src={item.url} />
                        </div>
                    )
                })
            }
        </>
    )
}