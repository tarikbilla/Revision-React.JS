
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, MegaMenuDropdown } from "flowbite-react";

export default function Component() {
  return (
    <Navbar fluid rounded className="border-b">
      <NavbarBrand href="#">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Revision React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button href="https://react.dev/" color="dark">Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/">
          My Goal
        </NavbarLink>
        <NavbarLink>
        <MegaMenuDropdown toggle={<>Learning</>}>
            <ul className="grid grid-cols-3">
              <div className="space-y-4 p-4">
                <li>
                  <a href="/learnes" className="hover:text-blue-600 dark:hover:text-primary-500">
                    ES6 to Latest
                  </a>
                </li>
                <li>
                  <a href="/env" className="hover:text-blue-600 dark:hover:text-primary-500">
                    .env File Setup
                  </a>
                </li>
                <li>
                  <a href="/jsxrendering" className="hover:text-blue-600 dark:hover:text-primary-500">
                    JSX Rendering
                  </a>
                </li>
                <li>
                  <a href="/components" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Components
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
              </div>
              
              
            </ul>
          </MegaMenuDropdown>
        </NavbarLink>


        <NavbarLink>
        <MegaMenuDropdown toggle={<>Projects</>}>
            <ul className="grid grid-cols-3">
              <div className="space-y-4 p-4">
                <li>
                  <a href="/weatherapp" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Weather APP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    item
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-primary-500">
                    Item
                  </a>
                </li>
              </div>
              
              
            </ul>
          </MegaMenuDropdown>
        </NavbarLink>
        <NavbarLink href="#">Pages</NavbarLink>
        <NavbarLink href="#">Others</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
