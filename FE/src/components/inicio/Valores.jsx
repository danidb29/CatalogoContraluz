import "./Valores.css";

export const Valores = ({ valor, num }) => {
  return (
    <div className="informacion-container">
      <div className={"titulo-container " + valor}>
        {valor === "mision" && <h1>Mision</h1>}
        {valor === "vision" && <h1>Vision</h1>}
        {valor === "somos" && <h1>¿Quienes somos?</h1>}
      </div>
      <div className="valor-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium morbi
          mus eu nostra semper suspendisse facilisis, vestibulum parturient nisl
          suscipit convallis egestas. Semper maecenas ligula vitae sociis
          habitasse nisl egestas fusce massa eros in varius lobortis, tincidunt
          fames magnis viverra parturient laoreet natoque taciti id sollicitudin
          tempus ut scelerisque euismod, felis donec libero faucibus nostra et
          praesent eu convallis nascetur ac tristique. Varius conubia tortor
          pretium maecenas nibh feugiat consequat ultrices eu convallis platea
          himenaeos vestibulum, venenatis aliquam tellus vel quis felis ligula
          etiam mauris suscipit et.
        </p>
        <img
          src="src/assets/img/trabajando.jpeg"
          alt=""
          style={{ order: num % 2 === 0 && "-1" }}
        />
      </div>
    </div>
  );
};
