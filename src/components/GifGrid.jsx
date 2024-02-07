import GiftGridItem from "./GiftGridItem";
import useFetchGifts from "../hooks/useFetchGifts";

const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifts(category)

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading &&
                (<h2>Loading gift...</h2>)
            }
            <div className="card-grid">
                {images.map((image) => (
                    <GiftGridItem key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}

export default GifGrid