const PrintFunc = (props) => {
  return (
    <div>
      <h1>
        Print {props.name}, now {props.newname}
        and
      </h1>
      {props.children}
    </div>
  );
};
export default PrintFunc;
