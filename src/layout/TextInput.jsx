import { useId } from "react";
import cn from "utility/cn";

export default function TextInput({
  label,
  labelClassName = "",
  labelStyle,
  className = "",
  error,
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
        <input
          {...rest}
          className={cn(
            "text-[#181818] placeholder:text-[#71717A] border-[1px] border-[#E9F0EF] bg-[#FFFFFF] rounded-md px-3 py-2 md:px-4 md:py-3 outline-none focus:ring-gray-400 focus:ring-1 text-xs sm:text-sm lg:text-base",
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
