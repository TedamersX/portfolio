export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Projet {params.id}</h1>
    </div>
  );
}