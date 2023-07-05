import { useForm } from 'react-hook-form';

const SearchBar = ({ setNewSearchQuery }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      input: '',
    },
  });

  const onSubmit = data => {
    const formattedInput = data.input.toLowerCase().trim();
    setNewSearchQuery(formattedInput);
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
