import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";
import { useFormAddOrEdit } from "./hook";
import styles from "./Form.module.css";
export default function FormAddOrEdit({
  employeeToEdit,
  onCancel = () => null,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: employeeToEdit?.firstName,
      middleName: employeeToEdit?.middleName,
      lastName: employeeToEdit?.lastName,
      locationCity: employeeToEdit?.locationCity,
      address: employeeToEdit?.address,
      dateBirth: employeeToEdit?.dateBirth,
      telephone: employeeToEdit?.telephone,
      positionTitle: employeeToEdit?.positionTitle,
      hireDate: employeeToEdit?.hireDate,
      email: employeeToEdit?.email,
      salary: employeeToEdit?.salary,
      timeInPosition: employeeToEdit?.timeInPosition,
      status: employeeToEdit?.status,
      id: employeeToEdit?.id,
    },
  });
  const { onSubmit } = useFormAddOrEdit(employeeToEdit, onCancel);
  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Form.Group className={styles.form_fields_wrap}>
        <div>
          <Form.Label>First name</Form.Label>
          <Form.Control
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[a-z ,.'-]+$/,
                message: "Only letters are allowed",
              },
            })}
            type="text"
            placeholder="John"
            maxLength={20}
          />
          <ErrorText name={"firstName"} errors={errors} />
          <Form.Label className="mt-3">Middle name</Form.Label>
          <Form.Control
            {...register("middleName", {
              required: "Middle name is required",
              pattern: {
                value: /^[a-z ,.'-]+$/,
                message: "Only letters are allowed",
              },
            })}
            type="text"
            placeholder="Robert"
            maxLength={20}
          />
          <ErrorText name={"middleName"} errors={errors} />
          <Form.Label className="mt-3">Last name</Form.Label>
          <Form.Control
            {...register("lastName", {
              required: "Last name is required",
              pattern: {
                value: /^[a-z ,.'-]+$/,
                message: "Only letters are allowed",
              },
            })}
            type="text"
            placeholder="Doe"
            maxLength={20}
          />
          <ErrorText name={"lastName"} errors={errors} />
          <Form.Label className="mt-3">Location/City</Form.Label>
          <Form.Control
            {...register("locationCity", {
              required: "City is required",
              maxLength: 20,
            })}
            type="text"
            placeholder="New York"
            maxLength={40}
          />
          <ErrorText name={"locationCity"} errors={errors} />
          <Form.Label className="mt-3">Address</Form.Label>
          <Form.Control
            {...register("address", {
              required: "Address is required",
              maxLength: 20,
              pattern: {
                value: /^(\d{1,}) [a-zA-Z0-9\s]+(,)?/,
                message: "Invalid address",
              },
            })}
            type="text"
            placeholder="123 Main St"
            maxLength={60}
          />
          <ErrorText name={"address"} errors={errors} />
          <Form.Label className="mt-3">Date of birth</Form.Label>
          <Form.Control
            {...register("dateBirth", {
              required: "Date of birth is required",
              maxLength: 20,
            })}
            type="date"
          />
          <ErrorText name={"dateBirth"} errors={errors} />
          <Form.Label className="mt-3">Telephone</Form.Label>
          <Form.Control
            {...register("telephone", {
              required: "Phone number is required",
              maxLength: 20,
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: "Invalid phone number",
              },
            })}
            type="text"
            placeholder="555-123-4567"
            maxLength={12}
          />
          <ErrorText name={"telephone"} errors={errors} />
        </div>
        <div className={styles.secondary_section}>
          <Form.Label>Position/Title</Form.Label>
          <Form.Control
            {...register("positionTitle", {
              required: "Position is required",
            })}
            type="text"
            placeholder="Software Engineer"
            maxLength={60}
          />
          <ErrorText name={"positionTitle"} errors={errors} />
          <Form.Label className="mt-3">Hire date</Form.Label>
          <Form.Control
            {...register("hireDate", {
              required: "Hire date is required",
            })}
            type="date"
          />
          <ErrorText name={"hireDate"} errors={errors} />
          <Form.Label className="mt-3">Email address</Form.Label>
          <Form.Control
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="john.doe@example.com"
            maxLength={80}
          />
          <ErrorText name={"email"} errors={errors} />
          <Form.Label className="mt-3">Salary</Form.Label>
          <Form.Control
            {...register("salary", {
              required: "Salary is required",
            })}
            type="number"
            placeholder="90000"
            maxLength={20}
          />
          <ErrorText name={"salary"} errors={errors} />
          <Form.Label className="mt-3">Role duration</Form.Label>
          <Form.Control
            {...register("timeInPosition", {
              required: "Role duration is required",
            })}
            type="text"
            placeholder="4 years"
            maxLength={30}
          />
          <ErrorText name={"timeInPosition"} errors={errors} />
          <Form.Label className="mt-3">Status</Form.Label>
          <Form.Select
            {...register("status", {
              required: "Status is required",
            })}
          >
            <option value=""></option>
            <option value="Active">Active</option>
            <option value="Idle">Idle</option>
          </Form.Select>
          <ErrorText name={"status"} errors={errors} />
        </div>
      </Form.Group>
      <div className={styles.footer_container}>
        <Button type="button" variant="secondary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Save changes
        </Button>
      </div>
    </Form>
  );
}
