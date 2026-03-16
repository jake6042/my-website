export const projects = [
    {
      title: "A Better Dashcam Viewer",
      tagline: "Desktop app for Tesla dashcam footage with telemetry overlay",
      description: "Developed an Electron-based desktop application that parses Tesla dashcam MP4 files, extracts embedded telemetry data (speed, autopilot status, GPS, etc.), and exports videos with real-time overlay visualization. Features privacy-first local processing and smart memory optimization.",
      problem: "Tesla dashcam footage contains valuable embedded telemetry data (speed, autopilot state, GPS coordinates) that's invisible during playback or download, making it difficult to analyze driving events or create informative videos.",
      solution: "Modified Tesla's existing MP4 parser to extract SEI metadata using Protobuf, synchronized overlay rendering system, and FFmpeg-based export pipeline with smart change detection to optimize performance.",
      role: "Solo Developer",
      technologies: ["Electron", "JavaScript", "Node.js", "Canvas API", "Protobuf.js", "FFmpeg"],
      features: [
        "Real-time synchronized overlay (speed, gear, autopilot, GPS, turn signals)",
        "Smart change detection reduces memory usage from thousands of frames to ~100 change points",
        "FFmpeg video export with overlay compositing",
        "CSV metadata export for data analysis",
        "Configurable overlay elements (toggle individual components)",
        "Privacy-first: 100% local processing, no data upload"
      ],
      metrics: "Reduces memory footprint by 95% via change detection, supports HW3+ vehicles with Tesla Software 2025.44.25+",
      hasImage: true,
      images: ["/tesla1.png", "/tesla2.png", "/tesla3.png"],
      hasGithubUrl: true,
      githubUrl: "https://github.com/jake6042/a-better-dashcam-viewer",
      hasLiveUrl: false,
      liveUrl: "",
      color: "#FF6B35"
    },
    {
      title: "Minecraft (Java) Waypoint Plugins",
      tagline: "Global and personal teleportation waypoints for seamless server navigation",
      description: "A Paper/Bukkit plugin that enables players to create, manage, and teleport to persistent global and personal waypoints across the Minecraft server. Built with a focus on simplicity and user experience, it provides an intuitive command system with tab completion and permission-based access control.",
      problem: "My friends and I have a Minecraft server, and we struggled with navigating a large world. We wasted far too much time traveling long distances, and we wanted this quality of life improvement as we began to get too busy to play together often.",
      solution: "A lightweight, permission-based waypoint system that allows authorized players to create named teleportation points at any location. All waypoints are globally accessible, stored persistently in YAML format, and include metadata like creator information and coordinates for easy management.",
      role: "Solo Developer",
      technologies: ["Java", "Paper API", "Maven", "YAML", "Bukkit API", "Kyori Adventure"],
      features: [
        "Create persistent global waypoints at current location",
        "Delete waypoints with permission checks",
        "List all waypoints with coordinates and creator info",
        "Instant teleportation to any waypoint",
        "Smart tab completion for commands and waypoint names",
        "Permission-based access control (use, create, delete)",
        "Input validation (name length, character restrictions)",
        "Automatic data persistence and backup"
      ],
      metrics: "Sub-second waypoint creation and retrieval, zero-dependency design, 100% persistence on server restart, support for unlimited waypoints",
      hasImage: false,
      images: ["/codesync1.png"],
      hasGithubUrl: true,
      githubUrl: "",
      hasLiveUrl: false,
      liveUrl: "",
      color: "#00D9FF"
    },
        {
      title: "Discord Support Ticket & Order Management Bot",
      tagline: "Automated customer support and order fulfillment system for products",
      description: "A comprehensive Discord bot that manages multi-category support tickets, WooCommerce order integration, and shipment tracking. The bot streamlines customer support workflows, automates order notifications, and maintains complete ticket transcripts with media archiving.",
      problem: "A friend's business faced challenges managing customer support across multiple product categories, tracking order fulfillment, and maintaining organized support records. Manual ticket management and order tracking leads to delayed responses, lost information, and poor customer experience.",
      solution: "An automated Discord bot that creates organized support channels based on ticket type, integrates with WooCommerce to track order status and shipments and send automated updates to a user's ticket, sends tracking information, and generates comprehensive HTML transcripts with media archives. Includes role-based permissions, user moderation tools, and a complete audit trail.",
      role: "Lead Developer (team of 2)",
      technologies: ["Node.js", "Discord.js", "WooCommerce REST API", "Archiver (ZIP), fs/promises"],
      features: [
        "Multi-Category Ticket System",
        "WooCommerce Integration",
        "Automated Shipment Notifications",
        "HTML Transcript Generation with embedded media",
        "Permission System",
        "User and Content Moderation",
        "Order ID Tracking"
      ],
      metrics: "Handles 100+ orders per batch in shipment processing, generates complete transcripts with unlimited message history and media attachments, rate-limited channel updates (2.5s delay) to prevent API throttling, processes multiple concurrent tickets per user",
      hasImage: false,
      images: ["/codesync1.png"],
      hasGithubUrl: false,
      githubUrl: "",
      hasLiveUrl: false,
      liveUrl: "",
      color: "#00D9FF"
    },
  ];
  
  export const skills = {
    "Languages": ["JavaScript", "Python", "Java", "SQL"],
    "Frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "REST APIs"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL"],
    "DevOps": ["Docker", "AWS", "Git", "Linux"],
    "Other": ["Cooking", 'Completed Guitar Hero 3 on "Expert"']
  };
  
  export const personalInfo = {
    name: "Jacob Roberts",
    title: "Software Engineer",
    email: "jacobroberts1008@gmail.com",
    github: "https://github.com/jake6042",
    linkedin: "https://linkedin.com/in/jacob-roberts-a670471b4",
    githubUsername: "@jake6042",
    linkedinUsername: "jacob-roberts-a670471b4"
  };