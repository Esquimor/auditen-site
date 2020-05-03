<template>
  <div class="Layout">
    <header class="Layout-header" @click="clickMenu">
      <g-image src="~/assets/menu-mobile.png" width="20px" />
      <span>Menu</span>
    </header>
    <div class="Layout-center">
      <nav class="Layout-nav Layout-desktop">
        <g-link class="Layout-nav-item" to="/">Auditen Courtage</g-link>
        <g-link class="Layout-nav-item" to="/audit/">Audit</g-link>
        <g-link class="Layout-nav-item" to="/gestion-des-risques/"
          >Gestion des risques</g-link
        >
        <g-link class="Layout-nav-item" to="/risques-entreprises/"
          >Risques d'entreprises</g-link
        >
        <g-link class="Layout-nav-item" to="/questionnaire-construction/"
          >Garanties Assurances Construction</g-link
        >
        <g-link class="Layout-nav-item" to="/reglement-europeen/"
          >Assurances des données informatiques</g-link
        >
        <g-link class="Layout-nav-item" to="/statut-tns-et-loi-madelin/"
          >Statut TNS et Loi Madelin</g-link
        >
        <g-link class="Layout-nav-item" to="/le-contrat-de-prevoyance/"
          >Le contrat de prévoyance</g-link
        >
        <g-link class="Layout-nav-item" to="/assurance-automobile/"
          >Assurance Automobile Bonus Malus</g-link
        >
        <g-link class="Layout-nav-item" to="/histoire-assurance/"
          >Histoire de l'Assurance</g-link
        >
        <g-link class="Layout-nav-item" to="/multirisque-particulier/"
          >Multirisque des particuliers</g-link
        >
        <g-link class="Layout-nav-item" to="/assurance-mono-auto/"
          >Assurances automobiles</g-link
        >
        <g-link class="Layout-nav-item" to="/contact/">Contact</g-link>
      </nav>
      <div
        v-if="showMenuMobile"
        class="Layout-mobile"
        @click="showMenuMobile = false"
      >
        <div class="Layout-mobile-bk" />
        <nav class="Layout-mobile-nav Layout-desktop">
          <g-link class="Layout-mobile-nav-item" to="/"
            >Auditen Courtage</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/audit/">Audit</g-link>
          <g-link class="Layout-mobile-nav-item" to="/gestion-des-risques/"
            >Gestion des risques</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/risques-entreprises/"
            >Risques d'entreprises</g-link
          >
          <g-link
            class="Layout-mobile-nav-item"
            to="/questionnaire-construction/"
            >Garanties Assurances Construction</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/reglement-europeen/"
            >Assurances des données informatiques</g-link
          >
          <g-link
            class="Layout-mobile-nav-item"
            to="/statut-tns-et-loi-madelin/"
            >Statut TNS et Loi Madelin</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/le-contrat-de-prevoyance/"
            >Le contrat de prévoyance</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/assurance-automobile/"
            >Assurance Automobile Bonus Malus</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/histoire-assurance/"
            >Histoire de l'Assurance</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/multirisque-particulier/"
            >Multirisque des particuliers</g-link
          >
          <g-link class="Layout-mobile-nav-item" to="/contact/">Contact</g-link>
        </nav>
      </div>
      <main class="Layout-main">
        <slot />
      </main>
    </div>
    <footer class="Layout-footer">
      <div>
        AUDITEN COURTAGE
        <br />4, Place Louis Blanc <br />83000 TOULON <br />Tél : 04 94 92 63 12
        <br />conseils(at)auditen-courtage.fr
      </div>
      <div class="Layout-footer-info">
        <g-link to="/mentions-legales/">Mentions Légales</g-link>
        <br />
        <span>Tous droit réservé 2020</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
"use strict";

export default {
  name: "Layout",
  data() {
    return {
      showMenuMobile: false,
    };
  },
  methods: {
    clickMenu() {
      this.showMenuMobile = !this.showMenuMobile;
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  a {
    color: #1976d2;
  }
}

.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  &-header {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0 2px 2px #eeeeee;
    z-index: 5;
    @media (max-width: 1100px) {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      background-color: white;
    }
    > span {
      margin-top: -3px;
      margin-left: 10px;
    }
  }
  &-center {
    display: flex;
  }
  &-nav {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
    width: 300px;
    box-shadow: 3px 0px 3px #eeeeee;
    z-index: 3;
    background-color: white;
    @media (max-width: 1100px) {
      display: none;
    }
    &-item {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.9);
      padding: 1rem;

      &:hover {
        background-color: #fafafa;
      }
      &.active--exact {
        color: #2ea3f2;
      }
    }
  }
  &-mobile {
    position: relative;
    display: none;
    z-index: 20;
    @media (max-width: 1100px) {
      display: initial;
    }
    &-bk {
      cursor: pointer;
      position: fixed;
      top: 51px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #aaa;
      opacity: 0.5;
      z-index: 20;
    }
    &-nav {
      position: fixed;
      top: 51px;
      left: 0px;
      width: 100%;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      background-color: white;
      z-index: 50;
      &-item {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.9);
        padding: 0.75rem;

        &:hover {
          background-color: #fafafa;
        }
        &.active--exact {
          color: #2ea3f2;
        }
      }
    }
  }
  &-main {
    min-height: 100vh;
    flex-grow: 1;
    @media (max-width: 1100px) {
      margin-top: 51px;
    }
  }
  &-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    z-index: 10;

    @media (max-width: 470px) {
      flex-direction: column;
    }
    a {
      color: white;
    }
    > div {
      padding: 0.5rem;
    }
    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
