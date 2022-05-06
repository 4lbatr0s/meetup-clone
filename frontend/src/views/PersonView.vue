<script> 

// @ is an alias to /src
import PersonCard from '@/components/person-card.vue' 
import {mapState, mapActions} from 'vuex'
export default {
  name: 'PersonView',
  components: {
    PersonCard
  }, 
  computed:{ //computed: a property that is dynamically generated based on other values, in this case its based on meetup on the store.
    ...mapState(['persons'])//with the help of mapState function, we call the  state of the store.
  }, 
  methods:{
    ...mapActions(['fetchPersons']) //map this value to incrementCounter value.
  }, 
  created(){ //whenever create this component, make the calls inside of it.
    this.fetchPersons()
  }
}
</script>
<!--TODO:this is where you write your scripts-->

<!--:TODO:this is where you render your html, pug:use pug language and render it instead of html-->
<!--you can use MeetupCard instead of meetup-card-->
<!--section: we seperate parts of our view which are not related to each other, counter:meetups ? no relation.-->
<template lang="pug"> 
main
  section
    person-card(v-for="person in persons", :person="person")
</template>

<!--scope: this style only implemented to this .vue file...-->
<style scoped>
.increment-button{
  color:darkcyan;
  padding:10px 20px;
  margin:20px;
  border-radius: 8px;
  background-color: white;
  border:1px solid darkcyan;
  font-size:16px;
  font-weight: 600;
  cursor:pointer
}

.increment-button:hover{
  background-color: darkcyan;
  color:white
}

section {
 padding: 40px;
}
</style>


