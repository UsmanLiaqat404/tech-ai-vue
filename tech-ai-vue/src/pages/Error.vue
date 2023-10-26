<template>
	<div>
		<div class="my-app">
			<Header :logo-src="require('@/assets/images/logo.png')" />
			<section class="section error pb-0">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="error__content text-center">
								<div class="section__header">
									<h2 class="h3 wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
										404
									</h2>
									<p class="wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
										page not found
									</p>
								</div>
								<img :src="require('@/assets/images/error-thumb.png')" alt="Image" class="wow fadeInUp"
									data-wow-duration="600ms" data-wow-delay="900ms">
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
	import Footer from '../components/layout/Footer.vue'
	import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "Error",
		components: {
			Header,
			Footer,
			BackToTop
		},
	};
</script>