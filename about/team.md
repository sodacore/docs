---
prev:
  text: Releases
  link: /about/releases
next:
  text: Community Guide
  link: /about/community
---

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

See our awesome team (just me currently).

<VPTeamMembers size="small" :members="members" />

## Want to join the team?

If you are interested in getting involved to commit some time, then checkout the [Community Guide](/about/community).

Once you make enough contributions I will offer an invite to join the team!
