import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({ id, source, url, caption, description, type }) => {

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <div className='zoom image fit thumb'>
        { type === 'video' ?
        <iframe className='video' src={source} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
      : <img src={source} alt={caption} />}
        <h3>{url ? <a href={url} target="_blank" rel="noopener noreferrer">{caption}</a> : caption}</h3>
        <p>{description}</p>
      </div>
    </article>

  )
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default GalleryItem