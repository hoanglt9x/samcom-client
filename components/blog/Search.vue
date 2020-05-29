<template>
  <aside class="single_sidebar_widget search_widget">
    <form class="formpad" action="#">
      <div class="form-group">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Bài viết cần tìm"
          />
        </div>
      </div>
      <button class="btn-danger w-100" type="submit">
        Tìm kiếm
      </button>
    </form>
  </aside>
</template>

<script>
export default {}
</script>

<style scoped>
.btn-danger {
  border-radius: 10px;
}
.formpad {
  padding: 5px;
}
.search_widget {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
}
</style>
