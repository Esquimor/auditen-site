<template>
  <Layout>
    <div class="MentionLegal">
      <h1>Mentions légales :</h1>
      <p>
        « Auditen-courtage.fr » est un site internet de
        <strong>AUDITEN COURTAGE</strong> – Société à Responsabilité Limitée au capital de 25 000 € inscrite au registre du commerce et des sociétés de TOULON sous le numéro 821 775 509, inscrite à l’ORIAS sous le numéro 16005017 (www.orias.fr), APE 6622Z.
        <strong>AUDITEN COURTAGE est un courtier d’assurances.</strong>
      </p>
      <p>
        <strong>AUDITEN COURTAGE</strong>
        <br />4, Place Louis Blanc
        <br />83000 TOULON
        <br />Tél : 04 94 92 63 12
      </p>
      <div class="rectangle">
        <p>Les informations recueillies dans nos questionnaires sont destinées uniquement à vous transmettre des offres d’assurances dommages-ouvrages ou garanties de chantiers, ou bien à nous permettre d’entrer en contact avec vous.</p>
        <p>Elles ne sont pas utilisées à d’autres travaux.</p>
        <p>Nous n’utiliserons pas vos données pour faire des campagnes commerciales ou les céder à des tiers.</p>
        <p>
          Vous pouvez demander communication de vos données personnelles auprès d’
          <strong>AUDITEN COURTAGE</strong> et nous demander toute rectification ou suppression de ces données en écrivant à
          <strong>AUDITEN COURTAGE</strong> ou en nous contactant au 04 94 92 63 12.
        </p>
      </div>
      <p>Entreprise soumise au contrôle de l’ACPR (ACPR – 61 rue Taitbout – 75009 PARIS).</p>
      <p>
        <strong>AUDITEN COURTAGE</strong> est titulaire d’une garantie financière et d’une assurance de responsabilité civile professionnelle conformes aux articles L530.1 et L530.2 du Code des Assurances.
      </p>
      <p>
        <strong>AUDITEN COURTAGE</strong> ne détient aucune part dans une société d’assurances et aucune société d’assurances ne détient de part dans son capital social.
      </p>
      <p>
        <strong>AUDITEN COURTAGE</strong> n’a aucune obligation de travailler exclusivement avec un ou des assureur(s). Elle travaille avec un nombre limité d’assureurs présents sur le marché (Cat B -Article L520b du Code des Assurances – alinéa 1). La liste des assureurs est disponible sur demande.
      </p>
      <p>Conformément aux dispositions de l'article L. 520-1-II b du Code des assurances, le contrat qui vous est proposé a été sélectionné parmi les offres émanant d’organismes d'Assurance partenaires privilégiés de notre cabinet. Cette liste est communiquée sur simple demande et reprise dans notre fiche légale d’informations.</p>
      <p>Service réclamation : même adresse.</p>
      <p>
        Editeur du site :
        <strong>AUDITEN COURTAGE</strong>
        <br />Directeur de la publication :
        <strong>AUDITEN COURTAGE</strong>
        <br />Responsable de la rédaction :
        <strong>AUDITEN COURTAGE</strong>
        <br />Hébergeur :
        <strong>O2SWITCH</strong>
        <br />Webmaster :
        <strong>AUDITEN COURTAGE</strong>
      </p>
    </div>
  </Layout>
</template>

<script>
"use strict";

export default {
  metaInfo: {
    title: "Mentions Legales"
  },
  name: "MentionsLegales"
};
</script>

<style lang="scss">
.MentionLegal {
  width: calc(100% - 1rem);
  max-width: 700px;
  margin: 1rem auto;
  padding: 0.5rem;
  @media (max-width: 750px) {
    margin: 0 auto;
  }
  img {
    width: 100%;
    max-width: 700px;
  }
  .rectangle {
    border: 1px solid black;
    padding: 1rem;
    font-weight: 700;
  }
}
</style>