import User from "./components/exampleProps/User"

const friends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Ayşe" },
];

function AppProps() {
  return (
    <>
      <User
        name="Mehmet"
        surname="Aydın"
        isLoggedIn={true}
        age={29}
        friends={friends}
        address={{
          title: "Ataşehir",
          zip: 34755
        }}
      />

      <User
        name="Sema"
        surname="Kara"
        isLoggedIn={true}
        age={19}
        friends={friends}
        address={{
          title: "Sakarya",
          zip: 54755
        }}
      />
    </>
  );
}

export default AppProps;
