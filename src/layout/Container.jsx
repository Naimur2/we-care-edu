
import cn from "src/utils/cn";

export default function Container({
  children,
  containerStyle,
  style,
  className,
  containerClassName,
}) {
  return (
    <section
      className={cn("py-10 sm:py-12 md:py-14 xl:py-16 2xl:py-20", className)}
      style={style}
    >
      <div
        className={cn("container mx-auto px-4", containerClassName)}
        style={containerStyle}
      >
        {children}
      </div>
    </section>
  );
}
