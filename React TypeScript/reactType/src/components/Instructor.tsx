type instructorProps = {
  instructorNameLastName: {
    firstName: string;
    lastName: string;
  };
};

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
