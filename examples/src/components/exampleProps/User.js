import PropTypes from "prop-types";

function User(props) { //tüm propertyler buraya props olarak düşer
const address = props.address;
 console.log(props);

if(!props.isLoggedIn){
    return <div>Giriş Yapmadınız</div> //erken return işlemi
}

    return (
    <>
        <h1>{`Adın ${props.name} Soyadın ${props.surname} Yaşın ${props.age}`}</h1>
        <h2>{address.title} {address.zip}</h2>


        {props.friends && //friends varsa onu göster
        props.friends.map((friend) =>(
        <div key={friend.id}>{friend.name}</div> //map yaparken burda key vermeliyiz
        ) )}

    </>
  )
}

User.propTypes={
name:PropTypes.string.isRequired, //isRequired-zorunlu, olması gerek, yoksa hata verir
surname:PropTypes.string.isRequired,
isLoggedIn:PropTypes.bool.isRequired,
age:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

friends:PropTypes.array,
address:PropTypes.shape({
    title:PropTypes.string,
    zip: PropTypes.number,
})

};

User.defaultProps={ //gönderilirse değer buna bakılmaz
    name:"İsimsiz",
    isLoggedIn:false
}

export default User;