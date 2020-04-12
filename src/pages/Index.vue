<template>
  <Layout>
    <div class="Home-image" alt="Example image">
      <div class="Home-image-title">
        <h1>Auditen Courtage</h1>
        <h2>Votre courtier en assurance</h2>
      </div>
    </div>
    <section class="Home-section">

    <p><strong>AUDITEN COURTAGE</strong> est un courtier indépendant, installé à Toulon. Nous sommes à votre service pour conseiller et vous assister dans la gestion de vos contrats d'assurances et de vos risques.</p>
      <h2>Audit de vos risques</h2>
      <p>Quel que soit votre statut (entreprise, collectivité), nous pouvons vous assister dans l’une des missions suivantes :</p>
      <ol>
        <li>Audit avec ou sans renégociation des contrats d'assurances dans le cadre d’un appel d’offre,</li>
        <li>Prévention et protection des risques</li>
        <li>Mise en place et suivi des programmes d'assurances</li>
      </ol>
      <p>
        Nous restons à votre écoute pour personnaliser nos missions selon vos attentes et besoins. Contactez-nous au
        <strong>04 94 92 63 12.</strong>
      </p>
    </section>
    <section class="Home-section">
      <h2>Auditen Courtage</h2>
      <p>Courtier en assurances, AUDITEN COURTAGE vous apporte ses conseils dans la gestion de vos risques.</p>
      <p>AUDITEN COURTAGE conseille ses clients et adapte leurs solutions d’assurances et de gestion des risques à leurs activités. Nous leur apportons des solutions d’assurances personnalisées.</p>
      <p>
        Nous sommes à votre écoute au
        <strong>04 94 92 63 12.</strong>
      </p>
    </section>
    <section class="Home-section">
      <h2>Audit</h2>
      <p>AUDITEN COURTAGE réalise pour vous un audit de votre situation en identifiant les risques et les besoins de votre entreprise.</p>
      <p>AUDITEN COURTAGE vous propose des solutions maintenues à jour tout en vous offrant un service constant dans la gestion et lors des sinistres.</p>
      <p>
        Pour plus de renseignements, contactez-nous au
        <strong>04 94 92 63 12</strong>.
      </p>
    </section>
    <IndexItem class="Home-section">
      <template v-slot:image>
        <g-image src="~/assets/solution.png" width="500" />
      </template>
      <h2>Solutions</h2>
      <p>AUDITEN COURTAGE vous apporte des services en matière de prévention et protection en gestion des risques et en analyse des sinistres.</p>
    </IndexItem>
    <IndexItem class="Home-section" inverse>
      <template v-slot:image>
        <g-image src="~/assets/aggrement.png" width="500" />
      </template>
      <h2>A vos côtés</h2>
      <p>Le rôle d’AUDITEN COURTAGE est de vous écouter, de comprendre vos besoins et de vous apporter une solution d'assurance qui sera adaptée et maintenue à votre situation.</p>
      <p>Nous choisissons ces solutions en toute indépendance.</p>
      <p>AUDITEN COURTAGE</p>
      <p>
        4, Place Louis Blanc
        <br />83000 TOULON
      </p>
      <p>Tél : 04 94 92 63 12</p>
    </IndexItem>
    <IndexItem class="Home-section">
      <template v-slot:image>
        <g-image src="~/assets/expert.png" width="500" />
      </template>
      <h2>Expérience</h2>
      <p>AUDITEN COURTAGE, Professionnel de l'assurance depuis plus de 25 ans, nous vous accompagnons sur vos risques de dommages et d'assurance de personnes.</p>
    </IndexItem>
    <div>
      <h2 class="Home-newsletter">News Letter</h2>
      <div id="monsitemedia_newsletter_wall"></div>
    </div>
  </Layout>
</template>

<script>
"use strict";

import IndexItem from "@/components/IndexItem";

const WidgetsHelper = new (function() {
  this.establishWidget = function(e, n, t, r) {
    var o = function() {
        var e = 1e3,
          t = -window.scrollY / (e / 15),
          n = setInterval(function() {
            0 != window.scrollY ? window.scrollBy(0, t) : clearInterval(n);
          }, 15);
      },
      i = function(e) {
        var t = new XMLHttpRequest();
        t.open("GET", e, !0),
          (t.onload = function() {
            200 == t.status &&
              ((document.querySelector("." + r).innerHTML = t.responseText),
              o());
          }),
          t.send(null);
      };
    null == document.querySelector("." + r) &&
      t.insertAdjacentHTML(
        "beforeend",
        '<div class="widget-wrapper ' + r + '"></div>'
      ),
      document.querySelector("." + r).addEventListener("click", function(e) {
        if (
          document.querySelector(".pagination").contains(e.target) &&
          (e.preventDefault(), e.target.attributes.href)
        ) {
          var t = n + e.target.getAttribute("href");
          i(t);
        }
      }),
      i(e);
  };
})();

export default {
  metaInfo: {
    title: "Auditen Courtage"
  },
  components: {
    IndexItem
  },
  mounted() {
    const id = "2889823";
    const host = "https://app.arturin.com";
    const url = host + "/newsletters_feed?id=" + id;
    const widgetClass = "newsletter-widget-wrapper";

    const target = document.getElementById("monsitemedia_newsletter_wall");
    WidgetsHelper.establishWidget(url, host, target, widgetClass);
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
    background-image: url("../assets/auditen-fond.png");
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
  &-section {
    width: calc(100% - 1rem);
    max-width: 700px;
    margin: 0.5rem auto;
  }
  &-newsletter {
    width: calc(100% - 1rem);
    padding: 0 1rem;
    max-width: 700px;
    margin: 0.5rem auto;
  }
}

#monsitemedia_newsletter_wall {
  .text-center {
    text-align: center;
  }
  .justify {
    text-align: justify;
  }
  .hidden-sm {
    display: none;
  }
  .widget-container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 540px) {
    .widget-container {
      width: 80%;
    }
  }
  @media only screen and (min-width: 960px) {
    .widget-container {
      width: 75%;
      max-width: 900px;
    }
  }
  .widget-row {
    position: relative;
    width: 100%;
  }
  .widget-row [class^="col"] {
    float: left;
    margin: 10px;
    min-height: 0.125rem;
  }
  .widget-row::after {
    content: "";
    display: table;
    clear: both;
  }
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    width: 96%;
  }
  .col-1-sm {
    width: 4.3333333333%;
  }
  .col-2-sm {
    width: 12.6666666667%;
  }
  .col-3-sm {
    width: 21%;
  }
  .col-4-sm {
    width: 29.3333333333%;
  }
  .col-5-sm {
    width: 37.6666666667%;
  }
  .col-6-sm {
    width: 46%;
  }
  .col-7-sm {
    width: 54.3333333333%;
  }
  .col-8-sm {
    width: 62.6666666667%;
  }
  .col-9-sm {
    width: 71%;
  }
  .col-10-sm {
    width: 79.3333333333%;
  }
  .col-11-sm {
    width: 87.6666666667%;
  }
  .col-12-sm {
    width: 96%;
  }
  @media only screen and (min-width: 720px) {
    .col-1 {
      width: 4.3333333333%;
    }
    .col-2 {
      width: 12.6666666667%;
    }
    .col-3 {
      width: 21%;
    }
    .col-4 {
      width: 29.3333333333%;
    }
    .col-5 {
      width: 37.6666666667%;
    }
    .col-6 {
      width: 46%;
    }
    .col-7 {
      width: 54.3333333333%;
    }
    .col-8 {
      width: 62.6666666667%;
    }
    .col-9 {
      width: 71%;
    }
    .col-10 {
      width: 79.3333333333%;
    }
    .col-11 {
      width: 87.6666666667%;
    }
    .col-12 {
      width: 96%;
    }
    .hidden-sm {
      display: block;
    }
  }
  .news__inr {
    width: 100%;
    height: 368px;
    margin: 0 0 40px;
    border: 1px solid #eee;
    float: left;
    overflow: hidden;
  }
  .news__inr .news__img {
    height: 170px;
    overflow: hidden;
  }
  .news__inr .news__cont {
    height: 500px;
    padding: 20px;
    color: #fff;
    background-color: #a1b0c3;
    float: left;
    transition: all 0.3s linear;
  }
  .news__inr .news__cont h4 {
    font-size: 2.3rem;
    font-weight: 100;
  }
  .news__inr .news__cont .news__date {
    font-size: 2rem;
    font-weight: 500;
  }
  .news__inr .news__cont .more-btn a {
    display: inline-block;
    margin: 20px 0 0;
    padding: 10px 20px;
    opacity: 0;
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
  }
  .news__inr:hover .news__cont {
    position: relative;
    transform: translate(0, -70px);
  }
  .news__inr:hover .news__cont .more-btn a {
    opacity: 1;
    transition: all 0.3s linear;
  }
  .pagination {
    border-radius: 0;
  }
  .pagination > li > a,
  .pagination > li > span {
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    margin: 0 10px 0 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    color: #242424;
  }
  .pagination > li.active > a,
  .pagination > li.active > span {
    color: #fff;
    background-color: #08c1f3;
    border-color: #08c1f3;
  }
  .pagination > li.active > a:focus,
  .pagination > li.active > a:hover,
  .pagination > li.active > span:focus,
  .pagination > li.active > span:hover {
    color: #fff;
    background-color: #08c1f3;
    border-color: #08c1f3;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: 0;
  }
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    margin: 0;
  }
  .call-to-action {
    padding: 40px 0;
  }
  .call-to-action h6 {
    font-size: 3.7rem;
    color: #fff;
  }
  .call-to-action h6 span {
    font-weight: 700;
  }
  .call-to-action a {
    display: inline-block;
    margin: 10px 0 0;
    padding: 10px 27px;
    font-size: 2.17rem;
    color: #fff;
    background-color: #2c2f3a;
    border-radius: 5px;
  }
  .newsletters--18c391x2 {
    max-width: 940px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .newsletters--18c391x2__container {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5em;
  }
  .newsletters--18c391x2__post {
    position: relative;
    width: calc(33.33% - 1em);
    margin: calc(0.5em * 2) 0.5em;
    overflow: hidden;
  }
  .newsletters--18c391x2__img {
    transition: transform 0.3s ease-out;
  }
  .newsletters--18c391x2__info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.8em;
    color: #fff;
    background-color: #a1b0c3;
    transition: transform 0.3s;
    transform: translate(0, calc(2.4em + 0.8em));
  }
  .newsletters--18c391x2__title {
    font-size: 1.3em;
    color: currentColor;
  }
  .newsletters--18c391x2__desc {
    margin: 0;
    font-size: 0.9em;
    color: currentColor;
  }
  .newsletters--18c391x2__button {
    display: inline-block;
    height: 2.4em;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .newsletters--18c391x2__button > a {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    font-size: 0.9em;
    text-decoration: none;
    color: #2f2f2f;
    border: 1px solid #fff;
    border-radius: 2px;
    transition: background-color 0.3s;
  }
  .newsletters--18c391x2__button > a:hover {
    background-color: #fff;
  }
  .newsletters--18c391x2__title + .newsletters--18c391x2__desc {
    margin-top: 1em;
  }
  .newsletters--18c391x2__title + .newsletters--18c391x2__button,
  .newsletters--18c391x2__desc + .newsletters--18c391x2__button {
    margin-top: 1.5em;
  }
  .newsletters--18c391x2__post:hover .newsletters--18c391x2__info {
    transform: translate(0);
  }
  .newsletters--18c391x2__post:hover .newsletters--18c391x2__button {
    opacity: 1;
  }
  @media only screen and (max-width: 960px) {
    .newsletters--18c391x2__post {
      width: calc(50% - 1em);
    }
  }
  @media only screen and (max-width: 650px) {
    .newsletters--18c391x2__post {
      width: calc(100% - 1em);
    }
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 8px;
  }
  .widget-wrapper {
    font-size: 16px;
  }
  .widget-wrapper a {
    color: #2f2f2f;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5em 0 1em;
    font-size: 16px;
  }
  .pagination > * {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2em;
    height: 2.2em;
    font-size: 0.8em;
    font-style: normal;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 4px;
  }
  .pagination > * + * {
    margin-left: 0.3em;
  }
  .pagination a {
    transition: background-color 0.3s;
  }
  .pagination a:hover {
    background-color: #eaeaea;
  }
  .pagination .gap {
    border-color: transparent;
    cursor: default;
  }
  .pagination .disabled {
    border-color: transparent;
    visibility: hidden;
    cursor: default;
  }
  .pagination .current {
    background-color: #eaeaea;
  }
}
</style>
