import Link from "next/link";

export const NavigationMobileButton = ({ children, href, Icon, current }) => {
  return (
    <>
      <li>
        <Link href={href} className="group flex   px-4 pt-2 w-full  ">
          <a>
            <span className="flex flex-col items-center text-cente">
              <Icon className="w-6" />
              <span className="text-xs pb-1">{children}</span>
              {current && (
                <span className="block w-5 mx-auto h-1 bg-gray-300 rounded-full" />
              )}
            </span>
          </a>
        </Link>
      </li>
    </>
  );
};

const NavigationMobile = ({ navigation }) => {
  return (
    <>
      <div className="fixed bottom-0 w-full z-50">
        <nav className="md:hidden bottom-0 w-full bg-gray-700 text-xs">
          <ul className="flex justify-around  text-white text-center text-lg font-bold">
            {navigation.map((item) => (
              <NavigationMobileButton
                href={item.href}
                current={item.current}
                Icon={item.icon}
                key={item.id}
              >
                {item.name}
              </NavigationMobileButton>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavigationMobile;
