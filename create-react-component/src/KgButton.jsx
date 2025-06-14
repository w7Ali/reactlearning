export function KgButton(props) {
  return (
    <button
      style={{
        border: '2px solid green',
        width: '100px',
        height: '50px',
        background: '#ccc',
        color: 'black'
      }}
    >
      {props.label}
    </button>
  );
}

// export default KgButton;
