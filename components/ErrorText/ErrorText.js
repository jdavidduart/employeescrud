import Form from "react-bootstrap/Form";
export default function ErrorText({ errors, name }) {
  return (
    <div>
      {errors[name] && (
        <Form.Text className="text-danger">{errors[name].message}</Form.Text>
      )}
    </div>
  );
}
