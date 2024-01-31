<template>
  <div id="app">
    <header>
      <h1>Simple Web Calculator</h1>
    </header>
    <main>
      <section class="calculator-section">
        <Calculator @new-calculation="updateHistory"/>
      </section>
      <section class="history-section">
        <CalculationHistory :calcHistory="calculationHistory"/>
      </section>
    </main>
  </div>
</template>

<script>
import Calculator from "../../vue-calculator/src/components/Calculator.vue"
import CalculationHistory from "../../vue-calculator/src/components/CalculationHistory.vue"

export default {
  components: {
    Calculator,
    CalculationHistory
  },
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