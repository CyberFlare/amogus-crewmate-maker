import { useParams } from 'react-router'

function DetailsPage() {
  const params = useParams()

  return <h1>Details for crewmate {params.id}</h1>
}

export default DetailsPage
