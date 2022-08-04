<template>
  <main>
    <div
      class="item"
      v-for="(item, index) in baseArr"
      :key="item"
      @click="click(item, index)"
    >
      <img src="./assets/girl.png" alt="" v-if="item.show" />
      <div v-else class="border"></div>
    </div>
  </main>
  <button @click="reStart">reStart</button>
</template>
<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const NUM = ref(null);
    const baseArr = ref([]);
    function init() {
      for (let i = 0; i < 25; i++) {
        baseArr.value[i] = { a: i + 1, show: true };
      }
    }

    const click = (item, index) => {
      baseArr.value[index].show = false;
      if (item.a === NUM.value) {
        alert("GAME💀💀💀OVER");
        reStart();
      }
    };

    const reStart = () => {
      init();
      NUM.value = Math.ceil(Math.random() * 25);
    };

    onMounted(() => {
      reStart();
    });

    return {
      baseArr,
      click,
      reStart,
    };
  },
};
</script>
<style lang="scss">
main {
  width: 520px;
  height: 520px;
  background: #e5ffdc;
  border: 2px solid gray;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 100px;
  height: 100px;
  margin: 2px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  .border{
    width: 100%;
    height: 100%;
    border: dashed 1px gray;
  }
}
button {
  margin-top: 10px;
}
</style>
