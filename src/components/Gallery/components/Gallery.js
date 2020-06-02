import React from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'

const Gallery = ({ media }) => {

  return (
    <div>
      {media && (<div className="row">
        {media.map((obj) => {
        return (<GalleryItem
          key={obj.id}
          type={obj.type}
          id={obj.id}
          source={obj.source}
          caption={obj.caption}
          description={obj.description}
          url={obj.url}
        />); 
        })}
        </div>
      )}
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  media: PropTypes.array,
}

export default Gallery
