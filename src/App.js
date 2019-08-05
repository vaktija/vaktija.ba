import React from 'react';
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import { Route, Switch } from 'react-router-dom';

import slugify from 'slugify';
import Daily from './components/Daily';
import Mobile from './components/Mobile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let location = ["Banovići", "Banja Luka", "Bihać", "Bijeljina", "Bileća", "Bosanski Brod", "Bosanska Dubica", "Bosanska Gradiška", "Bosansko Grahovo", "Bosanska Krupa", "Bosanski Novi", "Bosanski Petrovac", "Bosanski Šamac", "Bratunac", "Brčko", "Breza", "Bugojno", "Busovača", "Bužim", "Cazin", "Čajniče", "Čapljina", "Čelić", "Čelinac", "Čitluk", "Derventa", "Doboj", "Donji Vakuf", "Drvar", "Foča", "Fojnica", "Gacko", "Glamoč", "Goražde", "Gornji Vakuf", "Gračanica", "Gradačac", "Grude", "Hadžići", "Han-Pijesak", "Hlivno", "Ilijaš", "Jablanica", "Jajce", "Kakanj", "Kalesija", "Kalinovik", "Kiseljak", "Kladanj", "Ključ", "Konjic", "Kotor-Varoš", "Kreševo", "Kupres", "Laktaši", "Lopare", "Lukavac", "Ljubinje", "Ljubuški", "Maglaj", "Modriča", "Mostar", "Mrkonjić-Grad", "Neum", "Nevesinje", "Novi Travnik", "Odžak", "Olovo", "Orašje", "Pale", "Posušje", "Prijedor", "Prnjavor", "Prozor", "Rogatica", "Rudo", "Sanski Most", "Sarajevo", "Skender-Vakuf", "Sokolac", "Srbac", "Srebrenica", "Srebrenik", "Stolac", "Šekovići", "Šipovo", "Široki Brijeg", "Teslić", "Tešanj", "Tomislav-Grad", "Travnik", "Trebinje", "Trnovo", "Tuzla", "Ugljevik", "Vareš", "Velika Kladuša", "Visoko", "Višegrad", "Vitez", "Vlasenica", "Zavidovići", "Zenica", "Zvornik", "Žepa", "Žepče", "Živinice", "Bijelo Polje", "Gusinje", "Nova Varoš", "Novi Pazar", "Plav", "Pljevlja", "Priboj", "Prijepolje", "Rožaje", "Sjenica", "Tutin"];

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <Daily root />} />
    <Route path="/mobile" render={() => <Mobile lokacije={location} />} />
    {/* <Redirect from="/sarajevo" to="/" /> */}
    {
      location.map(myLocation => <Route key={myLocation} exact path={`/${
        slugify(myLocation, {
          replacement: "-",
          remove: null,
          lower: true,
        })
        }`} render={props => <Daily myLocationName={myLocation} myLocation={location.indexOf(myLocation)} {...props} />} />)
    }
    <Route path="*" render={() => <Grid>
      <Row>
        <Col lg={12}>
          <PageHeader>
            Not Found <small>404</small>
          </PageHeader>
        </Col>
      </Row>
    </Grid>} />
  </Switch>
);

export default App;
