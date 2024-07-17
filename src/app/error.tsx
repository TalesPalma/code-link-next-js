'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      width: '100%',
      backgroundColor: '#282c34',
      color: 'white'
    }}>
      <h1 style={{
        backgroundColor: 'red',
        textAlign: 'center',
        fontSize: '36px',
        padding: '20px',
        borderRadius: '8px',
        margin: '10px 0'
      }}>
        Error
      </h1>
      <h2 style={{
        backgroundColor: 'darkred',
        textAlign: 'center',
        fontSize: '24px',
        padding: '20px',
        borderRadius: '8px',
        margin: '10px 0'
      }}>
        {error.message}
      </h2>
    </div>)
}
