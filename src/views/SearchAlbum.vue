<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
// @ts-ignore
import SearchBar, { Album } from "../components/SearchBar.vue";

const albums = ref<Album[]>([]);

async function fetchAlbums(query: string): Promise<Album[]> {
    const { data } = await axios.get<Album[]>(
        `http://localhost:8000/api/albums/?title=${encodeURIComponent(query)}`
    );
    console.debug("fetched:", data);
    albums.value = data;
    console.debug("albums:", albums.value.length);
    return data;
}

function resetSearch() {
    albums.value = [];
}
</script>

<template>
    <div v-if="albums.length === 0">
        <SearchBar :searchFunction="fetchAlbums" />
    </div>

    <div v-else="albums.length > 0" class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div class="w-full max-w-lg">
            <div class="text-3xl font-bold text-gray-800 text-center">
                <h2 class="text-2xl font-semibold mb-4">
                    Founded album:
                </h2>
            </div>
            <div class="w-full justify-center">
                <ul class="space-y-3">
                    <li v-for="album in albums" :key="album.artistid"
                        class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        <p class="font-medium text-lg">Title: {{ album.title }}</p>
                        <p class="text-sm text-gray-600">By {{ album.artistid }}</p>
                    </li>
                </ul>
            </div>
            <div class="flex justify-center">
                <button @click="resetSearch"
                    class="mt-4 px-2 py-2 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 hover:text-white transition">
                    Search for another album!
                </button>
            </div>
        </div>
    </div>
</template>