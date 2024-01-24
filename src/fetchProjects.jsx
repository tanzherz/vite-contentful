import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: '5f31okmgmo1r',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const { id } = item.sys
        // console.log(id)
        const img = image?.fields?.file?.url
        // const { url: img2 } = image.fields.file
        // console.log(img, img2)
        return { title, url, id, img }
      })

      setProjects(projects)

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return { loading, projects }
}

// useFetchProjects()

// client
//   .getEntries({ content_type: 'projects' })
//   .then((response) => console.log(response))
