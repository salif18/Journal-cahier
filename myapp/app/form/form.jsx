"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Form() {
  const router = useRouter();
  const [journal, setJournal] = useState({
    date: "",
    debut: "",
    fin: "",
    classe: "",
    leson: "",
    observation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJournal({ ...journal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/journals", journal, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        res.data;
        router.refresh();
        router.push("/jornals");
      })
      .catch((err) => console.error(err));

    setJournal({
      date: "",
      debut: "",
      fin: "",
      classe: "",
      leson: "",
      observation: "",
    });
  };

  return (
    <>
    <form className="field" onSubmit={handleSubmit}>
    <section>
      <label>
        <span>Dates</span>
        <input
          type="date"
          name="date"
          value={journal.date}
          onChange={handleChange}
        />
      </label>
      
       
        <label className="labe">
          <span>Début horraire</span>
          <input
            type="time"
            name="debut"
            value={journal.debut}
            onChange={handleChange}
          />
          <span>Fin horraire</span>
          <input
            type="time"
            name="fin"
            value={journal.fin}
            onChange={handleChange}
          />
        </label>
    </section>
    <section>
      <label>
        <span>Classes</span>
        <input
          type="text"
          name="classe"
          value={journal.classe}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Lecon</span>
        <input
          type="text"
          name="leson"
          value={journal.leson}
          onChange={handleChange}
        />
      </label>
      <label>
      <span>Observation</span>
        <select
          name="observation"
          value={journal.observation}
          onChange={handleChange}
        >
          <option value=" ">Statut--observation</option>
          <option value="observé">Observé</option>
          <option value="non-observé">Non Observé</option>
        </select>
      </label>
      </section>
      
    </form>
    <section className="section-btn">
        <button className="btn">Add Lecon..</button>
      </section>
      </>
  );
}
