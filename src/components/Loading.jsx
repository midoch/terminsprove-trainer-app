const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://i.gifer.com/XOsX.gif"
        alt="Loading animation"
        className="w-48 h-48 mb-4"
      />
      <p className="text-black">Loading...</p>
    </div>
  );
};

export default Loading;
