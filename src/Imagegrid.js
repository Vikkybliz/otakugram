import React from 'react'
import Usefirestore from './Usefirestore'
import {motion} from 'framer-motion'

const Imagegrid = ({setSelectedImage}) => {
    const {docs} = Usefirestore('images')
    console.log(docs)
    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <motion.div className='img-wrap' key={doc.id}
                    layout
                onClick={() => setSelectedImage(doc.url)}>
                    <motion.img src={doc.url} alt="Otaku Gram WallPapers" 
                        initial={{opacity:0.5}}
                        animate={{opacity:1}}
                        transition={{delay:2}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default Imagegrid
