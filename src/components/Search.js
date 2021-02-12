import { useState } from 'react';

export default function Search({getSearchQuery, error}) {
    const [searchValue, setSearchValue] = useState('')

    const getSearchValue = (e) =>{
        setSearchValue(e.target.value);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        getSearchQuery(searchValue)
    }
    
    return (
        <div className='Search'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={getSearchValue} placeholder='Search for any IP address'/>
                <button type='submit'>{'>'}</button>
            </form>
            <span className='error'>{error && 'Please enter a valid IP address for lookup!'}</span>
        </div>
    )
}
