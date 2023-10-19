import React, { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const App = () => {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
        const fistWord = fact.split(' ', 1)
        console.log(fistWord)
        setImageUrl(`https://cataas.com/cat/says/${fistWord}`)
      })
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img src={imageUrl} alt={`Image extracted with cat for ${fact}`} />
      )}
    </main>
  )
}
