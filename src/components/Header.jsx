export function Header() {
    return (
      <header className="container-fluid d-flex align-items-center justify-content-between p-4">
        <p className="my-0">Rodrigo Oliva</p>
        <h1 className="my-0">Random Cats App</h1>
        <small>
          Datos obtenidos de la API{" "}
          <a href="https://cataas.com/" target="_blank" rel="noopener noreferrer">
            Cat as a service (CATAAS)
          </a>
        </small>
      </header>
    );
  }
  