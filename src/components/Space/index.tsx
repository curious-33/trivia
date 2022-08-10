interface ISpaceComponent {
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

const SpaceComponent: React.FC<ISpaceComponent> = ({
  mr = 0,
  ml = 0,
  mt = 15,
  mb = 15,
  m = 0,
}): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        margin: `${m}px`,
        marginLeft: `${ml}px`,
        marginRight: `${mr}px`,
        marginTop: `${mt}px`,
        marginBottom: `${mb}px`,
      }}
    />
  );
};

export default SpaceComponent;
