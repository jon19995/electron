<template>
    <main>
      <h1>Users:</h1>
      <br><br>

      <ul>
        <li v-for="user in users">
          username: {{ user.username }}<br>
          password: {{ user.password }}
          <br><br>
        </li>
      </ul>
    </main>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        Promise.all([this.getUsers()])
          .then(([users]) => {
            this.users = users.data;
          });
      },
      getUsers() {
        return this.$http.get('http://localhost:3000/users');
      },
    },
  };
</script>

<style>
</style>
