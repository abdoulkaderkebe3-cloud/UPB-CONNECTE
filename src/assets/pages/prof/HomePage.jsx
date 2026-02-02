import React from "react";
import Cards from "../../../components/reuitilisable/Cards";
import Date from "../../../components/reuitilisable/Date";
import Header from "../../../components/reuitilisable/Header";
import ListeClasse from "../../../components/reuitilisable/ListeClasse";
import Navigation from "../../../components/reuitilisable/Navigation";
export default function HomePage() {
  return (
    <div>
      <Header />
      <hr />
      <Date />
      <Cards />
      <ListeClasse />
      <Navigation />
    </div>
  );
}
