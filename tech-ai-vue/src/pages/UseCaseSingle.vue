<template>
    <div>
		<div class="my-app">
			<Header :logo-src="require('@/assets/images/logo.png')"/>
			<PageHeader page-title="Website copy & SEO"  />
			<About />
			<Broadcast />
			<Steps />
			<Related />
			<UpdateCTA />
			<Footer class="footer-light"/>
		</div>
		<BackToTop />
	</div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import PageHeader from '../components/layout/PageHeader.vue'
import About from '../components/page_components/use-case/About.vue'
import Broadcast from '../components/page_components/use-case/Broadcast.vue'
import Steps from '../components/page_components/use-case/Steps.vue'
import Related from '../components/page_components/use-case/Related.vue'
import UpdateCTA from '../components/layout/UpdateCTA.vue'
import Footer from '../components/layout/Footer.vue'
import BackToTop from '../components/common/BackToTop.vue'
    export default {
        name: "UseCaseSingle",
        components: {
			Header,
			PageHeader,
			About,
			Broadcast,
			Steps,
			Related,
            UpdateCTA,
			Footer,
			BackToTop
		},
    }
</script>