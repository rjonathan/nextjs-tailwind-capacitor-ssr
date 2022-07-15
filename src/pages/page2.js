import Layout from '@/components/layout/appLayout'
import PageLayout from '@/components/layout/pageLayout'



function Page() {
    return (
        <>
         <PageLayout>
      <h1 className="text-3xl font-bold underline">
        Page 2
      </h1></PageLayout>


       
        </>
    )

  }
  
  export default Page

  Page.getLayout = function getLayout(page) {
    return (
      <Layout>
            {page}
      </Layout>
    )
  }