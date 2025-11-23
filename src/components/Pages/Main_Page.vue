<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import axios from 'axios';

import Post_Form from '../Forms/Post_Form.vue';
import Posts_List from '../Lists/Posts_List.vue';



// Запрос постов

const posts = ref([]);
const error = ref(null);
const loading = ref(false);

async function fetchPosts() {
    loading.value = true;
    error.value = null;

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data.slice(0, 10);
    } catch (err) {
        error.value = err.message || 'Во время запроса произошла ошибка';
    } finally {
        loading.value = false;
    }
}

onMounted(fetchPosts);

// Работа с постами 

function addPost(post) {
    posts.value.push(post);
}

function deletePost(id) {
    posts.value = posts.value.filter(post => post.id !== id);
}

// Модальное окно

const isModalOpen = ref(false);

// Сортировка

const options = [
    { id: 1, name: 'С начала', value: '1' },
    { id: 2, name: 'С конца', value: '2' }
];

const selectedSearch = ref("1");

function sortPosts() {
    if (selectedSearch.value === "1") {
        posts.value.sort((a, b) => a.id - b.id);
    } else {
        posts.value.sort((a, b) => b.id - a.id);
    }
}

watch(selectedSearch, () => {
    sortPosts();
    currentPage.value = 1;
});


// Поиск через инпут

const Search = ref("");

const filteredPosts = computed(() => {
    const searchLower = Search.value.toLowerCase();

    return posts.value.filter(p =>
        p.title.toLowerCase().includes(searchLower) ||
        p.body.toLowerCase().includes(searchLower)
    );
});

watch(Search, () => {
    currentPage.value = 1;
});

// Пагинация (постраничный вывод)

const currentPage = ref(1);
const postOnPage = ref(5);

const totalPages = computed(() =>
    Math.ceil(filteredPosts.value.length / postOnPage.value)
);

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * postOnPage.value;
    const end = start + postOnPage.value;
    return filteredPosts.value.slice(start, end);
});

// Динамический биндинг классов

const Color = ref(false);

function toggleColor() {
    Color.value = !Color.value;
}

</script>

    <template>

    <section class="section">

        <Button_UI
            text="Открыть форму ввода"
            :onClick="() => { isModalOpen = true; toggleColor() }"
            style="width: 120px; height: 80px; margin-top: 20px;"
            :class="Color ? 'red' : 'gray'"
        />

        <Modal_UI
            v-if="isModalOpen"
            @close="{isModalOpen = false; toggleColor()}"
        >
            <Post_Form @add-post="addPost"/>
        </Modal_UI>

        <Select_UI :options="options" v-model="selectedSearch" />

        <Input_UI
            style="width: 550px; height: 60px;"
            v-model="Search"
            placeholder="Что будем искать?"
        />

        <Pag_UI
            v-model="currentPage"
            :totalPages="totalPages"
        />

        <Posts_List
            v-if="posts.length !== 0"
            @delete-post="deletePost"
            :posts="paginatedPosts"
        />

        <div v-else-if="loading" class="white">
            Загрузка...
        </div>
        <div v-else class="white">
            Постов пока что нет
        </div>

    </section>

</template>

<style>

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 60vw;
    min-height: 1160px;

    background: #212121;
}

.red {
    color: red;
}
.gray {
    color: gray;
}
.white{
    color: white;
}

</style>
