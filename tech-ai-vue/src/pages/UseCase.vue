<template>
	<div>
		<div class="my-app">
			<Header :logo-src="require('@/assets/images/logo.png')"/>
			<PageHeader page-title="Use Case"  />
			<Cases />
			<FAQ />
			<UpdateCTA />
			<Footer class="footer-light"/>
		</div>
		<BackToTop />
	</div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import PageHeader from '../components/layout/PageHeader.vue'
import Cases from '../components/page_components/use-case/Cases.vue'
import FAQ from '../components/page_components/use-case/FAQ.vue'
import UpdateCTA from '../components/layout/UpdateCTA.vue'
import Footer from '../components/layout/Footer.vue'
import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "UseCase",
		components: {
			Header,
			PageHeader,
			Cases,
            FAQ,
            UpdateCTA,
			Footer,
			BackToTop
		},
	};
</script>
