'use client'
import { useSearchParams } from 'next/navigation'
import { useState , createRef } from 'react'
import Draggable from 'react-draggable';
import { exportComponentAsJPEG } from 'react-component-export-image'

function MemeDetail() {
    const searchParams = useSearchParams()
    const memeUrl = searchParams.get('url')

    const [displayText01, setDisplayText01] = useState('');
    const [displayText02, setDisplayText02] = useState('');


    const memeRef = createRef()

    const exportMemeAsJPEG = () => {
        exportComponentAsJPEG(memeRef, {
            fileName: 'Danish' // You can pass custom file name here
        });
    }
 
    return (
        <>
        <div className='memeDetailBox'>
        <h2>Meme Detail Page </h2>
        <div ref={memeRef} className='curMeme'>
       <img src={memeUrl} width="400"/>

       <Draggable><div > {displayText01}</div></Draggable>
                <Draggable><div >  {displayText02}</div></Draggable>
       </div>

        <input type='text' placeholder='Meme First Text' onChange={e => setDisplayText01(e.target.value)}/>
        <input type='text' placeholder='Meme Second Text' onChange={e => setDisplayText02(e.target.value)}/>
        <button onClick={exportMemeAsJPEG}>Save Meme</button>
        </div>
        </>
    )
}

export default MemeDetail