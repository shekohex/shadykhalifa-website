<template>
  <router-link
          :to="'/post/' + hash"
          class="plainlink">
          <span class="b m0">{{ title }}</span>
          <time
          pubdate="pubdate"
          :datetime="date | formatDate"
          :title="date | formatDate"
          class="meta h4 b">{{ date | timeago }}</time>
  </router-link>
</template>
