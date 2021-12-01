
//Asağıdaki sekilde de sürekli props demeden süslü parantez icinde parametreleri yazarız.
function User({isLoggedIn,name,surName,age}){
   // console.log(props)
    return (
        <div>
            {/* SELAMKE */}
            {
                isLoggedIn ? ` Benim adım: ${name} Soyadım: ${surName} Yasım:${age}  `: 'giris yapmadınız'
            }
           
        </div>
    )
}
export default User;
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