import 'tailwindcss/tailwind.css'


function App({ Component, pageProps: { ...pageProps } }) {
   
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default App