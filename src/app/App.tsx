import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { HomePage } from "../pages/HomePage";
import { CollectionPage } from "../pages/CollectionPage";
import { StoryDetailPage } from "../pages/StoryDetailPage";
import { AboutPage } from "../pages/AboutPage";

export function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sobre-mi" component={AboutPage} />

          <Route exact path="/cuentos" render={() => <CollectionPage collection="cuentos" />} />
          <Route exact path="/fanzines" render={() => <CollectionPage collection="fanzines" />} />
          <Route exact path="/carteles" render={() => <CollectionPage collection="carteles" />} />
          <Route exact path="/proyectos-activos" render={() => <CollectionPage collection="proyectos" />} />

          <Route exact path="/cuentos/:slug" render={() => <StoryDetailPage collection="cuentos" />} />
          <Route exact path="/fanzines/:slug" render={() => <StoryDetailPage collection="fanzines" />} />
          <Route exact path="/carteles/:slug" render={() => <StoryDetailPage collection="carteles" />} />
          <Route exact path="/proyectos-activos/:slug" render={() => <StoryDetailPage collection="proyectos" />} />

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </SiteLayout>
    </BrowserRouter>
  );
}
