<template>
<article class="hentry">
    <header class="page__header mxl">
    </br>
      <h1 class="page__title">
        Blog
      </h1>
    </header>
    <div class="page__content">
        <div class="loading" v-if="loading"><h3>Loading..</h3></div>
        <div class="no-content" v-else-if="filteredList.length === 0"><h3>Nothing !!</h3></div>
        <ul v-else class="unlist post-list">
            <li v-for="{ title, sha, date } in filteredList" :key="sha" class="post-list__item ml">
                <Post :title="title" :date="date" :hash="sha"></Post>
            </li>
        </ul>
    </div>
</article>
</template>
