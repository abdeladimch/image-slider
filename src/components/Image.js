const Image = ({ alt, url }) => {
  return (
    <div className="shadow-xl hover:scale-105 transition duration-300 ease-out absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4">
      <img
        src={url}
        alt={alt}
        className="w-[400px] md:w-[600px] max-h-[165px] md:max-h-[340px] object-cover rounded-lg"
      />
    </div>
  );
};

export default Image;
