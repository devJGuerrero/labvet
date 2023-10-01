import { Dispatch, SetStateAction } from "react";
import { Patient } from "../types/patients";

type Props = {
  patient: Patient;
  setPatient: Dispatch<SetStateAction<Patient>>;
  removePatient: (id: string) => void;
};

const PatientListItem = ({ patient, setPatient, removePatient }: Props) => {
  const { name, owner, email, departureDate } = patient;

  const remove = () => {
    const response = confirm("¿Estas seguro de eliminar el registro?");
    if (response) {
      removePatient(patient.id);
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{owner}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{departureDate}</td>
      <td className="px-6 py-4 flex space-x-4">
        <button
          type="button"
          className="font-medium text-indigo-600"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button
          type="button"
          className="font-medium text-red-600"
          onClick={remove}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default PatientListItem;
