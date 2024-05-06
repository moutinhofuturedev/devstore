import data from '../data.json'

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}

// Route Handlers dados de produtos filtrados em destaques
