<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div class="w-full max-w-lg">
            <form @submit.prevent="onSearch" class="bg-white shadow-lg rounded-xl p-8 w-full space-y-6">
                <h2 class="text-3xl font-bold text-gray-800 text-center">
                    Search for an album
                </h2>

                <div class="w-full flex items-center space-x-4">
                    <input v-model="input" type="text" placeholder="Album title..." required class="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <button type="submit" :disabled="!input" class="pi pi-search px-4 py-2 text-white font-semibold rounded-lg
                   bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition"></button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

export interface Album {
    id: number;
    title: string;
    artistid: string;
}

const props = defineProps<{
    searchFunction: (query: string) => Promise<Album[]>;
}>();

const input = ref("");
const router = useRouter();

async function onSearch() {
    try {
        const results = await props.searchFunction(input.value) ?? [];
        if (results.length > 0) {
            console.debug("Albums found:", results);
        } else {
            console.debug("No albums found.");
            router.push('/add-album');
        }
    } catch (err) {
        console.error(err);
        alert("Failed to search albums. Please try again.");
    }
}
</script>