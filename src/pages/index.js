import Layout from '@/components/layout/appLayout'
import PageLayout from '@/components/layout/pageLayout'

function HomePage() {
    return (
     
<>
<PageLayout>
<h1 className="text-3xl font-bold underline">
iOS app + Androïd app + Server side renering (SSR) webapp with nextjs, capacitor and tailwind !
</h1>
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