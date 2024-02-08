import React, { useState } from "react";
import GifGrid from "./components/GifGrid"
import AddCategorie from "./components/AddCategorie";

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([
        "Dragon Ball",
    ]);


    const onAddCategorie = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gift Expert App</h1>
            <AddCategorie
                onNewCategory={onAddCategorie}
            />
            {categories.map((categorie) => (
                <GifGrid key={categorie}
                    category={categorie} />
            ))}
        </>
    );
};

export default GiftExpertApp;
