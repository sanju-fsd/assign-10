import React from 'react'

function ProductCard({product }) {
  return (
    <div
        style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            textAlign: 'center',
        }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px", height: "200px", objectFit: "cover" }}
      />
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>Rs.{product.price}</p>
        <p>Rating {product.rating}</p>
    </div>
  )
}

function ProductGrid({ products }) {
  return (
    <div className="" style= {{marginTop:"20px",display:'inline-grid',} }>
      {products.length>0 ? 
        (products.map((product) => <ProductCard key={product.id} product={product} /> ) )  
        :
        (<p>No products found.</p>)
    }
        
    </div>
  );
}
export  { ProductCard, ProductGrid};