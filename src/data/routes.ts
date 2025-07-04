import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";

export const routes = {
  socialMedia: [
    {
      id: 1,
      name: "Instagram",
      path: "https://www.instagram.com/leticiamartins.organizer/",
      icon: FaInstagram
    },
    {
      id: 2,
      name: "WhatsApp",
      path: "https://wa.me/5544998138138",
      icon: FaWhatsapp
    },
    {
      id: 3,
      name: "Facebook",
      path: "https://www.facebook.com/leticiamartinsorganizer/",
      icon: FaFacebook
    }
  ],
  ancors: [
    { id: 1, name: "Inicio", path: "/" },
    { id: 2, name: "Serviços", path: "/#servicos" },
    { id: 3, name: "Experiência", path: "/#expertise" },
    { id: 4, name: "Curso", path: "/#curso" },
  ],
  internal: [
    { id: 1, name: "Residencial", path: "/residencial" },
    { id: 2, name: "Pos Mudança", path: "/posmudanca" },
    { id: 3, name: "Comercial", path: "/comercial" },
    { id: 4, name: "Consultoria", path: "/consultoria" },
  ]
}