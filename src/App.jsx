import { Welcome } from './welcome';
import PrimaryCTA from './button';
import { Hello, HelloWithoutJSX } from './Hello';
import { UserProfile } from './UserProfile';
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './product';
import { Greeting } from './Greeting';
import { CardWrapper } from './CardWrapper';
import { UserDetails } from './UserDetails';
import { ProductList } from './productList';

import './App.css';

function App() {
  return (
    <div>
      <ProductList />

      <UserDetails
        name="Mukunth"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role="admin"
      />
      <UserDetails name="Sri" isOnline={true} hideOffline={true} role="VIP" />

      <CardWrapper title="User Profile">
        <p>Mukunth</p>
        <p>mukunthmuralidhar@gmail.com</p>
        <button>Send Mail</button>
      </CardWrapper>

      <Greeting name="Mukunth" message="You can do it!" />
      <Greeting name="Sri" />
      <Greeting message="Acha its your Neru Kutty" />
      <Greeting />

      <Product
        title="iPhone 14 Pro Max"
        price={1099}
        inStock={false}
        categories={['Electronics', 'Mobile Phones', 'Trending']}
      />
      <Welcome name="Mukunth" alias="Ironman" />
      <Welcome name="Sri" alias="Wonder Women" />
      <Welcome name="Neru" alias="Captain America" />

      <CandidateProfile />

      <ContactForm />
      <StyledForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <PrimaryCTA />
    </div>
  );
}

export default App;
