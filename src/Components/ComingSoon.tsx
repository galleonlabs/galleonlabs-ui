const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 bg-theme-champagne  bg-opacity-60  text-theme-pan-navy">
      <h1 className="text-4xl font-semibold text-theme-text-pan-navy mb-4">
        Coming Soon
      </h1>
      <p className="text-center mb-8">
        We're working hard to bring you this feature. Stay tuned!
      </p>
      <div className="bg-theme-layer-light p-6 rounded-lg shadow-md">
        <p className="text-sm">
          In the meantime, check out our <a href="/" className="text-theme-pan-sky">Trading Tools</a> page.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
