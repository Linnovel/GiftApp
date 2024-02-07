import { useState } from 'react'

const AddCategorie = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState(' ')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // onNewCategory(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategorie