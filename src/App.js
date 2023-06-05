import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';

const HomePage = () => <h2>Home Page</h2>;

const NextPage = () => <h2>Next Page</h2>;

const AnotherPage = () => <h2>Another Page</h2>;

const BankForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = data => {
    axios.post('http://example.com/api/bank', data)
      .then(response => {
        console.log(response);
        // react-router의 useHistory를 이용하여 페이지 이동
        history.push('/next-page');
      })
      .catch(error => {
        console.error(error);
        // 에러 처리를 이곳에서 수행하세요.
      });
  };

  // ... (생략)
};

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/next-page">Next Page</Link></li>
            <li><Link to="/another-page">Another Page</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/next-page">
            <NextPage />
          </Route>
          <Route path="/another-page">
            <AnotherPage />
          </Route>
          <Route path="/">
            <BankForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}