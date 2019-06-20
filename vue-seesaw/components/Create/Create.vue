<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submit">
    <v-text-field
      v-model="question"
      label="Question"
      required
    />

    <div v-for="(answer, index) in answers" :key="index">
      <v-text-field
        v-model="answers[index]"
        :label="'Poll option #' + (index + 1)"
        v-on="(index === answers.length -1 ) ? {keydown: onLastChange} : {}"
      />
    </div>

    <v-btn type="submit">
      submit
    </v-btn>
  </v-form>
</template>

<script src="./Create.ts"></script>
