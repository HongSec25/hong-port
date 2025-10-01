<template>
  <footer>
    <div class="container foot">
      <div>© {{ currentYear }} <strong>Hong 161</strong></div>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <a class="btn btn-sm btn-outline" href="#home" @click="$emit('close-menu')"><i class="fas fa-home"></i> Home</a>
        <a class="btn btn-sm btn-outline" href="#about" @click="$emit('close-menu')"><i class="fas fa-user"></i> About</a>
        <a class="btn btn-sm btn-outline" href="#skills" @click="$emit('close-menu')"><i class="fas fa-tools"></i> Skills</a>
        <a class="btn btn-sm btn-outline" href="#work" @click="$emit('close-menu')"><i class="fas fa-briefcase"></i> Work</a>
        <a class="btn btn-sm btn-outline" href="#contact" @click="$emit('close-menu')"><i class="fas fa-envelope"></i> Contact</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    currentYear: Number
  },
  emits: ['close-menu']
}
</script>