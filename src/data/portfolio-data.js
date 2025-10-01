export const skillCategories = [
  {
    title: 'Security Tools',
    icon: 'fas fa-shield-alt',
    skills: [
      { name: 'Kali Linux', icon: 'fab fa-linux' },
      { name: 'Metasploit', icon: 'fas fa-bug' },
      { name: 'Wireshark', icon: 'fas fa-network-wired' },
      { name: 'Burp Suite', icon: 'fas fa-search' }
    ]
  },
  {
    title: 'Languages',
    icon: 'fas fa-code',
    skills: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'TypeScript', icon: 'fas fa-code' },
      { name: 'C++', icon: 'fab fa-cuttlefish' }
    ]
  },
  {
    title: 'Frontend',
    icon: 'fab fa-react',
    skills: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Vue', icon: 'fab fa-vuejs' },
      { name: 'Next.js', icon: 'fab fa-js-square' }
    ]
  },
  {
    title: 'Styling',
    icon: 'fas fa-paint-brush',
    skills: [
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'Sass', icon: 'fab fa-sass' },
      { name: 'Tailwind', icon: 'fas fa-wind' }
    ]
  }
]

export const allSkills = [
  { name: 'Kali Linux', icon: 'fab fa-linux' },
  { name: 'Metasploit', icon: 'fas fa-bug' },
  { name: 'Wireshark', icon: 'fas fa-network-wired' },
  { name: 'Burp Suite', icon: 'fas fa-search' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Vue', icon: 'fab fa-vuejs' },
  { name: 'Next.js', icon: 'fab fa-js-square' },
  { name: 'Tailwind', icon: 'fas fa-wind' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'Sass', icon: 'fab fa-sass' }
]

export const projects = [
  {
    heading: 'VULN·SCAN',
    title: 'Vulnerability Scanner',
    description: 'Full‑stack scanner for web apps &amp; APIs with rule packs and reports.',
    tags: ['Python', 'Flask', 'SQLite'],
    viewLink: 'ProjectShow.html',
    githubLink: '#'
  },
  {
    heading: 'N·I·D·S',
    title: 'Network Intrusion Detection',
    description: 'Realtime traffic monitoring and anomaly alerts.',
    tags: ['C++', 'Linux', 'PCAP'],
    viewLink: 'ProjectShow.html',
    githubLink: '#'
  },
  {
    heading: 'DASH',
    title: 'E‑Commerce Dashboard',
    description: 'Admin analytics, inventory, and orders with responsive charts.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    viewLink: 'ProjectShow.html',
    githubLink: '#'
  },
  {
    heading: 'BIZ',
    title: 'Business Website',
    description: 'Corporate site for services and lead gen with modern branding.',
    tags: ['Vue', 'Tailwind', 'Node.js'],
    viewLink: 'ProjectShow.html',
    githubLink: '#'
  }
]

export const terminalLines = [
  { text: '$ nmap -sV target.local', class: 'prompt', delay: 0 },
  { text: '  # services', class: 'comment', delay: 0 },
  { text: '$ msfconsole -r rules.rc', class: 'prompt', delay: 1 },
  { text: '  # policies loaded', class: 'comment', delay: 1 },
  { text: '$ npm run build && npm run scan', class: 'prompt', delay: 2 },
  { text: '✔ vitals: 98/100  ✔ vulns: none', class: '', delay: 3 }
]

export const floatingSkills = [
  'fab fa-linux', 'fas fa-bug', 'fas fa-network-wired', 'fas fa-search',
  'fab fa-python', 'fab fa-js-square', 'fas fa-code', 'fab fa-cuttlefish',
  'fab fa-react', 'fab fa-vuejs', 'fab fa-js-square', 'fab fa-css3-alt',
  'fab fa-sass', 'fas fa-wind', 'fas fa-shield-alt', 'fas fa-code',
  'fas fa-terminal', 'fas fa-database', 'fas fa-server', 'fas fa-lock'
]
