import React from 'react'
import {motion} from 'framer-motion'

const Modal = ({selectedImage, setSelectedImage}) => {
    // const download = e => {
    //     axios({
    //         method: "get",
    //         url: "downloadSamplePDF.php",
    //         responseType: "arraybuffer"
    //       })
    //         .then((response) => {
    //           var link = document.createElement("a");
    //           link.href = window.URL.createObjectURL(
    //             new Blob([response.data], { type: "application/octet-stream" })
    //           );
    //           link.download = "name_of_file_with_extension";
          
    //           document.body.appendChild(link);
          
    //           link.click();
    //           setTimeout(function () {
    //             window.URL.revokeObjectURL(link);
    //           }, 200);
    //         })
    //         .catch((error) => {});
    //     }
    const clicker = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null)
        }
    }
    return (
        <motion.div className='backdrop' onClick={clicker}
        initial={{opacity:0}}
            animate={{opacity:1}}
            >
            <motion.img src={selectedImage} alt="enlarged" 
                initial={{x: '-100vw'}}
                animate={{x:0}}
            />    
           {/* <a href={selectedImage} download onClick={e => download(e)}><button >Download</button></a>    */}
        </motion.div>
    )
}

export default Modal
