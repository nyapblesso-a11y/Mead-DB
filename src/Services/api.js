import ky from 'ky'

const BaseUrl = "https://www.themealdb.com/api/json/v1/1/"
const Api = ky.create({prefixUrl: BaseUrl})

export default Api