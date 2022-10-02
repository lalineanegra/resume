export const sp = {
  pageFields: {
    header: {
      locationField: "Ubicación",
      emailField: "E-mail",
      phoneField: "Teléfono",
      webField: "Web",
    },
    about: {
      aboutTitle: "Sobre Mi",
    },
    education: {
      educationTitle: "Educación",
      university: "Universidad",
      diplomas: "Diplomas",
      courses: "Cursos",
    },
    experience: {
      experienceTitle: "Experiencia",
    },
    skills: {
      skillsTitle: "Habilidades",
    },
  },
  main: {
    firstName: "Rodrigo",
    lastName: "Alonso",
    title: "Desarrollador Cloud",
  },
  about: [
    {
      id: 0,
      paragraph: `He dedicado mi quehacer profesional al desarrollo de soluciones a través distintas herramientos de software y plataformas,
        que permitan mejorar sustancialmente la eficiencia y eficacia con que distintas organizaciones manejan su información y/o procesos,
        formulando y proponiendo componentes e infraestructura, principalmente API's, orquestadores, ETL's, microservicios y front-end,
        utilizando herramientas NodeJS, Express, React (NextJS), Python, Apache Airflow, Apache Kafka, Spark, etc
      `,
    },
    {
      id: 1,
      paragraph: `
        Mi OS preferido es Linux-Debian. Tengo experiencia trabajando en Google Cloud y AWS, formulando microservicios empacados en Docker
        para su posterior despliegue en Kubernetes. He colaborado extensivamente desarrollando plataformas para retail, encargandome del front-end
        así como del back-end, las API's relacionadas y su interaccion con warehouse on-premise.
    `,
    },
    {
      id: 2,
      paragraph: `
        Siempre me encuentro en algún curso o investigación personal relacionados con las tecnologías con las que trabajo.
        Acceso a estos recursos es algo que me mantiene motivado
      `,
    },
    {
      id: 3,
      paragraph: `
          Llevo trabajando remotamente desde hace un tiempo, coordinandome con equipos y miembros en distinas zonas geográficas, por 
          lo que estoy acostumbrado a adaptarme a diferentes dinámicas y flujos de trabajo. Tengo además cierta experiencia en gestión de proyectos 
          relacionados con construcción y habilitación de espacios, en un contexto de presupuesto y plazos definidos.
      `,
    },
    {
      id: 4,
      paragraph: `
         
      `,
    },
    {
      id: 5,
      paragraph: `
                  
              `,
    },
  ],
  mainDetails: [
    { name: "FullName", value: "Rodrigo Alonso Alarcón R." },
    { name: "Country", value: "Chile" },
    { name: "City", value: "Valparaíso" },
  ],
  secondDetails: [
    { name: "Email", value: "rodrigo.gtr@gmail.com" },
    { name: "Phone", value: "+56 9 66095 824" },
  ],
  thirdDetails: [
    { name: "Citizenship", value: "Chilean" },
    { name: "Languages", value: "Spanish, English" },
  ],
  detailsSummary: {
    country: "Chile",
    city: "Valparaíso",
    email: "roalonso@skiff.com",
    phone: "+56 9 66095 824",
    web: "",
  },
  experience: [
    {
      id: 0,
      logo: "",
      company: "Imagemaker",
      dates: "Sept 2020 - Presente",
      city: "Valparaíso, Chile",
      accomplishments: `
        Inicialmente integré un equipo consolidado, trabajando con metodología Agile para cliente Falabella, colaborando en el desarrollo, pruebas y despliegue
        de microservicios construidos con AdonisJS, Python-Flask y MongoDB, con el objetivo de gestionar logística de retail y
        y del procesamiento y presentación de data para departamento de Bussness Inteligence utilizando framework Pytorch.
        
        Posteriormente, para cliente SMU, formulé soluciones y propuestas para la arquitectura de plataforma para el procesamiento de datos de venta,
        utilizando Apache Kafka, Apaache Airflow, microservicios en python y fron-end con NextJS
      `,
    },
    {
      id: 1,
      logo: "",
      company: "Zenta",
      dates: "Feb 2020 - Ago 2020",
      city: "Santiago, Chile",
      accomplishments: `
        Como parte del equipo de desarrollo de Falabella, como desarrollador FullStack fui responsable
        del diseño e implementación tanto del front-end como backend, de una plataforma dedicada a la gestión
        de documentación logística, Utilizando ReactJS, ExpressJS y Postgres, en un entorno Google Cloud.
        `,
    },
    {
      id: 2,
      logo: "",
      company: "Angular Control",
      dates: "Feb 2019 - Ene 2020",
      city: "Santiago, Chile",
      accomplishments: `
        Desarrollo de plataforma logística con stack MERN, construyendo un servicos de gestión financiera y logística.
        Modelamiento de datos y diseño de la base de datos Postgres para el volcamiento de información historíca desde
        archivos csv. 
      `,
    },
    {
      id: 3,
      logo: "",
      company: "Mallplaza - COZ",
      dates: "Sept 2017 - Ene 2019",
      city: "Santiago, Chile",
      accomplishments: `
        Como Project Manager en Mallplaza Inc. coordiné y administré diversas instalaciones y contratos de habilitación,
          relacionados con obras civiles y mantenimiento, en distintas localidades del país. También desarrollando
          herramientas basadas en NodeJS, Python, MySQL, JQuery y Bootstrap, en servidores locales
      `,
    },
    {
      id: 4,
      logo: "",
      company: "Cypco S.A.",
      dates: "Jul 2012 - Feb 2017",
      city: "Bio Bio - Santiago, Chile",
      accomplishments: `
        Gestión de recursos y materiales, control de avance físico y financiero, desarrollo de herramientas para el control y avance de proyectos utilizando PHP,
        HTML5, CSS3 y MySQL
        `,
    },
    {
      id: 5,
      logo: "",
      company: "Montec Ltda.",
      dates: "Ene 2010 - Jun 2012",
      city: "Iquique - Copiapó, Chile",
      accomplishments: `
        Control del sistema de calidad basado en los lineamientos de las Normas ISO 9001:2008 e ISO 14001:2004 en Proyecto Caserones,
        contrato K-111 para el abastecimiento de agua del asentamiento de Carrizalillo.

        Jefe de producción de infraestructuras siderúrgicas de diversos proyectos industriales de montaje, tales como emisario submarino en Los Vilos,
        Región de Valparaíso y emisario submarino en Punta del Este, Uruguay
      `,
    },
  ],
  skills: [
    {
      id: 0,
      name: "NodeJS",
      value: 95,
    },
    {
      id: 1,
      name: "React",
      value: 90,
    },
    {
      id: 2,
      name: "AdonisJS",
      value: 80,
    },
    {
      id: 3,
      name: "GraphQL",
      value: 80,
    },
    {
      id: 4,
      name: "Typescript",
      value: 60,
    },
    {
      id: 5,
      name: "Python",
      value: 80,
    },
    {
      id: 6,
      name: "Pandas",
      value: 70,
    },
    {
      id: 7,
      name: "PostgreSQL",
      value: 70,
    },
    {
      id: 8,
      name: "MongoDB",
      value: 90,
    },

    {
      id: 9,
      name: "Docker",
      value: 98,
    },
    {
      id: 10,
      name: "Kubernetes",
      value: 60,
    },
    {
      id: 11,
      name: "GoogleCloud",
      value: 60,
    },
  ],

  education: {
    university: {
      year: "2002-2008",
      name: "Pontificia Universidad Católica de Valparaíso",
      title: " Ingeniero Constructor",
    },
    diplomas: [
      {
        id: 1,
        year: "2017",
        university: "Pontificia Universidad Católica de Chile",
        name: "Gestion de Mercados Energéticos",
      },
    ],
    courses: [
      {
        id: 1,
        year: "2018",
        name: "Especialización Machine Learning (5 cursos), Google",
      },
      {
        id: 2,
        year: "2019",
        name: "M320: Modelamiento de Datos, MongoDB",
      },
      {
        id: 3,
        year: "2019",
        name: "M220JS: MongoDB para Desarrolladores Javascript",
      },
      {
        id: 4,
        year: "2020",
        name: "Fundamentos AWS: Going Cloud-Native",
      },
      {
        id: 5,
        year: "2020",
        name: "Fundamentos AWS: Abordando Riesgos de Seguridad",
      },
      {
        id: 6,
        year: "2021",
        name: "Bases de Python Para Ciencia de Datos",
      },
      {
        id: 7,
        year: "2021",
        name: "LFS201: Administración Escencial de Sistemas Linux",
      },
      {
        id: 8,
        year: "2021",
        name: "LFS253: Fundamentos de Containers",
      },
      {
        id: 9,
        year: "2021",
        name: "LFW211: Desarrollo de Aplicaciones en NodeJS",
      },
      {
        id: 10,
        year: "2022",
        name: "Fundamentos de Bases de datos NoSQL",
      },
    ],
  },
};
