<template>
  <footer class="footer footer-three section pb-0">
    <div class="container">
      <div
        class="row items-gap align-items-center top-break wow fadeInUp"
        data-wow-duration="600ms"
        data-wow-delay="300ms"
      >
        <div class="col-12 col-lg-3">
          <div class="logo">
            <router-link to="/">
              <img :src="LogoURL" alt="Image" />
            </router-link>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
          <p>
            The Background Remover uses artificial intelligence to detect the
            subject of the photo, mask the image, and remove the background. No
            additional work from you is required!
          </p>
        </div>
        <div class="col-12 col-lg-3">
          <div class="social justify-content-center justify-content-lg-end">
            <a href="https://www.facebook.com" aria-label="social media">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" aria-label="social media">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="social media">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="social media">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <hr id="footer-break" />
      <div class="row items-gap-two">
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="footer__single wow fadeInUp" data-wow-duration="600ms">
            <h5 class="h5">photo Editing</h5>
            <ul>
              <li>
                <a href="javascript:void(0)"> Image Cropper</a>
              </li>
              <li>
                <a href="javascript:void(0)"> Image Resizer</a>
              </li>
              <li>
                <a href="javascript:void(0)"> Image Rotator</a>
              </li>
              <li>
                <a href="javascript:void(0)"> Image Flipper</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <div
            class="footer__single wow fadeInUp"
            data-wow-duration="600ms"
            data-wow-delay="200ms"
          >
            <h5 class="h5">About tech AI</h5>
            <ul>
              <li>
                <a href="javascript:void(0)">About</a>
              </li>
              <li>
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li>
                <a href="javascript:void(0)">Sign in</a>
              </li>
              <li>
                <a href="javascript:void(0)">Register</a>
              </li>
              <li>
                <a href="javascript:void(0)">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <div
            class="footer__single wow fadeInUp"
            data-wow-duration="600ms"
            data-wow-delay="400ms"
          >
            <h5 class="h5">Creativity</h5>
            <ul>
              <li>
                <a href="javascript:void(0)"> AI Photo Restorer</a>
              </li>
              <li>
                <a href="javascript:void(0)">Toongineer Cartoonizer</a>
              </li>
              <li>
                <a href="javascript:void(0)"> VansPortrait</a>
              </li>
              <li>
                <a href="javascript:void(0)"> AI Photo Colorizer</a>
              </li>
              <li>
                <a href="javascript:void(0)">AI Photo Retoucher</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <div
            class="footer__single wow fadeInUp"
            data-wow-duration="600ms"
            data-wow-delay="600ms"
          >
            <h5 class="h5">support</h5>
            <ul>
              <li>
                <a href="javascript:void(0)">Privacy Policy</a>
              </li>
              <li>
                <a href="javascript:void(0)">Terms of Service</a>
              </li>
              <li>
                <a href="javascript:void(0)">Cookie Policy</a>
              </li>
              <li>
                <a href="javascript:void(0)">FAQ</a>
              </li>
              <li>
                <a href="javascript:void(0)">Helpdesk</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright text-center">
      <p>
        Copyright &copy;
        <span id="copyYear"></span>
        <router-link to="/">techAI</router-link>
        . All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer3",
  props: {
    LogoSrc: {
      type: String,
      required: true,
    },
  },
  computed: {
    LogoURL() {
      return this.LogoSrc;
    },
  },
  mounted() {
    document.getElementById("copyYear").textContent = new Date().getFullYear();
  },
};
</script>
