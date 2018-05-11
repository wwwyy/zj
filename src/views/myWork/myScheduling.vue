<template>
  <div id="myScheduling">
      <full-calendar :events="fcEvents" locale="en"></full-calendar>
  </div>
</template>
<script>
var demoEvents = [
	{
      title : 'Sunny Out of Office',
      start : '2018-05-09',
      end : '2018-05 -09'
    }
]
export default {
  data() {
      return {
           fcEvents : demoEvents,
      }
  },
  components : {
    'full-calendar': require('vue-fullcalendar')	
  },
}
</script>
