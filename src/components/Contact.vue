<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="fade-in">Contact</h2>
      <p class="lead fade-in">Have a project or security concern? Let's talk.</p>

      <div class="contact-grid stagger-children">
        <div class="card">
          <h3>Get In Touch</h3>
          <ul class="list">
            <li><i class="fas fa-envelope"></i> <a href="mailto:hongtsmkh@gmail.com" rel="noopener noreferrer">hongtsmkh@gmail.com</a></li>
            <li><i class="fas fa-phone"></i> <a href="tel:+855963880095" rel="noopener noreferrer">(+855) 96 388 0095</a></li>
            <li><i class="fas fa-map-marker-alt"></i> Phnom Penh, Cambodia</li>
          </ul>
        </div>
        <div class="card">
          <h3>Send a Message</h3>
          <form @submit.prevent="$emit('submit-form')" novalidate>
            <div>
              <label for="name"><i class="fas fa-user"></i> Name</label>
              <input id="name" :value="form.name" @input="$emit('update-form', 'name', $event.target.value)" type="text" placeholder="Your name" required maxlength="100" />
            </div>
            <div>
              <label for="email"><i class="fas fa-envelope"></i> Email</label>
              <input id="email" :value="form.email" @input="$emit('update-form', 'email', $event.target.value)" type="email" placeholder="you@example.com" required maxlength="100" />
            </div>
            <div>
              <label for="message"><i class="fas fa-comment"></i> Message</label>
              <textarea id="message" :value="form.message" @input="$emit('update-form', 'message', $event.target.value)" placeholder="How can I help?" required maxlength="1000"></textarea>
            </div>
            <div class="help">Demo form (client‑side only). Use the email above for real contact.</div>
            <div style="display:flex; gap:10px; align-items:center;">
              <button class="btn btn-primary" type="submit">
                <i class="fas fa-paper-plane"></i> Send
              </button>
              <span id="form-status" class="status" role="status" aria-live="polite">{{ formStatus }}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    form: Object,
    formStatus: String
  },
  emits: ['update-form', 'submit-form', 'close-menu']
}
</script>