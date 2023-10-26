<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import 'wowjs/css/libs/animate.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/vendor/font-awesome/css/all.min.css'
  import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
  import '@/assets/css/main.css'
  import '@/assets/vendor/glyphter/css/Glyphter.css'

  export default {
    name: 'App'
  }
</script>

<style>
  .voice__slider-container {
        overflow: hidden;
        user-select: none;
    }

    .cmn-pagination {
        display: flex;
        gap: 6px;
        align-items: center;
        justify-content: flex-end;
    }

    .cmn-pagination .swiper-pagination-bullet {
        width: 28px;
        height: 28px;
        background-color: transparent;
        border: 1px solid transparent;
        position: relative;
        transition: all 0.4s ease-in-out;
        border-radius: 50%;
        opacity: 1;
    }

    .cmn-pagination .swiper-pagination-bullet::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: #8fffec;
        border-radius: 50%;
    }

    .home-light .cmn-pagination .swiper-pagination-bullet::before {
        background-color: #4569e7;
    }

    .cmn-pagination .swiper-pagination-bullet-active {
        background-color: transparent;
        border: 1px solid #8fffec;
    }

    .home-light .cmn-pagination .swiper-pagination-bullet-active {
        background-color: transparent;
        border: 1px solid #4569e7;
    }
</style>