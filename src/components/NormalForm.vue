<template>
  <form>
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control" />
      <small class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" />
      <label class="form-check-label">Check me out</label>
    </div>
    <div class="form-group">
      <label>Example textarea</label>
      <textarea class="form-control" rows="3"></textarea>
    </div>

    <div class="form-group">
      <label>Country</label>
      <select class="form-control">
        <option>Default select</option>
      </select>
    </div>

    <p>Exercise:</p>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        value="option1"
      />
      <label>Every day</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        value="option2"
      />
      <label>Three times in a week</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        value="option3"
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
      message: "Hi there!",
    };
  },
});
</script>