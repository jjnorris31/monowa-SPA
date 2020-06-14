<template>
    <div class="flex">
        <div class="w-11/12 h-20 field text-left field-radius flex flex-wrap"
             :class="{'field-focus': textFocus}"
             @focusin="textFocus = true"
             @focusout="textFocus = false"
             @mouseenter="focusText()"
             @mouseleave="focusText()">
            <div class="w-full flex justify-end">
                <h4 class="w-11/12 mt-4 text-sm sub-gry">{{label}}</h4>
            </div>
            <div class="flex justify-center w-full" >
                <div class="w-10/12 mb-4 flex">
                    <input type="text"
                           class="field-input-text w-full"
                           v-bind:value="value"
                           v-on:input="$emit('input', $event.target.value)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MobileTextField",
        props:['label', 'value'],
        data: () => {
            return {
                textFocus: false,
            }
        },
        methods: {
            focusText() {
                this.textFocus = !this.textFocus
            }
        },
        computed: {
        },
    }
</script>

<style scoped>
    .field {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        color: var(--main-mono-sub-color);
        background-color: transparent;
        transition: .75s;
    }

    .field-focus {
        color: white;
        background-color: #0f295e;
    }

    .field-input-text {
        background-color: transparent;
    }

    input[type=text]:focus {
        outline: none;
    }
</style>