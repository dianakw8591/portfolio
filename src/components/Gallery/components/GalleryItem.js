import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({ id, source, url, caption, description, type }) => {

  // const onClick = useCallback((e) => {
  //     e.preventDefault()
  //     toggleLightbox(position)
  // }, [position, toggleLightbox]);

  // 
  {/* <a
        className="image fit thumb"
        href={source}
        // onClick={onClick}
        > */}
  {/* <img src={thumbnail} /> */ }
  {/* </a> */ }


  {/* </article> */ }
  // width="560" height="315"


  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <div className='zoom image fit thumb'>
        { type === 'video' ?
        <iframe className='video' src={source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
      : <img src={source} />}
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
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem