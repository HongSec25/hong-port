<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="fade-in">Skills</h2>
      <p class="lead fade-in">Black & white UI. Zero distractions.</p>

      <!-- Skills Grid with Categories -->
      <div class="skills-grid stagger-children">
        <div class="skill-category" v-for="category in skillCategories" :key="category.title">
          <h3><i :class="category.icon"></i> {{ category.title }}</h3>
          <div class="chips" :aria-label="category.title">
            <span class="chip" v-for="skill in category.skills" :key="skill.name">
              <i :class="skill.icon"></i> {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Original Chips as Fallback -->
      <div class="chips fade-in" aria-label="Tools & Technologies" style="margin-top: 32px;">
        <span class="chip" v-for="skill in allSkills" :key="skill.name">
          <i :class="skill.icon"></i> {{ skill.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skillCategories: Array,
    allSkills: Array
  }
}
</script>