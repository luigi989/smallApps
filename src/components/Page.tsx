interface PageProps {
    title: string;
    desc: string
    children: React.ReactNode;
}

export default function Page({ title, desc, children } : PageProps) {
  return (
    <div className="p-10 flex flex-col mx-auto text-dtext">
        <div className="p-2 flex flex-col items-center  rounded-t-xl">
            <h1 className="text-2xl">{title}</h1>
            <label className='text-xl'>{desc}</label>
        </div>
        <div className="p-2 w-full flex flex-col items-center  rounded-b-xl">
            {children}
        </div>
    </div>
  );
}