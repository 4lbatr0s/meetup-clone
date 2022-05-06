<script>
export default { //we'll use name "MeetupCard" when we import it from other files.
    name:"MeetupCard",
    props: ['meetup'] //TODO: meetup is the same value from HomeWiew template's meetup = "meetup". It's same with meetup, not "meetup" 
}
</script>


<!--div.name means a div with the class of name-->
<!--You have to put one ROOT element inside of the template and put every other elements in this root tag. in this case it is article.-->
<template class="templatex" lang = "pug">
article.card
    img(:src="`https://picsum.photos/300/200?random=${meetup._id}`", alt="meetup-picture")
    h2.card-title {{meetup.name}}
    p {{meetup.location}}
</template>

<!--this is our style.-->
<style scoped>
.card{
    display: inline-block;
    text-align: left;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 20px;
    min-width:200px;
}

.card-title {
    color:black; 
}
</style>