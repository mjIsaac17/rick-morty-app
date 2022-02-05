const baseUrl = 'https://rickandmortyapi.com/api'

export const httpRequest = async (endpoint, method = 'GET', queryParams) => {
  try {
    const url = new URL(`${baseUrl}/${endpoint}`)
    url.search = new URLSearchParams(queryParams).toString()
    return await fetch(url, { method })
  } catch (error) {
    console.log(error)
  }
}
