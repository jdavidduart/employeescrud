export default function InfoSection({ title, description }) {
  return (
    <div>
      <h6>{title}</h6>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
