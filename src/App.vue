<template>
  <div id="app">
    <header>
      <h1>Simple Web Calculator</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>


export default {
  data() {
    return {
      calculationHistory: []
    }
  },
  methods: {
    updateHistory(calculation) {
      this.calculationHistory.push(calculation);
    }
  }
}
</script>