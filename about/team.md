<script setup lang="ts">
	import { VPTeamMembers } from 'vitepress/theme';
	const members = [
		{
			avatar: 'https://www.github.com/dannysmc95.png',
			name: 'Danny',
			title: 'Creator',
			links: [
				{ icon: 'github', link: 'https://github.com/dannysmc95' },
				{ icon: 'twitter', link: 'https://twitter.com/symbuxdev' },
			],
		},
	]
</script>

# Team

See our awesome team.

<VPTeamMembers size="small" :members="members" />
