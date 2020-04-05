<template>
  <Layout>
    <div class="Contact">
      <h1>Contact</h1>
      <form action="https://formspree.io/mlewgvjb" method="POST" class="Contact-form">
        <label class="Contact-form-element">
          <span>Votre nom :</span>
          <input type="text" name="name" placeholder="Nom" />
        </label>
        <label class="Contact-form-element">
          <span>Votre mail :</span>
          <input type="email" name="_replyto" placeholder="Mail" />
        </label>
        <input class="Contact-form-button" type="submit" value="Envoyer" />
      </form>
    </div>
  </Layout>
</template>

<script>
"use strict";

export default {
  name: "Contact",
  metaInfo: {
    title: "Contact"
  }
};
</script>

<style lang="scss">
.Contact {
  width: calc(100% - 1rem);
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.5rem;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  &-form {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    &-element {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      > input {
        margin-top: 0.5rem;
        width: 100%;
        max-width: 300px;
        padding: 0.25rem;
        border-radius: 5px;
        box-shadow: none;
        border: 1px solid lightgray;
        font-size: 15px;
      }
    }
    &-button {
      cursor: pointer;
      padding: 0.5rem;
      width: 100px;
      background-color: white;
      border: 1px solid #2ea3f2;
      color: #2ea3f2;
      border-radius: 5px;
      &:hover {
        color: white;
        background-color: #2ea3f2;
      }
    }
  }
}
</style>
