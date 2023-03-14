import React, { useEffect, useState } from 'react'

const DogCarrousel = () => {
    const [data, setData] = useState('')
    const [switchDog, setSwitchDog] = useState(false)
    const url = 'https://dog.ceo/api/breeds/image/random'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log(err))

        // setInterval(() => {
            //Colocar el fetch y hacer un carrusel de perritos
        // }, 2000)
    }, [switchDog])

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <img src={data.message} alt="" style={{width: 300, height: 300, objectFit: 'cover'}}/>
        <button onClick={() => setSwitchDog(!switchDog)}>Change dog!</button>
    </div>
  )
}

export default DogCarrousel