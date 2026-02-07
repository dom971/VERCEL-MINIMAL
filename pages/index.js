import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h1>Hello Vercel 👋</h1>
      <p>{message}</p>
    </div>
  )
}
