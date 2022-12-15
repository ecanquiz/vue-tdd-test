import { ref, onMounted } from "vue"
import fetchUser from "./fetchUser"

export function useUser(userId) {
  const user = ref()
  
  onMounted(() => fetchUser(userId).then((r=>user.value = r)))

  return { user }
}
