<template>
    <div class="main-container">
        <!-- navigation bar-->

        <div class="flex">
            <div class="w-11/12 text-left mt-16 mb-2 flex" >
                <div class="w-full flex justify-end">
                    <div class="w-11/12">
                        <font-awesome-icon icon="meteor" size="2x" color="white"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of navigation bar -->
        <div class="flex">
            <div class="w-11/12 text-left mt-6 mb-2 flex">
                <div class="w-full flex justify-end">
                    <h1 class="w-11/12 h1-wht" style="font-size: 28px">Hi, are you there?</h1>
                </div>
            </div>
        </div>

        <div class="flex">
            <div class="w-11/12 text-left mt-2 mb-4 flex">
                <div class="w-full flex justify-end">
                    <h2 style=" font-size: 17px;" class="w-11/12 sub-gry">Please sign in to Monowa or create your account.</h2>
                </div>
            </div>
        </div>

        <div class="w-full mt-4 mb-2">
            <MobileTextField label="E-Mail" v-model="email"></MobileTextField>
            <MobileTextField label="Password" v-model="password"></MobileTextField>
        </div>

        <div class="flex">
            <div class="w-11/12 text-left mt-4 mb-2 flex">
                <div class="w-full flex justify-end">
                    <button class="rounded cursor-pointer py-2 bg-transparent text-white btn-blue-light w-11/12" style="font-size: 18px">Sign In</button>
                </div>
            </div>
        </div>

        <div class="flex">
            <div class="w-11/12 text-left mt-4 mb-2 flex">
                <div class="w-full flex justify-end">
                    <button class="rounded cursor-pointer py-2 bg-transparent text-white border btn-border-blue-hard w-11/12" style="font-size: 18px">Create an account</button>
                </div>
            </div>
        </div>

        <div class="flex">
            <div class="w-11/12 text-left mt-4 mb-2 flex">
                <div class="w-full flex justify-end">
                    <h2 class="w-11/12 sub-gry ltl-text text-center">By signing up your agree to our <span class="highlight-blue">Terms & Privacy Policy</span>.</h2>
                </div>
            </div>
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
        name: "Login",
        components: {
            MobileTextField,
        },
        data: () => {
            return {
                email: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    .btn-blue-light {
        background-color: var(--main-mono-blue-light);
    }

    .btn-border-blue-hard {
        border-color: var(--main-mono-blue-intense);
    }

    .highlight-blue {
        color: #3F6BFF;
        font-weight: 600;
    }
</style>