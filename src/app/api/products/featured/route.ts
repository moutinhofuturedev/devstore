import data from '../data.json'

export const GET = async () => {
  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}

// Route Handlers dados de produtos filtrados em destaques
