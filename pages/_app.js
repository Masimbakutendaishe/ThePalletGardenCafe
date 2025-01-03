import '../styles/globals.css';
import Layout from '../comps/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
