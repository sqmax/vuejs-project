<template>
    <div id="detail">
        <div data-v-c54e58ac="">
            <div data-v-54c14e4b="" class="statushead" data-v-c54e58ac="">
                <div data-v-54c14e4b="" class="statuscircle" style="transform: scale(1); opacity: 1;">
                    <img data-v-54c14e4b="" class="circleimage" src="https://fuss10.elemecdn.com/2/e4/bff50bab2840cdfbffeaf13a20710png.png?imageMogr/format/webp/" />
                    <!---->
                </div>
                <!---->
                <h1 data-v-54c14e4b="" class="statustext"> 订单已取消 <img data-v-54c14e4b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAMAAABf788oAAAAbFBMVEUAAAAzMzMzMzM2NjYzMzM1NTU0NDRAQEAzMzM0NDRAQEAzMzM0NDQzMzM0NDQ0NDQ0NDQzMzMzMzMzMzM0NDQ1NTU2NjY5OTk0NDQ0NDQzMzM0NDQzMzM0NDQ1NTU0NDQzMzM0NDQ3NzczMzMku2ijAAAAI3RSTlMA+/Yi4Do2CnhIBO/o176uopeGb2VALhsT8c/LtI2DXVVTM3zB6zwAAACGSURBVBjTfdBJEsIwDETRJHZMRkgIGZiHf/874mVbRaFdv42kzn6MCybnjAkE4JjIAFQKzQE4qez2wCuRK+S1ytZDUaqsHtpFxXXQOZWlBb+qlEWUTaXO4ZIs78Gb83R1c4PzRx8ypw0xz5JH88w95rfkB/CUXJmCJmDSP22lwZaezSH7N19vZgteSBxyaAAAAABJRU5ErkJggg==" class="arrow" /></h1>
                <!---->
                <div data-v-54c14e4b="" class="buttons">
                    <!---->
                    <!---->
                </div>
            </div>
            <div data-v-2fc20090="" class="restaurant-card" data-v-c54e58ac="">
                <div data-v-2fc20090="" class="head listitem">
                    <div data-v-2fc20090="" class="name-wrap">
                        <img data-v-2fc20090="" class="avatar" src="https://fuss10.elemecdn.com/2/e4/bff50bab2840cdfbffeaf13a20710png.png?imageMogr/format/webp/" />
                        <span data-v-2fc20090="" class="name">商品信息</span>
                    </div>
                    <img data-v-2fc20090="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAMAAABf788oAAAAbFBMVEUAAAAzMzMzMzM2NjYzMzM1NTU0NDRAQEAzMzM0NDRAQEAzMzM0NDQzMzM0NDQ0NDQ0NDQzMzMzMzMzMzM0NDQ1NTU2NjY5OTk0NDQ0NDQzMzM0NDQzMzM0NDQ1NTU0NDQzMzM0NDQ3NzczMzMku2ijAAAAI3RSTlMA+/Yi4Do2CnhIBO/o176uopeGb2VALhsT8c/LtI2DXVVTM3zB6zwAAACGSURBVBjTfdBJEsIwDETRJHZMRkgIGZiHf/874mVbRaFdv42kzn6MCybnjAkE4JjIAFQKzQE4qez2wCuRK+S1ytZDUaqsHtpFxXXQOZWlBb+qlEWUTaXO4ZIs78Gb83R1c4PzRx8ypw0xz5JH88w95rfkB/CUXJmCJmDSP22lwZaezSH7N19vZgteSBxyaAAAAABJRU5ErkJggg==" class="icon-arrowright" />
                </div>
                <div data-v-2fc20090="" class="product-list listitem">
                    <ul data-v-2fc20090="" class="cart-item" v-for="orderDetail in orderDetailList">
                        <li data-v-2fc20090="" class="product-item">
                            <div data-v-2fc20090="" class="profile">
                                <p data-v-2fc20090="" class="name">{{orderDetail.productName}}</p>
                            </div>
                            <div data-v-2fc20090="" class="price-wrap">
                                <span data-v-2fc20090="" class="quantity">x{{orderDetail.productQuantity}}</span>
                                <span data-v-2fc20090="">&yen;{{orderDetail.productPrice * orderDetail.productQuantity}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!---->
                <div data-v-2fc20090="" class="finalprice listitem">
                    实付 &yen;{{order.orderAmount}}
                </div>
            </div>
            <div data-v-e08ad408="" class="detailcard" data-v-c54e58ac="">
                <!---->
                <div data-v-e08ad408="" class="detailcard-delivery card">
                    <div data-v-e08ad408="" class="title">
                        配送信息
                    </div>
                    <ul data-v-e08ad408="" class="cardlist">
                        <li data-v-e08ad408="" class="listitem"><span data-v-e08ad408="">送达时间：</span> 尽快送达 </li>
                        <li data-v-e08ad408="" class="listitem"><span data-v-e08ad408="">送货地址：</span>
                            <div data-v-e08ad408="" class="content">
                                <p data-v-e08ad408="">{{order.buyerName}}</p>
                                <p data-v-e08ad408="">{{order.buyerPhone}}</p>
                                <p data-v-e08ad408="">{{order.buyerAddress}}</p>
                            </div></li>
                        <!---->
                    </ul>
                </div>
                <div data-v-e08ad408="" class="detailcard-order card">
                    <div data-v-e08ad408="" class="title">
                        订单信息
                    </div>
                    <ul data-v-e08ad408="" class="cardlist">
                        <li data-v-e08ad408="" class="listitem"><span data-v-e08ad408="">订单号：</span>{{order.orderId}} </li>
                        <li data-v-e08ad408="" class="listitem"><span data-v-e08ad408="">支付方式：</span>{{order.payType | payName}} </li>
                        <li data-v-e08ad408="" class="listitem"><span data-v-e08ad408="">下单时间：</span>{{order.createTime | time}} </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
           return {
               order: {},
               orderDetailList: []
           }
        },
        created() {
            this.$http.get('/sell/buyer/order/detail', {
                params: {
                    orderId: this.$route.params.orderId,
                    openid: getCookie('openid')
                }
            }).then(function (response) {
                this.order = response.body.data;
                this.orderDetailList = this.order.orderDetailList;
            })
        },
        filters: {
            payName: function (value) {
                if (value == 0) {
                    return '货到付款'
                }else {
                    return '微信支付'
                }
            },
            time: function (value) {
                var date = new Date(value * 1000);
                return date.getFullYear() + '-'
                    + (date.getMonth() + 1) + '-'
                    + date.getDate() + ' '
                    + date.getHours() + ':'
                    + date.getMinutes();
            }
        }
    }
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
    .orderbody[data-v-08f9d9b7] {
        margin-bottom: .266667rem
    }

    .orderbody-bottom[data-v-08f9d9b7] {
        padding: .2rem 0
    }

    .orderbody-bottom .empty[data-v-08f9d9b7],.orderbody-bottom .limited[data-v-08f9d9b7],.orderbody-bottom .loading[data-v-08f9d9b7] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        color: #999
    }

    .orderbody-bottom .limited-svg[data-v-08f9d9b7] {
        margin-left: .133333rem;
        width: .133333rem;
        height: .186667rem;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .orderbody-bottom .loading-svg[data-v-08f9d9b7] {
        width: .453333rem;
        height: .453333rem;
        -webkit-animation: loading 2s linear infinite;
        animation: loading 2s linear infinite
    }

    .nodatatipWrap[data-v-08f9d9b7] {
        margin-top: 2.666667rem
    }

    @-webkit-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }

        to {
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn)
        }
    }

    @keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }

        to {
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn)
        }
    }

    .ordercard[data-v-e8380afc] {
        display: block;
        margin-top: .266667rem;
        background-color: #fff;
        padding: .373333rem 0 0 .4rem
    }

    .ordercard .ordercard-bottom[data-v-e8380afc] {
        border-top: 1px solid #eee;
        padding: .266667rem .426667rem;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end
    }

    .ordercard .ordercard-body[data-v-e8380afc],.ordercard .ordercard-bottom[data-v-e8380afc] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex
    }

    .ordercard .ordercard-avatar[data-v-e8380afc] {
        padding-right: .266667rem;
        -webkit-box-flex: 0;
        -webkit-flex: none;
        -ms-flex: none;
        flex: none
    }

    .ordercard .ordercard-avatar img[data-v-e8380afc] {
        border-radius: .053333rem;
        border: 1px solid #eee;
        width: .853333rem;
        height: .853333rem
    }

    .ordercard .ordercard-content[data-v-e8380afc] {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: block;
        width: 0
    }

    .ordercard .ordercard-head[data-v-e8380afc] {
        border-bottom: 1px solid #eee;
        padding-right: .346667rem;
        padding-bottom: .266667rem
    }

    .ordercard .ordercard-head .title[data-v-e8380afc] {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .ordercard .ordercard-head .name[data-v-e8380afc],.ordercard .ordercard-head .title[data-v-e8380afc] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .ordercard .ordercard-head .name[data-v-e8380afc] {
        font-size: .426667rem;
        line-height: 1.5em;
        color: #333
    }

    .ordercard .ordercard-head .name .content[data-v-e8380afc] {
        display: inline-block;
        max-width: 10em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .ordercard .ordercard-head .name svg[data-v-e8380afc] {
        margin-left: .133333rem;
        width: .133333rem;
        height: .186667rem
    }

    .ordercard .ordercard-head .status[data-v-e8380afc] {
        font-size: .346667rem;
        text-align: right;
        color: #333;
        max-width: 10em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .ordercard .ordercard-head .datetime[data-v-e8380afc] {
        font-size: .293333rem;
        color: #999
    }

    .ordercard .ordercard-detail[data-v-e8380afc] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: .4rem .346667rem .4rem 0
    }

    .ordercard .ordercard-detail .detail[data-v-e8380afc] {
        font-size: .346667rem;
        color: #666;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .ordercard .ordercard-detail .productname[data-v-e8380afc] {
        display: inline-block;
        max-width: 6.133333rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .ordercard .ordercard-detail .productname.ellipsis[data-v-e8380afc] {
        max-width: 4.266667rem
    }

    .ordercard .ordercard-detail .price[data-v-e8380afc] {
        -webkit-flex-basis: 1.6rem;
        -ms-flex-preferred-size: 1.6rem;
        flex-basis: 1.6rem;
        text-align: right;
        font-size: .346667rem;
        color: #333;
        font-weight: 700
    }

    .ordercard .cardbutton[data-v-e8380afc] {
        padding: .133333rem .266667rem;
        border: 1px solid #3190e8;
        border-radius: .053333rem;
        background-color: transparent;
        outline: none;
        font-size: .346667rem;
        color: #3190e8;
        margin-left: .2rem
    }

    .ordercard .cardbutton.alert[data-v-e8380afc] {
        color: #ff6000;
        border-color: #ff6000
    }

    .loading-card-1oesQ_0 {
        margin: .266667rem 0;
        width: 10rem;
        height: 4.333333rem;
        vertical-align: middle
    }

    .ad-area[data-v-c54e58ac] {
        background-color: #f5f5f5;
        padding: .266667rem .4rem
    }

    .ad-image[data-v-c54e58ac] {
        width: 100%;
        max-height: 1.866667rem
    }

    .detail-card[data-v-c54e58ac],.restaurant-card[data-v-c54e58ac] {
        margin-top: .266667rem
    }

    .loadpage .top[data-v-c54e58ac] {
        background-color: #0097ff;
        margin-top: -2px;
        height: 1.6rem
    }

    .header-right[data-v-c54e58ac] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding-right: .266667rem
    }

    .header-right .icon[data-v-c54e58ac] {
        width: .746667rem
    }

    .mint-actionsheet-button,.mint-actionsheet-listitem {
        height: 1.2rem!important;
        line-height: 1.2rem!important;
        font-size: .48rem!important
    }

    .mint-actionsheet {
        position: fixed;
        background: #e0e0e0;
        width: 100%;
        text-align: center;
        bottom: 0;
        left: 50%;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: -webkit-transform .3s ease-out;
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out,-webkit-transform .3s ease-out
    }

    .mint-actionsheet-list {
        list-style: none;
        padding: 0;
        margin: 0
    }

    .mint-actionsheet-listitem {
        border-bottom: .013333rem solid #e0e0e0
    }

    .mint-actionsheet-button,.mint-actionsheet-listitem {
        display: block;
        width: 100%;
        height: .6rem;
        line-height: .6rem;
        font-size: .24rem;
        color: #333;
        background-color: #fff
    }

    .mint-actionsheet-button:active,.mint-actionsheet-listitem:active {
        background-color: #f0f0f0
    }

    .actionsheet-float-enter,.actionsheet-float-leave-active {
        -webkit-transform: translate3d(-50%,100%,0);
        transform: translate3d(-50%,100%,0)
    }

    .v-modal-enter {
        -webkit-animation: v-modal-in .2s ease;
        animation: v-modal-in .2s ease
    }

    .v-modal-leave {
        -webkit-animation: v-modal-out .2s ease forwards;
        animation: v-modal-out .2s ease forwards
    }

    @-webkit-keyframes v-modal-in {
        0% {
            opacity: 0
        }
    }

    @keyframes v-modal-in {
        0% {
            opacity: 0
        }
    }

    @-webkit-keyframes v-modal-out {
        to {
            opacity: 0
        }
    }

    @keyframes v-modal-out {
        to {
            opacity: 0
        }
    }

    .v-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000
    }

    .mint-msgbox {
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);
        background-color: #fff;
        width: 85%;
        border-radius: .04rem;
        font-size: .213333rem;
        -webkit-user-select: none;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: .2s;
        transition: .2s
    }

    .mint-msgbox-header {
        padding: .2rem 0 0
    }

    .mint-msgbox-content {
        padding: .133333rem .266667rem .2rem;
        border-bottom: .013333rem solid #ddd;
        min-height: .48rem;
        position: relative
    }

    .mint-msgbox-input {
        padding-top: .2rem
    }

    .mint-msgbox-input input {
        border: .013333rem solid #dedede;
        border-radius: .066667rem;
        padding: .053333rem .066667rem;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none
    }

    .mint-msgbox-input input.invalid,.mint-msgbox-input input.invalid:focus {
        border-color: #ff4949
    }

    .mint-msgbox-errormsg {
        color: red;
        font-size: .16rem;
        min-height: .24rem;
        margin-top: .026667rem
    }

    .mint-msgbox-title {
        text-align: center;
        padding-left: 0;
        margin-bottom: 0;
        font-size: .213333rem;
        font-weight: 700;
        color: #333
    }

    .mint-msgbox-message {
        color: #999;
        margin: 0;
        text-align: center;
        line-height: .48rem
    }

    .mint-msgbox-btns {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        height: .533333rem;
        line-height: .533333rem
    }

    .mint-msgbox-btn {
        line-height: .466667rem;
        background-color: #fff;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        display: block;
        width: 0;
        margin: 0;
        border: 0
    }

    .mint-msgbox-btn:focus {
        outline: none
    }

    .mint-msgbox-btn:active {
        background-color: #fff
    }

    .mint-msgbox-cancel {
        width: 50%;
        border-right: .013333rem solid #ddd
    }

    .mint-msgbox-cancel:active {
        color: #000
    }

    .mint-msgbox-confirm {
        color: #26a2ff;
        width: 50%
    }

    .mint-msgbox-confirm:active {
        color: #26a2ff
    }

    .msgbox-bounce-enter {
        opacity: 0;
        -webkit-transform: translate3d(-50%,-50%,0) scale(.7);
        transform: translate3d(-50%,-50%,0) scale(.7)
    }

    .msgbox-bounce-leave-active {
        opacity: 0;
        -webkit-transform: translate3d(-50%,-50%,0) scale(.9);
        transform: translate3d(-50%,-50%,0) scale(.9)
    }

    .v-modal-enter {
        -webkit-animation: v-modal-in .2s ease;
        animation: v-modal-in .2s ease
    }

    .v-modal-leave {
        -webkit-animation: v-modal-out .2s ease forwards;
        animation: v-modal-out .2s ease forwards
    }

    @-webkit-keyframes v-modal-in {
        0% {
            opacity: 0
        }
    }

    @keyframes v-modal-in {
        0% {
            opacity: 0
        }
    }

    @-webkit-keyframes v-modal-out {
        to {
            opacity: 0
        }
    }

    @keyframes v-modal-out {
        to {
            opacity: 0
        }
    }

    .v-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000
    }

    .card[data-v-e08ad408] {
        background-color: #fff;
        margin-bottom: .266667rem
    }

    .title[data-v-e08ad408] {
        font-size: .4rem;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-left: .32rem;
        line-height: 1.04rem
    }

    .cardlist[data-v-e08ad408] {
        color: #6e6e6e;
        padding-left: .4rem;
        border-bottom: 1px solid #f2f2f2
    }

    .listitem[data-v-e08ad408] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: baseline;
        -webkit-align-items: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        line-height: 1.173333rem;
        font-size: .373333rem
    }

    .listitem span[data-v-e08ad408] {
        -webkit-box-flex: 0;
        -webkit-flex: none;
        -ms-flex: none;
        flex: none
    }

    .listitem .content[data-v-e08ad408] {
        line-height: 1.5em;
        padding-bottom: .266667rem
    }

    .listitem[data-v-e08ad408]:not(:last-child) {
        border-bottom: 1px solid #f2f2f2
    }

    .tel[data-v-e08ad408] {
        color: #3190e8
    }

    .detailcard-rate[data-v-e08ad408] {
        padding-right: .32rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        border-top: 1px solid #f2f2f2;
        background-color: #fff
    }

    .detailcard-rate .right[data-v-e08ad408] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .detailcard-rate .text[data-v-e08ad408] {
        color: #6e6e6e
    }

    .icon-arrowright[data-v-e08ad408] {
        width: .186667rem;
        height: .32rem;
        margin-left: .133333rem
    }

    .restaurant-card[data-v-2fc20090] {
        background-color: #fff;
        padding-left: .32rem;
        border-top: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
        margin-bottom: .266667rem
    }

    .cart-item[data-v-2fc20090]:not(:last-child) {
        margin-bottom: .266667rem
    }

    .listitem[data-v-2fc20090] {
        padding: .346667rem .32rem .346667rem 0
    }

    .listitem[data-v-2fc20090]:not(:last-child) {
        border-bottom: 1px solid #efefef
    }

    .head[data-v-2fc20090] {
        padding-bottom: .266667rem;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .head .name-wrap[data-v-2fc20090],.head[data-v-2fc20090] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .head .name-wrap[data-v-2fc20090] {
        font-size: .373333rem;
        color: #333
    }

    .head .avatar[data-v-2fc20090] {
        height: .533333rem;
        width: .533333rem;
        margin-right: .186667rem
    }

    .head .name[data-v-2fc20090] {
        color: #4d4d4d
    }

    .head .icon-arrowright[data-v-2fc20090] {
        width: .186667rem;
        height: .32rem
    }

    .finalprice[data-v-2fc20090],.price[data-v-2fc20090] {
        color: #fb6b23
    }

    .price .row[data-v-2fc20090] {
        font-size: .32rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: .266667rem
    }

    .price .row[data-v-2fc20090]:last-child {
        margin-bottom: 0
    }

    .price-wrap .quantity[data-v-2fc20090] {
        position: absolute;
        right: 1.666667rem;
        color: #bbb
    }

    .finalprice[data-v-2fc20090] {
        text-align: right
    }

    .product-item[data-v-2fc20090] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: .346667rem;
        margin-bottom: .266667rem;
        position: relative;
        color: #6e6e6e
    }

    .product-item[data-v-2fc20090]:last-child {
        margin-bottom: 0
    }

    .statushead[data-v-54c14e4b] {
        position: relative;
        padding-top: 1.653333rem;
        text-align: center;
        background-color: #fff;
        padding-bottom: .4rem
    }

    .statuscircle[data-v-54c14e4b] {
        position: fixed;
        top: .466667rem;
        left: 50%;
        margin-left: -1.066667rem;
        width: 2.133333rem;
        height: 2.133333rem;
        padding: .133333rem;
        background-color: #fff;
        border-radius: 50%;
        z-index: 100;
        will-change: transform;
        -webkit-transform-origin: top;
        transform-origin: top
    }

    .circleimage[data-v-54c14e4b] {
        width: 100%;
        height: 100%;
        border-radius: 50%
    }

    .circleclock[data-v-54c14e4b] {
        width: 1.973333rem;
        height: 1.973333rem;
        border-radius: 50%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative
    }

    .circleclock .progress[data-v-54c14e4b] {
        position: absolute;
        top: 0;
        left: 0
    }

    .circleclock .time[data-v-54c14e4b] {
        color: #333;
        font-size: .56rem;
        font-weight: 700
    }

    .circleclock .text[data-v-54c14e4b] {
        font-size: .266667rem;
        color: #999
    }

    .statustext[data-v-54c14e4b] {
        display: inline-block;
        margin: 0 auto .133333rem;
        color: #333;
        font-size: .506667rem;
        font-weight: 700
    }

    .statustext .arrow[data-v-54c14e4b] {
        width: .213333rem
    }

    .helptext[data-v-54c14e4b] {
        padding: 0 2.133333rem;
        color: #999;
        font-size: .32rem
    }

    .helptext.sub[data-v-54c14e4b] {
        color: #666
    }

    .buttons[data-v-54c14e4b] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .buttons button[data-v-54c14e4b] {
        height: .853333rem;
        width: 2.8rem;
        white-space: nowrap;
        border-radius: .08rem;
        font-size: .346667rem;
        color: #666;
        margin: .4rem .133333rem 0;
        border: 1px solid #ccc;
        background-color: transparent
    }

    .buttons button.button-pay[data-v-54c14e4b] {
        width: auto;
        padding: 0 .346667rem
    }

    .buttons button.alert[data-v-54c14e4b] {
        background-color: #ff6000;
        border-color: #ff6000;
        color: #fff
    }

    .buttons button.confirm[data-v-54c14e4b] {
        color: #fff;
        background-color: #4cd964;
        border-color: #4cd964
    }

    .buttons button.more[data-v-54c14e4b] {
        width: 1.066667rem;
        padding: 0
    }

    .buttons .icon-more[data-v-54c14e4b] {
        width: .373333rem
    }

    .ontimebox[data-v-54c14e4b] {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        line-height: .453333rem;
        font-size: .24rem;
        margin: 0 auto .266667rem
    }

    .ontimebox .label[data-v-54c14e4b],.ontimebox[data-v-54c14e4b] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex
    }

    .ontimebox .label[data-v-54c14e4b] {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        font-weight: 700;
        background-color: #3190e8;
        color: #fff;
        border-top-left-radius: .106667rem;
        border-bottom-left-radius: .106667rem;
        border: 1px solid #3190e8;
        padding: 0 .16rem
    }

    .ontimebox .label img[data-v-54c14e4b] {
        width: .24rem;
        margin-left: .053333rem
    }

    .ontimebox.unsupported .label[data-v-54c14e4b] {
        background-color: #ccc;
        border-color: #ccc
    }

    .ontimebox.unsupported .content[data-v-54c14e4b] {
        color: #ccc;
        border-color: #ccc
    }

    .ontimebox .content[data-v-54c14e4b] {
        color: #3190e8;
        border-top-right-radius: .106667rem;
        border-bottom-right-radius: .106667rem;
        border: 1px solid #3190e8;
        padding: 0 .106667rem
    }

    #changedcircle[data-v-5a635160] {
        -webkit-transition: stroke-dasharray .8s;
        transition: stroke-dasharray .8s;
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotateY(180deg) rotate(-90deg);
        transform: rotateY(180deg) rotate(-90deg)
    }

    #timeline[data-v-c3979e8a] {
        min-height: 100%;
        background: #fff;
        position: relative
    }

    .firstitem-icon[data-v-c3979e8a] {
        position: absolute;
        width: .4rem;
        top: 2.266667rem;
        z-index: 10;
        left: .613333rem
    }

    .borderblock[data-v-c3979e8a] {
        height: 1.066667rem;
        border-left: 1px solid #e6e6e6;
        margin: 0 .8rem
    }

    .timelist[data-v-c3979e8a] {
        padding-bottom: 1.066667rem;
        margin: 0 .8rem
    }

    .timelist .timeitem[data-v-c3979e8a] {
        display: block;
        border-left: 1px solid #e6e6e6;
        position: relative;
        padding-left: 1.066667rem;
        padding-bottom: 1.066667rem
    }

    .timelist .timeitem:first-child .title[data-v-c3979e8a] {
        color: #3190e8
    }

    .timelist .timeitem[data-v-c3979e8a]:last-child {
        padding-bottom: 0
    }

    .timelist .timeitem[data-v-c3979e8a]:last-child:after {
        display: block;
        content: "";
        background: #fff;
        position: absolute;
        top: .32rem;
        width: .133333rem;
        height: 100%;
        left: -.066667rem
    }

    .timelist .timeitem[data-v-c3979e8a]:before {
        display: block;
        width: .133333rem;
        height: .133333rem;
        border-radius: 50%;
        background: #e6e6e6;
        content: "";
        position: absolute;
        left: -.066667rem;
        top: .186667rem
    }

    .timelist .title[data-v-c3979e8a] {
        font-size: .426667rem
    }

    .timelist .datetime[data-v-c3979e8a] {
        color: #999
    }

    .timelist .description[data-v-c3979e8a] {
        color: #999;
        font-size: .293333rem
    }

    .titlerow[data-v-c3979e8a] {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .index-2ZcM4 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: #fff;
        padding: .466667rem
    }

    .index-1U1jr {
        margin-right: .266667rem;
        width: .933333rem;
        height: .933333rem
    }

    .index-3lWBq {
        background-color: #fff;
        padding: 0 .466667rem .466667rem;
        text-align: center
    }

    .index-1pwOa {
        position: relative;
        color: #999;
        font-size: .32rem;
        height: 1.5em
    }

    .index-1pwOa:before {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        white-space: nowrap;
        content: attr(attr-title);
        background-color: #fff;
        padding: 0 .266667rem;
        z-index: 1
    }

    .index-1pwOa:after {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: .5px;
        height: 1px;
        background-color: #eee;
        left: 0;
        right: 0
    }

    .index-3O-HV {
        margin-top: .266667rem;
        padding: .466667rem .466667rem .2rem;
        background-color: #fff
    }

    .index-1yt7A {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background-color: #424242;
        color: #fff
    }

    .index-1qjSH,.index-1yt7A {
        height: 1.173333rem
    }

    .index-Vo1Rc {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding-left: .4rem;
        font-size: .373333rem
    }

    .index-Vo1Rc a {
        display: block;
        color: #ccc;
        font-size: .293333rem
    }

    .index-3Gn_5 {
        background-color: #41c876;
        padding: 0 .533333rem;
        font-size: .426667rem;
        color: #fff
    }

    .index-2oS8L {
        position: relative;
        display: inline-block;
        margin-bottom: .266667rem
    }

    .index-2oS8L svg {
        width: 1.333333rem;
        height: 1.333333rem;
        padding: 0 .16rem;
        fill: #eee
    }

    .index-2oS8L svg:last-child {
        margin-right: 0
    }

    .index-omVub {
        position: absolute;
        left: 0;
        top: 0;
        white-space: nowrap;
        overflow: hidden
    }

    .index-omVub svg {
        fill: #f86948
    }

    .index-3vuXO {
        text-align: justify
    }

    .index-3mtnc {
        display: inline-block;
        margin-right: .106667rem;
        margin-bottom: .2rem;
        border-radius: .4rem;
        padding: .093333rem .24rem;
        font-size: .293333rem;
        color: #999;
        border: 1px solid #ddd
    }

    .index-1Vb8Q {
        background-color: #fff5ea;
        border-color: #fd7a5c;
        color: #fd7a5c
    }

    .index-1cyDv {
        width: 100%;
        padding: .133333rem .266667rem;
        background-color: #f9f9f9;
        border: 1px solid #eee;
        color: #f9f9f9;
        font-size: .293333rem;
        border-radius: .066667rem;
        color: #666
    }

    .index-1_0EX {
        margin-bottom: .133333rem
    }

    .index-kC-Ge {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        color: #999;
        font-size: .293333rem;
        height: .533333rem
    }

    .index-3LUXV svg {
        fill: #999;
        width: .266667rem;
        height: .266667rem
    }

    .index-2Bj1q,.index-27SY0 {
        padding: .04rem .24rem;
        border: 1px solid #ccc;
        border-radius: .2rem
    }

    .index-2Bj1q {
        margin-right: .24rem
    }

    .index-3eSLW {
        background-color: #fff5ea;
        border-color: #fd7a5c
    }

    .index-3eSLW svg {
        fill: #fd7a5c
    }

    .index-27SY0 svg {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .index-3nbfy {
        background-color: #f9f9f9;
        border-color: #ccc
    }

    .index-3nbfy svg {
        fill: #999
    }

    .index-QykrW {
        margin-top: .2rem;
        width: 100%;
        padding: .133333rem .266667rem;
        height: 1.2rem;
        font-size: .346667rem;
        background-color: #f9f9f9;
        border: 1px solid #eee;
        color: #f9f9f9;
        border-radius: .066667rem;
        color: #666
    }

    .index-2GqoO {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin: .266667rem 0;
        height: 1.066667rem;
        background-color: #fff;
        padding: 0 .466667rem;
        color: #666
    }

    .index-gpBEA {
        color: #0089dc;
        direction: rtl
    }
</style>