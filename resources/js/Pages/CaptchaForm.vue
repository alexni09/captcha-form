<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useForm } from '@inertiajs/vue3'
import InputError from '@/Components/InputError.vue'
const htmlImgSrc = ref(null)
const form = useForm({
    captcha: ''
})
const captchaReload = async () => {
    htmlImgSrc.value = null
    form.captcha = ''
    await axios.get(route('captcha.reload')).then(response => { htmlImgSrc.value = response.data.url }).catch(error => { console.log(error) })
}
const submit = () => {
    form.post(route('captcha.verify'))
}
onMounted(() => { captchaReload() })
const errorCaptcha = computed(() => {
    return form.errors.captcha != null ? 'Captcha does not match. (Please reload if needed.)' : undefined 
})
watch(errorCaptcha, () => { captchaReload() })
</script>
<template>
    <div class="p-6">
        <h1 class="text-3xl">Captcha Form</h1>
        <form class="flex flex-col w-96" @submit.prevent="submit">
            <div class="mt-2 flex flex-row place-items-center py-3">
                <img v-if="htmlImgSrc !== null" :src="htmlImgSrc">
                <div v-else class="animate-pulse w-56 h-9 border-2 border-slate-300 rounded-sm">
                    <div class="px-2 grid grid-cols-6 gap-2 h-full w-full items-center">
                        <div class="h-2 bg-slate-200 rounded-md col-span-3" />
                        <div class="h-2 bg-slate-200 rounded-md col-span-1" />
                        <div class="h-2 bg-slate-200 rounded-md col-span-2" />
                    </div>
                </div>
                <button class="ml-4 py-2 px-4 text-xl font-semibold w-fit border-2 border-gray-700 rounded-md cursor-pointer" @click.prevent="captchaReload">&#8635;</button>
            </div>
            <input type="text" @keydown.enter.prevent="" v-model="form.captcha">
            <InputError class="mt-3" :message="errorCaptcha" />
            <button class="mt-3 py-1 px-4 w-fit border-2 border-gray-700 rounded-md cursor-pointer" type="submit">Submit</button>
        </form>
    </div>
</template>