<template>
	<v-app>
		<Header :title="title" />

		<!-- Sizes your content based upon application components -->
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<!-- If using vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app>
			<!-- -->
		</v-footer>
	</v-app>
</template>

<script>
import Header from '@/components/common/Header.vue';
export default {
	name: 'App',
	components: {
		Header,
	},
	data() {
		return {
			title: '사목연공방',
		};
	},
};
</script>
