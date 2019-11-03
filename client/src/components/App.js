import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <div>
          <Header />
          <Route path='/' exact component={StreamList}>
            StreamList{" "}
          </Route>
          <Route path='/streams/new' component={StreamCreate}>
            StreamCreate{" "}
          </Route>
          <Route path='/streams/edit' component={StreamEdit}>
            StreamEdit{" "}
          </Route>
          <Route path='/streams/show' component={StreamShow}>
            StreamShow{" "}
          </Route>
          <Route path='/streams/delete' component={StreamDelete}>
            StreamDelete{" "}
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
