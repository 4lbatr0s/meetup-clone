import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: { //state is the place where we hold our info
    counter:0,
    meetups:[],
    persons:[],
    meetup:{},
    person:{}
  },
  getters: { //getters are specific functions, for example a function to bring todo arrays in state by filterin todos with true value.
  },
  mutations: { 
    SET_MEETUPS(state, data){
      state.meetups = data
    },
    SET_PERSONS(state, data){
      state.persons = data
    },
    SET_MEETUP(state, data){
      state.meetup = data
    },
    SET_PERSON(state, data){
      state.person = data
    },
    SET_COUNTER(state, data){
      state.counter = data
    }
  },
  actions: { //commit: a function that we will call later to directly manipulate state, state: is the state.
    async fetchMeetups({commit}){ //no state because we will not get our values from state, it will come from an external server. 
      const result = await axios.get('http://localhost:3000/meetup/all/json')
      commit('SET_MEETUPS', result.data) //result.data: the data we send to mutation.
    }, 
    async fetchPersons({commit}) {
      const result = await axios.get('http://localhost:3000/person/all/json')
      commit('SET_PERSONS', result.data)
    },
    async fetchMeetup({commit}, id) {
      const result = await axios.get(`http://localhost:3000/meetup/${id}/json`)
      commit('SET_MEETUP', result.data)
    },
    async fetchPerson({commit}, id) {
      const result = await axios.get(`http://localhost:3000/person/${id}/json`)
      commit('SET_PERSON', result.data)
    },
    Increase({commit, state}){//sing value here, set value in mutation.
      const newCount = state.counter+1
      commit('SET_COUNTER', newCount)
    }
  },
  modules: {
  }
})
