import { useState, useEffect } from 'react';

const header = import.meta.env.VITE_API_URL;

export function StyleFilterSidebar ({ onFilterSelect, selectedStyles}: { onFilterSelect: (color: string) => void, selectedStyles: string[]}) {
    const [data, setData] = useState<{ id: number; clothingFit: string }[]>([]);
    useEffect (() =>{
        fetch(header + "/ClothingItem/getstyles")
            .then(res => 

                // http response
                res.json())

            .then (data => {

                // extract data
                setData(data)
            })
    }, [])
    
    // When elements are loading
    if (data.length === 0){
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 style={{margin: '10px'}} className='text-black text-5xl'>Style</h1>
            <div>
                {data.map(item => (
                    <button
                        style={{
                            backgroundColor: selectedStyles.includes(item.clothingFit) ? "lightblue" : 'transparent',
                        }} 
                        key={item.id} 
                        onClick={() => onFilterSelect(item.clothingFit)}
                        className='text-black'
                    >
                        {item.clothingFit}
                    </button>
                ))}
            </div>
        </div>
    )
}