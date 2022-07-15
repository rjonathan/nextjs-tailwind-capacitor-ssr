import Link from 'next/link'

function HomePage() {
    return (
        <>
      <h1 className="text-3xl font-bold underline">
        Page 2
      </h1>


        <Link href="/">
          <a>Accueil</a>
        </Link>
        </>
    )

  }
  
  export default HomePage