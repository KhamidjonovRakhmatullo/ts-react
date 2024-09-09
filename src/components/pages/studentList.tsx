import { StudentListProps } from "../types/data";

const StudentList = (props: StudentListProps) => {
  return (
    <div>
      {props.name.map((value, key) => {
        return (
          <h1 key={key}>
            {value.first} {value.first}
          </h1>
        );
      })}
    </div>
  );
};

export default StudentList;
