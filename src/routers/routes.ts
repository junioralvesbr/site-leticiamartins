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
  ancoras: [
    { name: "Inicio", path: "/" },
    { name: "Experiência", path: "/#expertise" },
    { name: "Curso", path: "/#curso" },
  ],
  links: [
    { name: "Organização Residencial", path: "/residencial" },
    { name: "Pós Mudança", path: "/posmudanca" },
    { name: "Comercial", path: "/comercial" },
    { name: "Consultoria", path: "/consultoria" },
  ],
}