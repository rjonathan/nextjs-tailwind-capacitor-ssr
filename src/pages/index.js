import Link from 'next/link'



function HomePage() {
    return (
     
<>
<h1 className="text-3xl font-bold underline">
Hello world nextjs + tailwind !
</h1>


  <Link href="/page2">
    <a>Page 2</a>
  </Link>
  </>
    )

  }
  
  export default HomePage