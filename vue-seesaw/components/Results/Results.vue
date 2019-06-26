<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <h1>{{ results.question }}</h1>

    <bar-chart
      v-if="poll.answers"
      :options="chartOptions"
      :chart-data="chartData"
    />
  </v-layout>
</template>

<script src="./Results.ts" />
