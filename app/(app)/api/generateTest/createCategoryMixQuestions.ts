interface QuestionRecord {
    category: string;
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    learned: boolean;
    learned_probability: number;
    question: string;
    updated: string;
    user: string;
    viewed: boolean;
    expand: object;
}
function getRandomElement<T>(array: Array<QuestionRecord>):QuestionRecord{
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
export default function CreateCategoryMixQuestions<T>(arrayAll: Array<QuestionRecord>, arrayUnvisited: Array<QuestionRecord>, numEntries: number): Array<QuestionRecord> {
    const sorted:Array<QuestionRecord> = arrayAll
    sorted.sort((a, b) => a.learned_probability - b.learned_probability)
    let questionMix:Array<QuestionRecord> = []
    if(arrayUnvisited.length != 0){
        // There are questions that the user hasnt seen
        if(numEntries==1){
            //For zdravotnicka give user either one of unvisited or one of the least learned randomly
            if(Math.random()<0.5){
                const randomPosition = Math.random()
                questionMix.push(getRandomElement(arrayUnvisited))
            }else{
                questionMix.push(...sorted.splice(0,numEntries))
            }
        }else{
            const unvisitedToBePushed = Math.ceil(numEntries/2)
            const visitedToBePushed = Math.floor(numEntries/2)
            for (let i = 0; i<unvisitedToBePushed;i++){
                questionMix.push(getRandomElement(arrayUnvisited))
            }
            questionMix.push(...sorted.splice(0,visitedToBePushed))
        }
        }else{
        questionMix.push(...sorted.splice(0,numEntries))
    }
    return questionMix
}