// components/blocks/FallbackComponent.jsx
'use client'

export default function FallbackComponent({ blok }) {
  console.error('=== COMPONENT NOT FOUND ===')
  console.error('Missing component:', blok?.component)
  console.error('Blok data:', blok)
  console.error('========================')
  
  return (
    <div style={{ 
      border: '3px solid red', 
      padding: '20px', 
      margin: '20px',
      backgroundColor: '#ffe6e6'
    }}>
      <h2 style={{ color: 'red', margin: '0 0 10px 0' }}>
        ⚠️ Missing Component: "{blok?.component}"
      </h2>
      <details>
        <summary>Click to see blok data</summary>
        <pre style={{ fontSize: '12px', overflow: 'auto' }}>
          {JSON.stringify(blok, null, 2)}
        </pre>
      </details>
    </div>
  )
}