<template>
  <div class="kontaktskjema-container">
    <h1>Kontaktskjema</h1>
    <router-link to="/">
      <button class="calculator-btn">Back to Calculator</button>
    </router-link>
    <form @submit.prevent="submitForm" class="kontaktskjema-form">
      <div class="form-row">
        <div class="form-group">
          <label>Name:</label>
          <input v-model.trim="localName" type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input v-model.trim="localEmail" type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label>Feedback:</label>
          <textarea v-model.trim="feedback" required class="feedback-textarea"></textarea>
        </div>
      </div>
      <button type="submit" :disabled="submitButtonDisabled">Submit</button>
      <button @click="autofill" type="button">Autofill</button>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import axios from "axios";

export default {
  data() {
    return {
      feedback: '',
      successMessage: '',
      localName: '',
      localEmail: ''
    };
  },
  computed: {
    ...mapState(['name', 'email']),
    submitButtonDisabled() {
      return !(this.localName && this.emailCheck() && this.feedback);
    },
  },
  methods: {
    autofill() {
      this.localName = this.name;
      this.localEmail = this.email;
    },
    emailCheck() {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.localEmail).toLowerCase());
    },
    ...mapActions(['updateUserInfo']),
    submitForm() {
      console.log("Submitting form");
      this.updateUserInfo({name: this.localName, email: this.localEmail});
      axios.get('http://localhost:3000/response')
          .then((response) => {
            console.log(response);
            this.successMessage = response.data[0].message;
            this.feedback = '';
            this.localName = '';
            this.localEmail = '';
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          })
          .catch((error) => {
            console.log("Error: ", error);
            this.successMessage = 'An error occurred.';
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          });
    },
  }
}

</script>

<style scoped>
.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
}

.form-row {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
}

.feedback-textarea {
  width: auto;
  height: 100px;
  resize: vertical;
}
.success-message {
  color: green;
}

.calculator-btn {
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
</style>