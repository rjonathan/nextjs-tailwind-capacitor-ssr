import Layout from '@/components/layout/appLayout'
import PageLayout from '@/components/layout/pageLayout'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())


function Page() {

    const { data, error } = useSWR('https://random-data-api.com/api/beer/random_beer?size=30', fetcher)


    if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>


    return (
        <>
            <PageLayout>
                <h1 className="text-3xl font-bold underline">
                    Page 2
                </h1>
                
                {data.map(beer => (
                     <div>
                        { beer.name }
                     
                     </div>
                ))}
                
                </PageLayout>
        </>
    )

}

export default Page

Page.getLayout = function getLayout(page) {
    return (
        <Layout menuCurrent='page2'>
            {page}
        </Layout>
    )
}