<template>
  <aside class="widget widget-categories">
    <h4 class="widget-title"><span>Chủ đề</span></h4>
    <div class="widget-content">
      <ul>
        <!-- <li v-for="item in categoriAll" :key="item.key" class="cat-item">
          <nuxt-link :to="`/categories/${categorieSlug(item.key)}`"
            >{{ categorieName(item.key)
            }}<span class="count">{{
              item.connection.aggregate.count
            }}</span></nuxt-link
          >
        </li> -->
       <!-- <li v-for="item in categoriAll" :key="item.key" class="cat-item">
          <nuxt-link to="/"
            >HH<span class="count">{{
              item.connection.aggregate.count
            }}</span></nuxt-link
          >
        </li> -->
        <!-- 
        <li class="cat-item">
          <a href="#">Viễn thám<span class="count">14</span></a>
        </li>
        <li class="cat-item">
          <a href="#"
            >Trắc địa<span class="count">
              {{
                articlesConnection.groupBy.category[0].connection.aggregate
                  .count
              }}
            </span></a
          >
        </li>
        <li class="cat-item">
          <a href="#">Cơ sở dữ liệu<span class="count">10</span></a>
        </li>
        <li class="cat-item">
          <a href="#">Bản đồ<span class="count">6</span></a>
        </li>
        <li class="cat-item">
          <a href="#">Bay chụp ảnh<span class="count">50</span></a>
        </li>
        <li class="cat-item">
          <a href="#">In ấn<span class="count">65</span></a>
        </li> -->
      </ul>
    </div>
  </aside>
</template>

<script>
import articlesGroupBy from '~/apollo/queries/arcticle/ArticlesGroupBy.gql'
import categoriAll from '~/apollo/queries/category/categories.gql'
export default {
  data() {
    return {
      articlesGroupBy: null,
      categoriesAll: null
    }
  },
  computed: {
    categoriAll() {
      return this.articlesGroupBy.data.articlesConnection.groupBy.category
    }
  },
  async beforeCreate() {
    this.articlesGroupBy = await this.$apollo.query({
      query: articlesGroupBy
    })
    this.categoriesAll = await this.$apollo.query({
      query: categoriAll
    })
  }
  // apollo: {
  //   articlesConnection: {
  //     prefetch: true,
  //     query: articlesGroupBy
  //   },
  //   categories: {
  //     prefetch: true,
  //     query: categoriAll
  //   }
  // },
  // methods: {
  //   categorieName(myID) {
  //     return this.categoriesAll.categories.find(
  //       (element) => element.id === myID
  //     ).name
  //   },
  //   categorieSlug(myID) {
  //     return this.categoriesAll.categories.find(
  //       (element) => element.id === myID
  //     ).Slug
  //   }
  // }
}
</script>

<style scoped></style>
