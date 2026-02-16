import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SiteLayout } from "../components/SiteLayout";
import { HomePage } from "../pages/HomePage";
import { CollectionPage } from "../pages/CollectionPage";
import { StoryDetailPage } from "../pages/StoryDetailPage";

export function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:collection(cuentos|fancines)/:slug" component={StoryDetailPage} />
          <Route exact path="/:collection(cuentos|fancines)" component={CollectionPage} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </SiteLayout>
    </BrowserRouter>
  );
}
