/**
 * 共有方法
 */

export default {
  methods: {
    jump (to,val) {
      if (this.$router) {
        this.$root.$refs.app.jumpAnime=    this.$root.$refs.app.front
        this.$router.push({ path: to, query: { value: val }})
      }
    },
    back (to) {
      if (this.$router) {
        this.$root.$refs.app.jumpAnime=    this.$root.$refs.app.backwayback
        this.$router.push(to);
      }
    }
  }
}
