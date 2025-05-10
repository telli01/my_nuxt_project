<template>
  <div>
    <h1>Oops!</h1>
    <p>
      <strong>Error:</strong> {{ useError().value?.statusCode }} - Authentication failed
    </p>
  </div>
</template>