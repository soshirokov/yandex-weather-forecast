import { message } from 'antd'
import api from '../../url/api'

type coordProps = {
  lat: number | string
  lon: number | string
}

const LANGUAGE = 'ru_RU'

const getWeather = (coords: coordProps) => {
  const queryProps = { ...coords, lang: LANGUAGE }
  console.log(process.env.REACT_APP_YANDEX_KEY)

  const queryParams = Object.keys(queryProps)
    .map((key) => `${key}=${queryProps[key as keyof coordProps]}`)
    .join('&')
  return fetch(`${api.weatherAPI}?${queryParams}`, {
    headers: {
      'X-Yandex-API-Key': process.env.REACT_APP_YANDEX_KEY as string,
    },
  })
    .then((response) => response.json())
    .catch(() => {
      message.error('Возникла проблема с сервером, попробуйте позже')
    })
}

export default { getWeather }
