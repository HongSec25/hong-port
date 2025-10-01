export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        
        if (entry.target.classList.contains('stagger-children')) {
          const children = entry.target.children
          Array.from(children).forEach((child, index) => {
            if (child.nodeType === Node.ELEMENT_NODE) {
              child.style.transitionDelay = `${index * 0.1}s`
            }
          })
        }
      }
    })
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  document.querySelectorAll('.fade-in, .stagger-children').forEach(el => {
    observer.observe(el)
  })
}

export const initFloatingSkills = () => {
  const container = document.getElementById('floating-skills')
  const skills = [
    'fab fa-linux', 'fas fa-bug', 'fas fa-network-wired', 'fas fa-search',
    'fab fa-python', 'fab fa-js-square', 'fas fa-code', 'fab fa-cuttlefish',
    'fab fa-react', 'fab fa-vuejs', 'fab fa-js-square', 'fab fa-css3-alt',
    'fab fa-sass', 'fas fa-wind', 'fas fa-shield-alt', 'fas fa-code',
    'fas fa-terminal', 'fas fa-database', 'fas fa-server', 'fas fa-lock'
  ]

  const allowedClasses = ['fab', 'fas']
  const sanitizedSkills = skills.filter(skill => {
    const parts = skill.split(' ')
    return parts.every(part => allowedClasses.includes(part) || part.startsWith('fa-'))
  })

  const createFloatingSkill = () => {
    if (!container) return
    
    const skill = document.createElement('div')
    skill.className = 'floating-skill'
    
    const randomSkill = sanitizedSkills[Math.floor(Math.random() * sanitizedSkills.length)]
    
    const icon = document.createElement('i')
    randomSkill.split(' ').forEach(cls => {
      if (cls) icon.classList.add(cls)
    })
    skill.appendChild(icon)
    
    const left = Math.random() * 100
    const duration = 15 + Math.random() * 25
    const delay = Math.random() * 5
    const size = 0.8 + Math.random() * 1.2
    
    skill.style.left = `${left}%`
    skill.style.animationDuration = `${duration}s`
    skill.style.animationDelay = `${delay}s`
    skill.style.fontSize = `${size}rem`
    skill.style.opacity = `${0.05 + Math.random() * 0.1}`
    
    container.appendChild(skill)
    
    setTimeout(() => {
      if (skill.parentNode === container) {
        container.removeChild(skill)
      }
    }, (duration + delay) * 1000)
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 15; i++) {
      setTimeout(createFloatingSkill, i * 500)
    }
    
    setInterval(createFloatingSkill, 1000)
  }

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
}

export const sanitizeInput = (input) => {
  return String(input || '').trim().replace(/[<>]/g, '')
}

export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailRegex.test(email)
}