<template>
	<div>
		<div class="my-app">
			<Header :logo-src="require('@/assets/images/logo.png')" />
			<PageHeader page-title="About TechAI" />
			<Introduction />
			<Sponsor />
			<Benefits />
			<FAQ />
			<Review />
			<UpdateCTA />
			<Footer class="footer-light" />
		</div>
		<BackToTop />
	</div>
</template>

<script>
	import Header from '../components/layout/Header.vue'
	import PageHeader from '../components/layout/PageHeader.vue'
	import Introduction from '../components/page_components/about/Introduction.vue'
	import Sponsor from '../components/page_components/about/Sponsor.vue'
	import Benefits from '../components/page_components/about/Benefits.vue'
	import FAQ from '../components/page_components/about/FAQ.vue'
	import Review from '../components/page_components/about/Review.vue'
	import UpdateCTA from '../components/layout/UpdateCTA.vue'
	import Footer from '../components/layout/Footer.vue'
	import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "HomeLight",
		components: {
			Header,
			PageHeader,
			Introduction,
			Sponsor,
			Benefits,
			FAQ,
			Review,
			UpdateCTA,
			Footer,
			BackToTop
		},
	};
</script>