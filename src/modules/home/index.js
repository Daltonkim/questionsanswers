import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizHolder from "../../components/quizholder";
import { questionaireActions } from "./redux/_actions";
import { v4 as uuidv4 } from 'uuid';
import { LoadingView } from "../../components/loader/Loading";
import PerfectScrollbar from "react-perfect-scrollbar";
import { QuestionDeleteAllButton } from '../../modules/modals/createdModals/questionDeleteAllButton';
import sort from '../../assets/images/sort.svg'
import Tooltip from "../../components/tooltip";

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

const perfectScrollbarOptions = {
    wheelSpeed: 2,
    wheelPropagation: false,
};

const Home = () => {

    //initial questions
    const intialQuestion = [
        {
            question: 'What year was the very first model of the iPhone released?',
            answer: '2007',
            uid: uuidv4() //unique identity
        },
        {
            question: 'Which email service is owned by Microsoft?',
            answer: 'Hotmail',
            uid: uuidv4() //unique identity
        },
        {
            question: 'What is the name of the man who launched eBay back in 1995?',
            answer: 'Pierre Omidyar',
            uid: uuidv4() //unique identity
        },
        {
            question: 'What was Twitter’s original name?',
            answer: 'twttr',
            uid: uuidv4() //unique identity
        }
    ]
    const [order, setOrder] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const dispatch = useDispatch()
    const { questions, loading } = useSelector((state) => state.questions);

    // sort questions
    const createSortHandler = property => event => {
        handleRequestSort(event, property);
    };


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    //get initial questions
    useEffect(() => {
        dispatch(questionaireActions.getAllQuestions(intialQuestion));
    }, [])

    return (
        <>
            {loading && <LoadingView />}

            <PerfectScrollbar
                options={perfectScrollbarOptions}
                className="navi navi-hover scroll"
                style={{ maxHeight: "95vh", height: '90vh', position: "relative", padding: '0' }}
            >
                <div className="app__question-actions-center">
                    <button onClick={createSortHandler("question")} className="app__question-actions-sort">
                        <img src={sort} style={{ width: '30px' }} alt="sort"></img>
                    </button>
                    <QuestionDeleteAllButton />
                </div>
                <div className="app__question">

                    {questions?.length === 0 &&
                        <p style={{ position: 'absolute', fontSize: '32px', top: '100%' }}>
                            No Questions Available
                            <Tooltip tip="Add questions on your own" />
                        </p>
                    }
                    {
                        questions && stableSort(questions, getSorting(order, orderBy)).map((item, i) => {
                            return (
                                <QuizHolder position={Number(i + 1)} key={i} id={item.uid} item={item} />
                            )
                        })
                    }
                </div>
            </PerfectScrollbar>
        </>
    )
}

export default Home;
