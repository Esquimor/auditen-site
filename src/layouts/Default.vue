<template>
  <div class="Layout">
    <header class="Layout-header">
      <g-link to="/" class="Layout-header-link" exact>Auditen Courtage</g-link>
      <div class="Layout-header-dropdown">
        <span class="Layout-header-dropdown-label">
          <span>Particuliers</span>
          <g-image src="@/assets/chevron-down.png" />
        </span>
        <div class="Layout-header-dropdown-content">
          <g-link
            to="/multirisque-particulier/"
            class="Layout-header-dropdown-content-link"
            >Multirisques des particuliers</g-link
          >
          <g-link
            to="/assurance-mono-auto/"
            class="Layout-header-dropdown-content-link"
            >Assurances automobiles</g-link
          >
          <g-link
            to="/assurance-automobile/"
            class="Layout-header-dropdown-content-link"
            >Bonus Malus</g-link
          >
        </div>
      </div>
      <div class="Layout-header-dropdown">
        <span class="Layout-header-dropdown-label">
          <span>Entreprises</span>
          <g-image src="@/assets/chevron-down.png" />
        </span>
        <div class="Layout-header-dropdown-content">
          <g-link
            to="/risques-entreprises/"
            class="Layout-header-dropdown-content-link"
            >Risques entreprises</g-link
          >
          <g-link to="/audit/" class="Layout-header-dropdown-content-link"
            >Audit</g-link
          >
          <g-link
            to="/gestion-des-risques/"
            class="Layout-header-dropdown-content-link"
            >Gestion des risques</g-link
          >
          <g-link
            to="/questionnaire-construction/"
            class="Layout-header-dropdown-content-link"
            >Assurances contructions</g-link
          >
          <g-link
            to="/assurance-mono-auto/"
            class="Layout-header-dropdown-content-link"
            >Assurances automobiles</g-link
          >
          <g-link
            to="/assurance-automobile/"
            class="Layout-header-dropdown-content-link"
            >Bonus Malus</g-link
          >
          <g-link
            to="/statut-tns-et-loi-madelin/"
            class="Layout-header-dropdown-content-link"
            >Statut TNS</g-link
          >
          <g-link
            to="/le-contrat-de-prevoyance/"
            class="Layout-header-dropdown-content-link"
            >Prévoyance</g-link
          >
          <g-link
            to="/reglement-europeen/"
            class="Layout-header-dropdown-content-link"
            >Données informatiques</g-link
          >
        </div>
      </div>
      <g-link to="/blog" class="Layout-header-link">Blog</g-link>
      <g-link to="/histoire-assurance/" class="Layout-header-link"
        >Histoire de l'assurance</g-link
      >
      <div class="Layout-header-separator" />
      <g-link to="/contact/" class="Layout-header-link">Contact</g-link>
    </header>
    <header class="Layout-mobile">
      <div class="Layout-mobile-menu" @click="menuMobile = !menuMobile">
        <g-image src="~/assets/menu-mobile.png" width="20px" />
        <span>Menu</span>
      </div>
      <div
        v-if="menuMobile"
        class="Layout-mobile-bk"
        @click="menuMobile = false"
      />
      <nav
        v-if="menuMobile"
        class="Layout-mobile-nav"
        @click="menuMobile = false"
      >
        <g-link to="/" class="Layout-mobile-link" exact
          >Auditen Courtage</g-link
        >
        <div class="Layout-mobile-dropdown">
          <span
            @click.stop="menuMobileParticulier = !menuMobileParticulier"
            class="Layout-mobile-dropdown-label"
          >
            <span>Particuliers</span>
            <g-image src="@/assets/chevron-down.png" />
          </span>
          <div
            v-if="menuMobileParticulier"
            class="Layout-mobile-dropdown-content"
          >
            <g-link
              to="/multirisque-particulier/"
              class="Layout-mobile-dropdown-content-link"
              >Multirisques des particuliers</g-link
            >
            <g-link
              to="/assurance-mono-auto/"
              class="Layout-mobile-dropdown-content-link"
              >Assurances automobiles</g-link
            >
            <g-link
              to="/assurance-automobile/"
              class="Layout-mobile-dropdown-content-link"
              >Bonus Malus</g-link
            >
          </div>
        </div>
        <div class="Layout-mobile-dropdown">
          <span
            @click.stop="menuMobileEntreprise = !menuMobileEntreprise"
            class="Layout-mobile-dropdown-label"
          >
            <span>Entreprises</span>
            <g-image src="@/assets/chevron-down.png" />
          </span>
          <div
            v-if="menuMobileEntreprise"
            class="Layout-mobile-dropdown-content"
          >
            <g-link
              to="/risques-entreprises/"
              class="Layout-mobile-dropdown-content-link"
              >Risques entreprises</g-link
            >
            <g-link to="/audit/" class="Layout-mobile-dropdown-content-link"
              >Audit</g-link
            >
            <g-link
              to="/gestion-des-risques/"
              class="Layout-mobile-dropdown-content-link"
              >Gestion des risques</g-link
            >
            <g-link
              to="/questionnaire-construction/"
              class="Layout-mobile-dropdown-content-link"
              >Assurances contructions</g-link
            >
            <g-link
              to="/assurance-mono-auto/"
              class="Layout-mobile-dropdown-content-link"
              >Assurances automobiles</g-link
            >
            <g-link
              to="/assurance-automobile/"
              class="Layout-mobile-dropdown-content-link"
              >Bonus Malus</g-link
            >
            <g-link
              to="/statut-tns-et-loi-madelin/"
              class="Layout-mobile-dropdown-content-link"
              >Statut TNS</g-link
            >
            <g-link
              to="/le-contrat-de-prevoyance/"
              class="Layout-mobile-dropdown-content-link"
              >Prévoyance</g-link
            >
            <g-link
              to="/reglement-europeen/"
              class="Layout-mobile-dropdown-content-link"
              >Données informatiques</g-link
            >
          </div>
        </div>
        <g-link to="/blog/" class="Layout-mobile-link">Blog</g-link>
        <g-link to="/histoire-assurance/" class="Layout-mobile-link"
          >Histoire de l'assurance</g-link
        >
        <g-link to="/contact/" class="Layout-mobile-link">Contact</g-link>
      </nav>
    </header>
    <main class="Layout-main">
      <slot />
    </main>
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
      menuMobile: false,
      menuMobileParticulier: false,
      menuMobileEntreprise: false,
    };
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
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 2px 2px #eeeeee;
    z-index: 5;
    @media (max-width: 800px) {
      display: none;
    }
    &-separator {
      flex-grow: 1;
    }
    &-link {
      padding: 0.75rem;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 600;
      &.active {
        background-color: #2ea3f2;
        color: white;
      }
    }
    &-dropdown {
      position: relative;
      display: inline-block;
      padding: 0.25rem 0.5rem;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 600;
      &:hover .Layout-header-dropdown-content {
        display: flex;
        flex-direction: column;
      }
      &-label {
        display: flex;
        align-items: center;
      }
      &-content {
        display: none;
        position: absolute;
        top: 30px;
        background-color: white;
        border: 1px solid #eeeeee;
        min-width: 200px;
        z-index: 1;
        &-link {
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: rgba(0, 0, 0, 0.8);
          &:hover {
            background-color: #eaeaea;
          }
        }
      }
    }
  }
  &-mobile {
    display: none;
    position: relative;
    @media (max-width: 800px) {
      display: initial;
    }
    &-menu {
      cursor: pointer;
      position: fixed;
      width: 100%;
      background-color: white;
      top: 0px;
      display: flex;
      padding: 0.3rem;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 2px solid #ddd;
      > span {
        margin-left: 0.5rem;
      }
    }
    &-bk {
      position: fixed;
      top: 46.2px;
      left: 0px;
      width: 100%;
      height: calc(100% - 46.2px);
      background-color: rgba(0, 0, 0, 0.2);
    }
    &-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 45px;
      left: 0px;
    }
    &-link {
      background-color: white;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 600;
      padding: 0.5rem;
      width: 250px;
    }
    &-dropdown {
      background-color: white;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 600;
      padding: 0.5rem;
      width: 250px;
      &-label {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
      }
      &-content {
        display: flex;
        flex-direction: column;
        &-link {
          background-color: white;
          text-decoration: none;
          color: rgba(0, 0, 0, 0.8);
          font-weight: 600;
          padding: 0.5rem;
          padding-left: 1rem;
          width: calc(250px - 1rem);
        }
      }
    }
  }
  &-main {
    min-height: 100vh;
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
