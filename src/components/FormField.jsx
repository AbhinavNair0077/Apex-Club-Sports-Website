import { Controller } from 'react-hook-form';

const FormField = ({ 
  name, 
  control, 
  component: Component, 
  rules, 
  ...props 
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Component
          {...field}
          {...props}
          error={error?.message}
        />
      )}
    />
  );
};

export default FormField;
