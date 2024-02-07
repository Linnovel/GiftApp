import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

const useFetchGifts = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        try {
            const newImages = await getGifs(category)
            setImages(newImages)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getImages();
    }, [])
    return {
        images,
        isLoading
    }
}

export default useFetchGifts