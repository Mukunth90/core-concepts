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
import { NameList } from './NameList';
import { TodoList } from './TodoList';
import { Alert } from './Alert';

import './App.css';

function App() {
  return (
    <div>
      <Alert>Your changes have been saved!</Alert>
      <Alert type="error">There was an error saving your changes!</Alert>
      <TodoList />

      <NameList />

      <ProductList />

      <UserDetails
        name="Harvey"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role="admin"
      />
      <UserDetails name="Donna" isOnline={true} hideOffline={true} role="VIP" />

      <CardWrapper title="User Profile">
        <p>Harvey</p>
        <p>harvey.specter@gmail.com</p>
        <button>Send Mail</button>
      </CardWrapper>

      <Greeting name="Harvey" message="You can do it!" />
      <Greeting name="Donna" />
      <Greeting message="Ross" />
      <Greeting />

      <Product
        title="iPhone 14 Pro Max"
        price={1099}
        inStock={false}
        categories={['Electronics', 'Mobile Phones', 'Trending']}
      />
      <Welcome name="Harvey" alias="Ironman" />
      <Welcome name="Donna" alias="Wonder Women" />
      <Welcome name="Ross" alias="Captain America" />

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
