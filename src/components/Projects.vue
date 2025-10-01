<template>
  <section id="work" class="section">
    <div class="container">
      <h2 class="fade-in">Work</h2>
      <p class="lead fade-in">Recent projects across security &amp; front‑end.</p>

      <div class="projects stagger-children">
        <article class="project" v-for="project in projects" :key="project.title">
          <div class="project-head">{{ project.heading }}</div>
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="actions">
              <a class="btn btn-primary" :href="project.viewLink" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i> View Project
              </a>
              <a class="btn btn-outline" :href="project.githubLink" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    projects: Array
  }
}
</script>