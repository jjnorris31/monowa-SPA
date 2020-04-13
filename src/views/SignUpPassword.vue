<template>
    <div class="main-container">
        <!-- navigation bar-->
        <div class="flex mb-6 pt-8">
            <div class="w-full h-12 flex justify-start items-center pl-8">
                <font-awesome-icon icon="arrow-left" size="2x" color="white" @click="goBack()"/>
            </div>
        </div>
        <!-- end of navigation bar -->
        <div class="flex">
            <div class="w-full text-left mt-6 mb-2">
                <h1 style="font-size: 35px" class="pl-8 h1-wht">Create a Password</h1>
            </div>
        </div>
        <div class="flex">
            <div class="w-full text-left mt-2 mb-4">
                <p style=" font-size: 17px;" class="pl-8 pr-16 sub-gry">Your password must include at least one symbol and uppercase letter.</p>
            </div>
        </div>

        <div class="w-full mt-4 mb-2">
            <MobileTextField label="Password" v-model="password"></MobileTextField>
        </div>

        <div class="flex mt-2 mb-2 flex-wrap">
            <div class="w-full flex pl-8 items-center justify-start mb-1" style="font-size: 8px" >
                    <font-awesome-icon icon="circle" size="sm" class=" item-list-disabled" :class="{'item-list-dot': lowercaseChecker}"></font-awesome-icon>
                    <div class="text-left pl-2  item-list-disabled" style="font-size: 14px" :class="{'item-list-active': lowercaseChecker}">One lowercase character</div>
            </div>
            <div class="w-full flex pl-8 items-center justify-start mb-1" style="font-size: 8px" >
                <font-awesome-icon icon="circle" size="sm" class=" item-list-disabled" :class="{'item-list-dot': uppercaseChecker}"></font-awesome-icon>
                <div class="text-left pl-2  item-list-disabled" style="font-size: 14px" :class="{'item-list-active': uppercaseChecker}">One uppercase character</div>
            </div>
            <div class="w-full flex pl-8 items-center justify-start mb-1" style="font-size: 8px">
                <font-awesome-icon icon="circle" size="sm" class=" item-list-disabled" :class="{'item-list-dot': specialChecker}"></font-awesome-icon>
                <div class="text-left pl-2  item-list-disabled" style="font-size: 14px" :class="{'item-list-active': specialChecker}">One special character</div>
            </div>
            <div class="w-full flex pl-8 items-center justify-start mb-1" style="font-size: 8px">
                <font-awesome-icon icon="circle" size="sm" class=" item-list-disabled" :class="{'item-list-dot': lengthChecker}"></font-awesome-icon>
                <div class="text-left pl-2  item-list-disabled" style="font-size: 14px" :class="{'item-list-active': lengthChecker}">8 characters minimum</div>
            </div>
        </div>

        <div style="position: absolute; bottom: 40px" class="w-11/12 flex justify-end">
            <div class="next-container flex items-center justify-center">
                <font-awesome-icon icon="angle-right" size="3x" color="white" class="icon-next"/>
            </div>
        </div>

    </div>
</template>

<script>
    import MobileTextField from "../components/MobileTextField";

    export default {
        name: "LoginPassword",
        components: {
            MobileTextField,
        },
        computed: {
            uppercaseChecker() {
                return this.password.match(this.uppercaseRegexp);
            },
            lowercaseChecker() {
                return this.password.match(this.lowercaseRegexp);
            },
            specialChecker() {
                return this.password.match(this.especialRegexp);
            },
            lengthChecker() {
                return this.password.length >= 8;
            }
        },
        data: () => {
            return {
                password: '',
                uppercaseRegexp: /[A-Z]+/,
                lowercaseRegexp: '[a-z]+',
                especialRegexp: /[!@#$%^&*(),.?":{}|<>]+/
            }
        },
        methods: {
            goBack() {
                this.$router.push({path: 'login-user-data'})
            }
        }
    }
</script>

<style scoped>

    .item-list-disabled {
        color: var(--main-mono-sub-color);
        transition: color .3s;
    }
    .item-list-active {
        color: white;
    }
    .item-list-dot {
        color: #3f67ff;
    }

</style>