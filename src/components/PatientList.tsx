import { Dispatch, SetStateAction } from "react";
import { Patient } from "../types/patients";
import PatientListItem from "./PatientListItem";

type Props = {
  patients: Array<Patient>;
  setPatient: Dispatch<SetStateAction<Patient>>;
  removePatient: (id: string) => void;
};

const items = (
  patients: Array<Patient>,
  setPatient: Dispatch<SetStateAction<Patient>>,
  removePatient: (id: string) => void
): Array<JSX.Element> => {
  const elements: Array<JSX.Element> = [];
  patients.forEach((patient) =>
    elements.push(
      <PatientListItem
        key={patient.id}
        patient={patient}
        setPatient={setPatient}
        removePatient={removePatient}
      />
    )
  );
  return elements;
};

const PatientList = ({ patients, setPatient, removePatient }: Props) => {
  return (
    <div className="container mt-5 lg:mt-0 lg:pl-5">
      <h1 className="text-xl">Lista de Pacientes</h1>
      <p className="text-sm">Visualizar</p>
      <div className="lg:h-[50rem] overflow-x-scroll mt-5">
        <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-black text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                Nombre
              </th>
              <th scope="col" className="px-6 py-4">
                Propietario
              </th>
              <th scope="col" className="px-6 py-4">
                Correo electrónico
              </th>
              <th scope="col" className="px-6 py-4">
                Fecha salida
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{items(patients, setPatient, removePatient)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
