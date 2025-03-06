const TechIcon = ({
    component,
    sizeSmall,
  }: {
    component: React.ElementType;
    sizeSmall?: boolean;
  }) => {
    const Component = component;
    return (
      <>
        <Component
          className={`${
            sizeSmall ? "size-5 sm:size-6 md:size-7" : "size-8"
          } fill-[url(#tech-icon-gradient)]`}
        />
        <svg className="size-0 absolute">
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </svg>
      </>
    );
  };
  
  export default TechIcon;