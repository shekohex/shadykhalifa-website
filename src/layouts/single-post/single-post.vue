<template>
    <article class="hentry" itemscope itemtype="http://schema.org/Article">
      <header class="page__header mxl">
        <h1 class="page__title" itemprop="name headline">{{ title }}</h1>
        <p class="post__date hide"><time itemprop="datePublished" :datetime="date">{{date | timeago}}</time></p>
      </header>
      <div class="page__content" itemprop="articleBody" v-html="md(content)">
      </div>
    </article>
</template>