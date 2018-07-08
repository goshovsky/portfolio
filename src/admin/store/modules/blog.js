const posts = {
  actions: {
    addPost(store, blog) {
      this.$axios.post("/posts", blog).then(response => {});
    }
  }
};

export default posts;
