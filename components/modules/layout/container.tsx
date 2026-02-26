interface LayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return <div className="w-full max-w-7xl mx-auto">{children}</div>;
};

export default LayoutContainer;
