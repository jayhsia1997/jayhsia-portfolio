import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigate = useNavigate();
  const onNavItemClick = (item) => {
    navigate(item.href)
    navigation.forEach((navItem) => {
      navItem.current = navItem.name === item.name
    })
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <FontAwesomeIcon
                    icon={solid("house")}
                    size={"2xl"}
                    className={"block w-auto lg:hidden text-gray-300"}
                    onClick={() => {
                      let item = navigation.find((item) => {
                        return item.href === "/" ? item : null
                      })
                      onNavItemClick(item)
                    }}
                  />
                  <FontAwesomeIcon
                    icon={solid("house")}
                    size={"2xl"}
                    className={"hidden w-auto lg:block text-gray-300"}
                    onClick={() => {
                      let item = navigation.find((item) => {
                        return item.href === "/" ? item : null
                      })
                      onNavItemClick(item)
                    }}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      return (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                          key={item.name}
                          onClick={() => onNavItemClick(item)}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                return (
                  <Disclosure.Button
                    key={item.name}
                    onClick={() => onNavItemClick(item)}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
