import utils from 'utils/index'

function Home({ forecast }: any) {
  return <>{JSON.stringify(forecast)}</>
}

export async function getServerSideProps() {
  const forecast = await utils.api.getWeather({ lat: '', lon: '' })

  return { props: { forecast } }
}

export default Home
