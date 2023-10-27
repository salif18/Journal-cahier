import Link from "next/link";
import React from "react";

const Cardjornal = ({ item }) => {
  return (
    <article className="card">
      <Link className="lien" href={`/jornals/${item.id}`}>
        <table className="table">
          <thead className="head">
            <tr className="head-ligne">
              <th>Date</th>
              <th>Horraires</th>
              <th>Classes</th>
              <th>Leson</th>
              <th>Observation</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="body-ligne">
              <th>{item.date}</th>
              <th>
                {item.debut} / {item.fin}
              </th>
              <th>{item.classe}</th>
              <th>{item.leson}</th>
              <th>{item.observation}</th>
            </tr>
          </tbody>
        </table>
      </Link>
    </article>
  );
};

export default Cardjornal;
