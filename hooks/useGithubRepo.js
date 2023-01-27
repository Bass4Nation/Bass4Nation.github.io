import { useEffect, useState } from 'react'

export function useGithubRepo(id) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/repositories/${id}`)
        const json = await response.json()
        setData(json)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  return { data, error, loading }
}
