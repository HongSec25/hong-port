<template>
  <header id="home" class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow fade-in">Security Engineer • Frontend Developer</div>
        <h1 class="h1 fade-in">Secure by default. Clean by design.</h1>
        <p class="sub fade-in">I find vulnerabilities, design resilient systems, and ship fast, accessible UIs. This is a crisp black‑and‑white build focused on clarity and speed.</p>
        <div class="cta fade-in">
          <a class="btn btn-primary" href="#work" @click="$emit('close-menu')">
            <i class="fas fa-eye"></i> See Projects
          </a>
          <a class="btn btn-outline" href="#contact" @click="$emit('close-menu')">
            <i class="fas fa-envelope"></i> Contact
          </a>
        </div>
      </div>
      <aside class="mono-card fade-in" aria-label="Terminal preview">
        <div class="terminal">
          <div v-for="(line, index) in terminalLines" :key="index" :class="`terminal-line delay-${line.delay}`">
            <span :class="line.class">{{ line.text }}</span>
          </div>
        </div>
      </aside>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    terminalLines: Array
  },
  emits: ['close-menu']
}
</script>