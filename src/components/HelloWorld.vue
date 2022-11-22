<template>
	<v-container>
		<v-card
			v-for="(item, i) in sampleData"
			:key="i"
			class="mx-auto mt-4"
			max-width="400"
		>
			<v-img class="white--text align-end" height="200px" :src="item.src">
				<v-card-title>{{ item.imgTitle }}</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">{{ item.date }}</v-card-subtitle>

			<v-card-text class="text--primary">
				<div>{{ item.title }}</div>

				<div>{{ item.text1 }}</div>
			</v-card-text>

			<v-card-actions>
				<v-btn color="orange" text> 공유 </v-btn>

				<v-btn color="orange" text> 탐험이유 </v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			sampleData: [
				{
					src: require('@/assets/images/1.jpeg'),
					imgTitle: '이거유',
					date: new Date(),
					title: '이거유',
					text: '이거유',
				},
				{
					src: require('@/assets/images/2.jpeg'),
					imgTitle: '이거유',
					date: new Date(),
					title: '이거유',
					text: '이거유',
				},
				{
					src: require('@/assets/images/3.jpeg'),
					imgTitle: '이거유',
					date: new Date(),
					title: '이거유',
					text: '이거유',
				},
				{
					src: require('@/assets/images/4.jpeg'),
					imgTitle: '이거유',
					date: new Date(),
					title: '이거유',
					text: '이거유',
				},
			],
		};
	},
};
</script>
