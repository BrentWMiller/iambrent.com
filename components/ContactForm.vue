<template>
<div id="contact">
<form name="contact" netlify class="space-y-8 code-block">
<p class="code-block">// Get in touch</p>
<pre>const <span class="text-lightula-green dark:text-darkula-green">form</span> = {
  <label>email:   "<code-input type="email" placeholder="Enter your email" name="email" min-size="20" />"</label>
  <label>message: "<code-input type="text" placeholder="Enter your message" name="message" min-size="20" />"</label>
}</pre>

<button type="submit" class="button button-function">
  sendEmail<span class="text-lightula-blue dark:text-darkula-blue">(<span class="text-lightula-green dark:text-darkula-green">form</span>)</span>
</button>
</form>
</div>
</template>

<script>
import CodeInput from './CodeInput.vue'
export default {
  components: { CodeInput },

}
</script>

<style>

</style>