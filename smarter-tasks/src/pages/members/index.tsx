import ProjectList from "./MemberList";
import NewProject from "./NewMember";
const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewProject />
      </div>
      <ProjectList />
    </>
  )
}
export default Members;