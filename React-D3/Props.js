const Header = (props) => {
    console.log({props});
  return <div/>;
};

export const H1 = ({title,...rest}) => <h1>{title}</h1>;

export default () => (
  <div>
    {Input}
    <H1 title="My Heading" />
    <H1 title="My Heading 2" />
    <Header title="My heading" className="head"  />
  </div>
