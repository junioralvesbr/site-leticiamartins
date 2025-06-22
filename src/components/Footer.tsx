export default function Footer() {
  return (
    <footer className="text-white p-24">
      <div className="flex flex-col gap-24 max-w-7xl mx-auto min-h-64">
        <div className="flex flex-wrap gap-20">
          <div className="flex flex-col flex-2 gap-8">
            <h3 className="border-y-1 border-white uppercase font-anton text-lg py-5">
              Entre em contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Organize a sua casa</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8 min-w-72">
            <h3 className="border-y-1 border-white uppercase font-anton text-lg py-5">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              <li>Sobre nós</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>

        <p className="text-right border-t-1 border-white py-2">
          © 2025 Leticia Martins. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}