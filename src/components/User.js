
//Asağıdaki sekilde de sürekli props demeden süslü parantez icinde parametreleri yazarız.
// Bu parametrelerin sırasının bir önemi yoktur.
import PropTypes from 'prop-types'


function User({isLoggedIn,name,surName,age,friends,address}){
   // console.log(props)

   if(!isLoggedIn ){
       return <div>Giris yapmadınız.</div>
   }
    return (
        <div>
            {/* SELAMKE */}
            {
               ` Benim adım: ${name} Soyadım: ${surName} Yasım:${age}`
            }
            {address.title} {address.zip}
           {
               friends.map((item)=>//index benrsiz bir key degeri atıyor.
                 {return  <div key={item.id}>{item.name}</div>}
               )
           }
        </div>
    )
}
export default User;

User.propTypes={
    name:PropTypes.string.isRequired,
    surName:PropTypes.string,
    isLoggedIn:PropTypes.bool.isRequired,
    age:PropTypes.oneOfType([
        PropTypes.string,PropTypes.number
    ]), // age hem string hemde number olarak göndermek istedigimizi varsayalım
    friends:PropTypes.array.isRequired,
    address: PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    })
}
User.defaultProps={// Eger herhangi bir deger gönderilmemisse default olarak gelecek degerler belirtilir.
    isLoggedIn:false,
    age:25 // hic bir deger gönderilmemisse age 25 olarak alınsın
}
//Asagıdaki sekilde de yazılabilirdi.
// function User(props){
//     console.log(props)
//     return (
//         <div>
//             {/* SELAMKE */}
//             {
//                 props.isLoggedIn ? ` Benim adım: ${ props.name} Soyadım: ${props.surName} `: 'giris yapmadınız'
//             }
           
//         </div>
//     )
// }
// export default User;