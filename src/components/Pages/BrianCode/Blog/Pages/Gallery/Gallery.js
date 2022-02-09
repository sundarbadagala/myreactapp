import React from 'react'
import GalleryCard from './GalleryCard'
import SimpleReactLightbox from 'simple-react-lightbox'

function Gallery() {
    return (
        <div>
            <SimpleReactLightbox>
                    <GalleryCard/>
            </SimpleReactLightbox>
        </div>
    )
}

export default Gallery
