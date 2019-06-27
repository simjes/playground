<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="question"
      v-validate="'required'"
      data-vv-name="question"
      :disabled="isLoading"
      :loading="isLoading"
      :error-messages="errors.first('question')"
      label="Question"
      required
    />

    <div
      v-for="(answer, index) in answers"
      :key="index"
    >
      <v-text-field
        v-model="answers[index]"
        v-validate:answerLength="'min_value:2'"
        data-vv-name="answers"
        :disabled="isLoading"
        :loading="isLoading"
        :error-messages="errors.first('answers') && submitted ? 'At least two options are required to create a poll' : null"
        :label="'Poll option #' + (index + 1)"
        maxlength="15"
        v-on="(index === answers.length - 1) ? {keydown: onLastChange} : {}"
      />
    </div>

    <v-btn
      block
      color="secondary"
      type="submit"
      :loading="isLoading"
    >
      submit
    </v-btn>

    <feedback
      v-if="error"
      text="Unable to create poll"
    />
  </v-form>
</template>

<script src="./Create.ts"></script>
