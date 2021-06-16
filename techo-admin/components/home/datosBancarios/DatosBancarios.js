import Transferencia from "./Transferencia";
import Abroad from "./Abroad";
import Intermediary from "./Intermediary";


function DatosBancarios () {
  return (
    <div className="align-center m-5 space-y-6">
      <Transferencia />
      <Abroad />
      <Intermediary />
    </div>
  );
}

export default DatosBancarios;
