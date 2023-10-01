import Flex from "./layouts/Flex";
import Header from "./layouts/Header";
import Column from "./layouts/Column";
import Layout from "./layouts/Layout";
import { Patient } from "./types/patients";
import PatientList from "./components/PatientList";
import PatientForm from "./forms/PatientForm";
import { useEffect, useState } from "react";

const App = () => {
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [patients, setPatients] = useState<Array<Patient>>(
    JSON.parse(localStorage.getItem("patients") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const removePatient = (id: string) => {
    setPatients(patients.filter((record) => id !== record.id));
  };

  return (
    <Layout>
      <Header />
      <Flex>
        <Column size="w-full lg:w-1/4m xl:w-1/3">
          <PatientForm
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
        </Column>
        <Column size="w-full">
          <PatientList
            patients={patients}
            setPatient={setPatient}
            removePatient={removePatient}
          />
        </Column>
      </Flex>
    </Layout>
  );
};

export default App;
