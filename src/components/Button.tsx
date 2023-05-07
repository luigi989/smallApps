interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button({ onClick, children } : ButtonProps) {
  return (
    <button 
        className="py-1 px-2 text-litext bg-dbuttonbg rounded-sm hover:bg-dbuttonhover w-fit"
        onClick={onClick}>
        {children}
    </button>
  );
}