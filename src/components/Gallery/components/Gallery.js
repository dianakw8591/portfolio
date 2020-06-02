import React from 'react'
import PropTypes from 'prop-types'
// import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
// import { DEFAULT_IMAGES } from '../constants/defaultImages'

const Gallery = ({ media }) => {
  // const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(0)

  // const toggleLightbox = useCallback(selectedIndex => {
  //   setLightboxIsOpen(!lightboxIsOpen)
  //   setSelectedIndex(selectedIndex)
  // }, [lightboxIsOpen])

  return (
    <div>
      {media && (<div className="row">
        {media.map((obj) => {
        return (<GalleryItem
          key={obj.id}
          type={obj.type}
          id={obj.id}
          source={obj.source}
          // thumbnail={obj.thumbnail}
          caption={obj.caption}
          description={obj.description}
          url={obj.url}
          // position={obj.position}
          // toggleLightbox={obj.toggleLightbox}
          // position={i}
          // toggleLightbox={toggleLightbox}
        />); 
        })}
        </div>
      )}
      {/* <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={media} />
          </Modal>
        )}
      </ModalGateway> */}
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  media: PropTypes.array,
}

export default Gallery
