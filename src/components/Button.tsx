interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button({ onClick, children } : ButtonProps) {
  return (
    <button 
        className="py-1 px-2 bg-green-500 rounded-sm hover:bg-green-600 w-fit"
        onClick={onClick}>
        {children}
    </button>
  );
}