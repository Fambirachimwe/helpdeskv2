import React, {useState} from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './Attachment.css';



const Attachment = ({image}) => {

    const [isOpen, setIsOpen] = useState(false);


    const images = `http://127.0.0.1:4000/${image}`;

    return (
        <div>
            <div onClick={() => setIsOpen(true)} className="image_attachment">
                
                {/* image here */}
                <img src={images} alt=""/>
            </div>

            {
                isOpen && (
                    <Lightbox 
                        mainSrc={images} 
                        onCloseRequest={() => setIsOpen(false)} 
                    />
                )
            }

        </div>
    )
};


export default Attachment;