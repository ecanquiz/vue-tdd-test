import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent } from "vue"
import { useUser } from "../useUser"
import axios from "axios"

// Mock API request
axios.get = vi.fn().mockResolvedValue({ data: { id: 1, name: 'User' } });

test('fetch user on mount', async () => {
  const TestComponent = defineComponent({
    template: '<div v-if="user">{{user.name}}</div>',
    props: {
      // Define props, to test the composable with different input arguments
      userId: {
        type: Number,
        required: true
      }
    },
    setup (props) {
      return {
        // Call the composable and expose all return values into our
        // component instance so we can access them with wrapper.vm
        ...useUser(props.userId)
      }
    }
  })

  const wrapper = mount(TestComponent, {
    props: {
      userId: 1
    }
  })

  expect(wrapper.vm.user).toBeUndefined()

  await flushPromises()

  expect(wrapper.vm.user).toEqual({ id: 1, name: 'User' })
})

