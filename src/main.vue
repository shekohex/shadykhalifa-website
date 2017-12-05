<template>
  <div id="app" class="app">
    <header class="wrap sans site__header" role="banner">
    <a class="site__title b plainlink" href="/">
      <router-link
          to="/"
          class="plainlink">
          Shady Khalifa
        </router-link>
    </a>
  <nav class="site__nav" role="navigation">
    <ul class="nav">
      <li>
         <router-link
          to="blog"
          class="plainlink">
          Blog
        </router-link>
      </li>
      <li>
         <router-link
          to="portfolio"
          class="plainlink">
          Portfolio
        </router-link>
      </li>
    </ul>
  </nav>
  </header>
      <main class="wrap site__content page mxl" role="main">
        <article class="hentry">
          <div class="h1 page__content">
            <transition name="router" mode="out-in">
            <router-view class="view router-view"></router-view>
            </transition>
          </div>
        </article>
      </main>
   <footer class="wrap site__footer pvl" role="contentinfo">
      <p>Content &copy; {{ new Date().getFullYear() }} Shady Khalifa, unless otherwise noted.</p>
    </footer>
  </div>
</template>

