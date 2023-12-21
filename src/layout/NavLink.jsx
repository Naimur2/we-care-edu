
import cn from "utility/cn";


export default function NavItem({ href, label, className }) {
  const isActive = window.location.pathname === href;
  return (
    <li className={`relative w-full flex md:justify-center`}>
      <a
        className={cn(
          `inline-block px-4 py-2 md:text-center text-sm sm:text-base min-w-[6rem] xl:text-lg w-full md:w-auto transition-all duration-100 ease-in-out hover:font-semibold !text-black
             
            `,
          className,
          {
            "!font-bold": isActive,
          }
        )}

        
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
