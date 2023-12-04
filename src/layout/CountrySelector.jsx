import { useId } from "react";
import ReactFlagsSelect from "react-flags-select";
import cn from "utility/cn";

export default function CountrySelector({
  label,
  labelClassName = "",
  labelStyle,
  className = "",
  error,
  value,
  onChange,
  ...rest
}) {
  const id = useId();
  return (
    <div className="grid gap-4">
      <label
        className={`text-[#181818] text-xs sm:text-sm md:text-base font-semibold ${labelClassName}`}
        style={labelStyle}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="grid gap-2">
        <ReactFlagsSelect
          {...rest}
          selected={value}
          onSelect={(code) => onChange(code)}
          
          className={cn(
            "text-[#181818] placeholder:text-[#71717A] border-[1px] border-[#E9F0EF] bg-[#FFFFFF] rounded-md   outline-none focus:ring-gray-400 focus:ring-1 text-xs sm:text-sm lg:text-base",
            className,
            { "border-red-500 border-2": error, "border-[#E9F0EF]": !error }
          )}
          id={id}
        />

        {error && (
          <p className="text-[#FF0000] text-xs sm:text-sm  font-medium">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
