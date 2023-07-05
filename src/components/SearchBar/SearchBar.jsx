import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      input: '',
    },
  });

  const onSubmit = data => {
    const formattedInput = data.input.toLowerCase().trim();
    if (formattedInput === '') {
      toast.info('Request cannot be empty');
      return;
    }
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Search</button>
      <input type="text" {...register('input')} placeholder="Enter name" />
    </form>
  );
};

export default SearchBar;
