<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form @submit.prevent="submitForm" v-if="!albumAdded"
            class="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full space-y-6">
            <h2 class="text-3xl font-bold text-gray-800 text-center">Add an Album</h2>

            <div>
                <label for="title" class="block text-md font-medium text-gray-700 mb-1">
                    Title
                </label>
                <input id="title" v-model="form.title" type="text" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div>
                <label for="artist" class="block text-md font-medium text-gray-700 mb-1">
                    Artist
                </label>
                <input id="artist" v-model="form.artistid" type="text" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <button type="submit" :disabled="!isFormValid"
                class="w-full py-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 hover:text-white disabled:opacity-50 transition">
                Submit
            </button>
        </form>
        <div v-if="albumAdded" class="mt-6 bg-white rounded-xl shadow p-6">
            <div>
                <h3 class="text-2xl font-semibold mb-4">
                    Album {{ form.title }} added successfully!
                </h3>
                <p class="text-md text-center text-gray-600">
                    You can now search for it in the album list.
                </p>
            </div>
            <div class="flex justify-center">
                <router-link to="/"
                    class="mt-4 px-2 py-2 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 hover:text-white transition">
                    Search for another album!
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";

import { computed, reactive, ref } from "vue";

const form = reactive({
    title: "",
    artistid: "",
});

const isFormValid = computed(() => {
    return form.title.trim() !== '' && form.artistid.trim() !== '';
});

const albumAdded = ref(false);

async function submitForm() {
    try {
        const { data } = await axios.post("http://localhost:8000/api/albums/", form);

        if (data.albumid) {
            albumAdded.value = true;
        } else {
            alert("Failed to add album.");
        }

    } catch (err) {
        console.error(err);
        alert("Failed to submit form");
    }
}
</script>