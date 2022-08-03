function UrlForm() {
  return (
    <div className="h-28 flex flex-col justify-center items-center m-auto space-y-3">
      <h2 className="text-xl">Enter a URL</h2>
      <input
        className="border-[1px] font-normal border-neutral-100 py-1 px-2 rounded-xl text-center drop-shadow-md"
        placeholder="URL..."
      />
      <button className="bg-[#046739] w-24 py-1.5 text-white rounded-lg drop-shadow-md hover:bg-[#153f2b] transition">
        Search
      </button>
    </div>
  );
}

export default UrlForm;
