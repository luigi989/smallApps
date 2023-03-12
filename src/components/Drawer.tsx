interface DrawerProps {
    children: React.ReactNode;
}

export default function Drawer({children} : DrawerProps) {
  return (
    <div className="h-full w-1/12 top-0 left-0 bg-slate-900 
        overflow-hidden pt-5 pl-3 text-white">
        {children}
    </div>
  );
}