export interface media{
    id:string,
    isVideo:boolean,
    mediaUrl:string,
}
export interface answear{
    id:string,
    order:number,
    text:string
}
export interface testQuestionFull{
    userId:string
    id:string,
    questionId:string,
    category:string,
    text:string,
    media:Array<media>|[],
    answear:Array<answear>,
    selectedAnswear:answear|null,
    correctAnswear:string
    points:number
}
export interface testQuestionFinished{
    correct:boolean
    question:testQuestionFull
}
export interface testResultData {
    questions:Array<testQuestionFinished>
    totalPoints:number
    percentage:number
    timeMinute:number
    timeSecond:number
    passed:boolean
}
export interface testQuestionLocalStorage{
    userId:string
    id:string,
    questionId:string,
    category:string,
    text:string,
    media:Array<media>|[],
    answear:Array<answear>,
    correctAnswear:string
    viewed:boolean
    learned:boolean
    learnedProbability:number
}

export interface CategoryInfo {
    name:string;
    points:number;
}
export interface CategorizedQuestions {
    [categoryId: string]: {
        categoryName: string;
        points:number;
        viewed: testQuestionLocalStorage[];
        notViewed: testQuestionLocalStorage[];
        learned: testQuestionLocalStorage[];
        notLearned: testQuestionLocalStorage[];
    };
}
