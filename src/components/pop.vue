<template>
  <Teleport to="#modal">
    <div
      @click="props.closeHandler"
      class="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-slate-100/80"
    >
      <div
        @click.stop
        class="mx-auto w-11/12 rounded-xl bg-gray-200 p-2 text-center"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  closeHandler: Function,
});
</script>
