<template>
    <div>
        <div class="my-app">
            <Header :logo-src="require('@/assets/images/logo.png')" />
            <PageHeader page-title="Create Account"  />
            <section class="section authentication pb-0">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-10 col-xl-6">
                            <div class="authentication__inner wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="section__header text-start">
                                    <h2 class="h3">create account</h2>
                                </div>
                                <form action="#" method="post">
                                    <div class="input-single">
                                        <input type="text" name="author-reginame" id="authorregiName"
                                            placeholder="enter name" required>
                                    </div>
                                    <div class="input-single">
                                        <input type="email" name="author-regiEmail" id="authorregiEmail"
                                            placeholder="email address" required>
                                    </div>
                                    <div class="input-single">
                                        <input type="password" name="author-regiPass" id="authorregiPass"
                                            placeholder="password" required>
                                    </div>
                                    <div class="input-single">
                                        <input type="password" name="author-regiConfirmPass" id="authorregiConfirmPass"
                                            placeholder="confirm password" required>
                                    </div>
                                    <div class="divide">
                                        <p>OR</p>
                                    </div>
                                    <div class="authentic">
                                        <button type="submit" class="btn btn--nonary">
                                            <img :src="require('@/assets/images/google.png')" alt="Image">
                                            continue with google
                                        </button>
                                        <button type="submit" class="btn btn--nonary">
                                            <img :src="require('@/assets/images/facebook.png')" alt="Image">
                                            continue with facebook
                                        </button>
                                    </div>
                                    <div class="group-radio">
                                        <input type="checkbox" name="create-in-check" id="createInCheck">
                                        <label for="createInCheck">
                                            i accept your terms & conditions
                                        </label>
                                    </div>
                                    <div class="form-cta">
                                        <button type="submit" aria-label="post comment" class="btn btn--ocotonary">
                                            create account
                                        </button>
                                        <p>
                                            Have an account?
                                            <router-link to="/sign-in">Sign In</router-link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer class="footer-light" />
        </div>
        <BackToTop />
    </div>
</template>

<script>
    import Header from '../components/layout/Header.vue'
    import PageHeader from '../components/layout/PageHeader.vue'
    import Footer from '../components/layout/Footer.vue'
    import BackToTop from '../components/common/BackToTop.vue'
    export default {
        name: "Register",
        components: {
            Header,
            PageHeader,
            Footer,
            BackToTop
        },
    };
</script>