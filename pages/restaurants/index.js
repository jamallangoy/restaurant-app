import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const restaurants = [
    {name: "WoodsHill"},
    {name: "Fiorellas"},
    {name: "Karma"},
  ]

  return (
    <>
        <h1>Restaurants List</h1>
        {restaurants.map((restaurant) => {
          return(
            <>
              <div>
              <Link as={'/restaurants/'+restaurant.name} href='/restaurants/[restaurant]'>
                <a>{restaurant.name}</a>
              </Link>
              </div>
            </>
          )
        })}
    </>
  )
}