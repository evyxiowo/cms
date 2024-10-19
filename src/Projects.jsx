import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) return <p>Loading...</p>;

  return (
    <section style={{ padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Projects</h2>
        <hr style={{ width: '50%', margin: '1rem auto' }} />
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {projects.map((project) => {
            const { id, img, url, title } = project;
            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  width: '200px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={img}
                  alt={title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h5 style={{ margin: '0.5rem 0' }}>{title}</h5>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
