import { useForm, Controller } from "react-hook-form";

const ContactInfo = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {/* Name Section */}
      <div>
        <label htmlFor="name">Name:</label>
      </div>
      <div>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
          rules={{ required: "Name is required" }} // Add required validation with an error message
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      {/* Email Section */}
      <div>
        <label htmlFor="email">Email:</label>
      </div>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} type="email" />}
          rules={{ required: "Email is required" }} // Add required validation with an error message
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
    </div>
  );
};

export default ContactInfo;
