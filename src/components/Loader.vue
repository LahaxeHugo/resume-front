<template>
  <div id="loader" :class="{ hide: !loading }">
    <LoadingSvg />
  </div>
</template>

<script setup>
import LoadingSvg from '@/assets/img/loading.svg'

const props = defineProps({ loading: Boolean })
</script>

<style scoped>
#loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  z-index: 1;
  transition: 0.5s all;
  opacity: 1;
  visibility: visible;
}
#loader svg {
  width: 200px;
}
#loader.hide {
  opacity: 0;
  visibility: hidden;
}
</style>

<style>
#loader svg * {
  animation-delay: 0.4s !important;
}
@keyframes Shape-Layer-1_mo {
  0% {
    offset-distance: 0%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  13.3% {
    offset-distance: 50%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  30% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}
@keyframes Shape-Layer-2_mo {
  0% {
    offset-distance: 0%;
  }
  13.3% {
    offset-distance: 0%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  30% {
    offset-distance: 50%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  43.3% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}
@keyframes Shape-Layer-3_mo {
  0% {
    offset-distance: 0%;
  }
  30% {
    offset-distance: 0%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  43.3% {
    offset-distance: 50%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  56.7% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}
@keyframes Shape-Layer-4_mo {
  0% {
    offset-distance: 0%;
  }
  43.3% {
    offset-distance: 0%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  56.7% {
    offset-distance: 50%;
    animation-timing-function: cubic-bezier(0.167, 0, 0.833, 1);
  }
  70% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}
</style>
