import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

const AppLayout = ({ children }) => {
    return (
        <div className=" flex flex-col justify-between bg-white  md:bg-gray-100">
           
           Menu

           <Link href="/">
          <a>Accueil</a>
        </Link>

           <Link href="/page2">
    <a>Page 2</a>
  </Link>

            <main>
                <div className="max-w-7xl mx-auto  md:px-6 ">
                    <div className="h-screen md:py-6 md:px-0">
                        <div className=" md:h-min md:border-4 md:border-dashed md:border-gray-200 md:rounded-lg bg-white p-4">
                            
                        <AnimatePresence
                                exitBeforeEnter
                                initial={false}
                                onExitComplete={() => window.scrollTo(0, 0)}>
                                {children}
                            </AnimatePresence>
                          
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AppLayout