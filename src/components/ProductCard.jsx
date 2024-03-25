
export const ProductCard = () => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button>Comprar</button>
    </div>
  )
}
