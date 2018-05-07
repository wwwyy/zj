<template>
  <div>
    <!-- 常规选择 -->
    <Select placeholder="班次类型">
        <Option v-for="option in typeList" :value="option.type" :key="option.id">
            {{option.text}}
        </Option>
    </Select>
</div>
</template>
<script>
export default {
  data () {
      return {
          typeList: [
                    {
                        'type': '1',
                        'id': '1',
                        'text': '1'
                    },
                    {
                        'type': '2',
                        'id': '2',
                        'text': '3'
                    }
                ],
      }
  }
}
</script>
