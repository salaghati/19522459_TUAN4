import React, { useEffect, useState } from 'react'

export const useMessages = (forum) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        let didCancel = false
        setError(null)
        if (forum){
            ;(async () => {
                try{
                    setLoading(true)
                    const response = await fetch(`http://localhost:5000/messages/${forum}`)
                    if (!response.ok) {
                        const text = await response.text()
                        throw new Error(
                            `Unable to read messages for ${forum}: ${text}`
                        )
                    }
                    const body = await response.json()
                    if (!didCancel) {
                        setData(body)
                    }
                }catch (err) {
                    setError(err)
                }finally {
                    setLoading(false)
                }
            })()
        } else {
            setData([])
            setLoading(false)
        }
        return () => {
            didCancel = true
        }
    }, [forum])
  return {data, loading, error}
}


