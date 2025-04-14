import ErrorPage from "./components/ErrorPage";
import App from './components/App.jsx'
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import StorePage from "./components/StorePage.jsx";
import ShoppingCartPage from "./components/ShoppingCartPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "store", element: <StorePage /> },
      { path: "cart", element: <ShoppingCartPage /> },
    ],
  },
];

export default routes;
