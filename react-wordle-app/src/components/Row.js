import React from 'react'

export default function Row({guess}) {

  if (guess){//se guess for undefined isso é falso
    return(
      <div className='row past'>
        {guess.map((letter,i) =>(
          <div key={i} className={letter.color}>{letter.key}</div>
        ))}
      </div>
    )
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
