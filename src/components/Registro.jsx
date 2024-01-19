import { useState } from "react"
import Alert from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"

const Registro = () => {
  const [error, setError] = useState({
    error: "",
    msg: "",
    color: "",
  });

  return (
    <>
      <div>
        <h2>Crear una cuenta </h2> 
      </div>
      <header className="logo_gallery">
        <SocialButton facebook={"facebook"}/>
        <SocialButton github={"github"}/>
        <SocialButton twitch={"twitch"}/>
      </header>
      <span>
        <SocialButton text={"O usa tu email para registrarte"}/>
      </span>
      <main>
        <Formulario setError={setError} />
        {error.msg && (
          <Alert color={error.color} msg={error.msg} />    
        )}   
      </main>
    </>
  )
}

export default Registro
