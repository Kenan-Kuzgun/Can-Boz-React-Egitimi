import { instructorProps } from "./Propstype";

function Instructor(props: instructorProps) {
  return (
    <div>
      Eğitmen:
      {props.instructorNameLastName.firstName}{" "}
      {props.instructorNameLastName.lastName}
    </div>
  );
}

export default Instructor;
