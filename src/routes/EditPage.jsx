import { useParams } from 'react-router'
import EditForm from '../components/EditForm'

function EditPage() {

  let params = useParams();
    
  return <EditForm crewmateId={params.id}/>
}

export default EditPage
