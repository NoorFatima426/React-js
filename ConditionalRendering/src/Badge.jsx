import { useState } from 'react'

function Badge() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h6>Badge Task</h6>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}>
        Decrement
      </button>

      <h3>Notifications</h3>

      {count > 0 && (
        <div style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}>
          {count <= 99 ? count : "99+"}
        </div>
      )}
    </>
  )
}

export default Badge