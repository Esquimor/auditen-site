<template>
  <Layout>
    <div class="Home-image" alt="Example image">
      <div class="Home-image-title">
        <h1>Auditen Courtage</h1>
        <h2>Votre courtier en assurance</h2>
      </div>
    </div>
    <section>
      <h1>Auditen Courtage</h1>
      <p>
        Courtier en assurances, AUDITEN COURTAGE vous apporte ses conseils dans
        la gestion de vos risques.
      </p>
      <p>
        AUDITEN COURTAGE conseille ses clients et adapte leurs solutions
        d’assurances et de gestion des risques à leurs activités. Nous leur
        apportons des solutions d’assurances personnalisées.
      </p>
      <p>Nous sommes à votre écoute au 04 94 92 60 13.</p>
    </section>
    <section>
      <h2>Audit de vos risques</h2>
      <p>
        Quel que soit votre statut (entreprise, collectivité), nous pouvons vous
        assister dans l’une des missions suivantes :
      </p>
      <ol>
        <li>
          Audit avec ou sans renégociation des contrats d’assurances dans le
          cadre d’un appel d’offre,
        </li>
        <li>Prévention et protection des risques</li>
        <li>Mise en place et suivi des programmes d’assurances</li>
      </ol>
      <p>
        Nous restons à votre écoute pour personnaliser nos missions selon vos
        attentes et besoins.
      </p>
      <p>Contactez-nous au 04 94 92 63 12.</p>
    </section>
    <IndexItem>
      <template v-slot:image>
        <g-image src="~/assets/RE1DCLA.jpg" width="500" />
      </template>
      <h2>Solutions</h2>
      <p>
        AUDITEN COURTAGE vous apporte des services en matière de prévention et
        protection en gestion des risques et en analyse des sinistres.
      </p>
    </IndexItem>
    <IndexItem>
      <template v-slot:image>
        <g-image src="~/assets/laptop.jpg" width="500" />
      </template>
      <h2>Entreprises ou Particuliers, AUDITEN COURTAGE est à vos côtés</h2>
      <p>Le rôle d’AUDITEN COURTAGE est de vous écouter, de comprendre vos besoins et de vous apporter une solution d’assurance qui sera adaptée et maintenue à votre situation.</p>
      <p>Nous choisissons ces solutions en toute indépendance.</p>
      <p>AUDITEN COURTAGE</p>
      <p>4, Place Louis Blanc</br>83000 TOULON</p>
      <p>Tél : 04 94 92 63 12</p>
    </IndexItem>
    <IndexItem>
      <template v-slot:image>
        <g-image src="~/assets/boss.jpg" width="500" />
      </template>
      <h2>Expérience</h2>
      <p>AUDITEN COURTAGE, Professionnel de l’assurance depuis plus de 25 ans, nous vous accompagnons sur vos risques de dommages et d’assurance de personnes.</p>
    </IndexItem>
  </Layout>
</template>

<script>
"use strict";

import IndexItem from "@/components/IndexItem";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    IndexItem
  }
};
</script>

<style lang="scss">
.Home {
  &-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-image: url("../assets/auditen-fond.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &-title {
      width: 100%;
      text-align: center;
      background-color: white;
      color: hsl(0, 0%, 7%);
      padding: 1rem 0.5rem;
      > h1 {
        margin: 0rem;
      }
      > h2 {
        margin: 0rem;
      }
    }
  }
}
</style>
