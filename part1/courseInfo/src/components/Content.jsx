import React from 'react'

export const Content = ( {parts} ) => {
    console.log("Component Content", parts[0])
  return (
    <>
        <Part part={parts[0]}/>
        <Part part={parts[1]}/>
        <Part part={parts[2]}/>

    </>

  )
}


const Part = ( {part} ) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
