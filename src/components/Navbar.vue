<template>
  <nav class="nav" aria-label="Primary">
    <div class="container nav-inner">
      <div class="brand">
        <div class="mark" aria-hidden="true">161</div>
        <span>Hong 161</span>
      </div>
      <div :class="['nav-links', { 'open': isMenuOpen }]" role="menubar">
        <a role="menuitem" href="#home" @click="$emit('close-menu')">
          <i class="fas fa-home"></i> Home
        </a>
        <a role="menuitem" href="#about" @click="$emit('close-menu')">
          <i class="fas fa-user"></i> About
        </a>
        <a role="menuitem" href="#skills" @click="$emit('close-menu')">
          <i class="fas fa-tools"></i> Skills
        </a>
        <a role="menuitem" href="#work" @click="$emit('close-menu')">
          <i class="fas fa-briefcase"></i> Work
        </a>
        <a role="menuitem" href="#contact" @click="$emit('close-menu')">
          <i class="fas fa-envelope"></i> Contact
        </a>
      </div>
      <div class="nav-cta">
        <button class="btn btn-ghost hamburger" 
                aria-label="Open menu" 
                :aria-expanded="isMenuOpen" 
                @click="$emit('toggle-menu')">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
        <a class="btn btn-primary" href="#contact" @click="$emit('close-menu')">
          <i class="fas fa-handshake"></i> Hire Me
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    isMenuOpen: Boolean
  },
  emits: ['toggle-menu', 'close-menu']
}
</script>