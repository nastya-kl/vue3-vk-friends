<template>
  <li class="post">
    <div class="post__info">
      <img class="post__owner-photo" :src="user.photo_400_orig" alt="" />
      <div>
        <p>{{ user.first_name }} {{ user.last_name }}</p>
        <p>{{ formatDate(post.date) }}</p>
      </div>
    </div>
    <div>
      <div v-if="showAll || post.text.split('\n').length <= 15">
        <p class="post__text">{{ post.text }}</p>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column' }" v-else>
        <p class="post__text">{{ truncatedText }}</p>
        <button class="post__show-more" @click="showAll = true">Показать еще</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showAll: false
    }
  },
  computed: {
    user() {
      return this.$store.state.profile.user
    },
    truncatedText() {
      const lines = this.post.text.split('\n')
      return lines.slice(0, 6).join('\n')
    }
  },
  methods: {
    formatDate(data) {
      const options = { day: 'numeric', month: 'short', year: 'numeric' }
      const date = new Date(data * 1000)
      return date.toLocaleDateString('ru-RU', options)
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  min-height: 100px;
  border: 1px solid rgb(75, 75, 75);
  border-radius: 7px;
  background-color: rgb(43, 40, 40);
  padding: 10px;

  &__info {
    display: flex;
    gap: 10px;

    p {
      margin: 0;
    }

    :first-child {
      font-weight: 500;
      margin-bottom: 5px;
      color: #71aaeb;
    }

    :nth-of-type(2) {
      font-size: 12px;
      color: rgb(134, 134, 134);
    }
  }

  &__owner-photo {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
  }

  &__text {
    white-space: pre-line;
    word-wrap: break-word;
    margin: 10px 0;
  }

  &__show-more {
    margin: 0 auto;
    position: relative;
    width: 120px;
    padding: 0;
    font-size: 12px;
    background-color: inherit;
    border: none;
    color: #71aaeb;
    transition: all 0.3s ease-in-out;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      right: 44%;
      top: -25px;
      border: solid #71aaeb;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
