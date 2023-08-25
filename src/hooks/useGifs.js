import React from 'react'

export const useGifs = () => {
        const [imgUrl, setImgUrl] = useState('')
        const [loading, setLoading] = useState(false)
        const [change, setChange] = useState('')
        
        const API_KEY = 'W21KC1n7HuxHRpXiHQGLz5Xbtg84ZEcx'
        
        async function fetchData(){
            setLoading(true)
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${change}`
            const output = await axios.get(url);
            const path = output.data.data.images.downsized_large.url
            setImgUrl(path)
            setLoading(false)
        }
    
        useEffect(() => {
            fetchData();
        },[])
    
}
