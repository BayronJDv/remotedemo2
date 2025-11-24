import React from 'react';
import './Content.css';

const Provider: React.FC = () => {

  const Products = [
    { id: 1, name: "product1", price: 100, image: "https://riderlabstore.com/cdn/shop/files/VN0A3MTJ5GX-Tenis-vans-filmore-hombre-negro-blanco-2@2x.jpg?v=1701876590" },
    { id: 2, name: "product2", price: 200, image: "https://crazyshark.com.co/web/wp-content/uploads/2023/06/VN0A5FCBB9M-1.webp" },
    { id: 3, name: "product3", price: 300, image: "https://ferreira.vtexassets.com/arquivos/ids/334384-800-auto?v=638962285101200000&width=800&height=auto&aspect=true" },
    { id: 4, name: "product4", price: 400, image: "https://media.falabella.com/falabellaCO/139111906_01/w=800,h=800,fit=pad" },
    { id: 5, name: "product5", price: 500, image: "https://centralsport.online/media/mf_webp/jpeg/media/catalog/product/cache/f9bb4946b08eb56afc1e83d5b55bf276/V/N/VN0007P9KAQ1-zapatillas-baratas-casual-wm-caldrone-mujer-gris-1.webp" },
    { id: 6, name: "product6", price: 600, image: "https://www.tradeinn.com/h/14218/142180540/vans-zapatillas-knu-skool.webp" },
    { id: 7, name: "product7", price: 700, image: "https://ferreira.vtexassets.com/arquivos/ids/424005/vn_vn000d5ibymcasa_1.jpg?v=638387583207000000" },
  ]


  return (
    <div className="contentparent">
      <h1>Nuestros Productos</h1>
      <div className="product-list">
        {Products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => {
                  const event = new CustomEvent('addToCart', { detail: { id: product.id } });
                  window.dispatchEvent(event);
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provider;
