<template>
  <div class="Layout">
    <header class="Layout-header">
      <nav class="Layout-header-nav">
        <g-link class="Layout-header-nav-item" to="/">Auditen Courtage</g-link>
        <g-link class="Layout-header-nav-item" to="/audit/">Audit</g-link>
        <g-link class="Layout-header-nav-item" to="/gestion-des-risques/"
          >Gestion des risques
        </g-link>
        <g-link class="Layout-header-nav-item" to="/risques-entreprises/">
          Riquest d'entreprises
        </g-link>
        <g-link
          class="Layout-header-nav-item"
          to="/questionnaire-construction/"
        >
          Garanties Assurances Construction
        </g-link>
        <g-link class="Layout-header-nav-item" to="/reglement-europeen/">
          Assurances des données informatiques
        </g-link>
        <g-link class="Layout-header-nav-item" to="/contact/">
          Contact
        </g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
}

.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &-header {
    &-nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &-item {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        padding: 1rem;
        &.active--exact {
          color: #2ea3f2;
        }
      }
    }
  }
}
</style>
