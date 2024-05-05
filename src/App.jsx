// importing necessary files and hooks
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';


const App = () => {
  // setting up state for the card data
  const[value,setValue]= useState(0);

  // setting up the card data
  const cardData = [
    {
      name: 'LUFFY GEAR FIVE',
      price: '$12.00 - $20.00',
      details:'Determined to become King of Pirates',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw595e9570/images/funko/upload/79321a_OP_LuffyGear5_POP_GLAM-WEB.png?sw=800&sh=800',
      buttonText: 'Add to cart'
    },
    {
      name: 'RORONOA ZORO',
      price: '$18.00',
      details:'Vice Captain of the Strawhat Pirates',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw236b5bb4/images/funko/54462-1.png?sw=800&sh=800',
      sale: true,
      buttonText: 'Add to cart'
    },
    {
      name: 'VINSMOKE SANJI',
      price: '$15.00',
      details:'Head Cook of the Strawhat Pirates',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwcb5a6fb1/images/funko/66483-2_C.png?sw=800&sh=800',
      sale: true,
      buttonText: 'Add to cart'
    },
    {
      name: 'MIHAWK',
      price: '$15.00',
      details:'Strongest Swordsman of the World',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9d61db7a/images/funko/upload/77108_OnePiece_DraculeMihawk_GLAM-WEB.png?sw=800&sh=800',
      buttonText: 'Add to cart'
    },
    {
      name: 'Nico Robin',
      price: '$12.00',
      details:'Archeologist of the Strawhat Pirates',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwfa7cd4bc/images/funko/upload/72110-POP-Animation-One-Piece---Orobi_GLAM-WEB.png?sw=800&sh=800',
      sale: true,
      buttonText: 'Add to cart'
    },
    {
      name: 'Nami',
      price: '$12.00 - $15.00',
      details:'Navigator of the Strawhat Pirates',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwff8caa30/images/funko/upload/72107-POP-Animation-One-Piece---Onami_GLAM-WEB.png?sw=800&sh=800',
      buttonText: 'Add to cart'
    },
    {
      name: 'Carrot',
      price: '$10.00',
      details:'The lovable Mink with kind heart',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9156d236/images/funko/upload/75578_OP_Carrot_GLAM-WEB.png?sw=800&sh=800',
      sale: true,
      buttonText: 'Add to cart'
    },
    {
      name: 'Sabo',
      price: '$14.00',
      details:'Sworn Brother of Luffy and Ace',
      imageUrl: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwdc3cd47a/images/funko/54461-1.png?sw=800&sh=800',
      buttonText: 'Add to cart'
    },
  ];

  
  return (
    // Calling Everything
    <>
    <Navbar value={value}/>
    <Header/>  
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {/* Mapping the data */}
      {cardData.map((card, index) => (
              <Card key={index} {...card} setValue={setValue} value={value} />
            ))}
      </div>
    </div>
  </section>
    <Footer/>
    </>
  );
};

export default App;