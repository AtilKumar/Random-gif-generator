import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'

export const TagGifs = () => {
    const [imgUrl, setImgUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [change, setChange] = useState('')

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const API_KEY = 'W21KC1n7HuxHRpXiHQGLz5Xbtg84ZEcx'
    
    async function fetchData(){
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${change}`
        const output = await axios.get(url);
        const path = output.data.data.images.downsized_large.url
        // console.log(imgUrl)
        setImgUrl(path)
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    },[])

    const clickHandler = () => {
        fetchData();
    }

    const changeHandler = (event) => {
        setChange(event.target.value)
    }

  return (
    <div>
        <div className=' flex flex-col justify-evenly items-center bg-blue-500 w-[600px] h-[400px] rounded-md border-2 border-black mt-8'>
        <h1 className=' underline font-bold text-xl uppercase'>RANDOM {change} GIF</h1>
        {
            loading ? <Loader/> : <img src={imgUrl} alt='' className=' h-[60%] w-[90%]'/>
        }   
        <input
            className=' w-[60%] py-1 rounded-md text-center font-semibold'
            onChange={changeHandler}
            value={change}
        />     
        <button className=' bg-blue-200 w-[60%] py-1 rounded-md font-semibold' onClick={clickHandler}>
            GENERATE
        </button>
    </div>
    </div>
  )
}
