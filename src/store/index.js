import { createStore } from 'vuex'

const db = 'naimportujte si sem databazi'
// Create a new store instance.
const store = createStore({
  state: {
    counter: 0,
    showModal: false,
    modalTitle: '',
    modalContent: 'first'
  },
  mutations: { // no async code ||||
    increment (state) {
      state.counter += 1
    },
    decrement (state) {
      state.counter -= 1
    },
    setValue (state, value) {
      if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new Error('wrong argument ....')
      }
      state.counter = value
    },
    setModalTitle (state, value) {
      state.modalTitle = value
    },
    showModal (state) {
      state.showModal = true
    },
    closeModal (state) {
      state.showModal = false
    },
    setModalContent (state, value) {
      state.modalContent = value
    }
  },
  actions: {
    async fetchEmployees (context) {
      const employees = await db.get('employees')
      return employees
    }
  }
})

export default store



/*
  {
    state: { datové položky store },
    (getters: { funkce, které vracejí ty datové položky a nebo výpočty z nich})
    mutations: { funkce, které mohou měnit datové položky (až do verze 3 to jinak nešlo) - pouze synchronní }
    actions: { funkce, které můžou obsahovat async kód}
  }



*/