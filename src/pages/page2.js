import Layout from "@/components/layout/appLayout";
import PageLayout from "@/components/layout/pageLayout";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const url = "https://random-data-api.com/api/beer/random_beer?size=30";

function Page() {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <PageLayout>
        <h1 className="text-3xl font-bold underline">Page 2</h1>

        {data.map((beer) => (
          <div>{beer.name}</div>
        ))}
      </PageLayout>
    </>
  );
}

const SWR = ({ fallback }) => {
  fallback = fallback ? { fallback } : null;
  return (
    <SWRConfig value={fallback}>
      <Page />
    </SWRConfig>
  );
};
export default SWR;

/*export const getServerSideProps =
    process.env.NEXT_PUBLIC_SKIP_SSR == 1 ? undefined : init*/

async function init() {
  const data = await fetcher(url);

  return {
    props: {
      fallback: { [`${url}`]: data },
    },
  };
}

SWR.getLayout = function getLayout(page) {
  return <Layout menuCurrent="page2">{page}</Layout>;
};
