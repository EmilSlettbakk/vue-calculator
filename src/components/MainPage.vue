<template>
  <div class="main-page-content">
    <header class="header-section">
      <router-link class="kontaktskjema-btn" to="/kontaktskjema">Go to Kontaktskjema</router-link>
    </header>
    <section class="calculator-section">
      <Calculator @new-calculation="updateHistory"/>
    </section>
    <section class="history-section">
      <CalculationHistory :calcHistory="calculationHistory"/>
    </section>
  </div>
</template>

<script>
import Calculator from './Calculator.vue';
import CalculationHistory from './CalculationHistory.vue';

export default {
  components: {
    Calculator,
    CalculationHistory
  },
  data() {
    return {
      calculationHistory: []
    };
  },
  methods: {
    updateHistory(newCalculation) {
      this.calculationHistory.push(newCalculation);
    }
  }
}
</script>

<style scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.kontaktskjema-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  position: fixed;
  top: 10px;
  left: 10px;
}

.calculator-section, .history-section {
  min-width: 0;
  width: 100%;
}

@media (min-width: 800px) {
  .main-page-content {
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 1rem;
  }

  .calculator-section, .history-section {
    width: 40%;
    min-width: 0;
  }

  .history-section {
    max-height: 380px;
    overflow-y: auto;
  }
}
</style>