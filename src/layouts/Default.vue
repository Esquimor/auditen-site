<template>
  <div class="Layout">
    <header class="Layout-header">
      <nav class="Layout-header-nav Layout-header-desktop">
        <g-link class="Layout-header-nav-item" to="/">Auditen Courtage</g-link>
        <g-link class="Layout-header-nav-item" to="/audit/">Audit</g-link>
        <g-link class="Layout-header-nav-item" to="/gestion-des-risques/">Gestion des risques</g-link>
        <g-link class="Layout-header-nav-item" to="/risques-entreprises/">Risques d'entreprises</g-link>
        <g-link
          class="Layout-header-nav-item"
          to="/questionnaire-construction/"
        >Garanties Assurances Construction</g-link>
        <g-link
          class="Layout-header-nav-item"
          to="/reglement-europeen/"
        >Assurances des données informatiques</g-link>
        <g-link class="Layout-header-nav-item" to="/contact/">Contact</g-link>
      </nav>

      <nav class="Layout-header-mobile">
        <div class="Layout-header-mobile-menu" @click="showMenuMobile = !showMenuMobile">
          <g-image src="~/assets/menu-mobile.png" width="500" />
          <span>Menu</span>
        </div>
        <div
          v-if="showMenuMobile"
          class="Layout-header-mobile-content"
          @click="showMenuMobile = false"
        >
          <div class="Layout-header-mobile-content-bk" />
          <div class="Layout-header-mobile-content-nav">
            <g-link class="Layout-header-nav-item" to="/">Auditen Courtage</g-link>
            <g-link class="Layout-header-nav-item" to="/audit/">Audit</g-link>
            <g-link class="Layout-header-nav-item" to="/gestion-des-risques/">Gestion des risques</g-link>
            <g-link class="Layout-header-nav-item" to="/risques-entreprises/">Risques d'entreprises</g-link>
            <g-link
              class="Layout-header-nav-item"
              to="/questionnaire-construction/"
            >Garanties Assurances Construction</g-link>
            <g-link
              class="Layout-header-nav-item"
              to="/reglement-europeen/"
            >Assurances des données informatiques</g-link>
            <g-link class="Layout-header-nav-item" to="/contact/">Contact</g-link>
          </div>
        </div>
      </nav>
    </header>
    <main class="Layout-main">
      <slot />
    </main>
    <footer class="Layout-footer">
      <div>
        AUDITEN COURTAGE
        <br />4, Place Louis Blanc
        <br />83000 TOULON
        <br />Tél : 04 94 92 63 12
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
      showMenuMobile: false
    };
  }
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
}

.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  &-header {
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 1000;
    &-nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
      &-item {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.9);
        padding: 1rem;
        &:hover {
          color: rgba(0, 0, 0, 0.4);
        }
        &.active--exact {
          color: #2ea3f2;
        }
      }
    }
    &-desktop {
      @media (max-width: 900px) {
        display: none;
      }
    }
    &-mobile {
      display: none;
      @media (max-width: 900px) {
        display: initial;
      }
      &-menu {
        cursor: pointer;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        > img {
          width: 15px;
          margin-right: 0.5rem;
        }
      }
      &-content {
        position: relative;
        &-bk {
          position: fixed;
          top: 42.25px;
          width: 100%;
          height: calc(100% - 42.25px);
          background-color: lightgray;
          opacity: 0.2;
        }
        &-nav {
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 42.25px;
          background-color: white;
          z-index: 150;
        }
      }
    }
  }
  &-main {
    min-height: 100vh;
  }
  &-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;

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
