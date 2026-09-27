export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-white">
      <div className="container-site flex flex-col items-center justify-between gap-1 py-2 text-center text-[13px] leading-relaxed sm:flex-row sm:text-left">
        <p>
          Cashless insurance now accepted —{" "}
          <a href="#contact" className="text-teal hover:underline">
            register as an insured patient here &gt;&gt;
          </a>
        </p>
        <p className="hidden md:block">
          New patients: book a 30-minute initial assessment for ₹499 &gt;&gt;
        </p>
      </div>
    </div>
  );
}
