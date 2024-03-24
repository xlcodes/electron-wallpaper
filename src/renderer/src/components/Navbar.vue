<template>
  <main class="cursor-pointer px-3 py-2 text-sm opacity-80 flex justify-between drag">
    <section class="flex-1 opacity-80 text-sm">小林不是coder的桌面壁纸</section>
    <section class="flex items-center justify-center gap-2">
      <pic
        class="no-drag text-[#333]"
        :class="{ iconActive: activeRoute === 'home' }"
        theme="outline"
        size="20"
        @click="gotoHome"
      />
      <setting-one
        class="no-drag text-[#333]"
        :class="{ iconActive: activeRoute === 'setting' }"
        theme="outline"
        size="20"
        @click="gotoSetting"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { Pic, SettingOne } from '@icon-park/vue-next'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const route = useRoute()

const activeRoute = computed(() => {
  return route.name
})

const gotoHome = () => {
  router.push({
    name: 'home'
  })
}

const gotoSetting = () => {
  router.push({
    name: 'setting'
  })
}
</script>

<style scoped lang="scss">
.iconActive {
  color: #1c79c0;
}
</style>
