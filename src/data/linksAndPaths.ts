const getWhatsAppLink = () => {
  const phone = '5544998138138'
  const space = '%20'
  const message = `Ola,${space}Vim,${space}pelo${space}site,${space}gostaria${space}de${space}saber${space}sobre${space}seu${space}trabalho${space}
  `
  return `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
}

export const linksAndPaths = {
  whatsapp: {
    name: "Whatsapp",
    href: getWhatsAppLink(),
  },
  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/leticiamartins.organizer/",
  },
  facebook: {
    name: "Facebook",
    href: "https://www.facebook.com/leticiamartinsorganizer/",
  },
  curso: {
    name: 'Curso',
    href: 'https://curso.leticiamartins.com.br/'
  },
  inicio: {
    name: "Inicio",
    href: "/",
  },
  contato: {
    name: "Contato",
    href: getWhatsAppLink(),
  },
  servicos: {
    name: "Serviços",
    href: "/#servicos",
  },
  experiencia: {
    name: "Experiencia",
    href: "/#experiencia",
  },
  posMudanca: {
    name: "Pos Mudanca",
    href: "/posmudanca",
  },
  residencial: {
    name: "Residencial",
    href: "/residencial",
  },
  comercial: {
    name: "Comercial",
    href: "/comercial",
  },
  marcenariaInteligente: {
    name: "Marcenaria Inteligente",
    href: '/marcenariainteligente'
  }
}