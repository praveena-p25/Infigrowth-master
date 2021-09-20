import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Home,
  About,
  Contact,
  Dashboard,
  SalesList,
  SubProjects,
  TeamMembers,
  EditEmployee,
  SalesNew,
  CreateProject,
  EditProject,
  ViewClientDetails,
  ClientList,
  ProjectList,
  CreateClient,
  EditClient,
  ModuleExpandDAPA,
  ModuleExpandGoogleTrends,
  ModuleExpandPageSpeed,
  Tickets,
  TicketsList,
} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/team-members" exact component={() => <TeamMembers />} />
          <Route path="/sales-list" exact component={() => <SalesList />} />
          <Route path="/sub-projects" exact component={() => <SubProjects />} />
          <Route
            path="/edit-employee"
            exact
            component={() => <EditEmployee />}
          />
          <Route path="/sales-new" exact component={() => <SalesNew />} />
          <Route
            path="/create-project"
            exact
            component={() => <CreateProject />}
          />
          <Route path="/edit-project" exact component={() => <EditProject />} />
          <Route
            path="/view-client-details"
            exact
            component={() => <ViewClientDetails />}
          />
          <Route path="/client-list" exact component={() => <ClientList />} />
          <Route path="/project-list" exact component={() => <ProjectList />} />
          <Route
            path="/create-client"
            exact
            component={() => <CreateClient />}
          />
          <Route path="/edit-client" exact component={() => <EditClient />} />
          <Route
            path="/module-expand-da"
            exact
            component={() => <ModuleExpandDAPA />}
          />
          <Route
            path="/module-expand-google-trends"
            exact
            component={() => <ModuleExpandGoogleTrends />}
          />
          <Route
            path="/module-expand-page-speed"
            exact
            component={() => <ModuleExpandPageSpeed />}
          />
          <Route path="/tickets" exact component={() => <Tickets />} />
          <Route path="/ticketslist" exact component={() => <TicketsList />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
