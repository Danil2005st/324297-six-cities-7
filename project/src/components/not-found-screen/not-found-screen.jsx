import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';

function NotFoundScreen() {
  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <div className="container">
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
