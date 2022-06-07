import React from 'react'
import PropTypes from 'prop-types'

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Shippori+Mincho:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
    </>
  )
}

Meta.defaultProps = {
  title: '',
  keywords: '',
  description: '',
}

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
}

export default Meta
