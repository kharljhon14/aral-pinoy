export default function Partners() {
  return (
    <div className="bg-white rounded-xl lg:py-16 lg:px-24 p-8">
      <h2 className="font-bold text-3xl lg:text-4xl text-center mb-10">
        Our Trusted Partners in Education
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-around">
        <img
          className="w-24 h-24"
          src="deped.png"
          alt="Deped logo"
        />
        <img
          className="w-24 h-24"
          src="dict.png"
          alt="DICT logo"
        />
        <img
          className="w-24 h-24"
          src="tesda.png"
          alt="Tesda logo"
        />
      </div>
    </div>
  );
}
