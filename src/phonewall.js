import React, {useState} from 'react'
import ProgressBar from './Progressbar'
import Imagegrid from './Imagegrid'
import Modal from './Modal'
import './index.css'

const Phonewall = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const onChange = (e) => {
        let selected = e.target.files[0]
        const types = ['image/png', 'image/jpeg']
        console.log(selected)
        
        if (selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile(null)
            setError('Please set an image file(png or jpeg)')
        }
    }

    const [selectedImage, setSelectedImage] = useState(null)
    return (
    <>
        <form action=""  className='form'>
        <h2> Add WallPaper</h2>
        <input type="file" onChange= {onChange} className='input' />
        <div>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
        </form>
        <Imagegrid setSelectedImage={setSelectedImage} className='grid'/>
        {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </>
    )
}

export default Phonewall
