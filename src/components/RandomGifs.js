import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader';

export const RandomGifs = () => {

    const [imgUrl, setImgUrl] = useState('')
    const [loading, setLoading] = useState(false)

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const API_KEY = 'W21KC1n7HuxHRpXiHQGLz5Xbtg84ZEcx'
    
    async function fetchData(){
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const output = await axios.get(url);
        const path = output.data.data.images.downsized_large.url
        // console.log(imgUrl)
        setImgUrl(path)
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const clickHandler = () => {
        fetchData();
    }


  return (
    <div className=' flex flex-col justify-evenly items-center bg-green-400 w-[600px] h-[400px] rounded-md border-2 border-black'>
        <h1 className=' underline font-bold text-xl'>A RANDOM GIF</h1>
        {
            loading ? <Loader/> : <img src={imgUrl} alt='' className=' h-[60%] w-[90%]'/>
        }
        <button className=' bg-green-200 w-[60%] py-1 rounded-md font-semibold' onClick={clickHandler}>
            GENERATE
        </button>
    </div>
  )
}
