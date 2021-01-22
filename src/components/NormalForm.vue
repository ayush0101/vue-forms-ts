<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control" v-model="registration.email" />
      <small class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        v-model="registration.password"
      />
    </div>
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        v-model="registration.checkMeOut"
      />
      <label class="form-check-label">Check me out</label>
    </div>
    <div class="form-group">
      <label>Example textarea</label>
      <textarea
        class="form-control"
        rows="3"
        v-model="registration.example"
      ></textarea>
    </div>

    <div class="form-group">
      <label>Country</label>
      <select class="form-control" v-model="registration.country">
        <option value="">--- Please Select ---</option>
        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

    <p>Exercise:</p>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        value="Every day"
        v-model="registration.exercise"
      />
      <label>Every day</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        value="Three times in a week"
        v-model="registration.exercise"
      />
      <label>Three times in a week</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        value="Weekly once"
        v-model="registration.exercise"
      />
      <label>Weekly once</label>
    </div>

    <hr />
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      registration: {
        email: "",
        password: "",
        checkMeOut: false,
        example: "",
        country: "",
        exercise: "",
      },
      countries: ["India", "USA", "Japan", "UK", "France"],
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.registration.email,
        password: this.registration.password,
        checkMeOut: this.registration.checkMeOut,
        example: this.registration.example,
        country: this.registration.country,
        exercise: this.registration.exercise,
      };

      console.log(formData);
    },
  },
});
</script>