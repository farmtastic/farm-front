const LineDescript = () => {
  return (
    <div className="absolute left-16 bottom-2 p-1 flex items-center gap-6 text-xs ">
      <div className="flex items-center gap-1">
        <span className="inline-block w-8 h-1 rounded bg-[#ff6881]" />
        <span className="text-gray-200">임계값</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="inline-block w-8 h-1 rounded bg-[#58a6ff]" />
        <span className="text-gray-200">수위</span>
      </div>
    </div>
  );
};

export default LineDescript;
