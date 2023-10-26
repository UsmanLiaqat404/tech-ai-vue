<template>
    <section class="section cmn-banner">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cmn-banner__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h3 class="h3">{{PageTitle}}</h3>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item">
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    {{PageTitle}}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="anime">
            <img :src="require('@/assets/images/anime-one.png')" alt="Image" class="one">
            <img :src="require('@/assets/images/anime-two.png')" alt="Image" class="two">
        </div>
    </section>
</template>

<script>
    export default {
        name: "PageHeader",
        props: [
            'PageTitle',
        ]
    }
</script>