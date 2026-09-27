export default function NoticeBar() {
  return (
    <div className="bg-mist">
      <p className="container-site py-4 text-center text-sm leading-relaxed text-body">
        For patients with health insurance, please{" "}
        <a href="#contact" className="link-teal">
          register online as an insured patient
        </a>{" "}
        — we are unable to arrange cover over the phone.
      </p>
    </div>
  );
}
