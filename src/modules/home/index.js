import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizHolder from "../../components/quizholder";
import { questionaireActions } from "./redux/_actions";
import { v4 as uuidv4 } from 'uuid';
import { LoadingView } from "../../components/loader/Loading";
import { QuestionDeleteAllButton } from "../modals/createdModals/questionDeleteAllButton";
import { AddButton } from "../modals/createdModals/addButton";

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
    return order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
}


const Home = () => {

    //initial questions
    const intialQuestion =
    {
        question: 'How to add a question',
        answer: 'By following the below',
        uid: uuidv4() //unique identity
    }
    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()
    const [isDisabled, setDisabled] = useState(true)
    const [order, setOrder] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const dispatch = useDispatch()
    const { questions, loading } = useSelector((state) => state.questions);

    // sort questions
    const createSortHandler = property => event => {
        console.log(property)
        handleRequestSort(event, property);
    };


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

  
    useEffect(() => {
        dispatch(questionaireActions.getAllQuestions(intialQuestion));
    }, [])

    //add questions
    const addQuestion = () => {
        if ((answer !== undefined) && (question !== undefined)) {
            console.log(answer, question)
            const obj = {
                question: question,
                answer: answer,
                uid: uuidv4()
            }
            dispatch(questionaireActions.addQuestion(obj));

            setAnswer('')
            setQuestion('')
        }
    }

    return (
        <div className="app__question">
            {loading && <LoadingView/>}
            {
                stableSort(questions, getSorting(order, orderBy)).map((item, i) => {
                    return (
                        <QuizHolder key={i} id={item.uid} item={item} />
                    )
                })
            }
            <div className="app__question-actions">
                <span><button onClick={createSortHandler("question")} className="app__question-actions-sort">Sort questions</button></span><span><QuestionDeleteAllButton questions={questions}/></span>
            </div>
            <AddButton/>
        </div>
    )
}

export default Home;
