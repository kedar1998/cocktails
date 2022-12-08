import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const {loading, cocktail} = useGlobalContext();

  if(loading){
    return <Loading />
  }

  if(cocktail.length < 1){
    return <h2 className='section-title'>No cocktails match your search.</h2>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
      {
        cocktail.map((item) =>{
          return <Cocktail key={item.id} {...item} />
        })
      }
      </div>
    </section>
  )
}

export default CocktailList
