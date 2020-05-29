<template>
  <section id="team">
    <div class="container">
      <div class="section-header">
        <h3>{{ $t('links.Team').toUpperCase() }}</h3>
        <hr />
      </div>
      <div class="row justify-content-md-center">
        <component-card-team
          hinh-anh="images/Team/Dinh.jpg"
          ten="Nguyễn An Định"
          vi-tri="Chủ tịch"
        />
      </div>
      <div class="row">
        <component-card-team
          hinh-anh="images/Team/Ha.jpg"
          ten="Nguyễn Đức Hà"
          vi-tri="Phó giám đốc"
        />
        <component-card-team
          hinh-anh="images/Team/Son.jpg"
          ten="Phạm Ngọc Sơn"
          vi-tri="Phó giám đốc"
        />
        <component-card-team
          hinh-anh="images/Team/DuongDanhThiet.jpg"
          ten="Dương Danh Thiết"
          vi-tri="Phó giám đốc"
        />
        <component-card-team
          hinh-anh="images/Team/Duc.jpg"
          ten="Nguyễn Minh Đức"
          vi-tri="Phó giám đốc"
        />
      </div>
    </div>
  </section>
</template>

<script>
import componentCardTeam from '~/components/home/CardTeam.vue'
export default {
  components: {
    componentCardTeam
  }
}
</script>

<style scoped>
#team {
  padding: 60px 0;
}
</style>
