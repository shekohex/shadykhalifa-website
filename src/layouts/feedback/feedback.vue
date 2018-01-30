<template>
  <article class="hentry">
    <header class="page__header mxl">
    </br>
      <p v-if="!messageSent" v-html="md(content)"></p>
      <p 
      v-if="messageSent"
      v-html="md(`### Thank You for the Feedback :two_hearts: ,You Could See Other Feedbacks :speech_balloon: [Here](https://dead-simple-feedback.herokuapp.com)`)">
      </p>
    </header>
    <div class="page__content">
        <form @submit.prevent="sendFeedback"
            :class="{ error: failed }"
            v-if="!loading && !messageSent"
            class="cf">
            <textarea
                v-model="message"
                name="message"
                type="text"
                id="input-message"
                :placeholder="placeHolder"
                @focus="failed = false"
                @blur="failed = false"
                autofocus required>
            </textarea>
            <button
            :class="{ sending: sendingMsg }"
            :disabled="sendingMsg"
            type="submit"
            id="input-submit">
            Send
            </button>
        </form>
    </div>
</article>
</template>
<style src="./feedback.scss" lang="scss" scoped></style>
