import { useState } from "react"
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Formulario = ({setError}) => {
  const [formInformation, setFormInformation] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  }); 

  const dataValidation = (e) => {
    e.preventDefault();
  
    const {name, email, password, confirmPassword} = formInformation;
    const passwordData = !name || !email || !password || !confirmPassword;
    const passwordValidation = password !== confirmPassword;

    passwordData ?
      setError({
        error: true,
        msg: "Debes completar todos los campos",
        color: "text-warning",
    }):
      setError({
        error: false,
        msg: "Cuenta creada exitosamente",
        color: "text-success",
      });
    
    if (passwordValidation) {
      setError ({
        error: true,
        msg: "Las contraseñas no coinciden",
        color: "text-danger",
      });
      return;
    }
      setFormInformation({
        email:'',
        password:'',
        confirmPassword:'',
      });    
  };
  const handleChange = (e) => {
    setFormInformation ({... formInformation, [e.target.name]: e.target.value});
  } 

  return (
    <>
    <Form onSubmit={(e) => dataValidation (e)}>
      <div className="form-group mb-3">
        <input type="text" name="name" className="form-control" placeholder="Nombre" onChange={handleChange} value={formInformation.nombre}/>
      </div>
      <div className="form-group mb-3">
        <input type="email" name="email" className="form-control" placeholder="ejemplo@ejemplo.com" onChange={handleChange} value={formInformation.email}/>
      </div>
      <div className="form-group mb-3">
        <input type="password" name="password" className="form-control" placeholder="Contraseña" onChange={handleChange} value={formInformation.password}/>
      </div>
      <div className="form-group mb-3">
        <input type="password" name="confirmPassword" className="form-control" placeholder="Repita su contraseña" onChange={handleChange}  value={formInformation.confirmPassword}/>
      </div>
      <div className="d-grid gap-2">
        <Button type="submit" className="btn .bg-primary">    
          Registrarse
        </Button>
      </div>
    </Form>
    </>
  )
}

export default Formulario
