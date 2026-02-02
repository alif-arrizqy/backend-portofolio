export const portfolioData = {
  name: "Alif Ayatulloh Ar-Rizqy",
  title: "Backend Developer",
  introduction: "I'm a Backend Developer with 3+ years of experience working on projects like IoT systems, solar panel monitoring, and app development. Proficient in Python, JavaScript, and TypeScript, I continuously expand my skills by learning the latest technologies and deepening my understanding of software development.",
  location: "Bogor, Indonesia",
  education: {
    school: "Pakuan University",
    degree: "Bachelor of Computer Science",
    major: "Computer Science",
    started_at: "2017-09-01T08:00:00+07:00",
    ended_at: "2021-08-04T00:00:00+07:00",
    gpa: 3.9,
    achievements: [
      "Assistant Lecturer of Laboratory Workshop",
      "Instructor in electronics, hardware, and networking in Laboratorium Workshop",
      "Robotics Team in 2020",
      "Head of the Department of Hubungan Masyarakat dan Kerja Sama (HUMASKESMA) of Himpunan Mahasiswa Ilmu Komputer (HIMAKOM) in 2019"
    ]
  },
  skills: {
    programming_language: [
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "C++"
    ],
    backend: [
      "FastAPI",
      "Express.js",
      "NestJS",
      "Fastify",
      "Flask"
    ],
    frontend: [
      "React.js",
      "Vue.js",
      "Vite",
      "shadcn-ui",
      "Tailwind CSS"
    ],
    database: [
      "Supabase",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "MongoDB"
    ],
    communication_protocols: [
      "Modbus",
      "CAN Bus",
      "MQTT",
      "SNMP"
    ],    
    cloud_platforms: [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Netlify",
      "Cloudflare"
    ],
    hardware_iot: [
      "Raspberry Pi",
      "Arduino",
      "ESP32"
    ],
    tools: [
      "Postman",
      "Git",
      "Docker",
      "pm2",
      "Nginx"
    ]
  },
  experience: [
    {
      company: "PT. Sundaya Indonesia",
      role: "Backend Developer",
      location: "Bogor, Indonesia",
      status: "Full-time",
      work_model: "On-site",
      started_at: "2021-07-01",
      ended_at: null,
      responsibilities: [
        "Engineered scalable backend systems for IoT, solar panel monitoring, and battery management, supporting 24-hour monitoring with 99.9% uptime",
        "Architected and deployed RESTful APIs, improving API response time and optimal performance for critical services",
        "Engineered real-time IoT data processing pipelines using MQTT and Redis Streams",
        "Optimized database schemas, reducing average query latency and improving application response times",
        "Deployed and managed applications on Linux servers using Docker containerization and PM2 process management",
        "Configured and maintained web servers (Nginx)",
        "Automated routine operational tasks, reducing manual intervention, improving overall operational efficiency",
        "Designed and implemented microservices-based solutions for data processing, improving scalability"
      ],
      tech_stack: [
        "Python",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Docker",
        "PM2",
        "Nginx",
        "Raspberry Pi",
        "Linux",
        "MQTT",
        "SNMP",
        "Modbus",
        "CAN Bus"
      ]
    },
    {
      company: "SDIT Amal Mulia Depok",
      role: "Speaker / Instructor",
      location: "Depok, Indonesia",
      status: "Workshop",
      work_model: "On-site",
      started_at: "2025-10-01",
      ended_at: "2025-10-01",
      responsibilities: [
        "Delivered comprehensive workshop on basic hardware components and Arduino Uno programming",
        "Guided teachers in building automated systems: Automatic Clothesline System (rain sensor and servo motor integration) and Automatic Trash Can System (ultrasonic sensor and servo motor integration)",
        "Explained fundamental concepts of Arduino Uno programming and C++ basics",
        "Provided hands-on training with real hardware projects",
        "Created educational materials and documentation for students"
      ],
      tech_stack: [
        "C++",
        "Arduino Uno",
        "Rain Sensor",
        "Servo Motor",
        "Ultrasonic Sensor"
      ]
    },
    {
      company: "Lab Workshop - Universitas Pakuan",
      role: "Assistant Lecturer",
      location: "Bogor, Indonesia",
      status: "Part-time",
      work_model: "On-site",
      started_at: "2019-01-01",
      ended_at: "2021-07-01",
      responsibilities: [
        "Instructed students in electronics, hardware, and networking fundamentals in laboratory settings",
        "Provided hands-on training and technical support for various hardware projects"
      ],
      tech_stack: []
    }
  ],
  projects: [
    {
      name: "SENIKU E-Portfolio Platform",
      description: "Digital Art Learning & Portfolio Management System with comprehensive backend API, authentication system, file upload, and modern React frontend with portfolio management features.",
      repo_url: "https://github.com/alif-arrizqy/seniku-app-Eportfolio",
      started_at: "2025-12-30",
      ended_at: null,
      tech_stack: [
        "TypeScript",
        "Fastify",
        "React",
        "Vite",
        "Prisma",
        "Supabase",
        "Sharp",
        "JWT",
        "Tailwind CSS",
        "PM2",
        "Cloudflare",
        "Netlify"
      ]
    },
    {
      name: "Wedding Invitation",
      description: "Modern wedding invitation web application with RSVP system, guest management, wish/message board with real-time updates, and admin panel.",
      repo_url: "https://github.com/alif-arrizqy/elegant-wedding-invite",
      started_at: "2025-12-01",
      ended_at: "2025-12-31",
      tech_stack: [
        "TypeScript",
        "React",
        "Vite",
        "Supabase",
        "Framer Motion",
        "shadcn-ui",
        "Tailwind CSS"
      ]
    },
    {
      name: "ECC Master Dashboard",
      description: "Comprehensive web application for ECC (Energy Control Center) operations with automated SLA generation, reporting system, and real-time monitoring dashboards.",
      repo_url: "https://github.com/alif-arrizqy/ecc-master-dash",
      started_at: "2023-06-01",
      ended_at: null,
      tech_stack: [
        "TypeScript",
        "React",
        "Vite",
        "shadcn-ui",
        "Tailwind CSS",
        "Recharts",
        "PM2"
      ]
    },
    {
      name: "JSPRO Bakti Master",
      description: "Microservices-based SLA & Site Management System for Energy Control Center (ECC) team with automated daily reporting and SLA graph generation.",
      repo_url: "https://github.com/alif-arrizqy/jspro-bakti-master",
      started_at: "2023-06-01",
      ended_at: null,
      tech_stack: [
        "TypeScript",
        "Fastify",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "MQTT",
        "PM2",
        "Microservices Architecture"
      ]
    },
    {
      name: "JouleStore Pro PowerDesk",
      description: "Battery Management Web Application with comprehensive monitoring dashboard, real-time data visualization, and RESTful APIs integration.",
      repo_url: "https://github.com/alif-arrizqy/jspro-powerdesk",
      started_at: "2023-06-01",
      ended_at: null,
      tech_stack: [
        "Python",
        "Flask",
        "Redis",
        "PostgreSQL",
        "Docker",
        "Gunicorn",
        "Nginx",
        "Raspberry Pi"
      ]
    },
    {
      name: "EHub Universal - Battery Management System",
      description: "Unified battery & solar panel monitoring system with modular architecture, Redis Streams for real-time data, MQTT publisher, and SNMP agent integration.",
      repo_url: "",
      started_at: "2023-06-01",
      ended_at: null,
      tech_stack: [
        "Python",
        "Redis Streams",
        "MQTT",
        "Modbus",
        "CAN Bus",
        "SNMP",
        "SQLite",
        "Raspberry Pi",
        "Docker",
        "Systemd Services"
      ]
    },
    {
      name: "System Data API",
      description: "Comprehensive APIs for real-time solar panel electricity usage monitoring system with Modbus communication protocol and optimized performance.",
      repo_url: "",
      started_at: "2021-08-01",
      ended_at: "2023-06-30",
      tech_stack: [
        "Modbus",
        "Python",
        "FastAPI",
        "Redis",
        "MongoDB",
        "Docker",
        "CI/CD"
      ]
    },
    {
      name: "Battery Charging Automation",
      description: "Production automation system to automate battery charging processes with comprehensive logging and full battery status history.",
      repo_url: "https://github.com/alif-arrizqy/talis5-be-charging",
      started_at: null,
      ended_at: null,
      tech_stack: [
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Docker"
      ]
    },
    {
      name: "NOC Daily Reporting",
      description: "Designed and developed an internal tool to streamline daily reporting for the Network Operations Center (NOC) team.",
      repo_url: "https://github.com/alif-arrizqy/summary-sla",
      started_at: null,
      ended_at: null,
      tech_stack: [
        "TypeScript",
        "Express.js",
        "MySQL",
        "Docker"
      ]
    },
    {
      name: "Smart Farming Monitoring",
      description: "IoT-Based Agricultural Monitoring System with integrated hardware and software for real-time soil moisture and room temperature monitoring.",
      repo_url: "https://github.com/alif-arrizqy/smart_farming",
      started_at: "2023-03-01",
      ended_at: "2023-03-31",
      tech_stack: [
        "C++",
        "Python",
        "Flask",
        "FastAPI",
        "MongoDB"
      ]
    },
    {
      name: "RFID Damri",
      description: "IoT-Based Access Control System to simplify user registration and access control with single-card tap system for entry and exit tracking.",
      repo_url: "https://github.com/alif-arrizqy/frontend-rfid-damri.git",
      started_at: "2023-02-01",
      ended_at: "2023-02-28",
      tech_stack: [
        "C++",
        "Node.js",
        "Express.js",
        "Vue.js",
        "MongoDB"
      ]
    },
    {
      name: "Information System Administration",
      description: "Information system for correspondence and proposal documents.",
      repo_url: "https://github.com/alif-arrizqy/system-information-administration.git",
      started_at: null,
      ended_at: null,
      tech_stack: [
        "PHP",
        "CodeIgniter 4",
        "MySQL"
      ]
    }
  ],
  achievements: [
    {
      title: "Region and National Finalist",
      organization: "Kontes Robot Indonesia 2020",
      year: "2020"
    },
    {
      title: "Pelatihan Web Developer Junior",
      organization: "BPPTIK - Kominfo",
      year: null
    },
    {
      title: "Learn Python Core",
      organization: "Sololearn",
      year: null
    },
    {
      title: "Various Courses",
      organization: "Dicoding Academy",
      year: null
    }
  ],
  social: {
    github: "https://github.com/alif-arrizqy",
    linkedin: "https://www.linkedin.com/in/alif-ayatulloh-arrizqy/"
  },
  last_updated_at: "2026-02-02T00:00:00+07:00"
};