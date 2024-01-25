import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";

import Dropdown from "./Dropdown";
import NavItem from "./NavLink";
import cn from "utility/cn";

import logo from "../../src/assets/images/logo.png";
import { useSelector } from "react-redux";
import { CButton } from "utility";

import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

const links = [
  {
    id: "1",
    title: "Home",
    href: "/",
  },
  {
    id: "2",
    title: "About Us",
    subLinks: [
      { label: "Our services", href: "#services" },
      { label: "Programs", href: "#findProgram" },
      { label: "Working Universities", href: "#workingUniversities" },
      { label: "CEO Statement", href: "#ceoStatement" },
      { label: "Photos", href: "#gphotos" },
      { label: "Gallery ", href: "#videos" },
      { label: "Faq ", href: "#faqs" },
    ],
  },
  {
    id: "3",
    title: "Online Advisor",
    href: "#online-advisors",
  },
  {
    id: "4",
    title: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const { isDarkMode } = useSelector((state) => state.darkMode);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCurrentMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <header className={`bg-white py-3 md:py-4 px-4 sticky top-0 z-[1000]`}>
        <div className="container mx-auto grid grid-cols-2 justify-between md:grid-cols-[auto,1fr] md:gap-4 md:pl-8">
          <a href="/" className={`flex justify-start items-center `}>
            <img
              component={"img"}
              src={logo}
              alt={"logo"}
              className="h-16 w-16"
            />
            <div
              className={cn("w-[1px] h-1/2", {
                "bg-[#18181850]": !isDarkMode,
                "bg-[#ffffff70]": isDarkMode,
              })}
            />
            <h4
              className={cn(
                "inline-block max-[40ch] font-bold text-xs sm:text-sm md:text-base max-w-[10ch] text-center",
                {
                  "text-[#fff]": isDarkMode,
                  "text-[#181818]": !isDarkMode,
                }
              )}
            >
              WeCare Education
            </h4>
          </a>
          <div
            className={cn(
              "flex flex-col md:flex-row justify-center md:justify-between items-center row-start-2 col-span-2 md:row-start-1 md:col-start-2 max-h-0 overflow-hidden md:!overflow-visible  md:!max-h-none",
              {
                "max-h-[10030rem]  pt-5 md:pt-0": isMenuOpen,
              }
            )}
          >
            <ul
              className={cn(
                `w-full md:w-auto md:grid md:grid-cols-4 md:place-items-center md:justify-center md:!overflow-visible transition-all duration-300 ease-out md:items-center gap-4`
              )}
              ref={dropdownRef}
            >
              {links.map((link) => {
                if (link.subLinks) {
                  return (
                    <Dropdown
                      key={link.title}
                      title={link.title}
                      links={link.subLinks}
                      isMenuOpen={currentMenu === link.id}
                      setIsMenuOpen={() =>
                        setCurrentMenu(currentMenu === link.id ? null : link.id)
                      }
                      clearMenu={() => setCurrentMenu(null)}
                    />
                  );
                }
                return (
                  <NavItem
                    key={link.title}
                    href={link.href}
                    label={link.title}
                    className="md:hover:scale-105"
                  />
                );
              })}
            </ul>
            <div className="w-full md:w-auto p-4 md:p-0 flex gap-4 items-center">
              <CButton
                btnTitle={"Login"}
                fontSize={{
                  xs: 12,
                  md: 14,
                  lg: 16,
                }}
                padding={"0.5rem 2rem"}
                href={process.env.REACT_APP_DASHBOARD_URL}
                target="_blank"
              />

              <a
                href="https://www.instagram.com/wecare_education2145/?igshid=MTk0NTkyODZkYg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="block bg-[#CFF9FF] py-2 px-[0.625rem] rounded-md hover:bg-[#75b1c9] [&>*]:hover:text-[#f6feff] transition-all duration-100 ease-out"
              >
                <FaInstagram className="h-4 md:h-7  w-4 md:w-7 text-[#0090A6] transition-all duration-100 ease-out" />
              </a>

              <a
                href="https://www.facebook.com/wecareeducationconsultant"
                target="_blank"
                rel="noreferrer"
                className="block bg-[#CFF9FF] py-2 px-[0.625rem] rounded-md hover:bg-[#75b1c9] [&>*]:hover:text-[#f6feff] transition-all duration-100 ease-out"
              >
                <SlSocialFacebook className="h-4 md:h-7  w-4 md:w-7 text-[#0090A6] transition-all duration-100 ease-out" />
              </a>

              <a
                href="https://www.linkedin.com/in/md-iftekhar-rahman-2a5091297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noreferrer"
                className="block bg-[#CFF9FF] py-2 px-[0.625rem] rounded-md hover:bg-[#75b1c9] [&>*]:hover:text-[#f6feff] transition-all duration-100 ease-out"
              >
                <SlSocialLinkedin className="h-4 md:h-7  w-4 md:w-7 text-[#0090A6] transition-all duration-100 ease-out" />
              </a>
            
            </div>
          </div>
          <div className="md:hidden flex justify-end">
            {/* <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaBars className={`text-2xl`} />
            </button> */}
            <Hamburger
              toggled={isMenuOpen}
              toggle={() => setIsMenuOpen(!isMenuOpen)}
              size={20}
            />
          </div>
        </div>
      </header>
      <div
        className={cn(
          "h-screen w-screen bg-black fixed inset-0 z-[100] opacity-0 pointer-events-none transition-all duration-300 ease-out md:!hidden",
          {
            "opacity-50 pointer-events-auto": isMenuOpen,
          }
        )}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
}
