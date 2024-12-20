export function Footer() {
    return (
      <footer className="bg-[#001830] py-8 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nexyn. Todos os direitos reservados.
            </div>
            <div className="text-gray-500 text-sm">
              CNPJ: 12.345.678/0001-90
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  