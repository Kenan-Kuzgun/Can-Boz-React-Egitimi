import { instructorListProps } from "./Propstype";

function InstructorList(props: instructorListProps) {
  return (
    <div>
      Eğitmenler:
      {props.instructorListProp.map((item) => {
        return (
          <h3>
            {item.firstName}
            {item.lastName}
          </h3>
        );
      })}
    </div>
  );
}

export default InstructorList;
