<template>
  <div class="calculator">
    <input v-model="input" class="calculator-screen" disabled>

    <div class="calculator-keys">
      <button class="operator all-clear" @click="clearInput">AC</button>
      <button @click="appendInput(7)">7</button>
      <button @click="appendInput(8)">8</button>
      <button @click="appendInput(9)">9</button>
      <button class="operator" @click="storeOperator('+')">+</button>
      <button @click="appendInput(4)">4</button>
      <button @click="appendInput(5)">5</button>
      <button @click="appendInput(6)">6</button>
      <button class="operator" @click="storeOperator('-')">-</button>
      <button @click="appendInput(1)">1</button>
      <button @click="appendInput(2)">2</button>
      <button @click="appendInput(3)">3</button>
      <button class="operator" @click="storeOperator('*')">*</button>
      <button @click="appendInput(0)">0</button>
      <button @click="appendInput('.')">.</button>
      <button class="equal-sign operator" @click="calculateResult()">=</button>
      <button class="operator" @click="storeOperator('/')">/</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      prevValue: '',
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    clearInput() {
      this.input = '';
    },
    appendInput(num) {
      if (this.operatorClicked) {
        this.input = '';
        this.operatorClicked = false;
      }

      if (num === '.' && this.input.includes('.')) {
        return;
      }

      this.input = `${this.input}${num}`;
    },
    storeOperator(op) {
      this.prevValue = this.input;
      this.operator = op;
      this.operatorClicked = true;
    },
    calculateResult() {
      let result = 0;
      const prev = parseFloat(this.prevValue);
      const current = parseFloat(this.input);

      if(Number.isNaN(prev) || Number.isNaN(current)) {
        this.input = 'ERROR NaN VALUE';
        return;
      }
      if(this.operator === '/' && current === 0){
        this.input = 'ERROR DIVE BY 0';
        return;
      }
      switch (this.operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }
      let toLog = `${this.prevValue} ${this.operator} ${this.input} = ${result}`;

      this.input = result;

      this.$emit('new-calculation', toLog);

      this.input = '';
      this.operator = null;
    }
  }
}
</script>

<style>
.calculator {
  grid-column: 1;
  max-width: 320px;
  border: 1px solid #ccc;
  background: rgba(51, 51, 51, 0.7);
  border-radius: 10px;
  padding: 20px;
  margin-left: auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
}

.calculator-screen {
  width: 100%;
  font-size: 30px;
  padding: 10px;
  text-align: right;
  margin-bottom: 20px;
  color: white;
  background-color: black;
}

.calculator-keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.calculator-keys button {
  padding: 20px;
  font-size: 20px;
}
</style>