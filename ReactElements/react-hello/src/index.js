import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.min.css';
import profileImage from './images/profile-image-1.jpg';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

/* Creating a node within which to render the elements. */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Creation of the user object. */
const user = {
  name: 'Johann',
  surname: 'Jansen van Vuuren',
  date_of_birth: '1974/12/15',
  address: '14 Dopertjie Street, Birch Acres Ext 1, Kempton Park, 1618',
  country: 'South Africa',
  email: 'vanvuurenjohann124@gmail.com',
  telephone: '0845967038',
  company: 'HyperionDev',
  profile_picture: './images/profile-image-1.jpg',
  shopping_cart: ['Milk', ' Peaches', ' Shoes', ' Hat']
}

/* Function to list the shopping items in the shopping cart below. */
function ListShoppingCart() {
  const shopping_cart = user.shopping_cart;
  return shopping_cart.map((item) => <li key={item.toString()}>{item}</li>);
}

/* Using React-Bootstrap for the rendering of the heading of the page. */
const heading = <Alert className="alert alert-dark display-1 h1 text-center text-uppercase">User Information</Alert>;

/* Preparation for the rendering of the user information. */
const userInfo = (
  <div className={'container-main'}>
    <p className={'text-uppercase text-center'}><span>Profile Picture:</span></p>
    <img src={profileImage} width="100" className={'profile-pic'} alt={"Profile"}/>
    <p className={'text-uppercase text-center'}><span>Name:</span> {user.name}</p>
    <p className={'text-uppercase text-center'}><span>Surname:</span> {user.surname}</p>
    <p className={'text-uppercase text-center'}><span>Date of Birth:</span> {user.date_of_birth}</p>
    <p className={'text-uppercase text-center'}><span>Address:</span> {user.address}</p>
    <p className={'text-uppercase text-center'}><span>Country:</span> {user.country}</p>
    <p className={'text-uppercase text-center'}><span>email:</span> {user.email}</p>
    <p className={'text-uppercase text-center'}><span>telephone:</span> {user.telephone}</p>
    <p className={'text-uppercase text-center'}><span>Company:</span> {user.company}</p>
    <p className={'text-uppercase text-center'}><span>Shopping Cart:</span> {ListShoppingCart()}</p>
  </div>
)

/* Rendering of the heading and user information */
root.render(
  <React.StrictMode>
    {heading}
    {userInfo}
  </React.StrictMode>
);

reportWebVitals();
