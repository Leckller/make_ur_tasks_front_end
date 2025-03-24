<template>
  <router-view/>
</template>

<style>
  /* PALETTE */
  /*
  --indigo-dye: #08415cff;
  --persian-red: #cc2936ff;
  --tea-rose-red: #ebbab9ff;
  --blue-munsell: #388697ff;
  --aquamarine: #b5ffe1ff;
  */

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #B5FFE1;
  }

  *::placeholder {
    color: #B5FFE1;
  }

  body{
    background-color: #EBBAB9;
  }

  button, textarea, input {
    border: none;
    padding: 8px;
    border-radius: 16px;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  button:disabled, input:disabled {
    cursor: not-allowed;
  }
</style>
