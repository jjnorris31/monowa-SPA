<template>
    <div class="main-container">
        <!-- navigation bar-->
        <div class="flex mb-6 pt-8">
            <div class="w-full h-12 flex justify-start items-center pl-8">
                <font-awesome-icon icon="arrow-left" size="2x" color="white"/>
            </div>
        </div>
        <!-- end of navigation bar -->
        <div class="flex">
            <div class="w-full text-left mt-6 mb-2">
                <h1 style="font-size: 35px" class="pl-8 h1-wht">Hey There</h1>
            </div>
        </div>
        <div class="flex">
            <div class="w-full text-left mt-2 mb-4">
                <p style=" font-size: 17px;" class="pl-8 pr-16 sub-gry">Please tell us about yourself. We won't share any of your personal data.</p>
            </div>
        </div>

        <div class="w-full mt-4 mb-2">
            <MobileTextField label="Name" v-model="userName"></MobileTextField>
            <MobileTextField label="Surname" v-model="surName"></MobileTextField>
            <MobileTextField label="Email" v-model="email"></MobileTextField>
        </div>

        <div style="position: absolute; bottom: 40px" class="w-11/12 flex justify-end" @click="goNext()">
            <div class="next-container flex items-center justify-center">
                <font-awesome-icon icon="angle-right" size="3x" color="white" class="icon-next"/>
            </div>
        </div>

    </div>
</template>

<script>
    import MobileTextField from "../components/MobileTextField";
    export default {
        name: "LoginName",
        components: {
            MobileTextField,
        },

        data: () => {
            return {
                userName: '',
                surName: '',
                email: '',
            }
        },
        methods: {
            focusText() {
                this.textFocus = !this.textFocus
            },
            goNext() {
                this.$router.push({path: 'login-user-password'})
            }
        }
    }
</script>

<style scoped>

</style>