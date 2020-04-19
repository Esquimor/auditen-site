<template>
  <Layout>
    <div class="Contact">
      <g-image src="~/assets/contact.png" width="500" />
      <form
        action="https://formspree.io/mlewgvjb"
        method="POST"
        class="Contact-form"
      >
        <h1>Contact</h1>
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
      <div id="map"></div>
    </div>
  </Layout>
</template>

<script>
"use strict";

export default {
  name: "Contact",
  metaInfo: {
    title: "Contact",
  },
  mounted() {if (process.isClient) {
    let map = L.map("map").setView([43.1198955, 5.934253], 20);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    let Icon = L.icon({
      iconUrl: require("@/assets/marker.png"),

      iconSize: [25, 40], // size of the icon
      iconAnchor: [22, 40], // point of the icon which will correspond to marker's location
    });

    L.marker([43.1198975, 5.934293], { icon: Icon }).addTo(map);
}
  },
};
</script>

<style lang="scss">
#map {
  height: 300px;
  margin: 2rem auto 0;

  @media (max-width: 750px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
  @media (max-width: 350px) {
    width: 200px;
  }
}

.Contact {
  width: calc(100% - 1rem);
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.5rem;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  img {
    margin: 0 auto;
    display: flex;
  }
  &-form {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    margin: 0 auto;
    justify-content: center;
    width: 300px;
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
