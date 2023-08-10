import Table from "react-bootstrap/Table";
import Button from "../Button/Button";

export default function CustomTable({ data, onEdit = () => null }) {
  const onClickEdit = (e) => {
    const currentUser = data.find(
      (user) => user.id.toString() === e.target.id.toString()
    );
    onEdit(currentUser);
  };
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Table heading</th>
          <th>Position title</th>
          <th>Date arrival</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((e, i) => (
          <tr key={i}>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.positionTitle}</td>
            <td>{e.hireDate}</td>
            <td>{e.status}</td>
            <td>
              {" "}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                }}
              >
                <a href={`/employeedetail/${e.id}`}>
                  <Button
                    icon={"bi bi-eye"}
                    variant="btn-outline-primary"
                    size="btn-sm"
                  />
                </a>
                <Button
                  icon={"bi bi-pencil"}
                  variant="btn-outline-secondary"
                  size="btn-sm"
                  id={e.id}
                  onClick={(ev) => onClickEdit(ev)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
