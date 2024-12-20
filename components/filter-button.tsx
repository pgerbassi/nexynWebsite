interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function FilterButton({ label, isActive = false, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-colors
        ${isActive 
          ? 'bg-blue-500 text-white' 
          : 'bg-transparent text-gray-400 border border-gray-700 hover:border-blue-500 hover:text-blue-500'
        }
      `}
    >
      {label}
    </button>
  )
}

