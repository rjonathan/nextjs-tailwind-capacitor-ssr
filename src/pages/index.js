import Layout from '@/components/layout/appLayout'
import PageLayout from '@/components/layout/pageLayout'
import Head from 'next/head'


function HomePage() {
    return (
     
<>

<Head>
        <title>Nextjs + capacitor</title>
        <meta name="description" content="Prototype d'app avec nextjs et capacitor" />

      </Head>


<PageLayout>

<h1 className="text-3xl font-bold underline">
iOS app + Androïd app + Server side renering (SSR) webapp with nextjs, capacitor and tailwind !
</h1>

<p>

Code source : <a target="_blank" href="https://github.com/rjonathan/nextjs-tailwind-capacitor-ssr">Github</a>
<br />
Explication : <a target="_blank" href="https://www.progressive-web-apps.fr/mobile-apps-SSR-tailwind-nextjs-ionic-and-capacitor">Article sur progressive-web-apps.fr</a>
<br />
Crédit : <a target="_blank" href="https://www.alphalives.com">agence web Alphalives</a>


</p>



</PageLayout>

 
  </>
    )

  }
  
  export default HomePage


  HomePage.getLayout = function getLayout(page) {
    return (
      <Layout menuCurrent='index'>
            {page}
      </Layout>
    )
  }