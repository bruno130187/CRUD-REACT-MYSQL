import React from "react";
import "./card.css";
import FormDialog from "../dialog/diaglogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        category={props.category}
        cost={props.cost}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card--container" onClick={() => setOpen(true)}>
        <p className="card--id" title="ID do Game">{props.id}</p>
        <p className="card--title">{props.name}</p>
        <p className="card--category">{props.category}</p>
        <h3 className="card--cost">R${props.cost.replaceAll('.',',')}</h3>
      </div>
    </>
  );
}