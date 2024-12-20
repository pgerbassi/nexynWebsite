interface ServiceCardProps {
  number: string;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function ServiceCard({ number, title, isActive = false, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl p-8 h-[200px] transition-all ${
        isActive 
          ? 'bg-blue-600 text-white scale-105' 
          : 'bg-[#001830] text-blue-400 hover:bg-blue-600/20'
      }`}
    >
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className={`text-sm ${isActive ? 'text-blue-200' : 'text-gray-500'}`}>#{number}</span>
        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-blue-400'}`} />
      </div>
      
      <h3 className={`text-2xl font-bold mt-1 ${isActive ? 'text-white' : 'text-blue-400'}`}>
        {title}
      </h3>
    </button>
  )
}

