import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
export const  Admin = () =>{
  const { admin } = useAuthContext();
  if (!admin) {
      return <Navigate to={"/login"} replace />;
    }
  
  return (
    <div>
      <h1>Proximamente la verduleria "La Saludable" abriendo sus puertas al público</h1>      
      <p>componente admin.</p>
    </div>
  );
}