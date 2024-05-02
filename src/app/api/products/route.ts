import data from './data.json'

export const GET = () => {
  return Response.json(data.products)
}

// Route Handlers dados de todos os produtos
