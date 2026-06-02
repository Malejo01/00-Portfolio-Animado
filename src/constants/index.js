import {
  creator,
  web,
  backend,
  javascript,
    typescript,
    angular,
    dotnet,
    csharp,
    postgresql,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    malejoMath,
    quePintaSalta,
    saltaPay,
    elGordoBeio,
    pokemonGame,
    threejs,
    logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Acerca de mi",
    },
    {
      id: "work",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contactame",
    },
  ];
  
  const services = [
    {
      title: "Frontend Architecture",
      description: "Diseño interfaces escalables, sistemas de componentes y experiencias de usuario mantenibles para productos web de alto impacto.",
      icon: web,
    },
    {
      title: "Logic & Backend",
      description: "Construyo APIs RESTful y capas de negocio con .NET y C#, priorizando consistencia, claridad técnica y evolución sostenible.",
      icon: backend,
    },
    {
      title: "AI-Assisted Development",
      description: "Integro herramientas de IA al flujo de desarrollo para acelerar delivery, elevar productividad y mejorar la calidad del código.",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: ".NET Core",
      icon: dotnet,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Malejo Math",
      description:
        "Plataforma Fullstack EdTech diseñada para automatizar procesos de evaluación y seguimiento personalizado. Incorpora modelos de lenguaje (LLMs) para proveer a los estudiantes feedback inmediato ante errores y cuenta con un módulo de ingesta automatizada de programas analíticos (PDF/DOCX) para generar exámenes alineados de forma inmediata.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Prisma ORM",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "orange-text-gradient",
        },
        {
          name: "Inteligencia Artificial",
          color: "purple-text-gradient",
        },
      ],
      image: malejoMath,
      source_code_link: "https://github.com/Malejo01/MalejoMath",
      proyect_link: "https://v0-malejo-math-app.vercel.app",
    },
    {
      name: "Qué pinta Salta",
      description:
        "Plataforma web centralizada orientada al turismo y la recreación local, diseñada para indexar la oferta gastronómica, teatral y de peñas en la provincia. Integra scripts automatizados de web scraping para la recolección periódica de eventos y ofrece un sistema de consultas optimizado para segmentar la agenda cultural en tiempo real.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "Web Scraping",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "orange-text-gradient",
        },
        {
          name: "Desarrollo Fullstack",
          color: "purple-text-gradient",
        },
      ],
      image: quePintaSalta,
      source_code_link: "https://github.com/Malejo01/que-pinta-salta",
      proyect_link: "https://v0-que-pinta-salta.vercel.app",
    },
    {
      name: "Salta Pay",
      description:
        "Aplicación de software financiero (Fintech) prototipada como un MVP funcional para resolver la liquidación y cobro de divisas de turistas internacionales en el sector hotelero. Utiliza la red de pruebas (Testnet) de Stellar Blockchain para transaccionar dólares digitales y cuenta con una arquitectura de ruteo dinámico por códigos QR para conciliar pagos con comisiones del 0.25%.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Stellar Network",
          color: "green-text-gradient",
        },
        {
          name: "Blockchain",
          color: "pink-text-gradient",
        },
        {
          name: "Fintech",
          color: "orange-text-gradient",
        },
        {
          name: "QR Routing",
          color: "purple-text-gradient",
        },
      ],
      image: saltaPay,
      source_code_link: "https://github.com/Malejo01/v0-hotel-payment-mvp",
      proyect_link: "https://v0-hotel-payment-mvp.vercel.app",
    },
    {
      name: "El Gordo Beio - Sistema Gastronómico",
      description:
        "Plataforma de gestión integral para el sector gastronómico diseñada para optimizar la toma de pedidos, administración de mesas y control de facturación en tiempo real. Desarrollada para agilizar el flujo de trabajo interno del restaurante y mejorar la experiencia del cliente final mediante una interfaz intuitiva y de alta disponibilidad.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "SQL",
          color: "orange-text-gradient",
        },
        {
          name: "Gestión Comercial",
          color: "purple-text-gradient",
        },
      ],
      image: elGordoBeio,
      source_code_link: "https://github.com/Malejo01/quiosco-next",
      proyect_link: "https://quiosco-next-steel.vercel.app/order/cafe",
    },
    {
      name: "Interactive Game Engine (Pokémon)",
      description:
        "Sistema de entretenimiento interactivo que consume la PokéAPI pública, enfocado en el manejo de estado complejo y dinamismo. Cuenta con algoritmos personalizados para gestionar niveles de dificultad, lógica de vidas, puntajes dinámicos y multiplicadores de racha (streaks). La UI se adapta reactivamente según el modo de juego seleccionado.",
      tags: [
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        },
        {
          name: "AI-Assisted",
          color: "orange-text-gradient",
        },
        {
          name: "Lógica de Estado",
          color: "purple-text-gradient",
        },
      ],
      image: pokemonGame,
      source_code_link: "https://github.com/Malejo01/Proyecto-03-Quien-es-ese-pokemon",
      proyect_link: "https://quien-es-ese-pokemon-malejo.netlify.app",
    },
    {
      name: "El Ebrio Fino",
      description:
        "Pagina web en donde podes ver, buscar y filtrar recetas de tragos segun los ingredientes que tengas a mano.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Malejo01/BuscadorBebidas.git",
      proyect_link: "https://elebriofino.netlify.app",
    },
    {
      name: "Cotizador de Cryptomonedas",
      description:
        "Aplicacion Web en donde puedes conocer a tiempo real cuales son los valores de las cryptomonedas mas utilizadas en la moneda de tu pais",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Malejo01/crypto-react.git",
      proyect_link: "https://cotizador-crypto-react-vite.netlify.app",
    },
    {
      name: "Citas veterinaria",
      description:
        "Un proyecto en el cual puedes agendar citas en una veterinaria, especificando los datos y sintomas de tu mascota. Ademas permite guardar y editar los detalles",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Malejo01/citas-react.git",
      proyect_link: "https://agendatucita-veterinaria-react-vite.netlify.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };