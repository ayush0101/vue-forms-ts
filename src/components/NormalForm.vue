<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="registration.email" />
        <small
          class="form-text text-danger"
          v-if="validationErrors.email.length > 0"
          >{{ validationErrors.email[0] }}</small
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

    <hr />

    <button class="btn btn-danger" @click="deleteForm">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RestService from "@/services/RestService";
import { RegistrationForm } from "@/models/Registration.model";

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
      validationErrors: {
        email: [] as string[],
        password: [] as string[],
        example: [] as string[],
        country: [] as string[],
        exercise: [] as string[],
      },
    };
  },
  watch: {
    registration: {
      handler(newValue) {
        //validate email
        if (!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(newValue.email)) {
          this.validationErrors.email.push("Not a valid email");
        } else {
          this.validationErrors.email = [];
        }

        //validate country
        if (newValue.country.trim().length === 0) {
          this.validationErrors.country.push("Select a country");
        } else {
          this.validationErrors.country = [];
        }
      },
      deep: true,
    },
  },
  methods: {
    onSubmit() {
      const formData: RegistrationForm = {
        email: this.registration.email,
        password: this.registration.password,
        checkMeOut: this.registration.checkMeOut,
        example: this.registration.example,
        country: this.registration.country,
        exercise: this.registration.exercise,
      };

      console.log("Raw Data", this.registration);

      RestService.updateCustomer(formData)
        .then((response) => console.log("Success", response))
        .catch((error) => console.log("Error", error))
        .finally(() => console.log("Completed"));
    },
    deleteForm() {
      RestService.deleteCustomer(5874)
        .then((response) => console.log("Delete Success", response))
        .catch((error) => console.log("Delete Error", error))
        .finally(() => console.log("Delete Completed"));
    },
  },
});
</script>