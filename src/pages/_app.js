import 'tailwindcss/tailwind.css'



function App({ Component, pageProps: { ...pageProps } }) {
  
    // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)


  return getLayout(
    <>
    <Head>
    <meta name='application-name' content='Nextjs + Capacitorjs' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content='Nextjs + Capacitorjs' />

    <link rel='manifest' href='/manifest.json' />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>



    <Component {...pageProps} />
  </>
  )

}

export default App