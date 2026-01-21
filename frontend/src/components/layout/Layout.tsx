import { Button } from "../ui/button";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Handbags", link: "/handbags" },
  { name: "Shoes", link: "/shoes" },
  { name: "Lingeries", link: "/lingeries" },
  { name: "Contact", link: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="header bg-gray-200 p-4 flex justify-between items-center">
          <div>
            <p className="logo p-4 text-2xl font-bold">ELEGIECHIC</p>
          </div>
          {
            <ul className="flex space-x-4 justify-center w-full">
              {menuItems.map((item) => (
                <li key={item.name} className="menu-item">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
                }
                <div>
                    <Button>Login</Button>
                </div>
        </div>
        <div>{children}</div>
      </div>
    );
}

export default Layout;