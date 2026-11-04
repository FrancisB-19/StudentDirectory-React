import HeaderContainer from "../components/HeaderContainer";
import FormContainer from "../components/FormContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
    const  students = [
        { id: 1, srcode: "12-12341", name: "John Mark", program: "BSIT" },
        { id: 2, srcode: "12-12341", name: "John Jeremy", program: "BSIT" },
        { id: 3, srcode: "12-12341", name: "John Rey", program: "BSIT" },
    ]
    return(
        <>
       <HeaderContainer />
       <FormContainer /> 
       <ListContainer data={students} />

        </>
    )
}

export default StudentPage;