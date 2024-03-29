interface DrawerProps {
    children: React.ReactNode;
}

export default function Drawer({children} : DrawerProps) {
  return (
    <div className="h-full w-1/12 top-0 left-0 bg-dbgAlt
        overflow-hidden pt-2 px-3 text-litext">
        <p className="text-xl pb-2">Projects</p>
        {children}
    </div>
  );
}