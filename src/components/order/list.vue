<template>

</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        selectedFoods: {},
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      };
    },
    created() {
      this.$http.get('/sell/buyer/order/list', {params: {'openid': getCookie('openid')}}).then((response) => {
        response = response.body;
        if (response.code === ERR_OK) {
//          this.goods = response.data;

        }
      });
    },
    methods: {
    },
    components: {
    }
  };

  function getCookie(name) {
    var arr;
    var reg = new RegExp('(^| )' +name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }
</script>

<style>

</style>
