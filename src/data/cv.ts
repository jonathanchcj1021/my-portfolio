import { Code2, Database, Cloud, Terminal, Award, BookOpen } from 'lucide-react';

export const cvData = {
  name: "Jonathan Churn",
  title: "System Analyst / Team Lead",
  summary: "Experienced IT professional with over 10 years in system analysis and full-stack development, currently performing in a team lead capacity. Proven ability in delivering end-to-end software solutions within the SDLC across cloud environments (AWS/Azure), with strong leadership in backend microservice architecture, database design, frontend Web system design and cross-team coordination.",
  contact: {
    email: "Jonathanchcj1021@gmail.com",
    phone: "(852) 6310-6930",
    linkedin: "https://www.linkedin.com/in/jonathanchurn",
    location: "Hong Kong",
  },
  skills: [
    {
      category: "Languages & Frameworks",
      icon: Code2,
      items: ["C#", "Node.js", "Express JS", "React JS", "Next.js", "MVC", "REST API", "gRPC", "PHP"],
    },
    {
      category: "Database",
      icon: Database,
      items: ["PostgreSQL", "MariaDB", "Microsoft SQL Server", "MySQL", "Dapper", "Entity Framework"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS (EKS, RDS)", "Azure", "Docker", "Kubernetes", "GitLab CI/CD", "Argo CD", "GitOps"],
    },
    {
      category: "Architecture & Tools",
      icon: Terminal,
      items: ["Microservices", "RabbitMQ", "Apache Storm", "JIRA", "Postman", "Swagger", "Git"],
    },
  ],
  experience: [
    {
      company: "Autotoll Limited",
      roles: [
        { title: "System Analyst", period: "June 2022 – Present" },
        { title: "Senior Analyst Programmer", period: "Jan 2020 – June 2022" },
        { title: "Analyst Programmer", period: "May 2018 – Jan 2020" },
        { title: "Programmer", period: "Oct 2017 – May 2018" },
        { title: "System Support", period: "June 2014 – Oct 2017" },
      ],
      description: "Supervised a team of 4 developers. Led backend microservice architecture, database design, and frontend web system design.",
    },
    {
      company: "Speedy Group",
      roles: [
        { title: "Technical Support Assistant", period: "June 2013 – June 2014" },
      ],
      description: "Provided technical support and maintenance.",
    },
  ],
  achievements: [
    {
      title: "EV Charger Booking and Payment System",
      description: "Designed and deployed scalable AWS cloud infrastructure using EKS and RDS. Developed backend microservices with .NET C# and Node.js. Integrated multiple payment gateways like Dah Sing Bank (MPGS) and ICBC.",
      tags: ["AWS", "EKS", "C#", "Node.js", "RabbitMQ", "PostgreSQL", "ReactJS", "GitOps"],
    },
    {
      title: "HKeToll System (易通行)",
      description: "Designed and implemented .NET C# microservices for toll processing with IoT devices. Architected MariaDB clusters for HA and implemented ETL processes using Apache Storm.",
      tags: [".NET C#", "MariaDB", "Apache Storm", "IoT", "SQL Server"],
    },
    {
      title: "Autotoll ETC E-Wallet System",
      description: "Developed backend PHP APIs and integrated Dah Sing Bank (MPGS). Built ASP.NET Web applications for business logic.",
      tags: ["PHP", "MySQL", "ASP.NET", "SQL Server"],
    },
    {
      title: "MaWan Access Control System",
      description: "Designed database schema and developed .NET C# Windows Forms applications for IoT access control device integration.",
      tags: [".NET C#", "SQL Server", "IoT"],
    },
    {
      title: "CLP – Pool Car Management System",
      description: "Designed database in MySQL and developed backend using ASP.NET MVC. Integrated Azure SSO for enterprise authentication.",
      tags: ["ASP.NET MVC", "MySQL", "Azure SSO", "Azure Cloud"],
    },
    {
      title: "Transport Information Kiosks (TIK)",
      description: "Designed database in MySQL and developed backend using PHP. Integrated with Transport Department API for real-time data.",
      tags: ["PHP", "MySQL", "API Integration"],
    },
  ],
  education: [
    {
      school: "Coventry University, England",
      degree: "Bachelor of Science with Honours in Business Information Technology",
      period: "Sep 2012 – Oct 2014",
    },
    {
      school: "IVE (Sha Tin), Hong Kong",
      degree: "Higher Diploma in Computer and Information Engineering",
      period: "Sep 2008 – July 2012",
    },
  ],
  certifications: [
    { name: "ITIL Foundation Certificate in IT Service Management", issuer: "PeopleCert", date: "Dec 2021" },
    { name: "ArcGIS Enterprise: Configure a Base Deployment", issuer: "Esri China (Hong Kong)", date: "May 2019" },
    { name: "Developing Web Apps with ArcGIS API for JavaScript", issuer: "Esri China (Hong Kong)", date: "March 2018" },
  ],
};

