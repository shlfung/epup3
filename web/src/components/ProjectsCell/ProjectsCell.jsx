import { Link, routes } from '@redwoodjs/router'
export const QUERY = gql`
  query ProjectsQuery {
    projects: projects {
      id
      title
      reb_num
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ projects }) => {
  return (
    /*     <ul>
      {projects.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul> */

    <>
      {projects.map((project) => (
        <project key={project.id}>
          <header>
            <h2>Hey {project.title}</h2>
          </header>
          <p>{project.reb_num}</p>
          <div>Posted at: {project.createdAt}</div>
        </project>
      ))}
    </>
  )
}
