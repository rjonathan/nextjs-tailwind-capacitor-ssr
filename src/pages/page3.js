import Layout from "@/components/layout/appLayout";


function Page({ stars }) {
  return <div>Next stars:<span>{stars}</span></div>
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page

Page.getLayout = function getLayout(page) {
  return (
    <Layout menuCurrent="page3">
      {page}
    </Layout>
    )
};