<script lang="ts">
	export let name: string;
	export let options: Array<{ 
		value: string,
		label: string
	}>;
	export let value: string;
</script>

<label class="select-input">
	<select class="input" {name} bind:value>
		{#each options as {value, label}}
			<option class="option" {value}>{label}</option>
		{/each}
	</select>
</label>

<style lang="scss">
.select-input {
	position: relative;
	width: 100%;
}

.input {
	appearance: none;
	align-items: center;
	background: none;
	background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="%23C7C6CA" d="m11.3 14.3l-2.6-2.6q-.475-.475-.212-1.087T9.425 10h5.15q.675 0 .938.613T15.3 11.7l-2.6 2.6q-.15.15-.325.225T12 14.6q-.2 0-.375-.075T11.3 14.3Z"%3E%3C/path%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
	background-size: 32px auto;
	border-radius: 4px;
	color: var(--on-surface);
	color-scheme: dark;
	display: flex;
	font: var(--body-large);
	height: 56px;
	outline: none;
	padding: 0 12px;
	width: 100%;
	transition: box-shadow 0.1s ease;
	-webkit-appearance: none;
  -moz-appearance: none;
}

.option {
	background: var(--surface-3);
}

</style>