import { useRouter } from 'vue-router'

export function useNav() {
    const router = useRouter()

    const goBack = () => router.push({ name: 'mainPage' })
    const goToPost = (id) => router.push({ name: 'postPage', params: { id } })

    return { goBack, goToPost }
}