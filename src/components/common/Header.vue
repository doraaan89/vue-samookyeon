<template>
	<v-app-bar app color="white" elevate-on-scroll>
		<v-app-bar-nav-icon></v-app-bar-nav-icon>

		<v-toolbar-title>{{ title }}</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-heart</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	name: 'Header',
	props: {
		title: {
			type: String,
		},
	},
};
</script>

<style></style>
