import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Hollywood() {
      
    const [name, setName] = useState([])

        useEffect(()=>{
            axios.get("https://react-block-backend.herokuapp.com/api/v1/content/Hollywood")
            .then((req,res)=>{
                const up=req.data
            setName(up)
            })
        },[])

    



    

    const [load, setLoad] = useState(true);
    const btnclick = () => {

        setLoad(true)
        console.log("hello");

    }
    let store = useNavigate();
    const filterc = name

    return (
        <div>
            <h1 className='latest'>Latest</h1>
            <div className='boxmain'>
                {
                    filterc.filter((value) => load ? value.Id >= 1 : value.Id <= 5).map((items) => {
                        return (
                            <div className='boxlatest' onClick={()=>store(`/category/${items.id}`)}>
                                <img className='imageslatest' src={items.imageurl} alt='' />
                                <div className='space'>
                                    <p className='titlelatest'> {items.title}</p>
                                    <p className='descriptionlatest'>{items.description}</p>
                                    <p className='categorylatest,datelatest'>{items.category}/{items.date}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <button className='button' onClick={btnclick}>Load More</button>
            <div className="postaddbolly">
                <h2 className='advertise'> Advertisement</h2>



            </div>
            <div className='mainbollywood'>
                <h1>TopPosts</h1>

                {filterc.filter((value) => value.likes >= 100).map((items) => {
                    return (
                        <div className='spacingbolly' onClick={() => store(`/category/${items.id}`)}>

                            <img className='imagetoppost' src={items.imageurl} alt='' />
                            <div className='straight'>
                                <p> {items.title} </p>
                                <p>{items.description}</p>
                                <p>{items.category}/{items.date}</p>
                               
                            </div>
                            <hr/>

                        </div>


                    )

                })}

            </div>

        </div>
    )
}
