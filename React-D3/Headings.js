// showing different ways to create components in React

export const Header = () => (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);

const Header2 = () => {
  const title = "My title" + new Date();

  console.log("im in header2");

  function test() {
    console.log("test");
  }

  return (
    <div>
      <h2>
        {title}
        {test()}
      </h2>
      <Header3 />
    </div>
  );
};

function add(a, b) {
  return a + b;
}

function Header3() {
  return <h3>Header 3</h3>;
}

const headings = (
  <>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);

const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0',
    border: 'none',
    borderRadius: 5,
  }

const header = (
  <header>
    <div  className="header-wrapper">
        {headings}
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

// React Component
