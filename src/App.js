import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import User from './components/User';

// const name = "Ayse"
// const surName= "İlkay"
// const isLoggedIn = false

const friends=['Ayse','Ece','Ebru','Firdes'];
const friends2 = [
  {
    id:1,
    name:"Ayse"
  }, {
    id:2,
    name:"Ece"
  },
  {
    id:3,
    name:"Firdes"
  },
  {
    id:4,
    name:"Ebru"
  }
]
function App() {

  //Ekrana sarkı sözunu yazdırabildik.
// return React.createElement('div',null,'Hic bir kere hayat bayram olmadı yada her nefes alısımız bayramdı')

// Asagıdaki sekilde de bos olarak fragment yer almaktadır.
// return (
//   <>
//    <h1>Hic bir kere hayat bayram olmadı yada her nefes alısımız bayramdı</h1>
//    <Header /> 
//   </>
// );

  //Aşağıdaki yapıyı yukarıdaki sekildede yazabilirim.
  return (
    <>
    <User name="AKB" surName="Birinci" /* isLoggedIn ={true}*/ /*age={"26"}*/ friends= {friends2} address ={
      {
        title:"Kozyatagı/İstanbul",
        zip: 3435
      }
    }/>
     {/* <h1 className="dkfd">Hic bir kere hayat bayram olmadı yada her nefes alısımız bayramdı</h1>
     <Header /> 
     <label htmlFor="myinput">
       Name:
      <input id="myinput"/>
     </label> */}
    {/* <h1>{name}{surName}</h1>
      
     <h1>{ isLoggedIn ? `Benim adım ${name} , soyadım ${surName} ` :'giris yapmadınız'} </h1> */}
    </>
  );
}


export default App;

// Not: Eger div icerisinde baska elementler oldugunu dusunursek;
//React.createElement yapısı sürekli tekrar etmek durumunda kalacaktı ve bu istediğimiz bir yapı degildir.
// Bu nedenle jsx yapısı kullanılır.
// Yani aslında html yazar gibi javascript yazabiliyoruz.
// Componentları yazarken bas harflerini büyük olarak yazmalısın.
//Çünkü html etiketleri bas harfi kucuktur ve reactın hangi elementi render edecegini anlaması gerekir.
// Jsx yapısında bir component yazdıgımızda mutlaka o yazdıgımız componentı kapsayan bir element olmalıdır.Yukarıdaki Header componentına baktıgımızda div ile kapsandıgını görürüz.
// Burada illa div kullanmak gerekli degildir.
// <> seklinde direk fragmentta kullanabiliriz.
// Javascriptin özel tanımlı keywordleri reactda farlı sekilde tanımlanır.
// Örnegin:
// class --> className 
//for --> htmlFor olarak degistirilmistir.

