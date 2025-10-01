<template>
  <div id="app">
    <!-- Floating Skills Background -->
    <div class="floating-skills" id="floating-skills"></div>

    <Navbar 
      :isMenuOpen="isMenuOpen"
      @toggle-menu="toggleMenu"
      @close-menu="closeMenu"
    />
    
    <Hero 
      :terminalLines="terminalLines"
      @close-menu="closeMenu" 
    />
    
    <About />
    
    <Skills 
      :skillCategories="skillCategories"
      :allSkills="allSkills"
    />
    
    <Projects 
      :projects="projects"
    />
    
    <Contact 
      :form="form"
      :formStatus="formStatus"
      @update-form="updateForm"
      @submit-form="submitForm"
      @close-menu="closeMenu"
    />
    
    <Footer 
      :currentYear="currentYear"
      @close-menu="closeMenu"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { skillCategories, allSkills, projects, terminalLines } from './data/portfolio-data'
import { initScrollAnimations, initFloatingSkills, sanitizeInput, isValidEmail } from './utils/animations'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  },
  setup() {
    const isMenuOpen = ref(false)
    const currentYear = ref(new Date().getFullYear())
    const form = ref({
      name: '',
      email: '',
      message: ''
    })
    const formStatus = ref('')

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const updateForm = (field, value) => {
      form.value[field] = value
    }

    const submitForm = () => {
      formStatus.value = ''
      
      const name = sanitizeInput(form.value.name)
      const email = sanitizeInput(form.value.email)
      const message = sanitizeInput(form.value.message)
      
      if (!name || !email || !message) { 
        formStatus.value = 'Please fill all fields.' 
        return 
      }
      
      if (name.length > 100 || email.length > 100 || message.length > 1000) {
        formStatus.value = 'Input too long.' 
        return
      }
      
      if (!isValidEmail(email)) { 
        formStatus.value = 'Enter a valid email.' 
        return 
      }
      
      formStatus.value = 'Message sent (demo). I will reply via email.' 
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    }

    onMounted(() => {
      initScrollAnimations()
      initFloatingSkills()
    })

    return {
      isMenuOpen,
      currentYear,
      form,
      formStatus,
      skillCategories,
      allSkills,
      projects,
      terminalLines,
      toggleMenu,
      closeMenu,
      updateForm,
      submitForm
    }
  }
}
</script>