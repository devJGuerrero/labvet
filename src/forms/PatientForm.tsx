import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Patient } from "../types/patients";
import Error from "../components/Error";

type Props = {
  patient: Patient;
  setPatient: Dispatch<SetStateAction<Patient>>;
  patients: Array<Patient>;
  setPatients: Dispatch<SetStateAction<Array<Patient>>>;
};

const PatientForm = ({ patients, setPatients, patient, setPatient }: Props) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    if (patient?.id) {
      setError({
        status: false,
        message: "",
      });
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDepartureDate(patient.departureDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if ([name, owner, email, departureDate, symptoms].includes("")) {
      setError({
        status: true,
        message: "All fields are required",
      });
      return;
    }
    setError({
      status: false,
      message: "",
    });
    const data = {
      name,
      owner,
      email,
      departureDate,
      symptoms,
    };
    if (!patient?.id) {
      setPatients([...patients, { id: generateId(), ...data }]);
    } else {
      const keyPatient = patients.find((record) => patient.id === record.id);
      if (keyPatient?.id) {
        setPatients(
          patients.map((record) =>
            keyPatient?.id !== record.id ? record : { ...record, ...data }
          )
        );
      }
    }
    setPatient({} as Patient);
    setName("");
    setOwner("");
    setEmail("");
    setDepartureDate("");
    setSymptoms("");
  };

  return (
    <div className="container lg:pr-5">
      <h1 className="text-xl">Formulario de Pacientes</h1>
      <p className="text-sm">Agregar/Modificar</p>
      {error.status && <Error message={error.message} />}
      <form
        className="bg-white shadow-md rounded-md p-5 mt-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="block">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 rounded-md w-full p-1 mt-1 outline-none"
            placeholder="¿Cual es el nombre de la mascota?"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="owner" className="block">
            Propietario
          </label>
          <input
            type="text"
            id="owner"
            name="owner"
            className="border-2 rounded-md w-full p-1 mt-1 outline-none"
            placeholder="¿Cual es el nombre del propietario?"
            value={owner}
            onChange={(event) => setOwner(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 rounded-md w-full p-1 mt-1 outline-none"
            placeholder="E-mail - Correo electrónico"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departureDate" className="block">
            Fecha de salida
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            className="border-2 rounded-md w-full p-1 mt-1 outline-none"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="symptoms" className="block">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            className="border-2 rounded-md w-full p-1 mt-1 outline-none"
            placeholder="¿Cuales son los síntomas que estas presentado las mascota?"
            value={symptoms}
            onChange={(event) => setSymptoms(event.target.value)}
          />
        </div>
        <input
          type="submit"
          value={!patient?.id ? "Agregar" : "Editar"}
          className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white w-full p-2 rounded-md transition-all"
        />
      </form>
    </div>
  );
};

export default PatientForm;
