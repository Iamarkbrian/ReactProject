import React, { useState } from 'react';
import './Products.css';
import Pagination from './Pagination';

function Products() {
  const [selectedImage, setSelectedImage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20; // Number of images to display per page
  const [cartItems, setCartItems] = useState([]);

  // Sample image list (you can replace it with your own data)
  const imageList = [
    {
      src: 'pictures/SampleProg.jpg',
      alt: 'Image 1',
      size: 'Sizes: S,M,L',
      description: 'Programming Shirt 1',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg2.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg3.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg4.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg25.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg7.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg8.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg9.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg10.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg11.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg24.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg13.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg14.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg15.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg16.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg17.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg18.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg19.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg20.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg21.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg22.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg23.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg24.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg25.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg2.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg3.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg4.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg7.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg14.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg.jpg',
      alt: 'Image 1',
      size: 'Sizes: S,M,L',
      description: 'Programming Shirt 1',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg2.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg3.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg4.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg25.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg7.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg8.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg9.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg10.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg11.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg24.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg13.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg14.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg15.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg16.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg17.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg18.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg19.jpg',
      alt: 'Image 2',
      size:'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg20.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg21.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg22.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg23.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg24.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
    {
      src: 'pictures/SampleProg25.jpg',
      alt: 'Image 2',
      size: 'Sizes: S,M,L',
      description: 'Another sample image',
      price: '₱499',
    },
  ];
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
  };

  // Logic to calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageList.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(imageList.length / imagesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>BR SHIRTS</h2>
      {selectedImage && (
        <div className="selected-image-container">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="selected-image"
          />
          <div className="selected-image-details">
            <div className="selected-image-size">{selectedImage.size}</div>
            <div className="selected-image-description">{selectedImage.description}</div>
            <div className="selected-image-price">{selectedImage.price}</div>
            <div className="selected-image-buttons">
              <button onClick={() => handleAddToCart(selectedImage)}>Add to Cart</button>
            </div>
          </div>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
      <div className="gallery">
        {currentImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => handleImageClick(image)}
            />
            <div className="gallery-item-details">
              <div className="gallery-item-size">{image.size}</div>
              <div className="gallery-item-description">{image.description}</div>
              <div className="gallery-item-price">{image.price}</div>
              <div className="gallery-item-buttons">
                <button onClick={() => handleAddToCart(image)}>Add to Cart</button>
                <button onClick={() => handleAddToCart(image)}>Add to Favorites</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Products;