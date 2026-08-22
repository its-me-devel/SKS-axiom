<script lang="ts">
	import { T } from '@threlte/core';
</script>

<T.AmbientLight intensity={0.7} color="#9c8bff" />
<T.PointLight position={[3.2, 2.4, 3.5]} intensity={70} color="#22d3ee" decay={2} />
<T.PointLight position={[-3.6, -1.6, -2.5]} intensity={55} color="#ff3ec4" decay={2} />
<T.DirectionalLight position={[1.5, 3, 4]} intensity={0.35} color="#ffffff" />
