const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <h1>Hello, Next.js</h1>
}

export default Home
