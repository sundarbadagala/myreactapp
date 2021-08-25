import React from 'react'
import Gallery from './Gallery'
import SimpleReactLightbox from 'simple-react-lightbox'

function Index() {
    return (
        <div>
            <SimpleReactLightbox>
                    <Gallery/>
            </SimpleReactLightbox>
        </div>
    )
}

export default Index
