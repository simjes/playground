<template>
  <div>
    <div>{{ results.question }}</div>
    <ul>
      <li v-for="a in results.answers" :key="a.id">
        {{ a.answer }} {{ a.votes }}
      </li>
    </ul>
  </div>
</template>

<script src="./Results.ts" />
