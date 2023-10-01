type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return (
    <div className="bg-red-600 text-white p-3 mt-3 rounded-md">
      <p>{message}</p>
    </div>
  );
};

export default Error;
