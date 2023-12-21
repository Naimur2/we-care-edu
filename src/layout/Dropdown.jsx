import { FaChevronDown } from "react-icons/fa";


import NavItem from "./NavLink";
import cn from "utility/cn";


export default function Dropdown({
  isMenuOpen,
  links,
  setIsMenuOpen,
  title,
}) {
  return (
    <li
      //   onMouseEnter={() => setIsMenuOpen?.(true)}
      //   onMouseLeave={() => setIsMenuOpen?.(false)}
      className={`relative cursor-pointer w-full`}
      onMouseEnter={() => setIsMenuOpen?.(true)}
      onMouseLeave={() => setIsMenuOpen?.(false)}
    >
      <div
        className={cn(
          `px-4 py-2 text-sm sm:text-base xl:text-lg w-full md:w-auto transition-all duration-100 ease-in flex justify-between md:justify-center items-center border-b-0
              md:hover:scale-105 hover:font-bold text-center
          `,
          {
            "border-b-[1px] border-[#EEEAEA] font-bold": isMenuOpen,
          }
        )}
        onClick={() => setIsMenuOpen?.()}
      >
        <span
      
        >{title}</span>
        <FaChevronDown
          className={cn(
            `inline-block ml-2 transition-all duration-100 ease-in-out md:hidden`,
            {
              "transform rotate-180": isMenuOpen,
            }
          )}
        />
      </div>

      <ul
        className={cn(
          `
         px-4 py-0 md:px-2 md:absolute md:top-[110%]  md:rounded-md md:shadow-xl md:left-10 md:min-w-[15rem] w-full bg-white z-[1000] transition-all duration-75 ease-out md:items-center gap-4 max-h-0 overflow-hidden
          `,
          {
            "max-h-[10030rem] md:pt-0 py-2": isMenuOpen,
          }
        )}
      >
        {links?.map((link) => (
          <NavItem
            key={link.label}
            href={link.href}
            label={link.label}
            className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#EEEAEA] w-full inline-block md:w-full !text-black !text-left"
          />
        ))}
      </ul>
    </li>
  );
}
