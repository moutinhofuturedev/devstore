import data from '../products/data.json'

export const GET = () => {
  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}

// Route Handlers dados de produtos filtrados em destaques
