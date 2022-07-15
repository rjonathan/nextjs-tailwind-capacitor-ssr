import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Navigation = ({navigation}) => {
   


    return (
        <>
            <div className="hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-14">

                          
                                <div className="flex">
                                    <div className="hidden md:-my-px md:ml-6 md:flex md:space-x-8">
                                        {navigation.map(item => (
                                            <Link
                                                href={item.href}
                                                key={item.name}>
                                                <a
                                                    className={classNames(
                                                        item.current
                                                            ? 'border-primary text-gray-900'
                                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                        'whitespace-nowrap text-base font-medium inline-flex items-center px-1 pt-1 border-b-2',
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? 'page'
                                                            : undefined
                                                    }>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                         

                       
                        </div>
                    </div>
            </div>

            
        </>
    )
}

export default Navigation
